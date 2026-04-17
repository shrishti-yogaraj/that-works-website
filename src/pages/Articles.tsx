import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CleoSearch from "@/components/CleoSearch";
import HubBanner from "@/components/HubBanner";
import sanityPostsRaw from "@/data/sanityPosts.json";
import "@/styles/pages/articles.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  publishedAt?: string;
  readTime?: number | string;
  category?: string;
  categoryColor?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "GTM & Growth":         "#ff5c00",
  "Marketing Systems":    "#c4b5fd",
  "Lead Generation":      "#fb923c",
  "Tool Reviews":         "#9a9088",
  "Revenue Architecture": "#34d399",
  "Playbooks":            "#22d3ee",
  "Hiring & Team Design": "#fb7185",
  "Strategy":             "#fbbf24",
  "Positioning":          "#60a5fa",
};

// ─── Data — all posts come from Sanity ────────────────────────────────────────

const allPosts: Post[] = (sanityPostsRaw as Post[]).filter((p) => p.slug && p.title);

const CATEGORIES = [
  "All",
  ...Array.from(new Set(allPosts.map((p) => p.category).filter(Boolean) as string[])).sort(),
];

const PER_PAGE = 10;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const scrollToCleo = () => {
  document.getElementById("cleo-search")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ─── Component ────────────────────────────────────────────────────────────────

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");

  const activeCategory = searchParams.get("category") ?? "All";
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));

  const setCategory = (cat: string) => {
    const params = new URLSearchParams(searchParams);
    if (cat === "All") params.delete("category");
    else params.set("category", cat);
    params.delete("page");
    setSearchParams(params, { replace: true });
  };

  const setPage = (p: number) => {
    const params = new URLSearchParams(searchParams);
    if (p <= 1) params.delete("page");
    else params.set("page", String(p));
    setSearchParams(params, { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset to page 1 when keyword changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    setSearchParams(params, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const filtered = useMemo(() => {
    return allPosts.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const kw = keyword.toLowerCase().trim();
      const matchKw =
        !kw ||
        p.title.toLowerCase().includes(kw) ||
        (p.excerpt ?? "").toLowerCase().includes(kw) ||
        (p.category ?? "").toLowerCase().includes(kw);
      return matchCat && matchKw;
    });
  }, [activeCategory, keyword]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  // Set html + body background to black so Safari overscroll shows black, not cream
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#0f0d0b";
    document.body.style.backgroundColor = "#0f0d0b";
    return () => {
      document.documentElement.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
    };
  }, []);


  // Footer avoidance for floating button
  useEffect(() => {
    const btn = document.querySelector<HTMLElement>(".back-to-site");
    const footer = document.querySelector<HTMLElement>(".site-footer");
    if (!btn || !footer) return;
    const handleScroll = () => {
      const footerTop = footer.getBoundingClientRect().top;
      const btnHeight = btn.offsetHeight;
      const clearance = window.innerHeight - footerTop;
      btn.style.bottom = clearance > 28 + btnHeight ? `${clearance + 12}px` : "28px";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="Articles — That Works"
        description="Every article we've published on GTM, growth, and revenue architecture. Searchable and filterable."
        canonical="/articles"
      />

      <div className="hub-page articles-page">

        {/* ── Library layout ────────────────────────────────────────────── */}
        <div className="articles-wrap">

          {/* Left panel — dark, sticky, full viewport height */}
          <aside className="articles-panel">

            {/* Top: nav + identity */}
            <div className="ap-top">
              <Link to="/blog" className="ap-back">← Back to hub</Link>
              <p className="ap-eyebrow">All Articles</p>
              <h1 className="ap-title">The Library</h1>
              <div className="ap-rule" />
              <p className="ap-sub">Every piece we've published on GTM, growth, and revenue architecture.</p>
            </div>

            {/* Middle: search + filters — scrolls if categories overflow */}
            <div className="ap-middle">
              {/* Keyword search */}
              <div className="articles-search-wrap">
                <input
                  type="text"
                  placeholder="Search by keyword…"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="articles-search"
                  aria-label="Search articles by keyword"
                />
                {keyword && (
                  <button
                    className="articles-search-clear"
                    onClick={() => setKeyword("")}
                    aria-label="Clear search"
                  >×</button>
                )}
              </div>

              {/* Ask Cleo — right below search */}
              <button className="articles-ask-cleo-btn" onClick={scrollToCleo}>
                <span className="articles-ask-cleo-icon">✦</span>
                <span>
                  <strong>Ask Cleo instead</strong>
                  <span className="articles-ask-cleo-sub">Describe what you need — AI finds the right piece</span>
                </span>
                <span className="articles-ask-cleo-arrow">↓</span>
              </button>

              {/* Category filters */}
              <p className="articles-filter-label">Filter by category</p>
              <div className="ap-cats">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`ap-cat${activeCategory === cat ? " on" : ""}`}
                    onClick={() => setCategory(cat)}
                    style={activeCategory === cat && cat !== "All"
                      ? { color: CATEGORY_COLORS[cat] ?? "#ff5c00", borderColor: `${CATEGORY_COLORS[cat] ?? "#ff5c00"}40` }
                      : undefined}
                  >
                    {cat !== "All" && (
                      <span
                        className="ap-cat-dot"
                        style={{ background: CATEGORY_COLORS[cat] ?? "rgba(240,230,211,0.2)" }}
                      />
                    )}
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* Article list */}
          <main className="articles-list-wrap">
            <div className="articles-list-header">
              <span className="articles-result-count">
                {filtered.length === allPosts.length
                  ? `${allPosts.length} article${allPosts.length !== 1 ? "s" : ""}`
                  : `${filtered.length} of ${allPosts.length} articles`}
              </span>
              {totalPages > 1 && (
                <span className="articles-page-indicator">
                  Page {safePage} of {totalPages}
                </span>
              )}
            </div>

            {paginated.length === 0 ? (
              <div className="articles-empty">
                <p>No articles match <em>"{keyword}"</em>.</p>
                <button onClick={() => setKeyword("")} className="articles-empty-reset">
                  Clear search
                </button>
              </div>
            ) : (
              <div className="lib-list">
                {paginated.map((post, idx) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="lib-item"
                    style={{
                      borderLeft: `3px solid ${post.categoryColor ?? CATEGORY_COLORS[post.category ?? ""] ?? "var(--border)"}`,
                    }}
                  >
                    <div>
                      {post.category && (
                        <span
                          className="lib-item-eyebrow"
                          style={{ color: post.categoryColor ?? CATEGORY_COLORS[post.category ?? ""] ?? "var(--label)" }}
                        >
                          {post.category}
                        </span>
                      )}
                      <h3 className="lib-item-hed">{post.title}</h3>
                      {post.excerpt && (
                        <p className="lib-item-dek">{post.excerpt}</p>
                      )}
                      <span className="lib-item-meta">
                        {[
                          post.readTime ? `${post.readTime} min read` : null,
                          post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString("en-AU", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : null,
                        ]
                          .filter(Boolean)
                          .join(" · ")}
                      </span>
                    </div>
                    <div className="lib-item-aside">
                      <span className="lib-item-num">
                        {String((safePage - 1) * PER_PAGE + idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="articles-pagination">
                <button
                  className="articles-page-btn"
                  onClick={() => setPage(safePage - 1)}
                  disabled={safePage === 1}
                  aria-label="Previous page"
                >←</button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    className={`articles-page-btn${p === safePage ? " active" : ""}`}
                    onClick={() => setPage(p)}
                    aria-label={`Page ${p}`}
                    aria-current={p === safePage ? "page" : undefined}
                  >
                    {p}
                  </button>
                ))}

                <button
                  className="articles-page-btn"
                  onClick={() => setPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  aria-label="Next page"
                >→</button>
              </div>
            )}
          </main>
        </div>

        {/* ── Ask Cleo ──────────────────────────────────────────────────── */}
        <div id="cleo-search">
          <CleoSearch />
        </div>

        <Footer />

        {/* Floating back-to-site button */}
        <Link to="/" className="back-to-site" aria-label="Go to That Works website">
          <span className="bts-top">
            <span className="bts-arrow">←</span>
            That Works
          </span>
          <span className="bts-cta">Go to the website</span>
        </Link>
      </div>
    </>
  );
};

export default Articles;
