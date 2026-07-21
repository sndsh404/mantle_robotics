import { Reveal } from "@/components/Reveal";
import { FailureSurface } from "@/components/FailureSurface";
import { cn } from "@/lib/utils";

interface ProblemCard {
  value: string;
  label: string;
  caption: string;
  inverted?: boolean;
  valueClassName?: string;
}

/** Each card is fully self-contained: its value, label, and caption always render together. */
const cards: ProblemCard[] = [
  {
    value: "$125K–$260K",
    label: "LOST PER HOUR TO DOWNTIME",
    caption: "ABB, ABERDEEN RESEARCH",
    inverted: true,
  },
  {
    value: "$1.4T",
    label: "LOST EVERY YEAR, TOP 500 COMPANIES",
    caption: "SIEMENS, TRUE COST OF DOWNTIME 2024",
  },
  {
    value: "2 IN 3",
    label: "MANUFACTURERS HIT MONTHLY",
    caption: "ABB, VALUE OF RELIABILITY",
    valueClassName: "text-ember",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-cream py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex justify-between">
            <p className="mono-label text-ink-muted">[01] / THE PROBLEM</p>
          </div>
          <h2 className="mt-8 max-w-[24ch] font-sans text-[clamp(32px,4.5vw,52px)] font-light leading-[1.08] tracking-[-0.02em]">
            <span className="text-ink">
              When a robot freezes, there&apos;s no stack trace.
            </span>
            <span className="text-ink-faint">
              {" "}
              So teams debug blind, one broken robot at a time.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.value}
                className={cn(
                  "flex flex-col gap-2 rounded-[6px] p-6",
                  card.inverted
                    ? "bg-ink text-surface"
                    : "border border-ink/12 bg-surface"
                )}
              >
                <p
                  className={cn(
                    "mono-label",
                    card.inverted ? "opacity-85" : "text-ink-faint"
                  )}
                >
                  {card.label}
                </p>
                <p
                  className={cn(
                    "font-sans text-[44px] font-extrabold leading-none",
                    !card.inverted && "text-ink",
                    card.valueClassName
                  )}
                >
                  {card.value}
                </p>
                <p
                  className={cn(
                    "mono-label",
                    card.inverted ? "opacity-85" : "text-ink-muted"
                  )}
                >
                  {card.caption}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 font-sans text-[16px] leading-relaxed text-ink-muted">
              <p>
                When a web service goes down, an engineer usually knows why within
                minutes. An alert points to the exact line of code, and the fix ships
                before lunch.
              </p>
              <p>
                When a robot goes down, none of that exists. Someone gets a phone call,
                a pile of sensor logs, and a machine that might be five hundred miles
                away. Reconstructing what happened can take days, and half the time the
                moment that mattered was never recorded in the first place.
              </p>
            </div>
            <div className="space-y-5 font-sans text-[16px] leading-relaxed text-ink-muted">
              <p>
                Every stoppage looks like a one-off until someone notices it is the
                fiftieth robot to hit the exact same bug this week. Without a way to
                match failures across the fleet, every incident gets debugged from
                scratch, by whoever happens to be on call.
              </p>
              <p>
                The chain of consequences is short. No visibility means no root cause.
                No root cause means the same failure keeps shipping, one robot at a
                time, until someone finally goes looking.
              </p>
            </div>
          </div>
        </Reveal>

        <FailureSurface />

        <Reveal delay={200}>
          <div className="mt-16 border-y border-ink/12 py-10 text-center">
            <p className="font-serif text-[clamp(26px,3.2vw,38px)] font-light italic text-ink">
              &ldquo;Robots that fail silently will not scale.&rdquo;
            </p>
            <p className="mono-label mt-4 text-ink-faint">
              NO VISIBILITY → NO ROOT CAUSE → NO FIX. WE EXIST TO CLOSE THE
              LOOP.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
