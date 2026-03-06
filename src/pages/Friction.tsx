import Nav from "@/components/Nav";
import StageSwitcher from "@/components/StageSwitcher";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import useCanonical from "@/hooks/useCanonical";

const tiers = [
  {
    name: "Foundation Sprint",
    duration: "4 weeks",
    price: "£8–12k",
    tagline: "Stop funding the fog. Start seeing what works.",
    whoFor: "Founder or head of marketing where spend is up and results are flat, nobody can explain why.",
    deliverables: [
      "Full marketing audit with clear diagnosis",
      "ICP refinement and messaging realignment",
      "Attribution framework and analytics baseline",
      "90-day recovery roadmap",
      "One revised channel playbook",
    ],
    leaveWith: "Total clarity on where the waste is, what to double down on, and a 90-day plan to stop the bleeding.",
    tier: "entry",
  },
  {
    name: "Engine Build",
    duration: "8 weeks",
    price: "£18–25k",
    tagline: "Your marketing isn't broken. It was never built.",
    whoFor: "Business doing £200k–£1M with disconnected tools, inconsistent messaging, and unpredictable pipeline.",
    deliverables: [
      "Full marketing audit and gap analysis",
      "Rebuilt messaging framework",
      "Tool stack overhaul",
      "Three channel playbooks rebuilt from scratch",
      "Sales enablement pack",
    ],
    leaveWith: "A rebuilt marketing engine with clean data, clear attribution, and a team that knows exactly what to do and why.",
    tier: "popular",
    badge: "Most popular",
  },
  {
    name: "Full OS",
    duration: "12 weeks",
    price: "£35–50k",
    tagline: "Burn the patchwork. Build the engine.",
    whoFor: "Business at £500k–£2M that's been through agencies, freelancers, and internal hires, and none of it has stuck.",
    deliverables: [
      "Complete brand rebuild",
      "Full inbound overhaul",
      "Outbound rebuild with CRM automation and lead scoring",
      "Complete sales enablement suite",
      "Full SOP library and OKR framework",
    ],
    leaveWith: "A completely rebuilt marketing function with clean systems, clear processes, and a team that finally knows what good looks like.",
    tier: "premium",
  },
];

const frictionSignals = [
  "We're spending on ads but can't tell what's working.",
  "We've tried three agencies and none of them got it.",
  "Our pipeline is completely unpredictable.",
  "Marketing and sales aren't talking to each other.",
  "We have tools but none of them connect.",
  "I know something's wrong but I can't name it.",
];

const deliverableTiles = [
  "Marketing audit document", "Attribution framework", "Rebuilt tool stack",
  "Gap analysis report", "Positioning document", "Messaging framework",
  "Tone of voice guide", "90-day roadmap", "Tool stack configured",
  "CRM set up", "Channel playbook", "SOP library",
  "Skill map", "Handover session", "30-day check-in",
];

const Friction = () => {
  useCanonical("/services/marketing-os/friction");
  const { openPopup } = useContactPopup();
  return (
    <>
      <Nav />

      <StageSwitcher active="friction" />

      {/* HERO */}
      <section className="zto-hero">
        <div className="zto-hero-inner">
          <h1>Your marketing isn't broken.</h1>
          <p className="zto-hero-sub">It was never built.</p>
          <p className="zto-hero-body">
            You're spending money. You're producing content. You're running campaigns. And yet, nothing
            is connecting. The problem isn't effort. It's architecture. You can't scale what was never
            properly built.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="fri-problem">
        <div className="fri-problem-inner">
          <h2>Stop funding the fog.</h2>
          <p>
            You know something is wrong but you can't name it. The spend is up, the results are flat,
            and every conversation about marketing ends in frustration. That's not a channel problem.
            That's a foundation problem, and it has a very specific fix.
          </p>
        </div>
      </section>

      {/* TIER CARDS */}
      <section className="zto-tiers">
        <div className="zto-tiers-inner">
          {tiers.map((t) => (
            <div key={t.name} className={`zto-tier-card zto-tier-${t.tier}`}>
              {t.badge && <span className="zto-tier-badge">{t.badge}</span>}
              <h3>{t.name}</h3>
              <div className="zto-tier-meta">
                <span>{t.duration}</span>
                <span className="zto-tier-price">{t.price}</span>
              </div>
              <p className="zto-tier-tagline">{t.tagline}</p>
              <div className="zto-tier-section">
                <span className="zto-tier-section-label">Who it's for</span>
                <p>{t.whoFor}</p>
              </div>
              <div className="zto-tier-section">
                <span className="zto-tier-section-label">Deliverables</span>
                <ul>
                  {t.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="zto-tier-leave">
                <span className="zto-tier-section-label">You leave with</span>
                <p>{t.leaveWith}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RETAINER STRIP */}
      <section className="zto-retainer">
        <div className="zto-retainer-inner">
          <p>
            All engagements include an optional ongoing retainer: <strong>£2,500–£4,000/month</strong>.
            Strategic oversight, not execution. A thinking partner as you grow.
          </p>
        </div>
      </section>

      {/* DIAGNOSIS SECTION */}
      <section className="fri-diagnosis">
        <div className="fri-diagnosis-inner">
          <div className="fri-diagnosis-left">
            <h2>Sound familiar?</h2>
            <div className="fri-signals">
              {frictionSignals.map((s) => (
                <div key={s} className="fri-signal-card">{s}</div>
              ))}
            </div>
          </div>
          <div className="fri-diagnosis-right">
            <p>If you nodded at two or more of these, you're in the right place.</p>
          </div>
        </div>
      </section>

      {/* WHAT YOU LEAVE WITH */}
      <section className="zto-deliverables">
        <div className="zto-deliverables-inner">
          <div className="section-label">Tangible. Documented. Yours.</div>
          <h2>What you leave with</h2>
          <div className="zto-del-grid">
            {deliverableTiles.map((d) => (
              <div key={d} className="zto-del-tile">{d}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="zto-cta">
        <div className="zto-cta-inner">
          <h2>Let's name what's broken.</h2>
          <p className="zto-cta-sub">And show you exactly how to fix it.</p>
          <button className="btn-primary" onClick={() => openPopup("marketing-os-friction")}>Book a Diagnostic Call</button>
          <p className="cta-note">20 minutes. No pitch. You'll leave with clarity regardless.</p>
        </div>
      </section>      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo"><img src="/logo.svg" alt="That Works" className="footer-logo-img" /></div>
            <p className="footer-tagline">High performance GTM systems. Designed, implemented and handed over.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social">LinkedIn</a>
              <a href="#" className="footer-social">X / Twitter</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/approach">How It Works</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/services">All Services</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p className="footer-newsletter-desc">GTM insights and what's actually working. No fluff.</p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" className="footer-newsletter-input" />
              <button type="submit" className="footer-newsletter-btn">Subscribe →</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 That Works. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Friction;
