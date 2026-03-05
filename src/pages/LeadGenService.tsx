const intelRows = [
  { category: "Company intelligence", detail: "Business model, market positioning, competitive landscape, tech stack" },
  { category: "Growth & financial signals", detail: "Funding rounds, revenue indicators, budget cycles" },
  { category: "Operational gaps", detail: "Hiring patterns, job descriptions, team structure" },
  { category: "Decision-maker context", detail: "LinkedIn activity, thought leadership, career trajectory" },
  { category: "Timing triggers", detail: "Product launches, expansions, regulatory changes" },
];
import Nav from "@/components/Nav";

const LeadGenService = () => {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="lg-hero">
        <div className="lg-hero-inner">
          <div className="section-label">Lead Gen TW</div>
          <h1>Your pipeline. Running itself.</h1>
          <p className="lg-hero-sub">Find them. Research them. Talk to them.</p>
          <p className="lg-hero-body">
            A custom-built lead generation engine that scrapes, enriches, researches and delivers fully personalised outreach — at scale, without your team lifting a finger.
          </p>
        </div>
      </section>

      {/* RESULTS STRIP */}
      <section className="lg-results">
        <div className="lg-results-inner">
          <div className="lg-stat">
            <div className="lg-stat-num">3x</div>
            <div className="lg-stat-label">replies — because every prospect feels like your #1 priority</div>
          </div>
          <div className="lg-stat">
            <div className="lg-stat-num">$0.2</div>
            <div className="lg-stat-label">cost-per-lead — so ridiculously low we had to triple-check</div>
          </div>
          <div className="lg-stat">
            <div className="lg-stat-num">5→50</div>
            <div className="lg-stat-label">conversations per day — quality conversations, every single day</div>
          </div>
          <div className="lg-stat">
            <div className="lg-stat-num">100%</div>
            <div className="lg-stat-label">happiness — all your prospects feel special. Even the ones that say no.</div>
          </div>
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
              <p>ICP criteria, research priorities, brand voice.</p>
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
          <p>Book a demo — we'll show you a lightly customised version of the engine running on your actual ICP.</p>
          <div className="cta-btns">
            <a href="#" className="btn-primary">Book a Demo →</a>
            <a href="#" className="btn-ghost">See Pricing</a>
          </div>
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
              <li><a href="/about">About</a></li>
              <li><a href="/approach">How It Works</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/services">Marketing OS TW</a></li>
              <li><a href="/services/lead-gen">Lead Gen TW</a></li>
              <li><a href="/services/branding">Branding TW</a></li>
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

export default LeadGenService;
