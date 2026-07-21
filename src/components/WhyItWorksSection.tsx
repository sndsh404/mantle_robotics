import { Reveal } from "@/components/Reveal";

const reasonCards = [
  {
    title: "Nothing is lost.",
    body: "The agent keeps a rolling window running at all times, so the moments right before a failure are always captured, not just the error message after.",
  },
  {
    title: "One issue, not fifty alerts.",
    body: "Every failure gets matched against every other robot hitting the same bug, so your team debugs the root cause once instead of fighting the same fire fifty times.",
  },
  {
    title: "Same tools your team already runs.",
    body: "The agent plugs into ROS 2 and MCAP, the logging stack most fleets already use. Adopting it means installing an exporter, not rebuilding anything.",
  },
  {
    title: "See it, don't guess it.",
    body: "A replay beats a log file every time. Engineers step through exactly what the robot saw instead of reconstructing it from a stack of timestamps.",
  },
];

export function WhyItWorksSection() {
  return (
    <section id="why-it-works" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[20px] border-t-4 border-ember bg-night px-8 py-16 md:px-16 md:py-20">
          <div className="grain absolute inset-0 pointer-events-none" />
          <Reveal className="relative z-10">
            <p className="mono-label text-white/75">WHY IT WORKS</p>
            <h2 className="mt-4 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-[#FAFAFA]">
              Every failure captured makes the next one faster to fix.
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {reasonCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[12px] border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:bg-white/[0.07]"
                >
                  <h3 className="font-sans text-[18px] font-bold text-[#FAFAFA]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/75">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
