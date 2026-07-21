# PlatformSection Specification

## Overview
- **Target file:** `src/components/PlatformSection.tsx`
- **Sources:** extend.ai numbered feature rows + blueprint/peach isometric panels; depth-layered floating cards
- **Interaction model:** static + hover states; scroll reveal
- Section id: `platform`

## DOM Structure
Section bg-cream py-24. Inner max-w-[1200px] mx-auto px-6.
1. Rail label: `[02] — WHAT WE BUILD` / right `( 02 / 04 )`
2. Two-tone headline (same style as ProblemSection): ink "Three parts. One flywheel." + faint " An open standard, a shared pool, and the products both sides pay for."
3. Three feature rows, mt-16, space-y-20. Each row: grid lg:grid-cols-2 gap-12 items-center; alternate panel side (row 2 panel on left → use lg:order-1/2).

## Row content

### Row 1 — /standard (blueprint panel)
- Mono slug: `[A] / STANDARD` text-ink-faint mono-label
- Title: font-sans font-semibold text-[26px] text-ink "An open reporting standard."
- Body (16px text-ink-muted): "RRT — Robot Reliability Telemetry — is a free, public format for reporting robot problems: what kind of robot, what environment, whether it ran on its own or with human help, what went wrong, how bad it was, how long it took to fix, and how recently the software changed. It plugs into the logging systems fleets already run — ROS 2 and MCAP — so adopting it is installing a small exporter, not rebuilding anything."
- Bullets (mono-label text-ink-muted, each with text-ember `▸`):
  - `OPEN ON PURPOSE — STANDARDS WIN BY BEING EVERYWHERE`
  - `EVERY EVENT TAGGED WITH ITS SOFTWARE VERSION`
  - `EXPORTER PLUGINS, NOT REPLATFORMING`
- Panel: blueprint-grid rounded-lg aspect-[4/3] relative corner-dots (+corner-dots-b div), rotated annotation `( FIG. 02 — RRT SCHEMA )`. Content: centered mock schema card — bg-surface/90 rounded-[6px] border border-ink/12 p-5 w-[min(320px,80%)] shadow-soft, mono text-[11px] text-ink-muted, lines: `robot_class: mobile_manipulator`, `environment: warehouse`, `autonomy: unsupervised`, `event: stoppage`, `severity: line_idle_14m`, `sw_version: 2.5.0 (age: 6d)` — each on its own row, key text-ink-faint value text-ink.

### Row 2 — /pool (peach panel, panel on LEFT at lg)
- Mono slug: `[B] / POOL`
- Title: "A shared, anonymous failure database."
- Body: "Operators contribute failure data in RRT format. We strip identities and blur details so no contributor can be singled out. The rule is contribute-to-access: you only see the pooled results if your own data is in. The design copies aviation's incident reporting system — reporting is safe and non-punitive, so people actually report. Trust rules are the product, not fine print."
- Bullets:
  - `BENCHMARK AGAINST FLEETS LIKE YOURS`
  - `AGGREGATE-ONLY ACCESS FOR INSURERS`
  - `NON-PUNITIVE, AVIATION-STYLE RULES`
- Panel: peach-grid, annotation `( FIG. 03 — THE POOL )`. Content: 3 floating mini telemetry cards at staggered positions/scales (extend depth trick): bg-surface border-ink/12 rounded-[4px] px-3 py-2 mono 10px shadow-soft; back cards opacity-60 scale-90. Texts: `FLEET 014 · MTBF 41H`, `FLEET 007 · MTBF 29H`, `POOLED · P50 MTBF 33H` (front card border-ember/40).

### Row 3 — /products (blueprint panel)
- Mono slug: `[C] / PRODUCTS`
- Title: "Risk numbers, certificates, and proof."
- Body: "On top of the pool we sell what each side needs: frequency and severity numbers for insurers, a continuously updated reliability certificate that earns operators cheaper premiums, and court-ready evidence for the EU's new liability regime. The pool compounds; the products fund it."
- Bullets:
  - `RISK MODELS SOLD AS YEARLY LICENSES`
  - `CERTIFICATES SIZED AGAINST PREMIUM SAVINGS`
  - `EVIDENCE READY FOR A COURT OR REGULATOR`
- Panel: blueprint-grid, annotation `( FIG. 04 — OUTPUTS )`. Content: inverted mini stat card trio (extend): 3 small cards row — first bg-ink text-[#FAF9F5] (`CERT SCORE` / `A−`), others bg-surface (`FREQ / 1K HRS` / `0.42`, `SEVERITY P95` / `$18K`), mono labels 9px, values font-extrabold 22px.

## Hover
- Panels: shadow-soft → slightly stronger (hover:shadow-[0_2px_4px_rgba(32,32,31,0.06),0_12px_32px_rgba(32,32,31,0.10)]), transition 0.3s
- Floating cards translateY(-2px) on panel hover (group/group-hover)

## Responsive
- <1024: single column, panel below text each row, aspect-[4/3]
