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

## Expansion: named companies (2026-10-05)

NMC stays a lighter reference passport, but its upstream was country-level only. These are the largest named players, added where grade-A/B sources support them. All checked against the full UFLPA Entity List (3 Aug 2026) and Section 1260H list (10 Jun 2026) texts, including aliases (China Molybdenum, Luoyang, Zhejiang Huayou, Congo Dongfang, Kamoto, Mutanda): none listed.

| Tier | Company | What the sources support | Sources | Confidence |
|---|---|---|---|---|
| T5 cobalt | CMOC (Tenke Fungurume, Kisanfu; DRC) | Reuters: "top producer" of cobalt; largest DRC export-quota allocations (6,650 t Q4 2025; 31,920 t 2026) | N2 (B) | Medium |
| T5 cobalt | Glencore (Kamoto Copper Co., Mutanda; DRC) | Reuters: "world's second-largest cobalt producer"; quotas 3,925 t and 18,840 t | N2 (B) | Medium |
| T4 refining | Huayou Cobalt | 2025 annual report: Huayue and Huafei HPAL plants in Indonesia shipped 235,000 t MHP in 2025; owns Congo Dongfang Mining (DRC) | N3 (A, statement), N5 (B) | High |
| T3 cathode | Ronbay | Supplied > 80 kt high-nickel (≥80%) cathode to CATL in 2025; 4th in ternary cathode shipments | L14 (B) | Medium |
| T3 cathode | Reshine | #1 ternary cathode shipper in 2025, 177 kt | L14 (B) | Medium |
| T2 cells | LG Energy Solution | 9.2% of global EV battery use in 2025, #3 | L16 (B) | Medium |

**Documented harm**
- **Huayou (LR-CL):** Amnesty International and Afrewatch documented (2016) that traders bought cobalt from areas where child labour is rife and sold it to Congo Dongfang Mining, Huayou's wholly owned subsidiary (87 current and former miners interviewed, 17 of them children). Single investigation, past-tense claim → Medium.
- **Glencore (HR, corruption):** Glencore International AG pleaded guilty in the US (May 2022) to bribery schemes over a decade in several countries including the DRC; it agreed to pay about $1.1bn to the DOJ, and was separately fined £280m by the UK Serious Fraud Office. DOJ case record (A) and Reuters (B) → High.

**Structural (CMOC):** industrial copper-cobalt mines in Lualaba; child labour in artisanal cobalt mining is documented in the region (US DOL). No source in these notes ties child labour to CMOC's concessions → structural, Medium.

**No links drawn** from CMOC or Glencore to named buyers: no grade-A/B source traces their cobalt to a specific refiner, so the nodes stand alone rather than imply a sale.

**Not added:** Tsingshan (named in Indonesia nickel reporting, but the existing Indonesia nickel node already carries the IMIP harms; an entity node needs its own scale source); cathode-to-cell links for Reshine and LGES (customers not named in A/B sources).



| Id | Source | Tier | Retrieved |
|---|---|---|---|
| N1 | USGS, *Mineral Commodity Summaries 2026*: Cobalt; Lithium. https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-cobalt.pdf | T1 | 2026-10-05 |
| L1 | IEA, *Global Critical Minerals Outlook 2025* (see `lfp.md`) | T2 | 2026-10-05 |
| N2 | Reuters, "Congo's cobalt producers still waiting for export approvals, sources say" (24 Oct 2025). https://www.reuters.com/world/africa/congos-cobalt-producers-still-waiting-export-approvals-sources-say-2025-10-24 | T2 | 2026-10-05 |
| N3 | Zhejiang Huayou Cobalt, 2025 Annual Report. https://www.huayou.com/Public/Uploads/uploadfile2/files/20260407/2025AnnualReportofHuayouCobalt.pdf | T1 (statement) | 2026-10-05 |
| N4 | US DOJ Criminal Division, *United States v. Glencore International AG* (22-CR-297, SDNY; 22-CR-71, D. Conn.; unsealed 24 May 2022). https://www.justice.gov/criminal-fraud/united-states-v-glencore-international-ag ; Reuters (8 Dec 2023, 28 Feb 2023) | T1 / T2 | 2026-10-05 |
| N5 | Amnesty International and Afrewatch, *This is what we die for* (Jan 2016), see `harm-evidence.md` | T2 | 2026-10-05 |
| L14, L16 | SNE Research cathode release; CnEVPost / SNE 2025 EV battery ranking (see `lfp.md`) | T2 | 2026-10-05 |
