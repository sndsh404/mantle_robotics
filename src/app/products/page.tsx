import type { Metadata } from "next";
import { ProductsGrid } from "@/components/ProductsGrid";
import { TrustSection } from "@/components/TrustSection";
import { PageFlow } from "@/components/PageFlow";
import { CtaPanel } from "@/components/CtaPanel";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Starter, Team, Fleet, and Incident Review. One debugging platform, four ways to run it, from a two-person pilot to a multi-site fleet.",
};

export default function ProductsPage() {
  return (
    <main className="flex-1 bg-cream pt-16">
      <ProductsGrid />
      <TrustSection />
      <PageFlow
        prev={{ label: "PLATFORM", href: "/platform" }}
        next={{ label: "HOW IT WORKS", href: "/how-it-works" }}
      />
      <CtaPanel />
    </main>
  );
}
