# burn.dev — Design Language Extraction (July 2026)

Framework: Astro. Fonts: **Satoshi** (body/headings, weights 400/700/800), **JetBrains Mono Variable** (100–800, accent/technical copy).

## Core tokens (computed)
- Body bg: `rgb(13, 17, 23)` (#0D1117)
- Foreground: `rgb(250, 250, 250)`
- Bright fg (nav/headings): `rgb(246, 247, 251)`
- Muted text: `rgb(141, 148, 157)` (#8D949D)
- Surface (nav pill): `rgba(30, 33, 42, 0.6)` (#1E212A @ 60%)
- Hairline border: white @ 10% (`0.666667px solid oklab(~1 / 0.1)`)
- Accent orange: `rgba(242, 97, 43, x)` (#F2612B) — mascot illustrations + radial glows
- Indigo accent: `rgba(88, 101, 242, 0.1)` glow (Discord-indigo #5865F2); indigo/blue card `rgb(43?, ...)` — deep indigo panel (#2b2fa8-ish) with orange line-art isometric illustration

## Signature elements
1. **Floating pill nav** — `position: fixed; top: 10px`, centered, `max-width: 1200px`, `height: 70px`, `padding: 20px 30px`, `border-radius: 100px`, bg `rgba(30,33,42,0.6)`, hairline white/10 border, shadow `rgba(88,101,242,0.1) 0 10px 15px 3px`. Links: Satoshi 14px/700, color #F6F7FB, padding 4px 12px, radius 5px. Logo left, links center, icon circles right (36px round, colored: white GitHub, indigo Discord, green).
2. **Hero** — section `min-h 380px / max-h 70vh`, full-bleed `<img>` bg (1024×1024 webp gradient-streak art) with `object-cover brightness-[0.6]`, content centered. Eyebrow: Satoshi 24px/700 `rgb(141,148,157)`. Headline: Satoshi 48px/800, line-height 60px, centered, #FAFAFA.
3. **Cards** — `border-radius: 20px`, hairline white/10 border, transparent/near-transparent bg, `padding: 80px 64px`, gap 32px, **massive layered black shadow stack**: `0 21px 45px rgba(0,0,0,.29), 0 83px 83px rgba(0,0,0,.25), 0 186px 111px rgba(0,0,0,.15), 0 330px 132px rgba(0,0,0,.04), 0 516px 145px rgba(0,0,0,.01)`.
4. **Radial glow section (use-cases)** — `border-radius: 20px; padding: 80px;` bg: `radial-gradient(80% 107.77% at 50% -20%, rgba(242,97,43,0.8) 30%, rgba(30,33,42,0) 100%)` — orange dome glow from top center.
5. **Mono accent copy** — JetBrains Mono paragraphs next to Satoshi headings ("We believe in maximizing compute…"), muted color.
6. **Content sections** container max-width ~1500px, section gap 32–80px, two-column split cards (text card + illustration card).

## Typography scale
- h2/h3 section: 28px / 700–800, line-height 50px
- Card h3: 20px/700, lh 28px
- Body: 16px/400, lh 24px, muted #8D949D
- Eyebrow: 24px/700 muted
- Hero h1: 48px/800 lh 60px
- Nav links: 14px/700

## Topology (order)
1. Fixed pill nav (overlay)
2. `#welcome` hero (image bg, eyebrow + big headline) — 402px tall
3. `#about` — 2 cards side by side (max-w 1500, gap 32): text card + indigo illustration card
4. `#features` "Core Principles" — 3-col header row (title / statement / mono copy) + rows: Blazingly Fast, Flexible, Portable
5. `#use-cases` — orange radial glow rounded panel: "The Next-Generation AI Infrastructure", benefit cards (Increased Developer Productivity → More Iterations → Better Results)
6. `#demo` — interactive WASM MNIST demo (skip for pixelworld)
7. `#about-rust` "Built with Rust" — tech explainer
8. Footer

## Behaviors
- Nav is fixed and floats over content while scrolling (always visible, pill form).
- Page has WASM/heavy interactive demo mid-page (caused renderer freezes during extraction).
- Hover on nav links: subtle (padding/radius 5px suggests bg tint hover).
- No smooth-scroll library detected (`scrollBehavior: auto`, no .lenis).

## Assets
- Hero bg: https://burn.dev/_astro/hero.Dlc4Icyh_2hf4VH.webp (1024×1024 gradient streak, red/orange→blue)
- Orange flame mascot line-art illustrations on indigo panels (isometric boxes scene)
