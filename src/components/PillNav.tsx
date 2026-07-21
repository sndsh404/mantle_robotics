"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "@/components/icons";
import { RollingText } from "@/components/RollingText";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "PROBLEM", href: "/problem" },
  { label: "PLATFORM", href: "/platform" },
  { label: "PRODUCTS", href: "/products" },
  { label: "HOW IT WORKS", href: "/how-it-works" },
  { label: "BLOG", href: "/blog" },
];

export function PillNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-[10px] z-50">
      <nav
        className={cn(
          "mx-auto flex h-16 w-[calc(100%-32px)] max-w-[1200px] items-center justify-between rounded-[100px] border border-white/10 px-6 backdrop-blur-[12px]",
          "shadow-[0_10px_24px_rgba(13,17,23,0.18)]",
          "[transition:background-color_0.3s_ease,box-shadow_0.3s_ease]",
          scrolled ? "bg-[rgba(24,26,32,0.85)]" : "bg-[rgba(24,26,32,0.55)]"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <LogoIcon className="size-6 text-[#FAF9F5]" />
          <span className="font-sans text-[18px] font-extrabold tracking-tight text-[#FAF9F5]">
            Mantle
          </span>
        </Link>

        <div className="hidden items-center md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group rounded-[5px] px-3 py-1.5 font-mono text-[12px] font-medium uppercase tracking-[0.08em] transition-colors duration-200",
                  active
                    ? "bg-white/[0.12] text-white"
                    : "text-[rgba(250,250,250,0.85)] hover:bg-white/[0.08] hover:text-white"
                )}
              >
                <RollingText sizeClassName="h-[18px] leading-[18px]">
                  {link.label}
                </RollingText>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/#cta"
            className="rounded-full bg-ember px-[18px] py-2.5 font-mono text-[12px] font-bold uppercase text-[#FAF9F5] transition-all duration-200 hover:-translate-y-px hover:brightness-[1.08]"
          >
            GET STARTED
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="flex size-10 items-center justify-center rounded-full text-[#FAF9F5] transition-colors hover:bg-white/10 md:hidden"
          >
            <svg viewBox="0 0 20 20" fill="none" className="size-5" aria-hidden="true">
              {menuOpen ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3.5 6h13M3.5 10h13M3.5 14h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 w-[calc(100%-32px)] max-w-[1200px] rounded-[16px] border border-white/10 bg-[rgba(24,26,32,0.95)] p-2 shadow-[0_10px_24px_rgba(13,17,23,0.18)] backdrop-blur-[12px] md:hidden">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "block rounded-[8px] px-4 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.08em]",
                  active
                    ? "bg-white/[0.12] text-white"
                    : "text-[rgba(250,250,250,0.85)] hover:bg-white/[0.08] hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
