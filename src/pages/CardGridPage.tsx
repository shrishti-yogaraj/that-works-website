import { useState, useEffect, useRef } from "react";
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
  mobileColor?: string;
  lightText?: boolean;
  mobileLightText?: boolean;
  rows?: number;
  cols?: number;
  cta?: string;
  variant?: number;
}

interface DecoCard {
  kind: "deco";
  color: string;
  mobileColor?: string;
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

const COL_CONFIGS: Record<number, number[]> = {
  8: [0, 160, 80, -80, 40, 180, 110, -40],
  6: [0, 100, 50, -50, 25, 110],
  3: [0, 60, 30],
};

function getColCount(width: number) {
  if (width >= 1800) return 8;
  if (width >= 700) return 6;
  return 3;
}

const CardGridPage = ({ name, eyebrow, slug, description, cards, showHeader = true, showBanner = true, staggered = false }: Props) => {
  const [windowWidth, setWindowWidth] = useState(() => typeof window !== "undefined" ? window.innerWidth : 1440);
  const [stagCols, setStagCols] = useState(() => getColCount(typeof window !== "undefined" ? window.innerWidth : 1440));
  const [mainHeight, setMainHeight] = useState<number | null>(null);
  const [mobileHeight, setMobileHeight] = useState<number | null>(null);
  const mainRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      const w = window.innerWidth;
      setWindowWidth(w);
      setStagCols(getColCount(w));
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // After each render, measure column bottoms and set cg-main height dynamically.
  // Height = bottom of shortest last-card − ¼ of that card's height.
  useEffect(() => {
    if (!staggered || !mainRef.current) return;
    const measure = () => {
      const main = mainRef.current!;
      const mainTop = main.getBoundingClientRect().top;
      const cols = main.querySelectorAll<HTMLElement>(".cg-col");
      let minBottom = Infinity;
      let cardH = 0;
      cols.forEach(col => {
        const children = col.children;
        if (!children.length) return;
        const last = children[children.length - 1] as HTMLElement;
        const rect = last.getBoundingClientRect();
        const bottom = rect.bottom - mainTop;
        if (bottom < minBottom) {
          minBottom = bottom;
          cardH = rect.height;
        }
      });
      if (minBottom !== Infinity) {
        const trim = stagCols === 6 ? cardH * 0.75 : cardH / 4;
        setMainHeight(minBottom - trim);
      }
    };
    // Use rAF to ensure layout has settled after render
    const id = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(id);
  }, [staggered, stagCols, windowWidth]);

  // Mobile height: cut halfway through the last card of the shortest column
  useEffect(() => {
    if (!staggered || !mobileRef.current || windowWidth >= 700) return;
    const measure = () => {
      const mob = mobileRef.current!;
      const mobTop = mob.getBoundingClientRect().top;
      const cols = mob.querySelectorAll<HTMLElement>(".cg-m-col");
      // Cut at the top of card 26 = col 2 (index 2), row 7 (index 7)
      const targetCol = cols[2];
      if (!targetCol) return;
      const targetCard = targetCol.children[7] as HTMLElement | undefined;
      if (!targetCard) return;
      const cutoff = targetCard.getBoundingClientRect().top - mobTop;
      setMobileHeight(cutoff);
    };
    const id = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(id);
  }, [staggered, windowWidth]);

  const colOffsets = COL_CONFIGS[stagCols];

  const colWidth = (windowWidth * (1 - 0.054) - (stagCols - 1) * 7) / stagCols;

  // Group cards into columns (column-major).
  // For 6-col: keep the 8-col arrangement for cols 1–6, then append
  // the overflow cards from cols 7 & 8 to the bottom round-robin.
  const columns: Card[][] = staggered
    ? (() => {
        const eightCols = Array.from({ length: 8 }, (_, ci) =>
          cards.filter((_, i) => i % 8 === ci)
        );
        if (stagCols === 8) return eightCols;
        if (stagCols === 6) {
          const result = eightCols.slice(0, 6).map(col => [...col]);
          const overflow = [...eightCols[6], ...eightCols[7]];
          const tools = overflow.filter(c => c.kind === "tool");
          const decos = overflow.filter(c => c.kind === "deco");
          // First overflow tool → append to col 0 (6th slot)
          if (tools[0]) result[3].splice(4, 0, tools[0]);
          // Second overflow tool → insert at 4th position of col 1 (visible mid-column)
          if (tools[1]) result[1].splice(3, 0, tools[1]);
          // Deco overflow → append starting from col 2
          decos.forEach((card, i) => result[(i + 2) % 6].push(card));
          return result;
        }
        // 3-col fallback
        return Array.from({ length: 3 }, (_, ci) =>
          cards.filter((_, i) => i % 3 === ci)
        );
      })()
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

        {/* ── Mobile layout (staggered Lab page only, <700px) ── */}
        {staggered && windowWidth < 700 && (() => {
          const toolCards = cards.filter(c => c.kind === "tool");
          const decoPool  = cards.filter(c => c.kind === "deco");
          // [colIndex, rowIndex] for each tool in order 1–8
          // maps to mobile positions: 29→(2,1) 3→(0,2) 17→(1,2) 5→(0,4) 32→(2,4) 20→(1,5) 7→(0,6) 34→(2,6)
          const toolSlots: [number, number][] = [
            [2, 1], [0, 2], [1, 2], [0, 4], [2, 3], [1, 4], [0, 6], [2, 5],
          ];
          const colLens = [10, 8, 10];
          const grid: (Card | null)[][] = colLens.map(len => new Array(len).fill(null));
          toolSlots.forEach(([ci, ri], ti) => { grid[ci][ri] = toolCards[ti]; });
          let di = 0;
          const mob3: Card[][] = grid.map(col =>
            col.map(cell => cell ?? decoPool[di++ % decoPool.length])
          );
          const mobOffsets = [0, 80, 25];
          let mToolCount = 0;
          return (
            <div className="cg-mobile" ref={mobileRef} style={mobileHeight !== null ? { height: mobileHeight, overflow: "hidden" } : undefined}>
              <div className="cg-m-wall-box">
                <Link to="/blog" className="cg-m-wall-back">← Back to hub</Link>
                <h1 className="cg-m-wall-title">{name}</h1>
              </div>
              <div className="cg-m-grid">
                {mob3.map((col, ci) => (
                  <div key={ci} className="cg-m-col" style={{ marginTop: mobOffsets[ci] }}>
                    {col.map((card, j) => {
                      const cardIdx = ci * 100 + j;
                      if (card.kind === "tool") mToolCount++;
                      const num = String(mToolCount).padStart(2, "0");
                      if (card.kind === "tool") {
                        const mc = card.mobileColor ?? card.color;
                        return (
                          <div
                            key={cardIdx}
                            className="cg-m-tool-card"
                            style={{ "--cc": mc, "--ct": "#1c1917" } as React.CSSProperties}
                          >
                            <div className="cg-m-tool-top">
                              <span className="cg-m-tool-badge">{card.badge}</span>
                              <h3 className="cg-m-tool-name">
                                {card.name.split(" ").map((word, wi) => <span key={wi}>{word}</span>)}
                              </h3>
                            </div>
                            <span className="cg-m-tool-cta">{card.cta ?? "Coming soon"} →</span>
                            <span className="cg-m-tool-bg-num">{num}</span>
                          </div>
                        );
                      }
                      return (
                        <div
                          key={cardIdx}
                          className="cg-m-deco-card"
                          style={{ background: card.mobileColor ?? card.color }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {(!staggered || windowWidth >= 700) && (
        <main className="cg-main" ref={mainRef} style={mainHeight !== null ? { height: mainHeight } : undefined}>
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
                  <div key={ci} className="cg-col" style={{ marginTop: colOffsets[ci] }}>
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
        )}

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
      { kind: "deco",  color: "#ff5c00", mobileColor: "#60a5fa"  }, // (4,1) orange / mobile: blue
      { kind: "deco",  color: "#fb7185"  }, // (5,1) pink
      { kind: "deco",  color: "#fbbf24"  }, // (6,1) yellow
      { kind: "deco",  color: "#fb7185"  }, // (7,1) pink
      { kind: "deco",  color: "#c4b5fd", mobileColor: "#34d399"  }, // (8,1) purple / mobile: green
      // Row 2 (indices 8–15)
      { kind: "deco",  color: "#fb7185"  }, // (1,2) pink
      { kind: "tool",  badge: "Diagnostic",  name: "GTM Readiness Score",     desc: "Find out if you're actually ready to go to market — or just think you are.",  color: "#fbbf24", lightText: false, variant: 1 }, // (2,2)
      { kind: "deco",  color: "#ff5c00"  }, // (3,2) orange
      { kind: "tool",  badge: "Calculator",  name: "Revenue Leak Calculator",  desc: "Spot where your pipeline springs a leak before it costs you.",  color: "#fbbf24", lightText: false, variant: 2 }, // (4,2)
      { kind: "deco",  color: "#c4b5fd"  }, // (5,2) lavender
      { kind: "tool",  badge: "Calculator",  name: "Growth Lever Identifier",  desc: "Know which lever actually moves the needle before you start pulling things.",  color: "#c4b5fd", lightText: true,  variant: 3 }, // (6,2)
      { kind: "deco",  color: "#ff5c00", mobileColor: "#fbbf24"  }, // (7,2) orange / mobile: yellow
      { kind: "tool",  badge: "Diagnostic",  name: "Churn Risk Diagnostic",    desc: "Catch the customers who are quietly packing their bags before they ghost you.",  color: "#ff5c00", mobileColor: "#c4b5fd", lightText: true,  variant: 4 }, // (8,2)
      // Row 3 (indices 16–23)
      { kind: "tool",  badge: "Diagnostic",  name: "Pipeline Health Check",    desc: "A full body scan for your revenue pipeline. No waiting room required.",  color: "#c4b5fd", mobileColor: "#fb7185", lightText: false, variant: 5 }, // (1,3)
      { kind: "deco",  color: "#60a5fa"  }, // (2,3) blue
      { kind: "tool",  badge: "Diagnostic",  name: "Attribution Audit",        desc: "Find out what's actually driving revenue — and what's just taking the credit.",  color: "#fb7185", mobileColor: "#34d399", lightText: true,  variant: 6 }, // (3,3)
      { kind: "deco",  color: "#34d399", mobileColor: "#60a5fa"  }, // (4,3) green / mobile: blue
      { kind: "deco",  color: "#fbbf24", mobileColor: "#ff5c00"  }, // (5,3) yellow / mobile: orange
      { kind: "deco",  color: "#fb7185", mobileColor: "#c4b5fd"  }, // (6,3) pink / mobile: purple
      { kind: "deco",  color: "#34d399", mobileColor: "#60a5fa"  }, // (7,3) green / mobile: blue
      { kind: "deco",  color: "#fbbf24", mobileColor: "#ff5c00"  }, // (8,3) yellow / mobile: orange
      // Row 4 (indices 24–31)
      { kind: "deco",  color: "#34d399"  }, // (1,4) green
      { kind: "deco",  color: "#ff5c00"  }, // (2,4) orange
      { kind: "deco",  color: "#34d399"  }, // (3,4) green
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
      { kind: "deco",  color: "#c4b5fd"  }, // (6,5) purple
      { kind: "deco",  color: "#c4b5fd"  }, // (7,5) purple
      { kind: "deco",  color: "#fb7185"  }, // (8,5) pink
    ]}
  />
);
