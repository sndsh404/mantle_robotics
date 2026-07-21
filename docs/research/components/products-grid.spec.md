# ProductsGrid Specification

## Overview
- **Target file:** `src/components/ProductsGrid.tsx`
- **Sources:** extend stone cards + mono chrome; tutor color coding; content = "Who pays us" table from the plan doc
- **Interaction model:** static + card hover lift
- Section id: `products`

## DOM Structure
Section bg-cream py-24, inner max-w-[1200px] px-6.
1. Rail label: `[03] — WHO PAYS US` / `( 03 / 04 )`
2. Two-tone headline: ink "Five products, sequenced by when the money starts." faint " Services fund the early years while the pool grows."
3. Grid mt-14: `md:grid-cols-2 lg:grid-cols-3 gap-4` (5 cards + 1 rule callout card = 6 cells)

## Card anatomy
bg-surface border border-ink/12 rounded-[6px] p-6 flex flex-col gap-4 min-h-[240px], relative corner-dots (+corner-dots-b), hover: -translate-y-1 shadow-soft transition 0.3s
- Top row: mono-label timeline chip (border border-ink/15 rounded-full px-2.5 py-1 text-[10px] text-ink-muted) + accent dot (size-2 rounded-full)
- Title: font-sans font-semibold text-[19px] text-ink
- Description: 14.5px text-ink-muted leading-relaxed, flex-1
- Footer rows (mono-label text-[10px] text-ink-faint, border-t border-ink/10 pt-3): `WHO PAYS — <value>` and `SHAPE — <value>`

## Cards (verbatim)
1. dot bg-royal, chip `YEAR 0–1` — **EU Evidence Vault** — "A tamper-proof record of your robots' runtime safety history, ready to show a court or regulator. Companies selling into Europe need this from December 9, 2026. The product with a legal due date." — WHO PAYS: ROBOT MAKERS & OPERATORS IN THE EU — SHAPE: SUBSCRIPTION PER FLEET
2. dot bg-ember, chip `YEAR 0–1` — **Pre-Launch Risk Reviews** — "Before a robot ships, we review its design against the failure patterns in the pool and report how insurable it will be. Our earliest cash — it needs analysis skills more than a big pool." — WHO PAYS: ROBOT MAKERS & THEIR INVESTORS — SHAPE: PER PROJECT + YEARLY RENEWAL
3. dot bg-signal-green, chip `YEAR 1–2` — **Reliability Certificate** — "A safety rating for your robot fleet, updated continuously from your own data. Operators buy it because it cuts their premiums; makers want their machines to score well." — WHO PAYS: ROBOT OPERATORS — SHAPE: YEARLY FEE, SIZED AGAINST PREMIUM SAVINGS
4. dot bg-royal, chip `YEAR 2+` — **Pooled Data License** — "How often robots of type X fail in environment Y, and what it costs. The end goal is a filed rating rule — a pricing formula any insurer can adopt off the shelf." — WHO PAYS: INSURERS, REINSURERS, UNDERWRITERS — SHAPE: YEARLY LICENSE, TIERED BY SIZE
5. dot bg-ember, chip `YEAR 2+` — **Claim Investigation** — "When a robot accident turns into a claim or a lawsuit, someone has to reconstruct what happened from the logs. We are the natural party to do it." — WHO PAYS: INSURERS & LAWYERS — SHAPE: PER CASE
6. **Rule callout card** — bg-ink text-[#FAF9F5], no chip: mono-label opacity-70 `ONE RULE WE DO NOT BREAK`; then font-serif italic text-[22px] leading-snug "We never carry insurance risk on our own books."; caption 13px opacity-80 mt-2 "The moment we sell policies, we compete with our customers and need mountains of capital. We sell the data and the trust — that is the Verisk lesson."

## Responsive
- lg 3-col, md 2-col, mobile 1-col
