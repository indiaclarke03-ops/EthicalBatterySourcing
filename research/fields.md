# Field selection (B-06)

*As of 2026-10-05 · Source: Commission guidance "Digital Batteries Passport – data points by category", v2.0, 15 Aug 2026 [R4 in `regulation.md`] · Status: for India's review*

## 1. Mandatory counts (settles the open item in `regulation.md`)

Every one of the 71 data points was tabulated by status and category from [R4]. Two rows that wrap across page breaks (#31, #52) were read by eye.

| Status at Feb 2027 | EV | LMT | Industrial > 2 kWh |
|---|---|---|---|
| Mandatory | **46** | **49** | **32** |
| Same as #11, but dynamic (#51) | 1 | 1 | — |
| "Only applicable for some industrial batteries" | — | — | 5 (#31, #32, #36, #37, #39) |
| If applicable | 8 | 8 | 21 |
| Optional (#5) | 1 | 1 | 1 |
| Not to be filled / displayed | 15 | 12 | 12 |
| **Total** | 71 | 71 | 71 |

**Conflict (register in B-16):** secondary sites give 51 / 54 / 36 [R5 and others]. The row-by-row count above is from the T1 document itself, so this project uses **46 / 49 / 32**. **Industrial batteries, the category every grid chemistry here falls into, have the fewest mandatory points and the most "if applicable" ones.**

## 2. Selected passport fields (15)

Weighted toward sourcing, with a small identification and performance set for context. Numbers are the guidance's data-point numbers.

| # | Field | Category | Status at Feb 2027 (EV / LMT / Ind.) | Why it's in |
|---|---|---|---|---|
| 3 | Manufacturer | identification | M / M / M | Anchors the S3/S4 node |
| 6 | Battery category | identification | M / M / M | Drives scope (`regulation.md` §5) |
| 8 | Place of manufacture | sourcing | M / M / M | The **only** location field, and it's the cell/pack plant, not upstream |
| 12 | Chemistry | identification | M / M / M | — |
| 11 | Capacity | performance | M / M / M | Context |
| 31 | Expected lifetime in cycles | performance | M / M / some industrial | Context; long-life claims (Ni-H₂, VRFB) |
| 36 | Initial round-trip efficiency | performance | M / M / some industrial | Storage context |
| 13 | Hazardous substances (other than Hg, Cd, Pb) | sourcing | M / M / M | Feeds HH risk code |
| 15 | Critical raw materials > 0.1% w/w | sourcing | M / M / M | **Discloses presence, not origin** (§4) |
| 45 | Detailed composition (cathode, anode, electrolyte materials) | sourcing | M / M / M | Shows which materials are in the chain |
| 24 | Share of renewable content | circularity | M / M / M | — |
| 67 | Battery status (original / repurposed / …) | circularity | M / M / M | — |
| 17 | Carbon-footprint declaration | carbon | **Deferred** (format pending implementing act) | Shown as an empty slot |
| 19 | Responsible-sourcing information (DD report, Art. 52(3)) | due-diligence | **Deferred: required from Aug 2027** | The only sourcing field; shown as an empty slot |
| 20–22 | Recycled share of Co, Li, Ni in active materials | circularity | **Deferred** (Art. 8 delegated act) | Shown as an empty slot |

Deferred fields render as empty, labelled slots with their legal start date (SPECIFICATION §4.3).

## 3. Shadow layer: "What this passport doesn't show"

Shown beside the passport, never styled as a passport field. Each is drawn from supply-chain nodes and research notes.

| Shadow field | Source in this project |
|---|---|
| Raw-material origin by stage (S0–S1: country, and named site where verified) | Chemistry notes B-09 – B-14 |
| Refiner / processor identity | Chemistry notes; Sayari |
| EU due-diligence coverage of each material | `ethical-sourcing.md` §1 |
| Assurance status per material (IRMA / RMI / none) | `ethical-sourcing.md` §4 |
| Documented harm and screening flags per stage | `harm-evidence.md`; Sayari |
| Official-list exposure (UFLPA, 1260H) | `cross-cutting.md` §3, §5 |
| Whether the maker falls under EU due diligence at all (turnover threshold) | `regulation.md` §1. GAP where turnover isn't public |
| Hidden process inputs (sulphuric acid) | `cross-cutting.md` §4 |

## 4. What #15 means for materials outside the due-diligence list

- #15 requires disclosure of "critical raw materials present in the battery in a concentration of more than 0,1 % weight by weight" (Annex VI, Part A, point 10 [R1]).
- The current EU list of critical raw materials (Reg. (EU) 2024/1252, Annex II, Section 1 [F1]) includes **manganese, vanadium, phosphate rock, phosphorus, copper, bauxite/alumina/aluminium, graphite (not only natural), cobalt, lithium, nickel (battery grade) and gallium**.
- **If** #15 uses that list, then a passport would show that manganese (LMFP), vanadium (VRFB) or phosphorus (LFP) is *in* the battery. Due diligence still wouldn't ask where it came from. That's the clearest single illustration of the project's thesis: *the passport can see the material but not its source*.
- ⚠ The battery regulation doesn't say which list "critical raw materials" refers to. Linking #15 to CRMA Annex II is an **inference: Low** (rubric: INF, not a reading of explicit T1 text). Look for a T1 source (Commission FAQ or implementing act) before the site states it as fact.

## 5. Fields that don't translate cleanly to non-lithium chemistries

| Field | VRFB | Ni-H₂ | Carbon-O₂ | Note |
|---|---|---|---|---|
| #11 Capacity / #25 Ah | Awkward: energy scales with tank volume, separate from power (stack) | Fits | Unclear | VRFB energy (kWh) and power (kW) are sized independently |
| #31 Lifetime in cycles | Fits, but cycle life isn't the limiting measure for electrolyte | Fits (company claims > 30,000, unaudited, per seed) | May not apply | Industrial: "only applicable for some" |
| #36 Round-trip efficiency | Fits | Fits | Fits | Industrial: "only applicable for some" |
| #45 Composition (cathode, anode, electrolyte) | Partial: electrolyte (vanadium in sulphuric acid), carbon-felt electrodes, membrane; no cathode/anode in Li-ion terms | Fits (nickel electrode, hydrogen electrode, KOH electrolyte, pressure vessel) | Partial: solid-oxide cell ceramics; storage medium | Template assumes Li-ion architecture |
| #20–22 Recycled Co/Li/Ni | **N/A** (no Co/Li/Ni) | Ni applies | Trace Co only | Recycled vanadium has no field |
| #15 CRMs > 0.1% | V (if CRMA list) | Ni, Co (trace) | Co, Ga below threshold? Trace amounts are design-dependent | See §4 |
| #19 Responsible sourcing | Covers nothing: vanadium is outside Annex X | Covers Ni, Co | Covers trace Co only | DD list mismatch (`ethical-sourcing.md`) |

**Takeaway for the comparison page:** the passport template was designed around lithium-ion. For VRFB in particular, the one sourcing field (#19) will have nothing to report even after August 2027, because none of its key materials is on the due-diligence list.

## Sources

| Id | Source | Tier | Retrieved |
|---|---|---|---|
| R1, R4, R5 | See `regulation.md` | — | 2026-10-05 |
| F1 | Regulation (EU) 2024/1252 (Critical Raw Materials Act), Annex I (strategic) and Annex II (critical), EUR-Lex. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1252 | T1 | 2026-10-05 |
