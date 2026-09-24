import { useEffect, useState } from "react";
import "../../styles/pages/proposals-shared.css";
import "../../styles/pages/proposals-groyouth.css";

// Six areas of the GTM machine, per the Under the Hood framework.
const areas = [
  {
    num: "01",
    name: "Strategy, positioning and ICP",
    body: "Who GroYouth actually sells to today versus who the site, the ads, and the emails are written for. Six weeks into a candidate-first pivot, this is the layer most likely to be carrying an assumption nobody has retested.",
  },
  {
    num: "02",
    name: "Brand",
    body: "What a candidate understands GroYouth to be within ten seconds of landing, and whether that matches the AI-powered HR marketplace positioning launched in June.",
  },
  {
    num: "03",
    name: "Acquisition",
    body: "Google Ads, SEO, the email programme, and the score checker as an entry point. Where candidates actually come from, what each source costs, and which ones have never produced a paying assessment.",
  },
  {
    num: "04",
    name: "Conversion",
    body: "The sequence from score check to registration to assessment to SAT Plus. Where candidates stop, and whether anything follows up when they do.",
  },
  {
    num: "05",
    name: "Retention and expansion",
    body: "Whether a candidate who takes one assessment comes back for the next product in the ladder, and what currently triggers that return.",
  },
  {
    num: "06",
    name: "Revenue operations and measurement",
    body: "Attribution, reporting, data integrity. The layer that decides whether any of the answers above can be proven rather than argued.",
  },
];

const gaps = [
  {
    tag: "Attribution",
    title: "No line from spend to revenue",
    body: "Google Ads has been live since 1 September and has produced four to five job leads. Revenue is a stated goal for the channel. Nothing currently traces a rupee of ad spend through to a paid assessment, which means <strong>the decision to scale it or kill it has no evidence behind it either way</strong>.",
  },
  {
    tag: "Funnel",
    title: "A working entry point, an unmeasured middle",
    body: "The resume score checker has done 250+ checks in about two weeks. Quite a few registered. A few took assessments. <strong>The top of the funnel is doing its job.</strong> What happens in the two steps after it is described in adjectives rather than numbers, and that is exactly where the money is won or lost.",
  },
  {
    tag: "Channel",
    title: "Action is being measured, revenue is not",
    body: "The email programme runs at 2,000 to 2,500 a day. Early campaigns ran high open and low click; the new entry-point angle is getting two to three percent action. That is a real improvement in the metric being tracked. <strong>Action is not revenue</strong>, and nothing currently connects a send to a payment.",
  },
  {
    tag: "Ownership",
    title: "Every channel has an owner. The joins do not.",
    body: "The agency runs the site, SEO and paid. Vishal runs email in-house. Each of those is genuinely owned and genuinely run. <strong>What nobody owns is the handoff between them</strong>: what happens to a candidate who arrives from an ad, checks a resume score, and then receives an email three days later.",
  },
  {
    tag: "Sequence",
    title: "Six products, no measured drop-off",
    body: "SAT, SAT Plus, Skill, Fit, then Assist and Coach. The ladder is deliberate and the logic is sound. <strong>The drop between each rung has not been measured</strong>, so there is no way to know which step is leaking and which is simply next.",
  },
  {
    tag: "Timing",
    title: "Six weeks in is the right time, not the wrong one",
    body: "The candidate-first shift is recent enough that the instinct is to wait for more data before examining it. The opposite is true. <strong>Six weeks in, the cost of changing direction is a conversation. Six months in, it is a rebuild</strong>, and a year of spend has been committed to assumptions nobody tested.",
  },
];

const packs = [
  {
    num: "7",
    name: "The Diagnosis",
    items: [
      "GTM health scorecard",
      "Root cause report",
      "The one thing to take from this audit",
      "Do-not-touch list",
      "Founder, team and data alignment report",
      "Annotated evidence trail",
      "Reading guide",
    ],
  },
  {
    num: "9",
    name: "The Evidence",
    items: [
      "Outside-in report, 74 checks",
      "Up to 20 closed deals, opened up",
      "Five lead-flow traces, hop by hop",
      "ICP reality check",
      "Funnel reconstruction with speed to first touch",
      "Channel performance ledger",
      "CRM and data hygiene report, 35 checks",
      "Twenty questions your GTM cannot answer",
      "Current-state stack and data flow map",
    ],
  },
  {
    num: "11",
    name: "The Path Forward",
    items: [
      "Prioritised gap map",
      "90-day action plan",
      "Quick wins you can do this week",
      "Cost to build it in house",
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
    num: "01",
    when: "Day one",
    title: "The kickoff call",
    body: "Sixty minutes. Ideally Sanjev and Ravi together, since the decisions that come out of this need both. Your best and worst candidate cohorts, who you believe you are for, what has already been tried since the June repositioning, and what cannot change.",
  },
  {
    num: "02",
    when: "Days one to four",
    title: "The outside-in pass",
    body: "Seventy-four checks across nine blocks: mystery shop, email infrastructure, your site and stack, paid footprint, search visibility, AI and LLM visibility, reviews and third-party presence, your own outbound, and signals. None of it needs a login, so we are diagnosing from the first hour rather than waiting on access.",
  },
  {
    num: "03",
    when: "Days two to four",
    title: "Inside the stack",
    body: "Short sessions with Vishal on the email programme and with whoever runs the ads and the site day to day. Forty-five to sixty minutes each. Neither founder is needed in any of them.",
  },
  {
    num: "04",
    when: "Days two to four",
    title: "The reconstruction",
    body: "We trace live candidate flows hop by hop, from ad click and score check through to assessment payment, and rebuild the funnel from what the data says rather than what the dashboards report.",
  },
  {
    num: "05",
    when: "Day five",
    title: "The findings, live",
    body: "Sixty minutes walking through the full diagnosis, root cause by root cause. All 27 documents land immediately after the call.",
  },
  {
    num: "06",
    when: "A week later, once you have been through the pack",
    title: "The plan",
    body: "You bring your challenges to anything in it, and we go owner by owner on what happens next, and in what order.",
  },
];

const questions = [
  "Which of your three channels has produced a paying assessment, and what did each one cost to get there?",
  "Where do the 250+ score checks actually go? What happens in the hours after a check, and what should?",
  "Does the SAT to SAT Plus to Skill to Fit ladder convert, or is it six products sitting behind one entry point?",
  "Do prepared candidates convert better in your own data, or is that still a belief the funnel has not been asked to prove?",
  "Which of the ~60K emails a month produce an assessment start, and which produce an open and nothing else?",
  "What sits inside the agency's brief, what sits inside Vishal's, and what falls between the two?",
];

const PackCard = ({ pack }: { pack: (typeof packs)[number] }) => {
  const [expanded, setExpanded] = useState(false);
  const visible = pack.items.slice(0, 4);
  const hidden = pack.items.slice(4);

  return (
    <div className="tech-col existing">
      <div className="tech-col-eyebrow">{pack.num} documents</div>
      <div className="tech-col-title">{pack.name}</div>
      <ul className="tech-tools">
        {visible.map((item) => (
          <li key={item} className="tech-tool">
            <div className="tech-tool-name">{item}</div>
          </li>
        ))}
        {expanded &&
          hidden.map((item) => (
            <li key={item} className="tech-tool gy-pack-extra">
              <div className="tech-tool-name">{item}</div>
            </li>
          ))}
      </ul>
      <button
        type="button"
        className="gy-pack-toggle"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "Show less" : `and ${hidden.length} more`}
      </button>
    </div>
  );
};

const Groyouth = () => {
  const [activePage, setActivePage] = useState<"overview" | "audit" | "fineprint">("overview");

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, behavior: "instant" });
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    document.querySelectorAll(".fade-in").forEach((el) => fadeObserver.observe(el));
    return () => fadeObserver.disconnect();
  }, [activePage]);

  return (
    <div className="proposal-root">

      {/* FIXED NAV */}
      <div className="proposal-nav-fixed">
        <div className="proposal-page-pills">
          <button
            className={`proposal-page-btn${activePage === "overview" ? " active" : ""}`}
            onClick={() => setActivePage("overview")}
          >
            Overview
          </button>
          <button
            className={`proposal-page-btn${activePage === "audit" ? " active" : ""}`}
            onClick={() => setActivePage("audit")}
          >
            The Audit
          </button>
          <button
            className={`proposal-page-btn${activePage === "fineprint" ? " active" : ""}`}
            onClick={() => setActivePage("fineprint")}
          >
            Fine Print
          </button>
        </div>
      </div>

      {/* ══ OVERVIEW ══ */}
      {activePage === "overview" && (
        <>
          {/* COVER */}
          <section className="cover" id="cover">
            <div className="cover-header-row">
              <img src="/logo.svg" alt="That Works" className="cover-logo" height="65" />
              <div className="doc-label">GTM Diagnostic · Confidential</div>
            </div>
            <div className="cover-body">
              <div className="cover-eyebrow">GroYouth × That Works Co.</div>
              <h1 className="cover-title">Under the<br /><em>Hood</em></h1>
              <p className="cover-subtitle">
                A five-day diagnostic of the GroYouth GTM machine. What is broken
                and why, what each leak is costing you, and the order to fix it in,
                so the next rupee of spend goes where the evidence says it should.
              </p>
              <div className="cover-client">
                Prepared for<br />
                <strong>Sanjev Nagar · Gooty Ravi Teja · Vishal Yajnik · GroYouth</strong>
              </div>
              <div className="cover-stats">
                <div className="cover-stat"><div className="cover-stat-num">5</div><div className="cover-stat-label">Day Diagnostic</div></div>
                <div className="cover-stat"><div className="cover-stat-num">49</div><div className="cover-stat-label">Breaking Points Checked</div></div>
                <div className="cover-stat"><div className="cover-stat-num">₹50,000</div><div className="cover-stat-label">Fixed Investment</div></div>
              </div>
            </div>
            <div className="cover-footer"></div>
          </section>

          {/* WHERE THINGS STAND */}
          <section className="diagnosis-section" id="diagnosis">
            <div className="section-inner fade-in">
              <div className="eyebrow eyebrow-light">Where things stand</div>
              <h2 className="h-light">
                The funnel fills.<br />Revenue <em>doesn't</em>.
              </h2>

              <div className="gap-callout">
                <div className="gap-callout-label">In your words</div>
                <div className="gap-callout-body">
                  "Market is dynamic. It shifts, and businesses also have to shift
                  accordingly."
                  <span className="gy-attrib">Sanjev Nagar, discovery call</span>
                  <strong>The shift is the right call.</strong> What has not caught
                  up yet is the measurement underneath it, and that is a much
                  smaller problem to solve than the pivot itself was.
                </div>
              </div>

              <div className="funnel-block">
                <div className="diagnosis-funnel">
                  <div className="funnel-stage">
                    <div className="funnel-num">3</div>
                    <div className="funnel-label">Channels running</div>
                    <div className="funnel-detail">
                      Google Ads · ~60K emails a month · 150+ SEO pages in rebuild
                    </div>
                  </div>
                  <div className="funnel-arrow">→</div>
                  <div className="funnel-stage">
                    <div className="funnel-num">250+</div>
                    <div className="funnel-label">Free score checks</div>
                    <div className="funnel-detail">
                      In three weeks, with registrations and assessment starts
                      behind them
                    </div>
                  </div>
                  <div className="funnel-arrow">→</div>
                  <div className="funnel-stage">
                    <div className="funnel-num gy-q">?</div>
                    <div className="funnel-label">Free to paid</div>
                    <div className="funnel-detail">
                      The question this diagnostic answers
                    </div>
                  </div>
                </div>
              </div>

              <div className="gap-callout">
                <div className="gap-callout-label">The honest read</div>
                <div className="gap-callout-body">
                  Three channels are live and a free entry point is already pulling
                  250+ checks in three weeks. That is real motion for six weeks into
                  a pivot, and none of it is the problem.{" "}
                  <strong>The problem is that nothing connects any of it to a paid
                  assessment</strong>, so there is no way to know which channel to
                  double, which to fix, and which to stop paying for.
                </div>
              </div>

              <div className="diag-grid">
                {gaps.map((g) => (
                  <div key={g.tag} className="diag-card">
                    <div className="diag-tag">{g.tag}</div>
                    <div className="diag-title">{g.title}</div>
                    <div className="diag-body" dangerouslySetInnerHTML={{ __html: g.body }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* THE THESIS */}
          <section className="risks-section">
            <div className="risks-inner fade-in">
              <div className="eyebrow">Your thesis, tested</div>
              <h2>
                "If the candidate is prepared, the conversion ratios become <em>higher</em>."
              </h2>
              <div className="gy-attrib gy-attrib--dark">Sanjev Nagar, discovery call</div>
              <p className="lead">
                That is the bet the whole candidate-first pivot rests on, and we
                think it is a good one. It is also a claim the funnel should be
                able to prove. The audit tests it directly: whether prepared
                candidates convert better in your own data, at which step the
                preparation stops translating into revenue, and what it costs you
                every month that the answer is unknown.
              </p>
              <p className="lead">
                If the evidence backs the thesis, you get a documented reason to
                spend harder behind it. If it does not, you find that out in
                October rather than next June.
              </p>
            </div>
          </section>

        </>
      )}

      {/* ══ THE AUDIT ══ */}
      {activePage === "audit" && (
        <>
          <section className="deliverables-intro">
            <div className="cover-header-row">
              <img src="/logo.svg" alt="That Works" className="cover-logo" height="65" />
              <div className="doc-label">GTM Diagnostic · Confidential</div>
            </div>
            <div className="deliverables-intro-inner fade-in">
              <div className="eyebrow eyebrow-light">The Audit</div>
              <h2 className="h-light">Six areas. Five days.<br /><em>Twenty-seven documents.</em></h2>
              <p className="lead lead-light">
                What we open up, what lands on your desk afterwards, and exactly
                how the five days run.
              </p>
            </div>
          </section>

          {/* WHAT IT ANSWERS FOR YOU */}
          <section className="post-engagement">
            <div className="post-inner fade-in">
              <div className="eyebrow eyebrow-light">What it answers</div>
              <h2 className="h-light">
                Six questions you cannot<br />currently <em>answer</em>.
              </h2>
              <p className="gy-lead">
                Not a generic audit checklist. These are the specific questions
                your own funnel cannot answer today, and the ones the pack will
                answer with evidence attached.
              </p>
              <ol className="gy-questions">
                {questions.map((q, i) => (
                  <li key={q} className="gy-question">
                    <span className="gy-question-num">{String(i + 1).padStart(2, "0")}</span>
                    <p>{q}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* SIX AREAS — dark ground, post-card components */}
          <section className="post-engagement">
            <div className="post-inner fade-in">
              <div className="eyebrow eyebrow-light">What we open up</div>
              <h2 className="h-light">One machine,<br />six <em>areas</em>.</h2>
              <p className="lead lead-light">
                They are stacked, not separate. Break the foundation and everything
                above it shows up as a funnel problem. We check 49 breaking points
                across all six.
              </p>
              <div className="post-grid">
                {areas.map((a) => (
                  <div key={a.num} className="post-card">
                    <div className="post-num">{a.num}</div>
                    <div className="post-title">{a.name}</div>
                    <div className="post-body">{a.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DELIVERABLES — cream ground, tech-col components */}
          <section className="tech-stack">
            <div className="tech-inner fade-in">
              <div className="eyebrow">What lands on your desk</div>
              <h2>27 documents.<br />Three packs. <em>All yours.</em></h2>
              <p className="lead">
                Every document is the same shape: what we found, the evidence
                behind it, and what to do about it.
              </p>
              <div className="tech-columns">
                {packs.map((p) => (
                  <PackCard key={p.name} pack={p} />
                ))}
              </div>
            </div>
          </section>

          {/* THE WEEK — vertical timeline */}
          <section className="post-engagement">
            <div className="post-inner fade-in">
              <div className="eyebrow eyebrow-light">How the week runs</div>
              <h2 className="h-light">One week.<br />Three <em>calls</em>.</h2>
              <p className="gy-lead">
                About three hours of founder time in total. Your team gives a
                little more, in short sessions neither of you needs to sit in.
              </p>
              <ol className="gy-timeline">
                {steps.map((st) => (
                  <li key={st.num} className="gy-tl-item">
                    <div className="gy-tl-num">{st.num}</div>
                    <div className="gy-tl-body">
                      <div className="gy-tl-when">{st.when}</div>
                      <h3 className="gy-tl-title">{st.title}</h3>
                      <p className="gy-tl-text">{st.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </>
      )}

      {/* ══ FINE PRINT ══ */}
      {activePage === "fineprint" && (
        <>
          <section className="fineprint-intro">
            <div className="cover-header-row">
              <img src="/logo.svg" alt="That Works" className="cover-logo" height="65" />
              <div className="doc-label">GTM Diagnostic · Confidential</div>
            </div>
            <div className="section-inner fade-in">
              <div className="eyebrow eyebrow-light">Fine Print</div>
              <h2 className="h-light">The details that matter<br />before you <em>start</em>.</h2>
            </div>
          </section>

          {/* INVESTMENT */}
          <section className="payment-section">
            <div className="payment-inner fade-in">
              <div className="eyebrow eyebrow-light">Investment</div>
              <h2 className="h-light">₹50,000 plus GST.<br /><em>Fixed.</em></h2>
              <div className="payment-steps">
                <div className="payment-step">
                  <div className="payment-pct">100%</div>
                  <div>
                    <div className="payment-milestone">On confirmation, before kickoff</div>
                    <div className="payment-desc">
                      One payment, paid in full upfront. No hourly meter, no scope
                      creep, no success fee. Kickoff is booked the moment it
                      lands.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WHAT WE NEED */}
          <section className="tech-stack">
            <div className="tech-inner fade-in">
              <div className="eyebrow">What we need from you</div>
              <h2>Three hours,<br />and a set of <em>logins</em>.</h2>
              <div className="gy-needs">
                <div className="gy-need">
                  <div className="gy-need-label">From the founders</div>
                  <h3>About three hours, across three calls.</h3>
                  <p>
                    Kickoff at the start, findings at the end, and the plan session
                    the following week. Sanjev and Ravi on all three where possible,
                    since the decisions afterwards need both.
                  </p>
                </div>
                <div className="gy-need">
                  <div className="gy-need-label">From the team</div>
                  <h3>Two or three short sessions.</h3>
                  <p>
                    Forty-five to sixty minutes each with Vishal on the email
                    programme, and with whoever runs the ads and the site day to
                    day. Neither founder is needed in these.
                  </p>
                </div>
                <div className="gy-need">
                  <div className="gy-need-label">Access</div>
                  <h3>Read-only, in place before kickoff.</h3>
                  <p>
                    Analytics, ads, search console, the email platform, and whatever
                    holds candidate records. A checklist goes out the moment the
                    engagement is confirmed, and access needs to be live 48 hours
                    before the kickoff call.
                  </p>
                </div>
                <div className="gy-need">
                  <div className="gy-need-label">Scheduling</div>
                  <h3>Tuesday or Thursday starts.</h3>
                  <p>
                    Kickoff is booked for the next available Tuesday or Thursday.
                    The five days are counted from kickoff, not from payment and not
                    from access.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* NEXT STEP */}
          <section className="close-section">
            <div className="close-inner fade-in">
              <div className="eyebrow">The next step</div>
              <h2 className="gy-close-head">
                Confirm, and we start <em>Tuesday</em>.
              </h2>
              <p className="gy-close-lead">
                Confirmation and payment, then the access checklist goes out and
                kickoff is booked for the next available Tuesday or Thursday. Five
                days later you have the full diagnosis, and the decision about what
                to do with it is entirely yours.
              </p>
              <div className="gy-close-steps">
                <div className="gy-close-step"><span>01</span> Confirm the engagement</div>
                <div className="gy-close-step"><span>02</span> Access checklist goes out</div>
                <div className="gy-close-step"><span>03</span> Kickoff, Tuesday or Thursday</div>
              </div>
              <div className="close-contact">
                <div className="ltc-item-v2"><div className="ltc-label-v2">Email</div><div className="ltc-value-v2">shrishti@thatworksco.com</div></div>
                <div className="ltc-item-v2"><div className="ltc-label-v2">Website</div><div className="ltc-value-v2">thatworksco.com</div></div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="proposal-footer">
        <img src="/logo.svg" alt="That Works Co." className="footer-logo" height="81" />
        <div className="footer-links">
          <a href="https://thatworksco.com" target="_blank" rel="noreferrer" className="footer-link">Visit our website</a>
          <span className="footer-sep">|</span>
          <a href="https://thatworksco.com/blog" target="_blank" rel="noreferrer" className="footer-link">Check out our blog</a>
        </div>
        <div className="footer-meta">GroYouth × That Works Co · GTM Diagnostic · Confidential</div>
      </footer>
    </div>
  );
};

export default Groyouth;
