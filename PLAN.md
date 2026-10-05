# PLAN — Passport with Gaps

*Status: DRAFT v3 for human review. Read with CONCEPT-IDEA_1.md and SPECIFICATION.md.*

## Approach

- **Site:** a static site with no build step, published with GitHub Pages from `main`.
- **Data:** all content lives in JSON under `data/`, built only from notes in `research/`. Every note carries a source, tier, tag, confidence and as-of date.
- **Research tools:** Sayari and Tavily, used as MCP connectors inside Claude Code.
- **Starting point:** my Electrum report and deck, captured in `research/electrum-seed.md`. Every seed item is re-verified before it reaches `data/`.
- **Workflow:** one backlog item → one branch → one pull request.

## Stack

| Layer | Choice |
|---|---|
| Hosting | GitHub Pages, `main`, root |
| Front end | Plain HTML, CSS and JS; supply-chain graph drawn with inline SVG (no library) |
| Data | `data/chemistries.json`, `data/passports.json`, `data/supply-chain.json`, `data/sources.json` |
| Research | Claude Code with Sayari and Tavily connectors; Electrum seed notes |
| Version control | Git and GitHub; PR per backlog item |

## Repository layout

```
/
├── index.html                 # chemistry picker + passport view
├── supply-chain.html          # stage-by-stage chain explorer
├── compare.html               # minerals screen, chokepoints, use-case scope matrix
├── scorecard.html             # ethical-sourcing scorecard across chemistries
├── methods.html               # tiers, tags, confidence rubric, ethics, AI-use, Sayari caveats
├── assets/ styles.css, app.js, graph.js
├── data/
│   ├── chemistries.json       # 6 chemistries × use cases × EU scope status
│   ├── passports.json         # passport fields per chemistry
│   ├── supply-chain.json      # nodes + edges, stages S0–S5, overlays, ethical-sourcing risks per node
│   ├── assurance.json         # IRMA / RMI-RMAP / other schemes and coverage
│   └── sources.json           # every source by id
├── research/
│   ├── electrum-seed.md       # extracted from my report/deck — starting point, not final
│   ├── regulation.md
│   ├── fields.md
│   ├── lfp.md  lmfp.md  vrfb.md  ni-h2.md  carbon-o2.md  nmc-reference.md
│   ├── cross-cutting.md       # sulphuric acid, Decision No. 58, FEOC, 1260H, UFLPA
│   ├── ethical-sourcing.md    # risk taxonomy, EU due-diligence coverage, assurance schemes, harm sources by mineral
│   ├── extension/             # teammates' chemistries (if time)
│   ├── sayari/                # one note per entity investigated
│   └── permissions.md         # Sayari permission scope; other licence checks
├── CONCEPT-IDEA_1.md  SPECIFICATION.md  PLAN.md  BACKLOG.md  README.md  .gitignore
```

## Method

### Evidence tiers

These match the usage in my Electrum report (confirm the wording).

| Tier | Meaning |
|---|---|
| **T1** | Primary source: regulation, regulator, filing, official company statement. A company claim is T1 *as a statement*, not as a measurement. |
| **T2** | Credible secondary or data provider: established press (Reuters), industry analysts (Benchmark, Fastmarkets, BNEF, Wood Mackenzie, IEA), licensed databases. |
| **T3** | Vendor-published, single market-research house, unverified aggregation, or anything my report marked "verify". |

### Provenance tags

| Tag | Meaning |
|---|---|
| S-REG | Sayari corporate-registry record |
| S-TRADE | Sayari trade record |
| OS | Open source (Tavily or manual) |
| INF | My inference |
| GAP | No usable source |

### Confidence score

Every node, edge and passport value gets a confidence score.

| Score | Rule |
|---|---|
| **High** | A T1 source, or at least two independent T2 sources that agree. A Sayari record counts as High only when a public source corroborates it. |
| **Medium** | A single T2 source; a Sayari record without independent corroboration; or sources that agree on substance but differ on figures. |
| **Low** | T3 only; INF (other than a reading of T1 text, below); unresolved conflict between sources; or a Sayari path matching a known artefact pattern. |
| **Unknown** | GAP. The node is drawn dashed and labelled "not traceable from public or licensed data". |

**Reading of T1 text.** Applying explicit T1 text to a case it doesn't name, with no contrary source, scores **Medium**. For example, "a VRFB is a battery with external storage" applies Art. 3(1)(8). The reason line must start "Reading of T1 text:".

**Scoring rules added after the B-08 test run:**
- **Independence.** "Two independent T2 sources" means two separate pieces of research. Press coverage of one analyst report (e.g. MINING.COM reporting Benchmark) counts once.
- **Score the claim as worded.** Evidence older than five years supports a past-tense claim ("documented in 2016") at its normal score. A present-tense claim resting only on it is capped at Medium.
- **Statements.** A company's own statement is T1 only *as a statement* ("the company states…"). The reason line must say so.
- **Official-list absence.** "Not on list X as of date D", checked against the list's full T1 text, scores High for that date.
- **Sayari gate.** An S-REG/S-TRADE item stays at Low until its artefact check is done and clean. Above Medium also needs a public corroborating source.

**Consistency across chemistries.** The rubric is applied the same way to every chemistry. The same evidence earns the same score whether it concerns a familiar chemistry (NMC, LFP) or an emerging one (Ni-H₂, carbon-O₂). The B-08 dry run includes at least one matched pair across chemistries to check this, and the validator warns when similar evidence scores differently.

Each score is shown with a one-line reason. Conflicting values are stored as an array and displayed side by side, never averaged.

### Supply-chain stages

| Stage | Covers |
|---|---|
| S0 | Ore and feedstock (incl. sulphur/sulphuric acid) |
| S1 | Refining and chemicals |
| S2 | Active materials and components |
| S3 | Cell or stack |
| S4 | Pack and system integration |
| S5 | Deployment and offtake |

Two overlays sit on top: **Ownership and capital**, and **Policy risk**.

Depth target per chemistry:
- Every stage gets at least one node, named where verifiable and otherwise a country/share node with a source.
- The case companies (EnerVenue, Noon, Rongke, Gotion, Nano One, Largo) are traced through Sayari as far as High or Medium confidence allows.

### Ethical-sourcing method

This is the core of the project. Every supply-chain node gets an ethical-sourcing profile.

**Risk categories.** These follow the regulation's Annex X, point 2 (confirmed in B-05a; see `research/ethical-sourcing.md` §2):

| Category | Code |
|---|---|
| Human rights | HR |
| Labour rights: forced labour | LR-FL |
| Labour rights: child labour | LR-CL |
| Labour rights: discrimination (incl. gender; tag gender-specific harms with a `gender` note) | LR-DIS |
| Labour rights: trade-union freedoms | LR-TU |
| Occupational health and safety | OHS |
| Community rights, incl. Indigenous peoples and FPIC | COM |
| Environment: water | ENV-W |
| Environment: soil, land use, tailings, waste and residues | ENV-S |
| Environment: air | ENV-A |
| Environment: biodiversity | ENV-B |
| Human health, hazardous substances, plant safety | HH |

**For each risk on a node, record:**
- **Evidence.** What is documented, and by whom. Prefer investigative, NGO and academic sources alongside company and database sources.
- **Signal type.** One of:
  - Documented harm (credible investigation);
  - Screening flag (Sayari, UFLPA Entity List, US DOL list);
  - Structural risk (region or process with known risk, no entity-level evidence);
  - No known evidence.
- **Assurance.** What independent checking exists:
  - IRMA audit;
  - RMI/RMAP-conformant smelter or refiner;
  - other scheme (name it);
  - company self-assessment only;
  - none known.
- **EU due-diligence coverage.**
  - *Covered:* the material is on the due-diligence list.
  - *Not covered:* the material is not on the list.
  - *Unclear.*
- **Confidence**, with its reason.

**Rules:**
- A screening flag is never upgraded to "documented harm" without a credible investigative or official source naming the entity.
- Supplier-level forced-labour flags from databases (Sayari) are published in aggregate unless corroborated.
- Entities on official government lists (UFLPA Entity List, Section 1260H, US DOL entity-specific findings) are named, with the list, date and stated basis. They remain screening flags, not documented harm.
- "No known evidence" is not "no risk." It is shown as a gap when the region or process carries structural risk.

**Starting sources to check** (verify availability and terms):
- UFLPA Entity List (DHS);
- US DOL *List of Goods Produced by Child Labor or Forced Labor*;
- OECD Due Diligence Guidance for Responsible Supply Chains of Minerals;
- ILO forced-labour indicators;
- IRMA audit reports;
- RMI RMAP conformant lists;
- Business & Human Rights Resource Centre transition-minerals tracking;
- Global Battery Alliance;
- investigative and NGO reporting (e.g. on DRC cobalt, Indonesian nickel, lithium-brine water use, Xinjiang-linked processing).

### Use cases and EU scope

| Use case | Chemistries |
|---|---|
| EV | LFP, LMFP, NMC |
| Grid / stationary storage | LFP, VRFB, Ni-H₂ |
| Data-centre backup | LFP, Carbon-O₂ |
| Long-duration (100 h+) | Carbon-O₂ |
| Defence / aerospace | Ni-H₂ (EaglePicher) |

Each cell gets a scope status (In scope / Likely / Unclear / Out of scope) with its own confidence score and source. **Working hypotheses to verify in B-05:**
- Stationary storage above 2 kWh is an "industrial battery" and therefore in scope.
- Military and space uses are excluded from the regulation.
- Flow batteries and reversible solid-oxide systems need checking against the regulation's definition of "battery".

### Data shape (draft — to be fixed in SPECIFICATION.md)

```json
{
  "id": "enervenue-changzhou-wfoe",
  "chemistry": "ni-h2",
  "stage": "S3",
  "name": "EnerVenue manufacturing entity, Changzhou (WFOE)",
  "country": "CN",
  "role": "Cell/vessel manufacturing (250 MWh line, then 1 GWh)",
  "edges": [{ "to": "enervenue-delaware-opco", "type": "owned_by" }],
  "values": [{ "claim": "Registered 12 Oct 2023", "sources": ["src-sayari-ev-01"], "tier": "T2", "tag": "S-REG" }],
  "confidence": "Medium",
  "confidence_reason": "Sayari registry record; public corroboration of registration date pending",
  "flags": [],
  "ethical_risks": [
    {
      "category": "LR-FL",
      "signal": "structural",
      "evidence": "Placeholder — describe documented or structural risk with sources",
      "sources": [],
      "assurance": "none known",
      "eu_dd_coverage": "covered | not covered | unclear",
      "confidence": "Low",
      "confidence_reason": "…"
    }
  ],
  "as_of": "2026-08"
}
```

## Tool setup

- **Claude Code** is the research and build agent.
- **GitHub:** the `gh` CLI, authenticated to the repo owner's account.
- **Sayari and Tavily:** claude.ai connectors available inside Claude Code (full-scope Sayari permission, recorded in `research/permissions.md`).
- **PitchBook:** not connected. Already-verified figures only (see Risks).

- Sayari and Tavily are authenticated as claude.ai connectors, so no keys or MCP config live in this repo.
- `.gitignore` covers `.env`.
- The agent checks for staged secrets before every push.

## Phases

| # | Phase | Exit criteria | Items |
|---|---|---|---|
| 0 | Setup | Repo public, Pages live, GitHub, Sayari and Tavily answer in Claude Code | B-01 – B-02 |
| 1 | Documents and review | Four documents merged after human sign-off; permissions recorded | B-03 – B-04 |
| 2 | Research: foundations | Seed imported; regulation, scope and field notes done; cross-cutting risks documented | B-05 – B-08 |
| 3 | Research: chemistries | One note per chemistry, all stages covered, every item scored; Sayari notes for case companies | B-09 – B-16 |
| 4 | Data | All JSON files complete and validated; no orphaned sources | B-17 – B-20 |
| 5 | Build | Passport, chain explorer, comparison, verifiability, methods, QR | B-21 – B-29 |
| 6 | Ship and demo | Live review done, README, demo rehearsed | B-30 – B-32 |
| 7 | Extension (if time) | Teammates' chemistries added at lighter depth, credited | B-33 – B-36 |

**Dates:** _fill in once the submission date is confirmed._ Research is the long pole: six chemistries, each with a supply chain and an ethical-sourcing profile. Phases 2–3 should get about half the total time. Phase 7 starts only after Phase 6 ships.

## Working rules

1. **Ethical sourcing first.** For every chemistry, the ethical-sourcing profile is researched alongside the supply chain, not after it. A stage is not done until its risks are profiled.
2. **Seed before search.** Start each chemistry from `electrum-seed.md`. Use Tavily to re-verify and update. Use Sayari to go deeper on named entities.
3. **Research before data.** No value enters `data/` unless it is in a `research/` note with a source.
4. **Every Sayari finding gets an artefact check** against the three known patterns before it is scored above Low.
5. **Figures in the seed are dated (Aug 2026).** Anything time-sensitive is re-checked and given a fresh `as_of`: funding totals, plant timelines, the 10 Nov 2026 export-control suspension expiry.
6. One backlog item per PR. I read every changed line before merging.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Scope: six chemistries at depth | Breadth first (every stage has one node), then depth on case companies; NMC baseline kept light |
| Ethical sourcing becomes a side panel to a financing/minerals project | Scorecard is the comparison page's lead view; every stage requires a risk profile before it counts as done; demo opens on sourcing |
| Publishing a risk flag that reads as an accusation | Flags labelled as screening results with source; artefact check; neutral wording reviewed in B-30 |
| PitchBook figures used beyond what was already verified | No PitchBook access in this project: carry over only figures verified for the Electrum report, cited as "PitchBook, via Electrum report (Aug 2026)"; anything else must come from Tavily/Sayari or be a GAP |
| Seed figures stale or internally inconsistent | Re-verify; show conflicts (B-09 – B-16) |
| Export-control status changes after 10 Nov 2026 | As-of dates on every policy node; one update pass before demo |
| Illustrative passports mistaken for real ones | Persistent banner and methods page |
| Harms described only from corporate or database sources | Require at least one NGO, investigative or academic source per documented-harm entry where one exists |
| Extension dilutes core quality | Phase 7 only after ship; lighter depth, clearly labelled |
| Key committed | `.gitignore`; connectors authenticated in claude.ai, not in repo files; pre-push secret check |
