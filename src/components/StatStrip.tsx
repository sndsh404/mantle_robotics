import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: string;
  caption: string;
  valueClassName?: string;
}

const stats: Stat[] = [
  {
    label: "ROBOTICS MARKET",
    value: "$38B",
    caption: "GREW 34% IN ONE YEAR",
  },
  {
    label: "LOGISTICS ROBOTS DEPLOYED",
    value: "41,000",
    caption: "WAREHOUSE & LOGISTICS, 2025",
  },
  {
    label: "HUMANOID SHIPMENTS",
    value: "90K → 1.2M",
    caption: "2026 → 2030 PROJECTED",
    valueClassName: "text-ember",
  },
];

export function StatStrip() {
  return (
    <section className="border-y border-ink/12 bg-cream">
      <div className="mx-auto grid max-w-[1200px] md:grid-cols-[220px_repeat(3,1fr)]">
        <div className="flex items-center p-5">
          <p className="mono-label flex items-center gap-2 text-ink-muted">
            <span className="size-1.5 shrink-0 bg-ink" />
            TRACKING THE ROBOT ECONOMY
          </p>
        </div>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="corner-dots relative border-t border-ink/12 p-6 transition-colors duration-300 hover:bg-surface md:border-l md:border-t-0"
          >
            <div className="corner-dots-b" />
            <p className="mono-label text-[10px] text-ink-faint">{stat.label}</p>
            <p
              className={cn(
                "mt-2 font-sans text-[32px] font-extrabold leading-tight tabular-nums text-ink",
                stat.valueClassName
              )}
            >
              {stat.value}
            </p>
            <p className="mono-label mt-1.5 text-[10px] text-ink-muted">{stat.caption}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-ink/12">
        <p className="mx-auto max-w-[1200px] px-5 py-2 font-mono text-[11px] tracking-[0.08em] text-ink-faint">
          Sources: IFR World Robotics 2025; industry analyst projections.
        </p>
      </div>
    </section>
  );
}
