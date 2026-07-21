# TrustSection Specification (v2 — dark marquee)

## Overview
- **Target file:** `src/components/TrustSection.tsx`
- **Inspiration:** wisprflow.ai/privacy block STRUCTURE only (dark band, bold serif privacy statement, auto-scrolling trusted-by logos, auto-scrolling testimonial cards). All copy, names, and logos are ORIGINAL inventions for Mantle Robotics — nothing reused.
- **Interaction model:** time-driven (two CSS marquees, continuous linear scroll, pause on hover, disabled under prefers-reduced-motion) + scroll reveal
- **Placement:** directly after ProductsGrid (replaces the removed internal-strategy callout card)

## DOM Structure
Section `bg-night py-24` full-bleed dark band.
1. Centered header block (max-w-[1200px] px-6):
   - mono-label text-white/50: `TRUST & DATA SECURITY`
   - Serif statement (mt-8, centered, max-w-[26ch], clamp 34–54px, tracking −0.02em, white): "Contributor trust is the product." + white/50 span "Identities stripped, details blurred, and your data never used against you."
   - Assurance chips (mt-8, centered): `NON-PUNITIVE BY DESIGN` / `ANONYMIZED AT INGEST` / `AGGREGATE-ONLY ACCESS FOR INSURERS` — mono-label, border-white/15, text-white/60, rounded-full px-3 py-1.5
2. Logo marquee (mt-16): label `TRUSTED BY OPERATORS, MAKERS, AND UNDERWRITERS` (mono, white/40, centered), then `.marquee.marquee-fade-night` with `--marquee-duration: 32s`. Track = two copies (second aria-hidden) of an 8-wordmark row, gap-16, mixed type treatments, text-white/50 hover:text-white:
   MERIDIAN ROBOTICS (mono tracking-0.2em) · Northline (serif italic) · HELIOSTAT (sans extrabold widest) · Carrier & Mutual (serif) · voltfleet (sans bold lowercase) · ASTERION DYNAMICS (mono) · Palletra (serif italic) · IRONWOOD RE (sans extrabold)
3. Testimonial marquee (mt-14): `.marquee.marquee-fade-night`, `--marquee-duration: 56s`. Track = two copies of a 6-card row. Card: w-[360px] shrink-0, rounded-[12px], border-white/10, bg-white/[0.05], p-6 — serif italic quote (16px, white/90) + attribution row (border-t white/10, pt-4): initials avatar circle (size-9, brand-colored bg: ember/royal/green/faint) + name (13px semibold white) + role (mono 9px white/50).

## Testimonials (all fictional)
1. Dana Whitfield — VP OPERATIONS · NORTHLINE — benchmark quote
2. Marcus Oyelaran — SPECIALTY UNDERWRITER · CARRIER & MUTUAL — quotable risks quote
3. Priya Raghavan — CTO · MERIDIAN ROBOTICS — pre-launch review quote
4. Tomás Ferreira — HEAD OF AUTOMATION · PALLETRA — humanoid pilot certificate quote
5. Ingrid Halvorsen — GENERAL COUNSEL · VOLTFLEET — evidence vault legal quote
6. Yusuf Adeyemi — PORTFOLIO DIRECTOR · IRONWOOD RE — reinsurer blind-spot quote

## Marquee mechanics (globals.css)
- `@keyframes marquee { from { translateX(0) } to { translateX(-50%) } }`
- `.marquee-track` = flex, width max-content, two identical children → −50% loops seamlessly
- `.marquee:hover .marquee-track` paused; reduced-motion disables animation
- `.marquee-fade-night` = 96px gradient masks (night → transparent) on both edges

## Responsive
- Statement scales via clamp; chips wrap; marquees are inherently horizontal at all widths
