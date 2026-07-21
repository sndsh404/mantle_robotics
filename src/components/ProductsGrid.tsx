import { Reveal } from "@/components/Reveal";
import type { ProductCard } from "@/types/content";

const products: ProductCard[] = [
  {
    timeline: "STARTER",
    accent: "ember",
    title: "Starter",
    description:
      "Free for a two-person team to adopt in an afternoon. Install the agent, capture your first failures, and dedupe them across a small fleet before you commit to anything.",
    whoPays: "FOR: SMALL TEAMS & PILOTS",
    pricingShape: "PRICING: FREE, UP TO 10 ROBOTS",
  },
  {
    timeline: "CORE",
    accent: "green",
    title: "Team",
    description:
      "Full capture, deduplication, and browser replay across your whole fleet, with retention long enough to catch failures that only show up once a month.",
    whoPays: "FOR: ROBOT OPERATORS",
    pricingShape: "PRICING: PER ROBOT, MONTHLY",
  },
  {
    timeline: "SCALE",
    accent: "royal",
    title: "Fleet",
    description:
      "SSO, role-based access, and on-prem or VPC deployment for fleets that can't send telemetry off-site. Built for the warehouses and job sites where that matters most.",
    whoPays: "FOR: MULTI-SITE FLEETS",
    pricingShape: "PRICING: ANNUAL CONTRACT",
  },
  {
    timeline: "FORENSICS",
    accent: "ember",
    title: "Incident Review",
    description:
      "When a stoppage turns into a safety review or a customer escalation, our team reconstructs exactly what happened from the logs and hands over a replay every stakeholder can watch.",
    whoPays: "FOR: SAFETY & COMPLIANCE TEAMS",
    pricingShape: "PRICING: PER CASE",
  },
];

export function ProductsGrid() {
  return (
    <section id="products" className="bg-cream py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex justify-between">
          <span className="mono-label text-ink-muted">[03] / PRODUCTS</span>
        </div>

        <h2 className="mt-8 max-w-[28ch] font-sans text-[clamp(32px,4.5vw,52px)] font-light leading-[1.08] tracking-[-0.02em]">
          <span className="text-ink">One platform. Four ways to run it.</span>
          <span className="text-ink-faint">
            {" "}
            Built for pilots, fleets, and everything in between.
          </span>
        </h2>

        <Reveal className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <article
              key={product.title}
              className="corner-dots relative flex min-h-[240px] flex-col gap-4 rounded-[6px] border border-ink/12 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="corner-dots-b" />
              <div className="flex items-center justify-between">
                <span className="mono-label text-[10px] text-ink-muted">
                  {product.timeline}
                </span>
                <span className="mono-label text-[10px] text-ink-faint">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
              </div>
              <h3 className="font-sans text-[19px] font-semibold text-ink">
                {product.title}
              </h3>
              <p className="flex-1 text-[15px] leading-relaxed text-ink-muted">
                {product.description}
              </p>
              <div className="space-y-1 border-t border-ink/10 pt-3">
                <p className="mono-label text-[10px] text-ink-faint">
                  {product.whoPays}
                </p>
                <p className="mono-label text-[10px] text-ink-faint">
                  {product.pricingShape}
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
