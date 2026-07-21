import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { LayerStack } from "@/components/LayerStack";

/** Hero — serif display on graph paper, blueprint panel with the isometric layer stack. */
export function HeroSection() {
  return (
    <section className="w-full pt-[120px] pb-16 bg-cream graph-paper">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Left column */}
        <div>
          <p className="mono-label text-ink-muted">
            ANY FLEET. ONE DEBUG CONSOLE.
          </p>
          <h1 className="font-serif font-light text-[clamp(44px,6vw,68px)] leading-[1.02] tracking-[-0.03em] text-ink mt-6">
            The debugging platform for robot fleets.
          </h1>
          <p className="font-sans text-[17px] leading-relaxed text-ink-muted max-w-[52ch] mt-6">
            We capture the moments before a robot fails, group repeated
            failures across your fleet into a single issue, and let you
            replay exactly what happened in the browser.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-ink text-[#FAF9F5] font-mono text-[12px] uppercase tracking-[0.08em] px-5 py-3.5 rounded-[4px] hover:bg-ember transition-colors duration-300"
            >
              GET STARTED FREE
              <ArrowRightIcon />
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-ink/25 text-ink font-mono text-[12px] uppercase tracking-[0.08em] px-5 py-3.5 rounded-[4px] hover:border-ink hover:bg-surface transition-colors duration-300"
            >
              SEE HOW IT WORKS
              <ArrowUpRightIcon />
            </Link>
          </div>
        </div>

        {/* Right column — blueprint panel */}
        <div className="relative blueprint-grid rounded-lg aspect-[4/3] max-w-[480px] mx-auto lg:aspect-[4/4.4] lg:max-w-none w-full corner-dots overflow-hidden shadow-soft flex items-center justify-center">
          <div className="corner-dots-b" />
          <LayerStack />
          <span
            className="absolute right-2 top-1/2 -translate-y-1/2 mono-label text-ink-faint"
            style={{ writingMode: "vertical-rl" }}
          >
            ( FIG. 01 · THE REPLAY )
          </span>
        </div>
      </div>
    </section>
  );
}
