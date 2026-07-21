# MoatSection Specification

## Overview
- **Target file:** `src/components/MoatSection.tsx`
- **Source:** burn.dev dark rounded panel + orange radial glow + mono accents
- **Interaction model:** static + hover; scroll reveal
- Section id: `moat`

## DOM Structure
Section bg-cream py-24 px-6. Inner: max-w-[1200px] mx-auto — dark panel:
- bg-night rounded-[20px] relative overflow-hidden, px-8 py-16 md:px-16 md:py-20
- Glow overlay: absolute inset-0 `ember-glow` (radial orange dome from top), pointer-events-none
- Content relative z-10

## Content
1. Mono label text-white/60: `THE MOAT`
2. Headline: font-sans font-extrabold text-[clamp(30px,4vw,44px)] leading-[1.1] text-[#FAFAFA] mt-4 max-w-[20ch]: "The pool cannot be back-filled."
3. Sub (JetBrains mono 14px text-white/70 leading-relaxed mt-5 max-w-[64ch]): "Loss data accumulates in real time. A competitor starting two years later is two years of deployment history behind — forever."
4. Moat grid mt-12: md:grid-cols-2 gap-4. Card: rounded-[12px] border border-white/10 bg-white/[0.04] p-6, hover:bg-white/[0.07] transition 0.3s
   - **Data compounds.** — "This is the moat that has protected Verisk for fifty years. Data sold many times at near-zero extra cost is one of the best business models that exists."
   - **Neutrality cannot be faked.** — "Operators will not send failure data to an insurer, a robot maker, or a competitor's data arm. They will send it to a neutral party with aviation-style non-punitive rules."
   - **Standards are winner-take-most.** — "If RRT becomes the format fleet software exports and insurers request, switching away requires the whole ecosystem to move at once."
   - **Regulation locks it in.** — "A rating rule filed with regulators, or an evidence format courts recognize, is close to permanent. From that point we are infrastructure."
   Card title: font-sans font-bold 18px text-[#FAFAFA]; body 14px text-white/60 mt-2 leading-relaxed
5. Precedent line (mt-12, border-t border-white/10 pt-8): mono 12px uppercase ls 0.08em text-white/50: `VERISK STARTED AS A SHARED DATA POOL IN 1971. AVIATION GOT SAFE WHEN AIRLINES SHARED NEAR-MISSES WITH ONE NEUTRAL BODY. WE ARE BUILDING THAT — FOR ROBOTS.`

## Responsive
- Mobile: p-8, single-col grid
