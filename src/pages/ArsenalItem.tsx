import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useContactPopup } from "@/contexts/ContactPopupContext";

// ─── Hardcoded placeholder data ───────────────────────────────────────────────

const ITEM = {
  title: "ICP Qualification Canvas",
  type: "Framework",
  category: "Positioning",
  excerpt:
    "Stop guessing who your best customers are. This canvas forces you to define your ICP with the specificity that actually drives pipeline.",
  description:
    "Most ICP definitions are useless. 'Mid-market SaaS, 50-200 employees, growth stage' doesn't tell you who to call or what to say. This canvas walks you through the 8 dimensions that actually determine fit — and forces you to score your current customers against each one. The output is a ranked ICP tier list with the specific triggers, signals, and language that converts.",
  outputDescription: "Ranked ICP tier list with conversion triggers and qualifying questions",
  fileFormat: "Notion Template",
  isFree: true,
  useCases: [
    "Pre-Series A founders who've never formally defined ICP",
    "Sales teams whose close rates are inconsistent across deal types",
    "Marketing leads rebuilding positioning after product-market fit shifts",
    "RevOps teams building lead scoring models",
  ],
  prerequisites:
    "Works best after you have at least 10 closed-won customers to reference.",
  whatYouGet: [
    "The 8-dimension ICP scoring matrix with weighted criteria",
    "A customer tiering worksheet to rank your current accounts",
    "Trigger and signal library to identify in-market buyers",
    "30 qualifying questions mapped to each ICP dimension",
    "A message bank template with proof points per segment",
  ],
};

const RELATED = [
  {
    type: "Template",
    title: "Outbound Sequence Builder",
    excerpt:
      "Build and sequence multi-touch outbound campaigns across email and LinkedIn with pre-built messaging frameworks for every stage.",
    slug: "outbound-sequence-builder",
  },
  {
    type: "Checklist",
    title: "GTM Launch Checklist",
    excerpt:
      "The 47-point pre-launch checklist used by That Works across every client engagement. Covers positioning, channel readiness, and measurement setup.",
    slug: "gtm-launch-checklist",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const ArsenalItem = () => {
  const { openPopup } = useContactPopup();

  return (
    <>
      <Nav variant="light" />
      <div className="arsenal-item-page">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <div className="arsenal-hero">
          <Link to="/arsenal" className="arsenal-back">← Back to Arsenal</Link>

          <div className="arsenal-hero-inner">
            <div className="arsenal-hero-left">
              <div className="arsenal-type-row">
                <span className="arsenal-badge arsenal-badge--type">{ITEM.type}</span>
                <span className="arsenal-badge arsenal-badge--category">{ITEM.category}</span>
              </div>

              <h1 className="arsenal-title">{ITEM.title}</h1>
              <p className="arsenal-excerpt">{ITEM.excerpt}</p>

              <div className="arsenal-prereq">
                <span className="arsenal-prereq-icon">💡</span>
                <span>{ITEM.prerequisites}</span>
              </div>
            </div>

            {/* CTA card */}
            <div className="arsenal-cta-card">
              <div className="arsenal-cta-badges">
                <span className="arsenal-cta-format">{ITEM.fileFormat}</span>
                {ITEM.isFree && <span className="arsenal-cta-free">Free</span>}
              </div>

              <h3>Access this {ITEM.type}</h3>
              <p>Instant access. No fluff, no upsell — just the framework.</p>

              <button className="arsenal-cta-btn" onClick={() => openPopup("arsenal-download")}>
                Access Free Template →
              </button>
              <p className="arsenal-cta-note">No email required. Opens in Notion.</p>
            </div>
          </div>
        </div>

        {/* ── Body ──────────────────────────────────────────────────────────── */}
        <div className="arsenal-body-section">

          {/* Description */}
          <span className="arsenal-section-heading">About this resource</span>
          <p className="arsenal-desc">{ITEM.description}</p>

          {/* Use cases */}
          <span className="arsenal-section-heading">Who this is for</span>
          <div className="arsenal-use-cases-grid" style={{ marginBottom: "64px" }}>
            {ITEM.useCases.map((uc, i) => (
              <div key={i} className="arsenal-use-case-item">
                <p>{uc}</p>
              </div>
            ))}
          </div>

          {/* What you get */}
          <div className="arsenal-what-you-get">
            <div className="arsenal-wyg-header">
              <span className="arsenal-wyg-icon">📦</span>
              <h3>What's included</h3>
            </div>
            <ul className="arsenal-wyg-list">
              {ITEM.whatYouGet.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Related */}
          <div className="arsenal-related">
            <span className="arsenal-section-heading">You might also find useful</span>
            <div className="arsenal-related-grid">
              {RELATED.map((r) => (
                <Link key={r.slug} to={`/arsenal/${r.slug}`} className="arsenal-related-card">
                  <span className="arsenal-related-card-type">{r.type}</span>
                  <h3>{r.title}</h3>
                  <p>{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="arsenal-bottom-cta">
            <div className="arsenal-bottom-cta-left">
              <h3>Need help implementing this?</h3>
              <p>We can run the ICP definition process with your team in a half-day workshop.</p>
            </div>
            <button
              className="arsenal-bottom-cta-btn"
              onClick={() => openPopup("arsenal-cta")}
            >
              Book a call →
            </button>
          </div>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default ArsenalItem;
