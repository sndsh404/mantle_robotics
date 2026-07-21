# ProblemSection Specification

## Overview
- **Target file:** `src/components/ProblemSection.tsx`
- **Sources:** extend.ai two-tone display + inverted stat cards; tutor serif pull-quote
- **Interaction model:** static (scroll reveal via shared `Reveal` component)
- Section id: `problem`

## DOM Structure
Section bg-cream, py-24, max-w-[1200px] mx-auto px-6.
1. Rail label row: `mono-label` text-ink-muted — `[01] — THE PROBLEM` with `( 01 / 04 )` on the right edge (flex justify-between)
2. Two-tone display headline (mt-8, max-w-[24ch]): font-sans font-light text-[clamp(32px,4.5vw,52px)] leading-[1.08] tracking-[-0.02em]. First span text-ink: "Robots are entering workplaces faster than insurers can price what goes wrong." Second span text-ink-faint: " So insurers are writing robots out of their policies."
3. Stat card row (mt-14): grid md:grid-cols-3 gap-4
4. Copy row (mt-14): grid lg:grid-cols-2 gap-10
5. Pull-quote band (mt-16)

## Stat cards (extend style)
Card: rounded-[6px] p-6, min-h-[150px], flex flex-col justify-between
- Card 1 **inverted**: bg-ink text-[#FAF9F5] — label mono-label opacity-70 `LAB SUCCESS RATE`, value font-sans font-extrabold text-[44px] `95%`, caption mono-label opacity-70 `THE DEMO THAT RAISES THE ROUND`
- Card 2: bg-surface border border-ink/12 — `DEPLOYED SUCCESS RATE` / `60%` / `THE SAME ROBOT ON A REAL FLOOR`
- Card 3: bg-surface border border-ink/12 — `WHAT PRODUCTION NEEDS` / `99.9%` / `THE BAR FOR REAL WORK` (value text-ember)

## Copy row (Manrope 16px text-ink-muted leading-relaxed)
Left col paragraphs:
- "A warehouse robot at 95 percent accuracy fails around fifty times a day. Today's best robot AI can run on its own for about thirty minutes before performance falls apart. Every stoppage, near miss, and claim is a data point — and right now, nobody is counting."
- "Carriers are responding the only way they can without numbers: AI exclusions. A standard business policy may not pay out at all for a robot accident, and even when it does, it covers the broken stuff — not the production line sitting idle."
Right col paragraphs:
- "Everyone keeps using design-time paperwork to answer a runtime question. A safety certificate says what a robot was designed to do. It says nothing about whether last month's software update quietly changed how it behaves. Insuring a robot today means insuring a black box."
- "The chain of consequences is short. No data means no insurance. No insurance means fewer robots, more supervision, cancelled pilots."

## Pull-quote band
Border-y border-ink/12, py-10, text-center:
- font-serif italic font-light text-[clamp(26px,3.2vw,38px)] text-ink: “Robots that cannot be insured will not scale.”
- mono-label text-ink-faint mt-4: `NO DATA → NO INSURANCE → NO SCALE. WHOEVER SUPPLIES THE DATA CONTROLS THE CHOKEPOINT.`

## Responsive
- md: stat cards 3-col → mobile stack; copy 2-col → stack
