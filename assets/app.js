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

// Detail panel (B-23): one <dialog> shared by passport fields and supply-chain nodes, with Details and Ethical sourcing tabs.
const valueBlock = (v, data) => `<div class="val${v.superseded ? " superseded" : ""}">
  <div>${esc(v.claim)}${v.superseded ? ' <span class="small muted">(superseded)</span>' : ""}</div>
  <div class="chips">${tierBadge(v.tier)} ${tagBadge(v.tag)} <span class="small muted">as of ${esc(v.as_of)}</span></div>
  ${sourceLinks(v.sources, data)}</div>`;

function risksByNode(nodes, data) {
  const withRisks = nodes.filter((n) => n.ethical_risks?.length);
  if (!withRisks.length) return `<p class="muted">No ethical-sourcing risks recorded.</p>`;
  return withRisks.map((n) => `<h4>${esc(n.stage)} · ${esc(n.name)}</h4>
    <ul class="risk-list">${[...n.ethical_risks].sort((a, b) => SIGNAL[b.signal].rank - SIGNAL[a.signal].rank)
      .map((r) => riskItem(r, data)).join("")}</ul>`).join("");
}

function ensureDialog() {
  let dlg = document.getElementById("detail");
  if (dlg) return dlg;
  dlg = document.createElement("dialog");
  dlg.id = "detail";
  dlg.className = "detail";
  dlg.setAttribute("aria-labelledby", "detail-title");
  document.body.append(dlg);
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  return dlg;
}

function renderDialog({ title, subtitle, details, ethical, tab = "details" }) {
  const dlg = ensureDialog();
  dlg.innerHTML = `<div class="detail-inner">
    <div class="detail-head"><div><h2 id="detail-title">${title}</h2>${subtitle ? `<p class="small muted">${subtitle}</p>` : ""}</div>
      <button type="button" class="detail-close" aria-label="Close">✕</button></div>
    <div role="tablist" class="tabs" aria-label="Detail sections">
      <button role="tab" id="tab-details" aria-controls="pane-details">Details</button>
      <button role="tab" id="tab-ethical" aria-controls="pane-ethical">Ethical sourcing</button>
    </div>
    <div role="tabpanel" id="pane-details" aria-labelledby="tab-details" tabindex="0">${details}</div>
    <div role="tabpanel" id="pane-ethical" aria-labelledby="tab-ethical" tabindex="0">${ethical}</div>
  </div>`;
  const tabs = [...dlg.querySelectorAll('[role="tab"]')];
  const select = (name) => tabs.forEach((t) => {
    const on = t.id === `tab-${name}`;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    dlg.querySelector(`#${t.getAttribute("aria-controls")}`).hidden = !on;
  });
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t.id.slice(4)));
    t.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      next.focus(); select(next.id.slice(4));
    });
  });
  dlg.querySelector(".detail-close").addEventListener("click", () => dlg.close());
  select(tab);
  if (!dlg.open) dlg.showModal();
}

export function openFieldDetail(field, chem, data, tab) {
  const nodes = data.nodes.filter((n) => n.chemistries.includes(chem.id));
  const vals = field.values.length
    ? `<div class="${field.values.length > 1 ? "conflict-row" : ""}">${field.values.map((v) => valueBlock(v, data)).join("")}</div>`
    : `<p class="muted">${field.status === "deferred" ? "Empty at launch." : field.applies ? "No public value for an illustrative product." : "Not applicable."}</p>`;
  renderDialog({
    title: `${esc(field.field_label)} <span class="muted">#${esc(field.guidance_no)}</span>`,
    subtitle: `${esc(chem.short)} passport · ${esc(field.status)}${field.applies_from ? " from " + esc(field.applies_from) : ""}`,
    tab,
    details: `${field.values.length > 1 ? '<p class="small"><strong>Values disagree:</strong> shown side by side.</p>' : ""}${vals}
      ${field.applies_note ? `<p class="small muted">${esc(field.applies_note)}</p>` : ""}
      <p>${confBadge(field.confidence)} <span class="small">${esc(field.confidence_reason)}</span></p>`,
    ethical: `<p class="small">This field doesn't record any of the following. These are the ethical-sourcing risks the research found along the ${esc(chem.short)} supply chain.</p>
      ${risksByNode(nodes, data)}`,
  });
}

export function openNodeDetail(node, data, tab) {
  const conflicts = node.conflict_ids?.length ? `<p class="small">Conflicts register: ${node.conflict_ids.map(esc).join(", ")}</p>` : "";
  renderDialog({
    title: esc(node.name) + (node.kind === "gap" ? ' <span class="badge conf-Unknown">GAP</span>' : ""),
    subtitle: `${esc(node.stage)} ${esc(STAGE_LABEL[node.stage] || "")} · ${esc(node.country)} · as of ${esc(node.as_of)}`,
    tab,
    details: `<p>${esc(node.role)}</p>
      ${node.values.length > 1 ? '<p class="small"><strong>Values disagree:</strong> shown side by side.</p>' : ""}
      <div class="${node.values.length > 1 ? "conflict-row" : ""}">${node.values.map((v) => valueBlock(v, data)).join("")}</div>
      ${conflicts}
      <p>${confBadge(node.confidence)} <span class="small">${esc(node.confidence_reason)}</span></p>
      ${node.flags.length ? `<h3>Screening flags</h3>${node.flags.map((f) => `<p class="flag-label">${esc(f.label)}: ${esc(f.basis)}</p>${sourceLinks([f.source], data)}`).join("")}` : ""}
      ${node.policy.length ? `<h3>Policy exposure</h3>${node.policy.map((p) => `<p class="small"><strong>${esc(p.instrument)}</strong>: ${esc(p.effect)}. ${esc(p.status)} <span class="muted">(as of ${esc(p.as_of)})</span></p>${sourceLinks(p.sources, data)}`).join("")}` : ""}`,
    ethical: risksByNode([node], data),
  });
}
