import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CleoSearch from "@/components/CleoSearch";
import HubBanner from "@/components/HubBanner";
import { useNewsletterSubscribe } from "@/hooks/useNewsletterSubscribe";
import sanityPostsRaw from "@/data/sanityPosts.json";
import hubDataRaw from "@/data/sanityHubData.json";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FeaturedPost {
  title: string;
  slug: string;
  excerpt: string;
  readTime?: number;
  publishedAt?: string;
  category?: string;
  categoryColor?: string;
}

interface RecentPost {
  title: string;
  slug: string;
  category?: string;
  categoryColor?: string;
  featuredImage?: { ref?: string; alt?: string } | null;
}

interface LabItem {
  title: string;
  slug: string;
  tagline?: string;
  category?: string;
  timeToComplete?: string;
  outputDescription?: string;
  useCases?: string[];
  icon?: string;
}

interface Dissection {
  title: string;
  slug: string;
  company: string;
  eyebrow?: string;
  excerpt?: string;
  stats?: Array<{ value: string; label?: string }>;
  readTime?: number;
}

interface HubData {
  featuredPost: FeaturedPost | null;
  recentPosts: RecentPost[];
  labItems: LabItem[];
  latestDissection: Dissection | null;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const hubData = hubDataRaw as HubData;
const articleCount = (sanityPostsRaw as { slug: string }[]).filter((p) => p.slug).length;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<string, string> = {
  "GTM & Growth":         "var(--orange)",
  "Marketing Systems":    "var(--lav)",
  "Lead Generation":      "var(--orange)",
  "Playbooks":            "var(--amber)",
  "Revenue Architecture": "#34d399",
  "Tool Reviews":         "var(--muted)",
  "Strategy":             "#fbbf24",
  "Positioning":          "#60a5fa",
  "Hiring & Team Design": "#fb7185",
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  "GTM & Growth":         "linear-gradient(135deg, #1c1917 0%, #ff5c00 60%, #fbbf24 100%)",
  "Marketing Systems":    "linear-gradient(135deg, #1c1916 0%, #c4b5fd 100%)",
  "Lead Generation":      "linear-gradient(135deg, #1c1917 0%, #ff5c00 100%)",
  "Playbooks":            "linear-gradient(135deg, #2d1f14 0%, #fbbf24 100%)",
  "Revenue Architecture": "linear-gradient(135deg, #1c1816 0%, #34d399 100%)",
  "Tool Reviews":         "linear-gradient(135deg, #1c1917 0%, #9a9088 100%)",
  "Strategy":             "linear-gradient(135deg, #1c1816 0%, #fbbf24 100%)",
  "Positioning":          "linear-gradient(135deg, #1c1816 0%, #60a5fa 100%)",
  "Hiring & Team Design": "linear-gradient(135deg, #1c1816 0%, #fb7185 100%)",
};

function getCategoryColor(category?: string | null, fallback = "var(--orange)"): string {
  if (!category) return fallback;
  return CATEGORY_COLORS[category] ?? fallback;
}

function getCategoryGradient(category?: string | null): string {
  if (!category) return "linear-gradient(135deg, #1c1917 0%, #9a9088 100%)";
  return CATEGORY_GRADIENTS[category] ?? "linear-gradient(135deg, #1c1917 0%, #9a9088 100%)";
}

function getLabCta(category?: string | null): string {
  switch (category) {
    case "diagnostic":  return "Run the diagnostic →";
    case "calculator":  return "Open the calculator →";
    case "scorecard":   return "Run the scorecard →";
    case "generator":   return "Try the generator →";
    case "planner":     return "Open the planner →";
    default:            return "Open the tool →";
  }
}

function formatLabCategory(category?: string | null): string {
  if (!category) return "Tool";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function formatPublishedAt(iso?: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

// ─── Component ────────────────────────────────────────────────────────────────

const Blog = () => {
  const [comingSoonPopup, setComingSoonPopup] = useState<string | null>(null);
  const exitShownRef = useRef(false);
  const { email: popupEmail, setEmail: setPopupEmail, status: popupStatus, errorMessage: popupError, subscribe: popupSubscribe } = useNewsletterSubscribe("exit-popup");

  const { featuredPost, recentPosts, labItems, latestDissection } = hubData;

  useEffect(() => {
    const btn = document.querySelector<HTMLElement>(".back-to-site");
    const footer = document.querySelector<HTMLElement>(".site-footer");
    if (!btn || !footer) return;

    const handleScroll = () => {
      const footerTop = footer.getBoundingClientRect().top;
      const btnHeight = btn.offsetHeight;
      const gap = 12;
      const defaultBottom = 28;
      const clearance = window.innerHeight - footerTop;

      if (clearance > defaultBottom + btnHeight) {
        btn.style.bottom = `${clearance + gap}px`;
      } else {
        btn.style.bottom = `${defaultBottom}px`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const overlay = document.getElementById("exitOverlay");
    const closeBtn = document.getElementById("exitClose");

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShownRef.current) {
        exitShownRef.current = true;
        overlay?.classList.add("visible");
      }
    };

    const handleClose = () => {
      overlay?.classList.remove("visible");
    };

    const handleOverlayClick = (e: MouseEvent) => {
      if (e.target === e.currentTarget) {
        (e.currentTarget as HTMLElement).classList.remove("visible");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    closeBtn?.addEventListener("click", handleClose);
    overlay?.addEventListener("click", handleOverlayClick as EventListener);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      closeBtn?.removeEventListener("click", handleClose);
      overlay?.removeEventListener("click", handleOverlayClick as EventListener);
    };
  }, []);

  return (
    <>
      <SEOHead
        title="The Hub — That Works"
        description="GTM insights, tools, dissections and diagnostics — all in one place."
        canonical="/blog"
      />
      <div className="hub-page">

        {/* ═══════════════════════
             SUBSCRIPTION BANNER
        ═══════════════════════ */}
        <HubBanner />

        {/* ═══════════════════════
             MASTHEAD
        ═══════════════════════ */}
        <header>
          <div className="mast">
            <div className="mast-top">
              <span className="mast-top-left">That Works · Resource Hub</span>
              <div className="mast-search">
                <input
                  type="text"
                  placeholder="What are you trying to build or fix?"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.currentTarget.value.trim()) {
                      window.location.href = `/articles?q=${encodeURIComponent(e.currentTarget.value.trim())}`;
                    }
                  }}
                />
                <span className="mast-search-ic">↵</span>
              </div>
            </div>
            <div className="mast-title">The Anatomy of Scale.</div>
            <div className="mast-rule-double"></div>
            <div className="mast-tagline">Frameworks, diagnostics and honest opinions on GTM, lead generation, and the systems behind B2B growth.</div>
          </div>
        </header>

        {/* ═══════════════════════
             LEAD SECTION
        ═══════════════════════ */}
        <section className="above-fold">

          {/* Left: lab tools */}
          <div className="left-col">
            {labItems[0] && (
              <Link className="left-col-tool" to={`/lab/${labItems[0].slug}`}>
                <div className="left-col-tool-top">
                  <span className="left-col-tool-tag">Tool of the week</span>
                  <span className="left-col-tool-type">{formatLabCategory(labItems[0].category)}</span>
                </div>
                <div className="left-col-tool-body">
                  <div className="left-col-tool-hed">{labItems[0].title}</div>
                  {labItems[0].tagline && (
                    <p className="left-col-tool-dek">{labItems[0].tagline}</p>
                  )}
                  {labItems[0].useCases && labItems[0].useCases.length > 0 && (
                    <ul className="outcome-list">
                      {labItems[0].useCases.map((uc, i) => (
                        <li key={i}>{uc}</li>
                      ))}
                    </ul>
                  )}
                  <div className="left-col-tool-cta">{getLabCta(labItems[0].category)}</div>
                </div>
              </Link>
            )}
            {labItems[1] && (
              <Link className="left-col-resource-week" to={`/lab/${labItems[1].slug}`}>
                <div className="left-col-resource-week-top">
                  <span className="left-col-resource-week-tag">Also in the Lab</span>
                  <span className="left-col-resource-week-type">{formatLabCategory(labItems[1].category)}</span>
                </div>
                <div className="left-col-resource-week-body">
                  <div className="left-col-resource-week-hed">{labItems[1].title}</div>
                  {labItems[1].tagline && (
                    <p className="left-col-resource-week-dek">{labItems[1].tagline}</p>
                  )}
                  {labItems[1].useCases && labItems[1].useCases.length > 0 && (
                    <ul className="outcome-list">
                      {labItems[1].useCases.map((uc, i) => (
                        <li key={i}>{uc}</li>
                      ))}
                    </ul>
                  )}
                  <div className="left-col-resource-week-cta">{getLabCta(labItems[1].category)}</div>
                </div>
              </Link>
            )}
          </div>

          {/* spacer */}
          <div></div>

          {/* Centre: featured article */}
          <div className="lead-col">
            {featuredPost && (
              <>
                <div className="lead-graphic">
                  <div className="lead-graphic-inner"></div>
                </div>
                <div className="lead-overline">
                  ★ Featured{featuredPost.category ? ` · ${featuredPost.category}` : ""}
                </div>
                <Link to={`/blog/${featuredPost.slug}`} className="lead-hed-link">
                  <div className="lead-hed">{featuredPost.title}</div>
                </Link>
                <div className="lead-rule"></div>
                <p className="lead-dek">{featuredPost.excerpt}</p>
                <div className="lead-meta">
                  {[
                    formatPublishedAt(featuredPost.publishedAt),
                    featuredPost.readTime ? `${featuredPost.readTime} min read` : null,
                    "That Works",
                  ].filter(Boolean).join(" · ")}
                </div>
              </>
            )}
          </div>

          {/* spacer */}
          <div></div>

          {/* Right: new & hot */}
          <div className="right-col">
            {recentPosts.length > 0 && (
              <>
                <span className="right-col-label">New &amp; Hot</span>
                {recentPosts.map((post) => (
                  <Link className="brief" key={post.slug} to={`/blog/${post.slug}`}>
                    <div className="brief-thumb">
                      <div
                        className="brief-thumb-inner"
                        style={{ background: getCategoryGradient(post.category) }}
                      ></div>
                    </div>
                    <div className="brief-body">
                      <span className="brief-cat" style={{ color: getCategoryColor(post.category) }}>
                        {post.category ?? "GTM & Growth"}
                      </span>
                      <div className="brief-hed">{post.title}</div>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>

        </section>

        {/* ═══════════════════════
             CONTENT PILLARS
        ═══════════════════════ */}
        <section className="pillar-row">

          <Link className="pillar pillar-articles" to="/articles">
            <span className="pillar-eyebrow">Long reads</span>
            <div className="pillar-name">Articles</div>
            <p className="pillar-desc">Frameworks and honest opinions on GTM, lead generation, and the systems behind B2B growth.</p>
            <span className="pillar-cta">{articleCount > 0 ? `${articleCount} articles →` : "Browse articles →"}</span>
          </Link>

          <Link className="pillar pillar-lab" to="/lab">
            <span className="pillar-eyebrow">Interactive tools</span>
            <div className="pillar-name">The Lab</div>
            <p className="pillar-desc">Diagnostics and calculators that give you a scored output — not a framework to figure out yourself.</p>
            <span className="pillar-cta">Explore the Lab →</span>
          </Link>

          <button className="pillar pillar-arsenal" onClick={() => setComingSoonPopup("The Arsenal")}>
            <span className="pillar-eyebrow">Ready to use</span>
            <div className="pillar-name">The Arsenal</div>
            <p className="pillar-desc">Templates, canvases and worksheets built from real implementations. Download and run.</p>
            <span className="pillar-cta">Coming soon →</span>
          </button>

          <button className="pillar pillar-dis" onClick={() => setComingSoonPopup("Dissections")}>
            <span className="pillar-eyebrow">Forensic breakdowns</span>
            <div className="pillar-name">Dissections</div>
            <p className="pillar-desc">We reverse-engineer how the best B2B companies built their GTM motion — system by system.</p>
            <span className="pillar-cta">Coming soon →</span>
          </button>

        </section>

        {/* ═══════════════════════
             DISSECTION BANNER
        ═══════════════════════ */}
        {latestDissection && (
          <Link className="dis-opt-a" to={`/dissections/${latestDissection.slug}`}>
            <div className="dis-opt-a-left">
              <div className="dis-badge">★ Dissection</div>
              <div className="dis-co">{latestDissection.company}</div>
            </div>
            <div className="dis-opt-a-right">
              {latestDissection.eyebrow && (
                <div className="dis-eyebrow">{latestDissection.eyebrow}</div>
              )}
              <div className="dis-hed">{latestDissection.title}</div>
              {((latestDissection.stats && latestDissection.stats.length > 0) || latestDissection.readTime) && (
                <div className="dis-stats-row">
                  {latestDissection.stats?.map((s, i) => (
                    <span key={i}>
                      {i > 0 && <span className="sep">·</span>}
                      {s.label ? `${s.value} ${s.label}` : s.value}
                    </span>
                  ))}
                  {latestDissection.readTime && (
                    <span>
                      {latestDissection.stats && latestDissection.stats.length > 0 && <span className="sep">·</span>}
                      {latestDissection.readTime} min read
                    </span>
                  )}
                </div>
              )}
              {latestDissection.excerpt && (
                <p className="dis-dek">{latestDissection.excerpt}</p>
              )}
              <span className="dis-cta">Read the dissection →</span>
            </div>
          </Link>
        )}

        {/* ═══════════════════════
             AI SEARCH
        ═══════════════════════ */}
        <CleoSearch />

        {/* ═══════════════════════
             EXIT INTENT POPUP
        ═══════════════════════ */}
        <div className="exit-overlay" id="exitOverlay">
          <div className="exit-popup">
            <button className="exit-popup-close" id="exitClose">×</button>
            <span className="exit-popup-eyebrow">Free · Weekly</span>
            <div className="exit-popup-hed">Before you go —<br /><em>stay in the loop.</em></div>
            <p className="exit-popup-dek">One essay every week. The frameworks and honest opinions that help B2B operators build smarter. No noise.</p>
            <form className="exit-popup-form" onSubmit={popupSubscribe}>
              <input
                className="exit-popup-input"
                type="email"
                placeholder="your@email.com"
                value={popupEmail}
                onChange={(e) => setPopupEmail(e.target.value)}
                required
                disabled={popupStatus === "loading" || popupStatus === "success"}
              />
              <button
                className="exit-popup-btn"
                type="submit"
                disabled={popupStatus === "loading" || popupStatus === "success"}
              >
                {popupStatus === "loading" ? "Subscribing…" : popupStatus === "success" ? "You're in ✓" : "Subscribe →"}
              </button>
            </form>
            {popupStatus === "error" && (
              <p style={{ fontSize: "12px", color: "#f87171", marginTop: "8px" }}>{popupError}</p>
            )}
            <p className="exit-popup-note">Free. No spam. Unsubscribe anytime. Read by 1,400+ B2B operators.</p>
          </div>
        </div>

        {/* Floating back-to-site button */}
        <Link to="/" className="back-to-site">
          <span className="bts-top">
            <span className="bts-arrow">←</span>
            That Works
          </span>
          <span className="bts-cta">Go to the website</span>
        </Link>

        <Footer />
      </div>

      {comingSoonPopup && (
        <div className="cs-popup-overlay" onClick={() => setComingSoonPopup(null)}>
          <div className="cs-popup" onClick={e => e.stopPropagation()}>
            <button className="cs-popup-close" onClick={() => setComingSoonPopup(null)}>✕</button>
            <div className="cs-popup-eyebrow">In the works</div>
            <h2 className="cs-popup-title">{comingSoonPopup}</h2>
            <p className="cs-popup-body">This one's being built properly — not just thrown together. We'll let you know as soon as it's ready.</p>
            <div className="cs-popup-divider" />
            <p className="cs-popup-sub-label">Get notified when it drops</p>
            <form className="cs-popup-form" onSubmit={e => { e.preventDefault(); popupSubscribe(e); }}>
              <input
                className="cs-popup-input"
                type="email"
                placeholder="your@email.com"
                value={popupEmail}
                onChange={e => setPopupEmail(e.target.value)}
                required
              />
              <button className="cs-popup-btn" type="submit">
                {popupStatus === "loading" ? "Subscribing…" : popupStatus === "success" ? "You're in ✓" : "Subscribe free →"}
              </button>
            </form>
            {popupError && <p className="cs-popup-error">{popupError}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
