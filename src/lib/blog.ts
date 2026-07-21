export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  /** CSS background for the gradient cover. */
  cover: string;
  /** Serif title on the cover renders light or dark depending on the gradient. */
  coverInk?: boolean;
  paragraphs: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "the-rolling-buffer",
    title: "The rolling buffer: why your robot needs a dashcam, not a full-time recorder",
    excerpt:
      "Recording everything is expensive and mostly useless. Capturing the thirty seconds before a failure is the whole product.",
    date: "JUL 14, 2026",
    tag: "ENGINEERING",
    cover: "linear-gradient(135deg, #F2612B 0%, #FBE8D4 100%)",
    paragraphs: [
      "The agent that runs on your robot does not record everything, all the time, and ship it somewhere. That would be expensive, it would fight your fleet for bandwidth, and almost none of it would ever matter. Instead it keeps a short rolling window in memory, the way a dashcam does, and only saves that window when something actually goes wrong.",
      "The moment a stoppage, a fault, or a human takeover fires, the buffer freezes and uploads: sensor frames, telemetry, and logs from the seconds before the event through the seconds after. That is the part nobody used to keep. Post-mortems used to start from an error code and a guess. Now they start from a replay of exactly what the robot saw.",
      "The design goal was boring on purpose. The agent plugs into ROS 2 and MCAP, the logging systems fleets already run, so adopting it means installing a small exporter, not rebuilding a stack. Every event carries the software version that produced it, because a robot that updates weekly is a different machine every week.",
      "It is available now for ROS 2 fleets. If your robots already log to MCAP, you can be capturing failures by Friday.",
    ],
  },
  {
    slug: "one-issue-not-fifty-alerts",
    title: "One issue, not fifty alerts: deduplicating robot failures across a fleet",
    excerpt:
      "Fifty robots hitting the same bug should page you once, not fifty times. Here is how we group failures across a fleet.",
    date: "JUN 30, 2026",
    tag: "PRODUCT",
    cover: "linear-gradient(135deg, #002FD3 0%, #D9E6F8 100%)",
    paragraphs: [
      "The first fleet we worked with had forty-two warehouse robots and a Slack channel that fired an alert every time one of them stopped. On a bad day that channel filled with fifty messages, and the on-call engineer had no way to tell which ones were the same problem wearing forty-two different robot IDs.",
      "That is the actual failure mode of fleet software support: not that failures are rare, but that they are repeated. The same firmware bug, the same lighting edge case, the same mispackaged pallet shape, hitting robot after robot while every occurrence gets treated as a brand-new mystery.",
      "So we group them. Every captured failure gets matched against every other failure in your fleet by signature, not just by error code, using the sensor context around the event. Forty-two stoppages that share a root cause collapse into one issue with forty-two data points attached, ranked by how much fleet time it is actually costing you.",
      "The effect on the on-call rotation was immediate: three issues to investigate instead of fifty alerts to triage. The engineer who used to spend a shift figuring out which fires were the same fire now spends it fixing the fire.",
    ],
  },
  {
    slug: "lab-vs-floor-performance",
    title: "Why lab success rates don't predict floor performance",
    excerpt:
      "A robot that hits 95 percent in a demo can drop to 60 percent on a real floor. The gap is the whole story.",
    date: "JUN 16, 2026",
    tag: "RELIABILITY",
    cover: "linear-gradient(135deg, #0D1117 55%, #F2612B 55.2%)",
    paragraphs: [
      "A robot that succeeds 95 percent of the time in a demo can drop to 60 percent on a real production floor. That gap is not a rounding error. It is the difference between a machine your team trusts and a machine somebody has to babysit.",
      "The floor is different in ways a lab cannot rehearse: lighting changes by the hour, pallets arrive damaged, aisles fill with clutter, and people walk through the workspace mid-task. None of that shows up in a demo reel.",
      "This is why a passing test suite says so little about runtime risk. A test suite describes the machine you built. Runtime telemetry describes the machine you are actually operating, this week, on this software version, in this warehouse.",
      "The fix is not better demos. It is capturing deployed failures continuously, grouping them by root cause, and giving engineers a replay instead of a guess. That is what closes the gap between the lab number and the floor number.",
    ],
  },
  {
    slug: "what-we-learned-debugging-our-first-fleet",
    title: "What we learned debugging our first fleet of warehouse robots",
    excerpt:
      "Before we built the product, we spent a month reading sensor logs by hand. Here is what that taught us.",
    date: "JUN 02, 2026",
    tag: "FOUNDERS",
    cover: "linear-gradient(135deg, #1AA043 0%, #D9E6F8 100%)",
    paragraphs: [
      "Before Mantle Robotics was a product, it was us on a call with an operator at 11pm, trying to figure out why a mobile robot had frozen in aisle 9 for the third time that week. We had a pile of sensor logs, no timestamp lined up with the incident report, and no way to see what the robot had actually seen.",
      "It took most of a day to reconstruct fifteen seconds of robot behavior. By the time we had an answer, two more robots in the same fleet had hit what looked like the identical fault, and nobody had connected the three incidents because they arrived as three separate tickets, a day apart, filed by three different people.",
      "That was the moment the shape of the product became obvious. Robots needed the equivalent of a dashcam that was always rolling, so the moment before a failure was never lost. And a fleet needed those failures grouped automatically, so the third occurrence of a bug showed up as \"this again\" instead of a fresh mystery.",
      "We are early, and we are looking for the first few fleets willing to run it with us.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
