import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const assurances = [
  "Encrypted in transit and at rest",
  "Never shared across customers",
  "You control retention",
];

const partners = [
  { name: "MERIDIAN ROBOTICS", className: "font-mono text-[13px] tracking-[0.2em]" },
  { name: "Northline", className: "font-serif italic text-[21px]" },
  { name: "HELIOSTAT", className: "font-sans font-extrabold text-[16px] tracking-widest" },
  { name: "Palletra Logistics", className: "font-serif text-[19px]" },
  { name: "voltfleet", className: "font-sans font-bold lowercase text-[18px]" },
  { name: "ASTERION DYNAMICS", className: "font-mono text-[12px] tracking-[0.15em]" },
  { name: "Ridgeline Inspection", className: "font-serif italic text-[20px]" },
  { name: "IRONWOOD LOGISTICS", className: "font-sans font-extrabold text-[15px] tracking-[0.18em]" },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "We used to lose a morning to every stoppage. Now the on-call engineer opens the issue, watches the replay, and knows the root cause before their coffee's cold.",
    name: "Dana Whitfield",
    role: "VP OPERATIONS · NORTHLINE",
    initials: "DW",

  },
  {
    quote:
      "Fifty alerts turned into one issue the first week we turned it on. Half our 'random' failures weren't random at all, they were the same bug on different robots.",
    name: "Marcus Oyelaran",
    role: "FLEET ENGINEERING LEAD · MERIDIAN ROBOTICS",
    initials: "MO",

  },
  {
    quote:
      "The agent found two perception failures in a lighting condition our simulator never modeled. We shipped the fix before it ever caused a real stoppage.",
    name: "Priya Raghavan",
    role: "CTO · HELIOSTAT",
    initials: "PR",

  },
  {
    quote:
      "Our inspection drones fly out of radio range for hours at a time. Getting the rolling buffer back from the last thirty seconds before a drop is the whole product for us.",
    name: "Tomás Ferreira",
    role: "HEAD OF AUTOMATION · RIDGELINE INSPECTION",
    initials: "TF",

  },
  {
    quote:
      "It plugged into our existing ROS 2 stack in an afternoon. No replatforming, no new hardware, just a small exporter and a dashboard that actually tells us something.",
    name: "Ingrid Halvorsen",
    role: "ROBOTICS LEAD · VOLTFLEET",
    initials: "IH",

  },
  {
    quote:
      "When a customer asked exactly what went wrong on their floor, we sent them a link instead of a support ticket. That replay closed the account review in one meeting.",
    name: "Yusuf Adeyemi",
    role: "DIRECTOR OF OPERATIONS · IRONWOOD LOGISTICS",
    initials: "YA",

  },
];

function PartnerRow() {
  return (
    <div className="marquee-row flex items-center">
      {partners.map((partner) => (
        <span
          key={partner.name}
          className={cn(
            "flex h-12 w-[200px] shrink-0 items-center justify-center whitespace-nowrap text-white/65 transition-colors duration-300 hover:text-white",
            partner.className
          )}
        >
          {partner.name}
        </span>
      ))}
    </div>
  );
}

function TestimonialRow() {
  return (
    <div className="marquee-row flex items-stretch gap-4 pr-4">
      {testimonials.map((testimonial) => (
        <figure
          key={testimonial.name}
          className="flex h-[280px] w-[360px] shrink-0 flex-col gap-5 rounded-[12px] border border-white/10 bg-white/[0.05] p-6"
        >
          <blockquote className="flex-1 font-serif text-[16px] italic leading-relaxed text-white/90">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="flex items-center gap-3 border-t border-white/10 pt-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface font-sans text-[12px] font-bold text-ink">
              {testimonial.initials}
            </span>
            <span>
              <span className="block font-sans text-[13px] font-semibold text-white">
                {testimonial.name}
              </span>
              <span className="mono-label mt-0.5 block text-[10px] text-white/65">
                {testimonial.role}
              </span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function TrustSection() {
  return (
    <section id="trust" className="bg-night py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <p className="mono-label text-center text-white/65">
            TRUST &amp; DATA SECURITY
          </p>
          <h2 className="mx-auto mt-8 max-w-[26ch] text-center font-serif text-[clamp(34px,4.5vw,54px)] leading-[1.08] tracking-[-0.02em] text-white">
            Your fleet&apos;s data stays yours.{" "}
            <span className="text-white/65">
              Telemetry is captured on your robots and encrypted end to end.
              Nothing is ever shared across customers.
            </span>
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-0 sm:divide-x sm:divide-white/15">
            {assurances.map((label) => (
              <span
                key={label}
                className="font-mono text-[13px] text-white/75 sm:px-6"
              >
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-16">
        <p className="mono-label text-center text-white/60">
          TRUSTED BY FLEET AND ROBOTICS ENGINEERING TEAMS
        </p>
        <div
          className="marquee marquee-fade-night mt-8"
          style={{ "--marquee-duration": "32s" } as React.CSSProperties}
        >
          <div className="marquee-track items-center">
            <PartnerRow />
            <div aria-hidden="true" className="contents">
              <PartnerRow />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150} className="mt-14">
        <div
          className="marquee marquee-fade-night"
          style={{ "--marquee-duration": "56s" } as React.CSSProperties}
        >
          <div className="marquee-track">
            <TestimonialRow />
            <div aria-hidden="true" className="contents">
              <TestimonialRow />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
