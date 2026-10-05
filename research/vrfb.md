# VRFB: vanadium redox flow battery (B-11)

*As of 2026-10-05 · Researched with Claude Code (Tavily, Sayari, eCFR) from `electrum-seed.md` · Status: for India's review*

**Passport depth:** full (core). **Use case:** grid/stationary, **in scope** (Medium: reading of T1 text, "battery with external storage"; `regulation.md` §4). Not a "stationary battery energy storage system" as defined (that requires internal storage), and on a later carbon-footprint timetable.

## Headline

- **VRFB has the deepest traceable chain in the project, and its source carries documented harm.**
  - Pangang Vanadium & Titanium, in **Panzhihua** (Sichuan), supplies Rongke's vanadium electrolyte, including through a Panzhihua joint venture.
  - Peer-reviewed studies document vanadium contamination of soils around Panzhihua's mining and smelting area.
- **None of it is visible to EU due diligence.** Vanadium isn't on Annex X, and there's no assurance scheme. Even after Aug 2027, passport field #19 has nothing to report for a VRFB.
- **The reference project, and the market leader's manufacturing footprint, sit partly in Xinjiang.**
  - Rongke delivered at least three large XUAR projects: Jimusar 1 GWh, Hami 400 MWh and Wushi 1 GWh.
  - Two Rongke-group subsidiaries are registered in Hami.
  - This is a **structural (regional) signal**. No source ties these projects or entities to labour transfers.
- **The seed's Rongke "MEU" flag was a misreading.** Rongke is on neither the BIS Military End-User list nor the Entity List. Sayari's flag on the parent group means "appears in Chinese government procurement records".

## S0: vanadium feedstock

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| World mine production 2025 | 110,000 t V. **China 82,000 t (≈72%)**, Russia 21,000 t, South Africa 5,000 t | USGS MCS 2026 (V1) | T1 | High |
| China's route | "Most of its production originating as a coproduct from vanadiferous titanomagnetite ores processed during steelmaking" | USGS MCS 2026 (V1) | T1 | High |
| ⚠ Co-production share | Seed: ≈73% co-produced (report) vs 73–90% (deck). USGS says "most" of China's output, no global figure | Seed; V1 | — | Low (conflict, unresolved) → B-16 |
| Pangang (Panzhihua V-Ti magnetite, Sichuan) | Pangang Vanadium & Titanium (000629.SZ) makes vanadium oxides and **vanadium electrolyte**; its electrolyte **"mainly supplies Dalian Rongke"**. A 2023 framework agreement covers ~8,000 t of vanadium products for storage | Cailian Press via Investing.com (Oct 2024); CNPSEC broker report (2023) (V2) | T2 | High (two sources) |
| Largo, Maracás Menchen (Bahia, Brazil) | 99.94% Largo; open pit; 494 employees; 2025 guidance 9,500–11,500 t V₂O₅; "only vanadium mine in Latin America" | Largo (V3); NS Energy | T1 (statement) | High |
| Bushveld (ZA) | Near-insolvent; Vanchem sold to SPR ≈US$40m (Nov 2024); Vametco shut | Seed (CRU) | T2 | Medium. Seed, not re-verified |
| Glencore Rhovan (Brits, ZA); EVRAZ Kachkanar (RU) | See ethical profile | `harm-evidence.md` V-4, V-5 | — | — |

**S0 ethical profile**

| Risk | Codes | Signal | Assurance | EU DD | Conf |
|---|---|---|---|---|---|
| **Panzhihua**: vanadium pollution of topsoil and sediments in the V-Ti mining, smelting, slag and tailings areas; smelting-area soils up to 4,793.6 mg/kg V. The region supplies Rongke's electrolyte via Pangang | ENV-S, HH | Documented harm (environment, **regional**; not a finding about Pangang specifically) | None | **Not covered** | High (two peer-reviewed sources) |
| Hunan stone-coal vanadium: soil/crop contamination, child health risk | ENV-S, HH | Documented harm (environment) | None | **Not covered** | High |
| Brits (ZA): community allegations at Rhovan and Vametco | COM, HH, ENV-A | Documented harm (allegations; company disputes) | None | **Not covered** | Medium |
| Kachkanar (RU): pollution allegations | ENV-A/W/S | Documented harm (allegations) | None | **Not covered** | Low |
| Maracás (BR): no harm source found | — | No known evidence | None (no IRMA site) | **Not covered** | Medium |

## S1: electrolyte (vanadium in sulphuric acid)

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| Pangang–Rongke JV "Vanadium-Rong Storage" (钒融储能), Panzhihua V-Ti Industrial Park | 2,000 m³ electrolyte line at design output; the partners plan a **60,000 m³/yr** line | Pangang investor-platform statement via Cailian (V2) | T1 (statement) / T2 | High |
| Sayari corroboration | Rongke group's downstream holdings include **Sichuan Vanadium-Rong Storage**, **Rongke Energy Storage Technology (Panzhihua)** and **Sichuan Pancheng V-Ti Supply Chain**, all at ≤ 2 hops via direct shareholding | Sayari [V8] | S-REG | High (with V2: public corroboration; artefact check clean: direct shareholding, consistent identifiers, no custodian or rename pattern) |
| Rongke Dalian electrolyte line | Phase 1 (CNY 400m) in production June 2025; plans 5.05 GWh/yr electrolyte capacity in Dalian | *Science and Technology Daily* (20 Jun 2025); Rongke group site (V4) | T2 / T1 | High |
| Rongke's claimed share | "≈**90%** of global vanadium electrolyte material"; "> 60% of global VRFB installations built or under construction" | Rongke, via *S&T Daily* and Liaoning Daily (V4) | T1 (statement) | High as statement · not verified as measurement |
| Storion Energy (US) | Largo 50% / Stryten JV (closed Feb 2025); DOE MAKE IT Prize US$5m; **first electrolyte customer Sep 2025**; vanadium from Maracás | BusinessWire; Storion (V5) | T1 (statement) | High |
| Electrolyte cost share | 30–40% of system cost | Seed (Bushveld; Sayari deck) | T2 | Medium. Seed, not re-verified |

**S1 ethical profile:** sulphuric-acid dependency (structural, not covered; route-specific exposure GAP). Electrolyte leasing (Storion; SPIC Panzhihua project) keeps vanadium in circulation, but there's **no passport field for recycled vanadium** (`fields.md` §5).

## S2: membrane and stack components

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| Suzhou Zhiqing Bocai (苏州市志青博材科技) | Membrane maker; Rongke invested (Mar 2026). Sayari lists it among the **Rongke group's downstream holdings** | PitchBook, via Electrum report (Aug 2026); Sayari [V8] | T2 + S-REG | High (two independent) |
| Other stack inputs (carbon felt, bipolar plates) | Rongke plans a bipolar-plate line (2025) | *S&T Daily* (V4) | T2 | Medium |
| Other stack suppliers | **GAP** | — | GAP | Unknown |

## S3: stacks and systems

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| Rongke Power (大连融科储能技术发展有限公司), Dalian | Founded **29 Oct 2008** (registry) by Dalian Bolong and the Dalian Institute of Chemical Physics (CAS) | Sayari [V9]; Liaoning Daily (gov. site) (V4) | S-REG + T2 | High |
| Rongke group structure | Operating company's 1.68% shareholder of record is Dalian Rongke Energy Storage **Group** (大连融科储能集团). The group holds ~32 entities incl. Panzhihua, Sichuan, **two in Hami (Xinjiang)**, Inner Mongolia, Beijing, Suzhou | Sayari [V9, V10] | S-REG | Medium (registry; group holdings partly corroborated by V2) |
| Rongke in a state-linked project company | Rongke Power holds **25%** of Dalian Hengliu Energy Storage Station Co. (大连恒流储能电站), which Sayari flags as owned by a core central SOE. That this company operates the Dalian 100 MW-class national demonstration station is **my inference from the name** (unsourced) | Sayari [V9] | S-REG | Medium (holding) · Low (project link, INF) |
| Rongke installed base | Rongke ">3.5 GWh worldwide" (Aug 2025) vs seed report "global base ≈2.5–3 GWh, Rongke 40–50%" | RKP Storage (V6); seed | T1 (statement) / T3 | Low (conflict) → B-16 |
| Rongke: **flag corrections** | (1) **Not** on the BIS Military End-User list (eCFR Supp. 7 to Part 744 has no Dalian entities) or the Entity List (the only "Rongke" match is "Rongke Information Center", a Beijing office building in Megvii's address: a **name collision**). (2) Sayari's "meu_list_contractors" on the parent group means **"Procurement Activity in High-Risk Jurisdiction"** (appears in Chinese government procurement records), not MEU listing. (3) "Owner of Xinjiang-based entity" on the group reflects its **Hami-registered subsidiaries**. (4) The operating company carries "PEP-adjacent" (directors flagged as PEPs; individuals not named here) | eCFR (V11); Sayari risk-factor definitions [V12] | T1 / S-REG | High (corrections) |
| Rongke: Hami subsidiaries | Rongke Energy Storage Technology (Hami) Co. (address: Hami High-tech Zone, standard factory building) flagged **Xinjiang-geolocated / Xinjiang-registered**; Rongke Hatou Energy (Hami) Co., part SOE-owned and part owned by a Xinjiang entity | Sayari [V10] | S-REG | Medium (registry fact; activity at the site not publicly confirmed) |
| Invinity (UK) | £57.4m raise (NWF); £11m DESNZ LODES; £25m Atri | Seed (Solar Power Portal; PitchBook) | T2 | Medium. Seed, not re-verified |
| VFlowTech (SG) | Seed: US$20.5m, Granite Asia. Tracxn (T3): US$34m Series A incl. Granite Asia, PSA | Seed; Tracxn | T2/T3 | Low (conflict) |
| VRB Energy | 90% Ivanhoe Electric | Seed (deck) | T2 | Low. Seed, not re-verified |

## S5: deployment

| Node | Claim | Src | Tier/Tag | Conf |
|---|---|---|---|---|
| **Jimusar (Jimsar), Xinjiang** | 200 MW / 1,000 MWh, 5-hour; two subsystems (150/750 + 50/250 MWh); co-located with 1 GW solar; CNY 3.8bn; EPC/integration PowerChina Northwest; operation announced **31 Dec 2025** (a commissioning milestone was reported in May 2025) | Energy-Storage.news (6 Jan 2026); pv magazine (7 Jan 2026); Vanitec (V7) | T2 | High |
| ⚠ Jimusar owner | **China Three Gorges** (Rongke's own project page "CTG Jimusaer ESS"; Energy-Storage.news; Vanitec) vs **Huaneng Xinjiang Jimusar Power** (pv magazine; seed) | V6, V7 | — | Medium for CTG (three sources incl. supplier) · conflict → B-16 |
| Other Rongke XUAR projects | **Hami SDIC** 100 MW/400 MWh (grid-connected 26 Jul 2025); **Xinhua Wushi** 250 MW/1 GWh (2024) | RKP Storage (V6); Liaoning Daily (V4) | T1 (statement) / T2 | High |
| ⚠ Not the same SDIC | The "SDIC" Hami storage owner is a separate unit from **SDIC Xinjiang Lithium** (UFLPA-listed, `ethical-sourcing.md`). Don't conflate them | — | — | — |
| SPIC Panzhihua | 12 MW / 60 MWh, first front-of-meter VRFB with **leased electrolyte** (Jun 2025) | RKP Storage (V6) | T1 (statement) | High |
| Invinity LODES (UK) | Up to 20.7 MWh; 25-yr lease via SPV | Seed | T2 | Medium. Seed, not re-verified |

**S3/S5 ethical profile**

| Risk | Codes | Signal | Assurance | EU DD | Conf |
|---|---|---|---|---|---|
| XUAR siting: Jimusar, Hami, Wushi projects; Hami-registered Rongke subsidiaries. The region's state labour-transfer programmes are documented (`harm-evidence.md` XJ-1, XJ-2) | LR-FL | **Structural (region)**. No entity- or project-level evidence | None | **Not covered** (vanadium) | High (siting) · Unknown (entity-level) |
| UFLPA relevance | Rongke isn't on the UFLPA Entity List. Any US import of goods produced "wholly or in part" in the XUAR (e.g. by a Hami-based entity) would fall under the UFLPA's regional rebuttable presumption | Reading of T1 text (UFLPA §3) applied to a registry fact; no evidence of such exports | INF | — | Medium (reading of T1 text) |

## Capital

| Node | Claim | Src | Conf |
|---|---|---|---|
| Largo → US DLA | **US$60.1m** firm-fixed-price delivery order (received **1 Jul 2026**, to Jan 2030) for high-purity V₂O₅ from Maracás, under a 5-year DLA IDIQ contract with a **US$125m ceiling** | Largo Form 6-K, Exhibit 99.1 (SEC) (V13) | High (T1). **Seed gap #4 closed** |
| Storion | DOE MAKE IT Prize US$5m (2024) | V5 | High |
| Rongke | State visit: Premier Li Qiang visited Rongke (7 Jun 2025) | Rongke group news (V4) | High (as statement) |

## EU due-diligence and assurance coverage

| Input | EU DD | Assurance | Worst documented signal |
|---|---|---|---|
| Vanadium | **Not covered** | **None** | Documented harm (environment, Panzhihua/Hunan); allegations (ZA, RU) |
| Sulphuric acid (electrolyte) | Not covered | — | Structural |
| Membrane, felt, plates | Not covered | — | GAP |

**Passport view:**
- #15 may disclose vanadium (CRMA list; inference, Low).
- #19 (responsible sourcing) covers **none** of VRFB's inputs.
- #20–22 (recycled Co/Li/Ni) don't apply; there's no recycled-vanadium field.

**Traceability depth:** **S0 → S1 at High confidence for Rongke** (Pangang/Panzhihua → electrolyte JV → Rongke). This is the deepest named trace among the core chemistries. Western chain: Maracás → Largo → Storion at High confidence (company statements).

## Conflicts and corrections for B-16

1. Co-production share: ≈73% vs 73–90% (unresolved).
2. Rongke installed base: > 3.5 GWh (company) vs global 2.5–3 GWh, Rongke 40–50% (report).
3. Jimusar owner: CTG (3 sources) vs Huaneng (pv magazine; seed).
4. VFlowTech funding: US$20.5m vs US$34m.
5. **Correction:** Rongke "MEU flag" → not MEU-listed; the flag is procurement activity.

## Gaps

- Stack component suppliers beyond the membrane.
- Whether Rongke's Hami entity manufactures anything, and for which markets.
- Bushveld, Invinity and VRB Energy: not re-verified.
- Sulphuric-acid route for Pangang's electrolyte.

## Sources

| Id | Source | Tier | Retrieved |
|---|---|---|---|
| V1 | USGS, *Mineral Commodity Summaries 2026: Vanadium*. https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-vanadium.pdf | T1 | 2026-10-05 |
| V2 | Cailian Press (财联社), 钒钛股份前三季度净利润同比下滑近八成 钒电解液大客户有新动作 (17 Oct 2024), via Investing.com. https://cn.investing.com/news/stock-market-news/article-2518920 ; CNPSEC (中邮证券) report 储能金属,卓尔不"钒" (Mar 2023) | T2 | 2026-10-05 |
| V3 | Largo, "Maracás Menchen Mine". https://www.largoinc.com/our-business/maracas-menchen-mine | T1 (statement) | 2026-10-05 |
| V4 | *Science and Technology Daily* (20 Jun 2025). https://www.stdaily.com/web/gdxw/2025-06/20/content_357727.html ; Liaoning Daily via ln.gov.cn (5 Aug 2025); Rongke group site. http://www.rongkepower.com | T2 / T1 | 2026-10-05 |
| V5 | BusinessWire, Storion Energy (8 Sep 2025); Largo/Stryten (19 Dec 2024). https://www.businesswire.com/news/home/20250908837290/en | T1 (statement) | 2026-10-05 |
| V6 | RKP Storage, project pages and news (Hami SDIC, Jimusar, SPIC Panzhihua). https://rkpstorage.com/projects | T1 (statement) | 2026-10-05 |
| V7 | Energy-Storage.news (6 Jan 2026). https://www.energy-storage.news/worlds-first-gigawatt-hour-scale-flow-battery-project-goes-into-operation-in-china ; pv magazine (7 Jan 2026); Vanitec | T2 | 2026-10-05 |
| V8 | Sayari Graph, downstream entities of 大连融科储能集团股份有限公司 (entity HjOqfHUuTPVX4MeeX4vAzA), depth 2, CHN (run 2026-10-05) | S-REG | 2026-10-05 |
| V9 | Sayari Graph, 大连融科储能技术发展有限公司 (Rongke Power), entity pDu2v72AzYpx80TAA81TCQ. https://graph.sayari.com/resource/entity/pDu2v72AzYpx80TAA81TCQ | S-REG | 2026-10-05 |
| V10 | Sayari Graph, 融科储能科技（哈密）有限公司 (ArI4vr-6S1CdN1UnUcblQg); 融科哈投能源（哈密）有限责任公司 (6dq6eKLeURw_QuC3lDIWWA) | S-REG | 2026-10-05 |
| V11 | eCFR, 15 CFR Part 744, Supplement No. 4 (Entity List) and No. 7 (MEU List), current. https://www.ecfr.gov/current/title-15/part-744 | T1 | 2026-10-05 |
| V12 | Sayari risk-factor definitions: meu_list_contractors, owner_of_forced_labor_xinjiang_entity, pep_adjacent | S-REG | 2026-10-05 |
| V13 | Largo Inc., Form 6-K Exhibit 99.1 (Jul 2026). https://www.sec.gov/Archives/edgar/data/1400438/000106299326003581/exhibit99-1.htm | T1 | 2026-10-05 |
