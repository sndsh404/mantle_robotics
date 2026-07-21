import { LogoIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const ISO_TRANSFORM = "translateX(-50%) rotateX(55deg) rotateZ(-45deg)";

const PLATE_BASE =
  "absolute left-1/2 w-[240px] h-[240px] rounded-[6px] transition-all duration-500";

const CHIP_BASE =
  "absolute font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted bg-surface border border-ink/12 rounded-[4px] px-2.5 py-1.5 shadow-soft";

/** Isometric exploded layer stack — the hero's 3D centerpiece. Layers separate on hover. */
export function LayerStack() {
  return (
    <div className="group relative w-[280px] h-[340px]">
      {/* 1. Base plate */}
      <div
        className={cn(PLATE_BASE, "top-[96px] group-hover:top-[112px] bg-ink opacity-90")}
        style={{ transform: ISO_TRANSFORM }}
      />
      {/* 2. Glass plate */}
      <div
        className={cn(
          PLATE_BASE,
          "top-[64px] group-hover:top-[70px] bg-[rgba(250,249,245,0.45)] border border-ink/20 backdrop-blur-sm"
        )}
        style={{ transform: ISO_TRANSFORM }}
      />
      {/* 3. Glass blue plate */}
      <div
        className={cn(
          PLATE_BASE,
          "top-[32px] group-hover:top-[26px] bg-[rgba(217,230,248,0.55)] border border-[rgba(0,47,211,0.15)]"
        )}
        style={{ transform: ISO_TRANSFORM }}
      />
      {/* 4. Brand plate */}
      <div
        className={cn(
          PLATE_BASE,
          "top-0 group-hover:top-[-16px] bg-ember shadow-soft flex items-center justify-center"
        )}
        style={{ transform: ISO_TRANSFORM }}
      >
        {/* Logo skews with the plate; intentional isometric look */}
        <LogoIcon className="size-10 text-white" />
      </div>

      {/* Floating telemetry chips */}
      <div className={cn(CHIP_BASE, "top-[8%] right-[4%]")}>
        STOPPAGE &middot; AISLE 9 &middot; 14:02
      </div>
      <div className={cn(CHIP_BASE, "bottom-[10%] left-[2%]")}>
        SW v2.4.1 &rarr; v2.5.0
      </div>
      <div className={cn(CHIP_BASE, "top-[38%] left-0 opacity-70 scale-90")}>
        HUMAN INTERVENTION &middot; 6 MIN
      </div>
    </div>
  );
}
