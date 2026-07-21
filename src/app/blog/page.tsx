import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LogoIcon, ArrowRightIcon } from "@/components/icons";
import { posts } from "@/lib/blog";
import { CtaPanel } from "@/components/CtaPanel";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes from the debugging platform: capture, deduplication, replay, and what real fleet failures teach us.",
};

export default function BlogPage() {
  return (
    <main className="flex-1 bg-cream pt-24 pb-8">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header: cover tile + heading panel */}
        <div className="grid gap-4 md:grid-cols-[260px_1fr]">
          <div className="blueprint-grid corner-dots relative hidden items-center justify-center rounded-[16px] md:flex">
            <div className="corner-dots-b" />
            <LogoIcon className="size-16 text-ember" />
          </div>
          <div className="rounded-[16px] bg-surface px-8 py-10 shadow-soft md:px-12">
            <h1 className="font-serif text-[clamp(40px,5vw,56px)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
              Blog
            </h1>
            <p className="mt-4 font-sans text-[17px] text-ink-muted">
              Field notes from the debugging platform.
            </p>
          </div>
        </div>

        {/* Post grid */}
        <Reveal className="mt-10 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-[16px] bg-surface p-4 shadow-soft transition duration-300 hover:-translate-y-1"
            >
              <div
                className="flex aspect-[16/8] items-center justify-center overflow-hidden rounded-[12px] px-8"
                style={{ background: post.cover }}
              >
                <span
                  aria-hidden="true"
                  className="select-none text-center font-serif text-[clamp(20px,2vw,26px)] font-light leading-snug text-[#FAF9F5] [text-shadow:0_1px_12px_rgba(13,17,23,0.35)]"
                >
                  {post.title}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 px-3 pb-3 pt-5">
                <div className="flex items-center gap-3">
                  <span className="mono-label text-[10px] text-ink-muted">
                    {post.tag}
                  </span>
                  <span className="mono-label text-[10px] text-ink-faint">
                    {post.date}
                  </span>
                </div>
                <h2 className="font-sans text-[20px] font-semibold leading-snug text-ink">
                  {post.title}
                </h2>
                <p className="flex-1 text-[15px] leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
                <span className="mono-label inline-flex items-center gap-2 text-ink transition-colors group-hover:text-ember">
                  READ POST
                  <ArrowRightIcon />
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
      <CtaPanel />
    </main>
  );
}
