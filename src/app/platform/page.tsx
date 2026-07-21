import type { Metadata } from "next";
import { PlatformSection } from "@/components/PlatformSection";
import { WhyItWorksSection } from "@/components/WhyItWorksSection";
import { PageFlow } from "@/components/PageFlow";
import { CtaPanel } from "@/components/CtaPanel";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "An always-on capture agent, fleet-wide deduplication, and one-click browser replay. Three parts, one flywheel.",
};

export default function PlatformPage() {
  return (
    <main className="flex-1 bg-cream pt-16">
      <PlatformSection />
      <WhyItWorksSection />
      <PageFlow
        prev={{ label: "THE PROBLEM", href: "/problem" }}
        next={{ label: "PRODUCTS", href: "/products" }}
      />
      <CtaPanel />
    </main>
  );
}
