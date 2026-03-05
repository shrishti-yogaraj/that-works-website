import { useState } from "react";
import Nav from "@/components/Nav";
const stages = [
  {
    number: "01",
    name: "0 → 1",
    desc: "No marketing, manual lead handling, 100% founder-led.",
    detailTag: "Stage 01 — 0 → 1",
    headline: "You need a foundation, not a campaign.",
    body: "Before channels, before content, before ads — you need a system that can hold everything together. CRM, lead flows, automated tooling, attribution. Simple, repeatable lead flow.",
    cta: "See how we build it →",
    fixTitle: "The Foundation",
    fixDesc: "CRM setup · lead flows · automated tooling · attribution · a simple repeatable pipeline you actually own.",
  },
  {
    number: "02",
    name: "Friction",
    desc: "High spend, poor attribution. Things aren't working but you don't know why.",
    detailTag: "Stage 02 — Friction",
    headline: "The leaky bucket needs fixing, not more water.",
    body: "Advanced custom automation, data enrichment, multi-touch attribution. 30–50% reduction in CAC. Clear, attributed ROI.",
    cta: "See how we fix it →",
    fixTitle: "The Engine",
    fixDesc: "Advanced automation · data enrichment · multi-touch attribution · 30–50% CAC reduction · clear ROI.",
  },
  {
    number: "03",
    name: "Scale",
    desc: "High operation tax. Team is busy but not productive. Data siloed across tools.",
    detailTag: "Stage 03 — Scale",
    headline: "20+ hours a week lost to ops tax. Let's get them back.",
    body: "Unified data warehouse, automated lead scoring, sales handoffs. Your team should be selling, not stitching data together.",
    cta: "See how we scale it →",
    fixTitle: "The Infrastructure",
    fixDesc: "Unified data · automated scoring · clean handoffs · 20+ hours saved per week.",
  },
  {
    number: "04",
    name: "Leader",
    desc: "Invisible churn. High volume, low visibility on customer lifecycle.",
    detailTag: "Stage 04 — Leader",
    headline: "You've built something. Now make it impossible to lose.",
    body: "Full-funnel lifecycle automation, predictive analytics, enterprise-grade marketing operations. High NRR. The category is yours.",
    cta: "See how we sustain it →",
    fixTitle: "The Ecosystem",
    fixDesc: "Full-funnel lifecycle automation · predictive analytics · high NRR · category leadership.",
  },
];

const Index = () => {
  const [activeStage, setActiveStage] = useState(0);
  const detail = stages[activeStage];

  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag tag">Marketing Infrastructure</div>
            <h1>High performance<br />GTM systems.</h1>
            <div className="hero-sub">Designed, implemented and handed over.</div>
            <p className="hero-body">Most businesses don't have a marketing problem. They have a foundation problem. We fix step one — so everything else can work.</p>
            <div className="hero-btns">
              <a href="#" className="btn-primary">Book a Diagnostic Call →</a>
              <a href="#" className="btn-ghost">See How It Works</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-stat-grid">
              <div className="stat-card">
                <div className="stat-number">0→1</div>
                <div className="stat-label">Launch the foundation</div>
              </div>
              <div className="stat-card">
                <div className="stat-number" style={{ color: 'var(--lavender)' }}>Org.</div>
                <div className="stat-label">Build the engine</div>
              </div>
              <div className="stat-card">
                <div className="stat-number" style={{ color: 'var(--yellow)' }}>Scale</div>
                <div className="stat-label">Remove the ceiling</div>
              </div>
              <div className="stat-card">
                <div className="stat-number" style={{ color: 'var(--text)', fontSize: '1.8rem' }}>Sustain</div>
                <div className="stat-label">Own it forever</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE ARE YOU */}
      <section className="where-section">
        <div className="where-inner">
          <div className="where-header">
            <div className="section-label">Every stage of growth has a different breaking point</div>
            <h2>Where are <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>you?</em></h2>
            <p>Click your stage to see what's breaking — and what fixes it.</p>
          </div>

          <div className="stages">
            {stages.map((stage, i) => (
              <button
                key={i}
                className={`stage${i === activeStage ? ' active' : ''}`}
                onClick={() => setActiveStage(i)}
              >
                <div className="stage-number">{stage.number}</div>
                <div className="stage-name">{stage.name}</div>
                <div className="stage-desc">{stage.desc}</div>
              </button>
            ))}
          </div>

          <div className="stage-detail">
            <div>
              <div className="stage-detail-tag">{detail.detailTag}</div>
              <h3>{detail.headline}</h3>
              <p>{detail.body}</p>
              <a href="#" className="btn-primary">{detail.cta}</a>
            </div>
            <div className="fix-box">
              <div className="fix-label">The Fix</div>
              <div className="fix-title">{detail.fixTitle}</div>
              <div className="fix-desc">{detail.fixDesc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="what-section">
        <div className="what-inner">
          <div className="what-header">
            <div>
              <div className="section-label">What we do</div>
              <h2>We build the marketing engine.<br /><em style={{ fontStyle: 'italic', color: 'var(--lavender)' }}>You just drive.</em></h2>
            </div>
            <p>No endless retainers. No dependency. We design the full system, implement it, and hand it over — ready to run without us.</p>
          </div>
          <div className="what-cards">
            <div className="what-card">
              <div className="what-card-icon">⚙</div>
              <h3>Strategy &amp; Architecture</h3>
              <p>We map where you are, where you're going, and design the exact infrastructure to get you there. No theory — a real system.</p>
            </div>
            <div className="what-card">
              <div className="what-card-icon">🔧</div>
              <h3>Build &amp; Implementation</h3>
              <p>We build it. CRM, automation, lead flows, attribution, tooling. Everything connected, everything working.</p>
            </div>
            <div className="what-card">
              <div className="what-card-icon">↗</div>
              <h3>Handover &amp; Enablement</h3>
              <p>You leave with a system your team owns and can run. Documentation, training, and no hidden dependency on us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">
        <div className="how-inner">
          <div className="how-header">
            <div className="section-label">The process</div>
            <h2>Raw. Forged. Tempered. <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>Polished.</em></h2>
            <p>Every engagement follows the same four stages — built to leave you stronger than when we arrived.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <h3>Diagnose</h3>
              <p>We map everything — your stack, your team, your gaps. No assumptions.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>Design</h3>
              <p>We architect the system. Strategy, infrastructure, roadmap — all connected.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>Build</h3>
              <p>We implement. Tools configured, flows live, team trained.</p>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <h3>Hand Over</h3>
              <p>You own it. We step back. The system runs without us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="services-inner">
          <div className="services-header">
            <div className="section-label">Our services</div>
            <h2>Built for where you are.<br />Designed for where you're going.</h2>
            <p>Every engagement is different. The outcome never is.</p>
          </div>
          <div className="services-grid">
            <div className="service-card featured">
              <span className="flagship-badge">Flagship</span>
              <div className="service-tw">TW</div>
              <div className="service-name">Marketing OS</div>
              <p className="service-desc">The full engagement. Strategy, infrastructure, systems, team enablement — designed, implemented, and handed over. Your marketing function, built to last.</p>
              <a href="#" className="service-link">Explore Marketing OS TW →</a>
            </div>
            <div className="service-card">
              <div className="service-tw">TW</div>
              <div className="service-name">Lead Gen</div>
              <p className="service-desc">End-to-end lead generation automation. Scrape, enrich, research, personalise, deliver.</p>
              <a href="#" className="service-link">Explore →</a>
            </div>
            <div className="service-card">
              <div className="service-tw">TW</div>
              <div className="service-name">Branding</div>
              <p className="service-desc">Brand identity and positioning systems that do the work before you say a word.</p>
              <a href="#" className="service-link">Explore →</a>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="proof-section">
        <div className="proof-inner">
          <div className="proof-header">
            <div className="section-label">What clients say</div>
            <h2>Built to last. <em style={{ fontStyle: 'italic', color: 'var(--lavender)' }}>Proven in the wild.</em></h2>
          </div>
          <div className="proof-placeholder">
            ✦ Testimonials and client logos — to be added when collected ✦
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-label" style={{ textAlign: 'center' }}>Ready when you are</div>
          <h2>Every stage of growth has a<br /><em>different breaking point.</em></h2>
          <p>Book a 15-minute diagnostic. We'll tell you exactly where yours is — and what it takes to get past it.</p>
          <div className="cta-btns">
            <a href="#" className="btn-primary">Book a Diagnostic Call →</a>
            <a href="#" className="btn-ghost">Download the Guide</a>
          </div>
          <p className="cta-note">No pitch. No pressure. Just clarity.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">That Works<span>.</span></div>
            <p className="footer-tagline">High performance GTM systems. Designed, implemented and handed over.</p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Marketing OS TW</a></li>
              <li><a href="#">Lead Gen TW</a></li>
              <li><a href="#">Branding TW</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 That Works. All rights reserved.</p>
          <p style={{ color: 'var(--label)' }}>thatworksco.com</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
