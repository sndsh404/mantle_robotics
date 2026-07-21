import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/blog";
import { CtaPanel } from "@/components/CtaPanel";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? post.title : "Blog" };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="flex-1 bg-cream pt-28 pb-16">
      <article className="mx-auto max-w-[760px] px-6">
        <Link
          href="/blog"
          className="mono-label inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
        >
          <span aria-hidden="true">←</span>
          ALL POSTS
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <span className="mono-label text-[10px] text-ink-muted">
            {post.tag}
          </span>
          <span className="mono-label text-[10px] text-ink-faint">
            {post.date}
          </span>
        </div>

        <h1 className="mt-5 font-serif text-[clamp(32px,4.5vw,48px)] font-light leading-[1.08] tracking-[-0.02em] text-ink">
          {post.title}
        </h1>

        <div
          className="mt-8 aspect-[16/6] rounded-[12px]"
          style={{ background: post.cover }}
        />

        <div className="mt-10 space-y-6">
          {post.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="font-sans text-[17px] leading-relaxed text-ink-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 border-t border-ink/12 pt-8">
          <Link
            href="/blog"
            className="mono-label inline-flex items-center gap-2 text-ink transition-colors hover:text-ember"
          >
            <span aria-hidden="true">←</span>
            BACK TO ALL POSTS
          </Link>
        </div>
      </article>
      <CtaPanel />
    </main>
  );
}
