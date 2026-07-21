# Startup roadmap

Mantle Robotics is the debugging platform for robot fleets: an always-on capture agent, fleet-wide deduplication, and one-click browser replay. The site presents the company as it looks 1–2 years in; this doc is the plan behind it.

## Phase 0 — prove it on one fleet (months 0–3, ~$0)

- Ship the capture agent for ROS 2 / MCAP fleets, free for a two-person team to adopt in an afternoon
- Get one warehouse-robot fleet fully instrumented and dogfood the dedup + replay loop on their real stoppages
- Publish the first field-notes posts (the rolling buffer, dedup, lab-vs-floor) to start being findable

Goal: one team's on-call rotation gets measurably shorter, and they'll say so.

## Phase 1 — design partners (months 3–12)

- Sign 3–5 operators across warehouse robots, inspection drones, and other ROS 2 fleets as free design partners
- Turn each partner's real incident history into the proof points the site and sales conversations run on
- Ship on-prem/VPC deployment for the first fleet that can't send telemetry off-site

## Phase 2 — paid rollout (year 1–2)

- Convert design partners to the Team plan; introduce the Fleet tier for multi-site operators
- Launch Incident Review as a standalone paid engagement for safety/compliance escalations
- First expansion signal: an existing customer asks us to cover a second fleet or site unprompted

## Phase 3 — the default debugger (year 2–4)

- Become the tool an operator reaches for before they file an incident report, not after
- Expand capture beyond ROS 2 / MCAP to other stacks fleets already run

## Why the window is now

- Fleets are deploying faster than their tooling for understanding failures is keeping up
- The lab-to-floor reliability gap ($125K–$260K lost per hour, 2 in 3 manufacturers hit monthly) is a cost every operator already feels
- Nobody has built the Sentry-for-robots yet — debugging still means a phone call and a pile of logs

## Revenue sequencing

| Product | Starts |
|---|---|
| Starter (small teams & pilots, free) | year 0 |
| Team (per-robot, monthly) | year 0–1 |
| Fleet (multi-site, annual contract) | year 1–2 |
| Incident Review (per case) | year 1+ |

One rule: the free tier has to be good enough that a two-person team adopts it without a sales call.
