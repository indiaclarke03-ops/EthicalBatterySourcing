# LMFP: lithium manganese iron phosphate (B-10)

*As of 2026-10-05 · Researched with Claude Code (Tavily, Sayari) from `electrum-seed.md` · Status: for India's review*

**Passport depth:** full (core). **Use case:** EV, **in scope** (High). Storage use isn't established (seed).

## Headline

LMFP is LFP plus manganese, so it inherits everything in `lfp.md` and adds the **manganese-sulphate chain**:
- **Outside the EU due-diligence list**: no legal duty to look upstream.
- **No assurance scheme**: no RMI list, no IRMA manganese mine.
- **100% exposed to sulphuric acid**.
- **Documented harm at both ends**:
  - ore mining: child labour in Zambia (US DOL); neurological symptoms in 26% of miners studied, plus dust and water impacts on communities, in South Africa's Kalahari field;
  - refining: heavy-metal pollution in Chinese manganese districts.
- **Sayari screen:** 350 of 1,148 manganese-sulphate suppliers carry a forced-labour-category screening flag. The flags mean **trade-network proximity to Xinjiang-linked or DOL-listed goods, not findings of forced labour** (§S1).

**A European LMFP chain changes the picture only downstream.** OLiMPUS (Horizon Europe) and Integrals Power make cathode in Europe. Their manganese still comes from the same ore (South Africa 46%, Gabon 19%) and, almost certainly, Chinese sulphate refining. No public source traces a European LMFP cell to its manganese mine: **GAP**.

## Supply chain and ethical-sourcing profile by stage

### S0: manganese ore

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| Global Mn ore 2025 | 21.4 Mt Mn contained (+10%). **South Africa 46%, Gabon 19%, Australia 9%, Ghana 7%**, India 5%, China 3% | IMnI Annual Review 2025 (M1) | T2/OS | Medium (single industry body) |
| Kalahari Manganese Field (Hotazel, Northern Cape, ZA) | Mines include Tshipi Borwa, Hotazel Manganese Mines, Mamatwan (South32), UMK, Kudumane, Kalagadi | Mining Weekly; Northern Cape Mining Community (industry) (M2) | T2 | Medium |
| Moanda, Gabon (Eramet Comilog) | World's largest manganese mine (company) | Eramet; Reuters (M3) | T1 (statement) / T2 | High (as statement) |
| Lithium, iron, phosphate, graphite | As in `lfp.md` S0 | — | — | — |

**S0 ethical profile**

| Risk | Codes | Signal | Assurance | EU DD | Conf |
|---|---|---|---|---|---|
| Kalahari: miners report memory loss and neurological symptoms; a study found **26% of manganese miners examined in Hotazel had Parkinson's-like symptoms**; workers say they weren't warned | OHS, HH | Documented harm | None (no IRMA Mn mine) | **Not covered** | High (WaPo 2023 + Oxpeckers 2026, independent) |
| Kalahari communities: toxic dust on crops, grazing and water; houses cracked by blasting; **groundwater nitrate above the WHO guideline** near Tshipi Borwa (2018 assessment); boreholes drying from dewatering | COM, ENV-A, ENV-W, HH | Documented harm | None | **Not covered** | High (as above) |
| Zambia: child labour in artisanal Mn mining | LR-CL, OHS | Documented harm (DOL) | None | **Not covered** | High |
| Gabon (Moanda): no NGO, investigative or academic harm source found; only company CSR material | — | No known evidence → shown as gap | None | **Not covered** | Unknown |

### S1: high-purity manganese sulphate (HPMSM)

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| HPMSM supply | China ≈95% of battery-grade | Seed (Benchmark) | T2 | Medium. Seed, not re-verified (IMnI 2025 confirms China-led output growth) |
| Acid dependence | **100%** of HPMSM supply exposed to sulphur/acid shocks | `cross-cutting.md` SA-1 | T2 | Medium |
| Mn-sulphate supplier network (Sayari, **re-run 2026-10-05**) | Trade search "manganese sulphate", HS 283329: **1,148** supplier entities; China **466**; India 395, Germany 206, Korea 191, USA 190. **350** carry ≥1 forced-labour-category screening flag | Sayari trade facets [M4] | S-TRADE | Medium (reproduces seed 1,145 / 463 / 346 within normal data drift; database statement, no public corroboration) |

**What the 350 flags mean (artefact check, done 2026-10-05).** The largest flag groups among these suppliers are:

| Flag (Sayari definition) | Suppliers |
|---|---|
| Exports a good whose HS code and origin country are on the US DOL forced-labour list, **"may include 'Possibly the Same As' path"** | 242 |
| Xinjiang-assessed entity in **tier 2–3** of its supplier network (PSA path possible) | 175 |
| UFLPA-listed entity in tier 2–3 (PSA path possible) | 157 |
| Exports a DOL-listed good (direct, no PSA) | 155 |
| Entity named in a Sheffield Hallam report in tier 2–3 (PSA path possible) | 138 |

Groups overlap.

Caveats that must travel with the number:
1. **These are proximity and product-class flags.** None is a finding that a supplier used forced labour.
2. **"PSA" = "Possibly the Same As"**: links between records that *may* be the same company. That's an entity-resolution artefact risk, so **no individual supplier may be named from this screen** (aggregate-only rule).
3. **Scope:** HS 283329 is "sulphates n.e.c.", and the text match is "manganese sulphate". The network includes feed- and fertiliser-grade manganese sulphate and other traders, **not only battery-grade HPMSM**.

**Wording for the site:** "Of 1,148 companies that Sayari's trade data shows supplying manganese sulphate, 350 carry at least one forced-labour-related *screening* flag, mostly for trading a product on the US Labor Department's list or for links two to three tiers upstream to Xinjiang-assessed or UFLPA-listed companies. These are database signals, not findings of forced labour."

**S1 ethical profile**

| Risk | Codes | Signal | Assurance | EU DD | Conf |
|---|---|---|---|---|---|
| Chinese Mn industry: severe water and soil pollution (2025 peer-reviewed); refineries discharging toxic waste, workers with neurological illness (2008–10 investigative) | ENV-W, ENV-S, HH, OHS | Documented harm | None | **Not covered** | High (historical) / Medium (current) (`harm-evidence.md` MN-2, MN-3) |
| Forced-labour proximity flags (aggregate, above) | LR-FL | Screening flag (aggregate) | None | **Not covered** | Medium |
| Acid dependency | — | Structural | — | **Not covered** | Medium |

### S2: LMFP cathode

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| Global LMFP shipments | **13,000 t in 2024**; ~35,000 t projected 2025; > 1.3 Mt forecast by 2030 | EVTank white paper via ChinaEVHome (M5) | T2 | Medium |
| Dynanonic, Qujing (Yunnan) | **110,000 t/yr** LMFP project commissioned **19 Sep 2022**, CNY 2.59bn; "world's first LMFP project over 100,000 t/yr"; supplies LMFP for CATL M3P (2023 report) | SMM citing company (M6); LatePost via EVsmart | T2 | High (two sources) |
| ⚠ Seed conflict resolved | Seed: report "> 80,000 t/yr" vs deck "110,000 t/yr". The commissioning record supports **110,000 t/yr** | M6 | — | Resolved → B-16 note |
| ⚠ Seed correction | Seed: "Dynanonic 2024 shipments ≈13,000 t". EVTank gives **13,000 t as total global LMFP shipments** in 2024. The seed appears to conflate the two | M5 | — | Correct the seed |
| Dynanonic planned capacity | 440,000 t by end 2025 (plan) | SMM; NextBigFuture (T3) | T2/T3 | Low (plan, not verified as built) |
| Dynanonic–ICL, Sallent (Spain) | €285m LFP cathode JV (Jan 2025): the EU-located node | Battery-Tech Network (T3) | T3 | Low. Needs a primary |
| Other LMFP cathode makers | Ronbay, Easpring, Hunan Yuneng, Hengchuang Nano, Zhiliang | ChinaEVHome (M5) | T2 | Medium |
| Shanshan | CNY 3.8bn expansion (Sep 2025) | Seed (report, T3) | T3 | Low. Seed, not re-verified |
| Shanshan: reported partner of Xinjiang Tianhongji (UFLPA-listed anode maker) | *Driving Force* names Shanghai Shanshan among "major partners" reported for Tianhongji | H12 | T2 | Medium (as reported partnership; not a finding about Shanshan) |
| Ronbay / SKLD | Acquired 68.25% of SKLD | Seed (company announcements) | T1 | Medium. Seed, not re-verified |
| Integrals Power (UK) | Supplies > 150 kg LMFP CAM (80% Mn) to **OLiMPUS**: a €9m Horizon Europe project, 16 partners incl. Volvo, Magna Steyr, Verkor, Vianode, Corvus; runs to 2030; > 130 cells; target 220 Wh/kg | Charged EVs; SINTEF; APTI (M7) | T2 | High |
| Yinchuan LMFP base | CNY 4.8bn, 130,000 t/yr LMFP base broke ground Mar 2026 (company not named in source) | Mysteel (M8) | T2 | Medium |

**S2 ethical profile:** inherits the manganese S0/S1 profile. Shanshan's reported partnership with a UFLPA-listed anode maker is shown as a **reported link**, signal "screening flag (official list, second-hand)", Medium. No entity-level harm evidence was found for LMFP cathode plants.

### S3: cells

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| CATL M3P | LMFP blended with ternary material; in Tesla Model Y (China), Chery Star Era ES, Luxeed S7 | ChinaEVHome (M5); LatePost via Moomoo | T2 | Medium |
| CATL M3P plant size | "Reported 120 GWh LMFP-capable plant" | Seed; NextBigFuture | T3 | Low |
| Gotion High-Tech | Uses LMFP blending in its L600 "Qichen" cell. 5th globally in EV battery installs in 2025 (53.5 GWh, 4.5%) | ChinaEVHome; ChoZan citing SNE (M9) | T2/T3 | Medium |
| Gotion ownership | **Volkswagen ≈25%, largest shareholder.** VW agreed (Sep 2026) to sell a 5.3% stake while keeping its voting rights. JVs announced **28 Sep 2026**: Valencia (PowerCo 51%), Šurany SK (Gotion 51%), **Kénitra LFP-cathode JV (Gotion 51%)** | Volkswagen Group press release no. 82/2026 (M10); electrive; AMS | T1 | High |
| Gotion: Sayari SOE flag (**seed correction**) | The seed recorded an "SOE-owned flag". Sayari's flags on Gotion are **"Chinese SOE-adjacent"** and **"owner of SOE"** (Gotion owns stakes in state-linked entities), **not** "owned by an SOE". They sit on a record under Gotion's **former shell name** (Jiangsu Dongyuan Electrical, same USCC 91320600138346792B), and that record lists **itself as its own 99.8% shareholder**: a self-ownership loop. **Artefact pattern matched: stale register after rename** | Sayari [M11, M12] | S-REG | **Low** (artefact). Don't publish an SOE label for Gotion |
| Gotion: other Sayari flags | "regulatory_action" and "owned_by_regulatory_action_entity" appear on Gotion records. **Basis not identified** | Sayari [M11] | S-REG | Unknown. Don't publish until the basis is found |
| Great Power, Guangzhou | Makes LMFP and Ni-H₂ | PitchBook, via Electrum report (Aug 2026) | T2 | Medium |

**S3 ethical profile:** no entity-level harm evidence found. Policy overlay: CATL 1260H-listed; Gotion **not** 1260H-listed (`cross-cutting.md` MC-5).

### S5: deployment

| Node | Claim | Src | Conf |
|---|---|---|---|
| EV models | Six commercial LMFP models in China (2024); storage not established | Seed (Mitsui; IEA) | Medium. Seed, not re-verified |
| OLiMPUS cost targets | €56–65/kWh cell, €67–75/kWh pack | Seed (Charged EVs) | Low (forecast) |

## EU due-diligence and assurance coverage

| Input | EU DD | Assurance | Worst documented signal |
|---|---|---|---|
| Manganese (ore + sulphate) | **Not covered** | **None** | **Documented harm** (ZA miners and communities; Zambia CL; China pollution) |
| Lithium, graphite, phosphate, iron, copper, aluminium | As `lfp.md` | As `lfp.md` | As `lfp.md` |

**Passport #15** (critical raw materials > 0.1%) would likely list manganese (CRMA Annex II; inference, Low; `fields.md` §4). **#19** (responsible sourcing) would say nothing about it.

**Traceability depth:** S0 at country level (Medium–High); named S1/S2 node Dynanonic Qujing (High); **no cell traceable to a manganese mine or refinery** (GAP).

## Conflicts and corrections for B-16

1. Dynanonic capacity: 80,000 vs 110,000 t/yr → **resolved: 110,000** (commissioning record).
2. Dynanonic "2024 shipments ≈13,000 t" → **seed error**: that's the global LMFP total (EVTank).
3. Gotion "SOE-owned" → **seed misreading**: Sayari shows SOE-adjacent / owner-of-SOE flags on an artefact record.

## Gaps

- Which HPMSM refiners feed Dynanonic or any named LMFP cathode maker (seed gap #6, still open).
- Gabon (Moanda) harm evidence.
- Basis of Sayari "regulatory_action" flags on Gotion.
- Dynanonic–ICL Sallent primary source.

## Sources

| Id | Source | Tier | Retrieved |
|---|---|---|---|
| M1 | International Manganese Institute, *Annual Review 2025* (Apr 2026). https://www.manganese.org/sites/default/files/2026-04/2025%20Annual%20Review.pdf | T2 | 2026-10-05 |
| M2 | Mining Weekly, "Kalahari Manganese Field"; Washington Post, "Demand for EV mineral skyrockets, leaving miners largely overlooked" (2023). https://www.washingtonpost.com/world/interactive/2023/ev-mineral-manganese-south-africa ; Oxpeckers, "The hidden cost of manganese" (Jul 2026). https://oxpeckers.org/2026/07/cost-of-manganese | T2 | 2026-10-05 |
| M3 | Eramet, Manganese; Reuters (2 Jun 2025) on Gabon export ban. https://www.reuters.com/world/africa/frances-eramet-says-it-will-work-with-gabon-despite-manganese-export-ban-2025-06-02 | T1/T2 | 2026-10-05 |
| M4 | Sayari Graph, trade facets, query "manganese sulphate", HS 283329, scope suppliers (run 2026-10-05); risk-factor definitions (exports_ilab_forced_labor, psa_*, forced_labor_*_origin_subtier) | S-TRADE | 2026-10-05 |
| M5 | ChinaEVHome, "LMFP Commercialization Accelerates…" (16 Oct 2025), citing EVTank. https://chinaevhome.com/2025/10/16/lmfp-commercialization-accelerates-global-shipments-seen-exceeding-1-3-mt-by-2030 | T2 | 2026-10-05 |
| M6 | SMM, "World's First LMFP Project with a Capacity over 100,000 mt/year Commissioned in Qujing, Yunnan". https://news.metal.com/newscontent/101952512 | T2 | 2026-10-05 |
| M7 | Charged EVs, "Integrals Power to supply LMFP cathode material to EU-funded OLiMPUS"; SINTEF project page. https://chargedevs.com/newswire/integrals-power-to-supply-lmfp-cathode-material-to-eu-funded-olimpus-battery-project | T2 | 2026-10-05 |
| M8 | Mysteel FLASH (30 Mar 2026), Yinchuan LMFP base. https://www.mysteel.net/news/5104452 (index page) | T2 | 2026-10-05 |
| M9 | ChoZan, "Gotion Battery" (citing SNE via CnEVPost) | T3 | 2026-10-05 |
| M10 | Volkswagen Group, "Volkswagen Group, PowerCo and Gotion deepen strategic partnership" (no. 82/2026). https://www.volkswagen-group.com/en/press-releases/volkswagen-group-powerco-and-gotion-deepen-strategic-partnership-20710 ; electrive (28 Sep 2026) | T1 | 2026-10-05 |
| M11 | Sayari Graph, 江苏东源电器集团股份有限公司 / Gotion High-tech Co., Ltd., entity sfUxx_TMvkJFG13vTnqbwQ. https://graph.sayari.com/resource/entity/sfUxx_TMvkJFG13vTnqbwQ | S-REG | 2026-10-05 |
| M12 | Sayari Graph, 国轩高科股份有限公司, entity cqrsueiPWsIEIMOtO6v_Pg. https://graph.sayari.com/resource/entity/cqrsueiPWsIEIMOtO6v_Pg | S-REG | 2026-10-05 |
| H12, MN-*, SA-* | See `harm-evidence.md`, `cross-cutting.md` | — | — |
