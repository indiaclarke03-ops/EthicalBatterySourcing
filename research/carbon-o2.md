# Carbon-oxygen (Noon Energy) (B-13)

*As of 2026-10-05 · Researched with Claude Code (Tavily, Sayari) from `electrum-seed.md` · Status: for India's review*

## Passport depth decision: **shadow passport**

India's rule: full passport if B-13 finds enough verifiable detail, otherwise a shadow passport.

**Decision: shadow passport.** Reasons:
1. **No product is on any market yet.** The first commercial project (25 MW / 2.5 GWh for Meta) is scheduled for 2028.
2. **No manufacturing site or supplier is public.** S0–S2 (materials, ceramics, stack components) are entirely GAP or inference.
3. **The company hasn't disclosed its cell materials.** The "≈1% of Li-ion critical materials" claim can't be checked.
4. **EU scope is "Likely", not "In scope"** (§ Scope below).

A full passport would be mostly empty fields and inferences. The shadow passport shows what *is* verifiable (company, technology, customers, capital, scope reasoning) and makes the unknowns the point, which is the CONCEPT's own question: does carbon-oxygen sidestep mineral risk, or move it into specialist ceramics manufacturing?

## Technology (what's verified)

| Claim | Src | Tier | Conf |
|---|---|---|---|
| A **reversible solid-oxide cell** "power block" plus storage tanks, in standard shipping containers. Charging electrolyses CO₂ (with the Boudouard reaction) into **solid carbon powder**, stored in a tank, releasing oxygen to air. Discharging draws **oxygen from air** and recombines it with the stored carbon in fuel-cell mode | Noon technical paper, EFCF 2026 (C1); Noon website (C2); Latitude Media (C3); Energy-Storage.news (C4) | T1 (statement) + T2 | High |
| Power (power blocks) and energy (tank size) scale independently | C2, C4 | T1 (statement) | High |
| Demonstration: first fully containerised system completed construction, commissioning and testing; ~100-hour discharge reported (Jan 2026) | C1; C3 | T1/T2 | High |
| CEC-co-funded pilot, San Joaquin County (EPIC, US$2.17m) | Cleantech Tracker (C5) | T3 | Low. Seed says CEC demo 100 kW / 10 MWh; amount and size not reconciled |
| Claims: "20 to 50 times" the energy density of a typical flow battery; ~US$20/kWh target cost | CEO via Energy-Storage.news (C4); mGrid (C6) | T1 (statement) | High as statement · unaudited |

## Scope (update to `regulation.md` §4–5)

| Question | Reading | Conf |
|---|---|---|
| Is it a "battery" (Art. 3(1)(1))? | Discharge delivers electrical energy by **direct conversion of chemical energy** (electrochemical oxidation of stored carbon). The carbon is stored in **attached external tanks**, matching "battery with external storage" (Art. 3(1)(8)). The cells have electrodes and an electrolyte (Art. 3(1)(3)). **Against:** one reactant (oxygen) comes from open air, and the device is described as a reversible *fuel cell*; the regulation doesn't mention fuel cells | Reading of T1 text, with a stated counter-argument → status **Likely** |
| Use-case status | Data-centre backup: **Likely** · Long-duration (100 h+): **Likely** | Medium (reading of T1 text) |

The scope matrix in `regulation.md` gave Carbon-O₂ "Unclear · Low" pending this note. It becomes **"Likely · Medium"**.

## Shadow passport content

### Company and capital

| Item | Claim | Src | Conf |
|---|---|---|---|
| Entity | **Noon Energy Inc.**: Delaware file 6850177; California corp. 04254175; SEC CIK 0001838796; CAGE 8BNL1; 470 Ramona St, Palo Alto. **No Sayari risk flags.** EPA/RCRA hazardous-waste-handler record at a Mountain View lab address (routine for a materials lab) | Sayari [C7] | High (registry + public address match) |
| ⚠ Name collisions | Sayari also returns "High Noon Energy", "Noon Energy Ltd" (UK), "Noon Energy SL" (ES) and others, all unrelated | Sayari | — |
| Funding (company) | "More than **US$45 million** in venture capital and government grants" from At One Ventures, Emerson Collective, Clean Energy Ventures, **Aramco Ventures**, Prime Impact Fund, Elemental Impact, Sabanci Climate Ventures, D3 Jubilee, the California Energy Commission, and others | Noon press release (21 Apr 2026) (C8) | High (as statement) |
| ⚠ Funding (seed) | US$63.85m from 25 investors; ~US$33m later Series A (Nov 2025) at ≈US$110.7m post | PitchBook, via Electrum report (Aug 2026) | Low (conflict with company figure) → B-16 |
| Series A | US$28m led by Clean Energy Ventures (late 2022) | Latitude Media (C3) | Medium |
| Series B | In market since Jan 2026. **No close found** as of 2026-10-05 | C3; seed; Tavily search (no result) | Medium (absence of evidence) |
| Public R&D | ARPA-E (≈US$0.5m); CEC CalSEED and BRIDGE | Seed (DOE; CEC) | High. Seed, not re-verified |

### Customers

| Item | Claim | Src | Conf |
|---|---|---|---|
| **Meta** | Agreement (21 Apr 2026) to **reserve up to 1 GW / 100 GWh**. First a 25 MW / 2.5 GWh project, completion by 2028; then a 1 GW / 100 GWh supply contract "following the success of that project". A **reservation, not a firm order** | Noon press release (C8); Solar Power World; Data Center Knowledge (C9) | High |

### What the passport would need, and what's known

| Passport-relevant item | Status |
|---|---|
| Cell chemistry / composition (#12, #45) | **Not disclosed.** Typical solid-oxide cells use a yttria-stabilised zirconia (YSZ) electrolyte, a nickel–YSZ fuel electrode, and lanthanum–strontium–cobalt(–iron) oxide air electrodes, often with a gadolinium-doped ceria layer (peer-reviewed reviews, C10). **Whether Noon uses these is unknown.** |
| Critical raw materials > 0.1% (#15) | **Can't be assessed.** If Noon's cells resemble typical SOCs, they'd contain several CRMA-listed materials (nickel, cobalt, rare earths La/Y/Gd/Ce, strontium; hafnium with zirconium) at gram scale per cell. INF, Low |
| Storage medium | Carbon (from CO₂) and air oxygen: no mined input for the energy-storing medium | High (technology) |
| Place of manufacture (#8) | **Not announced** |
| Responsible sourcing (#19) | Only cobalt and nickel (if present in cells) are on the EU DD list. Rare earths, strontium, zirconium and gallium aren't |

### Testing the "≈1% of critical materials" claim

| Element | Assessment |
|---|---|
| Claim | Noon's system uses ≈1% of the critical materials of Li-ion (seed; company) |
| As a statement | T1, High: the company says it |
| As a measurement | **Can't be verified.** No bill of materials is disclosed, there's no third-party LCA, and the ratio's denominator isn't defined |
| What *is* plausible | The **energy-storing medium** (carbon, air) needs no mined critical material. That's the large-volume part of Li-ion that the claim most likely compares against. The **power block** (ceramic cells, interconnects, contacts) is where critical materials would sit, at gram scale per cell, in specialist ceramic and powder supply chains. Those chains are concentrated and opaque, but undocumented in this project |
| As an ethical claim | "≈1% of critical materials" isn't the same as "≈1% of ethical risk". Small quantities of cobalt, nickel or rare earths carry the same per-tonne sourcing risks, and they'd fall largely **outside EU DD** (rare earths, strontium) or under it only if cobalt and nickel are present. **Risk moves to specialist ceramics manufacturing**, with no visibility today |

### Ethical-sourcing profile (shadow)

| Stage | Risk | Signal | EU DD | Conf |
|---|---|---|---|---|
| S0 (storage medium) | None identified: carbon from CO₂, oxygen from air | No known evidence | Not applicable | High |
| S0–S2 (power-block materials) | Possible cobalt, nickel, rare earths, strontium, zirconium/hafnium: **all unconfirmed** | **GAP / structural** (ceramic powder supply chains) | Mixed / unclear | Unknown |
| S3 (stack manufacturing) | No manufacturing location announced | GAP | — | Unknown |

## Conflicts for B-16

1. Total raised: > US$45m (company, Apr 2026) vs US$63.85m (PitchBook via Electrum).
2. CEC pilot: 100 kW / 10 MWh (seed) vs US$2.17m EPIC award (T3); size not given.

## Gaps (seed gap #2 still open)

- Cell and stack materials; ceramics and powder suppliers; interconnect and contact materials.
- Manufacturing location for the 2028 Meta project.
- Series B outcome.

## Sources

| Id | Source | Tier | Retrieved |
|---|---|---|---|
| C1 | Allen, Liang et al. (Noon Energy), "First containerized demonstration of ultra low cost, carbon…", EFCF 2026, paper B0601. https://www.efcf.com/fileadmin/user_upload/EFCF-2026_B0601_Paper_11868_NoonCarbonBattery_Allen_Liang.pdf (abstract read; full text not extracted) | T1 (statement) | 2026-10-05 |
| C2 | Noon Energy, Technology page. https://www.noon.energy/technology | T1 (statement) | 2026-10-05 |
| C3 | Latitude Media, "Noon Energy successfully demos its 100-hour carbon-oxygen battery". https://www.latitudemedia.com/news/noon-energy-successfully-demos-its-100-hour-carbon-oxygen-battery | T2 | 2026-10-05 |
| C4 | Energy-Storage.news, "'Reversible solid oxide fuel cells': Noon Energy's approach to 100+ hour energy storage". https://www.energy-storage.news/reversible-solid-oxide-fuel-cells-noon-energys-approach-to-100-hour-energy-storage | T2 | 2026-10-05 |
| C5 | Advanced Cleantech Deployment Tracker, "Noon Energy Pilot project". https://www.cleantechtracker.com/projects/noon-energy-pilot-project | T3 | 2026-10-05 |
| C6 | mGrid, "Noon Energy's 1 GW/100 GWh Storage for AI Data Centers" (21 Apr 2026) | T3 | 2026-10-05 |
| C7 | Sayari Graph, NOON ENERGY INC., entity MBWAt6Jc9iO3Hm2YoKEBzQ (and DE record ivlRzTyVyyrQMTzLqXdVNA; EPA record 8kmBhPiFyp2-QCnUA9y92Q) | S-REG | 2026-10-05 |
| C8 | Noon Energy, "Noon Energy and Meta Announce Plans for Up to 1 GW of 100+ Hour Energy Storage for Data Centers" (21 Apr 2026). https://www.noon.energy/post/noonenergyandmetapartnership | T1 (statement) | 2026-10-05 |
| C9 | Solar Power World (Apr 2026); Data Center Knowledge, "Meta's Space Solar Bet Highlights AI Data Center Power Gap" | T2 | 2026-10-05 |
| C10 | He et al. (2023), "A critical review of key materials and issues in solid oxide cells", *Interdisciplinary Materials*. https://onlinelibrary.wiley.com/doi/full/10.1002/idm2.12068 ; Kukk et al. (2023), LAPSE 2023.29502 | T2 | 2026-10-05 |
