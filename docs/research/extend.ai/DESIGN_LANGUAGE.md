# extend.ai — 3D Visual Treatment Extraction (July 2026)

Stack: Tailwind (stone palette), fonts: **systemia** (display, 300 weight, 62px/62px, ls −1%), **dmMono** (13px uppercase labels/buttons, ls 0.78px), abcFavorit, Inter.

## Core tokens
- Page bg: warm cream `lab(91.06 0.66 0.87)` ≈ `#E7E4DE` (stone-200/250 territory)
- Card/panel bg: `lab(98.27 ...)` ≈ `#FAF9F5` (stone-50), radius 4px (`rounded-xs`)
- Ink: `lab(15.03 ...)` ≈ `#232120`
- Secondary text in headlines: mid-gray — **two-tone headlines** (dark first sentence, gray second)
- Announcement bar: black, white mono text, orange `NEW` tag
- Footer: black, mono uppercase copyright, hairline column rules continue through it

## What creates the "3D feel" (the user's ask)
1. **Isometric translucent volumes** — hero: a glassy blue 3D box (like a glass slab) containing a document sheet, sitting on a **blueprint-blue grid panel** (light blue #CFE0F5-ish, thin white grid lines). Semi-transparent faces + edge highlights = glass.
2. **Exploded layer stacks** — feature panels show isometric stacks: a branded plate floating above translucent glass layers above a solid base (peach/orange themed panel: bg ≈ #FBE8D4 with warm grid lines, browns/oranges for the solid layers). Reads as "layers of a system." PERFECT metaphor for The Reliability Layer.
3. **Depth-layered floating UI cards** — sections scatter miniature UI cards at different scales with small tooltips ("Thought for 3s…"), lighter/faded at the back, sharp at front → parallax-like depth without WebGL.
4. **Blueprint/registration-mark chrome** — hairline vertical column rules running the full page height; corner dots at panel corners (like drafting registration marks); rotated margin annotations `( FIG. 08 )`, `( 01 / 04 )`; `[CAPABILITIES]` bracket labels. Gives an engineering-drawing, technical-document feel.
5. **Soft warm shadows** on stone-50 cards over the darker cream page bg — subtle two-level surface elevation everywhere.
6. **Inverted stat card** — row of 3 stat cards (mono uppercase label, giant number ~44px, mono caption), first card black with white text, others stone-50. Strong pattern.

## Components observed
- Nav: white bar, mono uppercase links, GET STARTED outlined pill (radius 8px, dmMono 13px uppercase, padding 15px 12px, hairline border)
- Announcement bar under nav: black, mono, orange NEW chip + READ BLOG ↗
- Logo strip: bordered cells with corner dots, "TRUSTED BY LEADING AI TEAMS" mono label with dot bullet
- Numbered feature sections: `[01] / parse` dmMono labels left rail, blueprint panel center, `[CAPABILITIES]` list right
- Benchmark: two-tone display headline + stat card row
- Feature grid: panels alternate blueprint-blue and warm-peach themed isometric illustrations, titles with small icon chip + gray second-sentence body
- Footer: black, multi-column, mono lowercase/uppercase mix

## Behaviors
- Subtle scroll-driven reveals; floating cards likely parallax on scroll
- Hover: outlined button fills; links underline
- Page ~8769px tall; heavy sections froze screenshot pipeline (scroll-linked animation)

## Blend takeaways for pixelworld
- Steal: hairline column rules + corner registration dots + FIG annotations (technical drawing chrome)
- Steal: exploded isometric layer stack as THE hero/feature visual (it literally illustrates "the reliability layer")
- Steal: two-tone headlines, inverted stat card row, mono bracket labels
- Steal: themed grid panels (blueprint blue / warm peach) for illustration backdrops
