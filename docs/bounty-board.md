# AgentFone Bounty Board

> These are the initial bounties available at launch. New bounties will be added regularly based on community feedback and product needs.

---

## Builder Bounties (Agents)

Build these agents and earn points + cash.

| Bounty | Description | Reward | Points |
|--------|-------------|--------|--------|
| Weather Dashboard | 7-day forecast, current conditions, severe weather alerts. Use location harness for auto-detect. | $500 | 300 |
| Spotify Controller | Now playing, queue management, playlist browser. OAuth flow, background playback status. | $1,000 | 500 |
| Smart Home Hub | Control lights, thermostat, cameras via local network proxy. Support Hue, MQTT, Home Assistant. | $1,000 | 500 |
| Expense Tracker | Log expenses via chat ("$12 lunch"), categorize, monthly summary. CSV export. | $500 | 300 |
| RTSP Camera Viewer | Multi-camera grid from local RTSP streams. Uses on-device ffmpeg. Motion detection alerts. | $750 | 400 |
| Pomodoro Timer | Focus timer with session history, daily/weekly stats. Decision cards for "time to focus" nudges. | $300 | 200 |
| Habit Tracker | Daily habits, streak tracking, visual progress. Decision cards for daily check-ins. | $300 | 200 |
| Network Scanner | Scan local network via TCP harness. Device inventory, port scanning, ping monitor. | $750 | 400 |
| Contact Birthday Reminder | Read contacts, find birthdays, send decision cards on the day. Optional auto-SMS. | $300 | 200 |
| Clipboard Manager | History of clipboard contents (via harness), search, pin favorites. | $300 | 200 |

---

## Shaper Bounties (Design)

Design the future of AgentFone's interface.

| Bounty | Description | Reward | Points |
|--------|-------------|--------|--------|
| Homescreen Reimagined | A new homescreen paradigm that isn't a grid. Must work with the bridge protocol. Figma + rationale. | $750 | 400 |
| Agent Design System | Component library for agent dashboards. Buttons, cards, inputs, lists, charts — all in the AgentFone dark theme. Figma file. | $500 | 300 |
| Decision Card Patterns | 10 distinct decision card layouts for different contexts (urgent, casual, celebration, warning, choice). Figma + interaction notes. | $500 | 300 |

---

## Navigator Bounties (Product)

Find the gaps, spec the solutions.

| Bounty | Description | Reward | Points |
|--------|-------------|--------|--------|
| First-Time User Experience | Watch 5+ people use AgentFone for the first time. Document where they get stuck, what delights them, what confuses them. Full report with recommendations. | $500 | 300 |
| Agent Discovery UX | The community store needs better discovery. Spec a solution: categories, search, recommendations, trending. Wireframes + rationale. | $500 | 300 |
| Permission Model Spec | Users should be able to control what agents can access (camera, contacts, SMS). Spec the permission UI, settings page, and runtime prompts. | $500 | 300 |

---

## Tuner Bounties (AI / Models)

Make the brain better.

| Bounty | Description | Reward | Points |
|--------|-------------|--------|--------|
| AgentFone Bench v1 | Create a benchmark suite of 30+ tasks covering chat, agent builds, harness operations, and homescreen edits. Must be runnable against any model. | $1,000 | 500 |
| Haiku Routing Study | Test whether Claude Haiku can handle 80% of simple chat messages (greetings, quick questions, status checks) with acceptable quality. 100+ test messages, quality ratings, cost comparison. | $500 | 300 |
| Voice Pipeline Shootout | Compare Groq Whisper, Gemini Flash, and OpenAI Whisper for voice transcription. 50+ real recordings, measure accuracy, latency, cost. | $500 | 300 |

---

## Guardian Bounties (Security)

Break it so we can fix it. See the [Guardians track](contributor-program.md#track-6-guardians) for severity definitions and responsible disclosure process.

Security bounties are ongoing — there's no fixed list. Find a vulnerability, report it, get paid.

| Severity | Bounty Range |
|----------|-------------|
| Critical (RCE, container escape, key exfiltration) | $1,000 — $5,000 |
| High (unauthorized data access, cross-user leak) | $500 — $1,000 |
| Medium (prompt injection bypassing security rules) | $100 — $500 |

---

## How to Claim a Bounty

1. Check the bounty is still open (status on this page or Discord)
2. Build / research / design your contribution
3. Submit via the appropriate channel (GitHub PR for code, Discord/email for specs and reports)
4. We review and provide feedback
5. Once accepted, bounty is paid within 14 days (via GitHub Sponsors, PayPal, or crypto)
6. Points are awarded immediately on acceptance

Multiple people can work on the same bounty. First accepted submission wins the cash bounty. Subsequent quality submissions still earn full points.

---

## Proposing New Bounties

Have an idea for a bounty? Propose it in Discord or open a GitHub issue. Community-proposed bounties that we adopt earn the proposer 50 bonus points.
