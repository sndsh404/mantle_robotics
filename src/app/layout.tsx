import type { Metadata } from "next";
import { Newsreader, Manrope, JetBrains_Mono } from "next/font/google";
import { PillNav } from "@/components/PillNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FounderChat } from "@/components/FounderChat";
import { BackToTop } from "@/components/BackToTop";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mantlerobotics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mantle Robotics",
    template: "%s — Mantle Robotics",
  },
  description:
    "Mantle Robotics captures the moments before every robot failure, groups identical incidents across your fleet, and lets engineers replay exactly what happened in the browser.",
  openGraph: {
    title: "Mantle Robotics",
    description:
      "The debugging platform for robot fleets. Capture the moment before a failure, dedupe it across your fleet, and replay exactly what happened.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantle Robotics",
    description: "The debugging platform for robot fleets.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PillNav />
        {children}
        <SiteFooter />
        <FounderChat />
        <BackToTop />
      </body>
    </html>
  );
}
