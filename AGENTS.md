<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Mantle Robotics — agent instructions

Concept demo marketing site: the debugging platform for robot fleets. Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS v4.

Read `README.md` for setup and scripts, and `docs/` for architecture, deployment, and roadmap.

## Commands
- `npm run dev` — dev server on :3000
- `npm run check` — lint + typecheck + build (run before every push; Railway auto-deploys from main)

## Code style
- TypeScript strict, no `any`; named exports; PascalCase components
- Tailwind utility classes; inline styles only for dynamic values
- 2-space indentation; mobile-first responsive

## Design rules
- One orange accent (`--pw-ember`), reserved for interactive elements and key stats
- No decorative pill outlines; no glow/bloom effects (flat surfaces, subtle grain)
- Labels are mono uppercase (`.mono-label`); body copy is plain language with no em dashes
- Muted text must hold WCAG AA contrast: light sections use `--pw-ink-muted`/`--pw-ink-faint`, dark sections use white at 60%+ opacity

## Commit messages
Short lowercase titles, a few words, no descriptions, no footers (e.g. "fix stat labels").
