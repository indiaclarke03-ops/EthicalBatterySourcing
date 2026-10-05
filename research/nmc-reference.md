# NMC reference baseline (B-14)

*As of 2026-10-05 · Lighter reference passport, counted among the six (decision 2026-10-05) · Status: for India's review*

**Purpose:** the cobalt/nickel harm baseline that the other chemistries are compared against. It uses country and share nodes only (S0–S3), with no case company.

**Passport depth:** reference (`tier_of_depth: "reference"`). **Use case:** EV, **in scope** (High).

## Country/share nodes

| Stage | Node | Claim | Src | Tier | Conf |
|---|---|---|---|---|---|
| S0 | Cobalt mining | **DRC 73%**, Indonesia 14% of 2025 world mine output (310,000 t). DRC replaced its Feb 2025 export ban with quotas: up to **96,600 t/yr in 2026–27** | USGS MCS 2026, Cobalt (N1) | T1 | High |
| S0 | Nickel mining | Indonesia ≈60% of mined supply; ≈45% of processing (2024) | IEA GCMO 2025 (L1) | T2 | Medium |
| S0 | Lithium mining | 2025: Australia 92 kt, China 62 kt, Chile 56 kt, Zimbabwe 28 kt, Argentina 23 kt (world ≈290 kt) | USGS MCS 2026, Lithium (N1) | T1 | High |
| S0 | Manganese, graphite | As `lmfp.md` and `lfp.md` | — | — | — |
| S1 | Refining | China processed 70–95% of lithium, cobalt, phosphate and graphite (2024); China is the leading producer of refined cobalt | IEA (L1); USGS (N1) | T2/T1 | High |
| S2 | Cathode (Ni-based) | China ≈ two-thirds of nickel-based cathode material (2024) | IEA (L1) | T2 | Medium |
| S2 | Anode | China > 90% | IEA (L1) | T2 | High |
| S3 | Cells | China ≈80% of global battery cells (2024) | IEA (L1) | T2 | Medium |

## Ethical-sourcing baseline (from `harm-evidence.md`)

| Input | Strongest documented harm | Signal | EU DD | Conf |
|---|---|---|---|---|
| Cobalt (DRC) | Child labour and forced-labour indicators in artisanal mining (DOL; Amnesty 2016); forced evictions for industrial expansion (Amnesty/IBGDH 2023) | Documented harm | **Covered** | High |
| Nickel (Indonesia) | Forced labour (DOL); community, Indigenous and environmental harms (CRI 2024–25); tailings failures and deaths (Earthworks 2026) | Documented harm | **Covered** | High |
| Lithium | Atacama water and Indigenous rights; Zimbabwe child labour; Xinjiang processing; Yichun thallium pollution (2022) | Documented harm | **Covered** | High |
| Graphite | Heilongjiang pollution (historical); UFLPA-listed anode makers | Documented harm / screening flag | Natural covered · synthetic unclear | High / Medium |
| Manganese (in NMC) | Kalahari miners and communities; Zambia child labour; China pollution | Documented harm | **Not covered** | High |
| Copper, aluminium | DOL child-labour input; Xinjiang aluminium | Documented harm | **Not covered** | High |

**Why NMC is the baseline:** it's the chemistry the EU due-diligence list was written around. Its two highest-harm inputs, cobalt and nickel, are both **covered**, and both have RMI lists and some IRMA sites. Every other chemistry in this project is compared against that: how much of *its* documented harm falls outside the list?

## Sources

| Id | Source | Tier | Retrieved |
|---|---|---|---|
| N1 | USGS, *Mineral Commodity Summaries 2026*: Cobalt; Lithium. https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-cobalt.pdf | T1 | 2026-10-05 |
| L1 | IEA, *Global Critical Minerals Outlook 2025* (see `lfp.md`) | T2 | 2026-10-05 |
