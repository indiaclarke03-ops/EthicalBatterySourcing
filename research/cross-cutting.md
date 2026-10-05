# Cross-cutting risks (B-07)

*As of 2026-10-05 · Researched with Claude Code (Tavily, Federal Register, IRS, US Code, MOFCOM via law-firm summaries) · Status: for India's review*

Each item re-verifies the matching row in `electrum-seed.md` and states whether the seed holds.

## Summary

| Item | Seed status | Current status (2026-10-05) | Conf |
|---|---|---|---|
| China export controls on Li-ion, cathode, artificial-graphite anode (Ann. No. 58/2025) | Holds | **Suspended until 10 Nov 2026** (Ann. No. 70/2025). The 2023 graphite controls (Ann. No. 39/2023, 1C108) **remain in force**. ⚠ Re-check after 10 Nov 2026 | High |
| Seed label "Decision No. 70" | **Correct the name** | It's MOFCOM/GAC **Announcement** No. 70 of 2025 | High |
| FEOC/PFE thresholds | **Partly wrong** | Battery components: 60 / 65 / 70 / **80** / 85% (2026→2030+). Storage projects: 55 / 60 / 65 / 70 / 75% | High |
| Section 1260H | Holds, with one correction | BYD, CALB and EVE added **8 Jun 2026** (FR 2026-11571). CATL was **already listed in Jan 2025** and remains | High |
| Sulphuric-acid shock | Holds (figures confirmed) | Easing in Q3 2026 after the ceasefire; Benchmark flags Q4 re-disruption risk | Medium |
| UFLPA | Extended | 187 entities (3 Aug 2026). None of the project's case companies is listed. Battery-relevant listings in §5 | High |

## 1. China export controls

| # | Finding | Source | Tier | Conf |
|---|---|---|---|---|
| EC-1 | MOFCOM/GAC Announcement No. 58 of 2025 (9 Oct 2025) adds to the dual-use control list: high-performance lithium batteries (cells and packs), cathode materials, artificial-graphite anode materials, and the equipment and technology to make them (codes 3A001, 3B901.a–c, 3C901, 3C902.b.2, 3E901.a–b) | Pillsbury summary table; White & Case | T2 | High (two agree) |
| EC-2 | Announcement No. 70 of 2025 (7 Nov 2025) suspends Nos. 55–58, 61 and 62 **from 7 Nov 2025 to 10 Nov 2026** | Global Times (state media, reporting MOFCOM); CIRS; Pillsbury | T1 (via state media) / T2 | High |
| EC-3 | Graphite items under **Ann. No. 39/2023 (1C108)** still need a dual-use export licence. The suspension doesn't cover them | 0523.tw compliance summary (as of 23 Aug 2026), citing MOFCOM | T3 | Low. T3 only; needs a MOFCOM primary (rubric fix, B-08) |
| EC-4 | Ann. No. 72 (9 Nov 2025) suspends the US-specific tightening for gallium, germanium, antimony, superhard materials and graphite (Art. 2 of Ann. 46/2024) **until 27 Nov 2026**. The ban on dual-use exports to **US military end users stays** | Pillsbury; Clark Hill | T2 | High |

**Relevance to ethics.** The export controls are a supply-security issue, not a harm. But they decide whether non-Chinese chains can get process know-how (CATL licensing to Ford; Nano One). That matters to the "does a non-Chinese chain change the risk picture?" question in B-09 and B-10. Gallium (carbon-O₂ stack, trace amounts) falls under EC-4.

## 2. FEOC / prohibited foreign entity (US tax credits)

| # | Finding | Source | Tier | Conf |
|---|---|---|---|---|
| FE-1 | IRS Notice 2026-15 (12 Feb 2026) gives interim safe harbours for the **material assistance cost ratio (MACR)** under §§ 45X, 45Y and 48E. The PFE definition is left to forthcoming proposed regulations, with only "limited general guidance" | IRS Notice 2026-15 and IRS news release; Regulations.gov IRS-2026-0166 | T1 | High |
| FE-2 | **Energy storage technology** (48E), by year construction begins: 2026 **55%**, 2027 60%, 2028 65%, 2029 70%, 2030+ 75% | 26 U.S.C. § 7701(a)(52)(B)(ii) | T1 | High |
| FE-3 | **Qualifying battery components** (45X), by year sold: 2026 **60%**, 2027 65%, 2028 70%, 2029 **80%**, 2030+ 85% | 26 U.S.C. § 7701(a)(52)(C)(i)(IV) | T1 | High |
| FE-4 | **Applicable critical minerals** (45X): 0% until 2029, then 25 / 30 / 40 / 50% (2030→2033+) | 26 U.S.C. § 7701(a)(52)(C)(i)(V) | T1 | High |

**Seed correction.** The seed's "60% non-PFE in 2026, +5 pts/yr to 85% in 2030" describes FE-3 only, and the 2028→2029 step is +10, not +5. Grid projects (VRFB, Ni-H₂, LFP storage) follow FE-2, not FE-3.

**Relevance to ethics.** FEOC tests *ownership*, not labour or environmental conduct. A chain can pass FEOC and still carry documented harm (e.g. Indonesian nickel through non-PFE refiners). Label it **governance**, not harm, on the policy-risk overlay.

## 3. Section 1260H ("Chinese military companies")

| # | Finding | Source | Tier | Conf |
|---|---|---|---|---|
| MC-1 | DoD notice of 10 Jun 2026 (FR doc. 2026-11571) designates, among others: **BYD** (affiliated with SASAC and MIIT; military-civil fusion contributor), **CALB** (indirectly owned by SASAC), **EVE Energy** (affiliated with SASAC; military-civil fusion contributor), **CATL** (indirectly affiliated with MIIT; affiliated with SASAC) | Federal Register 2026-11571 | T1 | High |
| MC-2 | CATL was first listed in **January 2025** (FR 2025-00070) and appears again in June 2026. BYD, CALB and EVE are **new** in June 2026 | FR 2025-00070; WilmerHale; CarNewsChina | T1 / T2 | High |
| MC-3 | The list adds 65 entities (17 parents, 48 subsidiaries); 188 in total | WilmerHale (11 Jun 2026); TaiyangNews | T2 | High |
| MC-4 | Consequence: DoD may not contract directly with listed entities from **30 Jun 2026**, or indirectly from **30 Jun 2027** (FY2024 NDAA). Designation doesn't sanction the company or bar private trade | TheNextWeb; eletric-vehicles.com (citing the FY2024 NDAA) | T2 | Medium. Cite the NDAA section directly in B-26 |
| MC-5 | **Not on the 10 Jun 2026 list** (searched by name): Gotion, Great Power, Rongke Power, Huaneng, PowerChina, Dynanonic, Shanshan, Ronbay | FR 2026-11571 full text | T1 | High (as at that date) |

**Labelling.** These are official-list entities, so they're **named** (decision of 2026-10-05). The label is "Section 1260H list (US DoD), designation, not a finding of harm", with the stated basis quoted. 1260H concerns military affiliation, so it goes on the policy-risk overlay, **not** the ethical-risk profile.

## 4. Sulphur and sulphuric acid

| # | Finding | Source | Tier | Conf |
|---|---|---|---|---|
| SA-1 | Over half of 2026 lithium, cobalt, rare-earth and purified phosphoric acid (PPA) production is exposed to sulphur/acid shocks. **100% of high-purity manganese sulphate (HPMSM)** is exposed | Benchmark Mineral Intelligence (free article); MINING.COM (28 May 2026) | T2 | Medium. MINING.COM reports Benchmark's analysis, so this is one source, not two independent ones (rubric fix, B-08) |
| SA-2 | Acid is now **11%** of hard-rock lithium chemical C1 cost (was 3%). Sulphur is **42%** of HPAL nickel cost (was 26%). Acid is **59%** of PPA production cost | Benchmark; Oregon Group | T2 | Medium (one underlying analysis) |
| SA-3 | Indonesia sourced 76% of its sulphur imports from the Middle East (2025). Sulphur to Indonesia rose from US$101/t (Jul 2024) to US$554/t (Jan 2026) before the conflict | Oregon Group (citing Benchmark); Atlantic Council | T2 | Medium |
| SA-4 | DRC copper-cobalt leaching is 50–60% reliant on imported acid; southern African sulphur imports come almost entirely from the Middle East | Atlantic Council | T2 | Medium |
| SA-5 | China's unofficial restriction on sulphuric-acid exports; spot acid > US$380/t (Indonesia), > US$440/t (Chile) | MINING.COM, citing Benchmark | T2 | Medium |
| SA-6 | **Q3 2026:** sulphur availability improved "as tensions cooled"; Benchmark warns renewed Hormuz disruption could reverse it in Q4 | Benchmark Q3 2026 nickel price review | T2 | Medium |
| SA-7 | A UFLPA-listed miner (Zijin Mining and Xinjiang subsidiaries, Jan 2025) is cited for sourcing XUAR materials **including sulphuric acid** | DHS/CBP CSMS 63743803; FR 2025-00901 | T1 | High (as listing) |

**Exposure by chemistry** (for the policy-risk overlay):

| Chemistry | Acid-dependent nodes | Exposure |
|---|---|---|
| LMFP | HPMSM (S1); phosphoric acid (S1) | **Highest:** 100% HPMSM plus PPA |
| LFP | PPA (S1); hard-rock lithium (S1) | High |
| NMC | HPAL nickel, cobalt, lithium, HPMSM | High |
| Ni-H₂ | HPAL nickel, DRC cobalt | High |
| VRFB | Vanadium leaching (route-dependent: confirm in B-11) | Unknown → B-11 |
| Carbon-O₂ | None identified | GAP |

**Relevance to ethics.** Sulphuric acid is outside the EU due-diligence list and isn't in the battery. It's a reagent nobody's passport will ever mention. SA-7 shows that at least one acid source carries an official forced-labour listing. On the scorecard it's shown as an **unseen dependency**: structural, not covered.

## 5. UFLPA (cross-check of project companies)

The 3 Aug 2026 list (187 entities) was searched by name for every company in `electrum-seed.md`.

| Result | Entities |
|---|---|
| **Listed, battery-relevant** | SDIC Xinjiang Lithium; Xinjiang Tianhongji (anode); Shihezi Xinren Battery Aluminum Foil (Tianshan Aluminum group); Xinjiang Nonferrous Metals Industry Group (listed 25 Nov 2024; named in *Driving Force* for lithium and manganese); Zijin Mining and Xinjiang subsidiaries (copper, zinc, sulphuric acid) |
| **Not listed** (seed case companies) | CATL, BYD, EVE, Gotion, Great Power, Rongke Power, Dynanonic, Shanshan, Ronbay, Huaneng (Jimusar owner), PowerChina (Jimusar integrator) |

⚠ **Name-collision warning.** "Xinjiang Jinchuan Mining Industry Co." (added 3 Aug 2026) is a **gold** miner owned by Shandong Gold. It isn't Jinchuan Group, the nickel and cobalt producer. Any Sayari or text match on "Jinchuan" must be checked against identifiers before it's used. Add this to the methods-page artefact list.

## 6. Copper

Copper is in every chemistry (current collectors, busbars, wiring) and cannot be designed out (seed, report §5). The US DOL lists DRC copper ore (child labour) and Chinese lithium-ion batteries and electrolytic copper (child-labour input) (`harm-evidence.md` CU-1). Copper is **not** on the EU due-diligence list. It's the one documented-harm material shared by all six chemistries, including those marketed as "critical-mineral-light".

## 7. Re-check schedule

| Item | Re-check on or after | Why |
|---|---|---|
| Ann. No. 58 / No. 70 | **11 Nov 2026** | Suspension expires 10 Nov 2026 |
| Ann. No. 72 (Ga/Ge/Sb, US-specific) | **28 Nov 2026** | Suspension expires 27 Nov 2026 |
| Omnibus IV (EU DD threshold) | Monthly | Formal adoption pending (`regulation.md`) |
| Sulphur/acid | Before demo | Q4 disruption risk |
| UFLPA / 1260H | Before demo | Lists change without notice |

## Sources

| Id | Source | Tier | Retrieved |
|---|---|---|---|
| X1 | Pillsbury, "China Suspends Export Controls on Certain Critical Minerals and Related Items" and summary table PDF. https://www.pillsburylaw.com/en/news-and-insights/china-suspends-export-controls-certain-critical-minerals-related-items.html | T2 | 2026-10-05 |
| X2 | Global Times, "China suspends implementation of certain export control measures…" (7 Nov 2025). https://www.globaltimes.cn/page/202511/1347625.shtml | T1 (state media, reporting MOFCOM) | 2026-10-05 |
| X3 | White & Case, "China imposes extraterritorial jurisdiction and a 50% Rule…". https://www.whitecase.com/insight-alert/china-imposes-extraterritorial-jurisdiction-and-50-rule-export-controls-rare-earth | T2 | 2026-10-05 |
| X4 | 0523.tw, "China Lithium-Battery and Graphite-Anode Export Controls" (as of 23 Aug 2026). https://0523.tw/china-lithium-battery-graphite-export-control?lang=en | T3 | 2026-10-05 |
| X5 | Clark Hill, "China Hits 'Pause' on Rare-Earth Export Controls". https://www.clarkhill.com/news-events/news/china-hits-pause-on-rare-earth-export-controls-and-what-it-means-for-supply-chains | T2 | 2026-10-05 |
| X6 | IRS Notice 2026-15. https://www.irs.gov/pub/irs-drop/n-26-15.pdf ; IRS news release | T1 | 2026-10-05 |
| X7 | 26 U.S.C. § 7701(a)(52), LII. https://www.law.cornell.edu/uscode/text/26/7701 | T1 | 2026-10-05 |
| X8 | DoD, "Notice of Availability of Designation of Chinese Military Companies", Federal Register 2026-11571 (10 Jun 2026). https://www.federalregister.gov/documents/2026/06/10/2026-11571/notice-of-availability-of-designation-of-chinese-military-companies | T1 | 2026-10-05 |
| X9 | DoD, Federal Register 2025-00070 (7 Jan 2025). https://www.federalregister.gov/documents/full_text/xml/2025/01/07/2025-00070.xml | T1 | 2026-10-05 |
| X10 | WilmerHale, "Pentagon Adds 65 New Entities to the 1260H List" (11 Jun 2026). https://www.wilmerhale.com/en/insights/client-alerts/20260611-pentagon-adds-65-new-entities-to-the-1260h-list-of-chinese-military-companies | T2 | 2026-10-05 |
| X11 | Benchmark Mineral Intelligence, "What the sulphuric acid supply crunch means for critical minerals". https://source.benchmarkminerals.com/article/what-the-sulphuric-acid-supply-crunch-means-for-critical-minerals | T2 | 2026-10-05 |
| X12 | MINING.COM, "CHARTS: How the sulphuric acid crunch is driving up critical minerals costs" (28 May 2026). https://www.mining.com/charts-how-the-sulphuric-acid-crunch-is-driving-up-critical-minerals-costs | T2 | 2026-10-05 |
| X13 | Atlantic Council, "The Hormuz crisis is making low-carbon energy strategies more expensive". https://www.atlanticcouncil.org/blogs/energysource/the-hormuz-crisis-is-making-low-carbon-energy-strategies-more-expensive | T2 | 2026-10-05 |
| X14 | Benchmark, Q3 2026 Nickel Price Review. https://source.benchmarkminerals.com/article/mid-year-production-quotas-and-underwhelming-ncm-demand-weaken-market-fundamentals-nickel-q3-2026-price-review | T2 | 2026-10-05 |
| X15 | The Oregon Group, "Uranium's Cigar Lake shutdown exposes mining's sulphuric acid crisis" (citing Benchmark). https://theoregongroup.com/commodities/cobalt/uraniums-cigar-lake-shutdown-exposes-minings-sulphuric-acid-crisis | T3 | 2026-10-05 |
| X16 | DHS, UFLPA Entity List notices: FR 2026-15628 (3 Aug 2026); FR 2025-00901 (15 Jan 2025); CBP CSMS 63743803. https://www.federalregister.gov/documents/2025/01/15/2025-00901/notice-regarding-the-uyghur-forced-labor-prevention-act-entity-list ; https://www.dhs.gov/uflpa-entity-list | T1 | 2026-10-05 |
