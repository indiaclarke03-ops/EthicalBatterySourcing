# Confidence rubric test run (B-08)

*As of 2026-10-05 · Status: for India's review*

Ten items, scored with the PLAN.md rubric as it stood before this run. Four are ethical-risk entries, and there are two matched pairs across chemistries. Items 1–5 are seed or regulatory rows; items 6–10 are ethical-risk entries.

| # | Item | Chemistry | Evidence | Score | Reason (as it would appear on the site) |
|---|---|---|---|---|---|
| 1 | Passport applies from 18 Feb 2027 | all | Reg. 2023/1542 Art. 77(1) | **High** | T1: regulation text |
| 2 | Manganese isn't on the EU due-diligence list | LMFP | Annex X(1) | **High** | T1: closed list in regulation text |
| 3 | VRFB is a "battery with external storage" | VRFB | Art. 3(1)(1), 3(1)(8) | **Medium** | Reading of T1 text: definition covers external storage; no guidance names flow batteries |
| 4 | Passport #15 uses the CRMA critical raw materials list | all | Annex VI A(10) is silent; CRMA Annex II | **Low** | Inference: the regulation doesn't name the list |
| 5 | EnerVenue total raised: PitchBook US$784.85m vs Crunchbase US$445m vs Tracxn US$1.08bn | Ni-H₂ | Seed (PitchBook via Electrum report; others not re-checked) | **Low** | Unresolved conflict between sources; shown side by side |
| 6 | **Pair A1:** child labour in DRC cobalt mining | NMC, Ni-H₂ | US DOL List of Goods (T1) + Amnesty 2016 (T2) | **High** | T1 government finding, corroborated by NGO field research |
| 7 | **Pair A2:** child labour in Zambian manganese mining | LMFP | US DOL List of Goods (T1) | **High** | T1 government finding |
| 8 | **Pair B1:** Xinjiang-region forced-labour risk at the Jimusar VRFB project | VRFB | Region-level: DOL (aluminium), *Driving Force*, UFLPA listings. **No** entity-level evidence for Jimusar or its suppliers | Signal: **structural**. Region claim **High**; entity claim **Unknown** | The region's labour-transfer programmes are documented (T1 + T2); no source links Jimusar's components to them |
| 9 | **Pair B2:** Xinjiang lithium carbonate (SDIC Xinjiang Lithium) | LFP, LMFP, NMC | UFLPA Entity List (T1), naming the entity | Signal: **screening flag (official list)**. **High** as a listing | T1: DHS listing with stated basis; not a finding of documented harm |
| 10 | Manganese-sulphate supplier network: 346 of 1,145 nodes forced-labour-flagged | LMFP | Sayari (S-TRADE), aggregate; artefact check not done | **Low** | Sayari gate: artefact check pending (was Medium in the seed) |

## What the matched pairs show

- **Pair A (cobalt vs manganese).** The same evidence class (a T1 DOL finding) gets the same score (High) whether or not the material is on the EU due-diligence list. **Coverage doesn't change confidence.** That's the intended behaviour: the scorecard can show "High-confidence documented harm, *not covered*" for LMFP.
- **Pair B (two Xinjiang items).** Both chemistries touch the same region but score differently, and they should. The difference is the **signal type** (structural vs official-list screening flag), not the confidence in the region. The rule is applied consistently. Without the signal-type field the two would have looked inconsistent, so B-23's detail panel must show signal type next to confidence.

## Problems the run found, and fixes applied

| Problem | Where | Fix |
|---|---|---|
| A T3-only item scored Medium | `cross-cutting.md` EC-3 | → Low |
| Two "agreeing" sources were one analysis reported twice | `cross-cutting.md` SA-1 | → Medium; **independence** rule added to PLAN.md |
| Old evidence scored as if current | `harm-evidence.md` GR-1 | → High *as historical*, Medium if worded as current; **recency** rule added |
| Sayari item scored Medium before its artefact check | `harm-evidence.md` MN-5; seed LMFP row | → Low; **Sayari gate** restated in PLAN.md |
| Company statement under-scored | `harm-evidence.md` PH-3 | → High *as a statement*; **statements** rule added |
| No rule for "not on a list" | `cross-cutting.md` MC-5, §5 | **Official-list absence** rule added (High as of date) |

All fixes are committed on their own branches (B-05b, B-07). The rubric wording is updated in PLAN.md on the B-03 branch.

## Final rubric (for the methods page)

See `research/methods-draft.md` §1. It is the PLAN.md rubric plus the five rules above.
