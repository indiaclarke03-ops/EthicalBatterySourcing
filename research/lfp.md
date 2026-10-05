# LFP: lithium iron phosphate (B-09)

*As of 2026-10-05 · Researched with Claude Code (Tavily, Sayari) from `electrum-seed.md` · Status: for India's review*

**Passport depth:** full (core). **Use cases:** EV, grid/stationary, data-centre backup, all **in scope** (High; `regulation.md` §5).

## Headline: what changing to LFP does to ethical risk

- **Removed:** cobalt and nickel, and with them DRC artisanal-cobalt and Indonesian-HPAL exposure.
- **Kept:** lithium (incl. Jiangxi lepidolite, with a documented 2022 thallium pollution case and no assurance scheme); graphite anode (incl. a UFLPA-listed Xinjiang anode maker); copper (a US DOL child-labour input to Chinese Li-ion batteries).
- **Added or deepened:** phosphate and iron, neither on the EU due-diligence list, with documented phosphorus pollution in the upper Yangtze basin; and almost total dependence on China for cathode (98%) and anode (> 90%) material.
- **EU due diligence would see:** lithium and natural graphite only. Phosphate, iron, copper, aluminium and synthetic graphite (Unclear) fall outside it. **The passport's #19 field would cover roughly two of LFP's seven material inputs.**

## Supply chain and ethical-sourcing profile by stage

Tags: tier / provenance tag / confidence. "Seed, not re-verified" means the row is carried from `electrum-seed.md` because Tavily or Sayari couldn't confirm it this pass. It's capped at Medium and marked for the gaps view.

### S0: ore and feedstock

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| Lithium: China lepidolite (Yichun, Jiangxi) | Yichun is "Asia's lithium capital": in 2021 it produced 81,000 t lithium carbonate, more than a quarter of China's output | Global Times, citing stcn.com (L5) | T2/OS | Medium |
| Lithium: CATL Jianxiawo lepidolite mine (Yichun) | Low-grade lepidolite (~0.27–0.28% Li₂O) mined under a **ceramic-clay** permit. Suspended **Aug 2025** when the licence expired, after lithium was reclassified as a strategic mineral. New EIA published for consultation 27 Jul 2026 | Reuters via Engineering News / MINING.COM (7 Aug 2026); Gasgoo (L6) | T2/OS | High (status as of Aug 2026) |
| ⚠ Conflict | Restart: Baidu Baike says production resumed **29 Jun 2026**; Reuters/state media (7 Aug 2026) say it **remains closed** pending EIA approval | L6 | — | Low (conflict) → B-16 |
| Lithium: hard rock / brine imports | China processes most lithium; imports include Australian spodumene, Zimbabwean ore, South American brine | IEA GCMO 2025 (L1) | T2/OS | Medium (country level) |
| Graphite (natural) | China ≈75% of natural production | Seed (report §5.1) | T2 | Medium. Seed, not re-verified |
| Phosphate: China | Upper Yangtze basin (Sichuan, Guizhou, Hubei, Yunnan) produces most Chinese phosphate rock; LFP cathode makers are integrating upstream into Guizhou phosphate mines | `harm-evidence.md` PH-1, PH-2 | T2/OS | High / Medium |
| Phosphate: First Phosphate, Bégin-Lamarche (QC) | Igneous phosphate; offtakes 200,000 tpa concentrate. Feasibility study expected early 2027 | Company; Emerging Growth (Sept 2026); Proactive (L2) | T1 (statement) / T3 | Medium |
| Iron (for iron phosphate) | **GAP:** no source for where LFP-grade iron feedstock comes from | — | GAP | Unknown |
| Copper, aluminium (foils) | See `cross-cutting.md` §6 and `ethical-sourcing.md` §3 | — | — | — |

**S0 ethical profile**

| Risk | Codes | Signal | Assurance | EU DD | Conf |
|---|---|---|---|---|---|
| Yichun lithium: thallium pollution of the Jin River (the city's main drinking-water source), Nov–Dec 2022. Lithium carbonate plants halted; the city government found a lithium processor's unit and a lead recycler had **discharged pollutants by evading supervision**, and police opened a case. An official report said many lithium extraction projects were built **without government approval** | ENV-W, HH | Documented harm (historical, 2022) | None known (no IRMA site in Jiangxi) | Covered (lithium) | High (Yicai, SCMP, Global Times agree) |
| Jianxiawo: mining lithium under a ceramic-clay permit until the 2025 law change | ENV-S (governance) | Structural (regulatory non-alignment, not harm) | None known | Covered | High (as status) |
| Imported lithium: Zimbabwe child labour (DOL); Atacama water and Indigenous rights | LR-CL, ENV-W, COM | Documented harm | IRMA at some brine/hard-rock sites (`ethical-sourcing.md` §4) | Covered | High |
| Xinjiang lithium (SDIC Xinjiang Lithium; Xinjiang Asia-Europe Rare Metal) | LR-FL | Screening flag (UFLPA) + documented harm (academic) | None | Covered | High |
| Chinese phosphate: Yangtze phosphorus pollution | ENV-W, ENV-S | Documented harm (environment) | None (no scheme for phosphate) | **Not covered** | High |
| First Phosphate: no harm found; collaboration agreement with Pekuakamiulnuatsh (exploration stage) | COM | No known evidence; FPIC status GAP | None | **Not covered** | High (as statement) |
| Iron feedstock | — | GAP | — | **Not covered** | Unknown |
| Copper: child-labour input to Chinese Li-ion batteries | LR-CL | Documented harm (DOL) | RMI copper list exists | **Not covered** | High |

### S1: refining and chemicals

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| Refined lithium, phosphate, graphite | China processed **70–95%** of global lithium, cobalt, phosphate and graphite in 2024 | IEA GCMO 2025 (L1); Reuters (14 Sep 2026) for 2025 (L1b) | T2/OS | High (two agree) |
| Refined lithium (single figure) | China ≈65% | Seed (IEA; Benchmark deck) | T2 | Medium. Shown beside the IEA band, not merged |
| Purified phosphoric acid (PPA) | Sulphuric acid is **59%** of PPA production cost; > 50% of PPA output is exposed to acid shocks | `cross-cutting.md` SA-1, SA-2 | T2 | Medium |
| First Phosphate, Port Saguenay PPA plant (proposed) | 60,000 tpa offtake; letters of intent from SACE, CDP, SIMEST; MAIRE support | Company; Noble Capital via Proactive (L2) | T1 (statement) / T3 | Medium |

**S1 ethical profile:** Yichun processing (above, documented harm); Xinjiang lithium processing (above); sulphuric-acid dependency for PPA (structural, not covered; `cross-cutting.md` §4).

### S2: active materials

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| LFP cathode | China produced **98%** of LFP cathode material (2024; Reuters reports the same for 2025) | IEA GCMO 2025; Reuters (L1, L1b) | T2/OS | High |
| Anode material | China produced **over 90%** of anode material (2024) | IEA GCMO 2025 (L1) | T2/OS | High |
| Nano One, Candiac (QC) | One-Pot LFP: pilot line 200 tpa; expanding to **800 tpa**, target H1 2027 per analyst; NRCan C$5.0m (Oct 2025); Rio Tinto lithium pre-qualified (2026) | Nano One (L3); KoalaGains (T3, timing) | T1 (statement) | Medium |
| Nano One Candiac: registry corroboration | Sayari: "Nano One Materials Candiac Inc" and "Johnson Matthey Matériaux pour Batteries Ltée" share the address **280 av. Liberté, Candiac**. This fits the company's statement that it uses an existing commercial LFP plant | Sayari [N1, N2] + Nano One (L3) | S-REG + T1 | Medium (artefact check: clean; exact match on street address and Québec registry, not a path trace) |
| Artificial-graphite anode: Xinjiang | Xinjiang Tianhongji (anode materials, UFLPA Aug 2026); reported partners include Shanghai Shanshan (*Driving Force*, July 2025) | E5; H12 | T1 / T2 | High (listing); Medium (partnership as reported) |

**S2 ethical profile**

| Risk | Codes | Signal | Assurance | EU DD | Conf |
|---|---|---|---|---|---|
| Synthetic-graphite anode from XUAR carbon feedstock | LR-FL | Screening flag (UFLPA, named) | None | **Unclear** (synthetic graphite) | High (as listing) |
| Cathode concentration: 98% China; no entity-level harm evidence found for LFP cathode plants | — | Structural (opacity) | None known | Not applicable (processing) | High (concentration) |
| Nano One: no harm evidence | — | No known evidence | None | — | Medium |

### S3: cells

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| CATL | **39.2%** of global EV battery use in 2025 (SNE Research, 9th year at #1); ~20% of BESS cell shipments (Benchmark). **1260H-listed** (Jan 2025; re-listed Jun 2026) | SNE via CATL results (L4); Benchmark via Solarplaza (L7); FR 2026-11571 | T2 / T1 | High |
| CATL Debrecen (HU) | HK listing (May 2025) raised > US$4.6bn, 90% earmarked for Debrecen Phases I–II (34 + 38 GWh LFP); trial cell production reported 2026 | ISPI (L8); Momenta (L8b) | T2 | Medium. The EU-located node for a European LFP passport |
| BYD (FinDreams) | ~16% of EV battery use 2025; **1260H-listed** (Jun 2026) | GSR citing SNE (T3); FR 2026-11571 | T3 / T1 | Low (share: T3 only) / High (listing) |
| EVE Energy | 628Ah "Mr. Big" cell in mass production at the **60 GWh Jingmen** plant since Dec 2024; ~12% of BESS cells (2025). **1260H-listed** (Jun 2026). Shanghang, Malaysia and Debrecen capacities: seed, not re-verified | Gasgoo/SMM (Dec 2024); Benchmark; FR 2026-11571 | T2 / T1 | High (Jingmen) · Medium (others) |
| LG Energy Solution, Lansing MI | US$4.3bn LFP prismatic plant (the former Ultium Cells 3, ~50 GWh, sole LGES ownership since May 2025); production 2027; supplies Tesla Megapack 3 (Houston) | US DOI via Supply Chain Dive; Electrek (L9) | T1 / T2 | High |
| Ford BlueOval Battery Park, Marshall MI | First CATL-licensed LFP prismatic cells **June 2026**; launch-ready cells before end 2026. Ford owns it fully; CATL provides licence and training | Ford via CBT News, electrive (L10) | T1 / T2 | High |
| ⚠ Ford capacity | Seed ≈20 GWh vs 35 GWh announced in 2023 (electrive says 35 GWh referred to a later phase) | Seed; electrive | — | Low (conflict) → B-16 |
| Gotion Power Morocco, Kénitra | AfDB approved a **€100m** loan (Jul 2026) for "Africa's first integrated LFP gigafactory", plus up to €141m to be mobilised | AfDB (L11); ESS News (3 Aug 2026) | T1 | High |
| ⚠ Gotion Morocco capacity | AfDB project page: **20 GWh** LFP + 100,000 t cathode; ESS News: **10 GWh** at launch, expanding to 100 GWh | L11 | — | Low (conflict) → B-16 |
| Gotion Power Morocco: Sayari | Moroccan registry record (no. 74017, Kenitra; third-party Cedar Rose data). **No shareholders or beneficial owners in Sayari**; parent link rests on AfDB and company statements | Sayari [N3] | S-REG | Medium (record exists) · ownership GAP in Sayari |
| Our Next Energy | 20 GWh plan; layoffs; partial loan repayment | Seed | T2 | Medium. Seed, not re-verified (cautionary node) |

**S3 ethical profile:** no entity-level labour or environmental harm evidence found for these cell plants this pass (no known evidence). Policy flags (1260H for CATL, BYD, EVE) sit on the policy overlay, not the ethical profile (`cross-cutting.md` §3).

### S4: pack and system integration

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| BESS integrators 2025 | **BYD #1** (> 60 GWh, 13%); **Tesla** 46.7 GWh (10%); **Sungrow** 43 GWh (9%). Eight of the top ten are Chinese-headquartered | Benchmark via Electrek and Energy-Storage.news (L7) | T2 | Medium (one Benchmark analysis reported by two outlets). Tesla's 46.7 GWh is also a company figure (T1 statement) |
| Tesla Megapack 3, Houston | Assembled from LGES Lansing cells from 2027 | L9 | T1/T2 | High |
| Dyness, Suzhou | LFP storage systems; Series C led by CICC Capital | PitchBook, via Electrum report (Aug 2026) | T2 | Medium. Seed (PitchBook rule) |

### S5: deployment

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| Greenvolt Siedlce (PL), BYD Haohan | 600 MW / 2.4 GWh; BYD supply deal Jul 2026; **construction started Sept 2026**; COD targeted end 2027; capacity-market revenues secured | Greenvolt via Modern Power Systems, ESS News (L12) | T1/T2 | High |

### Capital

| Node | Claim | Src | Conf |
|---|---|---|---|
| Gotion Morocco | AfDB €100m (T1, High) | L11 | High |
| First Phosphate | EIFO LOI up to C$275m guarantee (**signed 30 Mar 2026**; reported as up to €170m in a later release); US EXIM letter of interest up to US$170m; Canada C$21.5m in contributions | Company (L2) | High (as statements) |
| Nano One | Rio Tinto US$10m (2022); Sumitomo MM C$16.9m (2023); US DoD Title III US$12.9m (2024) | Seed (AccessWire; deck) | Medium. Seed, not re-verified (Rio Tinto partnership confirmed, L3) |
| CATL | HK listing > US$4.6bn (May 2025) | ISPI (L8) | Medium |

**Seed corrections:**
- EIFO LOI date: Mar 2026, not "G7, Jun 2026".
- Gotion Morocco: AfDB says 20 GWh, not 10.
- Refined lithium "≈65%": shown next to the IEA 70–95% band.

## EU due-diligence and assurance coverage (for the scorecard)

| Input | EU DD | Assurance available | Worst documented signal |
|---|---|---|---|
| Lithium | Covered | Partial (IRMA brine/hard-rock sites; none in Jiangxi) | Documented harm |
| Natural graphite | Covered | None (no RMI list) | Documented harm (historical) |
| Synthetic graphite | Unclear | None | Screening flag (UFLPA) |
| Phosphate | Not covered | None | Documented harm (China) |
| Iron | Not covered | None | GAP |
| Copper | Not covered | RMI copper list | Documented harm (DOL) |
| Aluminium | Not covered | None | Screening flag (UFLPA, battery foil) |

**Traceability depth:** S0 at country level (High); named S0 nodes for Jianxiawo (High, as status) and First Phosphate (Medium, pre-production). No LFP cell in this note can be traced to a specific mine at High or Medium confidence.

## Conflicts for the register (B-16)

1. Jianxiawo restart: resumed 29 Jun 2026 vs still closed (7 Aug 2026).
2. Gotion Morocco capacity: 20 GWh (AfDB) vs 10 GWh (ESS News).
3. Ford Marshall capacity: ≈20 GWh (seed) vs 35 GWh (2023 announcement, later phase).
4. Refined lithium: ≈65% (seed) vs 70–95% (IEA band, several minerals).

## Gaps

- Iron feedstock origin for iron phosphate.
- Which mines supply any named LFP cathode maker (no supplier-level trace this pass).
- EVE overseas plants, Our Next Energy, Dyness: not re-verified.
- No Sayari ownership data for Gotion Power Morocco.

## Sources

| Id | Source | Tier | Retrieved |
|---|---|---|---|
| L1 | IEA, *Global Critical Minerals Outlook 2025* (CC BY 4.0). https://iea.blob.core.windows.net/assets/ef5e9b70-3374-4caa-ba9d-19c72253bfc4/GlobalCriticalMineralsOutlook2025.pdf | T2 | 2026-10-05 |
| L1b | Reuters, "US invests in critical minerals but China maintains grip" (14 Sep 2026). https://www.reuters.com/business/energy/us-invests-critical-minerals-china-maintains-grip--reeii-2026-09-14 | T2 | 2026-10-05 |
| L2 | First Phosphate, "G7 Investment & Offtake Deals" and news index. https://firstphosphate.com/first-phosphate-g7-investment-offtake-deals ; Emerging Growth Research flash report (2 Sep 2026); Proactive (Noble Capital) | T1 (statement) / T3 | 2026-10-05 |
| L3 | Nano One, Q3 2025 results; "Pre-Qualifies Lithium from Rio Tinto…"; Corporate Update 2026. https://nanoone.ca/news/nano-one-reports-on-corporate-developments-and-q3-2025-results | T1 (statement) | 2026-10-05 |
| L4 | CATL 2025 annual results citing SNE Research, via Momenta. https://www.momenta.media/article/catl-begins-battery-cell-trial-production-in-hungary | T2 | 2026-10-05 |
| L5 | Global Times, "Enterprises suspend lithium production due to environmental issue in Yichun" (Dec 2022); Yicai Global (Dec 2022, two articles); SCMP (Dec 2022). https://www.globaltimes.cn/page/202212/1281271.shtml ; https://www.yicaiglobal.com/news/yongxing-special-materials-pollution-linked-lithium-carbonate-plant-restarts ; https://www.scmp.com/business/article/3202402 | T2 | 2026-10-05 |
| L6 | Reuters via Engineering News, "CATL's Jianxiawo lithium mine remains closed pending environmental approval" (7 Aug 2026). https://engineeringnews.co.za/print-version/catls-jianxiawo-lithium-mine-remains-closed-pending-environmental-approval-state-media-reports-2026-08-07 ; Gasgoo; Baidu Baike (T3) | T2 | 2026-10-05 |
| L7 | Electrek, "BYD surpasses Tesla as world's top energy storage deployer" (13 May 2026); Energy-Storage.news; Solarplaza (Benchmark data). https://electrek.co/2026/05/13/byd-surpasses-tesla-energy-storage-bess-benchmark-2025 | T2 | 2026-10-05 |
| L8 | ISPI policy paper (Nov 2025), CATL Hungary financing. https://www.esteri.it/wp-content/uploads/2025/11/ISPI-Policy-Paper_Le-sfide-economiche-delleta-dellinsicurezza.pdf ; L8b Momenta (above) | T2 | 2026-10-05 |
| L9 | Supply Chain Dive (17 Mar 2026, citing US DOI); Electrek (17 Mar 2026). https://www.supplychaindive.com/news/tesla-lg-to-build-43b-lfp-battery-plant-in-michigan/814976 | T1 (via) / T2 | 2026-10-05 |
| L10 | CBT News (17 Jun 2026); electrive (18 Jun 2026). https://www.electrive.com/2026/06/18/ford-to-produce-first-lfp-cells-this-year-thanks-to-catl | T2 | 2026-10-05 |
| L11 | AfDB press release and project page "Morocco – Gotion Power Morocco 20 GWh BESS Factory". https://www.afdb.org/en/documents/morocco-gotion-power-morocco-20-gwh-bess-factory-p-ma-fz0-009 ; ESS News (3 Aug 2026) | T1 | 2026-10-05 |
| L12 | Modern Power Systems; ESS News (25 Sep 2026), "Greenvolt begins building 600 MW/2.4 GWh BESS in Poland". https://www.ess-news.com/2026/09/25/greenvolt-begins-building-600-mw-2-4-gwh-bess-in-poland | T2 | 2026-10-05 |
| N1 | Sayari Graph, Nano One Materials Candiac Inc, entity mH_CAr_EOW57s8qdijV2Aw. https://graph.sayari.com/resource/entity/mH_CAr_EOW57s8qdijV2Aw | S-REG | 2026-10-05 |
| N2 | Sayari Graph, Johnson Matthey Matériaux pour Batteries Ltée, entity 6XqwnnL0GAY0JzqpteHTIg. https://graph.sayari.com/resource/entity/6XqwnnL0GAY0JzqpteHTIg | S-REG | 2026-10-05 |
| N3 | Sayari Graph, Gotion Power Morocco, entity uLYJweuPfLxFJfDcpNwKcA. https://graph.sayari.com/resource/entity/uLYJweuPfLxFJfDcpNwKcA | S-REG | 2026-10-05 |
| E5, H12, PH-1/2 | See `ethical-sourcing.md`, `harm-evidence.md` | — | — |
