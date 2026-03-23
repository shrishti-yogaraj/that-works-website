import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import SEOHead from "@/components/SEOHead";

const testimonials = [
  {
    quote: "We had been burning budget on campaigns for 18 months with nothing to show for it. That Works came in, built the foundation we never had, and within 6 weeks we had",
    highlight: "a pipeline we could actually trust.",
    name: "Arjun Mehta",
    role: "VP of Growth",
    company: "Helio Software",
    service: "Marketing OS - 0→1",
    accent: "var(--orange)",
  },
  {
    quote: "We were a fast-growing business behaving like an early-stage startup. No systems, no attribution, no idea what was working. The Scale engagement gave us the infrastructure we should have built two years ago.",
    highlight: "Revenue reporting alone saved us 12 hours a week.",
    name: "Rohan Kapoor",
    role: "CEO",
    company: "Stackd",
    service: "Marketing OS - Scale",
    accent: "var(--lavender)",
  },
  {
    quote: "We'd been through two agencies and a freelancer in 18 months and nothing stuck. That Works diagnosed in week one what everyone else had missed. We didn't have a messaging problem.",
    highlight: "We had a foundation problem. Six weeks later, pipeline was predictable for the first time.",
    name: "Marcus Webb",
    role: "VP Marketing",
    company: "Orbis Analytics",
    service: "Marketing OS - Friction",
    accent: "var(--orange)",
  },
  {
    quote: "The lead gen engine they built runs while we sleep. We went from manually prospecting 10 leads a day to",
    highlight: "50 qualified conversations a week.",
    name: "Priya Nair",
    role: "Co-founder",
    company: "Bridgepoint Consulting",
    service: "Lead Gen TW",
    accent: "var(--yellow)",
  },
  {
    quote: "We had a product, a deck, and zero idea how to go to market. The Foundation Sprint gave us our ICP, our messaging, our CRM, and a 90-day plan we could actually execute.",
    highlight: "First 10 customers in 6 weeks.",
    name: "Kavya Reddy",
    role: "Founder",
    company: "NucleiHR",
    service: "Marketing OS - 0→1",
    accent: "var(--lavender)",
  },
  {
    quote: "We finally know what's actually driving revenue. Multi-touch attribution, clean data, automated handoffs. Sounds boring.",
    highlight: "Our CAC dropped 40% in the first quarter.",
    name: "James Harrington",
    role: "CMO",
    company: "Vantage Commerce",
    service: "Marketing OS - Friction",
    accent: "var(--lavender)",
  },
  {
    quote: "We were winning customers and losing them quietly. Onboarding was ad hoc, expansion was accidental, retention had no system. The lifecycle infrastructure That Works built has taken",
    highlight: "our NRR from 94% to 118% in one year.",
    name: "Deepa Iyer",
    role: "CMO",
    company: "Finflow Technologies",
    service: "Retention TW",
    accent: "var(--yellow)",
  },
  {
    quote: "We're a large business. Marketing was producing output but nobody could prove what it contributed. That Works rebuilt the entire operation from attribution to lifecycle to board reporting.",
    highlight: "We now operate like a business twice our size.",
    name: "Tom Bassett",
    role: "CRO",
    company: "Harlow Ventures",
    service: "Marketing OS - Leader",
    accent: "var(--orange)",
  },
];
const stages = [
  {
    number: "01",
    name: "0 → 1",
    desc: "Everything is in your head. Nothing is in a system. Growth is 100% founder-led.",
    detailTag: "Stage 01 - 0 → 1",
    headline: "You need a foundation, not a campaign.",
    body: "Before channels, before content, before ads, you need a system that can hold everything together. CRM, lead flows, automated tooling, attribution. Simple, repeatable lead flow.",
    cta: "See how we build it →",
    path: "/services/marketing-os/zero-to-one",
    fixTitle: "The Foundation",
    fixDesc: "CRM setup · lead flows · automated tooling · attribution · a simple repeatable pipeline you actually own.",
  },
  {
    number: "02",
    name: "Friction",
    desc: "Teams, budgets, activity, everything is growing except the one thing that matters: revenue.",
    detailTag: "Stage 02 - Friction",
    headline: "The leaky bucket needs fixing, not more water.",
    body: "Advanced custom automation, data enrichment, multi-touch attribution. 30–50% reduction in CAC. Clear, attributed ROI.",
    cta: "See how we fix it →",
    path: "/services/marketing-os/friction",
    fixTitle: "The Engine",
    fixDesc: "Advanced automation · data enrichment · multi-touch attribution · 30–50% CAC reduction · clear ROI.",
  },
  {
    number: "03",
    name: "Scale",
    desc: "You're moving, but every step is heavier than the last. Firefighting instead of scaling.",
    detailTag: "Stage 03 - Scale",
    headline: "20+ hours a week lost to ops tax. Let's get them back.",
    body: "Unified data warehouse, automated lead scoring, sales handoffs. Your team should be selling, not stitching data together.",
    cta: "See how we scale it →",
    path: "/services/marketing-os/scale",
    fixTitle: "The Infrastructure",
    fixDesc: "Unified data · automated scoring · clean handoffs · 20+ hours saved per week.",
  },
  {
    number: "04",
    name: "Leader",
    desc: "Growth is steady. But you can't tell what's driving it, who owns it, or if it's built to last.",
    detailTag: "Stage 04 - Leader",
    headline: "You've built something. Now make it impossible to lose.",
    body: "Full-funnel lifecycle automation, predictive analytics, enterprise-grade marketing operations. High NRR. The category is yours.",
    cta: "See how we sustain it →",
    path: "/services/marketing-os/leader",
    fixTitle: "The Ecosystem",
    fixDesc: "Full-funnel lifecycle automation · predictive analytics · high NRR · category leadership.",
  },
];

const PREPEND = 3;
const extended = [...testimonials.slice(-PREPEND), ...testimonials, ...testimonials.slice(0, PREPEND)];
const GAP = 24;

const Index = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [tIndex, setTIndex] = useState(PREPEND);
  const [noTransition, setNoTransition] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const { openPopup } = useContactPopup();
  const detail = stages[activeStage];
  const cardWidth = containerWidth > 0 ? (containerWidth - 2 * GAP) / 3 : 0;
  const trackOffset = tIndex * (cardWidth + GAP);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerWidth(el.clientWidth));
    ro.observe(el);
    setContainerWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setTIndex((prev) => prev + 1), 4000);
    return () => clearInterval(id);
  }, [isPaused]);

  useEffect(() => {
    if (noTransition) {
      requestAnimationFrame(() => requestAnimationFrame(() => setNoTransition(false)));
    }
  }, [noTransition]);

  const handleTransitionEnd = useCallback(() => {
    if (tIndex < PREPEND) {
      setNoTransition(true);
      setTIndex(tIndex + testimonials.length);
    } else if (tIndex >= testimonials.length + PREPEND) {
      setNoTransition(true);
      setTIndex(tIndex - testimonials.length);
    }
  }, [tIndex]);

  return (
    <>
      <SEOHead
        title="High Performance GTM Systems for B2B — That Works"
        description="We design and implement full-funnel marketing infrastructure for B2B companies. Strategy, infrastructure, execution — designed, implemented, yours forever."
        canonical="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "Service", "position": 1, "provider": { "@type": "Organization", "name": "That Works" }, "name": "Brand System & Positioning", "description": "We build the whole brand system — identity, positioning, voice and a full message bank — and hand it over.", "url": "https://thatworksco.com/services/branding" },
              { "@type": "Service", "position": 2, "provider": { "@type": "Organization", "name": "That Works" }, "name": "Inbound Marketing Infrastructure", "description": "An inbound system that attracts the right buyers, captures them, and moves them toward a conversation without your team having to chase.", "url": "https://thatworksco.com/services/inbound" },
              { "@type": "Service", "position": 3, "provider": { "@type": "Organization", "name": "That Works" }, "name": "B2B Lead Generation System", "description": "A custom-built lead generation engine that scrapes, enriches, researches and delivers fully personalised outreach at scale.", "url": "https://thatworksco.com/services/lead-gen" },
              { "@type": "Service", "position": 4, "provider": { "@type": "Organization", "name": "That Works" }, "name": "Customer Retention System", "description": "Systems that keep customers engaged, equip your sales team to close, and turn happy customers into your best growth channel.", "url": "https://thatworksco.com/services/retention" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What does That Works do?", "acceptedAnswer": { "@type": "Answer", "text": "That Works builds full-funnel GTM and lead generation systems for B2B companies — designed, implemented, and handed over to you." } },
              { "@type": "Question", "name": "Who is That Works for?", "acceptedAnswer": { "@type": "Answer", "text": "We work with B2B companies from 0 to 1 through to scale — typically founders and marketing leads who need systems, not just strategy." } },
              { "@type": "Question", "name": "How do I get started?", "acceptedAnswer": { "@type": "Answer", "text": "Book a 20-minute diagnostic call at thatworksco.com. We'll figure out where you are and what you need." } }
            ]
          }
        ]}
      />
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <h1>High performance<br />GTM systems.</h1>
            <div className="hero-sub">Full funnel marketing infrastructure for B2B.</div>
            <p className="hero-body">Everything your marketing needs. Especially the things you haven't thought of yet. Designed, implemented, yours forever.</p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => openPopup("homepage-hero")}>Book a Diagnostic Call →</button>
              <Link to="/approach" className="btn-ghost">See How It Works</Link>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-bars">
              <div className="hero-bar" style={{ borderColor: 'var(--orange)' }}>
                <span className="hero-bar-be">Be <em style={{ color: 'var(--orange)' }}>known.</em></span>
                <span className="hero-bar-desc">Brand &amp; positioning</span>
              </div>
              <div className="hero-bar" style={{ borderColor: 'var(--lavender)' }}>
                <span className="hero-bar-be">Be <em style={{ color: 'var(--lavender)' }}>found.</em></span>
                <span className="hero-bar-desc">Inbound &amp; content</span>
              </div>
              <div className="hero-bar" style={{ borderColor: 'var(--yellow)' }}>
                <span className="hero-bar-be">Be <em style={{ color: 'var(--yellow)' }}>chosen.</em></span>
                <span className="hero-bar-desc">Outreach &amp; sales</span>
              </div>
              <div className="hero-bar" style={{ borderColor: 'var(--text)' }}>
                <span className="hero-bar-be">Be <em style={{ color: 'var(--text)' }}>remembered.</em></span>
                <span className="hero-bar-desc">Retention &amp; enablement</span>
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
              <Link to={detail.path} className="btn-primary">{detail.cta}</Link>
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
            <p>No endless retainers. No dependency. We design the full system, implement it, and hand it over, ready to run without us.</p>
          </div>
          <div className="what-cards">
            <div className="what-card">
              <div className="what-card-icon">⚙</div>
              <h3>Strategy &amp; Architecture</h3>
              <p>We map where you are, where you're going, and design the exact infrastructure to get you there. No theory. A real system.</p>
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


      {/* SOCIAL PROOF */}
      <section className="proof-section">
        <div className="proof-inner">
          <div className="proof-header">
            <div className="section-label">What clients say</div>
            <h2>Built to last. <em style={{ fontStyle: 'italic', color: 'var(--lavender)' }}>Proven in the wild.</em></h2>
          </div>

          <div
            className="testimonial-carousel-row"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              className="carousel-arrow"
              onClick={() => setTIndex((prev) => prev - 1)}
              aria-label="Previous"
            >&#8592;</button>

            <div className="testimonial-track-outer" ref={outerRef}>
              <div
                className="testimonial-track"
                style={{
                  transform: `translateX(-${trackOffset}px)`,
                  transition: noTransition ? 'none' : 'transform 0.5s ease',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extended.map((t, i) => (
                  <div
                    key={i}
                    className="testimonial-card"
                    style={{ width: cardWidth > 0 ? `${cardWidth}px` : undefined, flexShrink: 0 }}
                  >
                    <p className="testimonial-quote">
                      "{t.quote} <span style={{ color: t.accent, fontWeight: 700 }}>{t.highlight}</span>"
                    </p>
                    <div className="testimonial-author">
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role} · {t.company}</div>
                      <div className="testimonial-service">{t.service}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="carousel-arrow"
              onClick={() => setTIndex((prev) => prev + 1)}
              aria-label="Next"
            >&#8594;</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-label" style={{ textAlign: 'center' }}>Ready when you are</div>
          <h2>Every stage of growth has a<br /><em>different breaking point.</em></h2>
          <p>Book a 15-minute diagnostic. We'll tell you exactly where yours is, and what it takes to get past it.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => openPopup("homepage-cta")}>Book a Diagnostic Call →</button>
            <a href="#" className="btn-ghost">Download the Guide</a>
          </div>
          <p className="cta-note">No pitch. No pressure. Just clarity.</p>
        </div>
      </section>      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo"><img src="/logo.svg" alt="That Works" width="678" height="392" className="footer-logo-img" /></div>
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

export default Index;
