# StatStrip Specification

## Overview
- **Target file:** `src/components/StatStrip.tsx`
- **Source:** extend.ai logo strip (bordered cells + corner dots + mono label)
- **Interaction model:** static (hover: cell bg brightens)

## DOM Structure
Section `border-y border-ink/12 bg-cream`. Inner max-w-[1200px] mx-auto: left rail label + 4 cells grid.

## Styles
- Wrapper grid: `md:grid-cols-[200px_repeat(4,1fr)]`, divide-x divide-ink/12 (border-l on cells)
- Rail label cell: p-5, `mono-label` text-ink-muted with leading dot: `● TRACKING THE ROBOT ECONOMY — JULY 2026` (dot text-ember)
- Stat cell: relative p-6, corner-dots + inner corner-dots-b div, bg transparent, hover:bg-surface transition-colors 0.25s
  - label: mono-label text-ink-faint (10px)
  - value: font-sans font-extrabold text-[32px] leading-tight text-ink mt-2 (tabular-nums)
  - caption: mono-label text-ink-muted text-[10px] mt-1.5 normal-case? No — keep uppercase

## Content (verbatim cells)
1. label `ROBOTICS MARKET` / value `$38B` / caption `GREW 34% IN ONE YEAR`
2. label `LOGISTICS ROBOTS DEPLOYED` / value `41,000` / caption `+22,500 IN CHIP FABS`
3. label `HUMANOID SHIPMENTS` / value `90K → 1.2M` / caption `2026 → 2030 PROJECTED`
4. label `EU PLD DEADLINE` / value `DEC 9, 2026` / caption `SOFTWARE & AI COUNT AS PRODUCTS` (value text-ember)

## Responsive
- Desktop: 5-col row; Tablet: rail on top (col-span), 2×2 cells; Mobile: rail + single column cells, border-t between
