# Mantle Robotics

Concept demo: the debugging platform for robot fleets.

## Tech stack

| Tool | Version | Notes |
|---|---|---|
| Next.js | 16.2.1 | App Router, static prerender for all routes |
| React | 19.2.4 | |
| TypeScript | ^5 | strict mode, no `any` |
| Tailwind CSS | ^4 | design tokens in `src/app/globals.css` |
| shadcn/ui | ^4.1.0 | only `Button` primitive in use |
| Lucide React | ^1.6.0 | mostly replaced by hand-drawn SVGs in `src/components/icons.tsx` |
| playwright-core | ^1.61.1 | dev-only, drives QA screenshot scripts |

Fonts (via `next/font/google`): Newsreader (serif display), Manrope (sans), JetBrains Mono (labels).

**Node.js 24+ required** (`.nvmrc` and `engines` both say 24). Older versions may work but are not supported.

## Local setup

```bash
git clone https://github.com/aamodpaudel/mantle_robotics.git
cd mantle_robotics
node -v   # must be 24+ — install from https://nodejs.org if not
npm install
npm run dev
```

Open http://localhost:3000.

Windows note: run these in Git Bash (bundled with [Git for Windows](https://gitforwindows.org/)) rather than cmd/PowerShell for the smoothest experience; if you download the repo as an archive instead of cloning, extract it with `tar -xf` from a terminal.

## Environment variables

**No env vars are required to run locally.** The app reads nothing from `process.env`.

If that changes:

1. Document the new variable in `.env.example` with a placeholder value.
2. Copy `.env.example` to `.env.local` and fill in real values.
3. Never commit `.env*` files — `.gitignore` already covers them.

## Project structure

```
src/
  app/
    page.tsx            # homepage (full pitch, all sections)
    problem/            # /problem deep-dive
    platform/           # /platform (flywheel + why it works)
    products/           # /products (product grid + trust marquee)
    how-it-works/       # /how-it-works (steps + dashboard mock)
    blog/               # /blog index
    blog/[slug]/        # blog posts (statically generated)
    legal/              # /legal stub
    layout.tsx          # fonts, metadata, nav + footer + chat + back-to-top
    globals.css         # design tokens, utilities (graph-paper, marquee, grain)
    icon.svg            # favicon (three-rhombus mark)
  components/           # one file per section + shared pieces
    icons.tsx           # logomark + all hand-drawn SVG icons
    PillNav.tsx         # fixed nav (client: scroll state + active route)
    SiteFooter.tsx      # footer incl. compliance seal badges
    FounderChat.tsx     # chat bubble + auto-open popup (homepage only)
    Reveal.tsx          # scroll-reveal wrapper (IntersectionObserver)
  lib/
    blog.ts             # blog posts are defined here (data, not CMS)
    utils.ts            # cn() helper
  types/                # shared TS interfaces
public/                 # og.png, robots-facing static assets
scripts/                # qa-screenshots.mjs, make-og.mjs (playwright helpers)
docs/research/          # design-language notes and component specs (history)
```

## Scripts

| Command | What it does | When to run it |
|---|---|---|
| `npm run dev` | Start the dev server on :3000 | day-to-day development |
| `npm run build` | Production build (must pass before any push) | before every push |
| `npm run start` | Serve the production build locally | verifying what a host would serve |
| `npm run lint` | ESLint | before a push, or in CI |
| `npm run typecheck` | `tsc --noEmit` | quick correctness check |
| `npm run check` | lint + typecheck + build in one go | final pre-push gate |

Utility scripts (not in `package.json`): `node scripts/qa-screenshots.mjs` captures full-page desktop/mobile screenshots; `node scripts/make-og.mjs` regenerates `public/og.png`. Both need the dev server running and a local Chrome install.

## Conventions

These mirror `CLAUDE.md` — if you change one, change both.

- **Commit messages:** short lowercase titles, a few words, no descriptions, no footers. Example: `fix stat labels`.
- **Branch flow:** working directly on `main` is fine for now. Run `npm run build` locally before every push — a broken push is a broken deploy.
- **Design rules:** one orange accent (`--pw-ember`) reserved for interactive elements and key stats; no decorative pill outlines; no glow/bloom effects (flat surfaces + subtle grain); labels are mono uppercase; body copy is plain language with no em dashes.

## Deployment

The `Dockerfile` and Railway-specific cache-mount ids were carried over from the template this site was built from — see [docs/deployment.md](docs/deployment.md) before wiring up a host. If you're not deploying to Railway, the cache-mount `id=s/...` values in the Dockerfile can be simplified.

## Docs

| Doc | Contents |
|---|---|
| [docs/architecture.md](docs/architecture.md) | rendering model, route map, design system, conventions |
| [docs/deployment.md](docs/deployment.md) | Railway pipeline, the Dockerfile cache-mount fix, local prod parity |
| [docs/roadmap.md](docs/roadmap.md) | the startup plan behind the demo (phases, revenue sequencing) |
| [docs/research/](docs/research/) | design-language notes and component specs from the original build |

## Notes

Concept demo. Companies and testimonials shown on the site are illustrative. MIT license retained from the original template this repo was scaffolded from.
