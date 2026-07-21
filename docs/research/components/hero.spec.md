# HeroSection + LayerStack Specification

## Overview
- **Target files:** `src/components/HeroSection.tsx`, `src/components/LayerStack.tsx`
- **Sources:** tutor graph-paper hero + serif display; extend isometric 3D stack + technical chrome; ember accent
- **Interaction model:** static + hover (stack layers separate on hover)

## HeroSection
Full-width section, `pt-[120px] pb-16` (clears fixed nav), bg `bg-cream graph-paper`.
Inner: max-w-[1200px] mx-auto px-6, grid `lg:grid-cols-[1.1fr_0.9fr]` gap-12 items-center. Left column:

1. Badge chip: inline-flex items-center gap-2, `mono-label` (11px JetBrains uppercase), border 1px solid ink/20, rounded-full, px-3 py-1.5, bg surface/60. Orange dot (size-1.5 rounded-full bg-ember) + `RRT SCHEMA V0.1 — OPEN STANDARD`
2. H1: font-serif (Newsreader) font-light, text-[clamp(44px,6vw,68px)] leading-[1.02] tracking-[-0.03em] text-ink. Text: **"The reliability layer for the robot economy."**
3. Sub: font-sans 17px leading-relaxed text-ink-muted max-w-[52ch] mt-6. Text: "Robots that cannot be insured will not scale. pixelworld pools real-world robot failure data — so insurers can price risk, operators can prove reliability, and robots can go to work."
4. CTA row mt-8, flex gap-3 flex-wrap:
   - Primary: bg-ink text-[#FAF9F5], mono 12px uppercase ls 0.08em, px-5 py-3.5, rounded-[4px], hover bg-ember transition-colors 0.25s. Text `BECOME A DESIGN PARTNER` + ArrowRightIcon
   - Secondary: border 1px ink/25, text-ink, same mono/pad/radius, hover border-ink bg-surface. Text `READ THE STANDARD` + ArrowUpRightIcon
5. Mono microline mt-10 text-ink-faint 11px: `( THE SCOREKEEPER BOTH SIDES NEED )`

Right column: `LayerStack` inside blueprint panel:
- Panel: relative, blueprint-grid class, rounded-lg, aspect-[4/4.4] w-full, corner-dots (+ inner `<div className="corner-dots-b" />`), overflow-hidden, shadow-soft
- Rotated annotation right edge: absolute right-2 top-1/2, mono-label text-ink-faint, `writing-mode: vertical-rl`, text `( FIG. 01 — THE LAYER )`

## LayerStack (the 3D centerpiece)
CSS isometric exploded stack, centered in panel. Wrapper: `group` w-[280px] h-[320px] relative, transform-style preserve-3d.
Each plate: absolute inset-x-0 mx-auto w-[240px] h-[240px] rounded-[6px], transform `rotateX(55deg) rotateZ(-45deg)`, transitions `transform 0.5s ease` staggered.
Stack from bottom (use translateY offsets since parent isn't preserve-3d across browsers — simpler: absolutely position plates at top offsets 150/100/50/0):
1. Base plate (top:150px): bg `#20201F`, opacity 0.9 — solid foundation
2. Glass plate (top:100px): bg rgba(250,249,245,0.45), border 1px rgba(32,32,31,0.18), backdrop-blur-sm
3. Glass plate (top:50px): bg rgba(217,230,248,0.55) (blueprint tint), border 1px rgba(0,47,211,0.15)
4. Brand plate (top:0): bg `#F2612B`, shadow-soft; centered `LogoIcon` counter-rotated (`rotateZ(45deg) rotateX(-55deg)` inner wrapper... simpler: place LogoIcon absolutely above stack, no counter-rotate needed if icon sits on plate face — acceptable: put white LogoIcon inside plate, it will skew with plate; looks intentional isometric)
Hover (`group-hover`): plates spread — base translateY(+16px), plate2 +6px, plate3 −6px, top −16px.

Floating telemetry chips (depth layer, extend-style): absolute mono-label bg-surface border ink/12 rounded-[4px] px-2.5 py-1.5 shadow-soft text-ink-muted text-[10px]:
- top-right: `STOPPAGE · AISLE 9 · 14:02`
- bottom-left: `SW v2.4.1 → v2.5.0`
- mid-left, slightly transparent (opacity 0.7, scale 0.9): `HUMAN INTERVENTION · 6 MIN`

## Responsive
- <1024px: single column, stack panel below text, aspect-[4/3], max-w-[480px] mx-auto
- Mobile 390: H1 44px, CTAs stack full-width
