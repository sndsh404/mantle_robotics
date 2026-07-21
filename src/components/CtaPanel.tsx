import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { TalkToFounders } from "@/components/TalkToFounders";

export function CtaPanel() {
  return (
    <section id="cta" className="bg-cream px-6 pt-10 pb-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[20px] border-t-4 border-ember bg-night px-8 py-20 text-center md:py-24">
          <div className="grain absolute inset-0 pointer-events-none" />
          <Reveal className="relative z-10 flex flex-col items-center">
            <p className="mono-label text-white/75">MANTLE FOR FLEETS</p>
            <h2 className="mt-5 max-w-[22ch] font-serif text-[clamp(34px,4.5vw,56px)] font-light leading-[1.05] tracking-[-0.02em] text-[#FAFAFA]">
              See exactly what your robot saw.
            </h2>
            <p className="mt-5 max-w-[54ch] font-sans text-[16px] text-white/80">
              A live view of every failure across your fleet, grouped into
              issues instead of alerts, with a replay ready the moment
              something goes wrong. Walk through it with our team in thirty
              minutes.
            </p>
            <div className="mt-9 flex w-full flex-col flex-wrap justify-center gap-3 sm:w-auto sm:flex-row">
              <a
                href="mailto:hello@mantlerobotics.com"
                className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-ember px-6 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-[#FAF9F5] transition hover:-translate-y-px hover:brightness-110"
              >
                GET STARTED FREE
                <ArrowRightIcon />
              </a>
              <TalkToFounders />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
