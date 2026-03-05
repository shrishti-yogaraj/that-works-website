export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: "GTM & Growth" | "Marketing Systems" | "Lead Generation" | "Tool Reviews" | "Revenue Architecture" | "Playbooks" | "Hiring & Team Design";
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-most-gtm-strategies-fail-before-launch",
    title: "Why Most GTM Strategies Fail Before Launch",
    excerpt: "The problem isn't the strategy. It's the infrastructure underneath it. Here's what breaks — and how to build a foundation that actually holds.",
    content: `# Why Most GTM Strategies Fail Before Launch

Every quarter, thousands of B2B companies launch go-to-market strategies that look brilliant on paper. Polished decks. Clear ICPs. Compelling messaging. And within 90 days, most of them are dead in the water.

The conventional wisdom says the problem is the strategy itself — wrong positioning, bad timing, weak differentiation. Sometimes that's true. But after working with dozens of companies across seed to Series C, we've found that the majority of GTM failures have nothing to do with strategy. They fail because of what's underneath it.

## The Infrastructure Gap

Think of your GTM strategy as a building. The strategy is the architecture — the design, the layout, the vision. But a building doesn't stand on vision. It stands on foundations, plumbing, and electrical. In GTM terms, that means:

- **CRM hygiene** — Is your data clean enough to actually segment and target?
- **Attribution tracking** — Do you know which channels are producing pipeline, not just clicks?
- **Lead routing** — When a qualified lead comes in, does it reach the right rep in under five minutes?
- **Content infrastructure** — Do you have assets mapped to every stage of the buyer journey?

Most companies skip straight to "let's run ads" or "let's hire SDRs" without answering these questions. The result? Money flows out. Leads flow in. But pipeline doesn't move.

## The Three Breaks

In our experience, GTM strategies break in three predictable places:

### 1. The Handoff

Marketing generates leads. Sales ignores them. Or worse — sales works them, but with zero context about what the lead engaged with, what pain they expressed, or where they are in their buying process.

This isn't a people problem. It's a systems problem. If your CRM doesn't pass behavioural data from marketing to sales, your reps are flying blind. They default to generic scripts, the prospect feels no continuity, and the deal dies.

**The fix:** Build a lead handoff protocol that includes engagement history, content consumed, and a suggested talk track. Automate it. Make it impossible for a rep to pick up a lead without context.

### 2. The Measurement Layer

"We're doing content marketing." Great. Is it working? "Well, traffic is up 40%." That's not an answer.

The measurement layer is where most GTM strategies reveal their cracks. Companies track vanity metrics — impressions, clicks, open rates — because they're easy. But they tell you almost nothing about whether your strategy is generating revenue.

**The fix:** Instrument your GTM from day one with revenue-connected metrics. That means:

- Cost per SQL (not just MQL)
- Pipeline velocity by channel
- Win rate by lead source
- Time to first meeting by campaign

If you can't tie a marketing activity to pipeline within 60 days, question whether it belongs in your strategy at all.

### 3. The Feedback Loop

Strategy is not a document. It's a living system. The best GTM operators treat their strategy like software — they ship, measure, learn, and iterate in tight cycles.

Most companies, however, set their strategy in January and don't revisit it until the board meeting in April. By then, the market has moved, competitors have shifted, and the assumptions that underpinned the plan are stale.

**The fix:** Build a fortnightly GTM review cadence. Not a status update — a genuine review of what's working, what's not, and what needs to change. Bring data, not opinions.

## Building a Foundation That Holds

If you're about to launch a new GTM motion, resist the urge to start with tactics. Start with infrastructure:

1. **Audit your CRM.** Delete the junk. Standardise your fields. Build segments you can actually activate.
2. **Set up attribution.** Multi-touch if you can. First-touch and last-touch at minimum. Know where your pipeline comes from.
3. **Define your handoff.** Document exactly what happens when a lead hits a threshold. Who gets it? What context travels with it? What's the SLA?
4. **Build your measurement dashboard.** Revenue metrics only. If it doesn't connect to pipeline or bookings, it's a distraction.
5. **Schedule your review cadence.** Every two weeks. Non-negotiable.

None of this is glamorous. None of it will make a great LinkedIn post. But it's the difference between a GTM strategy that launches and a GTM strategy that lands.

## The Bottom Line

The companies that win at GTM aren't the ones with the cleverest positioning or the biggest ad budgets. They're the ones with the cleanest data, the tightest processes, and the discipline to measure what matters.

Strategy without infrastructure is just a wish. Build the foundation first. The strategy will thank you.`,
    author: "That Works Team",
    publishedAt: "2026-02-28",
    readTime: "6 min read",
    category: "GTM & Growth",
    featured: true,
  },
  {
    id: "2",
    slug: "the-real-cost-of-bad-attribution",
    title: "The Real Cost of Bad Attribution",
    excerpt: "You're spending money on channels that don't work and starving the ones that do. Multi-touch attribution fixes that.",
    content: `# The Real Cost of Bad Attribution

Here's a question that should keep every marketing leader up at night: of the money you spent last quarter, how much of it actually generated pipeline?

If you can't answer that with confidence, you have an attribution problem. And attribution problems aren't just analytical inconveniences — they're budget destroyers. They cause you to double down on channels that feel productive but aren't, and quietly defund the ones that are actually driving revenue.

## What Attribution Actually Means

Attribution is the practice of connecting a business outcome (usually pipeline or revenue) back to the marketing activities that influenced it. Simple in theory. Brutally complex in practice.

The average B2B buyer interacts with your brand 7-12 times before they become a lead. They might see a LinkedIn ad, read a blog post, attend a webinar, get a cold email from your SDR, and then finally book a demo after clicking a retargeting ad. Which touchpoint gets the credit?

The answer depends on your attribution model, and most companies are using the wrong one.

## The Model Problem

### Last-Touch Attribution

This is the default in most CRMs. It gives 100% of the credit to the last thing the buyer did before converting. Clicked a Google ad and then filled out a form? Google gets all the credit.

The problem: it ignores everything that built awareness, trust, and intent before that final click. Your content team could be doing heroic work nurturing prospects through a six-month buying cycle, but last-touch will never show it.

### First-Touch Attribution

The opposite extreme. All credit goes to the very first interaction. The LinkedIn ad that introduced the brand gets the glory, even if the prospect went dark for four months before re-engaging.

The problem: it over-values top-of-funnel activity and under-values the mid-funnel and bottom-funnel work that actually converts interest into pipeline.

### Multi-Touch Attribution

This is where things get useful. Multi-touch models distribute credit across every touchpoint in the buyer journey. The most common approaches:

- **Linear:** Equal credit to every touchpoint.
- **Time-decay:** More credit to touchpoints closer to conversion.
- **Position-based (U-shaped):** Heavy credit to first and last touch, with the rest distributed across the middle.
- **Custom/algorithmic:** Weighted by your own data on what actually influences conversion.

No model is perfect, but multi-touch attribution gives you a dramatically more accurate picture of what's working.

## The Real-World Cost

We worked with a Series B SaaS company that was spending 60% of their marketing budget on paid search. Last-touch attribution said it was their best channel — highest conversion rate, lowest cost per lead.

When we implemented multi-touch attribution, the picture changed completely. Paid search was capturing demand that had been created by LinkedIn content and email nurture campaigns. Those prospects were already warm by the time they Googled the company name and clicked an ad.

The actual demand creation was happening on LinkedIn — a channel they'd been considering cutting because it had a terrible last-touch conversion rate.

After rebalancing their budget — shifting 30% from paid search to LinkedIn content — they saw a 40% increase in qualified pipeline within two quarters. Same total spend. Radically different allocation.

## How to Fix Your Attribution

### Step 1: Accept Imperfection

No attribution model will give you perfect accuracy. The goal isn't mathematical precision — it's directional correctness. You want to know which channels are genuinely creating and accelerating pipeline, even if the exact percentages are approximate.

### Step 2: Implement UTM Discipline

Attribution starts with tracking. Every campaign, every ad, every email, every piece of content needs consistent UTM parameters. This sounds basic, but the number of companies we've audited that have inconsistent or missing UTMs is staggering.

Build a UTM taxonomy. Enforce it. Make it part of your campaign launch checklist.

### Step 3: Choose a Multi-Touch Model

Start with position-based (U-shaped) if you're new to multi-touch. It gives appropriate weight to demand creation (first touch) and conversion (last touch) while still acknowledging the middle of the funnel.

### Step 4: Build a Channel Efficiency Dashboard

For every channel, track:

- **Investment** — What are you spending (including time)?
- **Pipeline influenced** — How much pipeline did this channel touch?
- **Pipeline created** — How much pipeline did this channel originate?
- **Revenue influenced** — Same, but for closed-won deals.
- **Efficiency ratio** — Pipeline per pound spent.

### Step 5: Review Monthly, Rebalance Quarterly

Attribution data needs time to mature. Don't make dramatic budget shifts based on a single month's data. But do review monthly, identify trends, and rebalance your budget every quarter based on what the data tells you.

## The Uncomfortable Truth

Bad attribution doesn't just waste money. It creates false confidence. You feel good about your marketing because the dashboard is green, but the dashboard is lying to you.

The companies that crack attribution gain an unfair advantage. They spend less and generate more because every pound goes to the channels that actually move the needle. In a market where efficiency matters more than ever, that's not a nice-to-have. It's survival.`,
    author: "That Works Team",
    publishedAt: "2026-02-21",
    readTime: "5 min read",
    category: "Marketing Systems",
  },
  {
    id: "3",
    slug: "cold-outreach-that-doesnt-feel-cold",
    title: "Cold Outreach That Doesn't Feel Cold",
    excerpt: "How deep prospect research and AI-powered personalisation turn cold emails into warm conversations at scale.",
    content: `# Cold Outreach That Doesn't Feel Cold

Cold email has a reputation problem. And honestly, it deserves it.

The average B2B decision-maker receives 120+ emails per day. Most cold outreach lands somewhere between "instantly deleted" and "marked as spam." The templates are obvious, the personalisation is shallow ("I noticed you're the VP of Marketing at [Company]…"), and the ask is always the same: "Can I get 15 minutes of your time?"

But here's the thing: cold outreach still works. It works extraordinarily well, in fact — when it's done properly. The difference between cold email that converts at 0.5% and cold email that converts at 8%+ isn't volume. It's depth.

## The Depth Framework

Great cold outreach is built on three layers of depth:

### Layer 1: Company Intelligence

Before you write a single word, you need to understand the company you're reaching out to. Not surface-level — deeply.

- **What stage are they at?** Seed? Series B? Public? This changes everything about their priorities and pain points.
- **What's happening right now?** Recent funding round? New product launch? Leadership change? Expansion into a new market?
- **What's their tech stack?** This tells you about their sophistication, their budget, and their likely pain points.
- **What are their competitors doing?** If their competitor just launched a feature they don't have, that's a trigger.

This isn't optional research. This is the foundation. Without it, you're guessing.

### Layer 2: Person Intelligence

The company doesn't read your email. A person does. And that person has their own context:

- **How long have they been in role?** Someone who started three months ago has different priorities than someone who's been there three years.
- **What have they published or shared recently?** LinkedIn posts, podcast appearances, conference talks — these tell you what they care about right now.
- **What's their likely mandate?** A new CMO at a Series B company is almost certainly tasked with building scalable pipeline. A VP of Sales at a public company is probably focused on efficiency and retention.

### Layer 3: Timing Intelligence

Even the best email, sent to the right person at the right company, will fail if the timing is wrong. Timing signals include:

- **Job postings:** If they're hiring for roles related to your solution, they have budget and intent.
- **Tech changes:** If they just adopted or dropped a tool in your category, they're actively evaluating.
- **Trigger events:** Funding, acquisition, expansion, leadership change — these create windows of openness.

## Writing the Email

With deep research done, writing becomes almost easy. The structure we use:

### The Opening (1-2 sentences)

Reference something specific and recent. Not "I saw your company is doing great things" — something that proves you've done the work.

*"Saw your post about rebuilding your attribution model after the Marketo migration — that's a painful transition, especially mid-quarter."*

### The Insight (2-3 sentences)

Share something useful. A perspective, a data point, a pattern you've seen. This isn't about your product. It's about their problem.

*"We've worked with three other companies that went through the same migration. The biggest trap is trying to rebuild your old model in the new system instead of rethinking attribution from scratch. Most teams lose 3-4 months to that mistake."*

### The Bridge (1 sentence)

Connect your insight to what you do. Lightly. No pitch.

*"We built a framework for post-migration attribution design that's helped teams get accurate data within 30 days instead of 90."*

### The Ask (1 sentence)

Make it low-friction. Not "Can we schedule a call?" but something that respects their time and gives them an easy yes.

*"Happy to share the framework if it'd be useful — just a one-pager, no strings."*

## Scaling Without Losing Depth

The obvious objection: "This sounds great for 10 emails a day. We need to send 500."

Fair point. This is where AI and automation come in — not to replace the research, but to accelerate it.

**Data enrichment tools** (Clay, Apollo, Clearbit) can pull company intelligence at scale. Revenue data, tech stack, recent funding, job postings — all automated.

**AI personalisation** can take enriched data and generate the opening line and insight paragraph. The key is training the AI on your best-performing emails so it learns your voice and your angle, not generic ChatGPT-style output.

**Sequencing tools** (Instantly, Smartlead, Outreach) handle the mechanics — sending, follow-ups, A/B testing, deliverability management.

The workflow becomes:

1. Build your prospect list with tight ICP filters
2. Enrich every prospect with company and person data
3. Identify timing triggers automatically
4. Generate personalised emails using AI + your templates
5. Human review on the top 20% of prospects (your highest-value targets)
6. Send via sequencing tool with smart follow-ups

This gets you to 200-500 personalised emails per day with a team of two. And because the personalisation is genuine — rooted in real research, not mail-merge tokens — response rates stay high.

## The Metrics That Matter

Stop measuring open rates. They're unreliable and largely meaningless since Apple's Mail Privacy Protection.

Instead, track:

- **Positive reply rate** — Replies that express interest or ask questions (target: 4-8%)
- **Meeting booked rate** — Replies that convert to a scheduled call (target: 2-4%)
- **Pipeline generated** — Actual pipeline from cold outreach campaigns
- **Cost per meeting** — Total programme cost divided by meetings booked

If your positive reply rate is below 3%, the problem is almost always research depth or relevance. If it's above 5% but meetings are low, the problem is your call-to-action or follow-up sequence.

## The Bottom Line

Cold outreach isn't dead. Lazy outreach is dead. The bar has risen, and the companies that clear it — with genuine research, sharp writing, and intelligent automation — are building pipeline that their competitors can't match.

The investment in depth pays for itself many times over. One well-researched email that starts a relationship with a £100K+ account is worth more than 10,000 generic blasts that generate nothing but unsubscribes.

Do the work. Write the email. Start the conversation.`,
    author: "That Works Team",
    publishedAt: "2026-02-14",
    readTime: "7 min read",
    category: "Lead Generation",
  },
  {
    id: "4",
    slug: "hubspot-vs-salesforce-honest-take",
    title: "HubSpot vs Salesforce: An Honest Take for Scaling B2B",
    excerpt: "Forget the feature comparison. Here's what actually matters when you're choosing a CRM at the growth stage.",
    content: `# HubSpot vs Salesforce: An Honest Take for Scaling B2B

If you Google "HubSpot vs Salesforce," you'll find approximately 4,000 comparison articles that all say the same thing: HubSpot is easier to use, Salesforce is more powerful, and "it depends on your needs." Helpful.

Let's try something different. After implementing both platforms across companies ranging from pre-seed to £50M+ ARR, here's what actually matters — and what nobody tells you.

## The Real Question

The CRM decision isn't really about features. Both platforms can do virtually anything if you throw enough money and configuration at them. The real question is: **where is your company right now, and where will it be in 18 months?**

Because the wrong CRM at the wrong stage doesn't just cost money. It costs velocity. And in B2B, velocity is everything.

## HubSpot: The Honest Assessment

### Where It Excels

**Speed to value.** HubSpot is the fastest CRM to go from zero to functional. A competent ops person can have a working pipeline, automated lead routing, and basic reporting live within a week. With Salesforce, that same setup takes 3-6 weeks.

**Marketing-sales alignment.** If you're running inbound marketing, HubSpot's native integration between marketing and sales tools is genuinely excellent. Contact timelines, content tracking, lead scoring — it all lives in one place with zero integration work.

**Usability.** Your reps will actually use it. This sounds trivial, but CRM adoption is the #1 predictor of CRM ROI. A CRM that reps avoid is a CRM that produces garbage data. HubSpot's UI is clean enough that reps don't hate it, and that matters more than any feature comparison.

**Cost at early stage.** HubSpot's free tier is legitimate. Starter plans are affordable. You can run a solid GTM operation for a 10-person sales team for under £1,000/month.

### Where It Struggles

**Complex sales processes.** If you have a multi-product, multi-segment, multi-currency sales motion with different pipelines, approval workflows, and territory management, HubSpot starts to creak. It can be configured to handle complexity, but it fights you at every step.

**Custom objects and relationships.** HubSpot's custom object support has improved significantly, but it's still not in the same league as Salesforce. If your data model is non-standard — and most scaling companies' data models are — you'll feel the limitations.

**Reporting depth.** HubSpot's out-of-the-box reporting is good. Custom reporting is... adequate. If you need multi-dimensional analysis, cohort comparisons, or complex calculated fields, you'll either hit walls or need to pipe data into a BI tool anyway.

**Enterprise pricing.** HubSpot's pricing at the Enterprise tier is no longer the bargain it once was. Once you need advanced features, the cost difference between HubSpot and Salesforce narrows considerably.

## Salesforce: The Honest Assessment

### Where It Excels

**Flexibility.** Salesforce can model virtually any business process. Custom objects, custom fields, custom relationships, workflow rules, approval processes, territory management, CPQ — if you can imagine it, Salesforce can build it. This is its superpower.

**Ecosystem.** The Salesforce AppExchange has integrations for everything. Whatever tool you use, it almost certainly has a Salesforce connector. This reduces integration complexity significantly.

**Reporting and analytics.** Salesforce's reporting engine is powerful. Cross-object reports, custom report types, dashboard flexibility — for data-driven sales organisations, this is a genuine advantage.

**Scale.** Salesforce was built for enterprise. If you know you're heading toward 100+ reps, complex deal structures, and multi-entity operations, Salesforce will grow with you without hitting architectural limits.

### Where It Struggles

**Implementation complexity.** Salesforce is not a product you "set up." It's a product you "implement." That means consultants, architects, and ongoing admin resources. Budget 3-6 months and £20-50K for a proper initial implementation. Budget £50-100K+/year for ongoing admin and optimisation.

**Usability.** Let's be honest: most Salesforce instances are a mess. Not because the platform is bad, but because it's so flexible that companies create overly complex configurations that reps hate using. The result: poor adoption, dirty data, and a CRM that costs a fortune but delivers mediocre insight.

**Time to value.** Everything takes longer in Salesforce. Building a new report. Adding a field. Creating an automation. The platform is powerful, but it's not fast. For early-stage companies that need to move quickly, this friction is a real cost.

**Total cost of ownership.** Licence costs are just the beginning. Add implementation, customisation, integration, admin, and training costs, and Salesforce's true cost is typically 3-5x the licence fee.

## The Decision Framework

Here's how we advise clients:

### Choose HubSpot if:

- You have fewer than 50 sales reps
- Your sales process is relatively straightforward (1-2 pipelines)
- Speed of implementation matters more than depth of customisation
- You're running significant inbound marketing
- You don't have (or want) a dedicated CRM admin
- You're pre-Series B and need to preserve cash

### Choose Salesforce if:

- You have 50+ reps or plan to within 12 months
- Your sales process involves multiple products, segments, or geographies
- You need complex approval workflows or CPQ
- You have budget for proper implementation and ongoing admin
- Your board or investors expect Salesforce-grade reporting
- You're post-Series B with revenue operations resources

### The Hybrid Approach

Increasingly, we're seeing companies use HubSpot for marketing and Salesforce for sales. This isn't as crazy as it sounds. HubSpot's marketing tools are genuinely best-in-class, and the HubSpot-Salesforce sync is mature and reliable.

The trade-off is integration complexity and double licensing costs, but for companies that want best-of-breed at each layer, it's a viable path.

## The Migration Question

"We're on HubSpot and thinking about moving to Salesforce." We hear this at least once a month.

Our advice: don't migrate unless you've genuinely outgrown HubSpot. Migration is expensive, disruptive, and risky. Expect 3-6 months of reduced productivity during the transition. Make sure the pain of staying on HubSpot is greater than the pain of moving.

And if you do migrate, do it properly. Hire an implementation partner. Clean your data first. Map your processes before you touch the platform. A bad Salesforce implementation is worse than a good HubSpot setup.

## The Bottom Line

There's no wrong answer here — only wrong timing. HubSpot at the right stage is a rocket ship. Salesforce at the right stage is a competitive moat. The mistake is choosing either one based on features rather than fit.`,
    author: "That Works Team",
    publishedAt: "2026-02-07",
    readTime: "8 min read",
    category: "Tool Reviews",
  },
  {
    id: "5",
    slug: "building-a-lead-scoring-model-that-works",
    title: "Building a Lead Scoring Model That Actually Works",
    excerpt: "Most lead scoring is broken because it's based on vanity signals. Here's how to score on intent, fit, and timing.",
    content: `# Building a Lead Scoring Model That Actually Works

Lead scoring is one of those things that every B2B company knows they should do, most companies attempt at some point, and almost nobody does well.

The typical lead scoring implementation goes something like this: marketing sets up a point system in their CRM. Opening an email gets 5 points. Visiting the pricing page gets 20 points. Downloading a whitepaper gets 15 points. When a lead hits 100 points, they're "sales-ready" and get routed to a rep.

Three months later, sales is complaining that the "hot leads" are garbage, marketing is pointing at the scores defensively, and nobody trusts the system. The scores get ignored, and the company goes back to gut-feel qualification.

Sound familiar? Here's why it breaks, and how to build a model that actually works.

## Why Most Lead Scoring Fails

### Problem 1: Activity ≠ Intent

The fundamental flaw in most scoring models is the assumption that activity equals intent. A prospect who opens every email and downloads every piece of content might be a researcher, a student, a competitor, or simply someone who likes reading. Activity without context is noise.

### Problem 2: No Negative Scoring

Points go up, but they never come down. A lead who was highly active six months ago but has gone completely silent still shows a high score. This creates a pool of "qualified" leads that are actually dead — wasting sales time and destroying trust in the system.

### Problem 3: Fit Is Ignored

A one-person consultancy that obsessively reads your blog and attends every webinar will outscore a VP at a Fortune 500 company who visited your pricing page once. If your model doesn't account for fit — company size, industry, role, budget — it will consistently prioritise the wrong leads.

### Problem 4: No Calibration

Most companies set up lead scoring once and never revisit it. But your market changes, your content strategy evolves, your sales process shifts. A model built 18 months ago is scoring based on assumptions that may no longer be true.

## The Three-Dimensional Model

Effective lead scoring operates across three dimensions: **Fit**, **Intent**, and **Timing**. Each dimension gets its own score, and a lead must meet thresholds across all three to be considered sales-ready.

### Dimension 1: Fit Score (0-100)

Fit measures how well a lead matches your Ideal Customer Profile. This is largely demographic and firmographic:

**Company attributes:**
- Revenue range (e.g., £5M-£50M = 25 points, outside range = 0)
- Employee count (e.g., 50-500 = 20 points)
- Industry (target industries = 20 points, adjacent = 10, irrelevant = 0)
- Geography (serviceable markets = 15 points)

**Person attributes:**
- Title/seniority (decision-maker = 20 points, influencer = 10, individual contributor = 0)
- Department (relevant department = 15 points)

Fit scores are relatively static. A company either matches your ICP or it doesn't. This dimension acts as a filter — no amount of engagement should make a poor-fit lead "sales-ready."

**Threshold:** Leads with a fit score below 50 should never be routed to sales, regardless of their activity.

### Dimension 2: Intent Score (0-100)

Intent measures buying signals — actions that suggest a lead is actively evaluating solutions like yours. This is where most companies put all their scoring eggs, but the key is weighting actions by their actual correlation with purchase:

**High-intent signals (20-30 points each):**
- Visited pricing page
- Requested a demo or trial
- Visited comparison/vs pages
- Searched branded terms

**Medium-intent signals (10-15 points each):**
- Attended a product-focused webinar
- Downloaded a bottom-of-funnel asset (ROI calculator, implementation guide)
- Visited case studies
- Returned to site multiple times in a short period

**Low-intent signals (3-5 points each):**
- Opened marketing emails
- Downloaded top-of-funnel content
- Followed on social media
- Visited blog posts

**Critical: Decay.** Intent scores should decay over time. A pricing page visit from yesterday is a strong signal. The same visit from three months ago is meaningless. We typically apply a 30-day half-life — signals lose 50% of their value every 30 days.

### Dimension 3: Timing Score (0-100)

Timing measures whether the lead is in an active buying window. This is the most underused dimension, but often the most predictive:

**Strong timing signals (25-40 points each):**
- Recently received funding
- Posted job listings for roles related to your solution
- Underwent leadership change in relevant department
- Contract renewal date approaching (if known)
- Mentioned relevant pain points on social media or in a conversation

**Moderate timing signals (10-20 points each):**
- Company growing rapidly (headcount increase >20% in 6 months)
- Recently adopted complementary technology
- Competitor of existing customer

Timing data often comes from external sources — funding databases, job boards, technographic tools, news monitoring. Integrating these into your scoring model requires enrichment tools, but the payoff is significant.

## Putting It Together

A lead is sales-ready when they meet minimum thresholds across all three dimensions:

| Dimension | Threshold | What It Means |
|-----------|-----------|---------------|
| Fit | ≥ 50 | They match our ICP |
| Intent | ≥ 40 | They're showing buying behaviour |
| Timing | ≥ 30 | They're likely in an active buying window |

A lead with Fit: 80, Intent: 60, Timing: 45 is genuinely hot — they match your profile, they're actively engaged, and the timing is right.

A lead with Fit: 30, Intent: 90, Timing: 50 should not go to sales despite high engagement — they don't match your ICP.

A lead with Fit: 80, Intent: 15, Timing: 60 goes into a nurture sequence — great fit, great timing, but they haven't shown enough interest yet.

## Calibration: The Ongoing Work

Your scoring model isn't finished when you launch it. It's finished after 3-4 calibration cycles. Here's how:

1. **After 30 days:** Review every lead that was routed to sales. Did the rep agree it was qualified? If not, why?
2. **After 60 days:** Look at conversion rates by score band. Are high-scoring leads actually converting at higher rates? If not, your weights are wrong.
3. **After 90 days:** Analyse closed-won deals. Work backwards — what did these leads look like before they became opportunities? Use this to validate and adjust your scoring criteria.
4. **Quarterly:** Full model review. Drop signals that don't correlate with conversion. Add new ones based on what you've learned.

## The Bottom Line

Lead scoring should be your sales team's best friend — a system that consistently surfaces the right leads at the right time. If yours isn't doing that, the model is probably one-dimensional, static, and un-calibrated.

Build across fit, intent, and timing. Decay old signals. Set hard thresholds. And above all, calibrate relentlessly. A good scoring model isn't built — it's evolved.`,
    author: "That Works Team",
    publishedAt: "2026-01-31",
    readTime: "6 min read",
    category: "Lead Generation",
  },
  {
    id: "6",
    slug: "marketing-ops-is-not-marketing",
    title: "Marketing Ops Is Not Marketing",
    excerpt: "The most important function in your revenue org is the one nobody talks about. Marketing operations is the system behind the system.",
    content: `# Marketing Ops Is Not Marketing

There's a role that sits at the centre of every high-performing revenue organisation, and most companies either don't have it, don't understand it, or severely underinvest in it. That role is marketing operations.

Marketing ops is not marketing. It's not campaign management, it's not content creation, and it's not demand generation. Marketing ops is the engineering layer of your marketing function — the infrastructure that makes everything else work.

And it might be the most important hire you make this year.

## What Marketing Ops Actually Does

At its core, marketing operations manages three things:

### 1. The Technology Stack

The average B2B marketing team uses 12-20 tools. CRM, marketing automation, analytics, enrichment, intent data, advertising platforms, content management, project management, ABM tools, conversational marketing — the list grows every quarter.

Marketing ops owns this ecosystem. They decide which tools to adopt, how they integrate, how data flows between them, and when to consolidate or replace.

Without marketing ops, you get what we call "tool sprawl" — a collection of point solutions that don't talk to each other, creating data silos, duplicate work, and blind spots in your reporting.

### 2. The Data Layer

Data is the lifeblood of modern marketing. But data quality is abysmal at most companies. Duplicate records, missing fields, inconsistent formatting, outdated information — it's a mess.

Marketing ops owns data quality. They build and enforce data governance standards. They manage enrichment and hygiene processes. They ensure that when marketing says "we have 50,000 contacts," those contacts are real, current, and usable.

They also own the data model — how objects relate to each other in your CRM, how custom fields are structured, and how segmentation logic works. This sounds technical because it is. And that's exactly why it needs a dedicated function.

### 3. The Measurement Framework

Marketing ops builds the infrastructure that tells you what's working. Attribution models, funnel stage definitions, conversion tracking, reporting dashboards — all of this is marketing ops territory.

Without this function, you get one of two outcomes: either you have no reliable measurement (and every channel claims credit for every deal), or you have measurement built by individual channel owners (who, unsurprisingly, build reports that make their channel look good).

Marketing ops provides the neutral, systematic measurement layer that gives leadership confidence in their investment decisions.

## The Organisational Mistake

Most companies make one of three mistakes with marketing ops:

### Mistake 1: It Doesn't Exist

At many companies, marketing ops responsibilities are distributed across the team. The demand gen manager handles Marketo. The content manager handles the CMS. The marketing director handles reporting. Everyone does a little bit, and nobody does it well.

The result is fragile systems, dirty data, and reports that nobody trusts. When something breaks — and it always breaks — there's no one who owns the fix.

### Mistake 2: It Reports to IT

Some companies house marketing ops within IT or revenue operations. This can work, but it often creates a gap between the operational team and the marketing team. Marketing ops needs to deeply understand marketing strategy, campaign mechanics, and buyer journeys. When it sits too far from marketing, it becomes a ticket-based service desk rather than a strategic partner.

### Mistake 3: It's Understaffed

The most common mistake. Companies hire one marketing ops person and expect them to manage 15 tools, maintain data quality for 100,000 contacts, build all reporting, and support every campaign.

This person burns out within 18 months, the systems decay, and the company wonders why their marketing isn't performing.

## The Right Model

Here's what we recommend:

**At £1-5M ARR (1 person):** A senior marketing ops manager who owns the tech stack, data model, and core reporting. They should spend 50% of their time on infrastructure and 50% on campaign operations support.

**At £5-20M ARR (2-3 people):** A marketing ops lead plus a marketing automation specialist and a data/analytics specialist. The lead focuses on strategy and architecture. The specialists handle execution.

**At £20M+ ARR (4-6+ people):** A full team with dedicated roles for marketing automation, data management, analytics, and systems administration. Led by a Director or VP of Marketing Operations who sits in marketing leadership.

## The Skills to Look For

Great marketing ops people are a rare breed. They combine:

- **Technical skills:** CRM administration, marketing automation, SQL, basic scripting, API integrations
- **Analytical skills:** Data modelling, statistical thinking, dashboard design
- **Strategic thinking:** Understanding of marketing strategy, buyer journeys, and revenue operations
- **Process design:** Ability to build scalable, documented processes that don't depend on individual knowledge

The best marketing ops hires often come from management consulting, solutions engineering, or revenue operations backgrounds. They think in systems, not campaigns.

## The Impact

Companies that invest properly in marketing ops see:

- **30-50% improvement in lead quality** through better scoring, routing, and data hygiene
- **20-40% reduction in tool costs** through stack consolidation and better utilisation
- **2-3x faster campaign execution** through templatised processes and automation
- **Dramatically better reporting accuracy** leading to smarter budget allocation

But the biggest impact is often the hardest to measure: confidence. When leadership trusts the data, they make better decisions. When marketing and sales trust the lead handoff, they collaborate instead of blame. When the CMO can tell the board exactly which channels drive pipeline and at what cost, they keep their job.

## The Bottom Line

Marketing ops is not a support function. It's a strategic function that happens to be highly technical. It's the difference between a marketing team that's busy and a marketing team that's effective.

If you don't have a marketing ops function, you're running your marketing on hope and spreadsheets. And hope is not a strategy.`,
    author: "That Works Team",
    publishedAt: "2026-01-24",
    readTime: "5 min read",
    category: "Marketing Systems",
  },
  {
    id: "7",
    slug: "the-founder-led-sales-ceiling",
    title: "The Founder-Led Sales Ceiling",
    excerpt: "You closed the first 50 deals yourself. The next 500 need a system. Here's how to make the transition without losing what made you successful.",
    content: `# The Founder-Led Sales Ceiling

You built something people want. You know because you sold it yourself — on calls, at conferences, over LinkedIn DMs at midnight. The first 20, 30, 50 deals all came through you. Your pitch was sharp because you built the product. Your conviction was unshakeable because you lived the problem.

And then you hit the ceiling.

The ceiling isn't a number. It's a feeling. It's the moment when you realise that every deal still runs through you, and there aren't enough hours in the day. You're the bottleneck for every demo, every proposal, every negotiation. Your calendar is a disaster. Your product roadmap is stalling because you're spending 70% of your time selling.

This is the founder-led sales ceiling. And breaking through it is one of the hardest transitions in a company's life.

## Why Founder-Led Sales Works (At First)

Before we talk about moving past it, let's acknowledge why founder-led sales is so effective in the early days:

**Domain credibility.** You understand the problem space better than any sales rep ever will. Prospects sense this immediately. You're not reading from a script — you're speaking from experience.

**Product flexibility.** When a prospect says "can it do X?", you can say "not yet, but we could build that" — and mean it. You can make roadmap commitments in real-time. No sales rep can do this.

**Founder energy.** There's a passion and urgency that founders bring to sales conversations that is almost impossible to replicate. Prospects buy from founders partly because they're buying into the founder's vision, not just the product.

**Speed.** No internal approvals, no deal desk, no legal review for a custom term. You can move as fast as the buyer can.

These are genuine advantages. And they're exactly why the transition is so hard — because you're not just handing off a process. You're handing off advantages that are inherently personal.

## The Signs You've Hit the Ceiling

- You're personally involved in more than 50% of deals
- Your sales cycle is getting longer because prospects are waiting for your availability
- You've hired reps but they're closing at a fraction of your rate
- You're spending less than 30% of your time on product and strategy
- You're the only person who can handle objections about the product roadmap
- Your pipeline is directly proportional to your personal energy levels

If three or more of these are true, you're at the ceiling.

## The Transition Framework

### Step 1: Document What You Actually Do

Most founders have never written down their sales process because it lives in their head. Before you can hand it off, you need to make the implicit explicit.

Record your next 10 sales calls. Watch them back and note:

- How do you open the conversation?
- What questions do you ask, and in what order?
- How do you position the product differently for different personas?
- What objections come up, and how do you handle each one?
- When and how do you discuss pricing?
- What makes you decide a deal is worth pursuing or not?

This exercise is uncomfortable because founders often discover their "process" is actually intuition. That's fine — intuition can be codified. It just takes effort.

### Step 2: Build the Sales Playbook

Take your documented process and structure it into a playbook:

**Discovery framework:** The 8-12 questions that uncover pain, urgency, budget, and decision-making process. In the order they should be asked. With follow-up questions for each.

**Positioning guide:** How to position the product for each persona. What to emphasise, what to downplay, what stories to tell.

**Objection handling:** Every objection you've ever heard, with the response that works. Not a script — a framework for thinking about the objection and addressing it.

**Competitive positioning:** How to handle conversations about competitors. What to acknowledge, what to differentiate on, what to avoid.

**Pricing and negotiation:** Your pricing logic, your discount authority, your walk-away points.

### Step 3: Hire for the Right Profile

The mistake most founders make is hiring experienced enterprise reps and expecting them to figure it out. These reps come with their own playbooks, their own habits, and their own expectations about support infrastructure.

For your first 2-3 sales hires, look for:

- **Coachability over experience.** You need reps who will learn your way of selling, not impose their own.
- **Curiosity about the domain.** They need to genuinely care about the problem you're solving. Domain passion is the closest proxy for founder energy.
- **Comfort with ambiguity.** Your process is still being built. They need to thrive in that environment.
- **Strong discovery skills.** The ability to ask good questions matters more than closing ability at this stage.

### Step 4: Co-Sell Before You Delegate

Don't throw reps into the deep end. Run a co-selling phase:

**Weeks 1-2:** Rep shadows your calls. They listen, take notes, and debrief with you afterwards.

**Weeks 3-4:** Rep runs discovery while you observe. You step in for product deep-dives and objection handling.

**Weeks 5-6:** Rep runs the full call. You're on the line but only interject if they get stuck.

**Weeks 7-8:** Rep runs calls solo. You review recordings and give detailed feedback.

This takes two months. It feels slow. It's actually the fastest path to reps who can sell effectively without you.

### Step 5: Build the Support System

Your reps will never have your product knowledge, your domain expertise, or your authority to make commitments. So you need to build systems that compensate:

- **Product demo environment** with pre-configured use cases so reps don't need to improvise
- **ROI calculator** or business case template so reps can quantify value without deep financial modelling skills
- **Executive sponsor programme** where you (the founder) join calls for strategic accounts — but only for the final stage, not every meeting
- **Weekly deal review** where reps bring their toughest opportunities and you help them strategise
- **Content library** with case studies, objection responses, and competitive intel they can reference

### Step 6: Let Go (Gradually)

The hardest part. You need to accept that your reps will close at a lower rate than you — initially. They'll lose deals you would have won. They'll handle objections imperfectly. They'll position the product in ways that make you cringe.

This is normal. The goal isn't to clone yourself. The goal is to build a system that produces 80% of your effectiveness at 10x the scale. Five reps closing at 60% of your rate produce three times the output you could alone.

## The Metrics That Matter During Transition

Track these weekly during the first 90 days:

- **Discovery-to-demo conversion** — Are reps qualifying properly?
- **Demo-to-proposal conversion** — Are they selling effectively?
- **Sales cycle length** — Is it extending without you?
- **Average deal size** — Are reps discounting more aggressively?
- **Rep-sourced pipeline** — Are they generating their own opportunities?

If any metric drops more than 30% from your personal baseline, diagnose and fix before scaling further.

## The Bottom Line

The founder-led sales ceiling isn't a failure — it's a milestone. It means you've built something valuable enough that demand has outgrown your personal capacity. That's a good problem.

But breaking through requires humility. You have to admit that the thing that got you here — your personal involvement in every deal — is now the thing holding you back. You have to trust a system more than you trust your instincts. And you have to invest the time to build that system properly.

The founders who make this transition well build companies that scale. The ones who don't build companies that plateau. The choice is yours.`,
    author: "That Works Team",
    publishedAt: "2026-01-17",
    readTime: "7 min read",
    category: "GTM & Growth",
  },
  {
    id: "8",
    slug: "clay-make-zapier-which-automation-stack",
    title: "Clay vs Make vs Zapier: Which Automation Stack?",
    excerpt: "A breakdown of the three major automation platforms and when each one makes sense for B2B lead generation.",
    content: `# Clay vs Make vs Zapier: Which Automation Stack?

The automation tool landscape has exploded. What used to be a simple choice — Zapier or nothing — has become a genuine decision with real trade-offs. Clay, Make, and Zapier each occupy a different niche, and choosing wrong doesn't just waste money. It limits what your GTM operation can do.

Here's an honest breakdown of all three, based on implementing them across dozens of B2B lead generation programmes.

## Zapier: The Reliable Workhorse

### What It Is

Zapier is the original no-code automation platform. It connects apps to apps via simple trigger-action workflows (called "Zaps"). If something happens in App A, do something in App B.

### Where It Excels

**Breadth of integrations.** Zapier connects to 6,000+ apps. If a SaaS tool exists, it almost certainly has a Zapier integration. This is its unbeatable advantage — you'll rarely hit a "this tool isn't supported" wall.

**Simplicity.** A non-technical marketer can build a Zap in 15 minutes. The interface is intuitive, the logic is straightforward, and the learning curve is minimal.

**Reliability.** Zapier has been around since 2011. It's mature, stable, and handles high volumes without drama. For mission-critical workflows (lead routing, CRM updates, notifications), reliability matters.

**Tables and interfaces.** Zapier has quietly built a lightweight database (Tables) and form builder (Interfaces) that turn it into a basic application platform. For simple internal tools, this is genuinely useful.

### Where It Struggles

**Complex logic.** Multi-step workflows with conditional branching, loops, and data transformation are possible in Zapier but painful. The interface wasn't designed for complexity, and it shows.

**Cost at scale.** Zapier's pricing is based on tasks (individual actions within a Zap). At high volumes, costs escalate quickly. A workflow that processes 10,000 leads per month with 5 steps each equals 50,000 tasks — that's an expensive plan.

**Data enrichment.** Zapier can connect to enrichment APIs, but it's not designed for the kind of multi-source, waterfall enrichment that modern lead gen requires.

### Best For

Simple, reliable automations between common tools. CRM updates, Slack notifications, spreadsheet syncs, form processing. If your workflow fits the pattern "when X happens, do Y," Zapier is hard to beat.

## Make (formerly Integromat): The Power Tool

### What It Is

Make is a visual workflow automation platform that represents workflows as flowcharts. It's significantly more powerful than Zapier, with native support for complex logic, data transformation, and API calls.

### Where It Excels

**Visual workflow design.** Make's canvas-based interface lets you see your entire workflow as a diagram. For complex multi-step processes, this is dramatically easier to understand and debug than Zapier's linear view.

**Data manipulation.** Make has robust built-in functions for parsing, transforming, and restructuring data. JSON parsing, array operations, text manipulation, date calculations — all native, all powerful.

**HTTP/API module.** Make's generic HTTP module is excellent. You can call any API, handle authentication, parse responses, and use the data downstream. This makes it possible to integrate with tools that don't have a native Make module.

**Cost efficiency.** Make's pricing is based on operations, and it's significantly cheaper than Zapier at volume. The same 50,000-operation workflow that costs hundreds on Zapier might cost £50-80 on Make.

**Error handling.** Make has built-in error handling routes. You can define what happens when a step fails — retry, skip, alert, or route to an alternative path. Zapier's error handling is primitive by comparison.

### Where It Struggles

**Learning curve.** Make is not something a non-technical marketer will pick up in an afternoon. The concepts (modules, bundles, iterators, aggregators) take time to learn, and the documentation, while improving, isn't always clear.

**Integration breadth.** Make has fewer native integrations than Zapier (~1,500 vs ~6,000). The HTTP module compensates for this, but it requires more technical skill.

**Occasional instability.** Make's execution engine can be less reliable than Zapier's for very high-volume workflows. We've seen scenarios where Make drops or duplicates operations under heavy load.

### Best For

Complex, multi-step workflows that involve data transformation, conditional logic, or API integrations. Lead enrichment pipelines, multi-channel campaign orchestration, data sync workflows with business logic.

## Clay: The Lead Gen Machine

### What It Is

Clay is fundamentally different from Zapier and Make. It's not a general-purpose automation tool — it's a purpose-built platform for B2B data enrichment and outreach automation. Think of it as a spreadsheet that can call 75+ data providers and build outreach sequences.

### Where It Excels

**Data enrichment.** This is Clay's superpower. It integrates with dozens of data providers — Apollo, Clearbit, Hunter, Lusha, LinkedIn, Crunchbase, BuiltWith, and many more. You can run waterfall enrichment (try Provider A, fall back to Provider B, then C) natively.

**AI-powered personalisation.** Clay has built-in AI that can take enriched data and generate personalised email copy. Because it has access to the full enrichment context (company data, person data, tech stack, recent news), the personalisation is genuinely good.

**Spreadsheet interface.** Clay looks and feels like a spreadsheet, which makes it immediately accessible. Each row is a prospect. Each column is a data point or action. This mental model is intuitive for anyone who's worked in sales or marketing.

**Speed of iteration.** Building a lead list, enriching it, and generating personalised outreach takes hours in Clay. The same workflow in Make or Zapier takes days of configuration.

### Where It Struggles

**Not a general-purpose automation tool.** You can't use Clay to sync your CRM with your billing system or automate your internal workflows. It's specifically for lead gen and outreach.

**Cost.** Clay's pricing includes credits for data provider calls, and costs add up fast. A serious lead gen operation can easily spend £500-1,000/month on Clay alone — before data provider costs.

**Scale limitations.** Clay works beautifully for hundreds or low thousands of prospects. At tens of thousands, the spreadsheet interface becomes unwieldy and processing times increase significantly.

**Learning curve for AI features.** Getting Clay's AI to produce good output requires prompt engineering and iteration. Out-of-the-box results are mediocre; well-tuned results are excellent.

### Best For

B2B outbound lead generation. Building prospect lists, enriching with multi-source data, generating personalised outreach, and pushing to a sequencing tool.

## The Decision Matrix

| Use Case | Best Tool |
|----------|-----------|
| Simple app-to-app automation | Zapier |
| Complex multi-step workflows | Make |
| B2B lead enrichment & outreach | Clay |
| CRM data sync with logic | Make |
| Form-to-CRM routing | Zapier |
| Multi-source prospect research | Clay |
| Internal notification workflows | Zapier |
| API-heavy data pipelines | Make |
| AI-personalised cold email | Clay |
| High-volume, low-complexity | Zapier |
| High-complexity, medium-volume | Make |

## The Stack Approach

Here's what we recommend for most B2B companies running outbound:

**Clay** for prospect research, enrichment, and personalisation. It builds the list, enriches the data, and generates the copy.

**Make** for the orchestration layer. It moves data between Clay, your CRM, your sequencing tool, and any other systems. It handles the conditional logic, error handling, and data transformation.

**Zapier** for simple, reliable connections. Slack notifications when a deal closes. Calendar sync when a meeting is booked. The stuff that just needs to work, every time.

This isn't tool sprawl — it's using each tool for what it's best at. Clay for depth, Make for complexity, Zapier for simplicity.

## The Bottom Line

There's no single "best" automation tool. There's only the right tool for the job. The companies that get this right build automation stacks that are powerful, maintainable, and cost-effective. The companies that get it wrong either overpay for simplicity (using Zapier for everything) or overcomplicate simplicity (using Make for basic integrations).

Know your use case. Choose accordingly. And don't be afraid to use more than one.`,
    author: "That Works Team",
    publishedAt: "2026-01-10",
    readTime: "9 min read",
    category: "Tool Reviews",
  },
  {
    id: "9",
    slug: "your-crm-is-a-graveyard",
    title: "Your CRM Is a Graveyard (And How to Resurrect It)",
    excerpt: "Thousands of leads sitting untouched. Bad data. No process. Here's how to turn your CRM from a cost centre into a revenue engine.",
    content: `# Your CRM Is a Graveyard (And How to Resurrect It)

Open your CRM right now. Look at the total number of contacts. Now look at the number that have been contacted in the last 90 days. If the ratio makes you uncomfortable, you're not alone.

The average B2B CRM is 30-60% dead data. Contacts who've left their companies. Email addresses that bounce. Leads from three years ago that nobody ever followed up with. Duplicates. Triplicates. Records with no email, no phone, no company — just a first name and a prayer.

This isn't just messy. It's expensive. You're paying per contact in most CRM and marketing automation platforms. You're making decisions based on inflated numbers. Your sales team is wasting time on leads that will never respond. And your deliverability is suffering because you're emailing addresses that bounce.

Your CRM is a graveyard. Here's how to resurrect it.

## The Audit

Before you fix anything, you need to understand how bad it is. Run these five reports:

### 1. The Bounce Report

Export all contacts with email addresses. Run them through a verification tool (NeverBounce, ZeroBounce, or similar). Categorise results into valid, invalid, and risky. Industry benchmark: if more than 15% of your database is invalid, you have a serious problem.

### 2. The Ghost Report

Identify contacts with no engagement in the last 12 months. No email opens, no website visits, no form fills, no sales activity. These are ghosts — they exist in your system but not in reality. In most CRMs we audit, ghosts represent 40-60% of the database.

### 3. The Duplicate Report

Run a duplicate check on email address, company name, and phone number. Most CRMs have built-in duplicate detection, but it's rarely comprehensive. Tools like Dedupely or Insycle can catch fuzzy matches that native tools miss.

### 4. The Completeness Report

For each contact, check how many of your critical fields are populated. Critical fields typically include: email, company name, job title, industry, company size, and lead source. Score each record 0-100 based on completeness. Records below 50% are essentially useless for segmentation or outreach.

### 5. The Orphan Report

Identify contacts not associated with any company or deal. These orphans can't be segmented by account, can't be targeted by ABM campaigns, and provide no revenue context. They're clutter.

## The Clean-Up

### Phase 1: Delete the Dead (Week 1)

Be ruthless. Delete:

- All contacts with invalid email addresses (after verifying they're not associated with open deals)
- All contacts with no engagement in 18+ months AND no open deals
- All duplicates (merge where data is complementary, delete where it's redundant)
- All contacts with less than 30% field completeness AND no recent activity

Yes, your contact count will drop. Dramatically. This is a good thing. A database of 10,000 accurate, complete contacts is infinitely more valuable than 50,000 records of mixed quality.

### Phase 2: Enrich the Living (Weeks 2-3)

For surviving contacts, fill in the gaps. Use enrichment tools to update:

- Job titles (people change roles constantly)
- Company information (revenue, size, industry)
- Email addresses (verify and update)
- LinkedIn profiles (for social selling and research)
- Tech stack data (for product-market fit scoring)

Run enrichment in a waterfall: try your primary provider first, then fall back to secondary and tertiary providers for records that come back empty.

### Phase 3: Segment and Score (Week 4)

With clean, enriched data, build meaningful segments:

- **By ICP fit:** A/B/C tiers based on how closely they match your ideal customer profile
- **By lifecycle stage:** New lead, engaged lead, opportunity, customer, churned customer
- **By engagement recency:** Active (30 days), warm (90 days), cooling (180 days), cold (180+ days)
- **By intent signals:** Product page visits, pricing page views, content downloads

Apply lead scores based on fit + engagement + intent. This gives your sales team a prioritised list of who to call, not just a list of names.

## The Prevention System

Cleaning your CRM is pointless if it just gets dirty again. You need systems that maintain data quality automatically:

### Input Validation

Configure your forms and CRM to enforce data quality at the point of entry:

- Required fields for critical data (email, company, title)
- Format validation (email syntax, phone format)
- Duplicate checking before record creation
- Company name standardisation (prevent "IBM" and "International Business Machines" as separate accounts)

### Ongoing Enrichment

Schedule automated enrichment runs monthly. This catches job changes, company updates, and new data availability. Most enrichment providers offer scheduled or triggered enrichment via API.

### Decay Management

Build automated workflows that:

- Flag contacts with bounced emails for review
- Move contacts with no engagement for 6+ months to a "re-engagement" segment
- Archive contacts with no engagement for 12+ months (don't delete — archive)
- Alert reps when a contact's job title changes (potential new opportunity or lost champion)

### Ownership Rules

Every contact must have an owner. Unowned contacts are invisible contacts. Build automation that assigns ownership based on territory, account, or round-robin. If a rep leaves, reassign their contacts immediately — don't let them sit ownerless.

## The Revenue Impact

Companies that complete a full CRM resurrection typically see:

- **20-30% improvement in email deliverability** — because you're no longer emailing dead addresses
- **15-25% increase in sales productivity** — because reps are working real prospects, not ghosts
- **2-3x improvement in campaign performance** — because your segments are accurate and your messaging is relevant
- **Significant cost reduction** — because you're paying for fewer contacts in your CRM and marketing automation platforms

But the biggest impact is strategic. When your CRM data is trustworthy, your forecasts are accurate. Your pipeline reviews are meaningful. Your board reports reflect reality. You make better decisions because you're working with better information.

## The Bottom Line

Your CRM should be your company's most valuable asset. Instead, at most companies, it's an expensive, neglected mess that nobody trusts.

The fix isn't complicated. It's just disciplined. Audit, clean, enrich, segment, and build systems to keep it that way. It's not glamorous work, but it's the kind of work that separates companies that scale efficiently from companies that scale painfully.

Stop treating your CRM like a dumping ground. Start treating it like a revenue engine. The data is there — it just needs to be resurrected.`,
    author: "That Works Team",
    publishedAt: "2026-01-03",
    readTime: "6 min read",
    category: "Marketing Systems",
  },
  {
    id: "10",
    slug: "icp-definition-most-companies-get-wrong",
    title: "ICP Definition: What Most Companies Get Wrong",
    excerpt: "Your ICP isn't a persona doc gathering dust. It's a living filter that should inform every decision in your GTM motion.",
    content: `# ICP Definition: What Most Companies Get Wrong

Every B2B company has an Ideal Customer Profile. Most of them are wrong.

Not wrong in the sense that they describe imaginary customers. Wrong in the sense that they're too broad, too static, and too disconnected from the actual decisions they should inform. They're documents created once during a strategy offsite, referenced in pitch decks, and ignored in practice.

Your ICP should be the single most important filter in your go-to-market operation. Every marketing pound, every sales call, every product decision should pass through it. If it doesn't, you don't have an ICP — you have a wish list.

## The Common Mistakes

### Mistake 1: Too Broad

"We sell to B2B SaaS companies with 50-500 employees."

That's not an ICP. That's a market. An ICP should be specific enough that your team can look at any prospect and immediately say "yes, this is us" or "no, this isn't." If the answer is "maybe," your ICP isn't doing its job.

A useful ICP adds layers of specificity:

- **Industry vertical:** Not just "SaaS" but "vertical SaaS in healthcare, fintech, or logistics"
- **Growth stage:** Not just "50-500 employees" but "Series A-C companies that have raised £5M-£50M and are growing headcount 20%+ YoY"
- **Organisational maturity:** "Has at least one dedicated marketing hire but no marketing ops function"
- **Technology indicators:** "Uses HubSpot or Salesforce, has implemented at least one marketing automation tool"
- **Pain signals:** "Currently running outbound manually, experiencing declining response rates"

### Mistake 2: Based on Aspiration, Not Evidence

Your ICP should be derived from your best existing customers, not from the customers you wish you had. This seems obvious, but it's staggeringly common to see ICPs that describe a market segment the company has never successfully sold into.

Run this analysis:

1. List your top 20 customers by revenue, retention, and satisfaction (NPS or equivalent)
2. Find the common attributes across these customers
3. That cluster of attributes is your ICP

If your best customers are £5-20M revenue professional services firms, but your ICP says "enterprise technology companies with 1,000+ employees," you have a disconnect. Your ICP is aspirational, not evidential.

### Mistake 3: No Negative Definition

An ICP should explicitly state who you don't sell to. This is as important as defining who you do sell to, because it prevents your team from chasing bad-fit deals that will churn, drain support resources, and distort your product roadmap.

Negative ICP criteria might include:

- Companies below a revenue threshold (they can't afford you and will churn)
- Industries with regulatory complexity you can't support
- Companies with a tech stack that doesn't integrate with your product
- Geographies you can't service effectively
- Companies in active M&A (decision-making freezes during acquisition)

### Mistake 4: Static Document

Markets change. Your product evolves. Your competitive landscape shifts. An ICP created 18 months ago may not reflect who your best customers are today.

ICPs should be reviewed quarterly and updated based on:

- Win/loss analysis (who are you winning and losing, and why?)
- Churn analysis (which customers leave, and what do they have in common?)
- Expansion analysis (which customers grow with you, and why?)
- Market shifts (new segments emerging, existing segments contracting)

## Building an ICP That Works

### Step 1: Analyse Your Best Customers

Pull data on your top-performing customers. "Top-performing" means:

- **High revenue:** They pay you well
- **Low churn risk:** They renew reliably
- **High NPS:** They'd recommend you
- **Low support burden:** They don't drain your team
- **Expansion potential:** They buy more over time

Find the 15-20 customers that score highest across all five dimensions. These are your ICP exemplars.

### Step 2: Identify the Clusters

Look for patterns across your exemplars:

- **Firmographic:** Industry, size, geography, growth rate
- **Technographic:** Tech stack, digital maturity, tools in use
- **Behavioural:** How they found you, how long the sales cycle was, what content they consumed
- **Organisational:** Team structure, decision-making process, budget ownership

You'll likely find 2-3 distinct clusters. These become your ICP segments — not one monolithic profile, but a small set of specific, actionable profiles.

### Step 3: Validate With Win/Loss Data

Cross-reference your ICP clusters against your win/loss data:

- Do prospects matching your ICP win at a higher rate than non-ICP prospects?
- Are ICP deals faster to close?
- Do ICP customers retain better?

If the answer to all three is yes, your ICP is valid. If not, adjust until it is.

### Step 4: Operationalise It

An ICP is only useful if it changes behaviour. Here's how to operationalise it:

**In marketing:** Only run campaigns targeting ICP accounts. Score leads based on ICP fit. Gate access to high-cost resources (demos, trials, consultation) behind ICP qualification.

**In sales:** Build ICP fit into your lead scoring model. Train reps to qualify against ICP criteria in discovery. Require manager approval for non-ICP deals above a certain discount threshold.

**In product:** Prioritise feature requests from ICP customers. When ICP and non-ICP customers want different things, choose ICP every time.

**In customer success:** Allocate CSM resources proportionally to ICP fit. Your best CSMs should manage your best-fit customers.

### Step 5: Build the Feedback Loop

Every quarter, run the ICP review:

1. Are we winning more ICP deals than last quarter?
2. Are ICP customers retaining better?
3. Has anything changed in the market that affects our ICP?
4. Should we add, remove, or modify any ICP segments?

Document changes and communicate them to every customer-facing team.

## The Courage to Say No

The hardest part of a strong ICP is the discipline to say no. No to the prospect who doesn't fit but has budget. No to the RFP from a big-name company in the wrong industry. No to the channel partner who wants to bring you into deals outside your sweet spot.

Every non-ICP deal you close is a future churn risk, a support burden, and a distraction from the customers you serve best. The short-term revenue feels good. The long-term cost is real.

The best companies have the courage to walk away from bad-fit revenue. It's counterintuitive, but saying no to the wrong customers is how you say yes to growth.

## The Bottom Line

Your ICP isn't a slide in your investor deck. It's the operating system for your entire GTM motion. If it's broad, static, and disconnected from evidence, it's not helping you — it's just making you feel like you have a strategy.

Do the work. Analyse your best customers. Build specific, evidence-based profiles. Operationalise them across every team. And have the discipline to live by them, even when it means walking away from revenue.

That's how you build a GTM motion that compounds. And compounding is how you win.`,
    author: "That Works Team",
    publishedAt: "2025-12-27",
    readTime: "5 min read",
    category: "GTM & Growth",
  },
  {
    id: "11",
    slug: "data-enrichment-stack-2026",
    title: "The Data Enrichment Stack for 2026",
    excerpt: "Apollo, Clay, Clearbit, Lusha — which enrichment tools actually deliver, and how to combine them without burning budget.",
    content: `# The Data Enrichment Stack for 2026

Data enrichment is the foundation of modern B2B outbound. Without accurate, comprehensive data on your prospects, every downstream activity — personalisation, scoring, routing, outreach — is guesswork.

But the enrichment landscape is a mess. There are dozens of providers, each claiming the best coverage and accuracy. The reality is that no single provider has it all. Coverage varies by geography, company size, industry, and data type. Accuracy degrades over time. And costs range from "surprisingly affordable" to "are you serious?"

Here's our honest assessment of the major players and how to combine them into a stack that actually works.

## The Major Players

### Apollo

**What it does:** Contact and company database with built-in sequencing. Apollo positions itself as an all-in-one sales intelligence and engagement platform.

**Strengths:**
- Massive database (260M+ contacts, 60M+ companies)
- Strong email coverage, particularly in North America
- Built-in email sequencing saves tool costs
- Generous free tier for early-stage companies
- Intent data included in higher tiers

**Weaknesses:**
- Email accuracy is inconsistent — we see 15-25% bounce rates on Apollo-sourced emails without secondary verification
- Phone number coverage is weak outside enterprise contacts
- European data coverage is noticeably thinner than US
- Data freshness varies — job titles and company data can be 6-12 months stale

**Best for:** High-volume prospecting where you need breadth over precision. Ideal as a first-pass enrichment source, supplemented by verification.

**Cost:** Free tier available. Paid plans from ~$49/month. Credits-based for enrichment.

### Clearbit (now Breeze Intelligence by HubSpot)

**What it does:** Real-time company and contact enrichment via API. Now integrated into HubSpot as Breeze Intelligence.

**Strengths:**
- Excellent company data — firmographics, technographics, and employee count are reliably accurate
- Real-time API enrichment works well for inbound lead processing
- Strong technographic data (what tools a company uses)
- Clean, well-structured data output

**Weaknesses:**
- Contact email coverage has declined since the HubSpot acquisition
- Increasingly tied to the HubSpot ecosystem — standalone use is less supported
- Pricing has become less transparent
- Phone number coverage is minimal

**Best for:** Company-level enrichment and technographic data. Particularly valuable if you're already in the HubSpot ecosystem.

### Lusha

**What it does:** Contact data provider focused on direct phone numbers and email addresses.

**Strengths:**
- Best-in-class direct dial coverage, especially for mid-market and enterprise contacts
- Strong European data coverage (Israel-based company, good EMEA presence)
- Chrome extension for LinkedIn enrichment is genuinely useful for SDRs
- Good compliance posture (GDPR, CCPA)

**Weaknesses:**
- Company data is limited — Lusha is a contact tool, not a company intelligence tool
- Credits run out fast if you're doing high-volume enrichment
- API access requires higher-tier plans
- No built-in sequencing or outreach

**Best for:** When you need phone numbers. Full stop. If your outbound motion includes cold calling, Lusha should be in your stack.

### Clay

**What it does:** Enrichment orchestration platform that connects to 75+ data providers and enables waterfall enrichment.

**Strengths:**
- Not a data provider itself — it's a platform that lets you query multiple providers and take the best result
- Waterfall enrichment (try Provider A, fall back to B, then C) is native and easy to configure
- AI-powered data transformation and personalisation
- Spreadsheet interface is intuitive
- Growing integrations with sequencing and CRM tools

**Weaknesses:**
- You're paying Clay's fee PLUS the underlying data provider costs — it adds a layer of expense
- Can be complex to set up initially
- Processing speed degrades with large datasets
- Requires understanding of multiple data providers to use effectively

**Best for:** Orchestrating multi-source enrichment. If you're using more than two data providers, Clay saves enormous time.

### ZoomInfo

**What it does:** The enterprise standard for B2B data. Comprehensive contact and company database with intent data, org charts, and buyer signals.

**Strengths:**
- Largest and most comprehensive B2B database
- Excellent direct dial coverage
- Strong intent data and buyer signals
- Org chart data helps map buying committees
- Enterprise-grade compliance and security

**Weaknesses:**
- Expensive. Enterprise contracts typically start at £15-25K/year and go much higher.
- Contract structures are rigid — annual commitments with limited flexibility
- Overkill for companies with fewer than 10 sales reps
- Data accuracy, while good, isn't dramatically better than combining Apollo + Lusha for most use cases

**Best for:** Enterprise sales teams with budget. If you have 20+ reps and a complex, multi-threaded sales motion, ZoomInfo's depth justifies the cost.

## The Recommended Stack

### For Early Stage (Pre-Series A, 1-3 reps)

**Apollo** (free/starter) + **NeverBounce** (email verification)

Total cost: £50-150/month

Apollo gives you breadth. NeverBounce catches the 15-25% of emails that would bounce. Simple, affordable, effective enough.

### For Growth Stage (Series A-B, 5-15 reps)

**Clay** + **Apollo** + **Lusha** + **NeverBounce**

Total cost: £500-1,200/month

Clay orchestrates waterfall enrichment: try Apollo first for email and company data, fall back to Lusha for direct dials and missing emails. Verify all emails through NeverBounce. This combination gives you 80-90% coverage at a fraction of ZoomInfo's cost.

### For Scale Stage (Series C+, 20+ reps)

**ZoomInfo** + **Clay** + **Clearbit**

Total cost: £2,000-5,000/month

ZoomInfo as your primary database. Clay for orchestrating enrichment on records ZoomInfo misses. Clearbit for real-time inbound enrichment and technographic data. This is the premium stack, and it delivers premium results.

## The Waterfall Principle

The key insight in modern enrichment is the waterfall. No single provider has complete coverage. But by querying multiple providers in sequence — taking the first valid result — you can achieve coverage rates of 85-95%.

A typical email waterfall:

1. Check Apollo → if valid email found, use it
2. If not, check Lusha → if valid email found, use it
3. If not, check Hunter.io → if valid email found, use it
4. Verify the result through NeverBounce or ZeroBounce
5. If no valid email found, flag for manual research

This approach costs more per record than using a single provider, but the coverage improvement is dramatic — and in outbound, coverage directly equals pipeline.

## The Bottom Line

Don't marry a single data provider. The enrichment landscape is too fragmented and too dynamic for that. Build a stack that combines providers strategically, verify everything before you send, and invest in orchestration tools that make multi-source enrichment manageable.

The companies that treat data enrichment as a strategic capability — not just a line item — build outbound machines that consistently outperform their competitors. In a world where everyone has access to the same automation tools, data quality is the differentiator.`,
    author: "That Works Team",
    publishedAt: "2025-12-20",
    readTime: "8 min read",
    category: "Lead Generation",
  },
  {
    id: "12",
    slug: "why-we-hand-everything-over",
    title: "Why We Hand Everything Over",
    excerpt: "Dependency isn't a business model. Here's why every That Works engagement ends with full ownership transfer — and why it makes us better.",
    content: `# Why We Hand Everything Over

Here's something most agencies will never tell you: their business model depends on you staying.

Monthly retainers. Ongoing management fees. "Strategic advisory" contracts that never end. The incentive structure is simple — the longer you need them, the more they earn. So they build systems that require their involvement, use proprietary tools that only they understand, and keep just enough knowledge in their heads that walking away feels risky.

We do the opposite. Every That Works engagement ends with full ownership transfer. The systems, the playbooks, the automations, the data, the documentation — all of it becomes yours. We leave, and everything keeps running.

This isn't altruism. It's strategy. And it makes us better at what we do.

## The Problem With Dependency

The agency dependency model is broken for everyone involved, even the agency.

### For the Client

When your marketing infrastructure lives inside an agency's accounts, managed by their team, documented in their systems, you're hostage. You can't change agencies without rebuilding everything. You can't bring capabilities in-house without a painful knowledge transfer. You can't even evaluate whether the agency is doing good work, because you don't fully understand what they've built.

We've taken over from agencies where the client had been paying £15,000/month for two years and couldn't explain what they were getting. The agency ran campaigns, sent reports, and joined monthly calls. But the client had no idea how the systems worked, what data was being used, or why certain decisions were being made.

That's not a partnership. That's a subscription to someone else's expertise with no equity building in your own.

### For the Agency

Dependency creates perverse incentives. When your revenue depends on ongoing involvement, you're incentivised to build complexity, not simplicity. To create systems that need you, not systems that run independently. To gatekeep knowledge, not transfer it.

The best agency people — the ones who could build genuinely great systems — are constrained by a model that rewards the opposite of what clients actually need.

## The Ownership Transfer Model

Here's how we work:

### Phase 1: Build (Weeks 1-8)

We design and implement the system — CRM configuration, automation workflows, enrichment pipelines, outreach sequences, reporting dashboards, lead scoring models, whatever the engagement requires.

Everything is built in the client's accounts, using the client's tools, with the client's data. We never use proprietary tools or platforms that create dependency. If we use Clay, it's in the client's Clay account. If we build automations in Make, it's in the client's Make workspace.

### Phase 2: Document (Weeks 6-10, overlapping with Build)

Documentation isn't an afterthought. It's a core deliverable. Every system we build comes with:

- **Architecture documentation:** What exists, how it connects, and why it was designed that way
- **Process documentation:** Step-by-step guides for every recurring task — adding new campaigns, updating lead scoring, troubleshooting common issues
- **Decision logs:** Why we chose specific tools, configurations, and approaches — so your team can make informed changes later
- **Runbooks:** What to do when things break, including common failure modes and their fixes

This documentation is written for the person who will own the system after we leave — not for us. It assumes no prior context and explains the "why" as much as the "how."

### Phase 3: Train (Weeks 8-12)

We train the client's team to own and operate everything we've built. This isn't a two-hour walkthrough. It's structured training:

- **System overview sessions** — understanding the full architecture
- **Hands-on workshops** — building campaigns, modifying workflows, interpreting reports
- **Shadowed operation** — the client's team runs the system while we observe and coach
- **Solo operation with support** — the team operates independently with us available for questions

By the end of training, the client's team should be able to run, modify, and troubleshoot the system without calling us.

### Phase 4: Handover and Exit (Week 12)

We formally hand over everything:

- All credentials and access (verified and documented)
- All documentation (reviewed and approved by the client's team)
- A "90-day roadmap" of recommended improvements and optimisations they can make independently

And then we leave.

## Why This Makes Us Better

You might think this model limits our revenue. In a narrow sense, it does — we don't earn ongoing retainer income. But it makes us better in ways that more than compensate:

### It Forces Quality

When you know your client will be living with your work after you leave — maintaining it, modifying it, troubleshooting it — you build differently. You build for clarity, not cleverness. You build for maintainability, not impressive complexity. You document properly because someone else will need to understand it.

Agencies that manage their own systems can get away with duct tape and workarounds. We can't. Everything we build must be clean enough for someone else to own.

### It Forces Honesty

We can't hide behind jargon or complexity. If a system doesn't work well, the client will discover it within weeks of our departure. There's nowhere to hide. This keeps us honest about what's working, what isn't, and what trade-offs we're making.

### It Generates Referrals

Clients who own their systems and get genuine results become our best marketing channel. They tell other founders "That Works built our entire GTM system, trained our team, and left — and it's been running for six months without issues." That story is more powerful than any case study we could write.

### It Attracts Better People

The best operators want to build things that work, not manage retainers. Our model attracts people who take pride in craftsmanship — in building systems so good that they don't need ongoing babysitting.

## The Question We Always Get

"But what if we need you again?"

Then call us. We offer ad-hoc support for alumni clients. Need help with a new campaign type? A system upgrade? A new hire who needs training? We're available.

But the key word is "need." You call us because you have a new challenge, not because the old system stopped working. There's a fundamental difference between choosing to engage an expert and being forced to because your systems don't work without them.

## The Bottom Line

Dependency isn't a business model. It's a trap — for clients and agencies alike. The best work happens when both parties know the engagement will end, because it forces everyone to focus on what matters: building something that lasts.

We hand everything over because it's the right thing to do. But we also hand it over because it makes the work better, the relationships stronger, and the results more durable.

Build it right. Document it well. Train the team. Walk away.

That's how you build something that works.`,
    author: "That Works Team",
    publishedAt: "2025-12-13",
    readTime: "4 min read",
    category: "GTM & Growth",
  },
  {
    id: "13",
    slug: "the-3-gtm-motions-every-b2b-company-runs",
    title: "The 3 GTM Motions Every B2B Company Runs (Whether They Know It or Not)",
    excerpt: "Inbound, outbound, and partner-led aren't strategies — they're motions. Most companies run all three badly instead of sequencing them properly.",
    content: `# The 3 GTM Motions Every B2B Company Runs (Whether They Know It or Not)

Every B2B company has three go-to-market motions available to them. Not three strategies. Not three channels. Three **motions** — fundamentally different ways of creating pipeline.

The problem is that most companies try to run all three simultaneously from day one, do none of them well, and then conclude that "marketing doesn't work."

Here's the framework we use to help founders and GTM leaders sequence their motions properly.

## The Three Motions

### 1. Outbound: You Go to Them

Outbound is the motion of **proactive targeting**. You identify accounts, find the right people, and initiate conversations. It's the fastest motion to generate pipeline — and the most fragile.

**What it requires:**
- A clearly defined ICP with firmographic and technographic filters
- Verified contact data (at least email; ideally mobile)
- A messaging framework tested across at least 3 personas
- A sequencing tool (Apollo, Outreach, Salesloft) with proper deliverability setup
- A human who can actually write

**When it works best:**
- You're pre-product-market fit and need fast feedback loops
- Your ACV is above £5k and the buying committee is identifiable
- You have fewer than 5,000 total addressable accounts

**When it breaks:**
- You're sending 500+ emails per day with no personalization
- Your domain reputation has tanked because nobody set up DKIM/DMARC
- You're targeting everyone with a pulse instead of a specific pain point

### 2. Inbound: They Come to You

Inbound is the motion of **attraction**. You create content, build brand, and design systems that pull qualified prospects toward you. It's the slowest motion to produce pipeline — and the most durable.

**What it requires:**
- Content that demonstrates expertise, not just awareness
- A website that converts visitors into leads (not just "looks nice")
- Lead capture mechanisms tied to real value (tools, frameworks, audits — not PDFs)
- Nurture sequences that educate rather than sell
- Patience. Minimum 6 months before compounding effects appear.

**When it works best:**
- Your market is actively searching for solutions
- You can produce genuinely differentiated content
- You're playing a long game and have budget runway for 6-12 months

**When it breaks:**
- You're publishing "Top 10 Tips" content that reads like everyone else's
- Your landing pages have no clear CTA or conversion path
- You measure success by blog traffic instead of pipeline influence

### 3. Partner-Led: Someone Else Brings Them

Partner-led is the motion of **leverage**. You work with agencies, consultants, technology vendors, and communities to access their audience and trust. It's the most underrated motion — and the hardest to systematise.

**What it requires:**
- A product or service that genuinely complements a partner's offering
- A co-marketing or co-selling framework that benefits both parties
- A partner enablement kit (one-pager, case studies, intro email templates)
- Someone internally who owns partner relationships (not as a side project)
- Tracking infrastructure so you can attribute partner-sourced pipeline

**When it works best:**
- Your ICP already works with specific agencies or consultants
- You're in a market where trust and referrals drive buying decisions
- You have a strong implementation or onboarding experience that partners can speak to

**When it breaks:**
- You sign 20 partner agreements and activate none of them
- Partners don't understand who to refer or how to position you
- You can't track partner influence, so leadership cuts the budget

## The Sequencing Framework

Here's the part most companies get wrong: **they try to run all three at once.**

A seed-stage startup with two people cannot simultaneously run outbound sequences, publish weekly content, and manage a partner program. And yet, that's exactly what most GTM plans propose.

The right approach is to **sequence by stage:**

| Stage | Primary Motion | Secondary Motion | Avoid |
| --- | --- | --- | --- |
| Pre-PMF (£0-500k ARR) | Outbound | None — focus | Partner, Inbound |
| Early Traction (£500k-2M) | Outbound | Inbound (start building) | Premature partner program |
| Growth (£2M-10M) | Inbound + Outbound | Partner (begin formalising) | Spreading too thin |
| Scale (£10M+) | All three, staffed properly | — | Running any motion understaffed |

### Why Outbound First?

Outbound gives you the fastest feedback loops. You learn:
- Which personas respond
- Which messaging resonates
- Which objections come up repeatedly
- Whether your ICP definition is actually correct

This intelligence then **feeds your inbound strategy**. The blog posts you write, the landing pages you build, the case studies you produce — all of it should be informed by hundreds of outbound conversations.

Companies that start with inbound are essentially guessing what their market cares about. Companies that start with outbound **know**.

## Common Mistakes

### Mistake 1: "We need a content strategy"
No, you need pipeline. Content is a vehicle, not a destination. Start with outbound, learn what resonates, then codify those insights into content.

### Mistake 2: "Let's hire an SDR team"
An SDR team without infrastructure is just people making calls with no data, no sequences, and no idea who to target. Build the system first, then staff it.

### Mistake 3: "Our partner brought us one deal, let's scale it"
One referral is not a motion. A motion requires process, tracking, enablement, and mutual accountability. Don't confuse a favour with a channel.

### Mistake 4: "Inbound isn't working — it's been 3 months"
Inbound takes 6-12 months to compound. If you're measuring it at 90 days, you're measuring the wrong thing. Track leading indicators: search impressions, email list growth, content engagement.

## How to Audit Your Current Motions

Ask yourself these five questions:

1. **Which motion generates the most pipeline today?** If you don't know, you have a measurement problem before you have a strategy problem.
2. **Is each active motion properly staffed?** One person cannot run outbound, content, and partnerships. Pick one.
3. **Are your motions feeding each other?** Outbound insights should inform content. Content should enable partners. Partners should generate leads that enter your nurture sequences.
4. **Do you have a motion you're running out of habit?** Many companies keep publishing blog posts or attending events because "we've always done it" — not because it generates pipeline.
5. **What's your next motion?** If you're nailing outbound, it's time to layer in inbound. If inbound is compounding, it's time to formalise partnerships.

## The Bottom Line

The three GTM motions aren't strategies to debate in a board meeting. They're operational realities that need to be sequenced, staffed, and measured independently.

**Stop trying to do everything at once. Pick your primary motion, build the infrastructure to run it properly, and layer in the next one only when the first is generating consistent pipeline.**

The companies that win aren't the ones with the most motions. They're the ones that execute one motion so well that it funds the next.`,
    author: "That Works",
    publishedAt: "Feb 2026",
    readTime: "11 min read",
    category: "Revenue Architecture",
  },
  {
    id: "14",
    slug: "signal-based-selling-intent-data",
    title: "Signal-Based Selling: Why Intent Data Alone Won't Save Your Pipeline",
    excerpt: "Everyone's buying intent data. Almost nobody is using it properly. Here's the layered signal model that actually converts.",
    content: `# Signal-Based Selling: Why Intent Data Alone Won't Save Your Pipeline

Intent data was supposed to be the silver bullet. Buy a subscription to Bombora, 6sense, or G2, watch the "surge scores" light up, and hand hot accounts to your sales team. Pipeline solved.

Except it hasn't worked out that way for most teams. Conversion rates on intent-only outreach are barely better than cold. Sales teams are drowning in "high intent" accounts that don't reply. And marketing is spending more on data than on the campaigns that use it.

The problem isn't intent data itself. It's that intent is just one signal — and one signal isn't enough to build a motion around.

## The Single-Signal Trap

Most teams treat intent data like a fire alarm. Score goes up, you sprint to the account. But think about what intent data actually measures: anonymous content consumption across third-party sites. Someone at Company X read three articles about "CRM migration." That's it.

You don't know:
- **Who** at the company was reading
- **Why** they were reading (research? vendor evaluation? writing their own blog post?)
- **Where** they are in a buying process (if there even is one)
- **Whether** they have budget, authority, or urgency

Intent data tells you *topic interest at the account level.* That's useful context, but it's not a buying signal. It's a research signal. And the gap between research and purchase is enormous.

## The Layered Signal Model

The teams generating real pipeline from signals aren't relying on a single data source. They're stacking signals to build conviction before they act.

Here's the framework:

### Layer 1: Topic Intent (Awareness)

This is your Bombora, G2, TrustRadius data. It tells you which accounts are researching topics relevant to your solution.

**What it means:** "This company is thinking about this space."
**What it doesn't mean:** "This company wants to buy from you."

Use it for: Account list prioritisation, ad targeting, content personalisation.
Don't use it for: Direct outreach triggers.

### Layer 2: Engagement Signals (Interest)

These are first-party signals from your own ecosystem: website visits (especially pricing/demo pages), content downloads, webinar attendance, email engagement patterns.

**What it means:** "Someone at this account is actively engaging with *us*."
**Stacked with Layer 1:** "An account researching our category is also visiting our site." Now you're getting somewhere.

### Layer 3: Fit + Timing Signals (Consideration)

This is firmographic and technographic data combined with trigger events: new funding rounds, leadership changes, technology stack shifts, job postings that signal initiative launches.

**What it means:** "This account matches our ICP and something just changed."
**Stacked with Layers 1+2:** "An ICP account researching our category, engaging with our content, that just raised a Series B." That's a signal worth acting on.

### Layer 4: Champion Signals (Decision)

These are person-level signals: a specific contact engaging multiple times, revisiting key pages, sharing your content internally (if you can track it), or responding to low-commitment outreach.

**What it means:** "There's an identifiable human showing repeated interest."
**Stacked with all layers:** "A VP of Marketing at an ICP account that just raised funding, is researching our category, visited our pricing page twice, and opened our last three emails." *Now* you pick up the phone.

## Building the Signal Stack

### Step 1: Audit Your Current Signals

Map every data source you have across the four layers:

| Layer | Signal Type | Your Sources |
|-------|------------|-------------|
| Topic Intent | 3rd party research | Bombora, G2, etc. |
| Engagement | 1st party interaction | Website analytics, MAP |
| Fit + Timing | ICP match + triggers | CRM, LinkedIn, news |
| Champion | Person-level activity | Email, content, sales touches |

Most teams discover they're heavy on Layer 1 and almost empty on Layers 3 and 4. That's your gap.

### Step 2: Define Signal Combinations That Trigger Action

Not every signal combination warrants the same response. Build a playbook:

**Low confidence (1 layer):** Add to nurture sequence, serve targeted ads.
**Medium confidence (2 layers):** Personalised email sequence, SDR research.
**High confidence (3 layers):** Direct outreach with context, AE involvement.
**Very high confidence (4 layers):** Immediate personalised outreach, executive engagement.

### Step 3: Build the Workflow

This is where most teams fall apart. They have the data but no operational workflow to act on it. You need:

- **A unified signal dashboard** — One place where signals from all four layers converge at the account level. This could be in your CRM, a tool like Koala or Common Room, or even a well-built spreadsheet.
- **Routing rules** — When a signal combination hits a threshold, what happens? Who gets notified? What's the expected response time?
- **Content mapped to signals** — Different signal combinations should trigger different messaging. An account showing intent + engagement needs different outreach than one showing fit + timing.
- **Feedback loops** — Sales needs to report back on signal quality. Which combinations actually led to meetings? Which were false positives? Without this, you can't improve.

## The Messaging Problem

Even with perfect signal stacking, most teams blow it on the messaging. They take all this beautiful intelligence and send: "Hi [Name], I noticed your company is growing fast and might be interested in..."

That's not signal-based selling. That's cold outreach with extra steps.

Signal-based messaging should demonstrate that you understand their *specific situation* without being creepy about it:

- **Don't say:** "I saw you were researching CRM solutions."
- **Do say:** "Companies scaling past 50 reps often hit a wall with Salesforce reporting — especially after a funding round when the board wants tighter pipeline visibility."

The signal informs your hypothesis. The messaging tests that hypothesis. The conversation confirms or denies it.

## Common Mistakes

**1. Treating all intent equally.** A surge score of 80 on "project management software" means very different things for a 50-person startup vs. a 10,000-person enterprise. Weight signals by account fit.

**2. Acting too fast on single signals.** The urge to immediately email every intent spike is strong. Resist it. Wait for corroborating signals. The 24-hour delay to let your other layers confirm the signal will dramatically improve conversion rates.

**3. Not retiring stale signals.** Intent spikes decay. If an account showed high intent 6 weeks ago but hasn't engaged since, they either solved the problem, chose a competitor, or deprioritised the initiative. Stop chasing ghosts.

**4. Ignoring negative signals.** Unsubscribes, meeting no-shows, repeated non-responses — these are signals too. Build decay and disqualification into your model, not just escalation.

**5. No feedback loop.** If sales can't tell you which signal-triggered outreach led to pipeline, you're flying blind. Instrument everything.

## The ROI Shift

When you move from single-signal to stacked-signal selling, the metrics change:

- **Volume goes down.** You're reaching out to fewer accounts.
- **Relevance goes up.** Every touchpoint is contextual.
- **Response rates climb.** 3-5x improvement is common.
- **Sales cycle shortens.** You're entering conversations at the right time.
- **Win rates increase.** Better qualification means fewer wasted cycles.

The net effect is almost always more pipeline from less activity. Which is exactly what efficient growth looks like.

## The Bottom Line

Intent data isn't broken. But using it in isolation is like trying to navigate with only a compass — you know the general direction, but you'll walk into plenty of walls along the way.

**Stack your signals. Build conviction before you act. And for the love of pipeline, stop sending "I noticed your company is growing" emails.**

The companies winning at signal-based selling aren't the ones with the most data. They're the ones with the best signal-to-action workflows.`,
    author: "That Works",
    publishedAt: "Feb 2026",
    readTime: "14 min read",
    category: "Revenue Architecture",
  },
  {
    id: "15",
    slug: "pipeline-math-that-keeps-cfos-up-at-night",
    title: "The Pipeline Math That Keeps CFOs Up at Night",
    excerpt: "Most pipeline reports are fiction. Here's the math your CFO actually cares about — and how to build a model that doesn't collapse under scrutiny.",
    content: `# The Pipeline Math That Keeps CFOs Up at Night

Your CRO says pipeline is 4x target. Your CFO says the company is going to miss the quarter. They're both looking at the same dashboard. How?

Because pipeline math — the way most B2B companies calculate, report, and forecast their revenue pipeline — is fundamentally broken. Not because the tools are bad, but because the assumptions underneath are wrong.

## The 3x Coverage Myth

Somewhere along the way, "3x pipeline coverage" became gospel. Need $1M in bookings? Build $3M in pipeline. Simple.

Except it's not. The 3x rule assumes:
- **Consistent win rates** — They're not. They vary by segment, source, deal size, and rep.
- **Consistent deal sizes** — They're not. One enterprise deal can swing the entire quarter.
- **Consistent cycle times** — They're not. Q4 deals close faster. New segments close slower.
- **Pipeline quality is uniform** — It absolutely is not.

A pipeline full of early-stage, poorly qualified opportunities at 3x coverage is worth less than a pipeline of late-stage, champion-confirmed deals at 1.5x coverage. But the dashboard doesn't know the difference.

## The Numbers That Actually Matter

### 1. Weighted Pipeline by Stage and Age

Raw pipeline is vanity. Weighted pipeline adjusted for stage *and* age is the number that matters.

Here's why age matters: An opportunity that's been in "Discovery" for 90 days is not the same as one that entered Discovery yesterday. The longer a deal sits in a stage without progressing, the lower its actual probability of closing — regardless of what your stage-based probability model says.

Build a decay function:
- **On-pace deals** (within expected stage duration): Use standard probability
- **Stalling deals** (1.5x expected duration): Reduce probability by 30%
- **Zombie deals** (2x+ expected duration): Reduce probability by 60% or remove

### 2. Source-Adjusted Win Rates

Your overall win rate is meaningless. What matters is win rate by source:

| Source | Avg Win Rate | Avg Deal Size | Avg Cycle |
|--------|-------------|---------------|-----------|
| Inbound demo request | 25-35% | Varies | 30-45 days |
| Outbound SDR | 10-18% | Varies | 45-75 days |
| Partner referral | 30-45% | Higher | 30-60 days |
| Event/conference | 8-15% | Lower | 60-90 days |
| PLG conversion | 15-25% | Lower | 20-40 days |

When your pipeline is 60% outbound-sourced, applying a blended 22% win rate massively overstates likely bookings. Segment the math.

### 3. Commit vs. Best Case vs. Pipeline

Your forecast should have three tiers:
- **Commit:** Deals with verbal/written commitment, late-stage, champion confirmed. This should be 90%+ accurate.
- **Best case:** Deals in late stages with positive signals but not yet committed. Weight at 40-60%.
- **Pipeline:** Everything else that's qualified. Weight at 10-25%.

If your Commit number doesn't cover 80%+ of target by mid-quarter, you have a problem. No amount of "best case" optimism fixes a weak Commit.

### 4. Pipeline Creation Rate vs. Pipeline Required

This is the number that keeps good CFOs up at night. Not "how much pipeline do we have?" but "how fast are we creating new pipeline, and is that rate sufficient?"

The formula:
- **Pipeline required** = (Target - Commit) / Win Rate
- **Pipeline creation rate** = New qualified pipeline created per week/month
- **Weeks remaining** = Time left in the quarter
- **Gap** = Pipeline required - (Creation rate × Weeks remaining × Win rate)

If the gap is positive, you're short. And unlike pipeline coverage, this number actually tells you *how short* and *whether the trend can close the gap.*

### 5. Cost Per Pipeline Dollar

Marketing loves to report cost per lead. Finance cares about cost per pipeline dollar — and ultimately cost per revenue dollar.

- **Cost per pipeline dollar** = Total GTM spend / Pipeline generated
- **Healthy range:** $0.10-0.30 per pipeline dollar for mid-market B2B
- **Cost per revenue dollar** = Total GTM spend / Closed-won revenue
- **Healthy range:** $0.30-0.80 depending on ACV and segment

If you're spending $1 to generate $1 of pipeline, your unit economics are broken regardless of growth rate.

## Building a Model That Survives the Board Meeting

### Step 1: Segment Everything

Stop reporting blended numbers. Break pipeline by:
- Source (inbound, outbound, partner, PLG)
- Segment (SMB, mid-market, enterprise)
- Product line (if applicable)
- New business vs. expansion

Each combination has different win rates, cycle times, and deal sizes. Your model needs to reflect that.

### Step 2: Build Rolling Forecasts

Quarterly targets are important. Rolling 3-month forecasts are more useful. They smooth out the hockey-stick pattern and give you earlier warning signals.

Every Monday, update:
- What closed last week
- What's in Commit for the quarter
- What moved stages
- What was created
- What was lost or pushed

### Step 3: Track Leading Indicators

Lagging indicators tell you what happened. Leading indicators tell you what's about to happen:

- **Meeting volume this week** — Leading indicator for pipeline creation next month
- **Stage progression rate** — Leading indicator for close rate this quarter
- **New logo vs. expansion mix** — Leading indicator for future growth sustainability
- **Rep activity patterns** — Leading indicator for individual performance

### Step 4: Create a Pipeline Council

The best-run revenue organisations hold a weekly pipeline council — not a forecast call, a *pipeline council.*

Participants: CRO, CMO, VP Sales, VP Marketing, RevOps lead.

Agenda:
- Pipeline health by segment (5 min)
- Creation rate vs. required (5 min)
- At-risk deals review (10 min)
- Coverage gap plan (10 min)

30 minutes. Every week. No slides longer than 3 pages.

## The Conversation With Your CFO

CFOs don't care about pipeline. They care about predictability. When they push back on pipeline numbers, they're really asking:

1. **"Can I trust these numbers?"** — Show them your methodology: weighted, source-adjusted, age-decayed.
2. **"Will we hit the quarter?"** — Show them the Commit number, not the total pipeline.
3. **"What's the risk?"** — Show them the creation rate gap and the deals at risk.
4. **"What do we need to change?"** — Show them the specific segment or source that's underperforming and the plan to fix it.

If you can answer those four questions with data every week, your CFO becomes your biggest ally instead of your toughest critic.

## The Bottom Line

Pipeline math isn't hard. But it requires honesty — about win rates, deal quality, and creation velocity.

**Stop hiding behind 3x coverage ratios. Start measuring what actually predicts revenue: weighted pipeline, source-adjusted win rates, creation velocity, and the gap between where you are and where you need to be.**

The companies that forecast accurately aren't the ones with the best tools. They're the ones willing to look at the uncomfortable numbers.`,
    author: "That Works",
    publishedAt: "Feb 2026",
    readTime: "13 min read",
    category: "Revenue Architecture",
  },
  {
    id: "16",
    slug: "revops-is-not-a-job-title",
    title: "RevOps Is Not a Job Title — It's an Operating System",
    excerpt: "You hired a RevOps manager. Your revenue operations are still broken. Here's why RevOps is a system, not a headcount solution.",
    content: `# RevOps Is Not a Job Title — It's an Operating System

The RevOps hire has become the startup equivalent of hiring a project manager when things feel chaotic. Pipeline messy? Hire RevOps. Reporting inconsistent? RevOps. Sales and marketing not aligned? RevOps will fix it.

Except they won't. Not because they're not talented — most RevOps professionals are excellent — but because you're asking one person to solve a systems problem with elbow grease. It's like hiring an electrician to fix a building that doesn't have wiring.

## What RevOps Actually Is

Revenue Operations isn't a function. It's an operating system — a set of principles, processes, and infrastructure that connects every revenue-generating activity in your company.

The three pillars:

### 1. Process Architecture

This is the design of how work flows through your revenue engine:
- How does a lead become an opportunity?
- How does an opportunity move through stages?
- How are handoffs managed between marketing, SDRs, AEs, and CS?
- What triggers automation vs. human intervention?
- How are exceptions handled?

Most companies have *ad hoc* processes that evolved organically. Someone built a Zap. Someone else created a Slack workflow. A third person has a spreadsheet. RevOps as an operating system means designing these processes intentionally, documenting them, and enforcing them.

### 2. Data Architecture

This is the foundation everything else sits on:
- **Object model** — How are accounts, contacts, opportunities, and activities structured?
- **Data hygiene** — What are the rules for data entry, enrichment, and deduplication?
- **Integration layer** — How do your tools talk to each other? What's the source of truth?
- **Taxonomy** — Are your lead sources, stages, loss reasons, and segments consistent?

Bad data architecture is the #1 reason RevOps hires fail. They spend 80% of their time cleaning data instead of building systems.

### 3. Measurement Architecture

This is how you know whether things are working:
- **Definitions** — What is an MQL? An SQL? A qualified opportunity? If sales and marketing define these differently, your metrics are meaningless.
- **Attribution** — How do you credit pipeline and revenue to activities? First-touch? Last-touch? Multi-touch? Pick a model and commit.
- **Dashboards** — Who sees what? Executive dashboards should show different metrics than team-level dashboards. And both should show different metrics than board decks.
- **Cadence** — When do you review metrics? Daily, weekly, monthly, quarterly? Each cadence serves a different purpose.

## The Five Stages of RevOps Maturity

### Stage 1: Tribal Knowledge

No documented processes. Everything lives in people's heads. Lead routing is manual. Reporting requires pulling data from three tools and a spreadsheet. When someone leaves, institutional knowledge walks out the door.

*Typical company:* Pre-seed to seed, 1-15 employees.

### Stage 2: Tool-Driven

The company bought tools to solve problems but didn't design the system. HubSpot for marketing, Salesforce for sales, Outreach for sequences, Gong for calls. Each tool works in isolation. Data syncs are fragile. Reports conflict.

*Typical company:* Seed to Series A, 15-50 employees.

### Stage 3: Ops-Aware

Someone (usually a marketing or sales ops hire) starts connecting things. They build integrations, clean up the CRM, create consistent reports. But they're reactive — fixing problems rather than designing systems.

*Typical company:* Series A, 50-100 employees.

### Stage 4: Systems-Designed

A deliberate RevOps function exists. Processes are documented. Data architecture is intentional. Measurement is consistent across teams. The RevOps team proactively identifies bottlenecks and designs solutions.

*Typical company:* Series B+, 100-300 employees.

### Stage 5: Predictive

RevOps isn't just reporting on what happened — it's predicting what will happen. Models forecast pipeline, identify at-risk deals, and recommend resource allocation. The operating system runs the business, not the other way around.

*Typical company:* Series C+ / growth stage.

Most companies try to jump from Stage 2 to Stage 5 by hiring a RevOps manager. It doesn't work. You have to build through the stages.

## Building RevOps as an Operating System

### Step 1: Audit Your Current State

Before you build anything, document what exists:
- Map every tool and how data flows between them
- Document every process (even the informal ones)
- List every report and who uses it
- Identify every manual step that should be automated
- Find every definition that's inconsistent

This audit alone takes 2-4 weeks. Don't skip it.

### Step 2: Design Your Object Model

Your CRM object model is the foundation of everything. Get it wrong, and every downstream process and report will be compromised.

Key decisions:
- **Account vs. Contact centric?** — B2B is account-centric. If your CRM is built around contacts, you'll struggle with ABM, multi-threading, and enterprise reporting.
- **Opportunity structure** — One opportunity per deal? Per product line? Per use case? This decision affects pipeline reporting, forecasting, and comp plans.
- **Activity tracking** — What gets logged? Calls, emails, meetings, content engagement? How is it associated — to contacts, opportunities, or both?
- **Custom fields** — Every custom field should answer a question someone actually asks. If no one uses a field in a report or automation, delete it.

### Step 3: Define Your Lifecycle Stages

The lead-to-revenue lifecycle needs clear, unambiguous definitions:

- **Raw lead** — Contact information captured. No qualification.
- **MQL** — Meets demographic criteria AND has taken a qualifying action. Define both explicitly.
- **SAL** — Sales accepted. An SDR or AE has agreed this is worth pursuing.
- **SQL** — Sales qualified. Discovery completed, BANT (or your framework) confirmed.
- **Opportunity** — Active deal in pipeline. Must have: identified stakeholders, defined timeline, confirmed budget range.
- **Closed Won / Lost** — Include mandatory loss reason codes.

### Step 4: Build Your Integration Layer

Your tools need to talk to each other. But not everything should sync everywhere. Design a deliberate integration architecture:

- **Source of truth per object** — Where does the canonical record live?
- **Sync direction** — Bidirectional syncs cause chaos. Prefer one-way syncs with a clear master.
- **Sync frequency** — Real-time vs. batch depends on the use case. Lead routing needs real-time. Reporting can batch.
- **Error handling** — What happens when a sync fails? Who gets notified? How is it resolved?

### Step 5: Implement Measurement

Build dashboards in layers:
- **Executive layer** — Revenue, pipeline, conversion rates, CAC, LTV. Updated weekly.
- **Management layer** — Team performance, stage conversion, activity metrics, forecast accuracy. Updated weekly.
- **Individual layer** — Personal pipeline, activity, and quota attainment. Updated daily.
- **Diagnostic layer** — Deep-dive reports for specific questions. Built on demand.

Every metric should have an owner — someone responsible for the number and empowered to act on it.

## Common Mistakes

**1. Hiring before designing.** You need the system design before you hire someone to build it. Otherwise, your RevOps hire spends their first 6 months figuring out what to build instead of building it.

**2. Tool shopping instead of process designing.** No tool fixes a broken process. If your lead handoff process is bad, a new tool just automates a bad process faster.

**3. Optimising for reporting instead of action.** The purpose of RevOps isn't to produce reports. It's to enable revenue teams to work more effectively. Every dashboard should answer "so what should we do differently?"

**4. Treating RevOps as IT support.** "Can you add a field to Salesforce?" is not a RevOps request. It's a CRM admin request. RevOps should be designing systems, not fulfilling ticket queues.

**5. No executive sponsorship.** RevOps requires changing how people work. Without a CRO or CEO backing the changes, every process improvement dies in committee.

## The Bottom Line

RevOps is not a person you hire. It's an operating system you build.

**Start with the audit. Design the architecture. Document the processes. Then hire someone brilliant to run it.**

The companies with the best revenue operations aren't the ones with the biggest RevOps teams. They're the ones where the operating system is so well-designed that every revenue team member knows exactly what to do, when to do it, and how it's measured.`,
    author: "That Works",
    publishedAt: "Jan 2026",
    readTime: "15 min read",
    category: "Revenue Architecture",
  },
  {
    id: "17",
    slug: "30-day-outbound-playbook",
    title: "The 30-Day Outbound Playbook: From Zero to Booked Meetings",
    excerpt: "A step-by-step playbook for launching outbound from scratch — including targeting, messaging, tooling, and the daily cadence that actually fills calendars.",
    content: `# The 30-Day Outbound Playbook: From Zero to Booked Meetings

You've decided to launch outbound. Maybe inbound has plateaued. Maybe the board wants faster pipeline. Maybe you just hired your first SDR and they're staring at an empty CRM wondering what to do.

This is the playbook. Thirty days. Four phases. By the end, you'll have a repeatable system for generating meetings — not a one-off campaign that fizzles after week two.

## Before You Start: The Prerequisites

Don't skip this. Every failed outbound program we've seen skipped the prerequisites.

- **ICP definition** — You need a written, specific Ideal Customer Profile. Not "B2B SaaS companies." More like: "Series A-C B2B SaaS companies, 50-300 employees, selling to enterprise, based in US/UK, using HubSpot or Salesforce, with at least 3 SDRs."
- **Messaging foundation** — What problem do you solve? For whom? Why now? If you can't answer these in one sentence each, you're not ready.
- **Technical setup** — Email domains warmed, LinkedIn profiles optimised, CRM configured. This takes 2 weeks minimum. Start now.

## Week 1: Build Your Target List (Days 1-7)

### Day 1-2: Define Your Segments

Don't target one giant list. Create 3-5 micro-segments based on:
- **Industry vertical** — "B2B SaaS selling to healthcare" is a segment. "B2B SaaS" is not.
- **Company trigger** — Recently funded, hiring for specific roles, using a competitor tool.
- **Persona pain** — VP Marketing struggling with lead quality vs. CRO struggling with forecast accuracy.

Each segment gets its own messaging. This is non-negotiable.

### Day 3-5: Build Account Lists

For each segment, build a list of 50-100 target accounts. Use:
- **LinkedIn Sales Navigator** — Filter by company size, industry, growth rate, technology
- **Crunchbase / PitchBook** — For funding and growth signals
- **BuiltWith / Wappalyzer** — For technology stack signals
- **G2 / TrustRadius** — For competitor usage signals

Quality over quantity. 50 well-researched accounts will outperform 500 scraped ones every time.

### Day 6-7: Build Contact Lists

For each account, identify 2-4 contacts:
- **Primary persona** — The person who feels the pain you solve (usually a VP or Director)
- **Secondary persona** — Their boss or a peer who influences the decision
- **Champion candidate** — A manager or IC who would use your product daily

Use LinkedIn, Apollo, or ZoomInfo for contact data. Verify emails before sending.

## Week 2: Craft Your Sequences (Days 8-14)

### The Sequence Structure

A sequence is a multi-touch, multi-channel cadence. Here's the structure that works:

**Day 1:** Email 1 — Problem-focused, no pitch
**Day 3:** LinkedIn connection request — No message or short personal note
**Day 5:** Email 2 — Share relevant insight or content
**Day 8:** LinkedIn message — Reference something specific about their company
**Day 10:** Email 3 — Case study or social proof
**Day 14:** Email 4 — Direct ask + easy out
**Day 21:** Breakup email — Last touch, leave the door open

Seven touches over three weeks. Mix email and LinkedIn. Never call without warming up first (unless you're selling to sales leaders — they respect cold calls).

### Writing Emails That Get Replies

**Subject lines:** Short, lowercase, looks like a real email. "quick question" outperforms "Revolutionise Your Revenue Operations with AI-Powered Insights" every single time.

**Email 1 framework:**
- Line 1: Observation about their company or role (shows you did research)
- Line 2-3: The problem you've seen in companies like theirs
- Line 4: How you've helped similar companies solve it (one sentence)
- Line 5: Soft CTA ("Worth a conversation?")

**Total length:** 4-6 sentences. 80-120 words. No attachments. No images. No HTML formatting.

**What NOT to do:**
- Don't lead with your company name or product
- Don't list features
- Don't say "I hope this email finds you well"
- Don't ask "Are you the right person?"
- Don't send a calendar link in email 1

### Personalisation That Scales

You can't write a custom email for every prospect. But you can personalise at three levels:

- **Segment level** — Industry-specific pain points and language (built into the template)
- **Account level** — One sentence about the company: recent news, growth, tech stack (30 seconds of research per account)
- **Person level** — Reference their LinkedIn post, podcast appearance, or job change (only for top-priority targets)

## Week 3: Launch and Iterate (Days 15-21)

### Day 15: Launch Segment 1

Start with your strongest segment — the one where you have the most social proof and clearest messaging. Enroll 20-30 prospects.

Don't launch all segments at once. You need to see early results to calibrate.

### Day 16-18: Monitor and Adjust

Track these metrics daily:
- **Open rate** — Below 40%? Subject line problem.
- **Reply rate** — Below 5%? Messaging problem.
- **Positive reply rate** — Below 2%? Targeting or value prop problem.
- **Bounce rate** — Above 5%? Data quality problem.

### Day 19: Launch Segment 2

Apply lessons from Segment 1. Adjust messaging based on what you learned.

### Day 20-21: A/B Test

For each segment, test one variable at a time:
- Subject line A vs. B
- Problem framing A vs. B
- CTA style: question vs. statement

You need 50+ sends per variant for meaningful data. Don't test on tiny samples.

## Week 4: Systematise (Days 22-30)

### Day 22-24: Build Your Meeting Playbook

By now, you should have booked a few meetings (if not, revisit targeting and messaging). Document:
- Which segments responded best?
- Which email in the sequence got the most replies?
- What objections came up?
- What qualified a prospect to take a meeting?

### Day 25-27: Build the Handoff Process

When an SDR books a meeting, what happens?
- **Pre-meeting:** SDR writes a brief for the AE — company context, why they took the meeting, pain points mentioned
- **Meeting:** AE runs discovery, SDR stays for the first 5 minutes to introduce
- **Post-meeting:** AE updates the opportunity, SDR gets feedback on lead quality

### Day 28-30: Set the Cadence

Outbound is a daily practice, not a campaign. Build the daily rhythm:

**Morning (30 min):**
- Review replies from yesterday
- Respond to interested prospects within 2 hours
- Handle objections

**Midday (60 min):**
- Enroll new prospects into sequences
- Research new accounts
- LinkedIn engagement (comment on target accounts' posts)

**Afternoon (30 min):**
- Follow-up calls on warm prospects
- Update CRM
- Review metrics

## The Numbers to Expect

Setting realistic expectations prevents panic:

- **Month 1:** 3-6 meetings booked from 100-150 prospects contacted
- **Month 2:** 6-10 meetings as sequences mature and you optimise
- **Month 3:** 8-15 meetings with refined targeting and proven messaging

A meeting-to-opportunity conversion of 40-60% is healthy. Below that, your qualification criteria are too loose.

## The Bottom Line

Outbound works. But it works as a system, not a tactic. The companies that succeed at outbound are the ones that treat it like a product — continuously iterating on targeting, messaging, and process.

**Build the list. Write the sequences. Launch small. Measure everything. Iterate weekly. And whatever you do, don't blast 1,000 generic emails and call it outbound.**`,
    author: "That Works",
    publishedAt: "Jan 2026",
    readTime: "14 min read",
    category: "Playbooks",
  },
  {
    id: "18",
    slug: "email-deliverability-checklist",
    title: "The Email Deliverability Checklist: Stop Landing in Spam",
    excerpt: "Your emails aren't being ignored — they're not arriving. Here's the technical and behavioural checklist to fix your deliverability before it kills your pipeline.",
    content: `# The Email Deliverability Checklist: Stop Landing in Spam

Here's a scenario we see constantly: A company launches an outbound email campaign. They've written great copy. They've built a solid target list. They've set up sequences in their sales engagement tool. And nothing happens. Open rates are below 20%. Reply rates are near zero.

They blame the messaging. They rewrite the emails. Still nothing. They blame the list. They buy new data. Still nothing.

The problem isn't the message or the list. The problem is deliverability. Their emails are landing in spam, promotions tabs, or getting silently rejected — and they have no idea.

## The Technical Foundation

### 1. Domain Setup

**Never send outbound from your primary domain.** If your company is acme.com, your outbound emails should come from a separate domain like acmemail.com or getacme.com.

Why? If your outbound domain gets flagged for spam, it doesn't drag down your primary domain's reputation. Your marketing emails, transactional emails, and employee communications stay safe.

**Setup checklist:**
- Buy 2-3 secondary domains for outbound
- Set up Google Workspace or Microsoft 365 on each domain
- Create individual mailboxes (not aliases) for each sender
- Set up a simple website on each domain (even a one-page site) — naked domains look suspicious

### 2. Authentication Records

These are non-negotiable. If any of these are missing, you're starting with a handicap.

**SPF (Sender Policy Framework):**
- Add a TXT record to your DNS that specifies which servers can send email on your behalf
- Include your email provider and any sending tools (Outreach, Apollo, etc.)
- Check with: mxtoolbox.com/spf.aspx

**DKIM (DomainKeys Identified Mail):**
- A cryptographic signature that proves the email wasn't tampered with in transit
- Usually set up through your email provider — they give you a TXT record to add to DNS
- Check with: mail-tester.com

**DMARC (Domain-based Message Authentication):**
- Tells receiving servers what to do when SPF or DKIM fails
- Start with a monitoring policy: v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com
- Graduate to quarantine or reject once you're confident
- Check with: dmarcian.com

### 3. Domain Warming

New domains have no reputation. Sending 100 emails on day one from a fresh domain is a guaranteed spam flag.

**The warming schedule:**
- **Week 1-2:** Send 5-10 personal emails per day to known contacts who will reply. Gmail and Outlook track reply rates — getting replies builds reputation.
- **Week 3-4:** Increase to 15-25 emails per day. Mix personal and semi-automated.
- **Week 5-6:** Increase to 30-50 emails per day. Begin light outbound.
- **Week 7+:** Scale to your target volume (usually 50-80 per mailbox per day max).

**Or use a warming tool:** Mailreach, Warmbox, or Instantly's built-in warmer. These send automated emails between real inboxes to build reputation. Run warming for at least 2 weeks before any outbound, and keep it running alongside your campaigns.

## The Behavioural Layer

Technical setup gets you to the inbox. Behavioural signals keep you there.

### 4. Sending Volume and Patterns

**Daily limits per mailbox:**
- Google Workspace: Max 50-80 cold emails per day
- Microsoft 365: Max 50-80 cold emails per day
- Never exceed 100 total sends (including warmup) per mailbox per day

**Sending patterns:**
- Spread sends across the day (not 50 emails at 9:01 AM)
- Use human-like intervals (randomise by 30-90 seconds between sends)
- Don't send on weekends (low engagement tanks your metrics)
- Reduce volume on Mondays and Fridays

### 5. Content Best Practices

Spam filters read your emails. Write like a human, not a marketer.

**Do:**
- Write in plain text (no HTML templates for cold email)
- Keep emails under 150 words
- Use 1-2 links maximum (and never in email 1)
- Write lowercase subject lines
- Include a clear unsubscribe option
- Use your real name and title in the signature

**Don't:**
- Use spam trigger words: "free," "guarantee," "act now," "limited time"
- Include images or attachments in cold emails
- Use URL shorteners (bit.ly links are spam signals)
- Use tracking pixels in every email (reduce to every other email)
- CC or BCC multiple recipients
- Use exclamation marks in subject lines

### 6. List Hygiene

Bad data kills deliverability faster than anything else.

- **Verify every email** before sending. Use NeverBounce, ZeroBounce, or Debounce.
- **Remove catch-all domains** — They accept every email but often don't deliver internally. They also don't bounce, so you never know your emails are going to a dead inbox.
- **Remove role-based addresses** — info@, sales@, team@ addresses rarely reach individuals.
- **Deduplicate across sequences** — Sending the same person two different sequences is a fast track to spam reports.
- **Honour unsubscribes immediately** — Even before legal compliance, each spam report damages your sender reputation.

## The Monitoring Layer

### 7. Track the Right Metrics

Your sales engagement tool shows open and reply rates. But for deliverability, you need more:

- **Inbox placement rate** — What percentage of emails land in the primary inbox vs. spam vs. promotions? Use GlockApps or MailReach monitoring.
- **Bounce rate** — Keep below 3%. Above 5% indicates list quality issues.
- **Spam complaint rate** — Keep below 0.1%. Above 0.3% and you're in danger.
- **Domain health score** — Check Google Postmaster Tools (if sending to Gmail) and Microsoft SNDS (if sending to Outlook).

### 8. The Weekly Deliverability Audit

Every Friday, spend 15 minutes:

1. Check inbox placement rates across all sending domains
2. Review bounce rates by domain and list source
3. Check Google Postmaster Tools for reputation changes
4. Review any spam complaints and identify patterns
5. Verify warming tools are still running
6. Check sending volumes against limits

If any metric degrades, pause outbound from that domain immediately and diagnose.

## The Recovery Playbook

Already in spam? Here's how to recover:

### Mild Damage (Open rates dropped 10-20%)
- Reduce sending volume by 50% for 2 weeks
- Increase warming volume
- Remove disengaged contacts from sequences
- Review and clean your content
- Re-check authentication records

### Moderate Damage (Open rates below 30%)
- Pause all outbound from affected domain for 1 week
- Run warming only for 2 weeks
- Rebuild lists with fresh, verified data
- Rewrite all email content
- Resume at 25% of previous volume

### Severe Damage (Domain blacklisted)
- Check blacklist status at mxtoolbox.com/blacklists.aspx
- Submit delisting requests to each blacklist
- Pause the domain for 30 days
- Consider retiring the domain and warming a new one
- Investigate root cause before restarting

## The Bottom Line

Email deliverability is not a set-it-and-forget-it problem. It's an ongoing practice that requires technical setup, behavioural discipline, and continuous monitoring.

**The best cold email in the world is worthless if it lands in spam. Fix your deliverability first, then worry about your copy.**

Print this checklist. Run through it quarterly. Your pipeline depends on it.`,
    author: "That Works",
    publishedAt: "Jan 2026",
    readTime: "13 min read",
    category: "Playbooks",
  },
  {
    id: "19",
    slug: "series-a-to-b-marketing-shift",
    title: "The Series A → B Marketing Shift: What Changes and What Breaks",
    excerpt: "The marketing that got you to Series A will not get you to Series B. Here's what needs to change — in your team, your systems, and your thinking.",
    content: `# The Series A → B Marketing Shift: What Changes and What Breaks

You raised your Series A. The product has traction. You've found some version of product-market fit. Marketing "worked" — maybe through founder-led sales, maybe through a scrappy content play, maybe through sheer hustle.

Now the board wants 3x growth. You need to go from $2M to $6M ARR, or $5M to $15M. And suddenly, everything that got you here stops working.

This isn't a failure of your team or your strategy. It's a natural phase transition. And if you don't recognise it and adapt, you'll burn 12-18 months of runway learning the hard way.

## What Worked at Series A

At Series A, marketing is typically characterised by:

- **Founder-led selling** — The CEO or CTO is the primary pipeline source. They network, speak at events, and close deals on reputation.
- **Single-channel dependence** — One channel drives 60-80% of pipeline. Usually content + SEO, or a strong referral network, or one paid channel that converts.
- **Generalist team** — One or two marketers who do everything: write blog posts, manage ads, build landing pages, run events, and update the CRM.
- **Gut-feel decisions** — "We think this is working" replaces "the data shows this is working." And at small scale, gut feel is often right.
- **Speed over process** — Move fast, ship things, figure it out later. No documentation, no playbooks, no QA.

This works when you're small because the founder's network is large relative to your target, one channel can drive enough volume, and the generalist team can context-switch fast enough.

## Why It Breaks at Series B Scale

### 1. Founder-Led Sales Hits a Ceiling

The CEO's network is finite. Every warm introduction has been made. The conference circuit produces diminishing returns. And the CEO's time is now split between fundraising, hiring, product, and the 47 other things that demand attention.

**What needs to change:** Build a repeatable demand generation engine that works without the founder in the room. This means investing in channels, content, and processes that generate pipeline independently.

### 2. Single-Channel Risk

That one channel that drove 80% of your pipeline? It's either:
- **Saturated** — You've reached everyone who will come through that channel
- **Fragile** — One algorithm change, one competitor, one policy update, and it's gone
- **Not scalable** — It produces consistent leads but can't 2x without 4x the spend

**What needs to change:** Build a multi-channel engine. No single channel should represent more than 40% of pipeline at Series B scale. You need at least three working channels.

### 3. Generalists Can't Scale

Your marketing generalist is amazing. They do everything. But "everything" at 3x scale means three times the work, and the quality of each thing degrades. The blog posts get less thoughtful. The campaigns get less targeted. The CRM gets messier.

**What needs to change:** Transition from generalists to specialists — or at minimum, a generalist supported by specialists. You need dedicated capacity for demand gen, content, and ops.

### 4. Gut Feel Becomes Guessing

At $2M ARR, the CEO knows every customer and can feel when things are working. At $6M, there are too many deals, too many channels, and too many variables for anyone to hold in their head. Gut feel at scale is just guessing with confidence.

**What needs to change:** Build a measurement and reporting infrastructure. Attribution, pipeline analytics, channel performance, conversion rates. Data doesn't replace judgment — it informs it.

## The Transition Playbook

### Phase 1: Audit and Foundation (Month 1-2)

Before you change anything, understand what you have:

**Channel audit:**
- Where did every closed-won deal originate in the last 12 months?
- What's the true CAC by channel (including team time, not just ad spend)?
- Which channels are growing vs. plateauing?

**Team audit:**
- What does each person actually spend their time on?
- What's falling through the cracks?
- Where are the biggest capability gaps?

**Tech stack audit:**
- Is your CRM clean enough to report on?
- Are your tools integrated or siloed?
- Can you track a lead from first touch to closed-won?

### Phase 2: Build the Engine (Month 3-5)

**Priority 1: Fix attribution.**
You cannot improve what you cannot measure. Implement multi-touch attribution — even a simple first-touch + last-touch model is better than nothing. Ensure every lead source, every campaign, and every touchpoint is tracked.

**Priority 2: Launch channel #2 (and #3).**
If inbound/content is your primary channel, launch outbound. If outbound is primary, invest in content/SEO. If both exist, add a partner channel or paid acquisition.

Each new channel needs:
- A 90-day plan with specific targets
- Dedicated ownership (even if part-time)
- A budget that allows meaningful testing
- Clear success criteria for continuation

**Priority 3: Build the content engine.**
Content at Series A is reactive — write what seems interesting, publish when you have time. Content at Series B is strategic:
- Content mapped to buyer journey stages
- Regular publishing cadence (weekly minimum)
- SEO-driven topic selection for bottom-of-funnel terms
- Sales enablement content (case studies, ROI calculators, comparison guides)

### Phase 3: Scale the Team (Month 4-7)

The hiring sequence matters. Hire in this order:

**1. Demand Gen / Growth lead** — Someone who can own pipeline targets and build multi-channel campaigns. This is your most critical hire.

**2. Content marketer** — Not a copywriter. A content marketer who understands SEO, buyer psychology, and can produce content that drives pipeline, not just traffic.

**3. Marketing ops / RevOps** — Someone to build and maintain the infrastructure: CRM, automation, attribution, reporting.

**4. Designer** — Either a hire or a reliable contractor/agency. Brand consistency matters more as you scale.

**Don't hire:** A VP of Marketing before you have the foundation built. A VP without infrastructure will either spend 6 months building what you could have built, or they'll layer strategy on top of a broken foundation.

### Phase 4: Systematise (Month 6-9)

Build the operating cadence:
- **Weekly pipeline review** — Marketing + Sales. What was created, what's progressing, what's stuck.
- **Monthly channel review** — Performance by channel, budget reallocation, experiment results.
- **Quarterly planning** — Goals, budgets, experiments, hiring.

Document everything:
- Campaign playbooks
- Channel setup guides
- Lead routing rules
- Qualification criteria
- Handoff processes

If only one person knows how something works, it's not a system — it's a dependency.

## The Budget Shift

Series A marketing budgets are typically 5-10% of ARR, heavily weighted toward tools and a small team. Series B requires a deliberate shift:

| Category | Series A | Series B Target |
|----------|----------|----------------|
| Team (salaries) | 60-70% | 50-60% |
| Paid acquisition | 5-15% | 15-25% |
| Content & creative | 5-10% | 10-15% |
| Tools & tech | 15-25% | 10-15% |
| Events & partnerships | 0-5% | 5-10% |

Total marketing spend should be 15-25% of target ARR at Series B stage. If you're spending significantly less, you're probably under-investing in growth.

## Common Mistakes in the Transition

**1. Hiring senior too early.** A VP of Marketing with a $250K package who arrives to find no CRM hygiene, no attribution, and no content engine will either quit or spend a year building the foundation you should have built with a $100K ops hire.

**2. Trying to scale what worked without changing it.** "Content worked at Series A, so let's publish 5x more content." More of the same doesn't scale. You need different types of content, different distribution, and different measurement.

**3. Ignoring sales alignment.** At Series A, marketing and sales are often the same person. At Series B, they're separate teams with separate incentives. If you don't deliberately align on definitions, handoffs, and targets, the gap will grow into a chasm.

**4. Over-investing in brand too early.** Brand matters, but at Series B, pipeline matters more. Don't spend $200K on a rebrand when you don't have multi-channel demand gen working.

**5. No patience for channel maturity.** New channels take 3-6 months to produce pipeline. If you launch outbound and kill it after 6 weeks because "it's not working," you'll never build a multi-channel engine.

## The Bottom Line

The Series A → B transition is the most dangerous inflection point in a company's growth. It's where marketing shifts from art to science, from hustle to system, from founder-dependent to self-sustaining.

**Don't try to do it all at once. Audit first. Fix measurement. Build channels sequentially. Hire in the right order. And give each investment enough time to prove itself.**

The companies that navigate this transition well emerge with a marketing engine that scales. The ones that don't spend two years and several million dollars learning lessons they could have learned in six months.`,
    author: "That Works",
    publishedAt: "Jan 2026",
    readTime: "16 min read",
    category: "Playbooks",
  },
  {
    id: "20",
    slug: "first-marketing-hire-not-content-writer",
    title: "Your First Marketing Hire Should Not Be a Content Writer",
    excerpt: "Every founder's instinct is to hire a content person first. Here's why that's almost always wrong — and who you should actually hire.",
    content: `# Your First Marketing Hire Should Not Be a Content Writer

You've been doing marketing yourself. Writing LinkedIn posts between investor calls. Cobbling together landing pages at midnight. Running Google Ads with a tutorial open in the next tab. It's time to hire someone.

Your instinct says: hire a content writer. Someone to write blog posts, manage social media, create the thought leadership pieces you don't have time for. It makes sense — content is the most visible gap, and writing is the hardest thing to do when you're stretched thin.

But it's almost always the wrong first hire. Here's why.

## The Content Writer Trap

Content writers are excellent at one thing: writing. Good ones are thoughtful, strategic, and can turn complex ideas into clear prose. But a content writer as your first marketing hire creates three problems:

### 1. Content Without Distribution Is a Tree Falling in a Forest

A content writer will produce blog posts, articles, maybe some social content. But who's going to distribute it? Who's building the SEO strategy to ensure it ranks? Who's running the paid promotion? Who's building the email list to send it to?

The answer, at most early-stage companies, is nobody. The content gets published, gets a few LinkedIn shares, and disappears. Six months later, you have 30 blog posts and no pipeline to show for it.

### 2. Content Doesn't Build Infrastructure

Your first marketing hire needs to build the *machine*, not just one output of the machine. That means:
- Setting up analytics and attribution
- Configuring the CRM and lead management
- Building landing pages and conversion paths
- Setting up email automation
- Establishing lead routing and handoff processes

A content writer isn't going to do any of this. Not because they can't, but because it's not their skill set or their instinct.

### 3. Content Strategy Requires Context That Takes Time to Build

Great B2B content comes from deep understanding of the buyer, the market, and the competitive landscape. Your first marketing hire won't have that context on day one. A content writer without context produces generic content. Generic content doesn't generate pipeline.

## Who You Should Hire First

### Option A: The Full-Stack Growth Marketer

This is the ideal first hire for most Series A / early-stage companies. This person:

- **Can build campaigns end-to-end** — From targeting to creative to landing page to follow-up sequence
- **Is comfortable with tools** — CRM, marketing automation, analytics, ad platforms
- **Thinks in funnels** — Not just "create content" but "create content that drives X to do Y"
- **Can write well enough** — Not Pulitzer-quality prose, but clear, compelling copy that converts
- **Is metrics-driven** — They know what to measure and how to optimise

This person won't write the best blog posts. But they'll build the system that turns blog posts (and every other marketing activity) into pipeline.

**Where to find them:** Look for people with 3-5 years of experience at B2B startups who've done a bit of everything. Job titles like "Growth Marketing Manager," "Demand Gen Manager," or "Marketing Manager" at companies in your stage and segment.

**What to pay:** $90-130K base + equity, depending on market and experience.

### Option B: The Marketing Ops / Demand Gen Hybrid

If your founder or another team member can handle the creative and content side, your first hire might be more technical:

- **CRM administration** — Building and maintaining your Salesforce or HubSpot instance
- **Marketing automation** — Email sequences, lead scoring, workflow building
- **Paid acquisition** — Running and optimising Google, LinkedIn, or Meta campaigns
- **Analytics and reporting** — Attribution, pipeline reporting, campaign performance
- **Lead management** — Routing, scoring, lifecycle stage management

This person is less glamorous but often more impactful. They build the infrastructure that makes everything else work.

**Where to find them:** Look for people from marketing ops, demand gen, or growth roles at B2B companies. They often come from slightly larger companies (100-500 employees) where they specialised.

**What to pay:** $85-120K base + equity.

## When to Hire the Content Writer

Content writers are essential — just not first. Hire a content writer when:

1. **You have distribution figured out** — You know how content will reach your audience (SEO strategy, email list, social following, paid amplification)
2. **You have infrastructure in place** — CRM is clean, attribution is working, you can track content's impact on pipeline
3. **You have content strategy defined** — You know what topics to cover, what formats work, and what the content should achieve at each buyer stage
4. **You have enough pipeline data** — You understand what questions buyers ask, what objections come up, and what content would accelerate deals

This is usually hire #2 or #3, roughly 3-6 months after your first marketing hire.

## The Hiring Sequence That Works

Based on dozens of companies we've worked with, here's the sequence that produces the best results:

### Hire 1: Full-Stack Growth Marketer (Month 1)

Responsibilities:
- Build the marketing infrastructure (CRM, analytics, automation)
- Launch 1-2 demand gen channels (usually outbound + one inbound channel)
- Create basic content (enough to support campaigns)
- Set up measurement and reporting

### Hire 2: Content Marketer (Month 4-6)

Responsibilities:
- Own the content calendar and production
- Build the SEO strategy
- Create sales enablement materials
- Develop thought leadership content

By now, Hire 1 has built the infrastructure. Hire 2 has a functioning system to plug into.

### Hire 3: Specialist (Month 8-12)

This depends on what's working:
- If paid acquisition is producing pipeline: hire a Paid Media Manager
- If outbound is producing pipeline: hire an SDR
- If content/SEO is producing pipeline: hire a second content person or an SEO specialist
- If everything is working but nothing is optimised: hire Marketing Ops

## But What If We Need Content Right Now?

You probably do. But you don't need a full-time hire to get it.

**Options for content before hiring a content writer:**

- **Founder-led content** — The founder writing 1-2 LinkedIn posts per week is often the highest-ROI content activity at early stage. It has built-in authenticity and distribution.
- **Freelance writers** — A good B2B freelance writer ($200-500 per article) can produce 2-4 pieces per month. Your growth marketer briefs them and handles distribution.
- **Agency support** — A content agency can produce a steady stream of content while you build in-house capability.
- **Repurpose sales conversations** — Record sales calls (with permission), extract insights, and turn them into content. Your growth marketer can do this or brief a freelancer.

The key insight: content production can be outsourced. Content strategy and distribution cannot. Your first hire should own strategy and distribution, and manage outsourced production.

## What to Look For in the Interview

When interviewing your first marketing hire, ask these questions:

1. **"Walk me through how you'd spend your first 30 days."** Good answer: audit, infrastructure, quick wins. Bad answer: "I'd start writing blog posts."

2. **"How would you generate 10 qualified leads in the next 60 days with a $5K budget?"** This tests resourcefulness and channel knowledge. You want specific tactics, not vague strategy.

3. **"Tell me about a campaign you built end-to-end."** You want someone who can describe the targeting, the creative, the landing page, the follow-up, and the results. If they only talk about one piece, they're a specialist, not a generalist.

4. **"How do you measure marketing's impact on revenue?"** You want someone who thinks in pipeline and revenue, not MQLs and traffic.

5. **"What tools would you set up in the first month?"** This reveals their operational mindset. If they don't mention CRM, analytics, or automation, they're thinking about outputs, not systems.

## The Bottom Line

Your first marketing hire sets the trajectory for your entire marketing function. Hire someone who builds systems, and everything you add later — content, paid, events, partnerships — plugs into a working machine.

**Hire someone who writes, and you'll have great content sitting on a website that nobody visits, measured by metrics that don't connect to revenue, distributed through channels that don't exist yet.**

Build the machine first. Then feed it content.`,
    author: "That Works",
    publishedAt: "Dec 2025",
    readTime: "14 min read",
    category: "Hiring & Team Design",
  },
  {
    id: "21",
    slug: "sdr-team-structure-that-scales",
    title: "The SDR Team Structure That Actually Scales",
    excerpt: "Most SDR teams hit a wall at 5 reps. Here's the org design, tooling, and management cadence that takes you from scrappy to scalable.",
    content: `# The SDR Team Structure That Actually Scales

You hired your first SDR. They booked some meetings. You hired two more. Meetings doubled. You hired five more. Meetings... stayed the same.

This is the SDR scaling wall, and nearly every B2B company hits it. The model that works with 1-3 reps breaks at 5-8. The tricks that worked at 5 stop working at 15. And the teams that push past 20 without redesigning their structure usually implode.

Here's how to build an SDR team that actually scales.

## Why SDR Teams Break

### Problem 1: Territory Overlap and Account Chaos

With 1-3 SDRs, territory management is simple — everyone works different accounts, the founder referees conflicts, and the CRM is messy but functional. At 5+, without clear territory rules:
- Multiple SDRs contact the same accounts
- Prospects get 3 emails from the same company in a week
- SDRs cherry-pick the best accounts and ignore the rest
- Account ownership disputes consume management time

### Problem 2: Quality Degradation

Early SDRs are usually A-players who figured things out independently. As you hire more, the average quality of outreach drops because:
- No standardised messaging or training
- No quality review process
- Reps default to volume over relevance
- The playbook that exists in the first reps' heads never gets documented

### Problem 3: Management Debt

Your first SDRs reported to the VP of Sales or the founder. That worked when there were two of them. At six, the VP doesn't have time to coach, review calls, or manage performance — they're busy closing deals.

### Problem 4: Tooling Fragmentation

Each SDR finds their own workflow. One uses Apollo, another uses Outreach, a third is running sequences from Gmail. Data lives in five different places. Reporting is impossible. Optimisation is guesswork.

## The Scalable SDR Org Design

### Structure: Pods, Not Individuals

Stop thinking about SDRs as individual contributors who happen to sit near each other. Think about pods — small, self-contained units with everything they need to generate pipeline.

**A pod consists of:**
- 3-4 SDRs
- 1 SDR Manager (player-coach until you have 8+ SDRs)
- Shared support (ops, content, data — can serve multiple pods)

**Each pod owns:**
- A specific segment or territory
- Its own account lists and sequences
- Its own metrics and targets
- Its own weekly cadence

**Why pods work:**
- Clear accountability — Each pod owns its pipeline number
- Knowledge sharing — SDRs learn from peers in the same segment
- Healthy competition — Pod vs. pod creates motivation without toxicity
- Manageable span — One manager coaching 3-4 reps can actually do it well

### Territory Design

Territory assignment makes or breaks SDR teams. The three models:

**1. Geographic territories**
- Pros: Clear boundaries, timezone alignment, local market knowledge
- Cons: Uneven market sizes, doesn't work for global companies with distributed buyers
- Best for: Companies with regional sales presence

**2. Industry/vertical territories**
- Pros: Deep domain expertise, relevant messaging, strong pattern recognition
- Cons: Uneven market sizes, some verticals are seasonal
- Best for: Companies selling to multiple distinct industries

**3. Account tier territories**
- Pros: Right effort on right accounts, career progression path, matched to deal complexity
- Cons: Enterprise accounts need more experience, SMB territories feel like punishment
- Best for: Companies with wide ACV range

**Our recommendation:** Combine models. Use industry verticals as the primary split, with account tiers as the secondary. A pod owns "Mid-market healthcare" or "Enterprise fintech" — not just "West Coast" or "accounts starting with A-M."

### The SDR Career Path

SDR burnout is the #1 scaling killer. Average SDR tenure is 14 months. If you don't offer a clear path, your best people leave — and recruiting replacements is expensive and slow.

**The career ladder:**

**SDR (0-12 months)**
- Focus: Book meetings, learn the product and market
- Quota: Meeting targets
- Comp: $55-70K base + $20-30K variable

**Senior SDR (12-18 months)**
- Focus: Higher-value accounts, mentor new SDRs, optimise sequences
- Quota: Meeting + pipeline targets
- Comp: $65-80K base + $25-35K variable

**SDR Team Lead (18-24 months)**
- Focus: Player-coach, manage 2-3 SDRs, own pod metrics
- Quota: Team meeting targets + personal contribution
- Comp: $75-90K base + $30-40K variable

**Paths from here:**
- **AE track** — Promote to closing role (most common)
- **Management track** — SDR Manager role
- **Ops track** — Move into RevOps or marketing ops
- **Customer Success track** — Leverage product and customer knowledge

Make the timeline explicit. Tell every new SDR on day one: "Here's where you can be in 12 months, and here's what you need to do to get there."

## The Management Cadence

### Daily (15 min)

**Morning standup:**
- What did you book yesterday?
- What's your plan for today?
- Any blockers?

This is not a status report. It's a coaching opportunity. If an SDR says "I have 50 emails to send," the manager should ask "To which segment, and what's your hypothesis?"

### Weekly (3 sessions)

**1. Pipeline review (30 min, per pod)**
- Open opportunities: Are they progressing or stalling?
- Meeting quality: What feedback are AEs giving?
- Account progress: Which target accounts are engaging?

**2. Call/email review (30 min, per pod)**
- Review 2-3 calls or email threads per SDR
- Coach on messaging, objection handling, qualification
- Share best practices across the pod

**3. Metrics review (15 min, per pod)**
- Activity metrics: Emails sent, calls made, LinkedIn touches
- Output metrics: Replies, meetings booked, meetings held
- Quality metrics: Meeting-to-opportunity rate, AE feedback scores

### Monthly

**1. Sequence performance review**
- Which sequences have the highest reply rates?
- Which email steps are underperforming?
- What A/B tests should we run next month?

**2. Territory review**
- Are territories balanced? Is one pod sitting on a gold mine while another struggles?
- Are there accounts that should be reassigned?
- Are there new segments or territories to open?

**3. Individual development conversations**
- Career path check-in
- Skill gap assessment
- Training plan for next month

## The Tech Stack

### Essential (non-negotiable)

- **CRM** — Salesforce or HubSpot. Every activity, every account, every opportunity lives here.
- **Sales engagement platform** — Outreach, Salesloft, or Apollo. Sequence management, email tracking, call logging.
- **Data provider** — Apollo, ZoomInfo, or LinkedIn Sales Navigator. Contact data and account intelligence.
- **Call recording** — Gong or Chorus. Every call recorded, searchable, and reviewable.

### Important (add at 5+ SDRs)

- **Lead routing** — Chili Piper or LeanData. Automatic round-robin or territory-based routing.
- **Intent data** — Bombora, 6sense, or G2. Prioritise accounts showing buying signals.
- **Email deliverability** — Mailreach or Warmbox. Protect sender reputation as volume scales.
- **Reporting** — Build custom dashboards in your CRM or use a tool like Coefficient or Klipfolio.

### Nice to have (add at 10+ SDRs)

- **AI writing assistance** — For personalisation at scale (but always human-reviewed)
- **Direct dial provider** — For phone-heavy motions
- **Video messaging** — Vidyard or Loom for personalised outreach
- **Competitive intelligence** — Klue or Crayon

## Metrics That Matter

### Activity Metrics (Inputs)
- Emails sent per day: 50-80
- Calls per day: 25-40 (if phone is part of the motion)
- LinkedIn touches per day: 15-25
- New accounts researched per week: 10-20

### Output Metrics (Results)
- Meetings booked per week: 3-5 per SDR
- Meetings held (net of no-shows): 2.5-4
- Pipeline created per month: Varies by ACV

### Quality Metrics (What Actually Matters)
- Meeting-to-opportunity conversion: 40-60%
- AE satisfaction score: Qualitative feedback
- Sequence reply rate: 8-15%
- Positive reply rate: 3-6%

**The cardinal rule:** Never optimise for activity at the expense of quality. 30 emails that get 5 replies beat 100 emails that get 3.

## Scaling Milestones

**1-3 SDRs:** Founder manages directly. Focus on finding repeatable messaging and ICP. No pods needed yet.

**4-6 SDRs:** Hire first SDR Manager (promote your best SDR or hire externally). Form first pod. Document playbooks. Standardise tooling.

**7-12 SDRs:** Form second pod. Territory model must be formalised. Career path must be explicit. Dedicated SDR ops support (can be shared with marketing ops).

**13-20 SDRs:** SDR Director role needed. 3-4 pods. Formal training program. Dedicated recruiting for SDR pipeline. QA process for outreach quality.

**20+ SDRs:** VP-level leadership. SDR enablement function. Advanced analytics. International expansion considerations.

## The Bottom Line

SDR teams don't scale linearly. You can't just add headcount and expect proportional results. The structure, management cadence, tooling, and career development need to evolve at each stage.

**Build pods, not headcount. Design territories, not lists. Manage cadences, not activities. And above all, invest in your people's development — because the SDRs you develop into AEs and managers today are the revenue leaders you'll need tomorrow.**`,
    author: "That Works",
    publishedAt: "Dec 2025",
    readTime: "16 min read",
    category: "Hiring & Team Design",
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return blogPosts.slice(0, count);
};
