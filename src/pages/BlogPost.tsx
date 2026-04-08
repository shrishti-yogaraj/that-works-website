import { useParams, useNavigate, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import Nav from "@/components/Nav";
import SEOHead from "@/components/SEOHead";
import { portableTextComponents } from "@/lib/portableTextComponents";
import { blogPosts as staticPosts } from "@/data/blogPosts";
import sanityPostsRaw from "@/data/sanityPosts.json";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SanityPost {
  _id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: unknown; // portable text blocks (Sanity) or string (static fallback)
  publishedAt: string;
  updatedAt?: string;
  readTime?: number | string;
  featured?: boolean;
  category?: string;
  categoryColor?: string;
  author?: string;
  authorRole?: string;
  authorPhoto?: string;
  featuredImage?: { ref?: string; alt?: string; caption?: string } | null;
  metaTitle?: string;
  metaDescription?: string;
  tableOfContents?: boolean;
  ctaText?: string;
  ctaLink?: string;
  noIndex?: boolean;
}

// ─── Data source ──────────────────────────────────────────────────────────────

const sanityPosts = sanityPostsRaw as SanityPost[];
const useSanity = sanityPosts.length > 0;

const allPosts: SanityPost[] = useSanity
  ? sanityPosts
  : staticPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      content: p.content,
      publishedAt: p.publishedAt,
      readTime: p.readTime,
      category: p.category,
      author: p.author,
      featured: p.featured,
    }));

// ─── Category colours ─────────────────────────────────────────────────────────

const DEFAULT_CATEGORY_COLORS: Record<string, string> = {
  "GTM & Growth": "var(--yellow)",
  "Marketing Systems": "var(--lavender)",
  "Lead Generation": "var(--orange)",
  "Tool Reviews": "var(--muted)",
  "Revenue Architecture": "#4ade80",
  "Playbooks": "#22d3ee",
  "Hiring & Team Design": "#fb7185",
};

// ─── Static markdown renderer (fallback for non-Sanity content) ───────────────

const renderMarkdown = (content: string) => {
  const lines = content.split("\n");
  const elements: JSX.Element[] = [];
  let i = 0;
  let listItems: string[] = [];
  let tableRows: string[][] = [];
  let inTable = false;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${i}`} className="blogpost-list">
          {listItems.map((item, idx) => <li key={idx}>{renderInline(item)}</li>)}
        </ul>
      );
      listItems = [];
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const [header, ...body] = tableRows;
      elements.push(
        <div key={`table-${i}`} className="blogpost-table-wrap">
          <table className="blogpost-table">
            <thead><tr>{header.map((cell, idx) => <th key={idx}>{cell.trim()}</th>)}</tr></thead>
            <tbody>{body.map((row, rIdx) => <tr key={rIdx}>{row.map((cell, cIdx) => <td key={cIdx}>{cell.trim()}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**"))
        return <strong key={idx}>{part.slice(2, -2)}</strong>;
      const italicParts = part.split(/(\*[^*]+\*)/g);
      return italicParts.map((ip, iIdx) => {
        if (ip.startsWith("*") && ip.endsWith("*"))
          return <em key={`${idx}-${iIdx}`}>{ip.slice(1, -1)}</em>;
        return ip;
      });
    });
  };

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("# ") && i === 0) { i++; continue; }
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      flushList();
      const cells = line.trim().slice(1, -1).split("|");
      if (cells.every((c) => c.trim().match(/^[-:]+$/))) { i++; inTable = true; continue; }
      tableRows.push(cells);
      inTable = true;
      i++;
      continue;
    } else if (inTable) { flushTable(); }
    if (line.startsWith("### ")) { flushList(); elements.push(<h3 key={i} className="blogpost-h3">{renderInline(line.slice(4))}</h3>); }
    else if (line.startsWith("## ")) { flushList(); elements.push(<h2 key={i} className="blogpost-h2">{renderInline(line.slice(3))}</h2>); }
    else if (line.startsWith("- ")) { listItems.push(line.slice(2)); }
    else if (/^\d+\.\s/.test(line.trim())) { flushList(); listItems.push(line.replace(/^\d+\.\s/, "")); }
    else if (line.trim() === "") { flushList(); }
    else { flushList(); elements.push(<p key={i} className="blogpost-p">{renderInline(line)}</p>); }
    i++;
  }
  flushList();
  flushTable();
  return elements;
};

// ─── Component ────────────────────────────────────────────────────────────────

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = slug ? allPosts.find((p) => p.slug === slug) : undefined;
  const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <>
        <Nav />
        <div className="blogpost-not-found">
          <h1>Post not found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <button className="btn-primary" onClick={() => navigate("/blog")}>
            Back to Blog
          </button>
        </div>
      </>
    );
  }

  const catColor = post.categoryColor ?? DEFAULT_CATEGORY_COLORS[post.category ?? ""] ?? "var(--muted)";
  const readTimeStr = typeof post.readTime === "number"
    ? `${post.readTime} min read`
    : (post.readTime ?? "");
  const metaTitle = post.metaTitle ?? post.title;
  const metaDesc = post.metaDescription ?? post.excerpt;

  // Featured image URL
  let heroSrc: string | null = null;
  if (post.featuredImage?.ref) {
    const [, id, dims, fmt] = post.featuredImage.ref.split("-");
    const [w, h] = (dims ?? "1200x630").split("x");
    heroSrc = `https://cdn.sanity.io/images/nb3xydcz/production/${id}-${w}x${h}.${fmt}`;
  }

  return (
    <>
      <SEOHead
        title={`${metaTitle} — That Works`}
        description={metaDesc}
        canonical={`/blog/${post.slug}`}
        ogImage={heroSrc ?? undefined}
      />
      <Nav />

      <article className="blogpost-page">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <header className="blogpost-header">
          <div className="blogpost-header-inner">
            <Link to="/blog" className="blogpost-back">← Back to Blog</Link>

            {post.category && (
              <span className="blog-cat-tag" style={{ color: catColor }}>
                {post.category}
              </span>
            )}

            <h1>{post.title}</h1>

            <div className="blogpost-meta-row">
              {post.author && <span className="blogpost-author">{post.author}</span>}
              {readTimeStr && <span className="blogpost-read-time">{readTimeStr}</span>}
              {post.publishedAt && (
                <time dateTime={post.publishedAt} className="blogpost-date">
                  {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                    year: "numeric", month: "long", day: "numeric",
                  })}
                </time>
              )}
            </div>

            {post.excerpt && (
              <p className="blogpost-lede">{post.excerpt}</p>
            )}
          </div>

          {heroSrc && (
            <div className="blogpost-hero-img">
              <img
                src={heroSrc}
                alt={post.featuredImage?.alt ?? post.title}
                loading="eager"
              />
              {post.featuredImage?.caption && (
                <figcaption className="blogpost-img-caption">
                  {post.featuredImage.caption}
                </figcaption>
              )}
            </div>
          )}
        </header>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <div className="blogpost-body">
          <div className="blogpost-content">
            {useSanity && Array.isArray(post.content) ? (
              <PortableText value={post.content as Parameters<typeof PortableText>[0]["value"]} components={portableTextComponents} />
            ) : (
              renderMarkdown(typeof post.content === "string" ? post.content : "")
            )}
          </div>
        </div>

        {/* ── End CTA ──────────────────────────────────────────────────── */}
        {post.ctaText && post.ctaLink && (
          <div className="blogpost-end-cta">
            <p>Ready to build a system that actually works?</p>
            <a href={post.ctaLink} className="btn-primary">{post.ctaText}</a>
          </div>
        )}

        {/* ── Related posts ─────────────────────────────────────────────── */}
        {recentPosts.length > 0 && (
          <section className="blogpost-related">
            <div className="blogpost-related-inner">
              <h2>Keep reading</h2>
              <div className="blogpost-related-grid">
                {recentPosts.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-card">
                    <span className="blog-cat-tag" style={{ color: DEFAULT_CATEGORY_COLORS[p.category ?? ""] ?? "var(--muted)" }}>
                      {p.category}
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <div className="blog-meta">
                      {typeof p.readTime === "number" ? `${p.readTime} min read` : p.readTime} · {p.publishedAt}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <footer className="site-footer">
          <div className="footer-inner">
            <div>
              <div className="footer-logo">
                <img src="/logo.svg" alt="That Works" width="678" height="392" className="footer-logo-img" />
              </div>
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
              <ul><li><a href="/services">All Services</a></li></ul>
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
            <p style={{ color: "var(--label)" }}>thatworksco.com</p>
          </div>
        </footer>
      </article>
    </>
  );
};

export default BlogPost;
