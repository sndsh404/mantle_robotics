import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface Step {
  chip: string;
  number: string;
  title: string;
  body: string;
}

const steps: Step[] = [
  {
    chip: "01 · CONNECT",
    number: "1",
    title: "Install the capture agent.",
    body: "A lightweight plugin for ROS 2 and MCAP starts streaming rolling-window telemetry from your fleet in under an hour. No replatforming, no downtime.",
  },
  {
    chip: "02 · CAPTURE",
    number: "2",
    title: "Watch failures roll in, already deduped.",
    body: "Every stoppage is grouped with every other robot hitting the same bug, so your dashboard shows issues, not a flood of one-off alerts.",
  },
  {
    chip: "03 · REPLAY",
    number: "3",
    title: "Click into any issue and see what happened.",
    body: "Step through the sensor feed and logs frame by frame in the browser, right up to the moment it failed. No log requests, no waiting on the field team.",
  },
];

const barHeights = [42, 58, 36, 64, 50, 72, 45, 80, 62, 88, 76, 96];

const metrics = [
  { label: "FLEET UPTIME", value: "99.2% · ▲ 2.1 PTS THIS WEEK" },
  { label: "ISSUES OPEN", value: "3" },
  { label: "MEAN TIME TO ROOT CAUSE", value: "4.2 MIN" },
  { label: "ROBOTS REPORTING", value: "42 / 42 · SYNCED 2 MIN AGO" },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="graph-paper border-y border-ink/12 bg-cream px-6 py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex justify-between">
          <span className="mono-label text-ink-muted">[04] / HOW IT WORKS</span>
        </div>

        <h2 className="mt-8 max-w-[26ch] font-sans text-[clamp(32px,4.5vw,52px)] font-light leading-[1.08] tracking-[-0.02em]">
          <span className="text-ink">From first stoppage to shipped fix.</span>
          <span className="text-ink-faint"> Live in an afternoon, not a quarter.</span>
        </h2>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {steps.map((step) => (
              <article
                key={step.chip}
                className="flex gap-5 rounded-[6px] border border-ink/12 bg-surface p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
              >
                <span className="font-serif text-[32px] font-light leading-none text-ink-faint">
                  {step.number}
                </span>
                <div>
                  <p className="mono-label text-[10px] text-ink-muted">
                    {step.chip}
                  </p>
                  <h3 className="mt-1.5 font-sans text-[18px] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <div className="blueprint-grid corner-dots relative rounded-lg p-8 shadow-soft md:p-12">
              <div className="corner-dots-b" />
              <span
                className="mono-label absolute right-2 top-1/2 -translate-y-1/2 text-ink-faint"
                style={{ writingMode: "vertical-rl" }}
              >
                ( FIG. 05 · LIVE DASHBOARD )
              </span>

              <div className="mx-auto w-full max-w-[440px] rounded-[10px] border border-ink/12 bg-surface p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="mono-label text-ink-muted">
                    FLEET UPTIME · LIVE
                  </span>
                  <span className="size-2 animate-pulse bg-ink" />
                </div>

                <div className="mt-5 flex items-end gap-4">
                  <span className="font-sans text-[56px] font-extrabold leading-none text-ink">
                    99.2%
                  </span>
                  <span>
                    <span className="mono-label block text-[10px] text-ink-faint">
                      LAST 30 DAYS
                    </span>
                    <span className="mono-label block text-[10px] text-ember">
                      ▲ 2.1 PTS THIS WEEK
                    </span>
                  </span>
                </div>

                <div className="mt-6 flex h-[64px] items-end gap-1.5">
                  {barHeights.map((height, index) => (
                    <div
                      key={index}
                      className={cn(
                        "w-full rounded-sm",
                        index >= barHeights.length - 3 ? "bg-ember" : "bg-ink/15"
                      )}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="mt-6 divide-y divide-ink/10">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex justify-between py-2.5"
                    >
                      <span className="mono-label text-[10px] text-ink-faint">
                        {metric.label}
                      </span>
                      <span className="mono-label text-[10px] text-ink">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
