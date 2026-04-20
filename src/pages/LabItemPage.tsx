import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// ─── Hardcoded placeholder data ───────────────────────────────────────────────

const TOOL = {
  title: "GTM Readiness Score",
  category: "diagnostic",
  tagline: "Surfaces your top 3 gaps in 8 minutes.",
  description:
    "Answer 24 questions across your ICP clarity, lead generation infrastructure, conversion systems, and retention mechanics. Get a scored breakdown across all four pillars with prioritised next steps you can act on this week.",
  timeToComplete: "8 minutes",
  outputDescription: "Scored breakdown across 4 pillars with prioritised next steps",
  icon: "🧭",
  useCases: [
    "Founders pre-Series A wondering why pipeline is slow",
    "Marketing leads inheriting a messy GTM stack",
    "Operators stress-testing before a big hiring push",
    "Consultants doing a rapid client GTM audit",
  ],
};

const SECTIONS = [
  {
    id: "icp",
    label: "ICP Clarity",
    question: "How would you rate your team's ability to disqualify a prospect within the first 5 minutes of a call?",
    options: [
      "We have a documented ICP with specific qualifying criteria",
      "We have a rough sense of who we want, but it varies by salesperson",
      "It mostly comes down to gut feel and deal size",
      "We haven't formally defined this yet",
    ],
  },
  {
    id: "lead-gen",
    label: "Lead Generation",
    question: "What is your primary source of new qualified pipeline right now?",
    options: [
      "A mix of outbound and inbound with attribution clarity",
      "Mostly referrals and founder network — not scalable yet",
      "Paid acquisition with inconsistent conversion downstream",
      "We don't have a reliable, repeatable pipeline source",
    ],
  },
  {
    id: "conversion",
    label: "Conversion Systems",
    question: "How long does a qualified prospect typically sit in your funnel before either closing or going dark?",
    options: [
      "Under 30 days — we have a tight, structured sales process",
      "30–90 days — we close most of them but it drags",
      "90+ days — deals stretch and we often lose momentum",
      "We don't track this consistently",
    ],
  },
  {
    id: "retention",
    label: "Retention",
    question: "When a customer churns, how confident are you in understanding the root cause?",
    options: [
      "Very confident — we run structured exit interviews and track signals",
      "Somewhat confident — we have a general sense but it's anecdotal",
      "Not very confident — we usually find out too late",
      "We don't have a systematic way to understand churn reasons",
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const LabItemPage = () => {
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleStart = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <>
      <Nav />
      <div className="lab-item-page">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <div className="lab-item-hero">
          <Link to="/lab" className="lab-item-back">← Back to Lab</Link>

          <span className="lab-item-icon">{TOOL.icon}</span>
          <span className="lab-item-tag">{TOOL.category}</span>
          <h1 className="lab-item-title">{TOOL.title}</h1>
          <p className="lab-item-tagline">{TOOL.tagline}</p>

          <div className="lab-item-meta">
            <span className="lab-item-meta-pill">
              <span className="lab-item-meta-pill-icon">⏱</span>
              {TOOL.timeToComplete}
            </span>
            <span className="lab-item-meta-pill">
              <span className="lab-item-meta-pill-icon">📊</span>
              {TOOL.outputDescription}
            </span>
            <span className="lab-item-meta-pill">
              <span className="lab-item-meta-pill-icon">✦</span>
              Free
            </span>
          </div>

          <p className="lab-item-desc">{TOOL.description}</p>

          <span className="lab-item-use-cases-label">Who this is for</span>
          <ul className="lab-item-use-cases">
            {TOOL.useCases.map((uc, i) => (
              <li key={i}>{uc}</li>
            ))}
          </ul>
        </div>

        {/* ── Tool area ─────────────────────────────────────────────────────── */}
        <div className="lab-tool-area">
          <div className="lab-tool-header">
            <div className="lab-tool-header-left">
              <h3>{TOOL.title}</h3>
              <p>24 questions · 4 pillars · ~8 minutes</p>
            </div>
            <div className="lab-tool-tabs">
              {SECTIONS.map((s, i) => (
                <button
                  key={s.id}
                  className={`lab-tool-tab ${i === activeTab ? "lab-tool-tab--active" : "lab-tool-tab--inactive"}`}
                  onClick={() => setActiveTab(i)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lab-tool-body">
            {SECTIONS.map((s, i) => (
              <div
                key={s.id}
                style={{ display: i === activeTab ? "block" : "none" }}
              >
                <div className="lab-tool-section-label">{s.label} — Question 1 of 6</div>
                <div className="lab-tool-question">
                  <span className="lab-tool-q-label">Q{(i * 6) + 1}</span>
                  <p className="lab-tool-q-text">{s.question}</p>
                  <div className="lab-tool-options">
                    {s.options.map((opt, j) => (
                      <div key={j} className="lab-tool-option">{opt}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lab-tool-cta-row">
            <p className="lab-tool-cta-text">
              <strong>Full version coming soon.</strong> Leave your email to be first in line.
            </p>
            {showToast ? (
              <div className="lab-toast">
                ✓ You're on the list — we'll reach out when it launches
              </div>
            ) : (
              <button className="lab-tool-start-btn" onClick={handleStart}>
                Start Diagnostic →
              </button>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LabItemPage;
