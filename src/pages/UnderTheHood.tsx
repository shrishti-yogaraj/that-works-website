import { useState } from "react";
import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import "@/styles/pages/under-the-hood.css";

// Razorpay checkout for the ₹50,000 audit. The "pay and start this week" line
// in the closing section stays hidden until this link exists.
const RAZORPAY_URL: string | null = null;

const stats = [
  { value: "5", label: "days to readout", color: "orange" },
  { value: "49", label: "breaking points checked", color: "lavender" },
  { value: "27", label: "documents you keep", color: "yellow" },
  { value: "3", label: "hours of your time", color: "orange" },
];

const forList = [
  "B2B GTM already in motion",
  "Slow but steady revenue",
  "Existing marketing expenses",
  "Team, tool, and channel complexity increasing",
  "Attribution unclear",
  "Inconsistent pipeline",
];

const notForList = [
  "Pre-product teams",
  "Pre-revenue teams",
  "No existing GTM or marketing activity",
  "Looking for 0\u21921 outsourced execution",
  "Enterprise orgs with mature internal ops",
];

const recognition = [
  "You are about to hire or spend to fix something you cannot name precisely.",
  "Sales says the leads are bad. Marketing says the leads are fine. Nobody can settle it.",
  "You could not say, right now, which channel produced your cheapest closed-won customer last quarter.",
  "Someone builds the weekly numbers by hand, and you still do not fully trust them.",
  "You have tried a hire, an agency, or a tool already, and the same problem is still here.",
  "Every person you ask gives you a confident answer, and no two answers match.",
];

const differentiators = [
  {
    num: "01",
    title: "We start before you give us a login.",
    body: "The outside-in sweep runs 74 checks on day zero, with no access at all. You get findings from work that happened before the first call.",
  },
  {
    num: "02",
    title: "Every claim has an exhibit number.",
    body: "Screenshots, record IDs, timestamps. Nothing in the pack is an opinion you have to take on trust.",
  },
  {
    num: "03",
    title: "We tell you what not to fix.",
    body: "A protected list of what is quietly working, and real problems that are the wrong ones to start with, each with a trigger for when to revisit.",
  },
  {
    num: "04",
    title: "We price the cost of doing it yourself.",
    body: "What each gap actually costs in your team's hours and elapsed weeks to build in house, including where doing it yourself is the right answer.",
  },
  {
    num: "05",
    title: "Root causes, not symptoms.",
    body: "Every finding is classified as clarity, infrastructure, or execution, and sequenced by what unblocks what.",
  },
];

const pillars = ["Brand", "Acquisition", "Conversion", "Retention"];

const breakingPoints = [
  "Inbound leads arrive with no owner and no response time.",
  "No written definition of what “qualified” means.",
  "Lead source captured as free text, or not at all.",
  "ICP built from aspiration rather than from who actually buys.",
  "A channel still running because nobody decided to stop it.",
  "Closed-lost reasons that are blank or default.",
  "The weekly report built by hand every Monday.",
  "Nothing tells anyone when a deal has gone silent.",
];

const packs = [
  {
    name: "The Diagnosis",
    count: 7,
    visible: [
      "GTM health scorecard",
      "Root cause report",
      "The counter-intuitive finding",
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
      "Twenty-deal autopsy, won and lost",
      "Five lead-flow traces, hop by hop",
      "ICP reality check",
    ],
    hidden: [
      "Funnel reconstruction with speed to first touch",
      "Channel performance ledger",
      "CRM and data hygiene report, 35 checks",
      "Twenty questions your GTM cannot answer",
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

const timeline = [
  {
    marker: "Day 0",
    title: "Work starts before you send us anything.",
    body: "One access email and a checklist go out. The 74-check outside-in sweep runs with no access at all, so findings exist before the first call.",
  },
  {
    marker: "Day 1, Call 1",
    title: "Kickoff, founder only, 60 minutes.",
    body: "Twelve alignment questions, your best five and worst five customers, your stated ICP, what you have already tried, and what cannot change.",
  },
  {
    marker: "Days 1 to 3",
    title: "We work inside your stack.",
    body: "Short sessions with your sales and marketing people, 45 to 60 minutes each. Founder not required. Zero founder hours spent here.",
  },
  {
    marker: "Day 5, Call 2",
    title: "The findings, live, 60 minutes.",
    body: "A walkthrough of the full diagnosis. All 27 documents land immediately after the call. Then you take a few days to read.",
  },
  {
    marker: "Call 3",
    title: "The closing session, 60 minutes.",
    body: "You bring your challenges to anything in the pack. Then the plan, owner by owner. This is where execution starts, with us or without us.",
  },
];

const included = [
  "The full five-day diagnostic across all three layers",
  "All 27 documents, in the three packs above",
  "Three 60-minute calls with the person running the audit",
  "The 74-check outside-in sweep, started before you grant access",
  "Quick wins you can act on the same week",
  "Everything is yours to keep and execute with anyone",
];

const PackCard = ({ pack }: { pack: (typeof packs)[number] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="uth-pack">
      <div className="uth-pack-head">
        <h3>{pack.name}</h3>
        <span className="uth-pack-count">{pack.count}</span>
      </div>
      <ul className="uth-pack-list">
        {pack.visible.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {expanded &&
          pack.hidden.map((item) => (
            <li key={item} className="uth-pack-item-extra">
              {item}
            </li>
          ))}
      </ul>
      <button
        type="button"
        className="uth-pack-toggle"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "Show less" : `and ${pack.hidden.length} more`}
      </button>
    </div>
  );
};

const UnderTheHood = () => {
  const { openPopup } = useContactPopup();

  return (
    <>
      <SEOHead
        title="Under the Hood, a GTM diagnostic by That Works"
        description="Five days inside your GTM machine. We tell you what's broken, why, what it's costing you every month, and the order to fix it in. ₹50,000, fixed scope."
        canonical="/under-the-hood"
      />
      <Nav />

      {/* ── HERO ── */}
      <section className="uth-hero">
        <div className="uth-hero-inner">
          <div className="uth-eyebrow">A GTM diagnostic by That Works</div>
          <h1>Under the Hood</h1>
          <p className="uth-hero-sub">
            Five days inside your GTM machine. We tell you what's broken, why,
            what it's costing you every month, and the order to fix it in.
          </p>
          <div className="uth-hero-cta">
            <button
              className="btn-primary"
              onClick={() => openPopup("under-the-hood-hero")}
            >
              Book the audit →
            </button>
            <span className="uth-hero-price">₹50,000, fixed. No hidden scope.</span>
          </div>
        </div>
      </section>

      {/* ── STAT STRIP ── */}
      <section className="uth-stats">
        <div className="uth-stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="uth-stat">
              <span className={`uth-stat-val uth-stat-val--${s.color}`}>{s.value}</span>
              <span className="uth-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section className="uth-recognition">
        <div className="uth-recognition-inner">
          <h2>Does any of this ring true?</h2>
          <ul className="uth-check-list">
            {recognition.map((item) => (
              <li key={item}>
                <span className="uth-check" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="uth-kicker">
            If three or more of these landed, the audit will pay for itself in the
            first pack of documents.
          </p>
        </div>
      </section>

      {/* ── FIT ── */}
      <section className="uth-fit">
        <div className="uth-fit-inner">
          <div className="uth-fit-col">
            <div className="uth-fit-label uth-fit-label--for">Built for</div>
            <ul className="uth-fit-list">
              {forList.map((item) => (
                <li key={item}>
                  <span className="uth-check" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="uth-fit-divider" />
          <div className="uth-fit-col">
            <div className="uth-fit-label uth-fit-label--not">Not built for</div>
            <ul className="uth-fit-list uth-fit-list--not">
              {notForList.map((item) => (
                <li key={item}>
                  <span className="uth-cross" aria-hidden="true">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── STATEMENT BAND ── */}
      <section className="uth-band">
        <p>
          Most GTM problems are missing systems, and they are fixable in a known
          order.
        </p>
      </section>

      {/* ── WHAT MAKES THIS DIFFERENT ── */}
      <section className="uth-diff">
        <div className="uth-diff-inner">
          <div className="section-label">What makes this different</div>
          <h2>Five things most audits will not do.</h2>
          <div className="uth-diff-rows">
            {differentiators.map((d) => (
              <div key={d.num} className="uth-diff-row">
                <span className="uth-diff-num">{d.num}</span>
                <div className="uth-diff-body">
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE SCOPE ── */}
      <section className="uth-scope">
        <div className="uth-scope-inner">
          <div className="section-label">The scope</div>
          <h2>One machine, three layers</h2>

          <div className="uth-machine">
            <div className="uth-machine-layer uth-machine-cap">
              <span className="uth-machine-tag">Cap</span>
              <div className="uth-machine-text">
                <h3>Revenue operations &amp; measurement</h3>
                <p>
                  Attribution, reporting, data integrity. Makes everything below
                  readable as one system.
                </p>
              </div>
            </div>

            <div className="uth-machine-pillars">
              {pillars.map((p) => (
                <div key={p} className="uth-pillar">
                  {p}
                </div>
              ))}
            </div>

            <div className="uth-machine-layer uth-machine-foundation">
              <span className="uth-machine-tag">Foundation</span>
              <div className="uth-machine-text">
                <h3>Strategy, positioning &amp; ICP</h3>
                <p>
                  If this layer is broken, everything above it is a symptom.
                </p>
              </div>
            </div>
          </div>

          <div className="uth-scope-count">
            <span className="uth-scope-num">49</span>
            <span className="uth-scope-num-label">
              breaking points checked across the three layers
            </span>
          </div>

          <p className="uth-scope-leadin">
            A few of the 49, so you know how concrete this gets:
          </p>
          <ul className="uth-bp-list">
            {breakingPoints.map((bp) => (
              <li key={bp}>{bp}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="uth-deliverables">
        <div className="uth-deliverables-inner">
          <div className="section-label">Deliverables</div>
          <h2>27 documents. Three packs. All yours.</h2>
          <div className="uth-pack-grid">
            {packs.map((pack) => (
              <PackCard key={pack.name} pack={pack} />
            ))}
          </div>
          <p className="uth-kicker">
            Every document follows the same format: the diagnosis, the evidence
            behind it, and the path forward. Nothing generic, nothing padded.
          </p>
        </div>
      </section>

      {/* ── THE PROCESS ── */}
      <section className="uth-process">
        <div className="uth-process-inner">
          <div className="section-label">The process</div>
          <h2>One week. Three hours of your time.</h2>
          <ol className="uth-timeline">
            {timeline.map((t) => (
              <li key={t.marker} className="uth-timeline-item">
                <div className="uth-timeline-marker">{t.marker}</div>
                <div className="uth-timeline-body">
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="uth-kicker">
            Your total ask: one email and three calls. About three hours. We do
            the digging.
          </p>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section className="uth-proof">
        <div className="uth-proof-inner">
          <div className="uth-offer">
            <h2>Send us your domain. Get one real finding, free.</h2>
            <p>
              We run the first outside-in sweep on your company and send you one
              verified finding, evidence attached, before you pay anything. If the
              sweep comes back clean, we tell you that too.
            </p>
            <button
              className="btn-primary"
              onClick={() => openPopup("under-the-hood-free-finding")}
            >
              Get your free finding →
            </button>
          </div>

          <div className="uth-proof-notes">
            <div className="uth-proof-note">
              <h3>You own everything.</h3>
              <p>
                That Works builds marketing infrastructure and hands it over. No
                retainers, no dependency. The 27 documents are yours to execute
                with your team, another vendor, or us. The audit is complete on
                its own.
              </p>
            </div>
            <div className="uth-proof-note">
              <h3>Who runs it.</h3>
              <p>
                The person who audits your machine is the person who builds these
                systems for a living. Findings come from someone with skin in the
                game, not a report factory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="uth-pricing">
        <div className="uth-pricing-inner">
          <div className="uth-price-head">
            <span className="uth-price-figure">₹50,000</span>
            <span className="uth-price-terms">
              Fixed. No hidden scope, no hourly meter.
            </span>
          </div>
          <ul className="uth-included">
            {included.map((item) => (
              <li key={item}>
                <span className="uth-check" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {RAZORPAY_URL && (
            <div className="uth-pay-block">
              <a
                className="btn-primary"
                href={RAZORPAY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book the audit, ₹50,000 →
              </a>
              <span className="uth-pay-note">
                Secure checkout via Razorpay. We start the outside-in sweep within
                one working day.
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── CLOSE ── */}
      <section className="uth-close">
        <div className="uth-close-inner">
          <h2>
            If you already know something is wrong and you are done guessing,
            this is the right next step.
          </h2>
          <p>
            Book a 30-minute call. We will tell you honestly whether the audit
            fits your stage. If it does not, we will say so. No pitch, no
            pressure.
          </p>
          <div className={`uth-paths${RAZORPAY_URL ? "" : " uth-paths--single"}`}>
            <div className="uth-path">
              <h3>Still deciding</h3>
              <p>
                30 minutes with the person who runs the audit. We will tell you
                honestly whether it fits your stage.
              </p>
              <button
                className="btn-primary"
                onClick={() => openPopup("under-the-hood-close")}
              >
                Book the call →
              </button>
              <span className="uth-path-note">Free. No pitch, no pressure.</span>
            </div>

            {RAZORPAY_URL && (
              <div className="uth-path uth-path--buy">
                <h3>Already convinced</h3>
                <p>
                  Pay and start this week. The outside-in sweep begins within one
                  working day, before we ask you for any access.
                </p>
                <a
                  className="btn-primary"
                  href={RAZORPAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book the audit, ₹50,000 →
                </a>
                <span className="uth-path-note">Secure checkout via Razorpay.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UnderTheHood;
