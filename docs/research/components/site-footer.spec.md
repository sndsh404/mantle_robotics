# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Source:** extend.ai black footer with column rules + mono chrome
- **Interaction model:** static + link hover

## DOM Structure
`<footer>` bg-night text-[#FAF9F5] border-t border-white/10.
Inner max-w-[1200px] mx-auto px-6 py-16, grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 (divide on md via border-l border-white/10 pl-8 on link cols, first col no border).

## Brand column
- LogoIcon size-7 text-ember + wordmark "pixelworld" font-sans font-extrabold 20px
- Line (14px text-white/60 mt-3 max-w-[26ch]): "The scorekeeper both sides need. Failure data in, insurability out."
- Mono 11px text-white/40 mt-6: `RRT SCHEMA V0.1 — OPEN`

## Link columns (heading: mono-label text-white/50; links: Manrope 14px text-white/80, hover:text-ember transition-colors, space-y-2.5 mt-4)
- PLATFORM: RRT Standard, The Pool, Incident Index, Benchmarks
- PRODUCTS: Evidence Vault, Risk Reviews, Certificates, Data License, Claims
- COMPANY: About, Research, Careers, Contact
- LEGAL: Privacy, Terms, Disclosures
(all href "#")

## Bottom bar
border-t border-white/10, py-6, px-6, max-w-[1200px] mx-auto, flex flex-col md:flex-row justify-between gap-3
- mono 10px uppercase ls 0.08em text-white/40: `© 2026 PIXELWORLD. ALL RIGHTS RESERVED.`
- mono 10px text-white/30: `NOT LEGAL ADVICE. MARKET MATH IS ILLUSTRATIVE ARITHMETIC, NOT A FORECAST.`

## Responsive
- Mobile: single column stack, no border-l dividers
