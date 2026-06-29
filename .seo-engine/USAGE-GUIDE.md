━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📖 SEO ENGINE — USAGE GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Type these into Claude Code. Or just describe what you want naturally.

─── WRITING ─────────────────────────────────────

"Write the next blog"
   → Picks top priority, runs SERP research, drafts, saves as human-review.

"Write a blog about [topic]"
   → Checks for cannibalization first, then writes.

"Write a comparison: [Project] vs [Competitor]"
   → Uses competitor data from competitors.yaml.

"Write the pillar page for [cluster]"
   → Comprehensive pillar for a topic cluster.

"Approve blog [slug]"
   → Marks as published after your review.

"Blog [slug] needs changes: [feedback]"
   → Revises and keeps in review.

─── SERP RESEARCH ───────────────────────────────

Before every blog, Claude Code needs real SERP data from Google.
It will NOT use its own web search — that gives generic results.

IF dedicated SEO MCP tool connected (Semrush, Ahrefs) → uses that.

OTHERWISE → Claude Code asks YOU to search Google and provide:
   1. Top 3-5 ranking page titles + URLs
   2. People Also Ask questions
   3. Related searches from bottom of Google
   4. Related keywords from your SEO tools (optional)

This ensures blogs are written against real competition, not guesses.

─── NEW DOCS & FEATURES ─────────────────────────

"Scan new docs at [path]"
"New feature: [name] at [doc path]"

─── COMPETITORS ─────────────────────────────────

"Update competitor: [name] now supports [feature]"
"[Competitor] raised pricing. Update."

─── KEYWORDS ────────────────────────────────────

"Import keywords: [paste data]"
"Pull keywords via MCP for [topic]"

─── TOPIC CLUSTERS ──────────────────────────────

"Show topic cluster status"
"Create cluster for [topic]"
"What cluster pages to write next?"

─── AUDITS ──────────────────────────────────────

"Run a content audit"
"Check keyword cannibalization"
"What should I write next?"
"Which blogs need updating?"

─── CONFIG ──────────────────────────────────────

Edit .seo-engine/config.yaml anytime to change:
- Author info, trust signals, testimonials
- CTA text/URL, word count limits
- Add/remove competitors
- Change publishing cadence

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
