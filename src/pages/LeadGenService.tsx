import Nav from "@/components/Nav";
import { Link } from "react-router-dom";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import SEOHead from "@/components/SEOHead";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

const intelRows = [
  { category: "Company intelligence", detail: "Business model, market positioning, competitive landscape, tech stack" },
  { category: "Growth & financial signals", detail: "Funding rounds, revenue indicators, budget cycles" },
  { category: "Operational gaps", detail: "Hiring patterns, job descriptions, team structure" },
  { category: "Decision-maker context", detail: "LinkedIn activity, thought leadership, career trajectory" },
  { category: "Timing triggers", detail: "Product launches, expansions, regulatory changes" },
];

const faqs = [
  {
    q: "We've never done structured outbound before. Where do we even start?",
    a: "That's exactly the situation we're built for. We start with your ICP — who you're actually selling to — and build everything from there. By the time we hand over, you have a defined target list, working sequences, a configured CRM pipeline, and a prospecting SOP your team can run without us.",
    slug: "/blog/how-to-build-b2b-outbound-from-scratch",
  },
  {
    q: "What tools do you use, and do we own them?",
    a: "We design the stack around your situation. At minimum: a CRM (HubSpot, Pipedrive, or similar), an email sequencing tool (Instantly, Lemlist, or similar), a prospecting data source (Apollo, Clay, or similar), and custom-built automation workflows connecting them. Depending on your volume and channels, we also consider LinkedIn outreach tools, signal-based enrichment, and intent data integrations. Every tool is set up in your name, paid by you, owned by you.",
    slug: "/blog/the-b2b-outbound-tool-stack-explained",
  },
  {
    q: "How long before outbound starts generating pipeline?",
    a: "The build takes 2–4 weeks. Realistic first results — replies, booked meetings — typically appear within 2–6 weeks of the system going live. We build for consistency, not quick wins that burn your domain reputation.",
    slug: "/blog/b2b-outbound-timeline-what-to-expect",
  },
  {
    q: "We've tried cold email before and got blacklisted. How do you avoid that?",
    a: "Domain health, sending limits, warm-up protocol, and copy that doesn't trigger spam filters — all built into the infrastructure from day one, not bolted on after something breaks. Most blacklisting happens because people skip setup. We don't.",
    slug: "/blog/why-cold-email-gets-blacklisted-and-how-to-avoid-it",
  },
  {
    q: "How do you define who we should be targeting?",
    a: "ICP definition is the first thing we do — before any outreach is built. We validate against your existing customers, your market, and your positioning. A system built on a vague ICP produces vague results. Most outbound failures are an ICP problem, not a copy problem.",
    slug: "/blog/why-your-outbound-isnt-working-its-your-icp",
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

const LeadGenService = () => {
  const { openPopup } = useContactPopup();
  return (
    <>
      <SEOHead
        title="B2B Lead Generation Systems — That Works"
        description="A custom-built lead generation engine that scrapes, enriches, researches and delivers fully personalised outreach at scale, without your team lifting a finger."
        canonical="/services/lead-gen"
      />
      <Nav />

      {/* HERO */}
      <section className="lg-hero">
        <div className="lg-hero-inner">
          <div className="section-label">Lead Gen TW</div>
          <h1>Your pipeline. Running itself.</h1>
          <p className="lg-hero-sub">Find them. Research them. Talk to them.</p>
          <p className="lg-hero-body">
            A custom-built lead generation engine that scrapes, enriches, researches and delivers fully personalised outreach, at scale, without your team lifting a finger.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="lg-how">
        <div className="lg-how-inner">
          <div className="section-label">How it works</div>
          <h2>Three steps. One engine.</h2>
          <div className="lg-steps">
            <div className="lg-step">
              <div className="lg-step-num">01</div>
              <h3>Find them.</h3>
              <p>We find the best haystacks so you can find the best needles. Advanced prospect identification, qualification and list building that goes way beyond job title and revenue.</p>
            </div>
            <div className="lg-step">
              <div className="lg-step-num">02</div>
              <h3>Research them.</h3>
              <p>From where they take vacations to how they make decisions. Deep intelligence across 7+ sources builds a prospect profile that informs every single message.</p>
            </div>
            <div className="lg-step">
              <div className="lg-step-num">03</div>
              <h3>Talk to them.</h3>
              <p>Messages that feel handwritten, delivered at machine speed. Personalised outreach across email and LinkedIn that references real insights and feels authentic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE LOOK FOR */}
      <section className="lg-intel">
        <div className="lg-intel-inner">
          <div className="section-label">What we look for</div>
          <h2>The kind of intel that makes cold outreach <em style={{ fontStyle: 'italic', color: 'var(--lavender)' }}>feel warm.</em></h2>
          <div className="lg-intel-table">
            {intelRows.map((row, i) => (
              <div key={i} className="lg-intel-row">
                <div className="lg-intel-cat">{row.category}</div>
                <div className="lg-intel-detail">{row.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAYS TO WORK WITH US */}
      <section className="lg-packages">
        <div className="lg-packages-inner">
          <div className="section-label">Ways to work with us</div>
          <h2>Pick the level that fits.</h2>
          <div className="lg-pkg-grid">
            <div className="lg-pkg-card">
              <div className="lg-pkg-label">Managed</div>
              <h3>We've Got This</h3>
              <ul>
                <li>Complete campaign management</li>
                <li>ICP refinement</li>
                <li>Messaging updates</li>
                <li>Performance reporting</li>
                <li>Full technical maintenance</li>
              </ul>
              <div className="lg-pkg-best">Best for: teams who want results without touching the system.</div>
            </div>
            <div className="lg-pkg-card">
              <div className="lg-pkg-label">Supported</div>
              <h3>We've Got You</h3>
              <ul>
                <li>Workflow maintenance</li>
                <li>API management</li>
                <li>Structural changes</li>
                <li>Technical support</li>
              </ul>
              <div className="lg-pkg-best">Best for: teams with clear strategy who need technical backup.</div>
            </div>
            <div className="lg-pkg-card">
              <div className="lg-pkg-label">Owned</div>
              <h3>You've Got This</h3>
              <ul>
                <li>Complete workflow ownership</li>
                <li>1 year of structural support</li>
                <li>Lifetime debugging</li>
                <li>Documentation and handoff</li>
              </ul>
              <div className="lg-pkg-best">Best for: companies with fully in-house sales + marketing.</div>
            </div>
          </div>
          <p className="lg-pkg-note">Every workflow is custom, so pricing varies. Book a call and we'll scope it properly.</p>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="lg-process">
        <div className="lg-process-inner">
          <div className="section-label">The process</div>
          <h2>From kickoff to pipeline <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>in weeks.</em></h2>
          <div className="lg-process-grid">
            <div className="lg-phase">
              <div className="lg-phase-num">01</div>
              <h3>Kickoff + Scope Mapping</h3>
              <p>ICP criteria, research priorities, <Link to="/services/branding">brand voice</Link>.</p>
            </div>
            <div className="lg-phase">
              <div className="lg-phase-num">02</div>
              <h3>Customisation + Build</h3>
              <p>Fully custom workflow built to scope.</p>
            </div>
            <div className="lg-phase">
              <div className="lg-phase-num">03</div>
              <h3>Testing + Refinement</h3>
              <p>Validate quality and data before full launch.</p>
            </div>
            <div className="lg-phase">
              <div className="lg-phase-num">04</div>
              <h3>Launch + Optimisation</h3>
              <p>Go live, monitor, iterate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-label" style={{ textAlign: 'center' }}>Ready when you are</div>
          <h2>See it working for you.</h2>
          <p>Book a demo. We'll show you a lightly customised version of the engine running on your actual ICP.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => openPopup("lead-gen-page")}>Book a Demo →</button>
            <a href="#" className="btn-ghost">See Pricing</a>
          </div>
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

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default LeadGenService;
