// Validate the site data (SPECIFICATION.md §5).
// Part 1 (B-17): JSON Schema checks for every data file.
// Part 2 (B-20): cross-file rules. Exit code 1 if any rule fails; warnings never fail.
// Usage: node scripts/validate.mjs
import { existsSync, readFileSync } from "node:fs";
import { loadSchema, validate } from "./lib/schema.mjs";

const FILES = ["sources", "chemistries", "passports", "supply-chain", "assurance"];
const data = {};
const results = []; // [check, status, detail]
const fail = (check, detail) => results.push([check, "FAIL", detail]);
const pass = (check, detail = "") => results.push([check, "pass", detail]);
const warnings = [];

// ---------- Part 1: schemas
for (const name of FILES) {
  const p = `data/${name}.json`;
  if (!existsSync(p)) { fail(`schema: ${name}`, "file missing"); continue; }
  data[name] = JSON.parse(readFileSync(p, "utf8"));
  const ctx = loadSchema(`data/schema/${name}.schema.json`);
  const errs = validate(data[name], ctx.root, ctx);
  errs.length ? fail(`schema: ${name}`, `${errs.length} error(s): ${errs.slice(0, 3).join("; ")}`) : pass(`schema: ${name}`);
}

const sources = new Map((data.sources?.items || []).map((s) => [s.id, s]));
const nodes = data["supply-chain"]?.nodes || [];
const edges = data["supply-chain"]?.edges || [];
const passports = data.passports?.items || [];
const chems = data.chemistries?.items || [];
const assurance = data.assurance?.items || [];

// Collect every claim / risk / flag with a location label.
const claims = [], risks = [], flags = [], used = new Set();
const useSrc = (ids, where, bad) => ids.forEach((id) => { used.add(id); if (!sources.has(id)) bad.push(`${where} → ${id}`); });
chems.forEach((c) => c.use_cases.forEach((u) => u.values.forEach((v) => claims.push([`chemistries/${c.id}/${u.use_case}`, v, u]))));
passports.forEach((p) => p.values.forEach((v) => claims.push([`passports/${p.chemistry}/${p.field_id}`, v, p])));
nodes.forEach((n) => {
  n.values.forEach((v) => claims.push([`node/${n.id}`, v, n]));
  n.ethical_risks.forEach((r) => risks.push([`node/${n.id}`, r, n]));
  n.flags.forEach((f) => flags.push([`node/${n.id}`, f, n]));
});
edges.forEach((e, i) => (e.values || []).forEach((v) => claims.push([`edge/${i}`, v, e])));

// ---------- Rule 2: every source id resolves; no orphans
{
  const bad = [];
  claims.forEach(([w, v]) => useSrc(v.sources, w, bad));
  risks.forEach(([w, r]) => useSrc(r.sources, w, bad));
  flags.forEach(([w, f]) => useSrc([f.source, ...(f.corroborated_by || [])], w, bad));
  nodes.forEach((n) => n.policy.forEach((p) => useSrc(p.sources, `node/${n.id}/policy`, bad)));
  assurance.forEach((a) => useSrc(a.sources, `assurance/${a.id}`, bad));
  bad.length ? fail("2a source ids resolve", `${bad.length} unresolved: ${bad.slice(0, 5).join(", ")}`) : pass("2a source ids resolve");
  const orphans = [...sources.keys()].filter((id) => !used.has(id));
  orphans.length ? fail("2b no orphan sources", `${orphans.length}: ${orphans.join(", ")}`) : pass("2b no orphan sources", `${sources.size} sources`);
}

// ---------- Rule 3: nodes complete, ≥1 ethical risk
{
  const bad = nodes.filter((n) => !n.confidence || !n.confidence_reason || !n.as_of || n.ethical_risks.length === 0).map((n) => n.id);
  bad.length ? fail("3 nodes complete", bad.join(", ")) : pass("3 nodes complete", `${nodes.length} nodes`);
}

// ---------- Rules 4–5: Sayari gate and corroboration
const isSayari = (v) => v.tag === "S-REG" || v.tag === "S-TRADE";
const sayariOnly = (v) => v.sources.every((id) => (sources.get(id)?.publisher || "") === "Sayari");
{
  const bad4 = [], bad5 = [];
  nodes.forEach((n) => {
    if (!n.values.some(isSayari) || n.confidence === "Low" || n.confidence === "Unknown") return;
    const ac = n.artefact_check;
    if (!ac || !ac.done || ac.pattern_matched) bad4.push(n.id);
    if (n.confidence === "High" && !n.values.some((v) => !isSayari(v) && !sayariOnly(v))) bad5.push(n.id);
  });
  bad4.length ? fail("4 Sayari artefact gate", bad4.join(", ")) : pass("4 Sayari artefact gate");
  bad5.length ? fail("5 Sayari High needs public corroboration", bad5.join(", ")) : pass("5 Sayari High needs public corroboration");
}

// ---------- Rule 6: aggregation rule for database forced-labour flags
{
  const bad = flags.filter(([, f]) => f.type === "forced-labour" && !f.official_list && f.aggregate !== true && !(f.corroborated_by || []).length).map(([w]) => w);
  bad.length ? fail("6 forced-labour flags aggregate", bad.join(", ")) : pass("6 forced-labour flags aggregate");
}

// ---------- Rule 7: documented harm has sources
{
  const bad = risks.filter(([, r]) => r.signal === "documented-harm" && r.sources.length === 0).map(([w]) => w);
  bad.length ? fail("7 documented harm has sources", bad.join(", ")) : pass("7 documented harm has sources", `${risks.length} risk entries`);
}

// ---------- Rule 8: conflicts
{
  const reg = existsSync("research/conflicts.md") ? readFileSync("research/conflicts.md", "utf8") : "";
  const ids = new Set([...reg.matchAll(/\|\s*([CRS]-\d{2})\s*\|/g)].map((m) => m[1]));
  const bad = [];
  passports.filter((p) => p.conflict).forEach((p) => {
    if (p.values.length < 2) bad.push(`${p.chemistry}/${p.field_id}: <2 claims`);
    if (!ids.has(p.conflict_id)) bad.push(`${p.chemistry}/${p.field_id}: ${p.conflict_id} not in register`);
  });
  nodes.forEach((n) => (n.conflict_ids || []).forEach((c) => { if (!ids.has(c)) bad.push(`${n.id}: ${c} not in register`); }));
  bad.length ? fail("8 conflicts registered", bad.join("; ")) : pass("8 conflicts registered", `${ids.size} register ids`);
}

// ---------- Rule 9: EU DD coverage matches the material (Annex X)
const COV = { cobalt: "covered", lithium: "covered", nickel: "covered", "natural graphite": "covered", "synthetic graphite": "unclear", graphite: "unclear",
  manganese: "not-covered", phosphate: "not-covered", iron: "not-covered", vanadium: "not-covered", copper: "not-covered", aluminium: "not-covered",
  "sulphuric acid": "not-covered", "rare earths": "not-covered", carbon: "not-applicable", processing: "not-applicable", mixed: "unclear" };
{
  const bad = risks.filter(([, r]) => r.material && COV[r.material] && COV[r.material] !== r.eu_dd_coverage).map(([w, r]) => `${w} (${r.material}: ${r.eu_dd_coverage})`);
  const unknown = risks.filter(([, r]) => r.material && !COV[r.material]).map(([w, r]) => `${w} (${r.material})`);
  if (unknown.length) warnings.push(`Materials not in coverage map: ${unknown.join(", ")}`);
  bad.length ? fail("9 EU DD coverage consistent", bad.join(", ")) : pass("9 EU DD coverage consistent");
}

// ---------- Rule 10: policy items day-precision (also enforced by schema)
{
  const bad = nodes.flatMap((n) => n.policy.filter((p) => !/^\d{4}-\d{2}-\d{2}$/.test(p.as_of)).map(() => n.id));
  bad.length ? fail("10 policy dates", bad.join(", ")) : pass("10 policy dates");
}

// ---------- Rule 11: research notes exist
{
  const paths = [...sources.values()].map((s) => s.research_note)
    .concat(nodes.map((n) => n.research_note).filter(Boolean), chems.map((c) => c.research_note).filter(Boolean));
  const bad = [...new Set(paths)].filter((p) => !existsSync(p));
  bad.length ? fail("11 research notes exist", bad.join(", ")) : pass("11 research notes exist", `${new Set(paths).size} notes`);
}

// ---------- Warnings
{
  const now = new Date();
  const old = (d) => (now - new Date(d.length === 7 ? `${d}-01` : d)) / 864e5 > 92;
  const stale = nodes.filter((n) => old(n.as_of)).length;
  if (stale) warnings.push(`${stale} node(s) with as_of older than 3 months`);
  const STAGES = ["S0", "S1", "S2", "S3", "S4", "S5"];
  chems.filter((c) => c.passport_type === "full").forEach((c) => {
    const missing = STAGES.filter((s) => !nodes.some((n) => n.stage === s && n.chemistries.includes(c.id)));
    if (missing.length) warnings.push(`${c.id}: no node at ${missing.join(", ")}`);
  });
  claims.filter(([, v, owner]) => owner.confidence === "Medium" && v.tier === "T3" && owner.values?.every((x) => x.tier === "T3"))
    .forEach(([w]) => warnings.push(`${w}: T3-only claims scored Medium`));
  const inf = [...chems.flatMap((c) => c.use_cases), ...passports].filter((o) => o.confidence === "Medium" && o.values.some((v) => v.tag === "INF") && !/^Reading of grade-A text/.test(o.confidence_reason));
  inf.forEach((o) => warnings.push(`Medium INF without 'Reading of grade-A text': ${o.use_case || o.field_id}`));
  // Consistency: same source set + signal + material should get the same confidence across chemistries.
  const seen = new Map();
  risks.forEach(([w, r]) => {
    const key = `${[...r.sources].sort().join("+")}|${r.signal}|${r.material}|${r.category}`;
    if (!r.sources.length) return;
    if (seen.has(key) && seen.get(key)[1] !== r.confidence) warnings.push(`Inconsistent confidence for same evidence: ${seen.get(key)[0]} vs ${w}`);
    else seen.set(key, [w, r.confidence]);
  });
}

console.log("\n| Check | Result | Detail |\n|---|---|---|");
results.forEach((r) => console.log(`| ${r.join(" | ")} |`));
if (warnings.length) { console.log("\n**Warnings (non-blocking)**"); warnings.forEach((w) => console.log(`- ${w}`)); }
process.exit(results.some((r) => r[1] === "FAIL") ? 1 : 0);
