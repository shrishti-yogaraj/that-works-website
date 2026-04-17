import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CleoSearch from "@/components/CleoSearch";
import HubBanner from "@/components/HubBanner";
import "@/styles/pages/cardgrid.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ToolCard {
  kind: "tool";
  badge: string;
  name: string;
  desc?: string;
  color: string;
  lightText?: boolean;
  rows?: number;
  cols?: number;
  cta?: string;
  variant?: number;
}

interface DecoCard {
  kind: "deco";
  color: string;
  glyph?: string;
  rows?: number;
  cols?: number;
}

type Card = ToolCard | DecoCard;

interface Props {
  name: string;
  eyebrow: string;
  slug: string;
  description: string;
  cards: Card[];
  showHeader?: boolean;
  showBanner?: boolean;
  staggered?: boolean;
}

// ─── Card renderer ────────────────────────────────────────────────────────────

const renderCard = (card: Card, key: number, toolNum = 1) => {
  if (card.kind === "tool") {
    const num = String(toolNum).padStart(2, "0");
    return (
      <div
        key={key}
        className="cg-tool-card"
        style={{ "--cc": card.color, "--ct": "#1c1917" } as React.CSSProperties}
      >
        <div className="cg-tool-top">
          <span className="cg-tool-badge">{card.badge}</span>
          <h3 className="cg-tool-name-stacked">
            {card.name.split(" ").map((word, i) => <span key={i}>{word}</span>)}
          </h3>
          {card.desc && <p className="cg-tool-desc">{card.desc}</p>}
        </div>
        <span className="cg-tool-coming-wm">{card.cta ?? "Coming soon"} →</span>
        <span className="cg-tool-bg-num">{num}</span>
      </div>
    );
  }
  return (
    <div key={key} className="cg-deco-card" style={{ background: card.color }}>
      {card.glyph && <span className="cg-deco-glyph">{card.glyph}</span>}
    </div>
  );
};

// ─── Layout ───────────────────────────────────────────────────────────────────

const STAGGER_COLS = 8;
// Varied offsets so no two adjacent columns align — breaks the checkerboard
const COL_OFFSETS = [0, 160, 80, -80, 40, 180, 110, -40];

const CardGridPage = ({ name, eyebrow, slug, description, cards, showHeader = true, showBanner = true, staggered = false }: Props) => {
  // Group cards into columns (column-major)
  const columns: Card[][] = staggered
    ? Array.from({ length: STAGGER_COLS }, (_, ci) =>
        cards.filter((_, i) => i % STAGGER_COLS === ci)
      )
    : [];

  return (
    <>
      <SEOHead title={`${name} — That Works`} description={description} canonical={`/${slug}`} />
      <div className="hub-page cg-page">
        {showBanner && <HubBanner />}

        {showHeader && (
          <header className="cg-header">
            <Link to="/blog" className="cg-back">← Back to hub</Link>
            <p className="cg-eyebrow">{eyebrow}</p>
            <h1 className="cg-title">{name}</h1>
            <p className="cg-desc">{description}</p>
          </header>
        )}

        <main className="cg-main">
          {staggered && (
            <div className="cg-wall-box">
              <Link to="/blog" className="cg-wall-back">← Back to hub</Link>
              <h1 className="cg-wall-title">{name}</h1>
            </div>
          )}
          {staggered ? (
            <div className="cg-grid cg-grid--staggered">
              {(() => {
                let toolCount = 0;
                return columns.map((col, ci) => (
                  <div key={ci} className="cg-col" style={{ marginTop: COL_OFFSETS[ci] }}>
                    {col.map((card, j) => {
                      if (card.kind === "tool") toolCount++;
                      return renderCard(card, ci * 100 + j, toolCount);
                    })}
                  </div>
                ));
              })()}
            </div>
          ) : (
            <div className="cg-grid">
              {cards.map((card, i) => {
                const rowClass = `cg-r${card.rows ?? (card.kind === "tool" ? 3 : 2)}`;
                const colClass = card.cols === 2 ? "cg-c2" : "";
                if (card.kind === "tool") {
                  return (
                    <div
                      key={i}
                      className={`cg-tool-card ${rowClass} ${colClass}`}
                      style={{ "--cc": card.color, "--ct": "#1c1917" } as React.CSSProperties}
                    >
                      <span className="cg-tool-badge">{card.badge}</span>
                      <span className="cg-tool-bg-glyph">✦</span>
                      <div className="cg-tool-footer">
                        <h3 className="cg-tool-name">{card.name}</h3>
                        <span className="cg-tool-cta">{card.cta ?? "Coming soon →"}</span>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={i} className={`cg-deco-card ${rowClass} ${colClass}`} style={{ background: card.color }}>
                    {card.glyph && <span className="cg-deco-glyph">{card.glyph}</span>}
                  </div>
                );
              })}
            </div>
          )}
        </main>

        <CleoSearch />
        <Footer />

        <Link to="/" className="back-to-site" aria-label="Go to That Works website">
          <span className="bts-top"><span className="bts-arrow">←</span>That Works</span>
          <span className="bts-cta">Go to the website</span>
        </Link>
      </div>
    </>
  );
};

// ─── The Arsenal ──────────────────────────────────────────────────────────────

export const Arsenal = () => (
  <CardGridPage
    name="The Arsenal"
    eyebrow="Ready to use"
    slug="arsenal"
    description="Templates, canvases and worksheets built from real implementations. Download and run."
    cards={[
      { kind: "tool",  badge: "Template",  name: "ICP Qualification Canvas",    color: "#ff5c00", lightText: true,  rows: 4 },
      { kind: "deco",  color: "#c4b5fd",   glyph: "✦",                                                              rows: 2 },
      { kind: "deco",  color: "#fbbf24",                                                                              rows: 3 },
      { kind: "tool",  badge: "Playbook",  name: "90-Day GTM Playbook",          color: "#12100f", lightText: true,  rows: 3 },
      { kind: "deco",  color: "#34d399",                                                                              rows: 2 },
      { kind: "deco",  color: "#fb7185",   glyph: "◆",                                                               rows: 4 },
      { kind: "tool",  badge: "Canvas",    name: "Revenue Architecture Map",     color: "#fbbf24", lightText: false, rows: 3 },
      { kind: "deco",  color: "#f5f0e8",                                                                              rows: 2 },
      { kind: "deco",  color: "#60a5fa",   glyph: "→",                                                               rows: 2 },
      { kind: "tool",  badge: "Template",  name: "Outreach Sequence Framework",  color: "#34d399", lightText: false, rows: 4 },
      { kind: "deco",  color: "#0f0d0b",   glyph: "✦",                                                               rows: 3, cols: 2 },
      { kind: "tool",  badge: "Brief",     name: "Marketing Hire Brief",         color: "#c4b5fd", lightText: false, rows: 3 },
      { kind: "deco",  color: "#ff5c00",                                                                              rows: 2 },
      { kind: "deco",  color: "#fb7185",                                                                              rows: 2 },
      { kind: "tool",  badge: "Template",  name: "Hiring Brief Framework",       color: "#60a5fa", lightText: true,  rows: 3 },
      { kind: "deco",  color: "#fbbf24",   glyph: "◆",                                                               rows: 2 },
      { kind: "deco",  color: "#f5f0e8",                                                                              rows: 4 },
      { kind: "tool",  badge: "Canvas",    name: "ICP Definition Framework",     color: "#fb7185", lightText: true,  rows: 3 },
      { kind: "deco",  color: "#c4b5fd",                                                                              rows: 2 },
      { kind: "deco",  color: "#34d399",   glyph: "✦",                                                               rows: 3 },
    ]}
  />
);

// ─── The Lab ──────────────────────────────────────────────────────────────────

export const Lab = () => (
  <CardGridPage
    name="The Lab"
    eyebrow="Interactive tools"
    slug="lab"
    description="Diagnostics and calculators that give you a scored output — not a framework to figure out yourself."
    showHeader={false}
    staggered={true}
    cards={[
      // Row 1 (indices 0–7)
      { kind: "deco",  color: "#ff5c00"  }, // (1,1) orange
      { kind: "deco",  color: "#c4b5fd"  }, // (2,1) lavender
      { kind: "deco",  color: "#34d399"  }, // (3,1) green
      { kind: "deco",  color: "#ff5c00"  }, // (4,1) orange
      { kind: "deco",  color: "#fb7185"  }, // (5,1) pink
      { kind: "deco",  color: "#fbbf24"  }, // (6,1) yellow
      { kind: "deco",  color: "#fb7185"  }, // (7,1) pink
      { kind: "deco",  color: "#c4b5fd"  }, // (8,1) purple
      // Row 2 (indices 8–15)
      { kind: "deco",  color: "#fb7185"  }, // (1,2) pink
      { kind: "tool",  badge: "Diagnostic",  name: "GTM Readiness Score",     desc: "Find out if you're actually ready to go to market — or just think you are.",  color: "#fbbf24", lightText: false, variant: 1 }, // (2,2)
      { kind: "deco",  color: "#ff5c00"  }, // (3,2) orange
      { kind: "tool",  badge: "Calculator",  name: "Revenue Leak Calculator",  desc: "Spot where your pipeline springs a leak before it costs you.",  color: "#fbbf24", lightText: false, variant: 2 }, // (4,2)
      { kind: "deco",  color: "#c4b5fd"  }, // (5,2) lavender
      { kind: "tool",  badge: "Calculator",  name: "Growth Lever Identifier",  desc: "Know which lever actually moves the needle before you start pulling things.",  color: "#c4b5fd", lightText: true,  variant: 3 }, // (6,2)
      { kind: "deco",  color: "#ff5c00"  }, // (7,2) orange
      { kind: "tool",  badge: "Diagnostic",  name: "Churn Risk Diagnostic",    desc: "Catch the customers who are quietly packing their bags before they ghost you.",  color: "#fbbf24", lightText: true,  variant: 4 }, // (8,2)
      // Row 3 (indices 16–23)
      { kind: "tool",  badge: "Diagnostic",  name: "Pipeline Health Check",    desc: "A full body scan for your revenue pipeline. No waiting room required.",  color: "#c4b5fd", lightText: false, variant: 5 }, // (1,3)
      { kind: "deco",  color: "#60a5fa"  }, // (2,3) blue
      { kind: "tool",  badge: "Diagnostic",  name: "Attribution Audit",        desc: "Find out what's actually driving revenue — and what's just taking the credit.",  color: "#fb7185", lightText: true,  variant: 6 }, // (3,3)
      { kind: "deco",  color: "#34d399"  }, // (4,3) green
      { kind: "deco",  color: "#fbbf24"  }, // (5,3) yellow
      { kind: "deco",  color: "#fb7185"  }, // (6,3) pink
      { kind: "deco",  color: "#34d399"  }, // (7,3) green
      { kind: "deco",  color: "#60a5fa"  }, // (8,3) blue
      // Row 4 (indices 24–31)
      { kind: "deco",  color: "#34d399"  }, // (1,4) green
      { kind: "deco",  color: "#ff5c00"  }, // (2,4) orange
      { kind: "deco",  color: "#fbbf24"  }, // (3,4) yellow
      { kind: "deco",  color: "#c4b5fd"  }, // (4,4) lavender
      { kind: "tool",  badge: "Diagnostic",  name: "ICP Fit Scorer",           desc: "Stop chasing the wrong accounts. Score your fit before you pitch.",  color: "#ff5c00", lightText: false, variant: 7 }, // (5,4)
      { kind: "deco",  color: "#60a5fa"  }, // (6,4) blue
      { kind: "tool",  badge: "Calculator",  name: "CAC Payback Calculator",   desc: "How long until that customer actually pays for themselves? Let's find out.",  color: "#fbbf24", lightText: true,  variant: 1 }, // (7,4)
      { kind: "deco",  color: "#ff5c00"  }, // (8,4) orange
      // Row 5 (indices 32–39)
      { kind: "deco",  color: "#fbbf24"  }, // (1,5) yellow
      { kind: "deco",  color: "#f5f0e8"  }, // (2,5)
      { kind: "deco",  color: "#c4b5fd"  }, // (3,5) lavender
      { kind: "deco",  color: "#60a5fa"  }, // (4,5) blue
      { kind: "deco",  color: "#fb7185"  }, // (5,5) pink
      { kind: "deco",  color: "#f5f0e8"  }, // (6,5)
      { kind: "deco",  color: "#c4b5fd"  }, // (7,5) purple
      { kind: "deco",  color: "#fb7185"  }, // (8,5) pink
    ]}
  />
);
