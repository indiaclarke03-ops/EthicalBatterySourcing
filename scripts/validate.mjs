// Validate data/*.json against data/schema/*.schema.json (B-17).
// Cross-file rules (sources, artefact checks, aggregation, coverage) are added in B-20.
// Usage: node scripts/validate.mjs
import { existsSync, readFileSync } from "node:fs";
import { loadSchema, validate } from "./lib/schema.mjs";

const FILES = ["sources", "chemistries", "passports", "supply-chain", "assurance"];
let failed = 0;
const rows = [];

for (const name of FILES) {
  const dataPath = `data/${name}.json`;
  if (!existsSync(dataPath)) {
    rows.push([name, "skipped (no file yet)", ""]);
    continue;
  }
  const ctx = loadSchema(`data/schema/${name}.schema.json`);
  const errors = validate(JSON.parse(readFileSync(dataPath, "utf8")), ctx.root, ctx);
  rows.push([name, errors.length ? "FAIL" : "pass", errors.length ? `${errors.length} error(s)` : ""]);
  if (errors.length) {
    failed += errors.length;
    errors.slice(0, 50).forEach((e) => console.error(`  ${name}: ${e}`));
  }
}

console.log("\n| File | Schema check | Detail |\n|---|---|---|");
rows.forEach((r) => console.log(`| ${r.join(" | ")} |`));
process.exit(failed ? 1 : 0);
