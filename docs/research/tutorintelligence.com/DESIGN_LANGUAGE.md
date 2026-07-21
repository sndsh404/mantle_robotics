# tutorintelligence.com — Design Language Extraction (July 2026)

Platform: Webflow. Fonts: **Sentient** (serif display, weights 200/300), **Manrope** (body/headings 300/400/500), **Roboto Mono** (nav + button labels, uppercase).

## Core tokens (computed)
- Body bg: `rgb(255,255,255)`; hero panel bg: `rgb(236,236,236)` (#ECECEC) with graph-paper grid lines (thin light-gray squares, ~40px cells)
- Ink: `rgb(32,32,32)` (#202020)
- Muted body: `rgb(114,114,114)` (#727272)
- Royal blue accent: `rgb(0,47,211)` (#002FD3) — serif display + body text in palletizing section
- Accent yellow: warm yellow (#F5C842-ish) — CTA buttons + robot livery
- Accent green: strong green (#1AA043-ish) — "LEARN MORE ABOUT SONNY" button; pastel mint `#D7F5D7`-ish image panel backgrounds
- Black CTA: near-black rect button, white 10.7px mono text, radius ~3.5px

## Typography scale
- Hero h1: **Sentient 300**, 64px, line-height 64px (1.0), letter-spacing −3.2px, centered — classic editorial serif
- Section serif display: Sentient 300, 35.5px, lh 49.8, ls −0.7px (used in blue #002FD3)
- Section h2 (sans): Manrope 400, 28.4px, lh 31.3, ls −0.57px, #202020
- Body: Manrope, ~16px, muted #727272 or blue in themed sections
- Sub-hero: Manrope 400, 14.2px, #727272
- Nav links: Roboto Mono 10.7px, UPPERCASE, #202020
- Buttons: mono uppercase labels with trailing arrow-in-circle icon

## Signature elements
1. **Graph-paper hero** — full-width light-gray panel (#ECECEC) with fine grid lines; giant centered serif headline; large centered 3D product render (white robot camera/arm) breaking the panel edge; small video card bottom-right with round play button.
2. **Fixed white top bar** — logo left, mono uppercase center links (+ SOLUTIONS with plus icon), SIGN IN text + black SIGN UP rect button right. Height ~99px, transparent → white over content.
3. **Editorial two-column sections** — big image/render left (often on pastel color-field: mint green, light gray), text right: Manrope h2 + muted paragraphs + colored rect CTA (yellow/green/black) with mono uppercase label.
4. **Color-themed sections** — palletizing section switches whole palette to royal blue (#002FD3) serif display AND body text; thin blue divider line above.
5. **3D product renders** — photoreal white/yellow robots on soft-shadow white or pastel backgrounds. This is where the "product credibility" feel comes from.
6. **Contact/form section** — "Request an intro meeting", underline-only inputs (transparent bg, bottom border, 17.8px Manrope), column gap 42.7px.
7. **Footer** — simple white, Manrope 14.2px links row (Palletizer/Research/Careers/Pricing/About/Blog/Contact + social + privacy).

## Topology
1. Fixed white nav bar
2. Hero: grid paper + serif h1 + sub + "Request a Meeting" + 3D render + video card (810px)
3. About: "Building robot artificial intelligence in partnership with industry" — photo left / text right (~1856px section incl. Cassie + Sonny)
4. Meet Cassie — render right, text left, yellow CTA
5. Meet Sonny — video/render left on mint, text right, green CTA (humanoid, "Available for deployment starting late 2026")
6. Infinite-SKU palletizing — blue-themed section
7. Request an intro meeting — form (619px)
8. Footer (327px)

## Behaviors
- Nav fixed (z-1000), stays over content.
- Autoplaying product videos in section panels.
- Webflow IX2 interactions (some scroll animation; renderer got busy below ~2600px — likely scroll-driven video/interaction).
- Buttons: hover state on black/yellow/green rects (subtle darken/translate typical Webflow).

## Blend takeaways for pixelworld
- Serif × mono contrast (Sentient/Roboto Mono) is the distinctive editorial-industrial voice.
- Graph-paper texture + colored rect buttons with mono uppercase labels.
- Color-themed section switching (their blue section) is a strong pattern for our EU-deadline / themed content blocks.
