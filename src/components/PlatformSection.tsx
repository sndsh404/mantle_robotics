import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface FeatureRow {
  slug: string;
  title: string;
  body: string;
  bullets: string[];
  panelLeft?: boolean;
  panel: React.ReactNode;
}

interface SchemaRow {
  key: string;
  value: string;
}

const schemaRows: SchemaRow[] = [
  { key: "robot_id", value: "wh-014" },
  { key: "environment", value: "warehouse" },
  { key: "event", value: "stoppage" },
  { key: "buffer_window", value: "30s pre-fail" },
  { key: "severity", value: "line_idle_14m" },
  { key: "sw_version", value: "2.5.0 (age: 6d)" },
];

function Panel({
  variant,
  annotation,
  children,
}: {
  variant: "blueprint" | "peach";
  annotation: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg corner-dots shadow-soft transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(32,32,31,0.06),0_12px_32px_rgba(32,32,31,0.10)]",
        variant === "blueprint" ? "blueprint-grid" : "peach-grid"
      )}
    >
      <div className="corner-dots-b" />
      {children}
      <span
        className="mono-label absolute right-2 top-1/2 -translate-y-1/2 text-ink-faint"
        style={{ writingMode: "vertical-rl" }}
      >
        {annotation}
      </span>
    </div>
  );
}

function SchemaPanel() {
  return (
    <Panel variant="blueprint" annotation="( FIG. 02 · THE CAPTURE )">
      <div className="w-[min(320px,80%)] space-y-1.5 rounded-[6px] border border-ink/12 bg-surface/90 p-5 font-mono text-[11px] shadow-soft">
        {schemaRows.map((row) => (
          <div key={row.key} className="flex justify-between">
            <span className="text-ink-faint">{row.key}</span>
            <span className="text-ink">{row.value}</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function PoolPanel() {
  const card =
    "absolute rounded-[4px] border border-ink/12 bg-surface px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5";
  return (
    <Panel variant="peach" annotation="( FIG. 03 · THE GROUPING )">
      <div className={cn(card, "left-[12%] top-[30%] scale-90 opacity-60")}>
        ROBOT-014 · STOPPAGE
      </div>
      <div className={cn(card, "right-[14%] top-[44%] scale-90 opacity-60")}>
        ROBOT-007 · STOPPAGE
      </div>
      <div className={cn(card, "left-[30%] top-[56%] border-ember/40")}>
        GROUPED · 1 ISSUE · 42 ROBOTS
      </div>
    </Panel>
  );
}

function OutputsPanel() {
  return (
    <Panel variant="blueprint" annotation="( FIG. 04 · THE REPLAY )">
      <div className="flex flex-row gap-2">
        <div className="rounded-[6px] bg-ink p-4 text-[#FAF9F5]">
          <div className="font-mono text-[9px] uppercase tracking-[0.08em]">
            TIME TO ROOT CAUSE
          </div>
          <div className="font-sans text-[22px] font-extrabold">4.2m</div>
        </div>
        <div className="rounded-[6px] border border-ink/12 bg-surface p-4">
          <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-ink-muted">
            OPEN ISSUES
          </div>
          <div className="font-sans text-[22px] font-extrabold text-ink">
            3
          </div>
        </div>
        <div className="rounded-[6px] border border-ink/12 bg-surface p-4">
          <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-ink-muted">
            ROBOTS AFFECTED
          </div>
          <div className="font-sans text-[22px] font-extrabold text-ink">
            42
          </div>
        </div>
      </div>
    </Panel>
  );
}

const rows: FeatureRow[] = [
  {
    slug: "[A] / CAPTURE",
    title: "An agent that never blinks.",
    body: "A lightweight agent runs on the robot and keeps a rolling window of everything that just happened, the way a dashcam does. The moment something goes wrong, that window is captured and shipped, so you get the seconds before the failure, not just the error after it. It plugs into the logging systems fleets already run, ROS 2 and MCAP, so adopting it is installing a small exporter, not rebuilding anything.",
    bullets: [
      "LIGHTWEIGHT AGENT, ROS 2 & MCAP NATIVE",
      "ROLLING WINDOW, NOT FULL-TIME RECORDING",
      "CAPTURES THE MOMENT BEFORE FAILURE, NOT AFTER",
    ],
    panel: <SchemaPanel />,
  },
  {
    slug: "[B] / DEDUPLICATE",
    title: "One issue, not fifty alerts.",
    body: "Every captured failure gets matched against every other robot in your fleet failing the same way. Fifty stoppages that share a root cause become one issue with fifty data points, not fifty separate pages at 2am. You see which bug is actually costing you the most before you decide what to fix first.",
    bullets: [
      "GROUPS IDENTICAL FAILURES FLEETWIDE",
      "ONE ISSUE, NOT ONE ALERT PER ROBOT",
      "SEE WHICH ROBOTS HIT THE SAME BUG",
      "EVERY EVENT TAGGED WITH ITS SOFTWARE VERSION",
    ],
    panelLeft: true,
    panel: <PoolPanel />,
  },
  {
    slug: "[C] / REPLAY",
    title: "Replay exactly what happened, in the browser.",
    body: "Open any issue and step through the sensor feed, telemetry, and logs frame by frame, right up to the moment it failed. No pulling drives, no requesting logs from a machine five hundred miles away. The engineer on call sees what the robot saw and ships a fix before lunch.",
    bullets: [
      "FRAME-BY-FRAME SENSOR REPLAY IN THE BROWSER",
      "NO SPECIAL TOOLING, JUST A LINK",
      "SHIP THE FIX, NOT A SUPPORT TICKET",
    ],
    panel: <OutputsPanel />,
  },
];

export function PlatformSection() {
  return (
    <section id="platform" className="bg-cream py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex justify-between">
          <span className="mono-label text-ink-muted">
            [02] / WHAT WE BUILD
          </span>
        </div>

        <h2 className="mt-8 max-w-[26ch] font-sans text-[clamp(32px,4.5vw,52px)] font-light leading-[1.08] tracking-[-0.02em]">
          <span className="text-ink">Three parts. One flywheel.</span>
          <span className="text-ink-faint">
            {" "}
            An always-on agent, fleet-wide deduplication, and one-click
            replay.
          </span>
        </h2>

        <div className="mt-16 space-y-20">
          {rows.map((row) => (
            <Reveal key={row.slug}>
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className={cn(row.panelLeft && "lg:order-2")}>
                  <div className="mono-label text-ink-faint">{row.slug}</div>
                  <h3 className="mt-3 font-sans text-[26px] font-semibold text-ink">
                    {row.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
                    {row.body}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {row.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="mono-label flex gap-2 text-ink-muted"
                      >
                        <span className="text-ember">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={cn(row.panelLeft && "lg:order-1")}>
                  {row.panel}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
