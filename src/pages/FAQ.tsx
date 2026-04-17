import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import SEOHead from "@/components/SEOHead";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "what-that-works-is",
    heading: "What That Works Actually Is",
    items: [
      {
        q: "What does That Works Co actually do?",
        a: "We build marketing infrastructure for B2B businesses — the strategy, systems, tools, processes, and playbooks that make a marketing function run properly. We're not an agency managing your ongoing execution. We design and build the engine, then hand it over completely. After the engagement, you own everything and you don't need us to run it.",
      },
      {
        q: "Who is That Works built for?",
        a: "B2B SaaS, professional services, and consultancy businesses that are past product-market fit and into early growth — typically 30 to 200 employees, at Seed to Series B. Usually founder-led or with a small marketing team that's under-resourced relative to what the business actually needs.",
      },
      {
        q: "What's the difference between Marketing OS and Point Solutions?",
        a: "Two ways into That Works. Marketing OS is for businesses that know what stage of growth they're at and need the full infrastructure built for that stage. Point Solutions are for businesses that know exactly what gap they need filled — brand, inbound, outbound, or retention — and want that specific system built. Both end with a full handover. Both are one-time builds, not ongoing retainers.",
        aJsx: <>Two ways into That Works. Marketing OS is for businesses that know what stage of growth they're at and need the full infrastructure built for that stage. Point Solutions are for businesses that know exactly what gap they need filled — <Link to="/services/branding">brand</Link>, <Link to="/services/inbound">inbound</Link>, <Link to="/services/lead-gen">outbound</Link>, or <Link to="/services/retention">retention</Link> — and want that specific system built. Both end with a full handover. Both are one-time builds, not ongoing retainers.</>,
      },
      {
        q: "What category does That Works sit in?",
        a: "We call it 0→1 Marketing Infrastructure. It's an emerging category that sits between fractional CMO (advisory, no build) and marketing agency (execution, no foundation). We do the foundational work that makes everything else work — and then we leave.",
        aJsx: <>We call it <Link to="/services/marketing-os/zero-to-one">0→1</Link> Marketing Infrastructure. It's an emerging category that sits between fractional CMO (advisory, no build) and marketing agency (execution, no foundation). We do the foundational work that makes everything else work — and then we leave.</>,
      },
    ],
  },
  {
    id: "the-model",
    heading: "The Model",
    items: [
      {
        q: "How is That Works different from a marketing agency?",
        a: "Agencies optimise for dependency — they need you on retainer to justify their model. We optimise for capability transfer. Our goal is a client who doesn't need us. Every engagement ends with a full handover — the client owns everything we build, and we train their team to run it.",
      },
      {
        q: "How is That Works different from hiring a fractional CMO?",
        a: "A fractional CMO advises. We build. You get a complete, documented marketing system — tools configured, processes written, team trained — not strategic guidance that leaves the moment the contract ends. The output is infrastructure, not insight.",
      },
      {
        q: "Do you work with us ongoing, or is this a one-time engagement?",
        a: "The engagement has a defined end. We're not selling a retainer — we're selling a build. There's an optional Engine Tune-Up retainer for strategic oversight after the engagement closes, but that's your choice, not ours. We design every project to end with you fully capable of running what we've built.",
      },
      {
        q: "What do we actually own at the end of the engagement?",
        a: "Everything. Every document, SOP, playbook, tool setup, and strategy is yours. We don't retain access, we don't lock anything behind a retainer, and you don't need us to run what we've built. It belongs to you the moment we hand it over.",
      },
      {
        q: "What does the handover process look like?",
        a: "The final week of every engagement is dedicated to handover — a working session with your team, full documentation walkthrough, and a 30-day check-in after we're done. You leave knowing how to run everything we've built.",
      },
    ],
  },
  {
    id: "working-with-that-works",
    heading: "Working With That Works",
    items: [
      {
        q: "Do we need a marketing team in place before we start?",
        a: "No. Most clients come to us with no marketing team, or one junior person. We design the system for your current resource level and build in a hiring brief for when you're ready to scale. The system is designed to be operated by junior people once it's built.",
      },
      {
        q: "We have a marketing hire already. Can That Works still help?",
        a: "Yes — and in most cases, the system we build makes that person dramatically more effective. If you have a junior or mid-level marketer with no senior infrastructure behind them, that's exactly who we build for. They get the strategy, tools, processes, and playbooks to execute at a level above their experience.",
      },
      {
        q: "How long does an engagement take?",
        a: "Depending on scope: the Foundation Sprint (0→1) is 4 weeks. The Engine Build is 8 weeks. The Full OS is 12 weeks. Point Solution builds typically run 4–8 weeks depending on complexity. We set a fixed timeline at the start of every engagement.",
      },
      {
        q: "How intensive is this for our team during the engagement?",
        a: "Two working sessions per week is the primary commitment — for the founder or marketing lead. Outside of those sessions, there's async review of deliverables. We do the heavy lifting. We're designed around the reality that you're still running a business while this is happening.",
      },
      {
        q: "We already tried an agency and it didn't work. How is this different?",
        a: "Agencies optimise for dependency — they need you on retainer to justify their model. We optimise for capability transfer. Our goal is a client who doesn't need us. We build things that outlive us. That's not a line — it's the structural logic of how we work.",
      },
    ],
  },
  {
    id: "the-work-itself",
    heading: "The Work Itself",
    items: [
      {
        q: "What's the real cost of not building this?",
        a: "Every month without a marketing foundation is a month of pipeline you can't measure, improve, or replicate. Most of our clients come to us after 6+ months of spending on tactics that didn't compound — ads, freelancers, a hire that didn't work out. The cost isn't just the money. It's the time, the missed quarter, and the investor conversation you weren't ready for.",
      },
      {
        q: "What tools do you use?",
        a: "We design the stack around your situation. Typically: a CRM (HubSpot, Pipedrive, or similar), email sequencing (Instantly, Lemlist, or similar), prospecting data (Apollo, Clay, or similar), content and SEO tooling, and custom-built automation workflows connecting everything. Every tool is set up in your name, paid by you, owned by you.",
      },
      {
        q: "Do you write content and copy, or just build the system?",
        a: "Both, depending on the engagement. We build the system and seed it — the strategy is documented, the first content calendar is built, templates and briefs are created, and in most tiers we produce the first batch of content to demonstrate the standard. After handover, your team runs it.",
      },
      {
        q: "How do you define who we should be targeting?",
        a: "ICP definition is the first thing we do in every engagement — before any system is built. We validate against your existing customers, your market, and your positioning. A system built on a vague ICP produces vague results.",
      },
    ],
  },
  {
    id: "results-and-expectations",
    heading: "Results and Expectations",
    items: [
      {
        q: "How long before we see results?",
        a: "Depends on the channel. Outbound can generate first replies and meetings within 2–6 weeks of go-live. Inbound compounds over 3–6 months. Brand work affects everything downstream over time. We set clear expectations per channel at the start of every engagement.",
      },
      {
        q: "Can you guarantee results?",
        a: "No — and we won't. We deliver the infrastructure, not the results of its use. What we can guarantee is that everything we build is documented, handed over, and built to the standard your team can operate and improve. The results depend on execution, market conditions, and factors outside our control. Anyone who guarantees pipeline numbers is selling you something we're not.",
      },
      {
        q: "What if we're not ready for a full engagement?",
        a: "The Foundation Sprint exists for exactly this situation — 4 weeks, clarity and direction, a documented foundation you can act on immediately. It's also the natural step before a full Engine Build for businesses that want to validate direction before committing to a larger investment.",
      },
    ],
  },
  {
    id: "is-that-works-right-for-us",
    heading: "Is That Works Right For Us?",
    items: [
      {
        q: "What stage should we be at to work with you?",
        a: "Post product-market fit, with early revenue. We're not the right fit for pre-revenue startups — systems and scale are the wrong investment before you've validated the product. If you're at Seed or Series A with traction and a growing team, you're in the right place.",
      },
      {
        q: "What if we already have strong opinions about how marketing should work?",
        a: "We need the mandate to build — or redesign — meaningfully. If there's a senior marketer who's been doing things their way for years and isn't open to structural change, the engagement will be difficult for both sides. We work best with clients who want the foundation rebuilt properly, not clients who want validation for what they're already doing.",
      },
      {
        q: "How do we get started?",
        a: "Book a discovery call. No pitch, no deck — just a conversation to understand where you are, what's breaking, and whether That Works is the right fit. If it is, we'll tell you which engagement makes sense and what the next step looks like.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sections.flatMap(({ items }) =>
    items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    }))
  ),
};

const FAQ = () => {
  const { openPopup } = useContactPopup();
  const [openKey, setOpenKey] = useState<string | null>(null);
  return (
    <>
      <SEOHead
        title="Frequently Asked Questions — That Works"
        description="Everything you need to know about That Works — what we do, how the model works, who we're built for, and what to expect from an engagement."
        canonical="/faq"
      />
      <Nav />

      {/* HERO */}
      <section className="faq-hero">
        <div className="faq-hero-inner">
          <div className="section-label">FAQ</div>
          <h1>Everything you need to know.</h1>
          <p className="faq-hero-sub">
            What That Works is, how the model works, who it's for, and what to
            expect. If your question isn't here, <button className="faq-inline-cta" onClick={() => openPopup("faq")}>book a call</button> and we'll answer it directly.
          </p>
        </div>
      </section>

      {/* NAV ANCHORS */}
      <nav className="faq-section-nav" aria-label="FAQ sections">
        <div className="faq-section-nav-inner">
          {sections.map(({ id, heading }) => (
            <a key={id} href={`#${id}`} className="faq-section-pill">{heading}</a>
          ))}
        </div>
      </nav>

      {/* SECTIONS */}
      <div className="faq-body">
        {sections.map(({ id, heading, items }) => (
          <section key={id} id={id} className="faq-section">
            <div className="faq-section-inner">
              <h2 className="faq-section-heading">{heading}</h2>
              <div className="faq-list">
                {items.map((item) => (
                  <div key={item.q} className={`faq-item${openKey === item.q ? " faq-item--open" : ""}`}>
                    <button
                      className="faq-trigger"
                      onClick={() => setOpenKey(openKey === item.q ? null : item.q)}
                      aria-expanded={openKey === item.q}
                    >
                      <span>{item.q}</span>
                      <span className="faq-trigger-icon" aria-hidden="true">{openKey === item.q ? "−" : "+"}</span>
                    </button>
                    {openKey === item.q && <p className="faq-answer">{(item as any).aJsx ?? item.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="faq-cta">
        <div className="faq-cta-inner">
          <h2>Still have questions?</h2>
          <p>Book a 20-minute discovery call. No pitch — just a conversation.</p>
          <button className="btn-primary" onClick={() => openPopup("faq")}>Book a Discovery Call</button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default FAQ;
