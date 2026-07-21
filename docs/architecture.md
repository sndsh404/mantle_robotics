# Architecture

Mantle Robotics' marketing site is a static site: every route is prerendered at build time. There is no backend, database, or API — blog posts and all page content are TypeScript data.

## Rendering model

- Next.js 16 App Router, all routes static (`○` or SSG `●` in build output)
- Server components by default; client components only where state or browser APIs are needed: `PillNav` (scroll + active route), `FounderChat` (popup logic, sessionStorage), `BackToTop`, `TalkToFounders`, `Reveal` (IntersectionObserver)
- Shared chrome (`PillNav`, `SiteFooter`, `FounderChat`, `BackToTop`) renders once in `src/app/layout.tsx`

## Route map

| Route | Content |
|---|---|
| `/` | full pitch: hero, stats, problem, platform, products, trust, why-it-works, how-it-works, CTA |
| `/problem` `/platform` `/products` `/how-it-works` | deep-dive pages reusing the same section components, each ending with pager + CTA |
| `/blog`, `/blog/[slug]` | posts defined in `src/lib/blog.ts` (data, not CMS); slugs statically generated |
| `/legal` | stub |

## Design system

All tokens live in `src/app/globals.css`:

- **Palette** (`--pw-*`, kept from the original template naming): cream page bg, stone surface, ink text, ember orange accent, night for dark sections. Muted/faint text tones are tuned to hold WCAG AA on cream.
- **Fonts** (via `next/font/google` in `layout.tsx`): Newsreader (serif display), Manrope (sans body), JetBrains Mono (labels).
- **Utilities**: `graph-paper` / `blueprint-grid` / `peach-grid` textures, `grain` (dark-panel noise), `marquee` + `marquee-track` (CSS-only infinite scroll, hover pauses, intentionally ignores prefers-reduced-motion), `mono-label`, `corner-dots`, `fade-up` (paired with `Reveal`).
- **Icons**: all hand-drawn inline SVGs in `src/components/icons.tsx`, including the three-rhombus logomark. No icon-font or external logo assets.

## Conventions worth knowing

- Section components are one file each in `src/components/`, self-contained with their copy as local data arrays.
- The marquee renders its row twice (second copy `aria-hidden` + `select-none`) and translates −50% for a seamless loop.
- The founder popup auto-opens once per session, homepage only, when `#trust` enters the viewport; dismissal is sessionStorage-scoped.
