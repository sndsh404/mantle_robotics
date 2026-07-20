const STEPS = [
  {
    step: '01',
    title: 'Edge agent',
    body: 'A lightweight agent subscribes to the robot’s data bus and watches for trouble, using under 5% of one CPU core.',
  },
  {
    step: '02',
    title: 'Rolling buffer',
    body: 'The last 30–60 seconds of full-detail sensor data stay in memory, like a dashcam that only saves when something happens.',
  },
  {
    step: '03',
    title: 'Cloud engine',
    body: 'When a failure fires, the captured window uploads as one self-contained bundle — resumable, even offline for days.',
  },
  {
    step: '04',
    title: 'Classifier',
    body: 'Fifty robots failing the same way become one issue instead of fifty alerts, fingerprinted and grouped automatically.',
  },
  {
    step: '05',
    title: 'Replay',
    body: 'Scrub a synchronized 3D replay of the robot’s final minute in the browser — the way a debugger steps through code.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-black py-24 px-4 border-t border-white/10">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <p
          className="mb-4 font-medium text-[14px] tracking-[0.5px] uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-[#CBEFAC] to-[#0A934D]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          How it works
        </p>
        <h2
          className="font-medium text-[32px] md:text-[40px] leading-[1.15] tracking-[-1px] text-[#F5F3EF] text-center max-w-[640px] mb-6"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Five pieces, one incident loop
        </h2>
        <p
          className="text-[16px] leading-[1.5] text-[#9CA3AF] text-center max-w-[560px] mb-16"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          One agent install. Zero required schema work. Value arrives in
          minutes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full mb-16">
          {STEPS.map((s) => (
            <div key={s.step} className="flex flex-col items-start text-left">
              <span
                className="text-[13px] text-[#0A934D] mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.step}
              </span>
              <h3
                className="text-[18px] font-medium text-[#F5F3EF] mb-2"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {s.title}
              </h3>
              <p
                className="text-[14px] leading-[1.5] text-[#9CA3AF]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[640px] rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6">
          <p
            className="text-[13px] uppercase tracking-[0.5px] text-[#6B7280] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Issue #47
          </p>
          <p
            className="text-[16px] leading-[1.6] text-[#F5F3EF]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Freeze after dock approach — 12 occurrences across 8 robots,
            first seen after release 2.4.1.
          </p>
        </div>
      </div>
    </section>
  )
}
