import type { Metadata } from "next";
import { ProblemSection } from "@/components/ProblemSection";
import { PageFlow } from "@/components/PageFlow";
import { CtaPanel } from "@/components/CtaPanel";

export const metadata: Metadata = {
  title: "The Problem",
  description:
    "When a robot freezes, there's no stack trace. See why teams end up debugging every fleet failure blind, one robot at a time.",
};

export default function ProblemPage() {
  return (
    <main className="flex-1 bg-cream pt-16">
      <ProblemSection />
      <PageFlow
        prev={{ label: "HOME", href: "/" }}
        next={{ label: "PLATFORM", href: "/platform" }}
      />
      <CtaPanel />
    </main>
  );
}
