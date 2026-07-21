# CtaPanel Specification

## Overview
- **Target file:** `src/components/CtaPanel.tsx`
- **Source:** burn.dev dark glow panel; serif display from tutor
- **Interaction model:** static + hover
- Section id: `cta`

## DOM Structure
Section bg-cream pb-24 px-6. Inner max-w-[1200px] mx-auto — dark panel:
- bg-night rounded-[20px] relative overflow-hidden text-center px-8 py-20 md:py-24
- `ember-glow` absolute inset-0 overlay
- Content relative z-10, flex flex-col items-center

## Content
1. Mono label text-white/60: `DESIGN PARTNER PROGRAM — 3 TO 5 SEATS`
2. Serif display: font-serif font-light text-[clamp(34px,4.5vw,56px)] leading-[1.05] tracking-[-0.02em] text-[#FAFAFA] mt-5 max-w-[22ch]: "Send us one month of failure logs. Get back a free benchmark."
3. Sub (Manrope 16px text-white/70 mt-5 max-w-[54ch]): "Warehouse and logistics fleets are the most reachable. Humanoid pilot hosts are the most motivated. Instrumentation is free for design partners — you join the pool, you see the pool."
4. CTA row mt-9 flex gap-3 flex-wrap justify-center:
   - Primary: bg-ember text-[#FAF9F5] mono 12px uppercase px-6 py-4 rounded-[4px] font-bold hover:brightness-110 hover:-translate-y-px transition, `BECOME A DESIGN PARTNER` + ArrowRightIcon
   - Secondary: border border-white/25 text-white same shape, hover:bg-white/10, `TALK TO US`
5. Mono footnote mt-10 text-white/40 text-[11px] ls 0.08em: `15 INTERVIEWS · 3 OPERATORS · 30 DAYS · THE KILL SIGNALS ARE CHEAP TO FIND`

## Responsive
- Mobile: py-16, CTAs stack full-width
