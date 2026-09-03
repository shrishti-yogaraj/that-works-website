import Nav from "@/components/Nav";
import StageSwitcher from "@/components/StageSwitcher";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

const signals = [
  "Your pitch changes depending on who's giving it.",
  "Your next client could come tomorrow or in three months, and you have no way of knowing which.",
  "You've dipped into content, ads, maybe some outreach. Nothing showed enough return to stick with it.",
  "You're thinking about your first marketing hire, but have nothing to hand to them.",
  "Your pipeline moves when you move, stops when you stop.",
];


const outcomes = [
  "When someone asks who your customer is, everyone on your team gives the same answer.",
  "When you hire your first marketing person, you have something to hand them.",
  "When you sit down to create content or plan a campaign, the strategy is already there.",
  "When a lead comes in, there's a process. It doesn't depend on you being available.",
];

const deliverableTiles = [
  "ICP definition", "Positioning document", "Messaging framework",
  "Tone of voice guide", "90-day roadmap", "Tool stack configured",
  "CRM set up", "Channel playbook", "SOP library",
  "Skill map", "Handover session", "30-day check-in",
];

const tiers = [
  {
    name: "Foundation Sprint",
    duration: "4 weeks",
    tagline: "The essentials, built fast.",
    whoFor: "Early-stage founder with a product ready to sell but no marketing infrastructure in place.",
    deliverables: [
      "ICP definition and validation",
      "Positioning statement and messaging framework",
      "Channel selection and rationale (1–2 priority channels)",
      "CRM setup and pipeline configuration",
      "Tool stack recommendation and initial setup",
      "90-day marketing roadmap",
      "1 priority channel activated",
      "Handover documentation",
    ],
    leaveWith: "Clarity on who you're targeting, what to say, and exactly where to start.",
    tier: "entry",
  },
  {
    name: "Engine Build",
    duration: "8 weeks",
    tagline: "The full machine, before your first hire.",
    whoFor: "Founder who needs everything built properly before they bring anyone in.",
    deliverables: [
      <><Link to="/services/branding">Full brand messaging system</Link>: pillars, tone of voice, content templates</>,
      "2–3 channels configured with full workflows",
      "CRM automation: lead capture, nurture sequences, pipeline management",
      "Content strategy and 3-month editorial calendar",
      "Lead scoring framework",
      "Sales enablement basics: discovery call structure, proposal template",
      "Hiring brief for first marketing role",
      "SOPs for all active channels",
    ],
    leaveWith: "A complete marketing system your first hire can walk into on day one.",
    tier: "popular",
    badge: "Most popular",
  },
  {
    name: "Full OS",
    duration: "12 weeks",
    tagline: "Build it once. Build it right.",
    whoFor: "Funded founder who wants the entire marketing function built properly from day one.",
    deliverables: [
      <><Link to="/services/branding">End-to-end brand identity</Link> and messaging</>,
      <><Link to="/services/inbound">Full inbound strategy</Link> across 3+ channels</>,
      <><Link to="/services/lead-gen">Outbound prospecting playbook</Link> and CRM automation</>,
      <><Link to="/services/retention">Complete sales enablement suite</Link></>,
      "Full measurement and reporting dashboards",
      "Complete SOP library across every active process",
      "Org design: roles, responsibilities, reporting lines",
      "Hiring roadmap with briefs for first 2–4 roles",
    ],
    leaveWith: "A complete, professional marketing function that looks like it's been running for years.",
    tier: "premium",
  },
];

const faqs = [
  {
    q: "What do we actually own at the end of the engagement?",
    a: "Everything. Every document, SOP, playbook, tool setup, and strategy is yours. We don't retain access, we don't lock anything behind a retainer, and you don't need us to run what we've built.",
    slug: "/blog/what-you-own-after-a-marketing-infrastructure-engagement",
  },
  {
    q: "How is That Works different from hiring a fractional CMO?",
    a: "A fractional CMO advises. We build. You get a complete, documented marketing system (tools configured, processes written, team trained), not strategic guidance that leaves the moment the contract ends.",
    slug: "/blog/fractional-cmo-vs-marketing-infrastructure-build",
  },
  {
    q: "Do you work with us ongoing, or is this a one-time engagement?",
    a: "The engagement has a defined end. We're not selling a retainer, we're selling a build. There's an optional Engine Tune-Up retainer for strategic oversight after the engagement closes, but that's your choice, not ours.",
    slug: "/blog/why-our-engagements-have-a-defined-end",
  },
  {
    q: "What does the handover process look like?",
    a: "The final week of every engagement is dedicated to handover: a working session with your team, full documentation walkthrough, and a 30-day check-in after we're done.",
    slug: "/blog/what-a-marketing-infrastructure-handover-actually-looks-like",
  },
  {
    q: "Everything is in my head and nothing is written down. Is that too early?",
    a: "It's the perfect time. The 0→1 stage is exactly where we do our best work: extracting what's in your head, turning it into a documented strategy, and building the first systems before bad habits get entrenched.",
    slug: "/blog/is-it-too-early-to-build-marketing-infrastructure",
  },
  {
    q: "We're 100% founder-led right now. Can this work without a marketing team?",
    a: "Yes, that's the most common situation at this stage. We design the system for your current resource level, which may just be you. The deliverable is a foundation you can hand to your first marketing hire the moment you're ready.",
    slug: "/blog/building-marketing-infrastructure-as-a-founder-with-no-team",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const ZeroToOne = () => {
  const { openPopup } = useContactPopup();

  const today = new Date();
  const offset = (days: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() + days);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  };

  const milestones = [
    { date: "Today", name: "You decide to start.", isToday: true, accent: "orange" },
    { date: offset(3), name: "Kickoff session.", accent: "lavender" },
    { date: offset(7), name: "Customer research complete.", accent: "lavender" },
    { date: offset(10), name: "ICP definition locked.", accent: "lavender" },
    { date: offset(14), name: "Positioning statement delivered.", accent: "orange" },
    { date: offset(21), name: "Messaging framework and tone of voice complete.", accent: "orange" },
    { date: offset(28), name: "CRM configured. Tool stack connected.", accent: "yellow" },
    { date: offset(35), name: "Priority channel activated.", accent: "yellow" },
    { date: offset(42), name: "Playbooks and SOPs documented.", accent: "lavender" },
    { date: offset(56), name: "Handover session: everything is yours.", accent: "orange" },
    { date: offset(86), name: "30-day check-in.", accent: "lavender" },
  ];

  return (
    <>
      <SEOHead
        title="Marketing OS: Zero to One — Build Your First GTM Engine — That Works"
        description="Building your first marketing engine. ICP, positioning, CRM setup and a 90-day roadmap, built for founders with a product ready to sell but zero marketing infrastructure."
        canonical="/services/marketing-os/zero-to-one"
        jsonLd={faqJsonLd}
      />
      <Nav />
      <StageSwitcher active="zero-to-one" />

      {/* HERO */}
      <section className="zto-hero">
        <div className="zto-hero-inner">
          <h1>You've built something worth talking about.</h1>
          <p className="zto-hero-sub">The right people just aren't hearing it yet.</p>
          <p className="zto-hero-body">
            You're past the product stage. Every conversation about marketing still feels
            like starting from scratch. That's not a you problem, it's a foundation problem.
          </p>
        </div>
      </section>

      {/* SIGNALS */}
      <section className="zto-signals">
        <div className="zto-signals-inner">
          <p className="zto-signals-intro">
            Most founders at this stage describe it the same way.
          </p>
          {signals.map((s) => (
            <p key={s} className="zto-signal-item">{s}</p>
          ))}
        </div>
      </section>

      {/* INSIGHT */}
      <section className="zto-insight">
        <div className="zto-insight-inner">
          <p className="zto-insight-line1">You haven't been doing marketing wrong.</p>
          <p className="zto-insight-line2">You've been doing it without the <em>foundation</em> that makes it work.</p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="zto-timeline">
        <div className="zto-timeline-inner">
          <div className="section-label">If you start today</div>
          <div className="zto-milestone-list">
            {milestones.map((m, i) => (
              <div key={i} className={`zto-milestone${m.isToday ? " is-today" : ""}`}>
                <div className="zto-milestone-date">{m.date}</div>
                <div className="zto-milestone-dot-wrap">
                  <div className={`zto-milestone-dot accent-${m.accent}`} />
                </div>
                <div className="zto-milestone-name">{m.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES + DELIVERABLES */}
      <section className="zto-outcomes">
        <div className="zto-outcomes-inner">
          <div className="section-label">After the engagement</div>
          {outcomes.map((o) => (
            <p key={o} className="zto-outcome-item">{o}</p>
          ))}
          <div className="zto-deliverables-inner">
            <div className="section-label">Everything documented and yours</div>
            <div className="zto-del-grid">
              {deliverableTiles.map((d) => (
                <div key={d} className="zto-del-tile">{d}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIER CARDS */}
      <section className="zto-tiers">
        <div className="zto-tiers-inner">
          {tiers.map((t) => (
            <div key={t.name} className={`zto-tier-card zto-tier-${t.tier}`}>
              {t.badge && <span className="zto-tier-badge">{t.badge}</span>}
              <h3>{t.name}</h3>
              <div className="zto-tier-meta"><span>{t.duration}</span></div>
              <p className="zto-tier-tagline">{t.tagline}</p>
              <div className="zto-tier-section">
                <span className="zto-tier-section-label">Who it's for</span>
                <p>{t.whoFor}</p>
              </div>
              <div className="zto-tier-section">
                <span className="zto-tier-section-label">Deliverables</span>
                <ul>
                  {t.deliverables.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="zto-tier-leave">
                <span className="zto-tier-section-label">You leave with</span>
                <p>{t.leaveWith}</p>
              </div>
              <button
                className="btn-primary zto-tier-cta"
                onClick={() => openPopup("marketing-os-zero-to-one")}
              >
                Book a Diagnostic Call
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="zto-cta">
        <div className="zto-cta-inner">
          <h2>Not sure which tier is right?</h2>
          <p className="zto-cta-sub">That's exactly what the diagnostic call is for.</p>
          <button className="btn-primary" onClick={() => openPopup("marketing-os-zero-to-one")}>
            Book a Diagnostic Call
          </button>
          <p className="cta-note">20 minutes. No pitch. You'll leave with clarity regardless.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mos-faq">
        <div className="mos-faq-inner">
          <div className="section-label">Common questions</div>
          <h2>Everything you need to know</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ZeroToOne;
