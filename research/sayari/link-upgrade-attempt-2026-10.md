# Sayari link-upgrade attempt (2026-10-05)

*Goal: use Sayari trade records to upgrade Low ("customers not named") supply links added in the October expansion. Result: **no link upgraded.** Every candidate failed the artefact / name-match check, so the links stay Low.*

| Link tried | Query | What came back | Verdict |
|---|---|---|---|
| BTR (anode) → cell makers | Buyers of "anode graphite", shipper name "BTR", departing Indonesia, from Jun 2024 | 5 buyers: DHL Express (Singapore), Up-Riser International Trading (PHL), Eastern Electrodes & Coke (IND), Sky Alloys International (SGP), Jiangxi Zichen. HS 3801.90 (graphite blocks/semi-manufactures), not anode material | **Name collision:** the short string "BTR" matches unrelated shippers; goods don't match anode active material. Fails. |
| DRC cobalt (CMOC, Glencore) → refiners | Buyers of "cobalt hydroxide" departing DRC, from Jan 2024 | 111 buyers, dominated by Tanzanian receivers (109) | **Transit routing:** export records show the Dar es Salaam forwarding leg, not the end buyer. Cannot identify refiners. |
| CALB → integrators | Buyers of "battery", shipper "CALB", from Jan 2025 | 411,818 matches across every country | **Name noise:** "CALB" is too short to filter. Fails. |
| Hithium → integrators | Entity search, then US buyers of HS 8507.60 with shipper "Xiamen Hithium Energy Storage Technology Co" | Hithium fragmented across 11 records (registry entity 厦门海辰储能科技股份有限公司, USCC 91350200MA33GULG91, plus unresolved trade-name records). Buyer list included BYD America LLC (imports BYD's own cells). Pair-level shipment checks for two named receivers returned unrelated forwarders (Maersk Logistics, Decoluso, Ningbo Apex) | **Filter not applied / fragmented entity:** the name filters did not constrain results, so no pair could be confirmed. Fails. |

**Method note for `methods.html`:** trade-data name filters are only usable when results are re-checked pair by pair; a buyer list alone is not evidence of a supply link. This matches the existing rule that name matches are never enough on their own.
