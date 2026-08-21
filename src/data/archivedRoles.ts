// Archived roles, removed from the live hiring page on 2026-08-21.
// To re-open a role: move its entry back into roleData in src/pages/JoinRole.tsx,
// add its card back to the listing in src/pages/Join2.tsx, and re-add its
// /join/<slug> entry to STATIC_ROUTES in scripts/generate-sitemap.mjs.

export const archivedRoleData = {
  "marketing-intern": {
    title: "Marketing Generalist Intern",
    type: "Internship · Converts to full-time",
    stipend: "₹10,000 – ₹20,000 / month",
    intro: `This is a real, messy, high-context generalist position where you'll touch every part of how we grow the business and how we deliver for clients. We know what we need from you, but it's also important that you know what you want from us. You'll have a genuine say in where you go deep, what you own, and how your role develops. The best version of this internship is one you help define.`,
    workOn: [
      { label: "Content production", desc: "Writing LinkedIn posts, editing thought leadership pieces, building content calendars, helping clients figure out what the hell to say and how to say it." },
      { label: "Systems building", desc: "Setting up Notion workspaces, designing workflows, building dashboards, making sure nothing falls through the cracks." },
      { label: "Client delivery", desc: "Sitting in on strategy calls, doing competitive research, auditing funnels, building go-to-market plans alongside the team." },
      { label: "Internal ops", desc: "Maintaining our own content engine, keeping the CRM clean, running experiments, figuring out what's working and what isn't." },
      { label: "Brand building", desc: "Helping us show up consistently across LinkedIn, Reddit, our site, everywhere we need to have a presence." },
    ],
    closing: [
      "Some weeks you'll be deep in a Notion build. Some weeks you'll be drafting three months of content. Some weeks you'll be researching a client's competitors and building out positioning frameworks. It changes constantly, and that's the point.",
      "If you want a clearly defined role where you do the same thing every day, this isn't it. If you want to learn how marketing actually works end-to-end by doing it in real time with real stakes, keep reading.",
    ],
    whoYouAre: [
      { lead: "Curious in a way that's hard to turn off.", body: "You read things no one asked you to read, notice campaigns other people scroll past, and have opinions about why things work." },
      { lead: "You've spent time in marketing, formally or informally.", body: "A course, a job, a project, a brand you've pulled apart in your head. You have some grounding and you're here to build on it." },
      { lead: "Success is a real motivator for you.", body: "You keep score. You track whether things are actually working, and you care about the outcome, not just the effort." },
      { lead: "Organised without being rigid.", body: "You move fluidly between different kinds of work, hold a lot of moving pieces, keep track of what matters, and flag things before they become problems." },
    ],
    offer: [
      "₹10,000 – ₹20,000/month stipend, based on age and education",
      "3-month conversion window to a full-time role",
      "Flexible working hours (we care about output, not when you're online)",
      "Remote-first with occasional in-person time",
      "Generous paid leave",
      "Real work from day one. No busywork, no coffee runs.",
      "Direct access to the founding team",
    ],
    questions: [
      {
        q: "What's a piece of marketing you saw recently that made you stop and think 'I wish I'd made that'?",
        placeholder: "Link it. Tell us why it hit.",
      },
      {
        q: "Pick a B2B brand whose marketing you pay attention to. Tell us about one thing they did that didn't work, or that you thought was a miss.",
        placeholder: "What would you have done differently?",
      },
      {
        q: "We work primarily with early-stage B2B founders. What do you think most founders get wrong about marketing when they're just starting to scale?",
        placeholder: "Tell us what you actually think, not what sounds smart.",
      },
      {
        q: "Tell us about something you built, created, led, designed, organised, or figured out.",
        hint: "Could be a project, a system, a team, a campaign, a plan, an event, anything. We want to understand how you think, create, and get things done.",
        placeholder: "Walk us through it. What was the thing, how did you approach it, and what does it tell you about how you work?",
      },
      {
        q: "What do you actually want to do in marketing long-term?",
        placeholder: "If you know the kind of work you love, tell us what it is. If you don't know yet, tell us what you're trying to figure out or want to try. This won't impact your application, we're just curious.",
      },
    ],
  },
  "ops-admin-intern": {
    title: "Ops & Admin Intern",
    type: "Internship · Converts to full-time",
    stipend: "₹10,000 – ₹20,000 / month",
    intro: "Every system that runs smoothly runs because someone built it and someone maintains it. That someone is you. This is the role that keeps the whole operation from falling apart, and we mean that as a compliment. You'll touch every part of how we work, internally and with clients. We know what we need from you, but we're equally invested in what you get out of this. The best version of this internship is one you help define.",
    workOn: [
      { label: "Systems and processes", desc: "Building and maintaining the operational backbone of the business. Notion workspaces, SOPs, workflows, the stuff that makes everything repeatable." },
      { label: "Scheduling and coordination", desc: "Keeping the team and clients in sync. Meetings happen when they should, nothing falls through the cracks, everyone knows what's going on." },
      { label: "Client operations", desc: "Onboarding new clients, tracking deliverables, making sure what we promise gets delivered the way we promised it." },
      { label: "Tool and stack management", desc: "Owning our tool stack. Knowing what we're paying for, what we're actually using, and what we should add or cut." },
      { label: "Internal projects", desc: "Helping us get better at how we work. If something is inefficient, you'll notice it, flag it, and help fix it." },
    ],
    closing: [
      "This role touches everything. Some days that means setting up an onboarding flow. Other days it means figuring out why a process broke and making sure it never breaks the same way again.",
      "If you're the kind of person who builds a spreadsheet for fun and notices when a system is clunky and immediately starts thinking about how to fix it, keep reading.",
    ],
    whoYouAre: [
      { lead: "Wired for organisation.", body: "You have systems for your systems. Your notes are clean, your inbox is managed, and you get genuine satisfaction from things running smoothly." },
      { lead: "Proactive, not reactive.", body: "You spot problems before they become fires. You don't wait to be asked. You flag, suggest, and solve." },
      { lead: "Comfortable across very different kinds of work.", body: "Ops isn't one thing. You'll be in spreadsheets, in Notion, in client calls, in strategy conversations. You move between all of it without losing your footing." },
      { lead: "Not precious about scope.", body: "You do what needs doing. If something is important and no one else is handling it, you handle it." },
    ],
    offer: [
      "₹10,000 – ₹20,000/month stipend, based on age and education",
      "3-month conversion window to a full-time role",
      "Direct access to the founding team",
      "Flexible working hours (we care about output, not when you're online)",
      "Remote-first with occasional in-person time",
      "Generous paid leave",
      "Real work from day one. No busywork, no coffee runs.",
    ],
    questions: [
      {
        q: "Describe a system you built or improved to solve a recurring problem.",
        placeholder: "Could be personal, academic, at work, anywhere. What was the problem, what did you build, and did it work?",
      },
      {
        q: "Three urgent things land on your plate at the same time. How do you decide what to do first?",
        placeholder: "Walk us through your actual thought process.",
      },
      {
        q: "We use Notion as our main workspace. What does a well-built team Notion look like to you?",
        placeholder: "If you've built one before, tell us about it. If not, tell us what you'd want it to do.",
      },
      {
        q: "Tell us about a time something important slipped through the cracks, yours or someone else's, and you had to fix it.",
        placeholder: "What happened, what did you do, and what did you change afterwards?",
      },
      {
        q: "What do you want to own here, and where do you want this to take you?",
        placeholder: "Be specific. What does a good version of this internship look like for you?",
      },
    ],
  },
};

export const archivedRoleCards = [
  {
    slug: "marketing-intern",
    name: "Marketing Intern",
    tagline: "Curious, hands-dirty, opinionated. Real work from day one.",
    desc: "An open call. We're not looking for a specific skill set; we're looking for someone who is curious, opinionated, and wants to get their hands dirty across strategy, content, and GTM. You'll do real work from day one.",
    badges: ["Intern", "Converts to full-time"],
  },
  {
    slug: "ops-admin-intern",
    name: "Ops & Admin Intern",
    tagline: "You make everything run. Systems, people, process.",
    desc: "The person who makes everything run. Systems, scheduling, client ops, internal processes. If you're the kind of person who builds a spreadsheet for fun, we want to meet you.",
    badges: ["Intern", "Converts to full-time"],
  },
];
