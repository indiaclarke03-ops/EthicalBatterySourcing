# Conflict register (B-16)

*As of 2026-10-05 · Compiled from research notes B-05 to B-14 · Status: for India's review*

Each conflict has an id that data files reference (`conflict_id`, SPECIFICATION §3). The treatment rule (PLAN.md):
- show all values side by side;
- never average them;
- mark a conflict resolved only when a stronger source settles it, and keep the losing value visible as "superseded".

## A. Open conflicts (shown side by side)

| Id | Item | Values found | Sources | Treatment | Note |
|---|---|---|---|---|---|
| C-01 | EnerVenue total funding raised | **US$445m** · US$720m · US$745m · **US$784.85m** · **US$1.08bn** | Crunchbase (via TNW) · Multiples/LeadIQ · CB Insights · PitchBook (via Electrum report) · Tracxn | Side by side; Low | Aggregators count rounds and grants differently; none is T1 |
| C-02 | EnerVenue Series B extension size | **US$300m** · US$308m · **US$339.6m** | Full Vision Capital release (31 Mar 2026) · LeadIQ · PitchBook (via Electrum, Jun 2026) | Side by side; Low | Release figure is T1 as a statement; a later final close may explain the gap |
| C-03 | Noon Energy total raised | "**> US$45m**" (VC + grants) · **US$63.85m** | Noon press release (21 Apr 2026) · PitchBook (via Electrum) | Side by side; Low | |
| C-04 | Vanadium co-production share | **≈73%** · **73–90%** | Electrum report · practicum deck | Side by side; Low | USGS 2026 says only "most" of China's output is co-product |
| C-05 | Rongke installed base | Rongke "**> 3.5 GWh** worldwide" (Aug 2025) · global base "**≈2.5–3 GWh**, Rongke 40–50%" | RKP Storage · Electrum report (T3) | Side by side; Low | Company also claims "> 60% of global VRFB installs built/under construction" |
| C-06 | Jimusar project owner | **China Three Gorges** · **Huaneng Xinjiang Jimusar Power** | Rongke project page, Energy-Storage.news, Vanitec · pv magazine, seed | Lean CTG (3 sources incl. supplier); Medium | Possibly owner vs operating subsidiary; unresolved |
| C-07 | CATL Jianxiawo mine restart | **Resumed 29 Jun 2026** · **still closed** (7 Aug 2026) | Baidu Baike (T3) · Reuters/state media | Side by side; Low | Safety permit issued 29 Jun; EIA approval pending as of Aug |
| C-08 | Gotion Morocco capacity | **20 GWh** + 100,000 t cathode · **10 GWh** at launch (→ 100 GWh) | AfDB project page · ESS News | Side by side; Low | AfDB is T1; launch phase vs project scope may explain it |
| C-09 | Ford Marshall capacity | **≈20 GWh** · **35 GWh** | Seed · 2023 announcement (later phase, per electrive) | Side by side; Low | |
| C-10 | Refined lithium, China share | **≈65%** · **70–95%** band (Li, Co, phosphate, graphite) | Seed (IEA/Benchmark deck) · IEA GCMO 2025 | Side by side; Medium | The IEA band isn't lithium-specific |
| C-11 | Passport mandatory data points (EV/LMT/Industrial) | **46 / 49 / 32** · **51 / 54 / 36** | Row-by-row count of Commission guidance v2.0 (`fields.md`) · secondary sites | Project uses 46/49/32 (T1 count); secondary values shown as superseded | |
| C-12 | Commission data-point guidance date | **15 Aug 2026** · 21 Aug 2026 | The document itself (signed 16 Aug) · DPP Intel | Resolved: **15 Aug 2026** | |
| C-13 | VFlowTech funding | **US$20.5m** (Granite Asia) · **US$34m** Series A | Seed (Energy-Storage.news) · Tracxn (T3) | Side by side; Low | |
| C-14 | CEC pilot for Noon | **100 kW / 10 MWh** · **US$2.17m** EPIC award (size not given) | Seed · Cleantech Tracker (T3) | Side by side; Low | Not the same measure; not reconcilable yet |

## B. Resolved conflicts

| Id | Item | Values | Resolution | Source |
|---|---|---|---|---|
| R-01 | Dynanonic LMFP capacity (Qujing) | > 80,000 t/yr · **110,000 t/yr** | **110,000 t/yr**, commissioned 19 Sep 2022, CNY 2.59bn | SMM citing company (T2) + LatePost |

## C. Seed corrections (the seed was wrong or misread)

| Id | Seed said | Correct reading | Source |
|---|---|---|---|
| S-01 | "Decision No. 70" suspends Decision No. 58 | MOFCOM/GAC **Announcement** No. 70 of 2025 suspends Ann. No. 58 (and 55–57, 61, 62) until 10 Nov 2026 | Pillsbury; Global Times; CIRS |
| S-02 | FEOC: "60% non-PFE in 2026, +5 pts/yr to 85% in 2030" | That's the **battery-component** track (45X): 60 / 65 / 70 / **80** / 85%. **Storage projects** (48E): 55 / 60 / 65 / 70 / 75% | 26 U.S.C. § 7701(a)(52) |
| S-03 | Section 1260H "updated 9 Jun 2026: CATL, BYD, EVE, CALB listed" | BYD, CALB, EVE **added** 8 Jun 2026 (FR 2026-11571, 10 Jun); **CATL listed since Jan 2025** | FR 2026-11571; FR 2025-00070 |
| S-04 | Dynanonic "2024 shipments ≈13,000 t" | **13,000 t is global LMFP shipments in 2024** | EVTank via ChinaEVHome |
| S-05 | Gotion "SOE-owned flag" (Sayari) | Sayari flags are "SOE-adjacent" and "owner of SOE", on a stale former-name record that lists itself as its own 99.8% shareholder (**artefact**). Ownership fact: VW ≈25% | Sayari; VW press release no. 82/2026 |
| S-06 | Rongke "MEU and Xinjiang-adjacency flags" | Not on the BIS MEU list or Entity List. Sayari "meu_list_contractors" = government procurement records. The Xinjiang flag reflects Hami-registered group subsidiaries (structural) | eCFR Part 744 Supp. 4 & 7; Sayari definitions |
| S-07 | First Phosphate EIFO LOI "(G7, Jun 2026)" | LOI **signed 30 Mar 2026**, announced in a G7 context | First Phosphate |
| S-08 | LMFP manganese-sulphate screen "346 forced-labour-flagged" | Reproduces (350 of 1,148, 2026-10-05). The flags are **DOL-product and tier-2/3 Xinjiang/UFLPA proximity** (often via "Possibly the Same As" paths), **not** forced-labour findings | Sayari trade facets + risk-factor definitions |
| S-09 | `harm-evidence.md` MN-4 (Xinjiang manganese labour transfers) | **Withdrawn.** The current (July 2025) *Driving Force* doesn't document it | *Driving Force* (read at source) |
| S-10 | (Risk, not a seed row) Any match on "Jinchuan" | Name collision: Xinjiang Jinchuan Mining (UFLPA, Aug 2026) is a Shandong Gold **gold** miner, not Jinchuan Group (nickel/cobalt) | FR 2026-15628 |

## D. Backlog examples (B-16 checklist)

| Backlog example | Register id |
|---|---|
| EnerVenue funding totals | C-01 |
| Series B size (US$300m vs US$339.6m) | C-02 |
| Dynanonic capacity (80k vs 110k t/yr) | R-01 |
| Rongke installed base vs global VRFB base | C-05 |
| Vanadium co-production share (73% vs 73–90%) | C-04 |

All five backlog examples are registered.
