import { useState, useMemo } from "react";
import Nav from "@/components/Nav";
import { blogPosts } from "@/data/blogPosts";

const categories = ["All", "GTM & Growth", "Marketing Systems", "Lead Generation", "Tool Reviews", "Revenue Architecture", "Playbooks", "Hiring & Team Design"] as const;

const categoryColor: Record<string, string> = {
  "GTM & Growth": "var(--yellow)",
  "Marketing Systems": "var(--lavender)",
  "Lead Generation": "var(--orange)",
  "Tool Reviews": "var(--muted)",
  "Revenue Architecture": "var(--green, #4ade80)",
  "Playbooks": "var(--cyan, #22d3ee)",
  "Hiring & Team Design": "var(--rose, #fb7185)",
};

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  const filtered = useMemo(() => {
    let posts = rest;
    if (activeCategory !== "All") {
      posts = posts.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [activeCategory, search, rest]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const visible = filtered.slice(0, page * POSTS_PER_PAGE);

  const mostRead = blogPosts.slice(0, 5);

  return (
    <>
      <Nav />

      {/* HEADER */}
      <section className="blog-header">
        <div className="blog-header-inner">
          <div className="section-label">Resources</div>
          <h1>The Library.</h1>
          <p>Frameworks, breakdowns and honest opinions on GTM, lead generation, marketing systems and automation.</p>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="blog-featured">
          <div className="blog-featured-inner">
            <a href={`/blog/${featured.slug}`} className="blog-featured-card">
              <div className="blog-featured-content">
                <span className="blog-cat-tag" style={{ color: categoryColor[featured.category] }}>
                  {featured.category}
                </span>
                <h2>{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.excerpt}</p>
                <div className="blog-meta">
                  {featured.author} · {featured.readTime} · {featured.publishedAt}
                </div>
              </div>
              <div className="blog-featured-img" style={{ background: 'var(--orange)' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.4rem', fontWeight: 900, color: 'var(--text)', opacity: 0.2 }}>TW</span>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* FILTERS */}
      <div className="blog-filters">
        <div className="blog-filters-inner">
          <div className="blog-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-pill${activeCategory === cat ? " active" : ""}`}
                onClick={() => { setActiveCategory(cat); setPage(1); }}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            className="blog-search"
            placeholder="Search posts…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>
      </div>

      {/* CONTENT: GRID + SIDEBAR */}
      <section className="blog-content">
        <div className="blog-content-inner">
          <div className="blog-grid">
            {visible.length === 0 && (
              <p style={{ color: 'var(--muted)', gridColumn: '1 / -1' }}>No posts found.</p>
            )}
            {visible.map((post) => (
              <a key={post.id} href={`/blog/${post.slug}`} className="blog-card">
                <span className="blog-cat-tag" style={{ color: categoryColor[post.category] }}>
                  {post.category}
                </span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">{post.readTime} · {post.publishedAt}</div>
              </a>
            ))}
          </div>

          <aside className="blog-sidebar">
            <div className="blog-sidebar-section">
              <h4>Most read</h4>
              <ol className="blog-most-read">
                {mostRead.map((post, i) => (
                  <li key={post.id}>
                    <a href={`/blog/${post.slug}`}>
                      <span className="blog-mr-num">{String(i + 1).padStart(2, "0")}</span>
                      {post.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="blog-sidebar-section">
              <h4>Browse by topic</h4>
              <div className="blog-sidebar-pills">
                {categories.slice(1).map((cat) => (
                  <button
                    key={cat}
                    className={`blog-pill${activeCategory === cat ? " active" : ""}`}
                    onClick={() => { setActiveCategory(cat); setPage(1); }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="blog-sidebar-section">
              <h4>Get posts in your inbox</h4>
              <form className="blog-subscribe" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="you@company.com" className="blog-search" />
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Subscribe</button>
              </form>
            </div>
          </aside>
        </div>
      </section>

      {/* PAGINATION */}
      {visible.length < filtered.length && (
        <div className="blog-pagination">
          <button className="btn-primary" onClick={() => setPage((p) => p + 1)}>
            Load more
          </button>
        </div>
      )}

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

export default Blog;
