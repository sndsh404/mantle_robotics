import { LogoIcon } from "@/components/icons";
import { RollingText } from "@/components/RollingText";

/* Self-drawn circular seal marks — monochrome, no official certification-body logos. */

function SealSoc2({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 2.4" opacity="0.6" />
      <path
        d="M16 9.5 21 11.4v4.1c0 3.1-2 5.2-5 6.4-3-1.2-5-3.3-5-6.4v-4.1L16 9.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M13.8 15.6 15.3 17.1 18.2 13.9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SealIso({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 2.4" opacity="0.6" />
      <text
        x="16"
        y="14.8"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        className="select-none"
        style={{ font: "700 6px ui-monospace, monospace" }}
      >
        ISO
      </text>
      <text
        x="16"
        y="21.6"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        className="select-none"
        style={{ font: "700 5.4px ui-monospace, monospace" }}
      >
        27001
      </text>
    </svg>
  );
}

function SealGdpr({ className }: { className?: string }) {
  const stars = Array.from({ length: 12 }, (_, index) => {
    const angle = (index / 12) * Math.PI * 2 - Math.PI / 2;
    return {
      x: 16 + Math.cos(angle) * 11,
      y: 16 + Math.sin(angle) * 11,
    };
  });
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.4" />
      {stars.map((star, index) => (
        <circle key={index} cx={star.x} cy={star.y} r="0.9" fill="currentColor" stroke="none" />
      ))}
      <text
        x="16"
        y="18.2"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        className="select-none"
        style={{ font: "700 5.6px ui-monospace, monospace" }}
      >
        GDPR
      </text>
    </svg>
  );
}

interface FooterLink {
  label: string;
  href: string;
}

interface LinkColumn {
  heading: string;
  links: FooterLink[];
}

const columns: LinkColumn[] = [
  {
    heading: "PLATFORM",
    links: [
      { label: "Capture Agent", href: "/platform" },
      { label: "Deduplication", href: "/platform" },
      { label: "Replay Viewer", href: "/how-it-works" },
      { label: "Dashboard", href: "/how-it-works" },
    ],
  },
  {
    heading: "PRODUCTS",
    links: [
      { label: "Starter", href: "/products" },
      { label: "Team", href: "/products" },
      { label: "Fleet", href: "/products" },
      { label: "Incident Review", href: "/products" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About", href: "/" },
      { label: "Customers", href: "/products" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/#cta" },
    ],
  },
  {
    heading: "LEGAL",
    links: [
      { label: "Privacy", href: "/legal" },
      { label: "Terms", href: "/legal" },
      { label: "Disclosures", href: "/legal" },
    ],
  },
];

const complianceBadges = [
  { label: "SOC 2 TYPE 2", status: "IN PROGRESS", seal: SealSoc2 },
  { label: "ISO 27001", status: "IN PROGRESS", seal: SealIso },
  { label: "GDPR", status: "IN PROGRESS", seal: SealGdpr },
];

export function SiteFooter() {
  return (
    <footer className="bg-night text-[#FAF9F5] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <LogoIcon className="size-7 text-ember" />
            <span className="font-sans font-extrabold text-[20px]">
              Mantle Robotics
            </span>
          </div>
          <p className="text-[15px] text-white/75 mt-3 max-w-[26ch]">
            The debugging platform for robot fleets. Capture the moment, ship the fix.
          </p>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/60 mt-6">
            BUILT FOR ROS 2 FLEETS
          </div>
          <div className="mt-6 flex gap-2">
            {complianceBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex w-[92px] flex-col items-center gap-1.5 border border-white/12 bg-white/[0.03] px-2 py-2.5 text-white/80"
              >
                <badge.seal className="size-8" />
                <span className="text-center font-mono text-[10px] uppercase leading-tight tracking-[0.06em] text-white/75">
                  {badge.label}
                </span>
                <span className="text-center font-mono text-[9px] uppercase tracking-[0.06em] text-white/60">
                  IN PROGRESS
                </span>
              </div>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.heading} className="md:border-l md:border-white/10 md:pl-8">
            <h3 className="mono-label text-white/65">{column.heading}</h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group block font-sans text-[14px] text-white/80 transition-colors hover:text-ember"
                  >
                    <RollingText>{link.label}</RollingText>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/60">
            © 2026 MANTLE ROBOTICS INC. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/70">
            CONCEPT DEMO. COMPANIES AND TESTIMONIALS SHOWN ARE ILLUSTRATIVE.
          </span>
        </div>
      </div>
    </footer>
  );
}
