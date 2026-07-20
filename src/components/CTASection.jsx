import { cn } from '../lib/cn.js'

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

export default function CTASection() {
  return (
    <section
      id="get-started"
      className="relative w-full bg-black py-24 px-4 border-t border-white/10"
    >
      <div className="max-w-[720px] mx-auto flex flex-col items-center">
        <h2
          className="font-medium text-[32px] md:text-[40px] leading-[1.15] tracking-[-1px] text-[#F5F3EF] text-center mb-6"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Bring observability to your fleet
        </h2>
        <p
          className="text-[16px] leading-[1.5] text-[#9CA3AF] text-center max-w-[480px] mb-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Free for a two-person team to adopt in an afternoon. Built for
          warehouse robots, inspection drones, and any fleet running ROS 2.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <CTAButton
            variant="primary"
            href="mailto:hello@mantlerobotics.com"
            className="w-full sm:w-auto min-w-[140px] h-[48px]"
          >
            Get started free
          </CTAButton>
          <CTAButton
            variant="secondary"
            href="#contact"
            className="w-full sm:w-auto min-w-[140px] h-[48px] rounded-full px-8"
          >
            Contact sales
          </CTAButton>
        </div>
      </div>

      <footer
        id="contact"
        className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[1100px] mx-auto text-[13px] text-[#6B7280]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <span>© 2026 Mantle Robotics Inc</span>
        <a href="mailto:hello@mantlerobotics.com" className="hover:text-[#F5F3EF] transition-colors">
          hello@mantlerobotics.com
        </a>
      </footer>
    </section>
  )
}
