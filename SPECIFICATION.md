# SPECIFICATION — Passport with Gaps

*Status: DRAFT v1 for human review · Owner: India Clarke. Read with CONCEPT-IDEA_1.md and PLAN.md. Where this document and PLAN.md disagree, this document wins for data shapes and page behaviour; PLAN.md wins for method.*

Items marked **(confirm)** are decisions still to be confirmed.

## 1. Conventions

- **IDs:** lowercase kebab-case, unique within their file, stable once published. Pattern: `<chemistry>-<stage>-<short-name>` for nodes (e.g. `ni-h2-s3-enervenue-changzhou`), `src-<provider>-<short>-<nn>` for sources (e.g. `src-sayari-ev-01`).
- **Chemistry ids:** `nmc`, `lfp`, `lmfp`, `vrfb`, `ni-h2`, `carbon-o2`. Extension ids (Phase 7): `na-ion`, `iron-air`, `zinc`, `lnmo`, `solid-state`.
- **Dates:** `as_of` is `YYYY-MM` (month precision) unless a day matters (regulatory deadlines, export-control expiry), in which case `YYYY-MM-DD`.
- **Countries:** ISO 3166-1 alpha-2 (`CN`, `CD`, `ID`). Use `XX` for unknown and `MULTI` for a multi-country share node.
- **Text:** plain UTF-8. No HTML in data values. Chemical formulas use Unicode subscripts (V₂O₅, Ni-H₂).
- **Encoding of unknowns:** never omit a required field. Use `null` with a `GAP` tag and `Unknown` confidence instead.

## 2. Shared enums

| Enum | Values |
|---|---|
| `tier` | `T1`, `T2`, `T3` |
| `tag` | `S-REG`, `S-TRADE`, `OS`, `INF`, `GAP` |
| `confidence` | `High`, `Medium`, `Low`, `Unknown` |
| `stage` | `S0`, `S1`, `S2`, `S3`, `S4`, `S5` |
| `risk_category` | `HR`, `LR-FL`, `LR-CL`, `LR-DIS`, `LR-TU`, `OHS`, `COM`, `ENV-W`, `ENV-S`, `ENV-A`, `ENV-B`, `HH` (Annex X, fixed in B-05a) |
| `signal` | `documented-harm`, `screening-flag`, `structural`, `no-known-evidence` |
| `assurance` | `irma-audit`, `rmi-rmap-conformant`, `other-scheme`, `self-assessment`, `none-known` |
| `eu_dd_coverage` | `covered`, `not-covered`, `unclear` |
| `scope_status` | `in-scope`, `likely`, `unclear`, `out-of-scope` |
| `use_case` | `ev`, `grid`, `datacentre`, `long-duration`, `defence-aerospace` |
| `flag_type` | `forced-labour`, `sanctions`, `state-ownership`, `meu`, `region-risk`, `1260h`, `feoc-pfe`, `uflpa-entity-list` |
| `edge_type` | `supplies`, `owned_by`, `invests_in`, `offtake`, `licenses_to`, `integrates`, `deploys` |

## 3. The claim object (used everywhere a value appears)

A single value, or every side of a conflict, is a **claim**:

```json
{
  "value": "US$339.6m",
  "claim": "Series B extension final close",
  "sources": ["src-pitchbook-ev-02"],
  "tier": "T2",
  "tag": "OS",
  "as_of": "2026-06"
}
```

A field with **one** claim has a one-element `values` array. A field with a **conflict** has two or more claims, plus `conflict: true` and a `conflict_id` that points to the conflict register (`research/conflicts.md`). Values are never averaged or merged.

Each scored item (field, node, edge, risk) carries:

```json
"confidence": "Medium",
"confidence_reason": "One sentence, ≤ 140 characters, naming the rule that applied"
```

## 4. Data files

All files live in `data/`, are UTF-8 JSON, and have a top-level `{ "schema_version": "1.0", "as_of": "YYYY-MM", "items": [...] }` wrapper. A JSON Schema per file sits in `data/schema/` (B-17).

### 4.1 `sources.json`

```json
{
  "id": "src-sayari-ev-01",
  "title": "EnerVenue (Changzhou) Energy Technology Co., Ltd. — registry record",
  "publisher": "Sayari",
  "url": null,
  "access": "licensed",
  "tier": "T2",
  "tag": "S-REG",
  "retrieved": "2026-10-05",
  "licence_note": "Used with Sayari permission; see research/permissions.md",
  "research_note": "research/sayari/enervenue.md"
}
```

- `access`: `public`, `licensed`, `paywalled`.
- `url` may be `null` only for `licensed` sources; such sources must have a `licence_note`.
- `research_note` is required, which enforces "research before data".
- PitchBook figures (no direct access) use `"publisher": "PitchBook, via Electrum report (Aug 2026)"`, `access: "licensed"`, and `research_note: "research/electrum-seed.md"`. No other PitchBook data is allowed.

### 4.2 `chemistries.json`

```json
{
  "id": "vrfb",
  "name": "Vanadium redox flow battery",
  "short": "VRFB",
  "tier_of_depth": "core",
  "case_companies": ["rongke", "invinity", "largo-storion"],
  "summary": "One-paragraph neutral description",
  "use_cases": [
    {
      "use_case": "grid",
      "scope_status": "unclear",
      "scope_basis": "Whether a flow system meets the Art. 3 definition of 'battery'",
      "shadow_passport": false,
      "values": [ { "claim": "...", "sources": ["src-eurlex-2023-1542"], "tier": "T1", "tag": "OS", "as_of": "2026-10" } ],
      "confidence": "Low",
      "confidence_reason": "No T1 guidance found on flow batteries; inference from definition"
    }
  ],
  "contributors": [{ "name": "India Clarke", "role": "research" }]
}
```

- `tier_of_depth`: `core`, `reference` (NMC), `extension`.
- `shadow_passport` is `true` whenever `scope_status` is `out-of-scope`.
- `contributors` is required for extension chemistries and must match `research/permissions.md`.

### 4.3 `passports.json`

One record per chemistry × field. The ~15 fields are fixed by B-06; the list below is a placeholder.

```json
{
  "chemistry": "lfp",
  "field_id": "raw-material-origin",
  "field_label": "Raw material origin",
  "category": "sourcing",
  "eu_reference": "Annex XIII, point (x) — confirm in B-06",
  "applies": true,
  "applies_note": null,
  "values": [ { "value": "...", "claim": "...", "sources": [], "tier": "T2", "tag": "OS", "as_of": "2026-10" } ],
  "conflict": false,
  "confidence": "Medium",
  "confidence_reason": "..."
}
```

- `category`: `identification`, `performance`, `sourcing`, `carbon`, `circularity`, `due-diligence`.
- `applies: false` plus `applies_note` records the B-06 note on fields that don't translate to non-lithium chemistries. These fields still render, greyed and labelled "not applicable — why".

**Placeholder field list (B-06 replaces it), using Commission guidance v2.0 numbering:** manufacturer (#3); place of manufacture (#8); battery category (#6); chemistry (#12); capacity (#11); hazardous substances (#13); critical raw materials > 0.1% (#15); renewable content (#24); expected lifetime (#31 / #59–60); detailed composition (#45); carbon-footprint declaration (#17, deferred); responsible-sourcing information (#19, deferred to Aug 2027); recycled content Co/Li/Ni (#20–22, deferred).

Deferred fields take `"status": "deferred"` and `"applies_from": "YYYY-MM-DD"`, and render as an empty, labelled slot.

**Shadow layer.** Raw-material origin isn't a passport data point. It is stored on supply-chain nodes (S0–S1) and shown on the passport card under "What this passport doesn't show", never styled as a passport field.

### 4.4 `supply-chain.json`

`{ "nodes": [...], "edges": [...] }`. Edges are stored separately from nodes so that ownership and capital links can cross chemistries (e.g. CATL licensing into Ford).

**Node**

```json
{
  "id": "ni-h2-s3-enervenue-changzhou",
  "chemistries": ["ni-h2"],
  "stage": "S3",
  "kind": "entity",
  "name": "EnerVenue manufacturing entity, Changzhou (WFOE)",
  "country": "CN",
  "role": "Cell and vessel manufacturing",
  "share": null,
  "values": [ { "claim": "Registered 12 Oct 2023", "sources": ["src-sayari-ev-01"], "tier": "T2", "tag": "S-REG", "as_of": "2026-08" } ],
  "confidence": "Medium",
  "confidence_reason": "Sayari registry record; public corroboration pending",
  "artefact_check": { "done": true, "pattern_matched": null, "note": "research/sayari/enervenue.md#artefact-check" },
  "flags": [],
  "policy": [],
  "ethical_risks": [],
  "as_of": "2026-08"
}
```

- `chemistries` is an array, since nodes such as Gotion and Great Power serve more than one chemistry.
- `kind`: `entity` (named company or site), `share` (country/share node, e.g. "China 98% of LFP cathode capacity"), `gap` (not traceable).
- `share`: `{ "country": "CN", "percent": 98, "metric": "capacity" }` for `share` nodes, otherwise `null`.
- `artefact_check` is required on any node with an `S-REG` or `S-TRADE` claim. If `done` is `false` or `pattern_matched` is non-null, the node's confidence cannot exceed `Low`.
- `gap` nodes have `confidence: "Unknown"`, `tag: "GAP"`, and render dashed with the label "not traceable from public or licensed data".

**Flag** (Sayari and list-based screening)

```json
{
  "type": "forced-labour",
  "source": "src-sayari-mn-01",
  "basis": "What the screening database matched on, in neutral words",
  "aggregate": true,
  "aggregate_counts": { "flagged": 346, "total": 1145, "scope": "Mn-sulphate supplier nodes" },
  "corroborated_by": [],
  "label": "Screening result, not an allegation"
}
```

- **Aggregation rule:** a database-derived (Sayari) `forced-labour` flag at supplier level must have `aggregate: true` and no named counterparties, unless `corroborated_by` contains at least one credible investigative or official source naming that entity.
- **Official lists:** flags of type `uflpa-entity-list` or `1260h` name the entity and carry `"official_list": true`, the list's Federal Register (or equivalent) citation and its date, and the stated basis in neutral words.
- `label` is fixed text and is always rendered next to the flag.

**Policy item** (policy-risk overlay)

```json
{ "instrument": "decision-58", "effect": "Export licence required for LFP cathode technology", "status": "suspended-until-2026-11-10", "sources": [], "as_of": "2026-10-05" }
```

`instrument`: `decision-58`, `decision-70`, `feoc-pfe`, `1260h`, `uflpa`, `sulphuric-acid`, `ga-ge-sb-controls`. Policy items must carry a day-precision `as_of`.

**Ethical risk**

```json
{
  "category": "LR-CL",
  "signal": "documented-harm",
  "material": "cobalt",
  "evidence": "Neutral summary of what is documented, by whom, where and when",
  "sources": ["src-amnesty-2016-drc"],
  "has_independent_source": true,
  "assurance": "rmi-rmap-conformant",
  "assurance_detail": "Name of the scheme or refiner list and its date",
  "eu_dd_coverage": "covered",
  "confidence": "High",
  "confidence_reason": "...",
  "as_of": "2026-10"
}
```

- Every node has at least one entry. If nothing is found, the entry is `signal: "no-known-evidence"`, and when the region or process carries structural risk it is shown as a gap, not as "clean".
- `signal: "documented-harm"` requires `has_independent_source: true` (NGO, investigative or academic) where such a source exists. A `screening-flag` entry may never be relabelled `documented-harm` without one.
- `eu_dd_coverage` is derived from `material` against the B-05a list, not entered by hand (validator check).

**Edge**

```json
{ "from": "ni-h2-s3-enervenue-changzhou", "to": "ni-h2-own-enervenue-delaware", "type": "owned_by", "overlay": "ownership", "values": [], "confidence": "Medium", "confidence_reason": "..." }
```

`overlay`: `chain` (S0→S5 flow), `ownership`, `capital`. The default view shows only `chain` edges.

### 4.5 `assurance.json`

```json
{
  "id": "rmi-rmap",
  "name": "RMI Responsible Minerals Assurance Process",
  "covers_materials": ["cobalt", "tin", "tantalum", "tungsten", "gold"],
  "level": "smelter-refiner",
  "what_it_checks": "...",
  "what_it_does_not": "...",
  "list_url": "...",
  "sources": [],
  "as_of": "2026-10"
}
```

Schemes, at minimum: IRMA, RMI/RMAP, and whatever B-05a finds for graphite, manganese, phosphate and vanadium (or an explicit "no scheme found" record per material).

### 4.6 Additions made in B-17 (schemas in `data/schema/`)

The schemas are the binding definition of data shapes. Changes from §4.1–4.5:
- **`chemistries.json`:** adds a required `passport_type` (`full` / `reference` / `shadow`) and an optional `research_note`.
- **`passports.json`:** adds a required `guidance_no` (Commission guidance v2.0 data-point number), a required `status` (`mandatory` / `deferred` / `conditional` / `not-applicable`) and an optional `applies_from` (deferred fields).
- **`eu_dd_coverage`** adds `not-applicable`, for inputs that aren't mined materials (e.g. carbon from CO₂).
- **`edge_type`** adds `joint_venture`.
- **Node `stage`** also allows `CAP` (capital) and `OWN` (ownership-overlay) nodes.
- **Policy `instrument`** adds `eu-flr` (EU Forced Labour Regulation).
- **Claims** may carry `superseded: true`, which keeps a losing value visible in resolved conflicts (`research/conflicts.md`).
- **Ethical risks** may carry `gender_note: true` (LR-DIS entries with gender-specific harm).
- **Shared enums and the claim object** are in `data/schema/common.json`.

## 5. Validation (`scripts/validate.mjs`, B-20)

The script (`scripts/validate.mjs`, with `scripts/lib/schema.mjs`) runs with Node and no dependencies. It prints a pass/fail table that goes in the PR description. It fails on:

1. JSON Schema violations.
2. A source id referenced anywhere that is missing from `sources.json`, and any source that nothing references (orphan).
3. A node without `confidence`, `confidence_reason`, `as_of`, or at least one `ethical_risks` entry.
4. An S-REG/S-TRADE node scored above `Low` without a completed, clean `artefact_check`.
5. An S-REG/S-TRADE claim scored `High` without a non-Sayari corroborating source.
6. A supplier-level `forced-labour` flag naming an entity without `corroborated_by`.
7. `documented-harm` with no sources.
8. A `conflict: true` field with fewer than two claims, or a conflict missing from `research/conflicts.md`.
9. `eu_dd_coverage` that disagrees with the material list.
10. A policy item without a day-precision `as_of`.
11. A `research_note` path that doesn't exist.

Warnings (non-blocking): `as_of` older than 3 months; a chemistry with any stage lacking a node; `T3`-only `Medium` scores; the same source id and tier scored differently on nodes in different chemistries (consistency check); a `Medium` INF whose reason doesn't start "Reading of T1 text:".

## 6. Pages

All pages are static HTML that `fetch()` from `data/`. No build step and no external runtime calls. Every page carries the banner:

> **Illustrative.** These are mock passports built from public and licensed research. They are not real product passports and make no statement about any company's compliance.

| Page | Purpose | Backlog |
|---|---|---|
| `index.html` | Chemistry picker, then passport card (fields by category, badges, QR) and use-case toggle | B-21, B-22 |
| `scorecard.html` | Chemistry × stage grid of risk hotspots; lead view of the comparison section | B-20a |
| `supply-chain.html?chem=` | S0–S5 explorer with ownership/capital and policy overlays | B-24 – B-26 |
| `compare.html` | Minerals screen, chokepoint table, use-case scope matrix, traceability depth | B-27 |
| `methods.html` | Tiers, tags, rubric, ethical-sourcing method, commitments, AI-use disclosure, Sayari caveats, "not advice" | B-29 |

Deep links use query strings (`index.html?chem=lfp&use=grid`, `supply-chain.html?chem=vrfb&node=<id>`). A deep link is what the mock QR code encodes.

### 6.1 Badges

Each badge shows text, not colour alone: `T2`, `S-REG`, `Medium`. Colour is secondary. Signal types use a text label plus a distinct shape: ● documented harm, ◆ screening flag, ▲ structural, ○ no known evidence.

### 6.2 Detail panel (B-23)

Opens from any field or node. Tabs:
- **Evidence:** claims (side by side if conflicting), sources linked, tier, tag, confidence and reason, as-of.
- **Ethical sourcing:** one row per risk (category, signal, evidence, assurance, EU DD coverage, confidence).
- **Ownership and policy:** flags (with the fixed "screening result" label), policy items, ownership edges.

### 6.3 Scorecard cell rule (B-20a)

Each chemistry × stage cell shows:
- the **strongest signal** present (documented harm > screening flag > structural > no known evidence);
- the risk categories involved;
- `EU DD: covered / not covered / mixed`;
- `Assurance: some / none known`.

Clicking a cell lists the underlying risk entries. The cell never shows a numeric "score", because the project doesn't rank companies.

### 6.4 Gaps filter (B-28)

This is a toggle on the passport and chain views, and a summary on `compare.html`. It keeps items where any of these hold: confidence `Low` or `Unknown`, kind `gap`, `eu_dd_coverage` is `not-covered`, or `assurance` is `none-known`. It shows a count per chemistry.

### 6.5 Supply-chain explorer layout

- **Desktop (≥ 900 px):** six stage columns in inline SVG, with nodes as labelled boxes and edges as paths. Overlays toggle extra edges and node outlines.
- **Narrow screens:** a stacked list grouped by stage, with edges listed as "supplies → X" text under each node.
- The ethical-risk filter (by category) dims non-matching nodes rather than hiding them, so the chain's shape stays visible.

### 6.6 Accessibility and theming (B-29a)

- All controls are reachable by keyboard, with visible focus.
- The SVG has `role="img"` plus a hidden list equivalent.
- Colour tokens are set on `:root`, with a `prefers-color-scheme: dark` variant.
- Contrast is at least 4.5:1 for text.

## 7. Wording rules (checked in B-30)

- Flags: "Sayari screening returned a forced-labour flag for…", never "X uses forced labour".
- Harms: describe what the cited source documented, attributed ("Amnesty International documented…"). No naming of individual workers or communities beyond the source.
- Company claims: "the company states…".
- Gaps: "not traceable from public or licensed data", never "none".

## 8. Repository hygiene

- `.gitignore`: `.env`, `.env.*`, `.vscode/`, `.claude/settings.local.json`, `node_modules/`, `.DS_Store`.
- Sayari permission is full scope (see `research/permissions.md`). Even so, raw bulk exports are not committed; notes cite record ids so findings stay reviewable.
- Before every push, the agent greps staged files for key patterns (`sk-`, `tvly-`, `Bearer `, `api_key`).

## 9. Open decisions

Decided:
- **NMC** is a lighter reference passport (`tier_of_depth: "reference"`, S0–S3 share nodes) and counts as one of the six.
- **Carbon-oxygen** gets a full passport if B-13 finds enough verifiable detail; otherwise a shadow passport.
- **Sayari** permission is full scope.
- **PitchBook:** already-verified Electrum figures only, with `"publisher": "PitchBook, via Electrum report (Aug 2026)"`; nothing unverifiable is included.

- **Risk codes** follow Annex X: GEN replaced by LR-DIS (gender as a note); LR-TU added.
- **Rubric:** "reading of T1 text" scores Medium; scoring must be consistent across chemistries (PLAN.md).
- **Official government lists** (UFLPA, 1260H): entities are named.
- **Raw-material origin** moves to the shadow layer ("what the passport doesn't show").

Still open:
- **Field list:** fixed in B-06; §4.3 is a placeholder.
