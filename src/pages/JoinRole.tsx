import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { isValidEmail, isValidPhone, isValidLinkedIn } from "@/lib/validation";
import "@/styles/pages/join-role.css";

const WEBHOOK = "https://shrishti-y.app.n8n.cloud/webhook/job-application-form";

// ── Role data ──────────────────────────────────────────────────────────────────

const roleData: Record<string, {
  title: string;
  type: string;
  stipend: string;
  intro: string;
  workOn: { label: string; desc: string }[];
  closing: string[];
  whoYouAre?: { lead: string; body: string }[];
  offer: string[];
  questions: { q: string; hint?: string; placeholder?: string }[];
}> = {
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
  "finance-intern": {
    title: "Finance Intern",
    type: "Internship · Converts to full-time",
    stipend: "₹10,000 – ₹20,000 / month",
    intro: "This is not a role where you sit in a corner and reconcile spreadsheets. This is the financial engine of a fast-moving consultancy, and you'll be in the middle of it. You'll see how a services business actually makes money, where it leaks money, and how to build the systems that keep it healthy. We know what we need from you, but it's equally important that you know what you want from us. You'll have a say in where you go deep and how your role develops.",
    workOn: [
      { label: "Financial tracking and reporting", desc: "Building and maintaining our P&L, cash flow forecasts, and financial dashboards. The numbers that tell us whether we're actually on track." },
      { label: "Invoicing and accounts", desc: "Making sure money moves when it should. Client invoicing, follow-ups, expense tracking, keeping the books clean." },
      { label: "Pricing and proposals", desc: "Helping build financial models for client engagements. Understanding what our work is worth and how to communicate that." },
      { label: "Internal ops", desc: "Budgets, subscriptions, tool costs. The unsexy but essential stuff that keeps a business financially healthy." },
      { label: "Commercial analysis", desc: "Helping us understand which clients, services, and activities are actually driving value, and which aren't." },
    ],
    closing: [
      "You'll work directly with the founder. No middle layers, no watered-down briefs. Real numbers, real stakes, real decisions.",
      "If you want to understand how a business actually works financially, not just in theory, this is where that happens.",
    ],
    whoYouAre: [
      { lead: "Numbers are how you make sense of the world.", body: "You see patterns in data, find the story behind the spreadsheet, and get genuinely uncomfortable when things don't add up." },
      { lead: "You've spent time with finance, formally or informally.", body: "A degree, a course, a business you've helped run, a personal investing habit. You have some grounding and you're here to build on it." },
      { lead: "Precise and organised without being slow.", body: "You catch errors others miss, document things properly, and don't let loose ends sit. But you can also move at pace when you need to." },
      { lead: "You want to understand the whole picture.", body: "Not just the numbers in isolation. You want to know what they mean for the business and what decisions they should drive." },
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
        q: "Walk us through how you'd build a simple cash flow forecast for a consulting business that invoices monthly.",
        placeholder: "Don't worry about getting it perfect. We want to see how you think through it.",
      },
      {
        q: "Tell us about a time you found an error or inconsistency in data that others had missed.",
        placeholder: "What did you do, and what did it end up meaning?",
      },
      {
        q: "A client delays their invoice payment by three weeks. How do you handle the conversation, and what do you put in place so it doesn't happen again?",
        placeholder: "Walk us through your thinking.",
      },
      {
        q: "Tell us about a financial concept or metric you taught yourself outside of what you were formally taught.",
        placeholder: "Could be something from a book, a podcast, a business you've been following closely.",
      },
      {
        q: "What do you actually want to do with finance long-term?",
        placeholder: "Where do you want to end up, and how does this fit into that?",
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
  "gtm-systems-engineer": {
    title: "GTM Systems Engineer",
    type: "Full-time",
    stipend: "",
    intro: "Most companies build their GTM on intuition, luck, and duct tape. We build it on infrastructure. That's where you come in. You're the person who takes a messy, manual, founder-led revenue process and turns it into something clean, scalable, and genuinely repeatable. You think in systems, you speak both sales and engineering, and you hate doing the same thing twice.",
    workOn: [
      { label: "CRM architecture and management", desc: "Designing and maintaining CRM systems that actually reflect how deals move. Clean data, smart pipelines, proper hygiene built in from the start." },
      { label: "Outbound infrastructure", desc: "Building the sequences, tooling, and workflows that power prospecting and outreach. From domain setup to send cadences to response handling." },
      { label: "Data pipelines and attribution", desc: "Making sure the right data gets to the right place. Understanding what's actually driving revenue and being able to prove it." },
      { label: "Tool integration", desc: "The plumbing between systems. CRM, marketing automation, enrichment tools, analytics. Making them talk to each other properly." },
      { label: "Lead scoring and qualification", desc: "Building the frameworks that help the team focus on the right accounts at the right time, not just the loudest ones." },
    ],
    closing: [
      "This is not a set-it-and-forget-it role. GTM systems break, evolve, and need to be rethought constantly as a business grows. You'll own that process.",
      "If you've ever looked at a founder's sales process and immediately started mentally mapping what the CRM should look like, this is your role.",
    ],
    whoYouAre: [
      { lead: "You think in systems and workflows.", body: "Every process you encounter, you're already mentally mapping it, finding the bottlenecks, and redesigning it." },
      { lead: "Technically strong and commercially curious.", body: "You can build an automation sequence and then sit in a sales call and understand exactly why it is or isn't working." },
      { lead: "Obsessive about data quality.", body: "You know a CRM is only as useful as the data inside it. You build with hygiene in mind from day one, not as an afterthought." },
      { lead: "You've worked in or around GTM before.", body: "You've built sequences, managed a CRM, set up automations. You know the tools and you know their limits." },
    ],
    offer: [
      "Competitive compensation, discussed during the process",
      "Direct ownership over the systems you build",
      "Direct access to the founding team",
      "Flexible working hours (we care about output, not when you're online)",
      "Remote-first with occasional in-person time",
      "Generous paid leave",
    ],
    questions: [
      {
        q: "Walk us through a GTM system you've built from scratch. What were the inputs, the outputs, and how did you measure whether it was working?",
        placeholder: "Be specific. Tools, structure, what broke, what you'd do differently.",
      },
      {
        q: "A founder tells you their outbound is broken. What are the first five questions you ask?",
        placeholder: "What are you trying to diagnose, and why those questions specifically?",
      },
      {
        q: "Pick any CRM. What are its three biggest limitations for an early-stage B2B team, and how would you work around them?",
        placeholder: "We're not looking for a product review. Tell us what you've actually run into.",
      },
      {
        q: "How do you approach attribution when a deal involves multiple touchpoints across multiple channels?",
        placeholder: "What's your framework, and what compromises do you make?",
      },
      {
        q: "What does your ideal GTM stack look like for a B2B services business at early scale?",
        placeholder: "Tools, structure, rationale. Tell us how you'd build it and why.",
      },
    ],
  },
  "sales": {
    title: "Sales",
    type: "Full-time",
    stipend: "",
    intro: "B2B founders have been sold to badly their whole lives. Vague pitches, inflated promises, follow-ups that go nowhere. We're not that. This is a sales role where you believe in what you're selling because you've seen it work, where you talk to founders like a peer and not a vendor, and where you care about the outcome more than the close.",
    workOn: [
      { label: "Outbound prospecting", desc: "Finding the right founders, understanding their situation, and starting conversations that actually go somewhere." },
      { label: "Discovery and qualification", desc: "Running calls that uncover what's actually broken in a business and whether we're the right people to fix it." },
      { label: "Proposals and deal management", desc: "Translating what we do into something that makes sense for a specific client. Handling the process from first interest to signature." },
      { label: "Pipeline management", desc: "Keeping your pipeline clean, your follow-ups sharp, and your forecast honest." },
      { label: "Feedback to the team", desc: "You're the closest person to the market. What you hear in calls shapes how we position, package, and price our work." },
    ],
    closing: [
      "This is a full-cycle sales role. You'll own deals from first contact to close, which means you'll learn more in six months here than in two years somewhere bigger.",
      "We're not looking for someone who's great at following a script. We're looking for someone who's genuinely curious about businesses, listens well, and earns trust quickly.",
    ],
    whoYouAre: [
      { lead: "You actually like selling.", body: "Not because you're good at it or it pays well. Because you find it genuinely interesting to understand what someone needs and figure out whether you can help them." },
      { lead: "Curious about businesses and how they grow.", body: "You read about companies, you notice how founders talk about their problems, and you have opinions about what's working and what isn't." },
      { lead: "You listen more than you talk.", body: "The best salespeople spend most of a discovery call asking questions. You already know this." },
      { lead: "Persistent without being annoying.", body: "You follow up. You're organised. You don't let good conversations go cold. But you also read the room." },
    ],
    offer: [
      "Competitive base with performance-based upside",
      "Full-cycle ownership from day one",
      "Direct access to the founding team",
      "Flexible working hours (we care about output, not when you're online)",
      "Remote-first with occasional in-person time",
      "Generous paid leave",
    ],
    questions: [
      {
        q: "Tell us about something you've sold, formally or informally, that you actually believed in.",
        placeholder: "What made you believe in it, and how did that show up in how you sold it?",
      },
      {
        q: "A founder on a discovery call tells you they don't have budget right now. Walk us through how you handle it.",
        placeholder: "What do you say, what do you ask, and what do you do next?",
      },
      {
        q: "What do you think makes B2B services sales genuinely hard?",
        placeholder: "Not textbook hard. Actually hard. What does good look like when you get it right?",
      },
      {
        q: "Tell us about a deal or conversation that didn't go the way you wanted.",
        placeholder: "We're not looking for a polished lesson learned. Tell us what actually happened.",
      },
      {
        q: "Why sales, and why here specifically?",
        placeholder: "What is it about this kind of work at this kind of company that makes sense for you right now?",
      },
    ],
  },
};

// ── Form fields ────────────────────────────────────────────────────────────────

type FormState = {
  name: string; email: string; phone: string; linkedin: string;
  q1: string; q2: string; q3: string; q4: string; q5: string; q6: string;
};

const emptyForm: FormState = { name: "", email: "", phone: "", linkedin: "", q1: "", q2: "", q3: "", q4: "", q5: "", q6: "" };
const qKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

// ── Page ───────────────────────────────────────────────────────────────────────

const JoinRole = () => {
  const { slug } = useParams<{ slug: string }>();
  const role = slug ? roleData[slug] : null;

  const [form, setForm] = useState<FormState>(emptyForm);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const fieldErrors = {
    email:    !isValidEmail(form.email)    ? "Please enter a valid email address." : null,
    phone:    !isValidPhone(form.phone)    ? "Please enter a valid phone number (e.g. +61 400 000 000)." : null,
    linkedin: !isValidLinkedIn(form.linkedin) ? "Please enter a valid LinkedIn URL (e.g. linkedin.com/in/yourprofile)." : null,
  };

  const show = (field: string) => touched[field] || submitAttempted;
  const handleBlur = (field: string) => setTouched(prev => ({ ...prev, [field]: true }));

  if (!role) {
    return (
      <div className="join-role-page">
        <Nav variant="light" />
        <div className="jr-not-found">
          <p>Role not found.</p>
          <Link to="/join">← Back to careers</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (Object.values(fieldErrors).some(Boolean)) return;

    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData();
    fd.append("role", role.title);
    (Object.entries(form) as [string, string][]).forEach(([k, v]) => fd.append(k, v));
    if (file) fd.append("file", file);

    try {
      const res = await fetch(WEBHOOK, { method: "POST", body: fd });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <>
      <SEOHead
        title={`${role.title} — That Works`}
        description={role.intro.slice(0, 155)}
        canonical={`/join/${slug}`}
      />
      <div className="join-role-page">
        <Nav variant="light" />

        {/* ── Hero ── */}
        <section className="jr-hero">
          <div className="jr-hero-inner">
            <Link to="/join" className="jr-back">← All roles</Link>
            <div className="jr-eyebrow">{role.type}</div>
            <h1 className="jr-title">{role.title}</h1>
            {role.stipend && <div className="jr-stipend">{role.stipend}</div>}
          </div>
        </section>

        {/* ── Role description ── */}
        {(role.intro || role.workOn.length > 0) && (
          <section className="jr-section">
            <div className="jr-inner">
              <p className="jr-intro">{role.intro}</p>
              {role.workOn.length > 0 && (
                <>
                  <h2 className="jr-subhead">You'll work on:</h2>
                  <ul className="jr-work-list">
                    {role.workOn.map((item, i) => (
                      <li key={i} className="jr-work-item">
                        <span className="jr-work-label">{item.label}</span>
                        <span className="jr-work-desc">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {role.closing.map((para, i) => (
                <p key={i} className="jr-closing">{para}</p>
              ))}
            </div>
          </section>
        )}

        {/* ── Who you are ── */}
        {role.whoYouAre && role.whoYouAre.length > 0 && (
          <section className="jr-section jr-who-section">
            <div className="jr-inner">
              <div className="jr-section-eyebrow">Who you are</div>
              <ul className="jr-who-list">
                {role.whoYouAre.map((item, i) => (
                  <li key={i} className="jr-who-item">
                    <span className="jr-who-lead">{item.lead}</span>{" "}{item.body}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── What we offer ── */}
        {role.offer.length > 0 && (
          <section className="jr-section">
            <div className="jr-inner">
              <div className="jr-section-eyebrow">What we offer</div>
              <ul className="jr-offer-list">
                {role.offer.map((item, i) => (
                  <li key={i} className="jr-offer-item">{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── About That Works ── */}
        <section className="jr-section">
          <div className="jr-inner">
            <div className="jr-section-eyebrow">About That Works</div>
            <p className="jr-body">We're a <Link to="/approach">GTM infrastructure</Link> agency. That means we build the systems, processes, and workflows that make businesses feel easy to run and genuinely seamless to grow. The stuff most companies skip, patch together badly, or outsource to someone who doesn't really get it. We get it.</p>
            <p className="jr-body">Our whole belief, the thing we'd tattoo on the wall, is that when you have the right systems in place, growth stops being a struggle and starts being an obvious consequence. It just happens. That's what we're building towards, for our clients and for ourselves.</p>
            <p className="jr-body">We're fixers and builders and designers. We can hold the 30,000-foot view and the tiniest detail at the same time without losing our minds. We're systems thinkers who somehow ended up being some of the most creative people in most rooms. We love AI and encourage its use, but also know where it can help us and where it can hurt us.</p>
            <p className="jr-body">Most importantly! We know how to have a really, <em>really</em> good time. The work is exciting, the problems are interesting, and we've made a collective decision to actually enjoy what we do. If that sounds like your kind of place, we'd love to meet you.</p>
          </div>
        </section>

        {/* ── Application process ── */}
        <section className="jr-section">
          <div className="jr-inner">
            <div className="jr-section-eyebrow">The application process</div>
            <ul className="jr-who-list">
              <li className="jr-who-item"><span className="jr-who-lead">AI-first, not AI-always:</span> We love AI, so we know where it helps. Recruitment isn't one of those places. We don't use AI to screen, and we ask that you don't use it to apply.</li>
              <li className="jr-who-item"><span className="jr-who-lead">You are more than your resume:</span> We care about who you are, how you think, and where you want to go. Half-formed, messy brain dumps over polished, sanitised paragraphs. Give us a peek into your brain.</li>
              <li className="jr-who-item"><span className="jr-who-lead">Every application gets a response:</span> A real response from a real person, within 2 working days. Actual feedback, honest reasons, and whatever value we can add.</li>
            </ul>
          </div>
        </section>

        {/* ── Application form ── */}
        <section className="jr-section jr-form-section">
          <div className="jr-inner">
            <h2 className="jr-apply-hed">Apply</h2>

            <div className="jr-form-preamble">
              <p className="jr-form-note">We care about how you think, not how polished your answers are. Write like you'd talk. Messy, half-formed thoughts are fine. <strong>Sanitised, perfect paragraphs are not.</strong></p>
              <p className="jr-ai-warning">We don't read AI-generated answers. If we suspect an answer was written by ChatGPT or any other tool, we won't progress your application. This isn't a rule we enforce. It's a principle we're telling you upfront because it matters to how we hire.</p>
            </div>

            {status === "success" ? (
              <div className="jr-success">
                <div className="jr-success-hed">We've got it.</div>
                <p className="jr-success-body">We read every application personally and we'll be in touch, either way.</p>
              </div>
            ) : (
              <form className="jr-form" onSubmit={handleSubmit} noValidate>

                <div className="jr-form-row">
                  <div className="jr-field">
                    <label className="jr-label">Full name</label>
                    <input className="jr-input" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div className="jr-field">
                    <label className="jr-label">Email</label>
                    <input
                      className={`jr-input${show("email") && fieldErrors.email ? " jr-input--error" : ""}`}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      required
                      placeholder="your@email.com"
                    />
                    {show("email") && fieldErrors.email && (
                      <span className="jr-field-error">{fieldErrors.email}</span>
                    )}
                  </div>
                </div>

                <div className="jr-form-row">
                  <div className="jr-field">
                    <label className="jr-label">Phone number</label>
                    <input
                      className={`jr-input${show("phone") && fieldErrors.phone ? " jr-input--error" : ""}`}
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={() => handleBlur("phone")}
                      required
                      placeholder="+61 400 000 000"
                    />
                    {show("phone") && fieldErrors.phone && (
                      <span className="jr-field-error">{fieldErrors.phone}</span>
                    )}
                  </div>
                  <div className="jr-field">
                    <label className="jr-label">LinkedIn URL</label>
                    <input
                      className={`jr-input${show("linkedin") && fieldErrors.linkedin ? " jr-input--error" : ""}`}
                      name="linkedin"
                      value={form.linkedin}
                      onChange={handleChange}
                      onBlur={() => handleBlur("linkedin")}
                      required
                      placeholder="linkedin.com/in/yourprofile"
                    />
                    {show("linkedin") && fieldErrors.linkedin && (
                      <span className="jr-field-error">{fieldErrors.linkedin}</span>
                    )}
                  </div>
                </div>

                {role.questions.map((qObj, i) => (
                  <div key={i} className="jr-field">
                    <label className="jr-label jr-label--q"><span className="jr-q-num">{String(i + 1).padStart(2, '0')}</span>{qObj.q}</label>
                    {qObj.hint && <span className="jr-hint">{qObj.hint}</span>}
                    <textarea
                      className="jr-textarea"
                      name={qKeys[i]}
                      value={form[qKeys[i]]}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={qObj.placeholder}
                    />
                  </div>
                ))}

                <div className="jr-field jr-field--file">
                  <div className="jr-file-header">
                    <span className="jr-label">Portfolio, work samples, or CV</span>
                    <span className="jr-optional-tag jr-optional-tag--orange">completely optional</span>
                  </div>
                  <p className="jr-file-note">Only share this if you want to. Your answers matter far more than any document. No CV? No problem.</p>
                  <label className="jr-file-label">
                    <input
                      type="file"
                      className="jr-file-input"
                      onChange={e => setFile(e.target.files?.[0] ?? null)}
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    />
                    <span className="jr-file-btn jr-file-btn--lavender">{file ? file.name : "Choose file"}</span>
                    <span className="jr-file-hint">PDF, DOC, or image</span>
                  </label>
                </div>

                {errorMsg && <p className="jr-error">{errorMsg}</p>}

                <button className="jr-submit" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Sending…" : "Submit application →"}
                </button>
              </form>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default JoinRole;
