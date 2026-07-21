import { Reveal } from "@/components/Reveal";
import {
  RegressionIcon,
  PerceptionIcon,
  InterventionIcon,
  WearIcon,
  DriftIcon,
  ShieldIcon,
} from "@/components/icons";

const tiles = [
  {
    icon: RegressionIcon,
    lead: "Software regressions.",
    body: "An update that passed CI quietly changes behavior on the floor.",
  },
  {
    icon: PerceptionIcon,
    lead: "Perception failures.",
    body: "Lighting, clutter, and edge cases the training set never saw.",
  },
  {
    icon: InterventionIcon,
    lead: "Human interventions.",
    body: "Every takeover is a data point about where autonomy ends.",
  },
  {
    icon: WearIcon,
    lead: "Hardware degradation.",
    body: "Wear shows up in the logs before it shows up as downtime.",
  },
  {
    icon: DriftIcon,
    lead: "Environment drift.",
    body: "New layouts, new SKUs, new obstacles. The floor never stops changing.",
  },
  {
    icon: ShieldIcon,
    lead: "Security incidents.",
    body: "Unauthorized access, spoofed commands, or a compromised update.",
  },
];

/** Six-tile failure-surface grid: what Mantle Robotics captures on a deployed robot. */
export function FailureSurface() {
  return (
    <Reveal className="mt-20">
      <p className="mono-label flex items-center gap-2 text-ink-muted">
        <span className="size-1.5 shrink-0 bg-ink" />
        WHAT WE CAPTURE
      </p>
      <h3 className="mt-4 max-w-[22ch] font-sans text-[clamp(28px,3.5vw,40px)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
        The failure surface of a deployed robot.
      </h3>
      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile) => (
          <div key={tile.lead} className="flex items-start gap-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-[6px] border border-ink/15 bg-surface text-ink">
              <tile.icon />
            </span>
            <p className="text-[15px] leading-relaxed">
              <span className="font-semibold text-ink">{tile.lead}</span>{" "}
              <span className="text-ink-muted">{tile.body}</span>
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
