# pixelworld — Design Blend Plan

**Brand:** pixelworld — "The Reliability Layer." A robot failure-data & insurance-data company (content from The-Reliability-Layer-v0.2 docx).
**Blend:** tutorintelligence's editorial serif×mono industrial voice + extend.ai's technical-drawing chrome & isometric 3D depth + burn.dev's dark glow moments.

## Global decisions

### Base mode: light, cream, technical
- Page bg: warm cream `#E9E6E0` (extend); surface cards `#FAF9F5` stone-50, radius 4–8px
- Ink `#20201F`, muted `#727272`, hairline `rgba(32,32,32,0.12)`
- **Hairline column rules** running full page height + corner registration dots + rotated `( FIG. 01 )` margin annotations (extend)
- Graph-paper grid texture on hero + themed panels (tutor + extend)

### Dark moments (burn)
- Floating dark pill nav: fixed top 10px, centered, max-w 1200, h 64–70px, radius 100px, bg `rgba(24,26,32,0.75)` + blur, hairline white/10 border, soft glow shadow
- Dark "moat/flywheel" section + final CTA panel with burn's radial glow: `radial-gradient(80% 108% at 50% -20%, rgba(242,97,43,0.8) 30%, rgba(30,33,42,0) 100%)` on near-black rounded-20 panel
- Dark footer (black, mono, column rules continue)
- Inverted (black) first stat card in stat rows (extend)

### Accents
- Primary orange `#F2612B` (burn flame ↔ extend peach — the bridge color)
- Royal blue `#002FD3` (tutor) — EU/legal themed section, serif display + body all-blue
- Blueprint-blue grid panels `#D9E6F8` w/ white grid lines; warm peach panels `#FBE8D4` (extend)
- Yellow `#F5C842` / green `#1AA043` rect CTAs with mono uppercase labels (tutor) — used sparingly

### Typography
- Display serif: **Newsreader** (Google, opsz + weight 300, tight tracking −0.03em) → Sentient stand-in. Hero 64px/1.0
- Sans body: **Manrope** (tutor) 16px, muted
- Mono: **JetBrains Mono** (burn) for nav links, bracket labels `[01]`, buttons, stat captions — uppercase 11–13px, ls 0.78px
- Two-tone display headlines: first sentence ink, second sentence `#9A968E` (extend)

### The 3D quality (user's extend.ai ask)
1. **Exploded isometric layer stack** as the hero visual — CSS-built: 3–4 translucent glass plates (rgba white/blue fills, hairline edges, backdrop blur) stacked with `transform: rotateX(55deg) rotateZ(-45deg) translateZ(n)`, floating brand plate on top, solid base. Literal picture of "the reliability layer." Hover: layers separate (translateZ grows).
2. **Depth-layered floating cards** in the pool section — mini telemetry cards at different scales/opacity w/ tooltips ("stoppage · 14:02", "human intervention · aisle 9").
3. **Soft warm shadow elevation** everywhere; blueprint/peach grid panels behind every illustration.
4. Subtle scroll fade-up reveals (IntersectionObserver, translateY 16px→0, opacity, 0.5s ease, stagger 80ms).

## Page topology (order, interaction model)

1. **PillNav** (fixed overlay, scroll: gains stronger bg opacity past 50px) — logo `pixelworld◆`, links: Problem / Platform / Products / Roadmap / Moat, right: GET STARTED chip (orange)
2. **Hero** (static + hover on stack) — graph-paper cream panel, mono badge `RRT STANDARD v0.1 — OPEN`, serif H1 "The reliability layer for the robot economy", sub, 2 CTAs (black rect mono "BECOME A DESIGN PARTNER →", outlined "READ THE STANDARD"), isometric layer stack right
3. **StatStrip** (static) — bordered cells + corner dots, mono label "TRACKING THE ROBOT ECONOMY — JULY 2026": $38B market / 41,000 logistics robots / 90K→1.2M humanoids by 2030 / DEC 9 2026 EU deadline
4. **Problem** (`[01] THE PROBLEM`) — two-tone display "Robots are being deployed faster than anyone can price their risk. Insurers are responding by walking away." + inverted stat cards: 95% LAB SUCCESS (black) / 60% DEPLOYED / 99.9% NEEDED; copy on AI exclusions, no-data→no-insurance chain; pull-quote "Robots that cannot be insured will not scale."
5. **Platform** (`[02] WHAT WE BUILD`) — three numbered rows, alternating blueprint-blue/peach isometric panels: /standard (RRT schema, ROS 2 + MCAP), /pool (contribute-to-access, anonymized, aviation-style non-punitive; floating telemetry cards), /products (built on the pool)
6. **Products grid** (`[03] WHO PAYS`) — 5 stone-50 cards w/ mono price-shape captions: EU Evidence Vault (YEAR 0–1), Pre-Launch Risk Reviews (YEAR 0–1), Reliability Certificate (YEAR 1–2), Pooled Data License (YEAR 2+), Claim Investigation (YEAR 2+). One rule callout: "We never carry insurance risk on our own books."
7. **EUDeadline** (blue themed, tutor) — thin blue rule top, serif display in #002FD3 "From December 9, 2026, software and AI count as products.", PLD facts, countdown-style mono date, blue body text
8. **Moat** (dark, burn) — near-black rounded-20 panel, orange radial glow, JetBrains mono accents: "The pool cannot be back-filled." 4 moat points (data compounding, neutrality, standards winner-take-most, regulation lock-in) + Verisk/aviation precedent line
9. **Roadmap** (`[04] THE PLAN`) — 4 phase cards on graph paper, mono `PHASE 0 — MONTHS 0–6` etc.: Reference voice / Design partners / Pool goes live / Filed rating rule
10. **CTAPanel** (dark + orange glow, burn) — "Send us one month of failure logs. Get a free benchmark." black rect CTA + outlined; mono footnote "15 interviews. 3 operators. 30 days."
11. **Footer** (black) — column rules, pixelworld logo, columns (Platform/Products/Company/Legal), mono copyright `© 2026 PIXELWORLD. ALL RIGHTS RESERVED.`

## Component → source attribution
| Element | Source |
|---|---|
| Floating pill nav | burn.dev |
| Serif display + mono labels | tutorintelligence |
| Cream bg, column rules, corner dots, FIG annotations | extend.ai |
| Isometric layer stack, blueprint/peach panels | extend.ai |
| Inverted stat cards, two-tone headlines | extend.ai |
| Colored rect CTAs w/ mono labels | tutorintelligence |
| Blue themed section | tutorintelligence |
| Orange radial glow dark panels, layered shadows | burn.dev |
| JetBrains Mono | burn.dev |

## Voice
Plain-language, confident, concrete — mirrors the doc ("Robots that cannot be insured will not scale", "We sell the data and the trust", "The scorekeeper both sides need").
