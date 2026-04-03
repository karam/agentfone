# AgentFone Contributor Program

> Launching soon. This document describes how the program will work.

AgentFone is a phone that reshapes itself around its owner. An AI brain runs in the cloud, connected to the phone via WebSocket. It controls the homescreen, builds apps, accesses all hardware, and responds to voice, photo, and text input.

We're opening up AgentFone to contributors — not just developers, but designers, product thinkers, AI researchers, content creators, and security researchers. Every person who touches a phone has ideas about how it should work. We want those ideas.

---

## How It Works

**Six tracks. One point system. Universal tiers.**

Every contribution earns points. Points are the same across all tracks — a designer and a developer reach the same tier through completely different work. There are no second-class contributors.

### The Tracks

| Track | Who | What They Build |
|-------|-----|-----------------|
| [Builders](#track-1-builders) | Developers | Agents, SDK tools, integrations, homescreen themes |
| [Shapers](#track-2-shapers) | Designers | UI paradigms, mockups, agent design guidelines, research |
| [Navigators](#track-3-navigators) | Product Managers | Feature specs, prototypes, user research, QoL improvements |
| [Tuners](#track-4-tuners) | AI / Model Researchers | Model evaluations, prompt engineering, benchmarks, routing |
| [Storytellers](#track-5-storytellers) | Content Creators | Tutorials, blog posts, videos, documentation, translations |
| [Guardians](#track-6-guardians) | Security Researchers | Vulnerability reports, red-team findings, hardening proposals |

### Tiers and Rewards

| Tier | Points | Perks |
|------|--------|-------|
| **Contributor** | 0+ | Profile on agentfone.io/contributors, Discord access |
| **Bronze** | 500 | Contributor badge, early access to new features, priority waitlist |
| **Silver** | 2,000 | Direct channel with the team, beta hardware access, featured on homepage |
| **Gold** | 5,000 | Free AgentFone device (when hardware ships), revenue share bump to 85/15, speaking slot at community events |
| **Diamond** | 15,000 | Advisory board seat, equity/token consideration, name in product credits |

Points never expire. Tiers are permanent once reached.

---

## Track 1: Builders

**For developers.** Build agents that run on every AgentFone.

An agent is a small web app that runs inside the user's container. It has access to the phone's hardware (camera, mic, GPS, contacts, SMS, notifications — 30+ actions) through the harness API, and appears on the homescreen alongside native apps. Agents are built with Node.js, deployed in seconds, and installable by any AgentFone user through the community store.

### What You Can Build

- **Utility agents** — weather dashboards, budget trackers, habit trackers, note-taking tools
- **Hardware agents** — security cameras (RTSP), home automation controllers, network scanners
- **Communication agents** — SMS auto-responders, contact managers, call log analyzers
- **Creative agents** — image generators, music players, wallpaper creators
- **Integration agents** — connect to any API (Spotify, Twitter, GitHub, smart home, crypto)
- **Homescreen themes** — the homescreen is HTML. Redesign it completely.

### Points

| Contribution | Points |
|---|---|
| Published agent (free, in community store) | 100 |
| Published agent reaching 100+ installs | 500 |
| Published agent reaching 1,000+ installs | 1,500 |
| SDK pull request merged (feature) | 200 |
| SDK pull request merged (bug fix) | 50 |
| Example agent contributed to SDK | 75 |
| Homescreen theme published | 150 |

### What We Provide

- **Agent SDK** (open source, MIT) — agent spec, bridge protocol, harness reference, example agents
- **Local dev server** (`agentfone dev`) — simulated phone environment with mocked harness responses
- **CLI tool** (`agentfone publish`) — package and publish to the community store
- **Design system** — colors, fonts, component specs for building agents that feel native

### Tech Stack

Agents are single-file Node.js servers. No framework required. Dark theme (`#1C1A17` bg, `#F5F0E8` text, `#C8785A` accent). Relative fetch paths. Port assigned at registration. That's it.

---

## Track 2: Shapers

**For designers.** Invent the future of phone UI.

When AI is the primary interface, everything we know about phone design changes. The homescreen doesn't need to be a grid. Notifications don't need to be a list. Apps don't need to be rectangles. AgentFone's homescreen is raw HTML — it can be literally anything. We need designers to figure out what it should be.

### Open Questions

These are unsolved. We don't know the answers. That's the point.

- What does a homescreen look like when apps are conversations?
- How should decision cards (the AI pushing choices to you) feel? How urgent? How dismissible?
- What are the interaction patterns for a phone that redesigns itself based on context?
- How do you design for voice-first? Photo-first? Location-first?
- What does "ambient awareness" look like in UI? (The phone knows it's raining, you're at work, your battery is low — how does it surface that without being annoying?)
- How should agent dashboards feel different from native apps?
- What does the chat interface look like when the AI can do things, not just talk?

### Points

| Contribution | Points |
|---|---|
| UI paradigm proposal (writeup + mockups) | 300 |
| Agent design guidelines page | 150 |
| Homescreen concept (Figma + design rationale) | 200 |
| Interaction pattern research (with user testing) | 250 |
| Icon or illustration set (open license) | 100 |
| Design system contribution (component specs) | 200 |
| Blog post (design-focused, published) | 150 |
| Video essay or case study | 200 |

### What We Provide

- **Design brief** — current state of the UI, what's fixed, what's flexible, what we're struggling with
- **Figma component library** — current UI components, colors, typography
- **Screenshot gallery** — real homescreens and agent dashboards from live users
- **Bridge protocol reference** — what's technically possible (so you're designing within real constraints)
- **Direct feedback** — design submissions reviewed weekly, top proposals get implemented

### How Design Ships

1. You submit a proposal (Figma, writeup, video — any format)
2. We review it weekly and give feedback
3. Accepted proposals get paired with a Builder to implement
4. You get credit in the changelog + bonus points when it ships
5. If the paradigm becomes a default (e.g., the new homescreen layout), you get Gold tier automatically

---

## Track 3: Navigators

**For product managers.** Find the gaps and fill them.

Navigators are the bridge between users and builders. Your job is to identify what's broken, what's missing, and what's next — with enough specificity that a developer or designer can act on it immediately. The best Navigator contributions include: the problem (with evidence), the proposed solution (with wireframes or prototypes), and the tradeoffs (what this costs, what it breaks, why it's worth it).

### Points

| Contribution | Points |
|---|---|
| Feature spec (problem + solution + wireframes) | 250 |
| QoL improvement spec (detailed, actionable) | 100 |
| User research report (real users, real observations) | 300 |
| Competitive analysis (structured, with takeaways) | 150 |
| Interactive Figma prototype | 200 |
| Bug triage with full reproduction steps | 50 |
| Feature prioritization framework | 200 |
| Onboarding flow analysis (with recommendations) | 200 |

### What We Provide

- **Public roadmap** — what we're working on, what's planned, what's open
- **Community feedback access** — raw user feedback, support requests, feature asks
- **Usage analytics** — which agents are popular, where users drop off, what gets uninstalled
- **APK access** — test the app yourself (priority waitlist for Navigators)
- **Direct channel** — your specs go directly to the build queue, not into a void

### What Good Specs Look Like

A good Navigator spec includes:
- **Problem** — what's broken or missing, with evidence (user quotes, screenshots, data)
- **Proposal** — concrete solution with wireframes or prototypes (doesn't need to be pixel-perfect)
- **Tradeoffs** — what this costs (engineering effort, complexity, performance), what it might break
- **Success criteria** — how we know it worked (metrics, user behavior changes)

Bad specs: "It would be cool if..." / "We should add AI to..." / "Competitor X has this feature."
Good specs: "Users abandon onboarding at step 3 because [evidence]. Here's a 2-step alternative [wireframes]. This would require changing [specific files]. We'd know it worked if completion goes from 60% to 85%."

---

## Track 4: Tuners

**For AI and ML researchers.** Make the brain smarter, faster, and cheaper.

AgentFone's brain is a large language model running in a Docker container with full shell access and 30+ phone hardware tools. The default is Claude Sonnet for chat and Opus for builds. But we have access to Groq (voice), fal.ai (images/video/audio), Gemini (image generation), and OpenRouter (200+ models).

The Tuner track is about answering: which model should the brain use, when, and how? This is the most technically differentiated track.

### Open Questions

- Is Sonnet the right default for chat, or would a cheaper model handle 80% of messages?
- How do you route simple messages to Haiku and complex ones to Opus without the user noticing?
- What's the optimal SOUL.md prompt structure for each model family?
- Can a fine-tuned small model handle the harness tool calls (structured, predictable) while a large model handles creative tasks?
- What's the cost/quality tradeoff for voice transcription? (Groq Whisper vs Gemini Flash vs local)
- How do you benchmark "agent build quality" objectively? (Success rate? User satisfaction? Time to build?)

### Points

| Contribution | Points |
|---|---|
| Model evaluation report (structured, reproducible) | 300 |
| Prompt library contribution (optimized variants) | 150 |
| Benchmark suite (runnable, documented) | 400 |
| Safety / red-team report | 250 |
| Cost optimization analysis (with data) | 200 |
| Multi-model routing proposal (with classifier) | 300 |
| Fine-tuning experiment (with results) | 400 |
| Voice/vision pipeline comparison | 250 |

### What We Provide

- **API credits** — test models against real AgentFone tasks without spending your own money
- **SOUL.md reference** — the system prompt that drives the brain (sanitized for security-sensitive parts)
- **Task corpus** — 100+ real user messages and expected behaviors for benchmarking
- **Harness action specs** — full schema for all 30+ phone hardware tools
- **Direct implementation path** — top-rated findings get shipped, not shelved

### What Good Evals Look Like

A good Tuner eval includes:
- **Methodology** — what you tested, how many runs, what you controlled for
- **Data** — raw results, not just summaries (we want to verify)
- **Cost analysis** — tokens used, API cost per task, latency
- **Recommendation** — what to change and why, with expected impact
- **Reproduction steps** — anyone should be able to re-run your eval

---

## Track 5: Storytellers

**For content creators.** Teach, inspire, and amplify.

Every tutorial written, every video published, every blog post shared brings new contributors into the program. Storytellers are the multiplier that makes every other track grow.

### Points

| Contribution | Points |
|---|---|
| Written tutorial (with working code) | 150 |
| Video tutorial (YouTube, published) | 200 |
| Blog post (thought leadership, published) | 150 |
| Documentation PR merged | 75 |
| Full documentation translation (to any language) | 300 |
| Community showcase / roundup post | 100 |
| Conference talk or meetup presentation | 250 |
| Podcast appearance discussing AgentFone | 150 |

### What We Provide

- **Content briefs** — topics we want covered, with key points and resources
- **Early access** — get features before they're public so your content is ready at launch
- **Amplification** — we share and promote quality content across our channels
- **Assets** — logos, screenshots, screen recordings, product copy you can use freely

---

## Track 6: Guardians

**For security researchers.** Break it so we can fix it.

AgentFone runs an AI brain with root shell access in a Docker container. It has access to phone hardware, API keys, and user data. We take security seriously — we've built multiple layers of hardening (file immutability, watchdog processes, egress firewalls, network isolation). But we know we haven't found everything.

Guardians help us find and fix vulnerabilities before anyone else does.

### Points and Bounties

Security findings earn both points and cash bounties:

| Severity | Points | Bounty |
|---|---|---|
| Critical (RCE, container escape, key exfiltration) | 1,000 | $1,000 — $5,000 |
| High (unauthorized data access, cross-user leak) | 500 | $500 — $1,000 |
| Medium (prompt injection bypassing security rules) | 250 | $100 — $500 |
| Low (information disclosure, hardening suggestion) | 100 | — |
| Hardening proposal (implemented) | 300 | — |
| Red-team report (structured, 10+ attacks) | 200 | — |

### Scope

In scope:
- The AI brain's security boundaries (SOUL.md rules, tool restrictions)
- Container isolation (escape, lateral movement, privilege escalation)
- Network security (egress filtering, tunnel prevention)
- Secret management (API key protection, container secrets)
- Community app supply chain (malicious agents, code injection)
- Phone-server authentication (WebSocket, container secret, harness auth)

Out of scope:
- The Android phone app itself (separate program, coming later)
- Infrastructure we don't control (Anthropic API, Groq, fal.ai, cloud providers)
- Social engineering of the AgentFone team (we're testing the system, not the people)

### Responsible Disclosure

1. Report findings privately via security@agentfone.io (or a dedicated channel once launched)
2. We acknowledge within 48 hours
3. We fix critical issues within 7 days, high within 14 days
4. You get credited (unless you prefer anonymity) once the fix ships
5. Do not publicly disclose until the fix is deployed

---

## How to Get Started

The program launches soon. Here's what's coming:

1. **Agent SDK** — open source repo with the agent spec, examples, and local dev tools
2. **Discord** — track-specific channels, bounty announcements, weekly reviews
3. **Bounty board** — initial set of paid bounties across all tracks (see [bounty-board.md](bounty-board.md))
4. **Contributor portal** — agentfone.io/contributors with profiles, points, leaderboard

To get early access, follow [@AgentFone](https://x.com/agentfone) or join the waitlist at [agentfone.io](https://agentfone.io).

---

## FAQ

**Can I contribute to multiple tracks?**
Yes. Points from all tracks count toward the same tiers. A designer who also builds agents earns points from both.

**How are contributions reviewed?**
Each track has a review cadence. Builder contributions (agents, PRs) are reviewed as they come in. Design and PM specs are reviewed weekly. Model evals and security reports are reviewed within 48 hours.

**Can I contribute if I don't have an AgentFone?**
Yes. Builders can use the local dev server. Designers and PMs can work from screenshots and docs. Tuners get API credits. Only the Storyteller track benefits from having the actual device.

**What license is the Agent SDK?**
MIT. Agents you build are yours — publish them however you want.

**Is there a revenue share for paid agents?**
Yes. Default is 70/30 (you keep 70%). Gold tier contributors get 85/15.

**What happens if I find a security vulnerability?**
Report it privately. You get points + cash bounty based on severity. See the Guardians track above.

**When does this launch?**
Soon. The Agent SDK repo and Discord will be the first things to go live.
