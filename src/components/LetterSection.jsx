export default function LetterSection() {
  return (
    <section className="relative w-full bg-black py-24 px-4 border-t border-white/10">
      <div className="max-w-[680px] mx-auto">
        <p
          className="mb-4 font-medium text-[13px] tracking-[3px] uppercase text-[#9CA3AF]"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          A note from the founders
        </p>
        <h2
          className="font-medium text-[28px] md:text-[34px] leading-[1.2] tracking-[-0.5px] text-[#F5F3EF] mb-10"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Why we're building this
        </h2>

        <div
          className="flex flex-col gap-6 text-[16px] md:text-[17px] leading-[1.75] text-[#C9CDD3]"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          <p>
            When a web service goes down, an engineer usually knows why
            within minutes. An alert points to the exact line of code, and
            the fix ships before lunch.
          </p>
          <p>
            When a robot goes down, none of that exists. Someone gets a
            phone call, a pile of sensor logs, and a machine that might be
            five hundred miles away. Reconstructing what happened can take
            days, and half the time the moment that mattered was never
            recorded in the first place.
          </p>
          <p>
            We started Mantle Robotics because we don't think that gap
            should exist anymore. An agent on the robot keeps a rolling
            window of what just happened, the way a dashcam does. The
            moment something goes wrong, that window gets captured,
            matched against every other robot failing the same way, and
            handed back as one issue instead of fifty separate alerts,
            ready to replay in the browser.
          </p>
          <p>
            We're early, and we're looking for the first few fleets
            willing to run it with us.
          </p>
        </div>

        <div
          className="mt-12 text-[16px] leading-[1.6] text-[#F5F3EF]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Sandesh Bhandari &amp; Aamod
          <div
            className="text-[13px] text-[#6B7280] mt-1"
            style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            Founders, Mantle Robotics
          </div>
        </div>
      </div>
    </section>
  )
}
