# CONCEPT-IDEA — Passport with Gaps

*Working title · Status: DRAFT v3 for human review · Owner: India Clarke*

## One-line pitch

An **ethical-sourcing audit of the battery passport**. Mock passports for each emerging battery chemistry trace every supply chain from mine to deployment. They show where the human-rights, labour, community and environmental risks sit, how much of each risk anyone can verify, and what the EU passport would and wouldn't reveal.

## The problem

**The passport promises transparency.**
- Under Regulation (EU) 2023/1542 (Art. 77), the digital battery passport becomes mandatory on **18 February 2027**.
  - It covers EV batteries, LMT batteries and industrial batteries above 2 kWh.
  - The Commission's August 2026 guidance defines **71 data points**.
- The regulation also requires supply-chain **due diligence** on raw materials, but that obligation was **postponed to 18 August 2027** (Regulation (EU) 2025/1561).
- So for six months, the passport will exist without the due-diligence duty that is supposed to give its sourcing data meaning.

**The ethical risks sit upstream, where passport data is weakest.** The worst documented harms in battery supply chains occur at mining and refining:
- artisanal cobalt mining and child labour in the DRC;
- forced-labour exposure in Xinjiang-linked processing;
- water stress and community conflict at lithium brine operations;
- tailings and pollution at nickel HPAL sites in Indonesia.

Most of this reaches a passport, if at all, as a self-declaration several companies removed from the source.

**The due-diligence net may have holes.** As I understand it, the regulation's due-diligence annex names a short list of raw materials: cobalt, natural graphite, lithium and nickel (*to verify — B-05*). Several materials my research identified as binding inputs appear to fall outside that list:
- phosphate (LFP);
- manganese sulphate (LMFP), where Sayari screening found 346 forced-labour-flagged suppliers among 1,145 nodes;
- vanadium (VRFB);
- sulphur and sulphuric acid (everything).

If that holds, a newer chemistry can look "cleaner" on paper simply because its risky inputs aren't on the list.

**Changing chemistry moves risk; it doesn't remove it.** My Electrum research found that alternative chemistries relocate critical-mineral exposure rather than eliminate it. The same is true of ethical risk:
- LFP removes DRC cobalt but deepens dependence on Chinese refining.
- Ni-H₂ brings nickel and cobalt back.
- VRFB's reference project is in Xinjiang.
- Carbon-oxygen may sidestep mineral risk but moves the question to specialist manufacturing.

## Who it's for

- **Primary:** ethical-sourcing and ESG practitioners, procurement and compliance teams, policy researchers, and Ethical Tech CoLab colleagues.
- **Secondary:** investors comparing storage technologies who need to see sourcing risk alongside cost and performance.

**A visitor should leave knowing:**
1. where each chemistry's human-rights, labour, community and environmental risks sit along the chain;
2. which of those risks the EU passport and due-diligence rules would capture, and which they would miss;
3. how much of each chain can actually be verified, and with what confidence;
4. that "cobalt-free" or "lithium-free" is not the same as "ethically sourced".

## The idea

### Passports

- **Core (my research):**
  - reference baseline: conventional lithium-ion (NMC);
  - **LFP**, **LMFP**, **VRFB**, **Ni-H₂** (EnerVenue) and **carbon-oxygen** (Noon Energy).
- **Extension (if time allows):** my teammates' chemistries — **sodium-ion, iron-air, zinc-based, LNMO and solid-state**. They would be built from the shared practicum deck, credited to the teammates who researched them, and built with their agreement.

### Each passport has three layers

1. **Passport fields.** About 15 of the 71 official data points, weighted toward the sourcing-relevant ones:
   - raw-material origin;
   - due-diligence policy and report;
   - third-party assurance;
   - carbon footprint;
   - recycled content.
2. **Ethical-sourcing profile.** For each supply-chain node, the risks under the due-diligence risk categories:
   - human rights;
   - labour rights, including forced and child labour;
   - occupational health and safety;
   - community rights, including Indigenous peoples and free, prior and informed consent (FPIC);
   - environment (water, soil, air, biodiversity, tailings);
   - human health;
   - gender.

   Each risk entry records:
   - the evidence;
   - any assurance that exists (IRMA audit, RMI/RMAP conformant smelter, none known);
   - whether EU due diligence would cover it.
3. **Supply-chain map.** Stages S0–S5, running from ore and feedstock to deployment, with two overlays:
   - **ownership and capital:** corporate topology via Sayari;
   - **policy risk:** export controls, FEOC/PFE, Section 1260H, UFLPA.

### Use-case comparison

- Each passport covers the uses its chemistry serves: EV, grid, data-centre backup, long-duration storage, and defence/aerospace.
- Each use shows its EU passport scope status (In scope / Likely / Unclear / Out of scope).
- Out-of-scope uses get a "shadow passport", so their sourcing risks are still visible.

### Every item carries

- an evidence tier (T1–T3);
- a provenance tag (S-REG, S-TRADE, OS, INF, GAP);
- a confidence score (High / Medium / Low / Unknown) with a reason;
- an as-of date.

Conflicting figures are shown side by side.

### Cross-chemistry views

- **Ethical-sourcing scorecard:** risk hotspots by stage for every chemistry, EU due-diligence coverage, and assurance coverage.
- **"Gaps" view:** filters to items that are unknown, low-confidence, uncovered by due diligence, or unassured.
- **Minerals and chokepoints comparison:** built from my report's Sections 5 and 7.

## What makes it distinctive

- It's built from primary research: my Electrum report (v2.2, Aug 2026) and practicum deck, including Sayari work. Examples include:
  - EnerVenue's Cayman → Singapore → Delaware + Changzhou WFOE topology;
  - Rongke Power's state anchoring and Xinjiang adjacency;
  - the manganese-sulphate forced-labour screen.
- It treats the passport as an ethical-sourcing instrument and tests it, rather than describing it.
- It applies one evidence and confidence method to sourcing risk across chemistries that are normally discussed separately.

## Ethical commitments (how the project itself behaves)

1. **Passports are illustrative.** They show what a passport would need to contain, populated with verified public and licensed data. No product is presented as compliant or non-compliant.
2. **Confidence is shown, never hidden.** Unknown links are drawn as unknown, and conflicting figures are shown side by side.
3. **Risk flags are screening signals, not allegations.** Sayari forced-labour, state-ownership, MEU and region flags are labelled as database screening results, with the source.
   - Supplier-level forced-labour flags are published only in aggregate unless corroborated by a credible public investigation.
   - Findings matching known Sayari artefacts are suppressed and noted on the methods page: longest-path traces, custodian over-connection at depth, and stale registers after a rename.
4. **Affected people are not just data points.** Harms are described with sources from the people affected or credible investigators (NGOs, journalists, academic field research), not only from company or database sources. Nothing names individual workers or communities beyond what the source has already published.
5. **Data is used with permission.** Sayari data is used with Sayari's permission, with its scope recorded in the repo. PitchBook is not available to this project as a tool. PitchBook figures appear only where I already verified them for the Electrum report, cited as "PitchBook, via Electrum report (Aug 2026)"; no new PitchBook data is pulled.
6. **AI assists research; it does not produce values.** Research and build are done with Claude Code (Anthropic), using Sayari and Tavily as connected tools. Claude drafts sourced research notes; I read, check and tag them before anything enters the data. The methods page discloses how AI was used.
7. **Unverifiable information is left out.** Where Sayari and Tavily can't verify a claim, it is recorded as a GAP, not filled in.
8. **Keys stay out of the repo.**

## How Sayari and Tavily are used

Both are used at **build time only**, as MCP connectors in Claude Code. The published site makes no API calls.

| Tool | Ethical-sourcing use | Other use | Tag |
|---|---|---|---|
| Sayari | Forced-labour, sanctions, state-ownership and region-risk screening of named entities; supplier-network analysis (e.g. manganese sulphate); trade flows from high-risk regions | Corporate topology, beneficial ownership | S-REG / S-TRADE |
| Tavily | NGO, academic and investigative reporting on harms; UFLPA Entity List; US DOL child/forced labour goods list; IRMA and RMI assurance status; regulation text | Company disclosures, deployment, corroboration | OS |
| Electrum report and deck | Starting point, re-verified before use. Already-verified PitchBook figures are carried over from here | — | original tier |

## Out of scope

- Real registry or QR connection; backend or live API calls.
- All 71 data points.
- Legal, compliance or investment advice.
- Original field investigation; company scoring or ranking.
- Links to coursework.

## Success looks like

- [ ] A live GitHub Pages URL and a public repo with the four project documents.
- [ ] Six core passports. Each has a supply chain traced to S0 where evidence exists, and an ethical-sourcing profile for every stage.
- [ ] The scorecard answers, for each chemistry: where the worst-documented risk sits, whether EU due diligence covers it, and whether any assurance exists.
- [ ] A reviewer can click any item and see its source, tier, tag, confidence and as-of date.
- [ ] The demo shows the tool setup (Claude Code with GitHub, Tavily and Sayari) and the site.
- [ ] Stretch: teammates' chemistries added at lighter depth, with credit.

## Open questions for the reviewer

- ~~**Carbon-oxygen:** a full passport, or a shadow passport only?~~ Decided: full passport if B-13 finds enough verifiable detail, otherwise a shadow passport.
- **Teammates' chemistries:** confirm credit wording and agreement.
- **Submission date.**
