const STATS = [
  {
    value: '1–3 days',
    label: 'to diagnose a single robot failure today',
    source: 'Practitioner interviews',
  },
  {
    value: '$125K–$260K',
    label: 'lost per hour of unplanned downtime',
    source: 'ABB / Aberdeen Research',
  },
  {
    value: '20–40%',
    label: 'of senior engineering time spent on log archaeology',
    source: 'Autonomy lead interviews',
  },
]

export default function ProblemStats() {
  return (
    <section className="relative w-full bg-black py-24 px-4">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <p
          className="mb-4 font-medium text-[14px] tracking-[0.5px] uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-[#CBEFAC] to-[#0A934D]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          The problem
        </p>
        <h2
          className="font-medium text-[32px] md:text-[40px] leading-[1.15] tracking-[-1px] text-[#F5F3EF] text-center max-w-[640px] mb-16"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          When a robot freezes, there's no stack trace
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span
                className="font-medium text-[36px] md:text-[44px] tracking-[-1px] text-[#F5F3EF] mb-3"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {stat.value}
              </span>
              <p
                className="text-[15px] leading-[1.5] text-[#9CA3AF] max-w-[260px] mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
              <span
                className="text-[12px] uppercase tracking-[0.5px] text-[#6B7280]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.source}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
