// Passport with Gaps — shared helpers (ES module). No dependencies; the site makes no external API calls.
export const STAGES = ["S0", "S1", "S2", "S3", "S4", "S5"];
export const STAGE_LABEL = {
  S0: "Ore & feedstock", S1: "Refining & chemicals", S2: "Active materials & components",
  S3: "Cell or stack", S4: "Pack & system", S5: "Deployment", CAP: "Capital", OWN: "Ownership",
};
export const SIGNAL = {
  "documented-harm": { label: "Documented harm", icon: "●", rank: 4 },
  "screening-flag": { label: "Screening flag", icon: "◆", rank: 3 },
  structural: { label: "Structural risk", icon: "▲", rank: 2 },
  "no-known-evidence": { label: "No known evidence", icon: "○", rank: 1 },
};
export const RISK_LABEL = {
  HR: "Human rights", "LR-FL": "Forced labour", "LR-CL": "Child labour", "LR-DIS": "Discrimination",
  "LR-TU": "Trade-union freedoms", OHS: "Occupational health & safety", COM: "Community & Indigenous rights",
  "ENV-W": "Water", "ENV-S": "Soil, land & tailings", "ENV-A": "Air", "ENV-B": "Biodiversity", HH: "Human health",
};
export const COVERAGE = {
  covered: "EU DD: covered", "not-covered": "EU DD: not covered", unclear: "EU DD: unclear", "not-applicable": "EU DD: n/a",
};
export const ASSURANCE = {
  "irma-audit": "IRMA audit", "rmi-rmap-conformant": "RMI/RMAP list", "other-scheme": "Other scheme",
  "self-assessment": "Company self-assessment only", "none-known": "No assurance known",
};

const NAV = [
  ["index.html", "Passports"], ["scorecard.html", "Scorecard"], ["supply-chain.html", "Supply chain"],
  ["compare.html", "Compare"], ["methods.html", "Methods"],
];

export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let cache;
export async function loadData() {
  if (cache) return cache;
  const names = ["chemistries", "passports", "supply-chain", "sources", "assurance"];
  const files = await Promise.all(names.map((n) => fetch(`data/${n}.json`).then((r) => {
    if (!r.ok) throw new Error(`Could not load data/${n}.json`);
    return r.json();
  })));
  const [chemistries, passports, chain, sources, assurance] = files;
  cache = {
    chemistries: chemistries.items,
    chemById: Object.fromEntries(chemistries.items.map((c) => [c.id, c])),
    passports: passports.items,
    nodes: chain.nodes,
    nodeById: Object.fromEntries(chain.nodes.map((n) => [n.id, n])),
    edges: chain.edges,
    sources: Object.fromEntries(sources.items.map((s) => [s.id, s])),
    assurance: assurance.items,
    asOf: chain.as_of,
  };
  return cache;
}

export function shell(active) {
  const header = document.createElement("div");
  header.innerHTML = `
    <a class="sr-only" href="#main">Skip to content</a>
    <div class="banner" role="note"><div class="wrap"><strong>Illustrative.</strong> Mock passports built from public and licensed research.
      Not real product passports; no statement about any company's compliance. Not legal or investment advice.</div></div>
    <header class="site-header"><div class="wrap">
      <a class="brand" href="index.html">Passport with Gaps</a>
      <nav class="nav" aria-label="Main">${NAV.map(([href, label]) =>
        `<a href="${href}"${href === active ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav>
      <button class="theme-toggle" type="button" aria-label="Toggle colour theme">Theme</button>
    </div></header>`;
  document.body.prepend(header);
  const btn = header.querySelector(".theme-toggle");
  const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
  if (saved) document.documentElement.dataset.theme = saved;
  btn.addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme
      ? document.documentElement.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
  });
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `<div class="wrap">Data as of <span data-asof></span>. Every value links to its source; see
    <a href="methods.html">Methods</a> for tiers, tags and confidence. Built by India Clarke with Claude Code.</div>`;
  document.body.append(footer);
}

export const confBadge = (c) => `<span class="badge conf-${esc(c)}" title="Confidence">${esc(c)}</span>`;
export const tierBadge = (t) => (t ? `<span class="badge tier" title="Evidence tier">${esc(t)}</span>` : "");
export const tagBadge = (t) => `<span class="badge tag" title="Provenance tag">${esc(t)}</span>`;
export const signalLabel = (s) => `<span class="sig sig-${esc(s)}">${SIGNAL[s].icon} ${esc(SIGNAL[s].label)}</span>`;
export const covLabel = (c) => `<span class="cov cov-${esc(c)}">${esc(COVERAGE[c] || c)}</span>`;

export function sourceLinks(ids, data) {
  if (!ids?.length) return "";
  return `<ul class="sources">${ids.map((id) => {
    const s = data.sources[id];
    if (!s) return `<li>${esc(id)}</li>`;
    const label = `${esc(s.publisher)}: ${esc(s.title)}`;
    const meta = ` <span class="muted">(${esc(s.tier || "—")}, ${esc(s.tag)}${s.access !== "public" ? ", " + esc(s.access) : ""})</span>`;
    return `<li>${s.url ? `<a href="${esc(s.url)}" rel="noopener">${label}</a>` : label}${meta}</li>`;
  }).join("")}</ul>`;
}

export function riskItem(r, data) {
  return `<li class="${esc(r.signal)}">
    <div class="chips">${signalLabel(r.signal)} <span class="badge tag">${esc(r.category)}</span>
      <span class="small muted">${esc(RISK_LABEL[r.category] || "")}</span> ${confBadge(r.confidence)} ${covLabel(r.eu_dd_coverage)}</div>
    <div>${esc(r.evidence)}</div>
    <div class="small muted">Assurance: ${esc(ASSURANCE[r.assurance] || r.assurance)}${r.assurance_detail ? " — " + esc(r.assurance_detail) : ""}
      · Confidence reason: ${esc(r.confidence_reason)}</div>
    ${sourceLinks(r.sources, data)}
  </li>`;
}

export const param = (k) => new URLSearchParams(location.search).get(k);
export function setAsOf(data) { document.querySelectorAll("[data-asof]").forEach((el) => (el.textContent = data.asOf)); }
export function fail(err) {
  const main = document.querySelector("main");
  main.insertAdjacentHTML("afterbegin", `<p class="card" role="alert">Couldn't load the data (${esc(err.message)}).
    If you opened this file directly, serve the folder over HTTP instead (e.g. <code>python3 -m http.server</code>).</p>`);
}
