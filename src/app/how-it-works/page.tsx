import type { Metadata } from "next";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PageFlow } from "@/components/PageFlow";
import { CtaPanel } from "@/components/CtaPanel";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Install the capture agent, watch failures roll in already deduped, and replay any issue in the browser. Live in an afternoon, not a quarter.",
};

export default function HowItWorksPage() {
  return (
    <main className="flex-1 bg-cream pt-16">
      <HowItWorksSection />
      <PageFlow
        prev={{ label: "PRODUCTS", href: "/products" }}
        next={{ label: "GET STARTED", href: "/#cta" }}
      />
      <CtaPanel />
    </main>
  );
}
