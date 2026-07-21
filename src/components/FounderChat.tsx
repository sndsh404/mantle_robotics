"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const DISMISS_KEY = "founder-chat-dismissed";
const AUTO_OPENED_KEY = "founder-chat-auto-opened";

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={cn("size-5", className)} aria-hidden="true">
      <path
        d="M3 6.5A3.5 3.5 0 0 1 6.5 3h7A3.5 3.5 0 0 1 17 6.5v4a3.5 3.5 0 0 1-3.5 3.5H9l-3.6 3v-3.2A3.5 3.5 0 0 1 3 10.5v-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6.8 8.2h6.4M6.8 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

interface FounderCardProps {
  onClose: () => void;
  className?: string;
}

/** Dark founder-chooser card: avatars, message, two cal.com buttons. Reused by the chat popup and the CTA chooser. */
export function FounderCard({ onClose, className }: FounderCardProps) {
  return (
    <div
      className={cn(
        "relative w-[300px] rounded-[12px] border border-white/10 bg-night p-5 shadow-[0_16px_40px_rgba(13,17,23,0.45)]",
        className
      )}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss"
        className="absolute right-3 top-3 flex size-6 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
      >
        <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
          <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <div className="flex -space-x-2">
        <span className="flex size-9 items-center justify-center rounded-full bg-surface font-sans text-[12px] font-bold text-ink ring-2 ring-night">
          A
        </span>
        <span className="flex size-9 items-center justify-center rounded-full bg-surface font-sans text-[12px] font-bold text-ink ring-2 ring-night">
          S
        </span>
      </div>

      <p className="mt-3 font-sans text-[14px] leading-relaxed text-white/85">
        Hey, real people here. We&apos;re the founders. Grab 30 minutes with
        either of us.
      </p>

      <div className="mt-4 flex flex-col gap-2">
        <a
          href="https://cal.com/aamod-paudel-connect"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-ember px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#FAF9F5] transition hover:brightness-110"
        >
          TALK TO AAMOD
          <ArrowUpRightIcon />
        </a>
        <a
          href="https://cal.com/sandesh-bhandari"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-white/25 px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
        >
          TALK TO SANDESH
          <ArrowUpRightIcon />
        </a>
      </div>
    </div>
  );
}

/**
 * Floating founder-chat bubble. Auto-opens once per session, homepage only,
 * when the trust section scrolls into view (~60% of the page); a 60%-scroll
 * listener acts as a fallback if the section is missing.
 */
export function FounderChat() {
  const [open, setOpen] = useState(false);
  const autoOpened = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    if (
      sessionStorage.getItem(DISMISS_KEY) ||
      sessionStorage.getItem(AUTO_OPENED_KEY)
    ) {
      return;
    }

    const trigger = () => {
      if (autoOpened.current) return;
      autoOpened.current = true;
      sessionStorage.setItem(AUTO_OPENED_KEY, "1");
      setOpen(true);
    };

    const trust = document.getElementById("trust");
    if (trust) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            trigger();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(trust);
      return () => observer.disconnect();
    }

    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= 0.6) {
        trigger();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const dismiss = () => {
    setOpen(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
    autoOpened.current = true;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && <FounderCard onClose={dismiss} />}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close founder chat" : "Open founder chat"}
        className="flex size-13 items-center justify-center rounded-full bg-ember text-[#FAF9F5] shadow-soft transition hover:-translate-y-0.5 hover:brightness-110"
      >
        <ChatIcon />
      </button>
    </div>
  );
}
