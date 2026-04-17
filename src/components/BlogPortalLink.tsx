import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

/* ─────────────────────────────────────────────────────────────────────────────
   Constellation canvas — spiral galaxy, brand colours
───────────────────────────────────────────────────────────────────────────── */
const ConstellationCanvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const set = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    set();
    window.addEventListener("resize", set);

    const ctx = canvas.getContext("2d")!;

    const stars = Array.from({ length: 360 }, () => {
      const arm   = Math.floor(Math.random() * 3);
      const dist  = Math.random();
      const base  = arm * (Math.PI * 2 / 3);
      const angle = base + dist * Math.PI * 3.5 + (Math.random() - 0.5) * 0.9;
      const r     = dist * Math.min(window.innerWidth, window.innerHeight) * 0.44;
      const t     = Math.random();
      const color = t < 0.06 ? "255,92,0" : t < 0.13 ? "251,191,36" :
                    t < 0.30 ? "196,181,253" : t < 0.46 ? "167,139,250" : "255,255,255";
      return {
        angle, r, color,
        size: Math.random() < 0.06 ? Math.random() * 2.2 + 1.8 : Math.random() * 1.1 + 0.25,
        speed: 0.0016 + Math.random() * 0.0026 + (1 - dist) * 0.001,
        opacity: 0.25 + Math.random() * 0.75,
        tw: Math.random() * Math.PI * 2,
        tws: 0.022 + Math.random() * 0.038,
      };
    });

    // sparse constellation lines
    const lines: [number, number][] = [];
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const xi = Math.cos(stars[i].angle) * stars[i].r;
        const yi = Math.sin(stars[i].angle) * stars[i].r * 0.8;
        const xj = Math.cos(stars[j].angle) * stars[j].r;
        const yj = Math.sin(stars[j].angle) * stars[j].r * 0.8;
        if (Math.hypot(xi - xj, yi - yj) < 55 && Math.random() < 0.16) lines.push([i, j]);
      }
    }

    let raf: number;
    const draw = () => {
      const { width: w, height: h } = canvas;
      const cx = w / 2, cy = h / 2;
      ctx.clearRect(0, 0, w, h);

      // nebula layers
      const n1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, cy * 0.85);
      n1.addColorStop(0,    "rgba(255,92,0,0.24)");
      n1.addColorStop(0.2,  "rgba(120,0,0,0.14)");
      n1.addColorStop(0.55, "rgba(88,28,135,0.18)");
      n1.addColorStop(1,    "rgba(0,0,0,0)");
      ctx.fillStyle = n1; ctx.fillRect(0, 0, w, h);
      const n2 = ctx.createRadialGradient(cx * 0.65, cy * 0.72, 0, cx, cy, cy * 0.5);
      n2.addColorStop(0, "rgba(109,40,217,0.12)"); n2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = n2; ctx.fillRect(0, 0, w, h);

      stars.forEach(s => { s.angle += s.speed; s.tw += s.tws; });

      // lines
      ctx.lineWidth = 0.4;
      lines.forEach(([i, j]) => {
        const a = stars[i], b = stars[j];
        const ax = cx + Math.cos(a.angle) * a.r, ay = cy + Math.sin(a.angle) * a.r * 0.8;
        const bx = cx + Math.cos(b.angle) * b.r, by = cy + Math.sin(b.angle) * b.r * 0.8;
        const alpha = Math.max(0, 0.13 - Math.hypot(ax - bx, ay - by) * 0.0022);
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
        ctx.strokeStyle = `rgba(167,139,250,${alpha})`; ctx.stroke();
      });

      // stars
      stars.forEach(s => {
        const x = cx + Math.cos(s.angle) * s.r;
        const y = cy + Math.sin(s.angle) * s.r * 0.8;
        const a = s.opacity * (0.72 + Math.sin(s.tw) * 0.28);
        if (s.size > 1.6) {
          const g = ctx.createRadialGradient(x, y, 0, x, y, s.size * 5);
          g.addColorStop(0, `rgba(${s.color},${a * 0.4})`); g.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, s.size * 5, 0, Math.PI * 2); ctx.fill();
        }
        ctx.beginPath(); ctx.arc(x, y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${a})`; ctx.fill();
      });

      // core glow
      const c1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, 85);
      c1.addColorStop(0, "rgba(255,220,120,1)"); c1.addColorStop(0.25, "rgba(255,92,0,0.85)");
      c1.addColorStop(0.6, "rgba(139,0,139,0.38)"); c1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = c1; ctx.beginPath(); ctx.arc(cx, cy, 85, 0, Math.PI * 2); ctx.fill();
      const c2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20);
      c2.addColorStop(0, "rgba(255,255,210,1)"); c2.addColorStop(1, "rgba(255,140,0,0)");
      ctx.fillStyle = c2; ctx.beginPath(); ctx.arc(cx, cy, 20, 0, Math.PI * 2); ctx.fill();

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", set); };
  }, []);

  return <canvas ref={ref} style={{ position: "absolute", inset: 0, display: "block" }} />;
};

/* ─────────────────────────────────────────────────────────────────────────────
   Portal overlay — full GSAP timeline, no state-driven animation
───────────────────────────────────────────────────────────────────────────── */
const PortalOverlay = ({ onDone }: { onDone: () => void }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const doorRef    = useRef<HTMLDivElement>(null);
  const knobRef    = useRef<HTMLDivElement>(null);
  const rimRef     = useRef<HTMLDivElement>(null);
  const clipRef    = useRef<HTMLDivElement>(null);
  const labelRef   = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // clipRef starts at circle(0px) via inline style — guaranteed hidden on first paint
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // ── 0.0s  overlay fades in
    tl.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    // ── 0.25s  door drops in from above with bounce
    tl.fromTo(doorRef.current,
      { opacity: 0, y: -80, scale: 0.88 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.5)" },
      "-=0.05"
    );

    // ── 0.7s  rim glow brightens (warm light leaks around door edges)
    tl.to(rimRef.current,
      { opacity: 1, duration: 0.6, ease: "power1.in" },
      "-=0.15"
    );

    // ── 0.8s  label fades in
    tl.fromTo(labelRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.35"
    );

    // ── 1.2s  pause — then knob turns (long enough to actually see it)
    tl.to(knobRef.current, {
      keyframes: [
        { rotate: 0,   duration: 0.05 },
        { rotate: -8,  duration: 0.12, ease: "power1.in" },
        { rotate: 32,  duration: 0.22, ease: "power2.out" },
        { rotate: 26,  duration: 0.1  },
        { rotate: 30,  duration: 0.08 },
      ],
      duration: 0,
    }, "+=0.35");

    // ── 1.7s  door swings open on LEFT hinge — slow, deliberate
    tl.to(doorRef.current,
      { rotateY: -105, duration: 1.1, ease: "power2.inOut" },
      "+=0.1"
    );

    // ── 1.75s  constellation circle blooms from behind the swinging door
    //           ONE continuous tween — no intermediate state
    tl.to(clipRef.current,
      { clipPath: "circle(200vmax at 50% 50%)", duration: 1.5, ease: "power2.inOut" },
      "<0.1"   // starts just as door begins swinging, runs through completion
    );

    // ── 2.3s  door fades out as constellation overtakes it
    tl.to(doorRef.current,
      { opacity: 0, duration: 0.35, ease: "power1.in" },
      "<0.35"
    );

    tl.call(onDone);

    return () => { tl.kill(); };
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "#07040f",
        overflow: "hidden",
        opacity: 0,
      }}
    >
      {/* ── Constellation — HIDDEN by clip-path on first paint ── */}
      <div
        ref={clipRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          /* CRITICAL: must be here in inline style so first paint is 0px */
          clipPath: "circle(0px at 50% 50%)",
        }}
      >
        <ConstellationCanvas />
      </div>

      {/* ── Rim glow — warm light leaking around door edges ── */}
      <div
        ref={rimRef}
        style={{
          position: "absolute",
          zIndex: 2,
          width: 340, height: 500,
          borderRadius: "170px 170px 6px 6px",
          background: "transparent",
          boxShadow: "0 0 60px 12px rgba(255,120,20,0.22), 0 0 120px 30px rgba(180,60,200,0.12)",
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      {/* ── Door — solid, opaque, in front of everything ── */}
      <div style={{ perspective: 1400, perspectiveOrigin: "center center", zIndex: 3 }}>
        <div
          ref={doorRef}
          style={{
            width: 300, height: 460,
            position: "relative",
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            borderRadius: "150px 150px 6px 6px",
            /* Rich dark walnut — must be fully opaque */
            background: `
              repeating-linear-gradient(
                172deg,
                transparent 0px, transparent 10px,
                rgba(255,200,80,0.03) 10px, rgba(255,200,80,0.03) 11px
              ),
              linear-gradient(160deg, #2e1c0a 0%, #180f06 55%, #2a1809 100%)
            `,
            border: "3px solid #8a6030",
            boxShadow: `
              inset -16px 0  32px rgba(0,0,0,0.7),
              inset   8px 0  18px rgba(255,200,80,0.05),
              inset   0   0   0  1px rgba(255,200,80,0.04),
              0 0 0 6px rgba(35,20,8,0.85),
              0 0 0 7px rgba(138,96,48,0.25),
              0 60px 140px rgba(0,0,0,0.98),
              0 0 90px rgba(255,100,20,0.1)
            `,
            opacity: 0,
          }}
        >
          {/* Upper arch panel with inset shadow */}
          <div style={{
            position: "absolute", top: 36, left: 22, right: 22, height: 170,
            borderRadius: "128px 128px 5px 5px",
            border: "2px solid rgba(138,96,48,0.45)",
            boxShadow: "inset 0 8px 28px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,200,80,0.03)",
          }} />
          {/* Lower rect panel */}
          <div style={{
            position: "absolute", top: 234, left: 22, right: 22, bottom: 22,
            borderRadius: 5,
            border: "2px solid rgba(138,96,48,0.45)",
            boxShadow: "inset 0 8px 28px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,200,80,0.03)",
          }} />

          {/* Horizontal rail between panels */}
          <div style={{
            position: "absolute", top: 218, left: 22, right: 22, height: 3,
            background: "linear-gradient(to right, rgba(138,96,48,0.2), rgba(138,96,48,0.5), rgba(138,96,48,0.2))",
          }} />

          {/* Keyhole — centred, glowing */}
          <div style={{
            position: "absolute", bottom: 134, left: "50%",
            transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center",
          }}>
            <div style={{
              width: 16, height: 16, borderRadius: "50%",
              border: "2.5px solid #d4900e",
              background: "rgba(212,144,14,0.15)",
              boxShadow: "0 0 16px rgba(212,144,14,0.7), 0 0 32px rgba(212,144,14,0.25)",
            }} />
            <div style={{
              width: 7, height: 16, marginTop: -1,
              background: "linear-gradient(to bottom, #d4900e, #8a5a08)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 0 12px rgba(212,144,14,0.6)",
            }} />
          </div>

          {/* Knob — larger so rotation is readable */}
          <div
            ref={knobRef}
            style={{
              position: "absolute", right: 28, top: "50%",
              transform: "translateY(-50%)",
              width: 20, height: 20, borderRadius: "50%",
              background: "radial-gradient(circle at 38% 32%, #f8d070 0%, #c8860a 50%, #7a4e08 100%)",
              boxShadow: "0 3px 10px rgba(0,0,0,0.8), inset -3px -3px 5px rgba(0,0,0,0.45), 0 0 20px rgba(212,144,14,0.5)",
              transformOrigin: "center center",
            }}
          />
        </div>
      </div>

      {/* ── Label ── */}
      <p
        ref={labelRef}
        style={{
          position: "absolute",
          top: "calc(50% + 250px)",
          margin: 0,
          fontFamily: "'Playfair Display', serif",
          fontSize: 14, fontStyle: "italic",
          letterSpacing: "0.07em",
          color: "rgba(210,190,160,0.45)",
          userSelect: "none",
          opacity: 0,
          zIndex: 4,
        }}
      >
        this way to the library…
      </p>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   Link
───────────────────────────────────────────────────────────────────────────── */
const BlogPortalLink = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Link
        to="/blog"
        className={className}
        aria-label="Go to blog"
        onClick={(e) => { e.preventDefault(); if (!open) setOpen(true); }}
      >
        Blog ↗
      </Link>
      {typeof document !== "undefined" && open &&
        createPortal(
          <PortalOverlay onDone={() => navigate("/blog")} />,
          document.body
        )
      }
    </>
  );
};

export default BlogPortalLink;
