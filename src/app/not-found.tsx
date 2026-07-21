import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-cream pt-32 pb-24">
      <div className="mx-auto w-full max-w-[760px] px-6">
        <p className="mono-label text-ink-muted">[404] / PAGE NOT FOUND</p>
        <h1 className="mt-4 font-serif text-[clamp(36px,5vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
          This page is off the map.
        </h1>
        <p className="mt-6 font-sans text-[17px] leading-relaxed text-ink-muted">
          The address does not match anything in our records. Head back to the
          homepage or read the blog.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-[4px] bg-ember px-6 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-[#FAF9F5] transition hover:-translate-y-px hover:brightness-110"
          >
            BACK TO HOME
            <ArrowRightIcon />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-[4px] border border-ink/20 px-6 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-px hover:bg-ink/5"
          >
            READ THE BLOG
          </Link>
        </div>
      </div>
    </main>
  );
}
