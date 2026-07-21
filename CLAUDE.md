@AGENTS.md

## Conventions (mirrored in README.md — keep the two in sync)

### Commit messages
Short lowercase titles, a few words, no descriptions, no footers (e.g. "fix stat labels").

### Branch flow
Work directly on main is fine for now. Railway auto-deploys from main, so `npm run build` must pass locally before every push.

### Design rules
- One orange accent (`--pw-ember`), reserved for interactive elements and key stats
- No decorative pill outlines; no glow/bloom effects (flat surfaces, subtle grain)
- Labels are mono uppercase; body copy is plain language with no em dashes

## gstack

Use the `/browse` skill from gstack for all web browsing.

Available skills: `/qa`, `/qa-only`, `/review`, `/design-review`, `/design-consultation`, `/plan-ceo-review`, `/retro`, `/ship`, `/investigate`, `/health`, `/landing-report`.
