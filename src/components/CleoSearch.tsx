/**
 * CleoSearch — the "Ask Cleo" search section used across all hub pages.
 * Requires .hub-page on a parent element for CSS variable scoping.
 * All result content is placeholder until the n8n AI agent is wired up.
 */

const CleoSearch = () => (
  <section className="ai-search-section">

    {/* Title + search bar */}
    <div className="ai-search-header">
      <div className="ai-search-eyebrow">
        <span className="ai-search-eyebrow-dot"></span>
        Ask Cleo
      </div>
      <div className="ai-search-title">Find exactly what<br />you <em>actually</em> need.</div>
      <p className="ai-search-sub">Ask in plain English — our AI searches across articles, playbooks, tools and dissections.</p>

      <div className="ai-search-bar">
        <input type="text" placeholder="e.g. how do I fix my pipeline if I'm pre-product-market fit?" />
        <button className="ai-search-bar-btn">✦ Search →</button>
      </div>

      <div className="ai-search-prompts">
        <span className="ai-search-prompts-label">Try:</span>
        <a className="ai-prompt-chip" href="#">cold outreach that converts</a>
        <a className="ai-prompt-chip" href="#">founder-led sales systems</a>
        <a className="ai-prompt-chip" href="#">ICP definition frameworks</a>
      </div>
    </div>

    {/* Results: 3-column layout */}
    <div className="sr-wrap">

      {/* LEFT: Tools + Dissection */}
      <div className="sr-col">
        <div className="sr-col-label">Tools &amp; Resources</div>
        <a href="#" className="sr-resource sr-arsenal">
          <div className="sr-res-type sr-res-a">Arsenal · Template</div>
          <div className="sr-res-name">ICP Qualification Canvas</div>
          <div className="sr-res-desc">Score prospects using real closed-won data — not guesswork.</div>
          <div className="sr-res-cta sr-res-a">Download free →</div>
        </a>
        <a href="#" className="sr-resource sr-lab">
          <div className="sr-res-type sr-res-l">Lab · Diagnostic</div>
          <div className="sr-res-name">GTM Readiness Score</div>
          <div className="sr-res-desc">Scored breakdown across 4 pillars with prioritised next steps.</div>
          <div className="sr-res-cta sr-res-l">Run for free →</div>
        </a>
        <a href="#" className="sr-dis">
          <div className="sr-dis-badge">★ Dissection</div>
          <div className="sr-dis-title">How Notion Went From $0 to $10B: The GTM Infrastructure Behind the Growth</div>
          <div className="sr-dis-meta">22 min · $10B valuation · PLG motion</div>
          <div className="sr-dis-cta">Read the dissection →</div>
        </a>
      </div>

      {/* MIDDLE: AI Insight + Reading order */}
      <div className="sr-col sr-col-ai">
        <div className="sr-insight-label">✦ A note from Cleo</div>
        <p className="sr-insight-text">This one comes up constantly — and it's one of the most fixable problems we see. Almost every time, it comes down to <mark>one of three things</mark>: your ICP has quietly drifted, your motion is right but you're targeting the wrong stage of company, or you're selling to the right person but not the right problem. Before you change anything about your outreach or your offer, you need to know which it is. Here's the fastest path to figuring that out.</p>
        <div className="sr-order-label">Here's what to do, in order</div>
        <a href="#" className="sr-order-item">
          <span className="sr-order-n">1</span>
          <div>
            <div className="sr-order-step-label">Read this first</div>
            <div className="sr-order-title">Why Your ICP Is Wrong (And How to Fix It)</div>
            <div className="sr-order-why">This will tell you which of the three problems you actually have. Don't skip it.</div>
          </div>
        </a>
        <a href="#" className="sr-order-item">
          <span className="sr-order-n">2</span>
          <div>
            <div className="sr-order-step-label">Then run this</div>
            <div className="sr-order-title">GTM Readiness Score</div>
            <div className="sr-order-why">Takes 8 minutes. It'll show you exactly which pillar is the leak — so you're fixing the right thing.</div>
          </div>
        </a>
        <a href="#" className="sr-order-item">
          <span className="sr-order-n">3</span>
          <div>
            <div className="sr-order-step-label">If you need more context</div>
            <div className="sr-order-title">The Founder-Led Sales Ceiling</div>
            <div className="sr-order-why">If the diagnostic points to motion, not signal — this is the piece that explains what to actually change.</div>
          </div>
        </a>
      </div>

      {/* RIGHT: Articles */}
      <div className="sr-col">
        <div className="sr-col-label">Articles &amp; Playbooks</div>
        <a href="#" className="sr-article">
          <div className="sr-art-cat sr-cat-gtm">GTM &amp; Growth</div>
          <div className="sr-art-title">The Founder-Led Sales Ceiling: Why Every Founder Hits It</div>
          <div className="sr-art-context">When you're the only one who can close, scale is impossible. Here's how to build a motion that doesn't depend on you.</div>
          <div className="sr-art-meta">8 min read</div>
        </a>
        <a href="#" className="sr-article">
          <div className="sr-art-cat sr-cat-strategy">Strategy</div>
          <div className="sr-art-title">The 90-Day GTM Playbook for Series A B2B SaaS</div>
          <div className="sr-art-context">A sequenced plan for the first 90 days post-raise — ICP, motion, channels, and the metrics that actually matter.</div>
          <div className="sr-art-meta">11 min read</div>
        </a>
        <a href="#" className="sr-article">
          <div className="sr-art-cat sr-cat-outbound">Lead Generation</div>
          <div className="sr-art-title">Cold Outreach That Doesn't Feel Cold</div>
          <div className="sr-art-context">The difference between outreach that converts and outreach that annoys is specificity. Here's the framework.</div>
          <div className="sr-art-meta">6 min read</div>
        </a>
        <a href="#" className="sr-article">
          <div className="sr-art-cat sr-cat-position">Positioning</div>
          <div className="sr-art-title">Why Your ICP Is Wrong (And How to Fix It)</div>
          <div className="sr-art-context">Most ICPs describe the accounts you've sold to, not the ones you should be selling to. Here's how to tell the difference.</div>
          <div className="sr-art-meta">7 min read</div>
        </a>
      </div>

    </div>

  </section>
);

export default CleoSearch;
