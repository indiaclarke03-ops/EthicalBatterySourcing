# Demo script (about 3 minutes)

*For India to present. Spoken lines are in quotes; actions are in brackets. Timings are cumulative. Open these tabs before you start:*

1. Scorecard: https://indiaclarke03-ops.github.io/EthicalBatterySourcing/scorecard.html
2. Claude Code, in the repo, with the MCP list ready (`/mcp`)
3. `research/lmfp.md` on GitHub (line 16 and the "Wording for the site" paragraph)
4. `data/supply-chain.json` on GitHub, searched for `lmfp-s1-hpmsm`
5. Supply chain (LMFP, gaps off): https://indiaclarke03-ops.github.io/EthicalBatterySourcing/supply-chain.html?chem=lmfp&node=lmfp-s1-hpmsm
6. Supply chain (Ni-H₂, ownership): https://indiaclarke03-ops.github.io/EthicalBatterySourcing/supply-chain.html?chem=ni-h2&own=1
7. Compare, gaps section: https://indiaclarke03-ops.github.io/EthicalBatterySourcing/compare.html#gaps

---

## 1. Where the risk sits (0:00–0:45)

[Tab 1: scorecard. Point at the four headline numbers.]

"From February 2027, every EV battery and every industrial battery above 2 kWh sold in the EU needs a digital passport. It has 71 data points, and not one records where the materials were mined or refined.

This is the Battery Passport Audit. Six chemistries across the top-to-bottom supply chain: ore, refining, active materials, cells, packs, deployment.

27 documented harms across these chains. 10 of them involve materials that EU due diligence doesn't cover at all, because the law only asks about cobalt, natural graphite, lithium and nickel."

[Point at the VRFB row: "EU DD: not covered" wherever a risk appears.]

"A vanadium flow battery looks clean on paper. Its passport's sourcing field would cover none of its inputs. Changing chemistry moves the risk; it doesn't remove it."

## 2. How it was built (0:45–1:15)

[Tab 2: Claude Code. Run `/mcp` or show the README tool table.]

"I built this in Claude Code with three tools: GitHub for the repo and site, Sayari for corporate registries and trade data, and Tavily for public sources and regulation text. Claude searched and drafted sourced research notes; every value on the site has to resolve to a cited source, and a validator enforces that before anything is published."

## 3. One Sayari finding, end to end (1:15–2:00)

[Tab 3: `research/lmfp.md`, line 16.]

"Here's one finding from note to site, from my Sayari work. My original research said 346 manganese-sulphate suppliers carried forced-labour flags. Re-running the Sayari trade search found 350 of 1,148. We also read what the flag actually means: mostly trade proximity to Xinjiang-linked or DOL-listed goods, not findings of forced labour."

[Tab 4: `data/supply-chain.json` at `lmfp-s1-hpmsm`. Point at `"aggregate": true` and the label.]

"So in the data it's an aggregate screening flag, 350 of 1,148, with no company named, labelled 'Screening result, not an allegation'. The validator fails the build if a database forced-labour flag ever names a supplier without public corroboration."

[Tab 5: the LMFP explorer with the HPMSM panel open; switch to the Ethical sourcing tab.]

"And on the site, it sits next to the documented harm from the peer-reviewed research, clearly marked as a different kind of signal. Manganese isn't on the due-diligence list, so the passport wouldn't ask about any of this."

## 4. The EnerVenue topology (2:00–2:30)

[Tab 6: Ni-H₂ with the ownership overlay. Trace the blue lines with the cursor.]

"Ownership matters too. EnerVenue's registry trail runs from a Cayman holding company, through a Singapore intermediate, to a wholly foreign-owned enterprise in Changzhou that is setting up its cell line. The Hong Kong link is shown as Low confidence because the registry doesn't confirm it. And the nickel source? Dashed: not traceable from public or licensed data."

## 5. The gaps (2:30–3:00)

[Tab 7: compare, gaps table. Then click "passport" for VRFB to show "Show gaps only".]

"Every chain has gaps, and the tool shows them instead of filling them. Across the board, very few nodes are confidently clear: most of what isn't documented harm is unknown, not safe.

The passport will tell you a battery's capacity and carbon footprint. It won't tell you who was harmed making it. This tool shows the difference."

---

*Fallback if the live site is slow: run `python3 -m http.server 8000` in the repo and use `localhost:8000` with the same paths.*
