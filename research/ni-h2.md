# Ni-H₂: nickel-hydrogen (EnerVenue) (B-12)

*As of 2026-10-05 · Researched with Claude Code (Tavily, Sayari) from `electrum-seed.md` · Status: for India's review*

**Passport depth:** full (core). **Use cases:**
- Grid/stationary (EnerVenue): **in scope** (High).
- Defence/aerospace (EaglePicher heritage): **out of scope** under Art. 1(5) (High), so it gets a shadow passport.

## Headline

- **The company says** its batteries have "no dependence on constrained mineral supply chains" and that "the materials are abundant" (EnerVenue website). But its active material is **nickel** (nickel hydroxide cathode, nickel-alloy anode).
  - Nickel is on the EU due-diligence list and the EU strategic raw materials list ("nickel – battery grade").
  - The US DOL lists Indonesian nickel for **forced labour**. Climate Rights International and Earthworks document severe community, environmental and safety harms in Indonesia's nickel sector (`harm-evidence.md` NI-1 – NI-6).
  - Changing chemistry moves the risk; it doesn't remove it.
- **Where EnerVenue's nickel comes from isn't disclosed: GAP.** Production moved to **Changzhou, China**. The first line opened in late Sep 2026 and is built by a wholly foreign-owned subsidiary. That makes upstream supplier visibility harder for any non-Chinese buyer, and raises an open FEOC/PFE question for US tax credits.
- **The corporate topology is confirmed from registries**: Cayman → Singapore → Changzhou, plus a new **Hong Kong** entity (Nov 2025) that isn't in the seed. The seed's registration date (12 Oct 2023) holds.

## Corporate topology (ownership and capital overlay)

| Entity | Jurisdiction / id | Registered | Role | Src | Conf |
|---|---|---|---|---|---|
| EnerVenue Holdings, Ltd. | Cayman Islands (Maples, Ugland House); registered in Singapore as a foreign company UEN **T23UF0046J**; US SEC CIK 0001899212 | — | Holding company; issuer of the Series B extension ("EnerVenue Holding, Ltd.") | Sayari [E1, E2]; Full Vision Capital release (E5) | High (Sayari + company release) |
| ENRV Pte. Ltd. | Singapore, UEN **202334718C**; ACRA | **27 Aug 2023** | 100% owned by EnerVenue Holdings; purposes incl. "manufacture of secondary batteries" and leasing of IP | Sayari (Singapore ACRA) [E3] | Medium (registry; no public corroboration of the link) |
| 屹创新能源科技（江苏）有限公司 / Yichuang New Energy Technology (Jiangsu) Co., Ltd. | China, USCC **91320412MACYJDUF24**; Wujin National High-tech Zone, Changzhou | **12 Oct 2023** | WFOE; 100% held by "ENRV Pte. Ltd." (a director/legal representative appears on both the SG and CN records) | Sayari (China NECIPS) [E4] | Medium: date and structure from the official register via Sayari; existence of Changzhou manufacturing corroborated publicly (E6), registration date not |
| EnerVenue Hong Kong Limited (屹創新能源香港有限公司) | Hong Kong BR **79193890** | **18 Nov 2025** | **New node.** Matches the company's stated plan for a Hong Kong regional HQ and innovation centre backed by HKIC | Sayari (HK Companies Registry) [E7]; Full Vision Capital release (E5) | Medium |
| EnerVenue, Inc. | Delaware file 7933993 (incorporated 13 Apr 2020 per Tracxn) | 2020 | US operating company, Fremont CA | Sayari [E8]; Tracxn (T3) | Medium. Link to the Cayman holdco **not shown in Sayari** (seed: "Delaware opco") |
| Changzhou → US trade | Sayari's US import data show the Changzhou entity shipping to EnerVenue Inc. (7 shipments) | Sayari [E9] | S-TRADE | Medium |
| EnerVenue Gigasite, 139 Logistics Drive, Shelbyville KY | US EPA facility record | — | **Stale.** Project put on hold (Oct 2024) after "production delays"; Canadian Solar's e-STORAGE took over the building (Nov 2024) | Sayari [E10]; Energy-Storage.news; Courier-Journal (E11) | High (status) |

**Seed check:** "Cayman → Singapore → Delaware + Changzhou WFOE" is **confirmed as Cayman → Singapore → Changzhou**. The Delaware company exists, but Sayari doesn't show its ownership link. Add Hong Kong (2025). The seed's "≈2.5 years before 'China pivot' press" also holds: 12 Oct 2023 registration vs the 31 Mar 2026 funding release announcing the Changzhou scale-up.

**Artefact check:** clean. These are direct shareholdings at depth ≤ 2, identifiers are consistent, and a director overlaps between SG and CN. The SG "ENRV Pte. Ltd." shareholder on the CN record is a separate Sayari node, linked by exact name match and a shared officer, not by identifier. Medium, not High.

## Capital

| Item | Claim | Src | Conf |
|---|---|---|---|
| Series B extension | **US$300m**, closed **31 Mar 2026**, led by **Full Vision Capital**, with one new investor; HKIC "investment and strategic support"; Aramco Ventures quoted as a strategic investor | Full Vision Capital release (E5); Mercom; FinSMEs | High |
| ⚠ Series B size | US$300m (release) vs **US$339.6m** final (PitchBook, via Electrum report, Jun 2026); LeadIQ shows US$308m | E5; seed; LeadIQ (T3) | Low (conflict) → B-16 |
| Lead investor's relationship | Full Vision Capital says it "incubated" EnerVenue; its managing partner is an EnerVenue co-founder. TNW describes FVC as the family office of a Hong Kong businessman who also chairs **Towngas**, a minority EnerVenue shareholder with an exclusive mainland-China distribution agreement (2021) | E5; TNW (E12) | High (FVC statement) / Medium (TNW) |
| ⚠ **Total raised** | Crunchbase **US$445m** (via TNW) · Multiples / LeadIQ US$720m · CB Insights US$745m · PitchBook **US$784.85m** (via Electrum report) · Tracxn **US$1.08bn** | E12; T3 aggregators; seed | **Low (conflict)**, shown side by side, never averaged → B-16 |
| Investors (seed) | SLB, Aramco Ventures, NEOM Investment Fund, SAIC Capital, IDG Capital, HKIC, Stanford | PitchBook, via Electrum report; CB Insights lists HKIC, FVC, Aramco Ventures, SLB | Medium |
| Use of proceeds | Changzhou manufacturing scale-up + Silicon Valley R&D; HK regional HQ and innovation centre | E5 | High (as statement) |

## Supply chain and ethical-sourcing profile by stage

### S0: nickel (and possibly cobalt)

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| Active materials | Nickel hydroxide cathode; nickel-alloy anode; alkaline electrolyte; hydrogen stored in a sealed large-format cell | Mercom (Apr 2026) (E13) | T2 | Medium |
| Company materials claim | "No dependence on constrained mineral supply chains … The materials are abundant. The supply chain is global." | EnerVenue website (E14) | T1 (statement) | High as statement · **contradicted on EU/US classification**: nickel is EU DD-listed and CRMA-strategic (T1) |
| Nickel source for EnerVenue | **GAP**: not disclosed; no Sayari trade link found | — | GAP | Unknown |
| Indonesia HPAL context | Sulphur ≈42% of HPAL cost; 76% of Indonesia's sulphur imports from the Middle East (2025) | `cross-cutting.md` SA-2, SA-3 | T2 | Medium |
| Cobalt | Seed: DRC cobalt chain. Cobalt is a common additive in nickel-hydroxide electrodes, but **no source confirms cobalt in EnerVenue cells** | Seed; INF | INF | Low |

**S0 ethical profile**

| Risk | Codes | Signal | Assurance | EU DD | Conf |
|---|---|---|---|---|---|
| Indonesian nickel: forced labour (DOL); community, environmental and Indigenous harms (CRI 2024–25); filtered-tailings failures and worker deaths (Earthworks 2026) | LR-FL, COM, ENV-*, OHS | Documented harm (country/sector) · **entity link to EnerVenue: GAP** | IRMA: Barro Alto (BR) completed; Harita (ID) and Sorowako (ID) in process | **Covered** | High (sector) · Unknown (EnerVenue-specific) |
| DRC cobalt (if present) | LR-CL, LR-FL, COM | Documented harm (sector) | RMI cobalt list | Covered | High (sector) · Low (presence in cell) |

### S2: electrodes, catalyst, pressure vessel, composite

| Node | Claim | Src | Conf |
|---|---|---|---|
| Electrode, vessel steel, composite wrap suppliers | **GAP**: not identified via Sayari or Tavily (seed gap #1, still open) | — | Unknown |
| Supplier Code of Conduct | EnerVenue publishes one (website footer) | E14 | High (exists) · assurance type = **company self-assessment only** |

### S3: cells

| Node | Claim | Src | Conf |
|---|---|---|---|
| Changzhou (Wujin) line | Ground broken **Apr 2026**; built in ~25 weeks; **first conforming cell end Sep 2026**; Phase 1 **250 MWh/yr** (~300 AMC cells/day at full automation); 1 GWh 2027; multi-GWh 2028 | Mining Weekly (25 Sep 2026); EnerVenue press; Environment+Energy Leader (E6) | High |
| First commercial order | 11 MWh from an undisclosed major Chinese oil and gas producer, paired with onsite solar; shipments Dec 2026 and Mar 2027 | Modern Power Systems (23 Sep 2026) (E6) | Medium |
| Cycle-life claim | "30,000-cycle" Aqueous Metal Cell; 30-year design life | EnerVenue (E14) | High as statement · **unaudited** |
| Great Power (CN) | Makes Ni-H₂ and LMFP | PitchBook, via Electrum report | Medium |
| EaglePicher (US) | ≈85% of US defence battery market; owned by Tuthill since 2023; Ni-H₂ heritage | Seed (company; Sayari) | Medium. Seed, not re-verified; **out of EU scope** (Art. 1(5)) |

**S3 ethical profile:** no entity-level harm evidence for the Changzhou plant (no known evidence). Location effect: the WFOE sources inside China's battery-materials ecosystem, which publishes little at supplier level. That's a **structural (opacity)** signal, not harm.

### S4–S5: systems and deployment

| Node | Claim | Src | Conf |
|---|---|---|---|
| Towngas, Jintan (Changzhou) | First 4th-generation AMC deployment, operating since **Nov 2025** (renewables + e-bus charging) | Mining Weekly (E6) | High |
| Other shipments | Cells shipped to customers in the US, Belgium, Saudi Arabia | E6 | Medium (company-sourced) |
| Pilots (seed) | RWE (Milwaukee area, Dec 2024); Avid Group MSA (W. Australia) | Seed (Energy-Storage.news) | Medium. Seed, not re-verified |
| Energy Rack | 50 cells / 150 kWh; −40 to 50 °C | Seed (company) | Medium |

## Policy overlay

| Item | Finding | Conf |
|---|---|---|
| FEOC/PFE (US) | Cells made by a Chinese-incorporated WFOE and sold into US storage projects (48E: 55% non-PFE threshold in 2026) may count as PFE "material assistance". Whether the WFOE is a PFE depends on rules Treasury hasn't finalised (Notice 2026-15) | Low (INF; PFE definition pending) |
| 1260H / UFLPA | EnerVenue entities aren't on either list (`cross-cutting.md`) | High (as of dates) |
| EU scope | Grid use in scope; EaglePicher defence/space use excluded | High |

## EU due-diligence and assurance coverage

| Input | EU DD | Assurance | Worst documented signal |
|---|---|---|---|
| Nickel | **Covered** | Partial (IRMA, RMI nickel list); EnerVenue's own sources unknown | Documented harm (sector) |
| Cobalt (if present) | Covered | RMI cobalt list | Documented harm (sector) |
| Steel, composite, catalyst | Not covered | Supplier code (self-assessment) | GAP |

**The contrast with VRFB:** Ni-H₂'s main input *is* on the EU list, so from Aug 2027 the passport's #19 field would have to report on nickel sourcing, *if* EnerVenue is above the DD turnover threshold. Under the pending Omnibus (< €200m exemption), a company at EnerVenue's stage may well be exempt. Turnover isn't public: **GAP** (`regulation.md`).

**Traceability depth:** corporate topology to S3 at Medium–High. **No upstream trace beyond S3**: nickel source and component suppliers are GAP.

## Conflicts for B-16

1. Total raised: US$445m / 720m / 745m / 784.85m / 1.08bn.
2. Series B extension: US$300m vs US$339.6m (vs US$308m, T3).

## Gaps

- Nickel source; whether cobalt is present.
- Electrode, vessel, composite and catalyst suppliers.
- Ownership link from the Cayman holdco to EnerVenue, Inc. (Delaware).
- Whether EnerVenue falls under EU due diligence (turnover).

## Sources

| Id | Source | Tier | Retrieved |
|---|---|---|---|
| E1 | Sayari Graph, EnerVenue Holdings Ltd (CYM/USA, SEC CIK 0001899212), entity Ua9JqMWuhNMSJ9MTENuqYA | S-REG | 2026-10-05 |
| E2 | Sayari Graph, ENERVENUE HOLDINGS, LTD. (CYM/SGP, UEN T23UF0046J), entity XkctthJb2lo3C8bNqc4-gg. https://graph.sayari.com/resource/entity/XkctthJb2lo3C8bNqc4-gg | S-REG | 2026-10-05 |
| E3 | Sayari Graph, ENRV PTE. LTD. (UEN 202334718C, ACRA), entity RtezZuA773jd85fAufSm3Q. https://graph.sayari.com/resource/entity/RtezZuA773jd85fAufSm3Q | S-REG | 2026-10-05 |
| E4 | Sayari Graph, 屹创新能源科技（江苏）有限公司 (USCC 91320412MACYJDUF24; China NECIPS), entity _BE0nJR4G5E9TkjSX-czMQ. https://graph.sayari.com/resource/entity/_BE0nJR4G5E9TkjSX-czMQ | S-REG | 2026-10-05 |
| E5 | Full Vision Capital, "EnerVenue Raises USD 300 Million in Series B+ Preferred Stock Financing…" (31 Mar 2026). https://www.fullvisioncapital.com/en/news/enervenue-raises-usd-300-million-in-series-b-preferred-stock-financing-and-names-henning-rath-as-chief-executive-officer ; Mercom (2 Apr 2026) | T1 (statement) / T2 | 2026-10-05 |
| E6 | Mining Weekly (25 Sep 2026). https://www.miningweekly.com/article/enervenue-opens-worlds-first-high-volume-production-line-for-nickel-hydrogen-battery-2026-09-25 ; EnerVenue press; Modern Power Systems (23 Sep 2026); Environment+Energy Leader | T2 / T1 | 2026-10-05 |
| E7 | Sayari Graph, EnerVenue Hong Kong Limited (BR 79193890), entity RHduvF642jt20Zdmh5xmNA. https://graph.sayari.com/resource/entity/RHduvF642jt20Zdmh5xmNA | S-REG | 2026-10-05 |
| E8 | Sayari Graph, ENERVENUE, INC. (DE 7933993), entity s0Rurz-NqO-Xyw07wOykxQ; Tracxn profile (incorporation date) | S-REG / T3 | 2026-10-05 |
| E9 | Sayari Graph, ENERVENUE NEW ENERGY TECHNOLOGY (JIANGSU) CO LTD (US import records), entity aGCIc9bSokqynKGCW4Lv8w | S-TRADE | 2026-10-05 |
| E10 | Sayari Graph, ENERVENUE GIGASITE (EPA FRS 110071449687), entity 1y4asrnzhDCsLMFEVasnNw | S-REG | 2026-10-05 |
| E11 | Energy-Storage.news, "Canadian Solar to manufacture BESS and cells at Kentucky plant after EnerVenue backs out" (Nov 2024); Courier-Journal (15 Nov 2024) | T2 | 2026-10-05 |
| E12 | TheNextWeb, "EnerVenue lands $300 million…" (2026), citing Crunchbase. https://thenextweb.com/news/enervenue-300m-series-b-metal-hydrogen-batteries ; Tracxn; CB Insights; Multiples; LeadIQ | T2 / T3 | 2026-10-05 |
| E13 | Mercom, "EnerVenue Secures $300 Million in Series B Funding Extension Round" (2 Apr 2026). https://mercomcapital.com/enervenue-secures-300-million-in-series-b-funding-extension-round | T2 | 2026-10-05 |
| E14 | EnerVenue website (home; Supplier Code of Conduct link). https://www.enervenue.com | T1 (statement) | 2026-10-05 |
