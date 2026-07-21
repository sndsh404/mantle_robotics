"use client";

import { useState } from "react";
import { FounderCard } from "@/components/FounderChat";

/** CTA button that opens the founder chooser card anchored above it. */
export function TalkToFounders() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {open && (
        <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2">
          <FounderCard onClose={() => setOpen(false)} className="text-left" />
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-[4px] border border-white/25 px-6 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:-translate-y-px hover:bg-white/10 sm:w-auto"
      >
        TALK TO FOUNDERS
      </button>
    </div>
  );
}
