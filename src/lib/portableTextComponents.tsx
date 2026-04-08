import { PortableTextComponents } from "@portabletext/react";

// ─── Type helpers ─────────────────────────────────────────────────────────────

interface CalloutBox {
  _type: "calloutBox";
  type: "info" | "warning" | "success" | "tip";
  text: string;
  icon?: string;
}

interface PullQuote {
  _type: "pullQuote";
  quote: string;
  attribution?: string;
}

interface StatsBlock {
  _type: "statsBlock";
  number: string;
  label: string;
  description?: string;
}

interface ImageBlock {
  _type: "imageBlock";
  image: { asset: { _ref: string } };
  alt: string;
  caption?: string;
  size?: "small" | "medium" | "large" | "full";
}

interface ImageGallery {
  _type: "imageGallery";
  images: Array<{ image: { asset: { _ref: string } }; alt: string; caption?: string }>;
}

interface CodeBlock {
  _type: "codeBlock";
  language: string;
  code: string;
}

interface VideoEmbed {
  _type: "videoEmbed";
  url: string;
  caption?: string;
}

interface CtaButton {
  _type: "ctaButton";
  text: string;
  url: string;
  style: "primary" | "secondary";
}

// ─── Video embed helper ───────────────────────────────────────────────────────

function getEmbedUrl(url: string): string {
  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  // Loom
  const loomMatch = url.match(/loom\.com\/share\/([^?]+)/);
  if (loomMatch) return `https://www.loom.com/embed/${loomMatch[1]}`;
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return url;
}

// ─── Callout colours ─────────────────────────────────────────────────────────

const calloutStyles: Record<string, { bg: string; border: string; icon: string }> = {
  info:    { bg: "rgba(99,102,241,0.08)",  border: "var(--lavender, #818cf8)", icon: "ℹ️" },
  warning: { bg: "rgba(251,191,36,0.10)",  border: "var(--yellow, #fbbf24)",   icon: "⚠️" },
  success: { bg: "rgba(74,222,128,0.10)",  border: "var(--green, #4ade80)",    icon: "✅" },
  tip:     { bg: "rgba(34,211,238,0.10)",  border: "var(--cyan, #22d3ee)",     icon: "💡" },
};

// ─── Components ───────────────────────────────────────────────────────────────

export const portableTextComponents: PortableTextComponents = {
  // ── Block styles ──────────────────────────────────────────────────────────
  block: {
    normal: ({ children }) => <p className="blogpost-p">{children}</p>,
    h2: ({ children }) => <h2 className="blogpost-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="blogpost-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="blogpost-h4">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="blogpost-blockquote">{children}</blockquote>
    ),
  },

  // ── List items ────────────────────────────────────────────────────────────
  list: {
    bullet: ({ children }) => <ul className="blogpost-list">{children}</ul>,
    number: ({ children }) => <ol className="blogpost-list blogpost-list--ordered">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  // ── Marks ─────────────────────────────────────────────────────────────────
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code className="blogpost-inline-code">{children}</code>,
    "strike-through": ({ children }) => <s>{children}</s>,
    underline: ({ children }) => <u>{children}</u>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="blogpost-link"
      >
        {children}
      </a>
    ),
  },

  // ── Custom block types ────────────────────────────────────────────────────
  types: {
    calloutBox: ({ value }: { value: CalloutBox }) => {
      const style = calloutStyles[value.type] ?? calloutStyles.info;
      const icon = value.icon ?? style.icon;
      return (
        <div
          className="blogpost-callout"
          style={{ background: style.bg, borderLeft: `3px solid ${style.border}` }}
        >
          <span className="blogpost-callout-icon">{icon}</span>
          <p className="blogpost-callout-text">{value.text}</p>
        </div>
      );
    },

    pullQuote: ({ value }: { value: PullQuote }) => (
      <figure className="blogpost-pullquote">
        <blockquote>"{value.quote}"</blockquote>
        {value.attribution && <figcaption>— {value.attribution}</figcaption>}
      </figure>
    ),

    statsBlock: ({ value }: { value: StatsBlock }) => (
      <div className="blogpost-stat">
        <div className="blogpost-stat-number">{value.number}</div>
        <div className="blogpost-stat-label">{value.label}</div>
        {value.description && (
          <div className="blogpost-stat-desc">{value.description}</div>
        )}
      </div>
    ),

    imageBlock: ({ value }: { value: ImageBlock }) => {
      const sizeClass = `blogpost-img--${value.size ?? "large"}`;
      const ref = value.image?.asset?._ref ?? "";
      const [, id, dims, fmt] = ref.split("-");
      const [w, h] = (dims ?? "1200x630").split("x");
      const src = `https://cdn.sanity.io/images/nb3xydcz/production/${id}-${w}x${h}.${fmt}`;
      return (
        <figure className={`blogpost-img-figure ${sizeClass}`}>
          <img src={src} alt={value.alt} loading="lazy" />
          {value.caption && <figcaption className="blogpost-img-caption">{value.caption}</figcaption>}
        </figure>
      );
    },

    imageGallery: ({ value }: { value: ImageGallery }) => (
      <div className="blogpost-gallery">
        {value.images?.map((img, i) => {
          const ref = img.image?.asset?._ref ?? "";
          const [, id, dims, fmt] = ref.split("-");
          const [w, h] = (dims ?? "800x600").split("x");
          const src = `https://cdn.sanity.io/images/nb3xydcz/production/${id}-${w}x${h}.${fmt}`;
          return (
            <figure key={i} className="blogpost-gallery-item">
              <img src={src} alt={img.alt ?? ""} loading="lazy" />
              {img.caption && <figcaption>{img.caption}</figcaption>}
            </figure>
          );
        })}
      </div>
    ),

    codeBlock: ({ value }: { value: CodeBlock }) => (
      <div className="blogpost-code-wrap">
        {value.language && (
          <div className="blogpost-code-lang">{value.language}</div>
        )}
        <pre className="blogpost-code">
          <code>{value.code}</code>
        </pre>
      </div>
    ),

    videoEmbed: ({ value }: { value: VideoEmbed }) => (
      <figure className="blogpost-video">
        <div className="blogpost-video-inner">
          <iframe
            src={getEmbedUrl(value.url)}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded video"
          />
        </div>
        {value.caption && (
          <figcaption className="blogpost-img-caption">{value.caption}</figcaption>
        )}
      </figure>
    ),

    divider: () => <hr className="blogpost-divider" />,

    ctaButton: ({ value }: { value: CtaButton }) => (
      <div className="blogpost-cta-wrap">
        <a
          href={value.url}
          className={value.style === "secondary" ? "btn-ghost" : "btn-primary"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {value.text}
        </a>
      </div>
    ),

    table: ({ value }: { value: { rows: Array<{ cells: string[] }> } }) => {
      const [header, ...body] = value.rows ?? [];
      return (
        <div className="blogpost-table-wrap">
          <table className="blogpost-table">
            {header && (
              <thead>
                <tr>{header.cells.map((cell, i) => <th key={i}>{cell}</th>)}</tr>
              </thead>
            )}
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri}>{row.cells.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};
