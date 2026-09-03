import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import "@/styles/pages/under-the-hood.css";

const quotes = [
  "We keep adding channels, but pipeline stays flat.",
  "Everyone is working hard but there's no output to show for it.",
  "Sales says leads are bad. Marketing says follow-up is bad.",
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
  "Looking for 0→1 outsourced execution",
  "Enterprise orgs with mature internal ops",
];

const auditLayers = [
  {
    num: "01",
    label: "Foundation",
    intro: "The assumptions everything downstream depends on.",
    domains: [
      {
        name: "Brand & Positioning",
        desc: "What the company claims. Whether the market perceives it the same way.",
      },
      {
        name: "ICP Definition",
        desc: "Who you're targeting. Whether targeting exists beyond slides and assumptions.",
      },
      {
        name: "Market Clarity",
        desc: "Who buyers compare you against. Whether you're competing in the right category at all.",
      },
    ],
  },
  {
    num: "02",
    label: "Infrastructure",
    intro: "The systems that connect activity to revenue.",
    domains: [
      {
        name: "CRM & Data",
        desc: "Whether your data reflects reality. Lead lifecycle, object hygiene, and whether your CRM is a source of truth or a filing cabinet.",
      },
      {
        name: "Attribution & Reporting",
        desc: "What you're measuring vs. what drives revenue. Channel attribution, conversion tracking, and whether your dashboards tell the truth.",
      },
      {
        name: "Processes & Handoffs",
        desc: "Where qualified interest stalls. MQL definitions, SDR-to-AE handoffs, SLAs, and the gaps between teams no one owns.",
      },
    ],
  },
  {
    num: "03",
    label: "Funnel",
    intro: "Where demand is created, converted, and kept.",
    domains: [
      {
        name: "Acquisition",
        desc: "Where leads come from, what they cost, and whether those sources actually generate pipeline.",
      },
      {
        name: "Conversion",
        desc: "Where qualified interest goes to die. Follow-up cadences, sales decks, demo structure, and close rates.",
      },
      {
        name: "Retention",
        desc: "Whether customers stay, expand, and refer. Onboarding quality, expansion motion, and churn triggers.",
      },
    ],
  },
];

const deliverables = [
  {
    name: "Findings",
    bullets: [
      "Root causes tied to evidence",
      "Opportunity cost estimates",
      "Broken handoffs",
      "Attribution failure points",
      "Funnel leakage analysis",
      "Do-not-touch list",
    ],
  },
  {
    name: "Priorities",
    bullets: [
      "What to fix first, and why",
      "Impact vs. effort by initiative",
      "Sequenced by compounding effect",
      "What to deprioritize",
      "What to kill entirely",
    ],
  },
  {
    name: "Action Plan",
    bullets: [
      "90-day implementation roadmap",
      "Sequenced by dependency",
      "Owners + success criteria",
      "Quick wins vs. structural fixes",
      "Vendor-ready scopes for major rebuilds",
    ],
  },
  {
    name: "Tools",
    bullets: [
      "Full tech stack evaluation",
      "Replacement recommendations",
      "Integration map",
      "Build vs. buy decisions",
      "Configuration specs for recommended tools",
    ],
  },
  {
    name: "Readout",
    bullets: [
      "90-minute live session with your team",
      "Everything walked through, nothing left as homework",
      "Recorded for internal distribution",
      "Space for questions and pushback",
    ],
  },
];

const UnderTheHood = () => {
  const { openPopup } = useContactPopup();

  return (
    <>
      <SEOHead
        title="Under the Hood — B2B Marketing Diagnostic — That Works"
        description="A diagnostic audit for B2B companies with existing marketing activity that isn't compounding the way it should. Fixed scope. Clear findings."
        canonical="/under-the-hood"
      />
      <Nav />

      {/* HERO */}
      <section className="uth-hero">
        <div className="uth-hero-inner">
          <div className="uth-quotes">
            {quotes.map((q, i) => (
              <div key={i} className="uth-quote">{q}</div>
            ))}
          </div>
          <h1>Under the Hood</h1>
          <p className="uth-hero-sub">
            A diagnostic audit for B2B companies with existing marketing activity
            that isn't compounding the way it should.
          </p>
          <div className="uth-callout">₹50,000 fixed scope.</div>
          <button className="btn-primary" onClick={() => openPopup("under-the-hood")}>
            Book a 20-min Fit Call →
          </button>
        </div>
      </section>

      {/* FOR / NOT FOR */}
      <section className="uth-fit">
        <div className="uth-fit-inner">
          <div className="uth-fit-col">
            <div className="uth-fit-label uth-fit-label-for">For</div>
            <ul className="uth-fit-list">
              {forList.map((item) => (
                <li key={item}>
                  <span className="uth-fit-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="uth-fit-divider" />
          <div className="uth-fit-col">
            <div className="uth-fit-label uth-fit-label-not">Not for</div>
            <ul className="uth-fit-list">
              {notForList.map((item) => (
                <li key={item}>
                  <span className="uth-fit-x">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE AUDIT */}
      <section className="uth-audit">
        <div className="uth-audit-inner">
          <div className="uth-audit-header">
            <div className="section-label">Scope</div>
            <h2>What we look at.</h2>
          </div>
          <div className="uth-layers">
            {auditLayers.map((layer) => (
              <div key={layer.label} className="uth-layer">
                <div className="uth-layer-meta">
                  <span className="uth-layer-num">{layer.num}</span>
                  <div className="uth-layer-title">
                    <h3 className="uth-layer-name">{layer.label}</h3>
                    <p className="uth-layer-intro">{layer.intro}</p>
                  </div>
                </div>
                <div className="uth-domains">
                  {layer.domains.map((d) => (
                    <div key={d.name} className="uth-domain">
                      <span className="uth-domain-name">{d.name}</span>
                      <p className="uth-domain-desc">{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="uth-deliverables">
        <div className="uth-deliverables-inner">
          <div className="uth-deliverables-header">
            <div className="section-label">Output</div>
            <h2>What leaves with you.</h2>
          </div>
          <div className="uth-del-grid">
            {deliverables.map((d) => (
              <div key={d.name} className="uth-del-card">
                <h3>{d.name}</h3>
                <ul>
                  {d.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="uth-cta">
        <div className="uth-cta-inner">
          <h2>Find out if it's a fit.</h2>
          <p>20 minutes. We'll tell you whether this is the right next step.</p>
          <button className="btn-primary" onClick={() => openPopup("under-the-hood-cta")}>
            Book a 20-min Fit Call →
          </button>
          <p className="cta-note">Fixed scope. No surprises.</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UnderTheHood;
