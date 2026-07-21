"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Blocky square back-to-top button. Appears only after two full viewport
 * heights of scroll and stacks directly above the founder-chat bubble.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        // chat bubble: size-13 (52px) at bottom-6 right-6; arrow (44px) sits
        // 16px above it, centered on the same vertical axis
        "fixed bottom-[92px] right-7 z-40 flex size-11 items-center justify-center bg-ink text-[#FAF9F5]",
        "transition-opacity duration-300",
        "hover:bg-ember [transition:opacity_0.3s_ease,background-color_0.075s_steps(1,end)]",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <svg viewBox="0 0 16 16" fill="none" className="size-4" aria-hidden="true">
        <path
          d="M8 13V3M3.5 7.5 8 3l4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="square"
        />
      </svg>
    </button>
  );
}
