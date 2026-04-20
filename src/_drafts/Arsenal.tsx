import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CleoSearch from "@/components/CleoSearch";
import HubBanner from "@/components/HubBanner";
import "@/styles/pages/arsenal.css";

// ── Drag hooks ────────────────────────────────────────────────────────────────

const useDrag = (initCol: number, initRow: number) => {
  const [col, setCol] = useState(initCol);
  const [row, setRow] = useState(initRow);
  const [dragging, setDragging] = useState(false);
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    const sc = col, sr = row, sx = e.clientX, sy = e.clientY;
    const move = (ev: MouseEvent) => {
      setCol(Math.max(0, Math.round(sc + (ev.clientX - sx) / 52)));
      setRow(Math.max(0, Math.round(sr + (ev.clientY - sy) / 52)));
    };
    const up = () => { setDragging(false); document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  };
  return { col, row, dragging, onMouseDown };
};

const useDragWide = (initCol1: number, initCol2: number, initRow: number) => {
  const gap = initCol2 - initCol1;
  const [col1, setCol1] = useState(initCol1);
  const [col2, setCol2] = useState(initCol2);
  const [row, setRow] = useState(initRow);
  const [dragging, setDragging] = useState(false);
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    const sc1 = col1, sr = row, sx = e.clientX, sy = e.clientY;
    const move = (ev: MouseEvent) => {
      const nc1 = Math.max(0, Math.round(sc1 + (ev.clientX - sx) / 52));
      setCol1(nc1); setCol2(nc1 + gap);
      setRow(Math.max(0, Math.round(sr + (ev.clientY - sy) / 52)));
    };
    const up = () => { setDragging(false); document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  };
  return { col1, col2, row, dragging, onMouseDown };
};

// pointer-events: all + grab cursor for non-ar-peg-item wrappers
const draggableStyle = (dragging: boolean, extra: React.CSSProperties = {}): React.CSSProperties => ({
  pointerEvents: 'all',
  cursor: dragging ? 'grabbing' : 'grab',
  position: 'absolute',
  ...extra,
});

// ── Shared ────────────────────────────────────────────────────────────────────

const FILTER_CATS = ['All', 'Canvas', 'Diagnostic', 'Checklist', 'Playbook'];
const RECENT_ITEMS = ['ICP Definition Canvas', 'GTM Readiness Score', 'Launch Readiness Check'];
const COUNTS = [
  { label: 'Canvas',     count: 1, color: '#ff5c00' },
  { label: 'Diagnostic', count: 1, color: '#a78bfa' },
  { label: 'Checklist',  count: 1, color: '#fbbf24' },
  { label: 'Playbook',   count: 0, color: '#34d399' },
];

const DragLabel = ({ col, row }: { col: number; row: number }) => (
  <div className="ar-drag-label">col {col} · row {row}</div>
);

type Color = 'orange' | 'lavender' | 'yellow' | 'green';

// ── Components ────────────────────────────────────────────────────────────────

const PegCard = ({ initCol, initRow, color, width = 270, type, name, desc }: {
  initCol: number; initRow: number; color: Color; width?: number;
  type: string; name: string; desc: string;
}) => {
  const { col, row, dragging, onMouseDown } = useDrag(initCol, initRow);
  return (
    <div
      className="ar-peg-item"
      style={{ left: `calc(26px + ${col} * 52px)`, top: `calc(26px + ${row} * 52px)`, cursor: dragging ? 'grabbing' : 'grab', position: 'absolute' }}
      onMouseDown={onMouseDown}
    >
      {dragging && <DragLabel col={col} row={row} />}
      <div className={`ar-hook-knob ar-hook-knob--${color}`} />
      <div className={`ar-card ar-card--${color}`} style={{ marginTop: -11, width }}>
        <div className={`ar-card-accent ar-card-accent--${color}`} />
        <div className="ar-card-type">{type}</div>
        <div className="ar-card-name">{name}</div>
        <p className="ar-card-desc">{desc}</p>
        <button className={`ar-card-btn ar-card-btn--${color}`}>Coming soon →</button>
      </div>
    </div>
  );
};

const ClipboardCard = () => {
  const { col, row, dragging, onMouseDown } = useDrag(16, 5);
  return (
    <div
      className="ar-peg-item"
      style={{ left: `calc(26px + ${col} * 52px)`, top: `calc(26px + ${row} * 52px)`, cursor: dragging ? 'grabbing' : 'grab', position: 'absolute' }}
      onMouseDown={onMouseDown}
    >
      {dragging && <DragLabel col={col} row={row} />}
      <div className="ar-hook-knob ar-hook-knob--yellow" />
      <div className="ar-clipboard" style={{ marginTop: -11 }}>
        <div className="ar-clipboard-clip ar-clipboard-clip--yellow" />
        <div className="ar-clipboard-board">
          <div className="ar-card-type">Checklist</div>
          <div className="ar-card-name">Launch Readiness Check</div>
          <p className="ar-card-desc">12 things to verify before you go live.</p>
          <button className="ar-card-btn ar-card-btn--yellow">Coming soon →</button>
        </div>
      </div>
    </div>
  );
};

const WidePegCard = () => {
  const { col1, col2, row, dragging, onMouseDown } = useDragWide(22, 33, 9);
  const midCol = (col1 + col2) / 2;
  return (
    <>
      <div
        onMouseDown={onMouseDown}
        style={draggableStyle(dragging, { left: `calc(26px + ${midCol} * 52px)`, top: `calc(26px + ${row} * 52px + 6px)`, transform: 'translateX(-50%)' })}
      >
        {dragging && <DragLabel col={col1} row={row} />}
        <div className="ar-card ar-card--wide ar-card--lavender">
          <div className="ar-card-accent ar-card-accent--lavender" />
          <div className="ar-card-type">Diagnostic</div>
          <div className="ar-card-name">GTM Readiness Score</div>
          <p className="ar-card-desc">Find where your GTM is leaking before you scale it. Score across 4 pillars and get prioritised next steps you can act on today.</p>
          <button className="ar-card-btn ar-card-btn--lavender">Coming soon →</button>
        </div>
      </div>
      <div className="ar-peg-item" style={{ left: `calc(26px + ${col1} * 52px)`, top: `calc(26px + ${row} * 52px)`, pointerEvents: 'none' }}>
        <div className="ar-hook-knob ar-hook-knob--lavender" />
      </div>
      <div className="ar-peg-item" style={{ left: `calc(26px + ${col2} * 52px)`, top: `calc(26px + ${row} * 52px)`, pointerEvents: 'none' }}>
        <div className="ar-hook-knob ar-hook-knob--lavender" />
      </div>
    </>
  );
};

const FilterDial = () => {
  const [active, setActive] = useState(0);
  const { col, row, dragging, onMouseDown } = useDrag(2, 6);
  const rotateDeg = (active / FILTER_CATS.length) * 360;
  return (
    <div
      onMouseDown={onMouseDown}
      style={draggableStyle(dragging, { left: `calc(26px + ${col} * 52px)`, top: `calc(26px + ${row} * 52px)`, transform: 'translateX(-50%)' })}
    >
      {dragging && <DragLabel col={col} row={row} />}
      <div className="ar-filter-panel" onClick={(e) => { e.stopPropagation(); setActive(p => (p + 1) % FILTER_CATS.length); }}>
        <div className="ar-screw ar-screw--tl" /><div className="ar-screw ar-screw--tr" />
        <div className="ar-screw ar-screw--bl" /><div className="ar-screw ar-screw--br" />
        <div className="ar-filter-label">Filter by type</div>
        <svg width="170" height="170" viewBox="0 0 120 120">
          <circle cx="63" cy="63" r="50" fill="#b8a898" />
          <circle cx="60" cy="60" r="50" fill="#2e2824" />
          <circle cx="60" cy="60" r="42" fill="#fffcf8" />
          {FILTER_CATS.map((_, i) => {
            const a = ((i / FILTER_CATS.length) * 360 - 90) * (Math.PI / 180);
            return <line key={i} x1={60 + 42 * Math.cos(a)} y1={60 + 42 * Math.sin(a)} x2={60 + 49 * Math.cos(a)} y2={60 + 49 * Math.sin(a)} stroke="#fffcf8" strokeWidth="2.5" />;
          })}
          <g style={{ transform: `rotate(${rotateDeg}deg)`, transformOrigin: '60px 60px', transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
            <circle cx="62" cy="28" r="6" fill="#b33e00" />
            <circle cx="60" cy="26" r="6" fill="#ff5c00" />
          </g>
          <text x="60" y="55" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="2" fill="#a8998c" fontFamily="inherit">FILTER</text>
          <text x="60" y="70" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1c1917" fontFamily="inherit">{FILTER_CATS[active].toUpperCase()}</text>
        </svg>
      </div>
    </div>
  );
};

const CounterPanel = () => {
  const { col, row, dragging, onMouseDown } = useDrag(20, 2);
  return (
    <div
      onMouseDown={onMouseDown}
      style={draggableStyle(dragging, { left: `calc(26px + ${col} * 52px)`, top: `calc(26px + ${row} * 52px)`, transform: 'translateX(-50%)' })}
    >
      {dragging && <DragLabel col={col} row={row} />}
      <div className="ar-counter-panel">
        <div className="ar-screw ar-screw--tl" /><div className="ar-screw ar-screw--tr" />
        <div className="ar-screw ar-screw--bl" /><div className="ar-screw ar-screw--br" />
        <div className="ar-counter-label">Tools Available</div>
        <div className="ar-counter-total">3</div>
        <div className="ar-counter-rows">
          {COUNTS.map(c => (
            <div key={c.label} className="ar-counter-row">
              <span className="ar-counter-cat" style={{ color: c.color }}>{c.label}</span>
              <span className="ar-counter-num">{c.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecentlyAdded = () => {
  const { col, row, dragging, onMouseDown } = useDrag(6, 13);
  return (
    <div
      onMouseDown={onMouseDown}
      style={draggableStyle(dragging, { left: `calc(26px + ${col} * 52px)`, top: `calc(26px + ${row} * 52px)` })}
    >
      {dragging && <DragLabel col={col} row={row} />}
      <div className="ar-ticker-panel">
        <div className="ar-screw ar-screw--tl" /><div className="ar-screw ar-screw--tr" />
        <div className="ar-screw ar-screw--bl" /><div className="ar-screw ar-screw--br" />
        <div className="ar-ticker-label">Recently Added</div>
        <div className="ar-ticker-track">
          <div className="ar-ticker-scroll">
            {[...RECENT_ITEMS, ...RECENT_ITEMS].map((item, i) => (
              <span key={i} className="ar-ticker-item">{item}<span className="ar-ticker-sep"> · </span></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const BIN_PALETTE: Record<Color, { front: string; side: string; top: string }> = {
  orange:   { front: '#ff6b2b', side: '#b33e00', top: '#7a2000' },
  lavender: { front: '#9b77f5', side: '#5a30b0', top: '#2a1060' },
  yellow:   { front: '#f5bf20', side: '#9a7000', top: '#503800' },
  green:    { front: '#22c78a', side: '#0a7050', top: '#024030' },
};

const BinSVG = ({ color }: { color: Color }) => {
  const p = BIN_PALETTE[color];
  return (
    <svg width="168" height="216" viewBox="0 0 168 216" style={{ display: 'block' }}>
      {/* Shadow — all three faces as one grey block, drawn first */}
      <g transform="translate(5,6)" aria-hidden="true">
        <polygon points="0,28 140,28 160,8 20,8" fill="#b8a898" />
        <polygon points="140,28 160,8 160,188 140,208" fill="#b8a898" />
        <rect x="0" y="28" width="140" height="180" fill="#b8a898" />
      </g>
      {/* Right face — dark, in shadow */}
      <polygon points="140,28 160,8 160,188 140,208" fill={p.side} />
      {/* Front face — mid tone, faces viewer */}
      <rect x="0" y="28" width="140" height="180" fill={p.front} />
      {/* Top opening — darkest, you're looking down into a hollow box */}
      <polygon points="0,28 140,28 160,8 20,8" fill={p.top} />
    </svg>
  );
};

const PegBin = ({ initCol, initRow, color }: { initCol: number; initRow: number; color: Color }) => {
  const { col, row, dragging, onMouseDown } = useDrag(initCol, initRow);
  return (
    <div
      onMouseDown={onMouseDown}
      style={draggableStyle(dragging, { left: `calc(26px + ${col} * 52px)`, top: `calc(26px + ${row} * 52px)`, transform: 'translateX(-50%)' })}
    >
      {dragging && <DragLabel col={col} row={row} />}
      <BinSVG color={color} />
    </div>
  );
};

// ── Page ─────────────────────────────────────────────────────────────────────

const Arsenal = () => (
  <>
    <SEOHead
      title="The Arsenal — That Works"
      description="Templates, canvases and worksheets built from real implementations. Download and run."
      canonical="/arsenal"
    />
    <div className="hub-page cg-page">
      <HubBanner />

      <div className="arsenal-board">
        <div className="arsenal-board-inner">
          <Link to="/blog" className="arsenal-back">← Back to hub</Link>
        </div>

        <div className="ar-pegs-layer">
          <PegCard initCol={7}  initRow={2}  color="orange"   width={270} type="Canvas"    name="ICP Definition Canvas"         desc="Map your ideal customer profile across 6 dimensions." />
          <PegCard initCol={14} initRow={3}  color="green"    width={180} type="Playbook"  name="Cold Outreach Playbook"         desc="A repeatable system for outbound that doesn't feel cold." />
          <PegCard initCol={20} initRow={5}  color="lavender" width={340} type="Framework" name="Revenue Architecture Blueprint" desc="Map the full system behind predictable B2B revenue — from ICP to close to expand." />
          <PegCard initCol={10} initRow={9}  color="orange"   width={220} type="Worksheet" name="Pipeline Audit Sheet"           desc="Score your pipeline health across 5 dimensions." />
          <ClipboardCard />
          <WidePegCard />
          <FilterDial />
          <CounterPanel />
          <RecentlyAdded />
          <PegBin initCol={28} initRow={2} color="green" />
          <PegBin initCol={33} initRow={5} color="orange" />
        </div>
      </div>

      <CleoSearch />
      <Footer />

      <Link to="/" className="back-to-site" aria-label="Go to That Works website">
        <span className="bts-top"><span className="bts-arrow">←</span>That Works</span>
        <span className="bts-cta">Go to the website</span>
      </Link>
    </div>
  </>
);

export default Arsenal;
