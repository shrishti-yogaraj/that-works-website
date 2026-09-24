import { useState } from "react";
import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import "@/styles/pages/under-the-hood-alt.css";

// Razorpay checkout for the audit. Every "book your week" CTA stays hidden
// until this link exists, so the page is correct in the meantime.
const RAZORPAY_URL: string | null = null;

const summary = [
  { value: "5", label: "days from kickoff", detail: "Three calls, about three hours of yours.", tone: "orange" },
  { value: "49", label: "breaking points checked", detail: "Across all six areas of your GTM.", tone: "lavender" },
  { value: "27", label: "documents you keep", detail: "Yours forever, whoever does the fixing.", tone: "yellow" },
  { value: "₹50,000", label: "fixed", detail: "Everything included. No hourly meter.", tone: "plain" },
];

const symptoms = [
  "You're about to spend money fixing something you can't name.",
  "Sales says the leads are bad. Marketing says they're fine.",
  "You couldn't say which channel produced your cheapest customer.",
  "Someone builds the weekly numbers by hand, and you still don't trust them.",
  "You've tried a hire, an agency, or a tool. The problem's still here.",
  "Everyone you ask has a confident answer. No two of them match.",
];

const areas = [
  {
    name: "Strategy, positioning and ICP",
    body: "Who you actually sell to, versus who you say you sell to. Break this and everything above it is a symptom.",
  },
  {
    name: "Brand",
    body: "What the market thinks you are, and whether that matches what you've been telling them.",
  },
  {
    name: "Acquisition",
    body: "Where leads come from, what they cost, and which sources have never produced a closed deal.",
  },
  {
    name: "Conversion",
    body: "Where qualified interest stalls. Follow-up, handoffs, and the gaps nobody owns.",
  },
  {
    name: "Retention and expansion",
    body: "Whether customers stay, grow, and refer, or quietly leave without anyone noticing.",
  },
  {
    name: "Revenue operations and measurement",
    body: "Attribution, reporting, data integrity. The layer that makes everything else readable.",
  },
];

const packs = [
  {
    name: "The Diagnosis",
    count: 7,
    visible: [
      "GTM health scorecard",
      "Root cause report",
      "The one thing to take from this audit",
      "Do-not-touch list",
    ],
    hidden: [
      "Founder, team and data alignment report",
      "Annotated evidence trail",
      "Reading guide",
    ],
  },
  {
    name: "The Evidence",
    count: 9,
    visible: [
      "Outside-in report, 74 checks",
      "Up to 20 closed deals, opened up",
      "Five lead-flow traces, hop by hop",
      "ICP reality check",
    ],
    hidden: [
      "Funnel reconstruction with speed to first touch",
      "Channel performance ledger",
      "CRM and data hygiene report, 35 checks",
      "Twenty questions your GTM can't answer",
      "Current-state stack and data flow map",
    ],
  },
  {
    name: "The Path Forward",
    count: 11,
    visible: [
      "Prioritised gap map",
      "90-day action plan",
      "Quick wins you can do this week",
      "Cost to build it in house",
    ],
    hidden: [
      "Dependency chain map",
      "Opportunity cost ledger",
      "Fix blueprints for your top gaps",
      "Automation opportunity register",
      "Build vs buy vs DIY matrix",
      "Future-state architecture map",
      "Metrics that matter, baselines already measured",
    ],
  },
];

const steps = [
  {
    when: "Day 1",
    title: "The kickoff",
    body: "Sixty minutes, founder only. Your best and worst customers, who you think you sell to, what you've already tried, and what can't change.",
  },
  {
    when: "Days 1 to 4",
    title: "The outside-in pass",
    body: "Seventy-four checks across nine blocks: mystery shop, email infrastructure, your site and stack, paid footprint, search, AI visibility, reviews, your outbound, and context. None of it needs a login.",
  },
  {
    when: "Days 2 to 4",
    title: "Inside your stack",
    body: "Short sessions with your sales and marketing people, 45 to 60 minutes each. You're not needed in any of them.",
  },
  {
    when: "Days 2 to 4",
    title: "The reconstruction",
    body: "We trace live lead flows hop by hop, open up every closed deal you have, and rebuild your funnel from what the data actually says.",
  },
  {
    when: "Day 5",
    title: "The findings, live",
    body: "Sixty minutes walking through the diagnosis, root cause by root cause. All 27 documents land straight after. Then you read.",
  },
  {
    when: "A week later, once you've been through the pack",
    title: "The plan",
    body: "You've had the weekend and then some to go through all 27 documents. You bring your challenges to anything in the pack, and we go owner by owner on what happens next.",
  },
];

const principles = [
  {
    tag: "Evidence",
    title: "Every claim has an exhibit.",
    body: "Screenshots, record IDs, timestamps. Nothing in the pack is an opinion you have to take on trust, and you can check any of it yourself.",
  },
  {
    tag: "Restraint",
    title: "We tell you what not to fix.",
    body: "A protected list of what's quietly working, plus the real problems that are still the wrong ones to start with. Knowing what to leave alone is most of the value.",
  },
  {
    tag: "Ownership",
    title: "The fix is the same whoever does it.",
    body: "The audit opens up the gaps and writes them down properly. Whether we fix them, your team does, or you hand it to someone else, the work is identical. That's the whole point of writing it down.",
  },
];

const faqs = [
  {
    q: "What do you actually need from me?",
    a: "One email with access, and three calls. About three hours of your time across the whole week. Your team gives a little more, in short sessions you don't need to sit in.",
  },
  {
    q: "When does the week start?",
    a: "At kickoff, not at payment. We'll need access in place 48 hours before that call, and the outside-in work is already running by then.",
  },
  {
    q: "What if we don't have twenty closed deals?",
    a: "Then we take every closed deal from the last twelve months. If that's thin, the thinness is itself one of the findings, and usually an important one.",
  },
  {
    q: "Do you fix what you find?",
    a: "That's a separate conversation, and a separate scope. The audit is complete on its own, and the quick wins are yours to run the same week.",
  },
];

const PackCard = ({ pack, tone }: { pack: (typeof packs)[number]; tone: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="utha-pack">
      <div className="utha-pack-head">
        <span className={`utha-pack-count utha-pack-count--${tone}`}>{pack.count}</span>
        <h3>{pack.name}</h3>
      </div>
      <ul className="utha-pack-list">
        {pack.visible.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {expanded &&
          pack.hidden.map((item) => (
            <li key={item} className="utha-pack-extra">
              {item}
            </li>
          ))}
      </ul>
      <button
        type="button"
        className="utha-pack-toggle"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "Show less" : `and ${pack.hidden.length} more`}
      </button>
    </div>
  );
};

const tones = ["orange", "lavender", "yellow"];

const UnderTheHoodAlt = () => {
  const { openPopup } = useContactPopup();

  return (
    <>
      <SEOHead
        title="Under the Hood, a GTM diagnostic by That Works"
        description="Five days inside your GTM machine. What's broken and why, what each leak is costing you, and the order to fix it in."
        canonical="/under-the-hood-alt"
        noindex
      />
      <Nav />

      <div className="utha">
        {/* ── HERO ── */}
        <section className="utha-hero">
          <div className="utha-wrap utha-center">
            <div className="utha-eyebrow">A GTM diagnostic by That Works</div>
            <h1>
              Under the <em>Hood</em>
            </h1>
            <p className="utha-lede">
              Five days inside your GTM machine. What's broken and why, what each
              leak is costing you, and the order to fix it in.
            </p>
            <div className="utha-actions utha-actions--center">
              <button
                className="btn-primary"
                onClick={() => openPopup("under-the-hood-alt-fit")}
              >
                See if it's for you →
              </button>
              {RAZORPAY_URL && (
                <a
                  className="btn-ghost"
                  href={RAZORPAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book your week →
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ── SUMMARY ── */}
        <section className="utha-summary">
          <div className="utha-wrap">
            <div className="utha-summary-grid">
              {summary.map((s) => (
                <div key={s.label} className={`utha-sum utha-sum--${s.tone}`}>
                  <span className="utha-sum-val">{s.value}</span>
                  <span className="utha-sum-label">{s.label}</span>
                  <span className="utha-sum-detail">{s.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className="utha-problem">
          <div className="utha-wrap">
            <div className="utha-tag utha-tag--yellow">Where you are</div>
            <h2>
              Everyone has a theory. Nobody has the <em>evidence</em>.
            </h2>
            <div className="utha-symptoms">
              {symptoms.map((s, i) => (
                <div key={s} className="utha-symptom">
                  <span className="utha-symptom-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p>{s}</p>
                </div>
              ))}
            </div>
            <p className="utha-turn">
              Every one of these leaves a trail. We follow it.
            </p>
          </div>
        </section>

        {/* ── DELIVERABLES ── */}
        <section className="utha-deliverables">
          <div className="utha-wrap">
            <div className="utha-tag utha-tag--lavender">What lands on your desk</div>
            <h2>
              27 documents. Three packs. <em>All yours.</em>
            </h2>
            <div className="utha-pack-grid">
              {packs.map((p, i) => (
                <PackCard key={p.name} pack={p} tone={tones[i % 3]} />
              ))}
            </div>
            <p className="utha-note">
              Every document is the same shape: what we found, the evidence
              behind it, and what to do about it.
            </p>
          </div>
        </section>

        {/* ── SCOPE ── */}
        <section className="utha-scope">
          <div className="utha-wrap">
            <div className="utha-tag utha-tag--orange">What we open up</div>
            <h2>
              Six areas. One <em>machine</em>.
            </h2>
            <p className="utha-body">
              They're stacked, not separate. Break the foundation and everything
              above it shows up as a funnel problem.
            </p>
            <div className="utha-areas">
              {areas.map((a, i) => (
                <div key={a.name} className="utha-area">
                  <span className={`utha-area-num utha-area-num--${tones[i % 3]}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{a.name}</h3>
                  <p>{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="utha-process">
          <div className="utha-wrap">
            <div className="utha-tag utha-tag--yellow">How the week runs</div>
            <h2>
              One week from <em>kickoff</em>.
            </h2>
            <ol className="utha-steps">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className={`utha-step${i === steps.length - 1 ? " utha-step--last" : ""}`}
                >
                  <span className="utha-step-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="utha-step-text">
                    <div className="utha-step-when">{s.when}</div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="utha-principles">
          <div className="utha-wrap">
            <h2>
              How we <em>work</em>.
            </h2>
            <div className="utha-principle-list">
              {principles.map((p, i) => (
                <div key={p.title} className={`utha-principle utha-principle--${tones[i % 3]}`}>
                  <span className="utha-principle-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAMPLE ── */}
        <section className="utha-sample">
          <div className="utha-wrap utha-center">
            <div className="utha-tag utha-tag--lavender">Try before you buy</div>
            <h2>
              Want a <em>taste</em>?
            </h2>
            <p>
              Send us your domain. That's it, nothing else. We'll run the
              outside-in pass and come back with five things we found without
              ever logging in. If we come up empty, we'll tell you that too, and
              you'll have learned something either way.
            </p>
            <button
              className="btn-primary"
              onClick={() => openPopup("under-the-hood-alt-sample", "sample")}
            >
              Send us your domain →
            </button>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="utha-faq">
          <div className="utha-wrap">
            <div className="utha-tag utha-tag--lavender">Before you ask</div>
            <h2>The practical bits.</h2>
            <div className="utha-faq-grid">
              {faqs.map((f) => (
                <div key={f.q} className="utha-faq-item">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSE ── */}
        <section className="utha-close">
          <div className="utha-wrap utha-center">
            <h2>
              Let's open it <em>up</em>.
            </h2>
            <p>
              Thirty minutes to make sure this is the right fit for you.
            </p>
            <div className="utha-actions utha-actions--center">
              <button
                className="btn-primary"
                onClick={() => openPopup("under-the-hood-alt-close")}
              >
                I'm ready →
              </button>
              {RAZORPAY_URL && (
                <a
                  className="btn-ghost"
                  href={RAZORPAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book your week →
                </a>
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default UnderTheHoodAlt;
