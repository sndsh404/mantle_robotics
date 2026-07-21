import { HeroSection } from "@/components/HeroSection";
import { StatStrip } from "@/components/StatStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { PlatformSection } from "@/components/PlatformSection";
import { ProductsGrid } from "@/components/ProductsGrid";
import { TrustSection } from "@/components/TrustSection";
import { WhyItWorksSection } from "@/components/WhyItWorksSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CtaPanel } from "@/components/CtaPanel";

export default function Home() {
  return (
    <main className="flex-1 bg-cream">
      <HeroSection />
      <StatStrip />
      <ProblemSection />
      <PlatformSection />
      <ProductsGrid />
      <TrustSection />
      <WhyItWorksSection />
      <HowItWorksSection />
      <CtaPanel />
    </main>
  );
}
