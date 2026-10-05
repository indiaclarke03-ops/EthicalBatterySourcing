# Passport with Gaps

An ethical-sourcing audit of the EU battery passport. Illustrative passports for six battery chemistries trace each supply chain from mine to deployment, and show where human-rights, labour, community and environmental risks sit, how much of each can be verified, and what the passport and EU due diligence would and wouldn't reveal.

**Live site:** https://indiaclarke03-ops.github.io/EthicalBatterySourcing/

> **Illustrative.** These are mock passports built from public and licensed research. They are not real product passports and make no statement about any company's compliance. Not legal or investment advice.

Project documents: `CONCEPT-IDEA_1.md`, `PLAN.md`, `SPECIFICATION.md`, `BACKLOG.md`.

Built by India Clarke with Claude Code, using Sayari and Tavily for research. See the methods page for the AI-use disclosure.

## Tool setup

Research and build are done in **Claude Code** with three tools:

| Tool | How it's connected | Test call (2026-10-05) |
|---|---|---|
| GitHub | `gh` CLI, authenticated as the repo owner | Repo created, Pages enabled from `main` |
| Sayari | claude.ai connector | `search_entities("EnerVenue")` returned 17 entities, including the Cayman holdco and the Changzhou entity |
| Tavily | MCP server (local; the claude.ai connector was rate-limited) | EUR-Lex search returned Regulation (EU) 2025/1561 |

No keys or MCP configuration are stored in this repo. PitchBook is not connected (see `research/permissions.md`).
