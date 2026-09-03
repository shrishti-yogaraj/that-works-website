import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import "@/styles/pages/join.css";
import "@/styles/pages/join-projects.css";

// ─── Project data ─────────────────────────────────────────────────────────────

const projects = [
  {
    slug: "brand-audit",
    title: "Brand Audit & Positioning Report",
    function: "Marketing",
    tagline: "Audit a B2B brand end-to-end and produce a documented positioning framework with strategic recommendations.",
    paid: false,
  },
  {
    slug: "financial-model",
    title: "Financial Model & 12-Month Forecast",
    function: "Finance Ops",
    tagline: "Build a working financial model and forward-looking forecast for an early-stage B2B company.",
    paid: false,
  },
  {
    slug: "competitive-intelligence",
    title: "Competitive Intelligence Report",
    function: "Research",
    tagline: "Map a competitive landscape and deliver a structured intelligence brief with clear strategic implications.",
    paid: false,
  },
  {
    slug: "content-strategy",
    title: "Content Strategy & Editorial Plan",
    function: "Content",
    tagline: "Build a six-month content strategy including channel mix, topic clusters, and a ready-to-execute editorial calendar.",
    paid: false,
  },
];

// ─── How it works phases ──────────────────────────────────────────────────────

const phases = [
  {
    label: "Duration",
    body: "~12 weeks per project.",
  },
  {
    label: "Format",
    body: "Remote. Flexible hours. The weekly sync with your project lead is the one non-negotiable.",
  },
  {
    label: "Week 1",
    body: "Onboarding. You get briefed on the project scope, then you write your own project brief: what you'll build, how you'll approach it, what success looks like. We sign off on it together.",
  },
  {
    label: "Weeks 2–10",
    body: "Execution. You own the work. Your project lead is there for unblocking and feedback, not hand-holding. Weekly check-in to keep things on track.",
  },
  {
    label: "Weeks 11–12",
    body: "Documentation, polish, and a final presentation of your deliverable. You leave with something you can actually show.",
  },
  {
    label: "On completion",
    body: "Certificate of internship specifying your project scope and outcome. References available on request, based on quality of delivery. Eligibility for paid project work.",
  },
];

// ─── Project card ─────────────────────────────────────────────────────────────

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <Link to={`/join/projects/${project.slug}`} className="jp-card">
    <div className="jp-card-function">{project.function}</div>
    <div className="jp-card-title">{project.title}</div>
    <p className="jp-card-tagline">{project.tagline}</p>
    <div className="jp-card-footer">
      <span className={`jp-card-tag${project.paid ? " jp-card-tag--paid" : ""}`}>
        {project.paid ? "Paid" : "Unpaid"}
      </span>
      <span className="jp-card-cta">View project →</span>
    </div>
  </Link>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const JoinProjects = () => (
  <>
    <SEOHead
      title="Project Internships — That Works"
      description="12-week project-based internships at That Works Co. Build one thing, start to finish, and leave with a defined outcome you own."
      canonical="/join/projects"
    />

    <div className="join-illus-layer jp-illus-layer" aria-hidden="true">
      <img src="/illustrations/woman-monitor.png" className="join-illus join-illus--woman" alt="" />
      <img src="/illustrations/desk-setup.png" className="join-illus join-illus--desk" alt="" />

      <span className="j2-star" style={{ right: "12vw", top:  80, fontSize: 60, color: "#c4b5fd" }}>✦</span>
      <span className="j2-star" style={{ right: "24vw", top: 200, fontSize: 92                   }}>✦</span>
      <span className="j2-star" style={{ right:  "8vw", top: 350, fontSize: 48, color: "#fbbf24" }}>✦</span>
      <span className="j2-star" style={{ left:   "7vw", top: 835, fontSize: 72, color: "#ff5c00" }}>✦</span>
      <span className="j2-star" style={{ left:  "20vw", top: 880, fontSize: 44                   }}>✦</span>
    </div>

    <div className="jp-page">
      <Nav variant="light" hideBooking />

      {/* ── Hero ── */}
      <section className="join-hero">
        <div className="join-hero-inner">
          <div className="join-eyebrow">Project Internships</div>
          <h1 className="join-headline">
            One project.<br />12 weeks.<br /><em>Your name on it.</em>
          </h1>
          <p className="join-sub">
            We built project internships because most internships don't give you anything concrete to show for your time.
            Here, you spend 12 weeks building one thing, start to finish, with a defined deliverable, a real deadline,
            and <strong>an outcome you actually own.</strong>
          </p>
        </div>
      </section>

      {/* ── Gating note ── */}
      <section className="jp-gate">
        <div className="jp-gate-inner">
          <p className="jp-gate-text">
            All project internships listed below are <strong>unpaid.</strong> Paid project opportunities are available exclusively to people who have previously completed a project internship with us, or have worked with us in any capacity. No exceptions.
          </p>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="jp-how">
        <div className="join-section-label">How it works</div>
        <div className="jp-phases">
          {phases.map((phase) => (
            <div key={phase.label} className="jp-phase">
              <div className="jp-phase-label">{phase.label}</div>
              <p className="jp-phase-body">{phase.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Project listings — full width ── */}
      <section className="jp-listings">
        <div className="jp-listings-header">
          <div className="jp-listings-label">Open projects</div>
        </div>
        <div className="jp-grid">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <p className="jp-listings-note">More projects are added as they open up. Check back.</p>
      </section>
    </div>

    <Footer />
  </>
);

export default JoinProjects;
