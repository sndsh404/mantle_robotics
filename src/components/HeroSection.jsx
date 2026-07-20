import { memo } from 'react'
import { cn } from '../lib/cn.js'

const TAGLINE = 'The debugging platform for robot fleets.'

const HeroBackground = memo(function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,243,239,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,239,0.14) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage:
            'radial-gradient(ellipse 75% 65% at 50% 40%, black 45%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 65% at 50% 40%, black 45%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 32%, rgba(10,147,77,0.32), transparent 70%)',
        }}
      />
    </div>
  )
})

function CTAButton({ variant = 'primary', className, children, ...props }) {
  const base =
    'flex justify-center items-center px-5 py-3 rounded-[50px] text-[15px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap'
  const variants = {
    primary: 'bg-[#F5F3EF] text-black hover:bg-white border border-transparent',
    secondary: 'border border-[rgba(255,255,255,0.15)] text-white hover:bg-white/10',
  }
  return (
    <a
      className={cn(base, variants[variant], className)}
      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
      {...props}
    >
      {children}
    </a>
  )
}

export default function HeroSection() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-black">
        <HeroBackground />

        <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-[1440px] mt-[40px]">
          <p
            className="mb-6 text-[13px] sm:text-[14px] tracking-[3px] uppercase text-center text-[#9CA3AF]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Mantle Robotics
          </p>

          <h1
            className="font-medium text-[38px] md:text-[52px] lg:text-[62px] leading-[1.15] md:leading-[1.1] tracking-[-1px] md:tracking-[-1.5px] text-[#F5F3EF] text-center max-w-[780px] mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {TAGLINE}
          </h1>

          <p
            className="font-normal text-[16px] md:text-[18px] leading-[1.6] text-[#9CA3AF] text-center max-w-[540px] mb-12"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            We capture the moments before a robot fails, group repeated
            failures across your fleet into a single issue, and let you
            replay exactly what happened in the browser.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <CTAButton
              variant="primary"
              href="#get-started"
              className="w-full sm:w-auto min-w-[140px] h-[48px]"
            >
              Get started free
            </CTAButton>
            <CTAButton
              variant="secondary"
              href="#contact"
              className="w-full sm:w-auto min-w-[140px] h-[48px] rounded-full px-8"
            >
              Talk to us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
