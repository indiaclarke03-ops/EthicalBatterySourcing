# BACKLOG — Passport with Gaps

*Status: DRAFT v3 for human review.*

- **Priority:** Must / Should.
- **Workflow:** one item → one branch → one PR. Tick each box when its PR merges.
- **Done means:** every item that produces data includes sources, tier, tag, confidence and an as-of date.
- **Ethical sourcing is the core.** A chemistry is not done until every stage has an ethical-sourcing profile.

## Phase 0 — Setup

- [x] **B-01 Repo and Pages live** · Must · GitHub
  - Public repo created.
  - Placeholder page served from `main`.
  - URL added to the README.
- [x] **B-02 Tools connected** · Must · GitHub, Tavily, Sayari
  - Claude Code reaches GitHub (`gh`), Sayari and Tavily; each answers a test call, recorded in the README.
  - No keys in committed files.
  - `.gitignore` covers `.env`.

## Phase 1 — Documents and review

- [x] **B-03 Commit project documents** · Must
  - All four documents (`CONCEPT-IDEA_1.md`, `PLAN.md`, `SPECIFICATION.md`, `BACKLOG.md`) plus `research/electrum-seed.md` are in the repo.
  - PR opened.
- [x] **B-04 Permissions and licences** · Must
  - `research/permissions.md` records the Sayari permission: who granted it, its date and its scope.
  - It also records the PitchBook position (no access; already-verified Electrum figures only, cited as "PitchBook, via Electrum report (Aug 2026)") and any other paid source.

## Phase 2 — Research: foundations

- [x] **B-05 Regulation and scope note** · Must · Tavily
  - `research/regulation.md` confirms, from T1 sources (EUR-Lex, Commission):
    - the passport start date and scope;
    - the due-diligence postponement;
    - the August 2026 guidance.
  - It tests the scope hypotheses:
    - stationary storage counts as an industrial battery;
    - military and space uses are excluded;
    - whether flow batteries and reversible solid-oxide systems meet the definition of "battery".
  - Output: a chemistry × use-case scope matrix with a confidence score for each cell.
- [x] **B-05a Ethical-sourcing foundations** · Must · Tavily
  - `research/ethical-sourcing.md` confirms from T1 sources:
    - the regulation's due-diligence material list (hypothesis: cobalt, natural graphite, lithium, nickel);
    - its risk categories.
  - Records which materials in this project fall **outside** that list: phosphate, manganese sulphate, vanadium, sulphur/sulphuric acid, copper and others.
  - Compiles reference sources and checks their availability and terms:
    - UFLPA Entity List;
    - US DOL goods list;
    - OECD minerals guidance;
    - ILO indicators;
    - IRMA;
    - RMI/RMAP;
    - Business & Human Rights Resource Centre;
    - Global Battery Alliance.
- [x] **B-05b Harm evidence by mineral** · Must · Tavily
  - For each mineral and process in scope, the strongest documented harms, with investigative, NGO or academic sources:
    - cobalt and copper (DRC artisanal and industrial mining);
    - nickel (Indonesia HPAL tailings, deforestation, labour);
    - lithium (brine water use and community consent; hard-rock);
    - graphite (China processing, air pollution);
    - manganese (sulphate refining);
    - phosphate;
    - vanadium (South Africa, China, Russia);
    - Xinjiang-linked processing.
  - Each entry has a signal type and confidence.
- [x] **B-06 Field selection** · Must · Tavily
  - About 15 of the 71 data points, weighted toward sourcing: critical raw materials (#15), detailed composition (#45), place of manufacture (#8), responsible-sourcing information (#19, deferred to Aug 2027), carbon footprint (#17–18, deferred), recycled content (#20–23, deferred).
  - Deferred fields are recorded with their legal start date.
  - Defines the shadow layer, "what the passport doesn't show": raw-material origin by stage, which no data point records.
  - Includes a small set of identification and performance fields for context.
  - Includes a note on which fields don't translate to non-lithium chemistries.
- [x] **B-07 Cross-cutting risks** · Must · Tavily
  - `research/cross-cutting.md` covers:
    - Decision No. 58 and its suspension, re-checked for status after 10 Nov 2026;
    - FEOC/PFE and Notice 2026-15;
    - Section 1260H;
    - the sulphuric-acid shock, with exposure by material;
    - UFLPA and its relevance to Xinjiang-linked nodes (e.g. Jimusar, graphite and polysilicon-adjacent processing).
  - Every item is re-verified from the seed and dated.
- [x] **B-08 Confidence rubric dry run** · Must
  - Score 10 seed items with the rubric, including at least 3 ethical-risk entries.
  - Include at least one matched pair (similar evidence, different chemistries) to check that scoring is consistent across chemistries.
  - Adjust the rubric wording if scores feel wrong.
  - Record the final rubric on the methods page draft.

## Phase 3 — Research: chemistries

Each note covers S0–S5 plus both overlays, with at least one node per stage. **Every stage has an ethical-sourcing profile**: risk categories, signal type, assurance and EU due-diligence coverage. Seed items are re-verified, conflicts are listed explicitly, and GAPs are named.

- [x] **B-09 LFP** · Must · Tavily, Sayari
  - S0: lithium, graphite, phosphate (First Phosphate)
  - S1: refining, plus the proposed Port Saguenay phosphoric acid plant
  - S2: cathode (98% China; Nano One); artificial graphite anode
  - S3: CATL, BYD, EVE, LGES Lansing, Ford Marshall, Gotion Morocco
  - S4: Tesla Megapack, BYD, Dyness
  - S5: deployment examples
  - Capital: AfDB, EIFO, Rio Tinto/Sumitomo
  - Ethics focus: lithium brine water and community consent; graphite processing pollution; phosphate (outside the due-diligence list); Chinese refining opacity
- [x] **B-10 LMFP** · Must · Tavily, Sayari
  - The manganese-sulphate chain, including the Sayari supplier-node analysis: 1,145 nodes, 463 in China, 346 forced-labour-flagged. Present as an aggregate, not a list of named flags.
  - Cathode makers: Dynanonic, Shanshan, Ronbay/SKLD, Integrals Power.
  - Cells: CATL M3P, Gotion, including the Sayari ownership finding.
  - The OLiMPUS European chain.
  - Ethics focus: manganese-sulphate forced-labour exposure (aggregate); manganese is outside the due-diligence list; does a European chain change the risk picture?
- [x] **B-11 VRFB** · Must · Tavily, Sayari
  - Vanadium co-production and producers (Bushveld/SPR, Glencore, Largo).
  - V₂O₅ supply and the DLA order.
  - Electrolyte (Storion); membrane (Zhiqing Bocai).
  - Stacks: Rongke, Invinity, Sumitomo, VFlowTech, VRB Energy.
  - Jimusar's project chain.
  - Rongke flags, including Xinjiang adjacency, with UFLPA relevance noted.
  - Ethics focus: Xinjiang siting of the reference project; vanadium is outside the due-diligence list; steel-slag co-production and its environmental and health footprint.
- [x] **B-12 Ni-H₂ (EnerVenue)** · Must · Tavily, Sayari
  - Full Sayari corporate topology: Cayman → Singapore → Delaware + Changzhou WFOE.
  - Nickel chain (Indonesia HPAL, sulphur dependence) and cobalt chain (DRC).
  - Vessel and electrode inputs: attempt to identify suppliers; record GAP if not found.
  - Pilots: RWE, Avid, Towngas.
  - Funding conflict across PitchBook (already-verified Electrum figure), Crunchbase and Tracxn shown side by side; Crunchbase/Tracxn re-checked via Tavily or dropped.
  - EaglePicher and Great Power as comparators.
  - Ethics focus: DRC cobalt (artisanal mining, child labour); Indonesian HPAL nickel (tailings, deforestation); offsetting recycling-economics argument; what the Changzhou location means for supplier visibility.
- [x] **B-13 Carbon-oxygen (Noon)** · Must · Tavily, Sayari
  - Trace stack materials (Co in LSCF, Ga in LSGM, Ag pastes) and SOFC ceramics suppliers; record GAP where not found.
  - Meta reservation; CEC demonstration.
  - Capital, including Series B status re-checked.
  - Scope classification from B-05.
  - Passport depth: full passport if enough verifiable detail is found; otherwise a shadow passport. Record the decision and why.
  - Ethics focus: test the "≈1% critical materials" claim as an ethical claim; trace gram-scale cobalt, gallium and silver; record where risk moves (ceramics manufacturing) and GAPs.
- [x] **B-14 NMC reference baseline** · Must (light) · Tavily
  - A lighter reference passport that counts as one of the six: S0–S3 country/share nodes only, plus cobalt/DRC and nickel/Indonesia.
  - Enough to anchor comparisons, no case company.
  - Ethics focus: the cobalt/nickel harm baseline that other chemistries are compared against.
- [x] **B-15 Sayari deep dives** · Must · Sayari
  - One note per case entity: EnerVenue, Rongke, Gotion, Nano One, Largo/Storion, Noon, Dynanonic.
  - Each covers ownership up to beneficial owners, subsidiaries, trade counterparties, forced-labour, sanctions and state-ownership flags, and an artefact check.
  - Each finding gets a public corroboration attempt via Tavily.
- [x] **B-16 Conflict register** · Must
  - `research/conflicts.md` lists every figure where sources disagree, the values found and the treatment chosen. Examples:
    - EnerVenue funding totals;
    - Series B size (US$300m vs US$339.6m);
    - Dynanonic capacity (80k vs 110k t/yr);
    - Rongke installed base vs the global VRFB base estimate;
    - vanadium co-production share (73% vs 73–90%).

## Phase 4 — Data

- [x] **B-17 Schema** · Must
  - JSON schemas for all data files match SPECIFICATION.md, including confidence, confidence_reason, flags, `ethical_risks`, as_of and multi-value conflicts.
  - Includes `assurance.json`.
- [x] **B-18 Chemistries and scope matrix** · Must
  - `chemistries.json` populated from B-05.
- [x] **B-19 Passports and supply chains** · Must
  - `passports.json` and `supply-chain.json` populated for all six chemistries, from research notes only.
- [x] **B-20 Sources and validation** · Must
  - Every source id resolves, with no orphans.
  - Every node has a confidence score, an as-of date and at least one ethical-risk entry (or an explicit "no known evidence" entry).
  - The agent runs a validation script and reports results in the PR.

## Phase 5 — Build

- [x] **B-20a Ethical-sourcing scorecard** · Must
  - `scorecard.html` shows a chemistry × stage grid of risk hotspots, with signal types distinguished: documented harm, screening flag, structural.
  - It also shows EU due-diligence coverage and assurance coverage.
  - Every cell opens its evidence.
  - This is the lead view of the site's comparison section.
- [x] **B-21 Chemistry picker and passport card** · Must
  - Six chemistries, fields grouped by category.
  - Tier, tag and confidence badges use text labels, not colour alone.
  - Persistent "Illustrative" banner.
- [x] **B-22 Use-case toggle** · Must
  - Switching use case updates the EU scope status and its confidence.
  - Out-of-scope uses are labelled "shadow passport".
- [ ] **B-23 Field and node detail panel** · Must
  - Shows sources (linked), tier, tag, confidence plus reason, as-of date, and conflicting values side by side.
  - Includes an **Ethical sourcing** tab listing each risk with signal type, evidence, assurance and EU due-diligence coverage.
- [ ] **B-24 Supply-chain explorer** · Must
  - Stage columns S0–S5 with nodes and edges.
  - An ethical-risk badge on each node, filterable by risk category (e.g. show only forced or child labour).
  - GAP nodes dashed.
  - Clicking a node opens the detail panel.
  - Works on mobile via a stacked list fallback.
- [ ] **B-25 Ownership and capital overlay** · Must
  - Toggle shows corporate topology and capital links. EnerVenue and Rongke are the showcase.
- [ ] **B-26 Policy-risk overlay** · Must
  - Highlights nodes affected by Decision No. 58, FEOC, 1260H and sulphuric-acid exposure, each with an as-of date.
- [ ] **B-27 Comparison page** · Must
  - Minerals screen across six chemistries.
  - Chokepoint table.
  - Use-case scope matrix.
  - "Traceability depth" summary: deepest stage reached at High/Medium confidence, per chemistry.
- [ ] **B-28 Gaps filter** · Must
  - Filter any passport or chain to Low, Unknown and GAP items, plus risks that are **not covered by EU due diligence** or have **no known assurance**.
  - Shows a count per chemistry.
- [ ] **B-29 Methods page and mock QR** · Must
  - `methods.html` covers:
    - the tiers, tags and confidence rubric;
    - the ethical-sourcing method (risk categories, signal types, assurance, aggregation rule for flags);
    - the ethical commitments and AI-use disclosure;
    - Sayari permission and artefact caveats;
    - a "not legal or investment advice" statement.
  - Each passport card shows a QR code linking to its own page.
- [ ] **B-29a Responsive, dark mode and accessibility** · Should
  - Phone width, system dark mode, keyboard navigation.

## Phase 6 — Ship and demo

- [ ] **B-30 Live-site review** · Must
  - Click through all six passports on the live site.
  - Flag and harm wording is checked for neutrality and for respect toward affected communities.
  - Issues are fixed or logged as new items.
- [ ] **B-31 README** · Must
  - Live URL, summary, screenshots, tool setup, method summary, data as-of date.
- [ ] **B-32 Demo script** · Must
  - About 3 minutes:
    1. open on the ethical-sourcing scorecard (where the risk sits, and what EU due diligence misses);
    2. tool setup in Claude Code (GitHub, Sayari, Tavily);
    3. one Sayari screening finding going from research note → data → site;
    4. the EnerVenue topology;
    5. the gaps view.

## Phase 7 — Extension: teammates' chemistries (if time)

Lighter depth than the core: a passport, a supply chain at country/share level, an ethical-sourcing profile per stage, and named nodes only where verified. Each is credited on the page to the teammate who researched it, with their agreement.

- [ ] **B-33 Agreement and credit** · Must (before B-34)
  - Teammates confirm their deck content can be used and how they want to be credited.
  - Recorded in `research/permissions.md`.
- [ ] **B-34 Seed from practicum deck** · Should
  - Extract sodium-ion, iron-air, zinc-based, LNMO and solid-state content into `research/extension/`.
  - Same columns as the main seed file.
- [ ] **B-35 Research and data** · Should · Tavily, Sayari
  - One chemistry per PR.
  - Ethics focus per chemistry:
    - **sodium-ion:** "no lithium/cobalt" claims vs concentrated Chinese cathode and cell manufacturing;
    - **iron-air:** iron ore and steel inputs (ArcelorMittal supply deal);
    - **zinc:** zinc mining and smelting;
    - **LNMO:** manganese and nickel, "cobalt-free ≠ China-free";
    - **solid-state:** extra lithium per pack, germanium under export control.
- [ ] **B-36 Add to site** · Should
  - Extension chemistries appear in the picker, scorecard and comparison pages, labelled "extension — lighter depth".
