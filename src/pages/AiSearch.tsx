import { useState } from "react";
import Nav from "@/components/Nav";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import SEOHead from "@/components/SEOHead";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

const services = [
  {
    num: "01",
    name: "AI Presence Audit",
    desc: "We run your target queries across ChatGPT, Google AI Overviews, Perplexity, and Gemini and map exactly where your brand appears, how it's described, and where the gaps are. You leave with a baseline AI Presence Index score and a clear picture of the opportunity.",
  },
  {
    num: "02",
    name: "Content Architecture",
    desc: "We restructure your existing content so large language models understand, trust, and cite it. Schema markup, entity optimisation, topical authority, semantic structure: the technical and editorial changes that turn passive content into cited sources.",
  },
  {
    num: "03",
    name: "Citation Building",
    desc: "We identify which sources AI models trust in your category (publications, databases, directories, third-party platforms) and build a systematic presence in them. The goal: become one of the sources the models pull from.",
  },
  {
    num: "04",
    name: "Presence Monitoring",
    desc: "Monthly AI Presence Index tracking across all four platforms with clear reporting, query-level citation data, competitive benchmarking, and iteration recommendations. The landscape moves fast, so this keeps your presence compounding.",
  },
];

const industryStats = [
  { value: "63%", label: "of Google searches now trigger an AI-generated overview", color: "orange" },
  { value: "340%", label: "year-over-year growth in AI search usage globally", color: "lavender" },
  { value: "2.4B", label: "people use AI tools for research every single week", color: "yellow" },
  { value: "3.2×", label: "more click-through intent for first-cited brands in AI answers", color: "orange" },
  { value: "71%", label: "of B2B buyers now start their research with an AI tool", color: "lavender" },
  { value: "12 sec", label: "average time before a user acts on an AI-generated answer", color: "yellow" },
];

const queryRows = [
  { query: "best [category] software for growing teams", gpt: true, gao: true, perp: true, gem: false },
  { query: "how to choose a [category] agency", gpt: true, gao: false, perp: true, gem: true },
  { query: "[category] alternatives to [competitor]", gpt: false, gao: true, perp: false, gem: false },
  { query: "top [category] tools 2025", gpt: true, gao: true, perp: true, gem: true },
  { query: "[brand name] reviews and reputation", gpt: true, gao: false, perp: true, gem: false },
];

const recommendations = [
  {
    priority: "HIGH",
    title: "Add FAQ schema to your core service pages",
    reason: "LLMs consistently skip unstructured pages. No FAQ schema, no entity signals, no clear category anchor means no citation.",
    impact: "+11–14 pts",
    platforms: ["GPT-4o", "Gemini"],
  },
  {
    priority: "HIGH",
    title: "Publish head-to-head comparison content",
    reason: 'Queries like "[you] vs [Competitor]" return competitor citations 4× more often. You have zero content in this format.',
    impact: "+7–9 pts",
    platforms: ["All 4 platforms"],
  },
  {
    priority: "MEDIUM",
    title: "Claim 8 missing vertical directories",
    reason: "Perplexity pulls heavily from these sources in your category. You're absent from all of them, and that's fixable in weeks.",
    impact: "+4–6 pts",
    platforms: ["Perplexity", "ChatGPT"],
  },
];

const contentGaps = [
  { query: '"[category] implementation guide"', cited: 0 },
  { query: '"how to evaluate [category] vendors"', cited: 1 },
  { query: '"[brand] vs [Competitor A]"', cited: 0 },
  { query: '"ROI of [category] investment"', cited: 0 },
  { query: '"best [category] for [industry]"', cited: 2 },
];

const competitors = [
  { name: "Your Brand", score: 84, gpt: 67, gao: 73, perp: 61, gem: 48, isYou: true },
  { name: "Competitor A", score: 73, gpt: 58, gao: 71, perp: 54, gem: 43, isYou: false },
  { name: "Competitor B", score: 66, gpt: 45, gao: 62, perp: 48, gem: 38, isYou: false },
  { name: "Competitor C", score: 51, gpt: 38, gao: 55, perp: 31, gem: 28, isYou: false },
  { name: "Competitor D", score: 44, gpt: 29, gao: 48, perp: 24, gem: 19, isYou: false },
];

const faqs = [
  {
    q: "What's the difference between AEO / GEO and traditional SEO?",
    a: "Traditional SEO optimises for a position in a ranked list of links. AI Search Presence, what others call AEO or GEO, optimises for being cited directly inside an AI-generated answer. The mechanics are different: language models pull from sources they trust based on entity authority, structured content, and semantic clarity, not just keyword density or backlink volume. Both matter. They are complementary disciplines, not competing ones.",
  },
  {
    q: "How do you measure success?",
    a: "We track your AI Presence Index, a composite score reflecting how often, and how prominently, your brand is cited across ChatGPT, Google AI Overviews, Perplexity, and Gemini for your target queries. We baseline you at the start, track monthly, and report on citation rate, query coverage, platform-level performance, and competitive positioning. The number moves. You see it move.",
  },
  {
    q: "How long before we see results?",
    a: "Most clients see meaningful movement in their AI Presence Index within 60 to 90 days. Content architecture and structured data changes are picked up relatively quickly by AI systems. Citation building compounds over time. The businesses that commit to it for six months or longer see the most durable and compounding gains.",
  },
  {
    q: "Does this replace our existing SEO investment?",
    a: "No. AI Search Presence works alongside your existing SEO, and in most cases it strengthens it. A lot of the underlying work (topical authority, schema, quality content, credible backlinks) serves both. Think of this as the layer on top that ensures the work you're already doing gets seen inside AI answers, not just traditional rankings.",
  },
  {
    q: "Which types of businesses is this right for?",
    a: "Any business where being found by a research-ready buyer matters. That typically means B2B companies, professional services, software, and any category where buying decisions involve prior research. If your customers are using ChatGPT or Perplexity to answer the questions your business should be answering, this is the right investment.",
  },
];

type DashTab = "overview" | "recommendations" | "competitors";

const AiSearch = () => {
  const { openPopup } = useContactPopup();
  const [dashTab, setDashTab] = useState<DashTab>("overview");

  return (
    <>
      <SEOHead
        title="AI Search Presence — That Works"
        description="Optimise your brand for the AI search era. Be cited in ChatGPT, Google AI Overviews, Perplexity, and Gemini, not just ranked in traditional search results."
        canonical="/ai-search"
      />
      <Nav />

      {/* ── HERO ── */}
      <section className="ais-hero">
        <div className="ais-hero-inner">
          <div className="section-label">AI Search Presence</div>
          <h1>
            Your buyers ask AI.<br />
            <span className="ais-h1-accent">Be the answer.</span>
          </h1>
          <p className="ais-hero-sub">
            <em>The brands that get cited grow. The ones that don't become invisible.</em>
          </p>
          <p className="ais-hero-body">
            ChatGPT, Google AI Overviews, Perplexity, Gemini: they're doing the research for your buyers before your website ever loads. AI Search Presence is how you make sure your brand is in those answers, not your competitor's.
          </p>
          <div className="ais-hero-btns">
            <button className="btn-primary" onClick={() => openPopup("ai-search-hero")}>Book a Discovery Call →</button>
          </div>
        </div>
        <div className="ais-hero-stats">
          <div className="ais-stat-row">
            <div className="ais-stat">
              <span className="ais-stat-val">63%</span>
              <span className="ais-stat-label">of searches now return an AI-generated answer</span>
            </div>
            <div className="ais-stat">
              <span className="ais-stat-val">340%</span>
              <span className="ais-stat-label">year-over-year growth in AI search usage</span>
            </div>
            <div className="ais-stat">
              <span className="ais-stat-val">71%</span>
              <span className="ais-stat-label">of B2B buyers start research with an AI tool</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE SHIFT ── */}
      <section className="ais-shift">
        <div className="ais-shift-inner">
          <div className="ais-shift-block">
            <div className="section-label">What changed</div>
            <h2>Search used to end at your website. Now it ends at the answer.</h2>
            <p>
              For two decades, search meant a list of links. Users clicked. You ranked. The game was predictable. Now a growing majority of searches, especially the considered, research-heavy ones your best customers make, get answered before they reach you. An AI reads the web, synthesises the most trusted sources, and delivers a single response. Your buyer never clicks through. They either read about you in that answer, or they don't.
            </p>
            <div className="ais-shift-callout">
              <span className="ais-shift-callout-stat">3.2×</span>
              <span className="ais-shift-callout-text">more intent signals from buyers who saw your brand cited first in an AI answer</span>
            </div>
          </div>
          <div className="ais-shift-compare">
            <div className="ais-compare-col">
              <div className="ais-compare-header ais-compare-old">Before</div>
              <ul>
                <li>Rank in a list of 10 links</li>
                <li>User clicks through to your site</li>
                <li>Traffic is the north star</li>
                <li>Keyword density, backlinks</li>
                <li>Position 1 wins</li>
              </ul>
            </div>
            <div className="ais-compare-col ais-compare-col-new">
              <div className="ais-compare-header ais-compare-new">Now</div>
              <ul>
                <li>Be cited inside an AI answer</li>
                <li>Buyer reads your brand without visiting</li>
                <li>Citation rate is the north star</li>
                <li>Entity authority, structured content</li>
                <li>First citation wins</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN DASHBOARD ── */}
      <section className="ais-dashboard-section">
        <div className="ais-dashboard-inner">
          <div className="section-label">AI Presence Index</div>
          <h2>This is what your AI presence looks like.<br />Tracked, scored, improved every month.</h2>
          <div className="ais-dashboard">

            {/* Dashboard top bar */}
            <div className="ais-db-header">
              <div className="ais-db-header-left">
                <span className="ais-db-title">AI Presence Index: Sample Client Dashboard</span>
                <span className="ais-db-subtitle">847 queries monitored across 4 platforms · Last updated 2 hours ago</span>
              </div>
              <span className="ais-db-period">90-day view</span>
            </div>

            {/* Tabs */}
            <div className="ais-db-tabs">
              {(["overview", "recommendations", "competitors"] as DashTab[]).map((tab) => (
                <button
                  key={tab}
                  className={`ais-db-tab${dashTab === tab ? " ais-db-tab--active" : ""}`}
                  onClick={() => setDashTab(tab)}
                >
                  {tab === "overview" && "Overview"}
                  {tab === "recommendations" && "Recommendations"}
                  {tab === "competitors" && "Competitor Analysis"}
                </button>
              ))}
            </div>

            {/* ── Tab: Overview ── */}
            {dashTab === "overview" && (
              <>
                <div className="ais-db-top">
                  <div className="ais-db-score-wrap">
                    <div className="ais-db-score-ring">
                      <svg viewBox="0 0 120 120" className="ais-ring-svg">
                        <circle cx="60" cy="60" r="50" className="ais-ring-bg" />
                        <circle cx="60" cy="60" r="50" className="ais-ring-fill" />
                      </svg>
                      <div className="ais-ring-label">
                        <span className="ais-ring-num">84</span>
                        <span className="ais-ring-denom">/100</span>
                      </div>
                    </div>
                    <div className="ais-score-meta">
                      <span className="ais-score-name">AI Presence Score</span>
                      <span className="ais-score-delta">↑ +23 pts over 90 days</span>
                    </div>
                  </div>
                  <div className="ais-db-metrics">
                    <div className="ais-db-metric">
                      <span className="ais-db-metric-val">68%</span>
                      <span className="ais-db-metric-label">Citation Rate</span>
                      <span className="ais-db-metric-sub">across monitored queries</span>
                    </div>
                    <div className="ais-db-metric">
                      <span className="ais-db-metric-val">1,240</span>
                      <span className="ais-db-metric-label">Brand Mentions</span>
                      <span className="ais-db-metric-sub">in AI answers this month</span>
                    </div>
                    <div className="ais-db-metric">
                      <span className="ais-db-metric-val">847</span>
                      <span className="ais-db-metric-label">Queries Tracked</span>
                      <span className="ais-db-metric-sub">across 4 AI platforms</span>
                    </div>
                    <div className="ais-db-metric">
                      <span className="ais-db-metric-val">+38%</span>
                      <span className="ais-db-metric-label">MoM Growth</span>
                      <span className="ais-db-metric-sub">citation volume trend</span>
                    </div>
                  </div>
                </div>

                <div className="ais-db-platforms">
                  <div className="ais-db-section-title">Platform Citation Rates</div>
                  <div className="ais-platform-list">
                    {[
                      { name: "Google AI Overviews", pct: 73, delta: "+8%", accent: "orange" },
                      { name: "ChatGPT / GPT-4o", pct: 67, delta: "+12%", accent: "orange" },
                      { name: "Perplexity", pct: 61, delta: "+5%", accent: "lavender" },
                      { name: "Gemini", pct: 48, delta: "+19%", accent: "lavender" },
                    ].map((p) => (
                      <div key={p.name} className="ais-platform-row">
                        <span className="ais-platform-name">{p.name}</span>
                        <div className="ais-platform-bar-wrap">
                          <div className="ais-platform-bar" style={{ "--w": `${p.pct}%`, "--color": `var(--${p.accent})` } as React.CSSProperties} />
                        </div>
                        <span className="ais-platform-pct">{p.pct}%</span>
                        <span className="ais-platform-delta">{p.delta}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ais-db-trend">
                  <div className="ais-db-section-title">90-Day Citation Volume</div>
                  <div className="ais-trend-chart">
                    {[
                      { h: 28, label: "Apr" }, { h: 34, label: "" }, { h: 31, label: "" },
                      { h: 38, label: "May" }, { h: 42, label: "" }, { h: 45, label: "" },
                      { h: 41, label: "Jun" }, { h: 52, label: "" }, { h: 56, label: "" },
                      { h: 59, label: "Jul" }, { h: 63, label: "" }, { h: 68, label: "" },
                    ].map((col, i) => (
                      <div key={i} className={`ais-trend-col${i === 11 ? " ais-trend-col--latest" : ""}`}>
                        <div className="ais-trend-bar" style={{ height: `${(col.h / 70) * 100}%` }} />
                        <span className="ais-trend-label">{col.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ── Tab: Recommendations ── */}
            {dashTab === "recommendations" && (
              <div className="ais-rec-grid">
                <div className="ais-rec-left">
                  <div className="ais-db-section-title">Priority Actions</div>
                  <div className="ais-rec-summary">
                    <span className="ais-rec-summary-val">3</span> high-impact fixes identified
                    <span className="ais-rec-summary-sep" />
                    <span className="ais-rec-summary-val ais-rec-summary-val--lav">+22–29 pts</span> estimated total lift
                  </div>
                  <div className="ais-action-list">
                    {recommendations.map((r, i) => (
                      <div key={i} className="ais-action-card">
                        <div className="ais-action-top">
                          <span className={`ais-action-badge ais-action-badge--${r.priority.toLowerCase()}`}>{r.priority}</span>
                          <span className="ais-action-impact">↑ {r.impact}</span>
                        </div>
                        <div className="ais-action-title">{r.title}</div>
                        <div className="ais-action-reason">{r.reason}</div>
                        <div className="ais-action-platforms">
                          {r.platforms.map((p, j) => (
                            <span key={j} className="ais-action-platform-tag">{p}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ais-rec-right">
                  <div className="ais-db-section-title">Content Gaps</div>
                  <p className="ais-rec-intro">Queries where competitors are cited and you aren't.</p>
                  <div className="ais-gap-list">
                    {contentGaps.map((gap, i) => (
                      <div key={i} className="ais-gap-row">
                        <span className="ais-gap-query">{gap.query}</span>
                        <div className="ais-gap-dots">
                          {[0, 1, 2, 3].map((j) => (
                            <span key={j} className={`ais-gap-dot${j < gap.cited ? " ais-gap-dot--cited" : ""}`} />
                          ))}
                          <span className="ais-gap-count">{gap.cited}/4</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="ais-rec-opportunity">
                    <div className="ais-rec-opp-title">Quick win opportunity</div>
                    <div className="ais-rec-opp-body">
                      Brands that address all 5 content gaps above typically see a <strong>+18–24 pt</strong> increase in their AI Presence Index within 60 days.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Tab: Competitors ── */}
            {dashTab === "competitors" && (
              <div className="ais-comp-section">
                <div className="ais-comp-intro">
                  <div className="ais-db-section-title">Competitive Position</div>
                  <p className="ais-rec-intro">How your brand ranks in AI search vs the top 4 competitors in your category.</p>
                </div>
                <div className="ais-comp-table">
                  <div className="ais-comp-thead">
                    <span>Brand</span>
                    <span>AI Score</span>
                    <span>GPT-4o</span>
                    <span>AI Overviews</span>
                    <span>Perplexity</span>
                    <span>Gemini</span>
                  </div>
                  {competitors.map((c, i) => (
                    <div key={i} className={`ais-comp-row${c.isYou ? " ais-comp-row--you" : ""}`}>
                      <div className="ais-comp-name">
                        {c.isYou && <span className="ais-comp-you-badge">you</span>}
                        {c.name}
                      </div>
                      <div className="ais-comp-score-cell">
                        <span className="ais-comp-score-num">{c.score}</span>
                        <div className="ais-comp-score-bar-wrap">
                          <div
                            className="ais-comp-score-bar"
                            style={{ "--w": `${c.score}%`, "--color": c.isYou ? "var(--orange)" : "var(--border)" } as React.CSSProperties}
                          />
                        </div>
                      </div>
                      {[c.gpt, c.gao, c.perp, c.gem].map((pct, j) => (
                        <div key={j} className="ais-comp-platform-cell">
                          <span className={`ais-comp-pct${c.isYou ? " ais-comp-pct--you" : ""}`}>{pct}%</span>
                          <div className="ais-comp-mini-bar-wrap">
                            <div
                              className="ais-comp-mini-bar"
                              style={{ "--w": `${pct}%`, "--color": c.isYou ? "var(--orange)" : "var(--label)" } as React.CSSProperties}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="ais-comp-insights">
                  <div className="ais-comp-insight ais-comp-insight--win">
                    <div className="ais-comp-insight-label">Where you lead</div>
                    <div className="ais-comp-insight-body">Google AI Overviews and ChatGPT: 15+ point gap over nearest competitor. These channels are compounding.</div>
                  </div>
                  <div className="ais-comp-insight ais-comp-insight--gap">
                    <div className="ais-comp-insight-label">Biggest opportunity</div>
                    <div className="ais-comp-insight-body">Gemini is your weakest platform and the fastest-growing AI search channel. Closing the gap here is the highest-leverage move in the next 90 days.</div>
                  </div>
                  <div className="ais-comp-insight ais-comp-insight--watch">
                    <div className="ais-comp-insight-label">Watch</div>
                    <div className="ais-comp-insight-body">Competitor A is closing the gap on AI Overviews, down from 18 pts behind to 2 pts in 90 days. Defend with schema and freshness.</div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="ais-services">
        <div className="ais-services-inner">
          <div className="section-label">What we do</div>
          <h2>Four components. One cohesive presence.</h2>
          <div className="ais-services-grid">
            {services.map((s, i) => (
              <div key={i} className="ais-service-card">
                <div className="ais-service-num">{s.num}</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE NUMBERS ── */}
      <section className="ais-numbers">
        <div className="ais-numbers-inner">
          <div className="section-label">The scale of the shift</div>
          <h2>The numbers that change the brief.</h2>
          <div className="ais-numbers-grid">
            {industryStats.map((s, i) => (
              <div key={i} className="ais-number-card">
                <span className={`ais-number-val ais-number-val--${s.color}`}>{s.value}</span>
                <span className="ais-number-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="ais-process">
        <div className="ais-process-inner">
          <div className="section-label">How it works</div>
          <h2>Structured. Methodical. Measurable.</h2>
          <div className="ais-process-steps">
            <div className="ais-process-step">
              <div className="ais-process-num">01</div>
              <h3>Audit</h3>
              <p>We run your target queries across all four platforms and map where your brand appears, how it's described, and where the gaps are. You leave with a baseline AI Presence Index score and a clear picture of the opportunity.</p>
            </div>
            <div className="ais-process-step">
              <div className="ais-process-num">02</div>
              <h3>Optimise</h3>
              <p>We restructure content, implement structured data, build entity authority, and position your brand in the sources AI models trust. This is where the score moves. Most clients see meaningful lift within 60 to 90 days.</p>
            </div>
            <div className="ais-process-step">
              <div className="ais-process-num">03</div>
              <h3>Monitor</h3>
              <p>Monthly AI Presence Index reporting, query-level citation tracking, competitive benchmarking, and ongoing iteration. The AI search landscape changes fast, so this keeps your presence compounding, not stalling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUERY PERFORMANCE DASHBOARD ── */}
      <section className="ais-query-section">
        <div className="ais-query-inner">
          <div className="section-label">Query performance</div>
          <h2>Every answer is an opportunity.<br />We track them all.</h2>
          <div className="ais-query-dashboard">
            <div className="ais-qd-header">
              <span className="ais-qd-title">Citation Status by Query</span>
              <div className="ais-qd-legend">
                <span className="ais-qd-leg ais-qd-leg-yes">Cited</span>
                <span className="ais-qd-leg ais-qd-leg-no">Not cited</span>
              </div>
            </div>
            <div className="ais-qd-table">
              <div className="ais-qd-thead">
                <span>Query</span>
                <span>GPT-4o</span>
                <span>AI Overviews</span>
                <span>Perplexity</span>
                <span>Gemini</span>
              </div>
              {queryRows.map((row, i) => (
                <div key={i} className="ais-qd-row">
                  <span className="ais-qd-query">{row.query}</span>
                  <span className={`ais-qd-badge ${row.gpt ? "ais-badge-yes" : "ais-badge-no"}`}>{row.gpt ? "✓" : "–"}</span>
                  <span className={`ais-qd-badge ${row.gao ? "ais-badge-yes" : "ais-badge-no"}`}>{row.gao ? "✓" : "–"}</span>
                  <span className={`ais-qd-badge ${row.perp ? "ais-badge-yes" : "ais-badge-no"}`}>{row.perp ? "✓" : "–"}</span>
                  <span className={`ais-qd-badge ${row.gem ? "ais-badge-yes" : "ais-badge-no"}`}>{row.gem ? "✓" : "–"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-label" style={{ textAlign: "center" }}>Ready to be found</div>
          <h2>Your buyers are asking AI tools about <em>your category right now.</em></h2>
          <p>Book a discovery call. We'll audit where you stand, show you where the gaps are, and tell you exactly what it would take to fix them.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => openPopup("ai-search-cta")}>Book a Discovery Call →</button>
          </div>
          <p className="cta-note">No pitch. No obligation. Just a clear picture.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
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

export default AiSearch;
