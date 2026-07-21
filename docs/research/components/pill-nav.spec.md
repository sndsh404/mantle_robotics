# PillNav Specification

## Overview
- **Target file:** `src/components/PillNav.tsx` (client component — scroll listener)
- **Source:** burn.dev floating pill nav, recolored for pixelworld
- **Interaction model:** scroll-driven (bg strengthens past 50px) + hover

## DOM Structure
`<header>` fixed wrapper → `<nav>` pill → left logo link / center link row / right CTA chip.

## Computed styles
### Nav pill
- position: fixed; top: 10px; left/right: 0 with mx-auto; z-index: 50
- width: calc(100% - 32px); max-width: 1200px; height: 64px
- padding: 0 24px (flex items-center justify-between)
- background: rgba(24, 26, 32, 0.55); at scrollY > 50 → rgba(24, 26, 32, 0.85)
- backdrop-filter: blur(12px)
- border-radius: 100px
- border: 1px solid rgba(255,255,255,0.10)
- box-shadow: 0 10px 15px 3px rgba(242, 97, 43, 0.08) (ember glow, burn used indigo)
- transition: background-color 0.3s ease, box-shadow 0.3s ease

### Logo (left)
- `LogoIcon` (from `@/components/icons`) size-6 text-[#FAF9F5] + wordmark "pixelworld" — font-sans (Manrope) 18px weight 800, lowercase, color #FAF9F5, tracking-tight

### Links (center, hidden on mobile → hamburger not required; hide under md)
- font-mono (JetBrains) 12px, weight 500, uppercase, letter-spacing 0.08em
- color rgba(250,250,250,0.85); padding 6px 12px; border-radius 5px
- hover: background rgba(255,255,255,0.08), color #fff; transition 0.2s
- Links: PROBLEM `#problem`, PLATFORM `#platform`, PRODUCTS `#products`, DEADLINE `#deadline`, ROADMAP `#roadmap`

### CTA chip (right)
- mono 12px uppercase, bg var(--pw-ember) #F2612B, color #FAF9F5
- padding 10px 18px, border-radius 100px, font-weight 700
- hover: brightness(1.08) + translateY(-1px), transition 0.2s
- Text: `GET STARTED` → href `#cta`

## Responsive
- Desktop: full pill w/ centered links
- Mobile (<768px): hide center links (`hidden md:flex`), keep logo + CTA chip
