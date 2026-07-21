import Link from "next/link";

interface FlowLink {
  label: string;
  href: string;
}

interface PageFlowProps {
  prev?: FlowLink;
  next?: FlowLink;
}

/** Prev/next pager rendered at the bottom of each section page, above the footer. */
export function PageFlow({ prev, next }: PageFlowProps) {
  return (
    <div className="border-t border-ink/12 bg-cream px-6">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between py-10">
        {prev ? (
          <Link
            href={prev.href}
            className="mono-label inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
          >
            <span aria-hidden="true">←</span>
            {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={next.href}
            className="mono-label inline-flex items-center gap-2 text-ink transition-colors hover:text-ember"
          >
            {next.label}
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
