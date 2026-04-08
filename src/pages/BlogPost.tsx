import { useParams, useNavigate } from "react-router-dom";
import Nav from "@/components/Nav";
import { getPostBySlug, getRecentPosts } from "@/data/blogPosts";
import SEOHead from "@/components/SEOHead";

const categoryColor: Record<string, string> = {
  "GTM & Growth": "var(--yellow)",
  "Marketing Systems": "var(--lavender)",
  "Lead Generation": "var(--orange)",
  "Tool Reviews": "var(--muted)",
  "Revenue Architecture": "var(--green, #4ade80)",
  "Playbooks": "var(--cyan, #22d3ee)",
  "Hiring & Team Design": "var(--rose, #fb7185)",
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;
  const recentPosts = getRecentPosts(4).filter((p) => p.slug !== slug).slice(0, 3);

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

  // Simple markdown-to-HTML renderer for our content
  const renderContent = (content: string) => {
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
            {listItems.map((item, idx) => (
              <li key={idx}>{renderInline(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        const header = tableRows[0];
        const body = tableRows.slice(1);
        elements.push(
          <div key={`table-${i}`} className="blogpost-table-wrap">
            <table className="blogpost-table">
              <thead>
                <tr>{header.map((cell, idx) => <th key={idx}>{cell.trim()}</th>)}</tr>
              </thead>
              <tbody>
                {body.map((row, rIdx) => (
                  <tr key={rIdx}>{row.map((cell, cIdx) => <td key={cIdx}>{cell.trim()}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    const renderInline = (text: string) => {
      // Bold + italic
      const parts = text.split(/(\*\*[^*]+\*\*)/g);
      return parts.map((part, idx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={idx}>{part.slice(2, -2)}</strong>;
        }
        // Italic
        const italicParts = part.split(/(\*[^*]+\*)/g);
        return italicParts.map((ip, iIdx) => {
          if (ip.startsWith("*") && ip.endsWith("*")) {
            return <em key={`${idx}-${iIdx}`}>{ip.slice(1, -1)}</em>;
          }
          return ip;
        });
      });
    };

    while (i < lines.length) {
      const line = lines[i];

      // Skip the H1 title (we render it separately)
      if (line.startsWith("# ") && i === 0) {
        i++;
        continue;
      }

      // Table row
      if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
        flushList();
        const cells = line.trim().slice(1, -1).split("|");
        // Skip separator rows
        if (cells.every((c) => c.trim().match(/^[-:]+$/))) {
          i++;
          inTable = true;
          continue;
        }
        tableRows.push(cells);
        inTable = true;
        i++;
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Headers
      if (line.startsWith("### ")) {
        flushList();
        elements.push(<h3 key={i} className="blogpost-h3">{renderInline(line.slice(4))}</h3>);
        i++;
        continue;
      }
      if (line.startsWith("## ")) {
        flushList();
        elements.push(<h2 key={i} className="blogpost-h2">{renderInline(line.slice(3))}</h2>);
        i++;
        continue;
      }

      // List items
      if (line.startsWith("- ")) {
        const text = line.slice(2);
        listItems.push(text);
        i++;
        continue;
      }

      // Numbered list
      if (/^\d+\.\s/.test(line.trim())) {
        flushList();
        const text = line.replace(/^\d+\.\s/, "");
        listItems.push(text);
        i++;
        continue;
      }

      // Empty line
      if (line.trim() === "") {
        flushList();
        i++;
        continue;
      }

      // Paragraph
      flushList();
      elements.push(<p key={i} className="blogpost-p">{renderInline(line)}</p>);
      i++;
    }

    flushList();
    flushTable();
    return elements;
  };

  return (
    <>
      <SEOHead
        title={`${post.title} — That Works`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />
      <Nav />
      <article className="blogpost-page">
        <header className="blogpost-header">
          <div className="blogpost-header-inner">
            <a href="/blog" className="blogpost-back">← Back to Blog</a>
            <span className="blog-cat-tag" style={{ color: categoryColor[post.category] }}>
              {post.category}
            </span>
            <h1>{post.title}</h1>
            <div className="blog-meta" style={{ marginTop: 16 }}>
              {post.author} · {post.readTime} · {post.publishedAt}
            </div>
          </div>
        </header>

        <div className="blogpost-body">
          <div className="blogpost-content">
            {renderContent(post.content)}
          </div>
        </div>

        {/* Related posts */}
        {recentPosts.length > 0 && (
          <section className="blogpost-related">
            <div className="blogpost-related-inner">
              <h2>Keep reading</h2>
              <div className="blogpost-related-grid">
                {recentPosts.map((p) => (
                  <a key={p.id} href={`/blog/${p.slug}`} className="blog-card">
                    <span className="blog-cat-tag" style={{ color: categoryColor[p.category] }}>
                      {p.category}
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <div className="blog-meta">{p.readTime} · {p.publishedAt}</div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-inner">
            <div>
              <div className="footer-logo"><img src="/logo.svg" alt="That Works" width="678" height="392" className="footer-logo-img" /></div>
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
            <li><a href="/services">All Services</a></li>
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
      </article>
    </>
  );
};

export default BlogPost;
