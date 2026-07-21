import { cn } from "@/lib/utils";

interface RollingTextProps {
  children: string;
  /** Line height class controlling the visible window, e.g. "h-5 leading-5". */
  sizeClassName?: string;
}

/**
 * Roll-up hover label (tester.army technique): a fixed-height overflow-hidden
 * column holds the text plus an ::after duplicate; on parent `.group` hover
 * both translate up 100%, so the duplicate slides in from below. The duplicate
 * lives in a pseudo-element so it never appears in copied text, find-in-page,
 * or the accessibility tree. Parent must have `group`.
 */
export function RollingText({
  children,
  sizeClassName = "h-5 leading-5",
}: RollingTextProps) {
  return (
    <span
      data-text={children}
      className={cn(
        "flex flex-col overflow-hidden",
        "after:shrink-0 after:content-[attr(data-text)] after:transition-transform after:duration-300 after:ease-out group-hover:after:-translate-y-full",
        sizeClassName
      )}
    >
      <span className="shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
    </span>
  );
}
