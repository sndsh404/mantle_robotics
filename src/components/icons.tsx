import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

/** Mantle Robotics logomark — three stacked rhombus plates from the FIG.01 layer graphic, top plate ember. */
export function LogoIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("size-6", className)}
      aria-hidden="true"
    >
      <path d="M12 13.5 19 18 12 22.5 5 18 12 13.5Z" fill="currentColor" opacity="0.35" />
      <path d="M12 7.5 19 12 12 16.5 5 12 12 7.5Z" fill="currentColor" opacity="0.75" />
      <path d="M12 1.5 19 6 12 10.5 5 6 12 1.5Z" fill="#F2612B" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={cn("size-3.5", className)}
      aria-hidden="true"
    >
      <path
        d="M4.5 11.5 11.5 4.5M11.5 4.5H5.8M11.5 4.5v5.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={cn("size-3.5", className)}
      aria-hidden="true"
    >
      <path
        d="M2.5 8h11M9.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** tutor-style arrow-in-circle button suffix. */
export function CircleArrowIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("size-4", className)}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.9" />
      <path
        d="M6.5 10h7M10.5 7l3 3-3 3"
        stroke="var(--pw-surface)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className={cn("size-3", className)}
      aria-hidden="true"
    >
      <path
        d="M6 1.5v9M1.5 6h9"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DotIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 8 8"
      className={cn("size-2", className)}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="3" fill="currentColor" />
    </svg>
  );
}

export function RegressionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("size-4", className)} aria-hidden="true">
      <path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 2.5v2.6h-2.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 8.5 7.5 10 10.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PerceptionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("size-4", className)} aria-hidden="true">
      <path d="M1.8 8s2.2-4.2 6.2-4.2S14.2 8 14.2 8 12 12.2 8 12.2 1.8 8 1.8 8Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function InterventionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("size-4", className)} aria-hidden="true">
      <path d="M8 13.5V8M8 8 5 5M8 8l3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="5" cy="3.4" r="1.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="11" cy="3.4" r="1.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function WearIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("size-4", className)} aria-hidden="true">
      <path d="M8 5.2V2.2M10 6l2.1-2.1M10.8 8h3M10 10l2.1 2.1M8 10.8v3M6 10 3.9 12.1M5.2 8h-3M6 6 3.9 3.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="8" r="1.6" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function DriftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("size-4", className)} aria-hidden="true">
      <path d="M2 4.5h7.5M11.5 4.5h2.5M13 3l1.5 1.5L13 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11.5H6.5M4.5 11.5H2M3.5 10 2 11.5 3.5 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("size-4", className)} aria-hidden="true">
      <path d="M8 1.8 13 3.6v4.2c0 3.2-2.1 5.3-5 6.4-2.9-1.1-5-3.2-5-6.4V3.6L8 1.8Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M5.8 8 7.3 9.5 10.2 6.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("size-4", className)} aria-hidden="true">
      <rect x="3" y="7" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 9.8v1.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("size-4", className)} aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h12M8 2c1.8 1.7 2.7 3.8 2.7 6S9.8 12.3 8 14C6.2 12.3 5.3 10.2 5.3 8S6.2 3.7 8 2Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function KeyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("size-4", className)} aria-hidden="true">
      <circle cx="5.5" cy="10.5" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 8 13.5 2.5M11.5 4.5l2 2M9.8 6.2l1.6 1.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
