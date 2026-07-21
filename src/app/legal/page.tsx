import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Privacy, terms, and disclosures for the Mantle Robotics concept demo.",
};

export default function LegalPage() {
  return (
    <main className="flex-1 bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-[760px] px-6">
        <h1 className="font-serif text-[clamp(36px,5vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
          Legal
        </h1>
        <p className="mt-6 font-sans text-[17px] leading-relaxed text-ink-muted">
          Concept demo. Full policies to come.
        </p>
      </div>
    </main>
  );
}
