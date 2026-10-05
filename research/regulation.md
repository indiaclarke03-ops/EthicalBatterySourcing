# Regulation and scope (B-05)

*As of 2026-10-05 · Researched with Claude Code (Tavily, EUR-Lex, Council register) · Status: for India's review*

## Summary

1. **The passport starts on 18 February 2027** for EV batteries, LMT batteries and industrial batteries above 2 kWh (Art. 77(1)). Confirmed, T1.
2. **Due diligence starts on 18 August 2027**, postponed from 18 August 2025 by Regulation (EU) 2025/1561. Confirmed, T1.
3. **At launch, the passport carries no sourcing information at all.** The Commission's data-point guidance (v2.0, 15 Aug 2026) marks the following as "not to be filled/displayed as of February 2027":
   - responsible-sourcing information (data point 19);
   - the carbon-footprint declaration and label (17–18);
   - all recycled-content shares (20–23).

   This is a stronger finding than the six-month gap in CONCEPT-IDEA_1.md. The issue isn't only that the passport starts before due diligence; the passport has no sourcing field until due diligence starts.
4. **No passport data point records where raw materials came from** (decided: shown in the shadow layer, "what the passport doesn't show"). The closest fields are:
   - #8: the battery plant's location;
   - #15: critical raw materials above 0.1% w/w;
   - #45: detailed composition of the cathode, anode and electrolyte.

   Mine and refinery origin would appear, if at all, only inside the due-diligence information required from August 2027. **This changes B-06:** "raw-material origin" can't be one of the ~15 passport fields. It belongs in the shadow layer, as something the passport doesn't show.
5. **The due-diligence material list is confirmed** as cobalt, natural graphite, lithium and nickel, plus their chemical compounds needed for active materials (Annex X, point 1). Manganese, phosphate, vanadium, sulphur/sulphuric acid and copper are **not on it**. The CONCEPT hypothesis holds (details in `ethical-sourcing.md`, B-05a).
6. **The net may get wider holes.** The Omnibus IV compromise agreed in June 2026 would:
   - raise the due-diligence exemption threshold from €40m to **€200m** net turnover;
   - change the public due-diligence report from annual to **at least every five years**.

   It isn't law yet as of 2026-10-05.

## 1. Key dates and obligations

| Item | Finding | Source | Tier | Conf | Reason |
|---|---|---|---|---|---|
| Passport start and scope | "From 18 February 2027 each LMT battery, each industrial battery with a capacity greater than 2 kWh and each electric vehicle battery placed on the market or put into service shall have an electronic record ('battery passport')." | [R1] Art. 77(1) | T1 | High | Regulation text |
| QR code | All batteries are QR-marked from 18 Feb 2027. For passport categories, the QR code links to the passport. | [R1] Art. 13(6) | T1 | High | Regulation text |
| Due-diligence start | Art. 48(1) date changed from "18 August 2025" to "18 August 2027" | [R2] Art. 1(a) | T1 | High | Amending regulation text |
| Due-diligence guidelines deadline | Moved from 18 Feb 2025 to 26 July 2026 | [R2] Art. 1(b) | T1 | High | Amending regulation text |
| Who due diligence applies to now | Exempts operators with net turnover < €40m that aren't part of a group above €40m | [R1] Art. 47 | T1 | High | Regulation text |
| Who it may apply to (pending) | Compromise text raises the threshold to < €200m; the public report is reviewed "at least every five years" instead of annually | [R3] Council information note 10978/26, Annex, Art. 5 | T1 | Medium | Agreed text, not yet adopted. No Official Journal publication found as of 2026-10-05 [R6]. ⚠ Re-check before demo |
| Omnibus IV status (re-checked) | Still not adopted as of 1 Oct 2026; compliance advisers continue to treat €40m as the binding threshold | TDi Sustainability (1 Oct 2026) [R7] | T2 | Medium | Absence of adoption, two dated trackers agree with [R6] |
| Passport access rules | The implementing act on who may access restricted passport data was due 18 Aug 2026 and wasn't adopted; expected Q4 2026. Art. 77 obligations still apply from 18 Feb 2027 | Taylor Wessing (Aug 2026) [R8] | T2 | Medium | Single law-firm source; check the Commission register before demo |
| Forced Labour Regulation | Reg. (EU) 2024/3015 bans products made with forced labour from the EU market from **14 Dec 2027**. It covers *all* products, incl. extracted minerals, with no material list. It's a product ban, not a due-diligence duty | Commission FLR page and guidelines [R9] | T1 | High | Commission text |
| Third-party verification | DD policies verified by a notified body (Art. 48(2), Art. 51) | [R1] | T1 | High | Regulation text |
| Data-point guidance | "Guidance Document: Digital Batteries Passport – data points by category", v2.0, 15 Aug 2026, DG GROW. 71 data points. The document says it is "not … representative of the European Commission's official position" | [R4] | T1 (as Commission publication; non-binding) | High | Primary document read in full |

**Conflict:** one secondary source dates the guidance 21 August 2026 [R5]. The document itself says 15 August 2026 and was e-signed 16/08/2026. Use 15 Aug 2026.

## 2. What the passport shows at launch (Feb 2027)

Applicability by data point, from [R4]. "Deferred" = "Not to be filled/displayed as of February 2027".

| # | Data point | EV | LMT | Industrial | Relevance to sourcing |
|---|---|---|---|---|---|
| 8 | Place of manufacture (plant location) | Mandatory | Mandatory | Mandatory | Cell/pack plant only, not upstream |
| 12 | Chemistry | Mandatory | Mandatory | Mandatory | Identification |
| 15 | Critical raw materials > 0.1% w/w | Mandatory | Mandatory | Mandatory | **What** is in the battery, not **where from** |
| 17–18 | Carbon-footprint declaration and label | Deferred (format pending implementing act) | Deferred | Deferred | — |
| 19 | Responsible-sourcing information from the DD report (Art. 52(3)) | **Deferred: required from August 2027** | Deferred | Deferred | **The only sourcing field** |
| 20–23 | Recycled share of Co, Li, Ni, Pb | Deferred (Art. 8 delegated act) | Deferred | Deferred | — |
| 24 | Share of renewable content | Mandatory | Mandatory | Mandatory | Limited |
| 44 | Instructions for use | Deferred (on hold pending Omnibus) | Deferred | Deferred | — |
| 45 | Detailed composition (cathode, anode, electrolyte materials) | Mandatory | Mandatory | Mandatory | Materials, not origin |

For industrial batteries, several performance points are marked "only applicable for some industrial batteries" (#31–32 lifetime in cycles, #36–37 round-trip efficiency, #39 C-rate) or "if applicable" (#52–60 dynamic performance). This matters for VRFB and Ni-H₂, whose performance is described differently from Li-ion. It feeds into B-06.

**Mandatory counts per category:** settled in `fields.md` §1 from a row-by-row count of [R4]: **46 (EV) / 49 (LMT) / 32 (industrial)**. Secondary sites give 51 / 54 / 36 [R5]; that conflict goes to the register.

## 3. Definitions that decide scope

| Term | Text (abridged) | Source |
|---|---|---|
| Battery | "any device delivering electrical energy generated by direct conversion of chemical energy, having **internal or external storage**, and consisting of one or more … rechargeable battery cells, modules or of packs of them" | [R1] Art. 3(1)(1) |
| Battery with external storage | "a battery that is specifically designed to have its energy stored exclusively in one or more attached external devices" | [R1] Art. 3(1)(8) |
| Industrial battery | Designed for industrial uses, or any other battery > 5 kg that isn't an EV, LMT or SLI battery | [R1] Art. 3(1)(13) |
| Electric vehicle battery | Traction battery for M, N, O vehicles (any weight) or L vehicles (> 25 kg) | [R1] Art. 3(1)(14) |
| Stationary battery energy storage system | "an industrial battery **with internal storage** that is specifically designed to store from and deliver electric energy to the grid or … to end-users" | [R1] Art. 3(1)(15) |
| All chemistries | The regulation applies "regardless of … material composition, chemistry, use or purpose" | [R1] Art. 1(3) |
| Exclusions | Batteries in equipment for "essential security interests, arms, munitions and war material" (unless not specifically military), and "equipment designed to be sent into space" | [R1] Art. 1(5) |
| External storage carbon footprint | Rechargeable industrial batteries with external storage get a later carbon-footprint date (18 Aug 2030 or later) than those without | [R1] Art. 7 |

## 4. Scope hypotheses tested

| Hypothesis (PLAN.md) | Result | Conf | Reason |
|---|---|---|---|
| Stationary storage above 2 kWh is an industrial battery, so it's in passport scope | **Confirmed.** Stationary storage is "industrial" by design; Art. 77 covers industrial > 2 kWh | High | Direct reading of Art. 3(1)(13), 3(1)(15) and 77(1) |
| Military and space uses are excluded | **Confirmed, with a limit.** The exclusion covers batteries in equipment for essential security interests, arms, munitions and war material, and equipment designed to be sent into space. Dual-use products "not intended for specifically military purposes" stay **in** scope | High | Art. 1(5) text |
| Flow batteries meet the definition of "battery" | **Supported.** The definition expressly includes "external storage", and Art. 3(1)(8) and Art. 7 treat external-storage batteries as a recognised kind of industrial battery. A VRFB stores energy in external electrolyte tanks. It's an industrial battery, but **not** a "stationary battery energy storage system" as defined (that requires internal storage), so some BESS-specific provisions won't apply | Medium | Reading of T1 text: the definition expressly covers external storage. No T1 guidance names flow batteries |
| Reversible solid-oxide systems (Noon) meet the definition | **Unclear.** It turns on whether Noon's cells are "battery cells" that deliver electricity "by direct conversion of chemical energy" from stored material. If its carbon storage sits in attached external tanks, it may be a battery with external storage. Needs the technical description from B-13 | Low | Inference only; no T1 or technical source yet |

**Rubric rule (decided 2026-10-05):** a reading of explicit T1 text with no contrary source scores **Medium**, and its reason starts "Reading of T1 text:". The rule applies identically to every chemistry (PLAN.md).

## 5. Scope matrix: chemistry × use case

Status values: In scope / Likely / Unclear / Out of scope. Out-of-scope cells get a shadow passport.

| Chemistry | EV | Grid / stationary | Data-centre backup | Long-duration (100 h+) | Defence / aerospace |
|---|---|---|---|---|---|
| NMC (reference) | **In scope** · High | — | — | — | — |
| LFP | **In scope** · High | **In scope** · High | **In scope** · High ¹ | — | — |
| LMFP | **In scope** · High | — | — | — | — |
| VRFB | — | **In scope** · Medium ² | — | — | — |
| Ni-H₂ (EnerVenue) | — | **In scope** · High | — | — | **Out of scope** · High ³ (shadow passport) |
| Carbon-O₂ (Noon) | — | — | **Unclear** · Low ⁴ | **Unclear** · Low ⁴ | — |

1. UPS/backup batteries above 2 kWh are industrial batteries. Very small units (≤ 2 kWh) would fall outside the passport but stay within the rest of the regulation.
2. Industrial battery with external storage (see §4). It also has a later carbon-footprint timetable.
3. EaglePicher's defence and space Ni-H₂ heritage falls under Art. 1(5). Terrestrial grid Ni-H₂ (EnerVenue) is in scope. The exclusion is about the equipment a battery goes into, not the chemistry.
4. Depends on B-13's technical description. If Noon is classed as outside the definition of "battery", every use gets a shadow passport.

**What scope doesn't settle.** A battery can be in passport scope while its maker is exempt from due diligence. If the Omnibus €200m threshold is adopted, early-stage makers such as EnerVenue and Noon may be outside due diligence even for in-scope batteries. Their turnover isn't public, so record this as a **GAP** per company, not as a finding.

## Sources

| Id | Source | Tier | Retrieved |
|---|---|---|---|
| R1 | Regulation (EU) 2023/1542, consolidated text 02023R1542-20250731, EUR-Lex. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02023R1542-20250731 | T1 | 2026-10-05 |
| R2 | Regulation (EU) 2025/1561 of 18 July 2025 (OJ L, 30.7.2025). https://eur-lex.europa.eu/eli/reg/2025/1561/oj/eng | T1 | 2026-10-05 |
| R3 | Council of the EU, information note 10978/26, 26 June 2026: Omnibus IV compromise texts confirmed by Coreper (agreement reached 3 and 9 June 2026). https://data.consilium.europa.eu/doc/document/ST-10978-2026-INIT/en/pdf | T1 | 2026-10-05 |
| R4 | European Commission, DG GROW, "Guidance Document: Digital Batteries Passport – data points by category", v2.0, 15 Aug 2026 (CC BY 4.0). https://single-market-economy.ec.europa.eu/document/download/cd1e5e6c-4a4a-4b99-995a-49eb6916187e_en?filename=Digital+Batteries+Passport+-+data+point+by+category.pdf | T1 (non-binding) | 2026-10-05 |
| R5 | DPP Intel, "Battery Passport Data Requirements: 71 Data Points" (gives 21 Aug 2026). https://dppintel.com/battery-passport-data-requirements | T3 | 2026-10-05 |
| R6 | BD Emerson, "EU Battery Regulation 2023/1542 Obligations" (Omnibus IV not in force by mid-Sept 2026). https://www.bdemerson.com/article/eu-battery-regulation | T3 | 2026-10-05 |
| R7 | TDi Sustainability, "The EU Battery Regulation (EUBR) Is Here…" (1 Oct 2026). https://www.tdi-sustainability.com/knowledge/the-eu-battery-regulation-eubr-is-here-are-e-bike-and-scooter-oems-ready | T2 | 2026-10-05 |
| R8 | Taylor Wessing, "Battery passport: access rules not adopted by 18 August 2026". https://www.taylorwessing.com/en/insights-and-events/insights/2026/08/battery-passport | T2 | 2026-10-05 |
| R9 | European Commission, Forced Labour Regulation page and guidelines (Reg. (EU) 2024/3015). https://single-market-economy.ec.europa.eu/single-market/goods/forced-labour-regulation_en | T1 | 2026-10-05 |
