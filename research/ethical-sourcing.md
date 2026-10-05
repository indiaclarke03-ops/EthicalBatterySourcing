# Ethical-sourcing foundations (B-05a)

*As of 2026-10-05 · Researched with Claude Code (Tavily, EUR-Lex, Federal Register, DOL, IRMA, RMI) · Status: for India's review*

## Summary

1. **The EU due-diligence list is confirmed:** cobalt, natural graphite, lithium, nickel, and "chemical compounds based on [them] … necessary for the manufacturing of the active materials" [E1, Annex X(1); E2, recital 1]. The Commission can amend the list by delegated act "in view of … progress in battery manufacturing and chemistries" [E1, Art. 48(5)(a)].
2. **Several materials this project traces are outside that list:** manganese, phosphate/phosphoric acid, iron, vanadium, sulphur/sulphuric acid, copper, aluminium, and the trace stack materials (gallium, silver). Two US government sources already flag some of them:
   - **Zambian manganese** is on the US DOL list for child labour [E4];
   - **Chinese lithium-ion batteries and electrolytic copper** are listed as made with child-labour inputs (DRC copper ore) [E4];
   - **Xinjiang battery aluminium foil** is on the UFLPA Entity List (Aug 2026) [E5].
3. **Synthetic graphite is a blind spot inside the list.** The list names *natural* graphite. Artificial graphite, made from carbon feedstocks such as petroleum coke, isn't named. Yet it's the anode in this project's LFP chain (BACKLOG B-09), and China's Decision No. 58 export controls single it out (seed, cross-cutting). Its market share needs a source in B-09. One of the Aug 2026 UFLPA additions is a Xinjiang anode-material maker cited for sourcing petroleum coke and anthracite from the XUAR [E5]. ⚠ Whether synthetic graphite counts as a "chemical compound based on" natural graphite is a legal question I can't settle. Score it **Unclear** until B-07 or a T1 source resolves it.
4. **Assurance thins out exactly where the list stops.** RMI publishes facility lists for cobalt, nickel, lithium and copper, but not graphite, manganese, phosphate or vanadium [E7]. IRMA has no manganese, phosphate or vanadium mine in its system [E6].
5. **The Annex X risk categories differ from PLAN.md's taxonomy.** There's no standalone "gender" category; Annex X uses "discrimination". Trade-union freedoms, hazardous substances, waste and plant safety are named separately. A revised code list is proposed in §2.

## 1. Due-diligence coverage by material

| Material | Chemistries (this project) | On Annex X list? | Conf | Notes |
|---|---|---|---|---|
| Cobalt | NMC, Ni-H₂ (trace), carbon-O₂ (trace, LSCF) | **Covered** | High | [E1] |
| Lithium | NMC, LFP, LMFP | **Covered** | High | [E1] |
| Nickel | NMC, Ni-H₂ | **Covered** | High | [E1] |
| Natural graphite | NMC, LFP, LMFP (anode) | **Covered** | High | [E1] |
| Synthetic (artificial) graphite | LFP, LMFP, NMC (anode) | **Unclear** | Low | Not named; may or may not count as a compound "based on" natural graphite. My reading, no T1 guidance found |
| Manganese / manganese sulphate | LMFP, NMC | **Not covered** | High | Absent from Annex X(1) |
| Phosphate / phosphoric acid | LFP, LMFP | **Not covered** | High | Absent |
| Iron | LFP, LMFP | **Not covered** | High | Absent |
| Vanadium | VRFB | **Not covered** | High | Absent |
| Sulphur / sulphuric acid | All (processing input) | **Not covered** | High | Absent; processing reagent, not in the battery |
| Copper | All (current collectors, wiring) | **Not covered** | High | Absent |
| Aluminium | All (foil, casings) | **Not covered** | High | Absent |
| Gallium, silver | Carbon-O₂ (trace) | **Not covered** | High | Absent |

The "Not covered" scores are High because the list is closed (T1). Whether a material is *risky* is a separate question, answered in B-05b.

## 2. Risk taxonomy: Annex X versus PLAN.md

Annex X point 2 [E1] lists:
- **(a) Environment, climate and human health:** air (incl. GHG), water (incl. use and access), soil (incl. land use), biodiversity, hazardous substances, noise and vibration, plant safety, energy use, waste and residues.
- **(b) Human rights, labour rights and industrial relations:** occupational health and safety, child labour, forced labour, discrimination, trade-union freedoms.
- **(c) Community life,** including that of Indigenous peoples.

**Revised codes (adopted 2026-10-05):**

| Code | Category | Annex X ref | Change from PLAN |
|---|---|---|---|
| HR | Human rights (general, incl. security forces, conflict) | (b) | — |
| LR-FL | Forced labour | (b)(iii) | — |
| LR-CL | Child labour | (b)(ii) | — |
| LR-DIS | Discrimination (incl. gender) | (b)(iv) | **Replaces GEN.** Gender-specific harms are tagged LR-DIS with a `gender` note |
| LR-TU | Trade-union freedoms | (b)(v) | **New** |
| OHS | Occupational health and safety | (b)(i) | — |
| COM | Community life, Indigenous peoples, FPIC | (c) | — |
| ENV-W | Water (pollution, use, access) | (a)(ii) | — |
| ENV-S | Soil, land use, tailings, waste and residues | (a)(iii), (ix) | Waste/tailings folded in |
| ENV-A | Air, incl. GHG | (a)(i) | — |
| ENV-B | Biodiversity | (a)(iv) | — |
| HH | Human health, hazardous substances, plant safety | (a), (v), (vii) | Now explicitly environment-side, per Annex X |

## 3. Reference sources: status and terms

| Source | What it is | Latest version found | Terms / use | Use in project | Tier |
|---|---|---|---|---|---|
| **UFLPA Entity List** (DHS / FLETF) | Entities whose goods are presumed made with forced labour (US import bar) | Federal Register 2026-15628, 3 Aug 2026: +43 entities, **187 total** [E5] | US government work, public | Screening flag (official list). Listed entities **may be named**, since this is a public government determination, not a Sayari flag | T1 |
| **US DOL List of Goods** (ILAB, TVPRA) | Goods and countries with reason to believe child or forced labour is used | **204 goods, 82 countries, as of 5 Sept 2024** (biennial). No 2026 edition found [E4] | Public. DOL says it is "not intended to be punitive" | Country × good structural signal | T1 |
| **OECD DD Guidance for Responsible Supply Chains of Minerals** | Due-diligence framework | Named in Annex X(4)(f) [E1] | Public | Method reference only | T1 |
| **ILO forced-labour indicators** | 11 indicators | Not checked this pass | Public | Wording reference for LR-FL | — (to verify) |
| **IRMA** | Independent mine-site audits (Transparency / 50 / 75 / 100), valid 3 years [E6b] | Live list, retrieved 2026-10-05 [E6] | Public audit reports | Assurance for mines | T1 (as audit statement) |
| **RMI / RMAP** | Smelter and refiner conformance | Live facility lists [E7] | Public lists. Conformance covers DD *process*, not outcomes | Assurance for refiners | T1 (as statement) |
| **BHRRC Transition Minerals Tracker** | Allegations database: cobalt, copper, lithium, manganese, nickel, zinc; 250+ companies, 299 operations [E8] | Updated bi-annually; data download available | Public; cite allegations to the Resource Centre and the original source | Documented-harm leads (each needs its original source) | T2 |
| **Global Battery Alliance** | Battery Passport rulebooks: GHG, child labour, human rights, forced labour, Indigenous peoples' rights, biodiversity [E9] | Live publications page | Public | Benchmark for what a voluntary passport asks that the EU one doesn't | T2 |

**DOL entries relevant to this project** [E4]:

| Country | Good | Type | Chemistries touched |
|---|---|---|---|
| DRC | Cobalt ore (heterogenite) | Child labour, forced labour | NMC, Ni-H₂ |
| DRC | Copper ore | Child labour (since 2009) | All |
| China | Lithium-ion batteries; electrolytic copper products | Inputs produced with child labour (DRC copper) | NMC, LFP, LMFP |
| Indonesia | Nickel | Forced labour | NMC, Ni-H₂ |
| Zimbabwe | Lithium | Child labour | LFP, LMFP, NMC (if sourced) |
| **Zambia** | **Manganese** | **Child labour** | **LMFP, NMC (outside EU DD list)** |
| China | Aluminium | Forced labour (XUAR labour transfers) | All (foil, casings) |
| China | Polysilicon | Forced labour | Not a battery input; context only |
| — | Graphite | **Not listed** | — |

**UFLPA additions of 3 Aug 2026 relevant to batteries** [E5]. The FLETF's stated basis is sourcing from the XUAR (criterion 2(d)(2)(B)(v)):

| Entity | Activity (as stated in the notice) | Chemistries touched |
|---|---|---|
| SDIC Xinjiang Lithium Industry Co., Ltd. (subsidiary of SDIC Xinjiang Lop Nur Potash) | Produces lithium carbonate from Lop Nur salt-lake brine, XUAR | LFP, LMFP, NMC |
| Xinjiang Tianhongji Technology Co., Ltd. | Negative-electrode (anode) materials for lithium batteries; graphite and carbon products, using XUAR petroleum coke, anthracite and asphalt | LFP, LMFP, NMC, sodium-ion |
| Shihezi Xinren Battery Aluminum Foil Technology Co., Ltd. (Tianshan Aluminum group) | Aluminium foil | All Li-ion (cathode current collector) |
| TBEA Co., Ltd. | Sources aluminium and other materials from XUAR (per notice) | Grid equipment; check for any storage-chain link in B-09/B-11 |

These are named on an official US list. They are T1 screening flags, not documented harms. They're labelled "UFLPA Entity List (US DHS), screening result" per the CONCEPT commitments.

## 4. Assurance coverage by material

| Material | IRMA mine sites in system [E6] | RMI facility list [E7] | DOL / UFLPA signal | EU DD |
|---|---|---|---|---|
| Lithium | Fénix (AR, completed); Salar de Atacama, Novandino (CL, surveillance completed); Albemarle Salar Plant (CL, renewal in process); Greenbushes (AU, in process); Kamativi (ZW, in process); Sal de Oro (AR, self-assessment) | Lithium processors list | DOL: Zimbabwe CL. UFLPA: SDIC Lithium | Covered |
| Nickel | Barro Alto (BR, surveillance completed); **Harita Nickel, Obi Island (ID, in process)**; **Sorowako (ID, in process)**; PGM complexes (by-product) | Nickel processors list | DOL: Indonesia FL | Covered |
| Cobalt | **Tenke Fungurume (DRC, CMOC, in process)**; PGM by-product sites | Cobalt refiners list | DOL: DRC CL + FL | Covered |
| Graphite (natural) | Balama (MZ, Syrah, surveillance in process) | **None** | — | Covered |
| Graphite (synthetic) | n/a (not mined) | **None** | UFLPA: Xinjiang Tianhongji | Unclear |
| Copper | Los Bronces, Quellaveco (in process); by-product sites | Copper processors list | DOL: DRC CL; China Li-ion batteries (CL input) | Not covered |
| Manganese | **None** | **None** | DOL: Zambia CL | Not covered |
| Phosphate | **None** | **None** | — | Not covered |
| Vanadium | **None** | **None** | — | Not covered |
| Aluminium | — | — | DOL: China FL. UFLPA: Xinren battery foil, Tianshan Aluminum | Not covered |

"In process" means no published achievement level yet. Under the PLAN.md assurance enum, these score `none-known` for now, with the assessment noted.

**The pattern for the scorecard:** materials on the EU list have some voluntary assurance infrastructure, however partial. Materials off the list (manganese, phosphate, vanadium) have neither the legal duty nor an assurance scheme. And manganese already carries a US child-labour listing.

## 5. Decisions (2026-10-05)

1. **Taxonomy:** the revised codes in §2 are adopted. GEN is replaced by LR-DIS (with a gender note), and LR-TU is added. PLAN.md and SPECIFICATION.md are updated on the B-03 branch.
2. **Synthetic graphite:** EU due-diligence coverage is "Unclear" until a T1 source settles it.
3. **Official lists:** entities on official government lists (UFLPA, 1260H) are named, with the list, date and stated basis. The aggregate-only rule applies to database-derived (Sayari) flags.

## Sources

| Id | Source | Tier | Retrieved |
|---|---|---|---|
| E1 | Regulation (EU) 2023/1542, consolidated 02023R1542-20250731: Annex X; Art. 48(5). https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02023R1542-20250731 | T1 | 2026-10-05 |
| E2 | Regulation (EU) 2025/1561, recital 1. https://eur-lex.europa.eu/eli/reg/2025/1561/oj/eng | T1 | 2026-10-05 |
| E4 | US DOL ILAB, List of Goods Produced by Child Labor or Forced Labor (as of 5 Sept 2024), filtered views for cobalt, battery, nickel, lithium, manganese, aluminum, graphite. https://www.dol.gov/agencies/ilab/reports/child-labor/list-of-goods | T1 | 2026-10-05 |
| E5 | DHS, "Notice Regarding the Uyghur Forced Labor Prevention Act Entity List", Federal Register doc. 2026-15628, 3 Aug 2026. https://www.federalregister.gov/documents/2026/08/03/2026-15628/notice-regarding-the-uyghur-forced-labor-prevention-act-entity-list ; DHS press release 31 Jul 2026. https://www.dhs.gov/news/2026/07/31/dhs-announces-addition-43-companies-uflpa-entity-list | T1 | 2026-10-05 |
| E6 | IRMA, "Independently Assessing" mine list. https://responsiblemining.net/what-we-do/certification/mines-under-assessment/ | T1 (statement) | 2026-10-05 |
| E6b | IRMA, Assessment page (achievement levels; 3-year validity). https://responsiblemining.net/what-we-do/assessment | T1 | 2026-10-05 |
| E7 | RMI, Conformant/Active/Eligible by Metal. https://responsiblemineralsinitiative.org/facilities-lists/facilities-lists/indicators/responsible-minerals-assurance-process | T1 (statement) | 2026-10-05 |
| E8 | Business & Human Rights Resource Centre, Transition Minerals Tracker. https://www.business-humanrights.org/en/from-us/transition-minerals-tracker | T2 | 2026-10-05 |
| E9 | Global Battery Alliance, publications (Battery Passport rulebooks). https://www.globalbattery.org/publications/gba-battery-passport-human-rights-rulebook | T2 | 2026-10-05 |
