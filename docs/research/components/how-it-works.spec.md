# HowItWorksSection Specification (replaces RoadmapSection)

## Overview
- **Target file:** `src/components/HowItWorksSection.tsx`
- **Replaces:** RoadmapSection (internal Phase 0–3 strategy — not customer-facing)
- **Purpose:** present Mantle Robotics as a finished, live product from the customer's point of view: 3-step journey + product dashboard mock
- **Interaction model:** static + hover; scroll reveal
- Section id: `how-it-works` (PillNav link ROADMAP → HOW IT WORKS)

## DOM Structure
Section bg-cream graph-paper border-y border-ink/12 py-24 px-6 (keeps the band rhythm the roadmap had). Inner max-w-[1200px] mx-auto.
1. Rail row: mono-label `[04] — HOW IT WORKS` / `( 04 / 04 )`
2. Two-tone headline: ink "From first log to lower premium." + faint " Live in days, not quarters."
3. Grid mt-14 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center: steps left, dashboard panel right.

## Steps (left column, vertical, space-y-4)
Card: bg-surface border border-ink/12 rounded-[6px] p-6 flex gap-5, hover:-translate-y-0.5 hover:shadow-soft transition. Number: font-serif font-light text-[32px] text-ink-faint leading-none. Chip above title: mono-label 10px text-ink-muted.
1. `01 — CONNECT` / **Install the RRT exporter.** / "A lightweight plugin for ROS 2 and MCAP starts streaming standardized reliability telemetry from your fleet in under an hour. No replatforming, no downtime."
2. `02 — MEASURE` / **Watch your fleet's reliability live.** / "Your dashboard tracks failure rates, interventions, and downtime against anonymized fleets like yours — updated continuously, benchmarked nightly."
3. `03 — PROVE` / **Turn your record into leverage.** / "Share your certificate and score with underwriters, and keep a court-ready evidence vault — always current, always yours."

## Dashboard mock (right column — the "finished product")
Blueprint panel: relative blueprint-grid rounded-lg corner-dots (+corner-dots-b) shadow-soft p-8 md:p-12, rotated annotation `( FIG. 05 — LIVE DASHBOARD )`.
Inside: dashboard card bg-surface rounded-[10px] border border-ink/12 shadow-soft p-6 w-full max-w-[440px] mx-auto:
- Header row flex justify-between: mono-label text-ink-muted `FLEET RELIABILITY — LIVE` + pulsing dot (size-2 bg-signal-green rounded-full animate-pulse)
- Score row mt-5 flex items-end gap-4: font-sans font-extrabold text-[56px] leading-none text-ink `A−` + block: mono-label 10px text-ink-faint `CERTIFICATE GRADE` / mono-label 10px text-signal-green `▲ TOP QUARTILE OF POOL`
- Mini bar chart mt-6: flex items-end gap-1.5 h-[64px], 12 bars (divs w-full bg-ink/15 rounded-sm, heights varied 30–100%, last 3 bg-ember)
- Metric rows mt-6 divide-y divide-ink/10 (each py-2.5 flex justify-between, mono-label 10px: key text-ink-faint / value text-ink):
  - `MTBF` / `41.2 HRS · ▲ 8% VS POOL`
  - `INTERVENTIONS / 1K HRS` / `0.42`
  - `CERTIFICATE` / `ACTIVE · RENEWS MAR 2027`
  - `EVIDENCE VAULT` / `SYNCED 2 MIN AGO`

## Responsive
- <lg: single column, dashboard below steps; steps full-width
