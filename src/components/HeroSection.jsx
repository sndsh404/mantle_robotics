import { memo } from 'react'
import { cn } from '../lib/cn.js'

const BackgroundVideo = memo(function BackgroundVideo() {
  return (
    <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/upscaled-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
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
      style={{ fontFamily: "'Inter', sans-serif" }}
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
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-black">
        <BackgroundVideo />

        <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-[1440px] mt-[40px]">
          <p
            className="mb-8 font-medium text-[16px] sm:text-[18px] tracking-[0.5px] uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-[#CBEFAC] to-[#0A934D]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Datadog and Sentry for the physical world
          </p>

          <h1
            className="font-medium text-[42px] md:text-[56px] lg:text-[68px] leading-[1.1] md:leading-[1.05] tracking-[-1px] md:tracking-[-2.15px] text-[#F5F3EF] text-center max-w-[760px] mb-8"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Know why your robot failed before your coffee gets cold
          </h1>

          <p
            className="font-normal text-[16px] md:text-[18px] leading-[1.5] text-[#9CA3AF] text-center max-w-[500px] mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Mantle Robotics captures the seconds before every failure, groups
            identical incidents across your fleet, and replays exactly what
            the robot saw — cutting diagnosis from days to minutes.
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
