import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useContactPopup } from "@/contexts/ContactPopupContext";

// ─── Hardcoded placeholder data ───────────────────────────────────────────────

const POST = {
  company: "Notion",
  eyebrow: "GTM Infrastructure · Product-Led Growth",
  title: "How Notion Went From $0 to $10B: The GTM Infrastructure Behind the Growth",
  excerpt:
    "Notion didn't grow because they had a great product. They grew because they built a GTM machine that turned every user into a distribution channel. Here's exactly how they did it — and what you can steal from it.",
  stats: [
    { value: "$10B", label: "valuation" },
    { value: "PLG", label: "motion" },
    { value: "4M+", label: "teams" },
    { value: "2024", label: "as of" },
  ],
  readTime: 22,
  publishedAt: "2025-03-14",
  chapters: [
    { id: "icp-problem", title: "The ICP Problem Nobody Talks About" },
    { id: "viral-loops", title: "How They Built Viral Loops Into the Product" },
    { id: "content-engine", title: "The Content Engine Behind the Growth" },
    { id: "sales-motion", title: "Sales Motion: Bottom-Up Enterprise" },
    { id: "steal-this", title: "What You Can Actually Steal From This" },
  ],
};

const RELATED_ARTICLES = [
  {
    tag: "GTM Teardown",
    title: "How Linear Built a $400M Developer Tool With Zero Sales Reps",
    excerpt:
      "Linear's go-to-market is a masterclass in bottoms-up developer adoption. No outbound, no demos, no enterprise decks.",
    slug: "linear-gtm-teardown",
  },
  {
    tag: "Product-Led Growth",
    title: "The Freemium Trap: Why Most PLG Motions Fail at Enterprise",
    excerpt:
      "Converting free users to paid enterprise accounts requires a fundamentally different motion than most PLG companies build.",
    slug: "freemium-trap-plg",
  },
  {
    tag: "GTM Infrastructure",
    title: "Figma's Community-Led Growth: The Playbook Behind the $20B Exit",
    excerpt:
      "Figma built a distribution engine before Adobe came calling. Understanding it reveals why community isn't a marketing tactic — it's infrastructure.",
    slug: "figma-community-led-growth",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const DissectionPost = () => {
  const { openPopup } = useContactPopup();
  const [activeChapter, setActiveChapter] = useState<string>(POST.chapters[0].id);
  const chapterRefs = useRef<Record<string, HTMLElement | null>>({});

  // IntersectionObserver to highlight the current chapter in the nav
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    POST.chapters.forEach(({ id }) => {
      const el = chapterRefs.current[id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveChapter(id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToChapter = (id: string) => {
    chapterRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <>
      <Nav />
      <div className="dis-page">

        {/* ── Banner ────────────────────────────────────────────────────────── */}
        <div className="dis-banner">
          <div className="dis-banner-inner">
            <Link to="/dissections" className="dis-back">← Back to Dissections</Link>

            <div className="dis-banner-eyebrow">{POST.eyebrow}</div>
            <h1 className="dis-company">{POST.company}</h1>
            <p className="dis-banner-title">{POST.title}</p>
            <p className="dis-banner-excerpt">{POST.excerpt}</p>

            <div className="dis-stats-row">
              {POST.stats.map((s) => (
                <div key={s.label} className="dis-stat">
                  <span className="dis-stat-value">{s.value}</span>
                  <span className="dis-stat-label">{s.label}</span>
                </div>
              ))}
              <div className="dis-stat">
                <span className="dis-stat-value">{POST.readTime} min</span>
                <span className="dis-stat-label">read time</span>
              </div>
              <div className="dis-stat">
                <span className="dis-stat-value" style={{ fontSize: "1rem", marginTop: "6px" }}>
                  {formatDate(POST.publishedAt)}
                </span>
                <span className="dis-stat-label">published</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Body ──────────────────────────────────────────────────────────── */}
        <div className="dis-body">

          {/* Chapter nav */}
          <aside>
            <nav className="dis-nav">
              <span className="dis-nav-label">Chapters</span>
              {POST.chapters.map(({ id, title }) => (
                <button
                  key={id}
                  className={`dis-nav-item${activeChapter === id ? " active" : ""}`}
                  onClick={() => scrollToChapter(id)}
                >
                  {title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="dis-content">

            {/* Chapter 1 */}
            <section
              id={POST.chapters[0].id}
              className="dis-chapter"
              ref={(el) => { chapterRefs.current[POST.chapters[0].id] = el; }}
            >
              <h2>{POST.chapters[0].title}</h2>
              <p>
                Most GTM breakdowns of Notion start with the product. "It's so flexible." "You can build anything." But that's not why it spread. Before Notion had 4 million teams, it had a problem that every serious PLG company has to solve: <strong>who, exactly, are they selling to?</strong> The answer isn't as obvious as it sounds when your product can genuinely serve a 22-year-old student and a 5,000-person enterprise in the same week.
              </p>
              <p>
                Notion's early ICP was deceptively narrow. They weren't going after "productivity tool users" — they were going after a specific type of builder: the person who felt constrained by the rigidity of existing tools. Notion's first wave of passionate users were people who had built elaborate systems in Airtable, Roam, or Evernote, hit the walls of those tools, and were looking for something that matched the fluidity of their thinking. This wasn't a demographic. It was a psychographic — and that distinction matters enormously.
              </p>
              <p>
                The ICP problem nobody talks about is the tension between specificity and scale. Go too narrow and you starve the top of the funnel. Go too broad and your messaging becomes noise, your conversion tanks, and your sales team can't close because every prospect is a different conversation. Notion threaded this needle by building for a persona that cut across verticals — the systems thinker who existed in every company, in every industry, at every size. That insight is the bedrock of everything else in their GTM.
              </p>
              <p>
                What made this work in practice was extreme clarity about what the product was <em>not</em>. Notion's early team was ruthless about rejecting features that would appeal to specific enterprise buyers if those features didn't serve the core user. This isn't just product discipline — it's GTM discipline. When you know who you're building for, you know who you're not, and that clarity makes every marketing decision simpler and faster.
              </p>
            </section>

            {/* Chapter 2 */}
            <section
              id={POST.chapters[1].id}
              className="dis-chapter"
              ref={(el) => { chapterRefs.current[POST.chapters[1].id] = el; }}
            >
              <h2>{POST.chapters[1].title}</h2>
              <p>
                Notion's viral loops aren't accidental. They were designed with the same care that most companies put into their core product. The mechanics are deceptively simple: every time someone shares a Notion page, they're not just sharing content — they're creating a surface that shows a non-user exactly what the product looks like and what it's capable of. The shared page is a low-friction demo. No login required to view. No sales pitch. Just the product itself, doing what it does.
              </p>
              <p>
                The second loop is the template gallery. By building a template ecosystem early, Notion turned its power users into a distribution channel. When a designer creates a "Design System Tracker" template and publishes it, they're not just sharing a useful resource — they're pulling every person who downloads that template into the Notion universe. The template creator gets credit. The downloader gets value. Notion gets a new user who arrived with context and intent, not cold. That's a completely different acquisition dynamic than running a LinkedIn ad campaign.
              </p>
              <p>
                The third loop is the one that actually drives enterprise: the team invitation. Unlike most tools where inviting a colleague is a feature, in Notion it's almost inevitable. The product's collaborative nature means that the moment one person in a team starts using Notion seriously, the others get pulled in. <strong>The friction isn't getting people to invite — it's explaining Notion without an invitation.</strong> So the invite becomes the primary acquisition mechanism for workplace users, and Notion designed the onboarding experience to make that invitation feel inevitable rather than coerced.
              </p>
              <p>
                What separates these loops from the viral mechanics of lesser products is that each one delivers genuine value to all parties involved. There's no dark pattern, no forced share to unlock a feature. The virality is a byproduct of the product being useful in a way that inherently involves other people. When you're building GTM infrastructure, that's the benchmark: does sharing feel like a natural extension of getting value, or does it feel like a tax?
              </p>
            </section>

            {/* Chapter 3 */}
            <section
              id={POST.chapters[2].id}
              className="dis-chapter"
              ref={(el) => { chapterRefs.current[POST.chapters[2].id] = el; }}
            >
              <h2>{POST.chapters[2].title}</h2>
              <p>
                Notion's content strategy looks like a blog. From the outside, it's indistinguishable from a hundred other SaaS companies publishing thought leadership. But the mechanics underneath are completely different. Where most companies publish content to generate traffic, Notion publishes content to reinforce identity. Their posts aren't "10 Ways to Be More Productive" — they're explorations of how people think, work, and build systems. The content attracts the psychographic they defined at the ICP level.
              </p>
              <p>
                The template SEO flywheel is what most people miss when they analyse Notion's content engine. Every template in their gallery is a page indexed by Google. Every "Notion template for [use case]" query drives traffic to a page that is simultaneously a content asset and a product demo. At scale, they have thousands of these pages, each one targeting a specific intent, each one converting at a rate that pure blog content never could because the intent is so specific. This isn't content marketing — it's content infrastructure.
              </p>
              <p>
                <strong>The ambassador program completed the engine.</strong> By cultivating a network of Notion power users who created YouTube tutorials, blog posts, and Twitter threads, Notion effectively outsourced the top of their funnel to people who were more credible than any brand voice could be. These ambassadors weren't paid to be enthusiastic — they were genuinely enthusiastic, and Notion gave them access, recognition, and early product features in exchange for content. The result is a content volume and authenticity that no content team could match with headcount alone.
              </p>
              <p>
                The lesson for other GTM teams isn't to replicate the template SEO play or the ambassador program in isolation. It's to understand that Notion's content engine was designed from the beginning as an integrated system where each component reinforced the others. The templates created SEO. The ambassadors created awareness. The blog created identity. None of them worked in isolation — together they created a content moat that would cost competitors years and tens of millions of dollars to replicate.
              </p>
            </section>

            {/* Chapter 4 */}
            <section
              id={POST.chapters[3].id}
              className="dis-chapter"
              ref={(el) => { chapterRefs.current[POST.chapters[3].id] = el; }}
            >
              <h2>{POST.chapters[3].title}</h2>
              <p>
                Notion didn't hire an enterprise sales team and then figure out how to sell to enterprises. They watched enterprises find them, studied why those companies were adopting the product, and then built a sales motion that removed friction from a process that was already happening. This is what bottom-up enterprise sales actually looks like in practice — and it's fundamentally different from the traditional enterprise playbook.
              </p>
              <p>
                The signal Notion tracked religiously was department-level adoption. A single team of 5 people using Notion for internal wikis is an individual account. The same team expanding to 50 people across multiple departments is an enterprise opportunity. Their sales team was configured not to generate this adoption, but to identify when it was already happening and accelerate it. This changes everything about how you hire, how you structure territories, and what "quota" means. You're not hunting — you're harvesting.
              </p>
              <p>
                The enterprise motion also required Notion to build a specific type of product capability that many PLG companies neglect: administrative controls. SSO, SCIM provisioning, granular permissions, audit logs — these aren't features that help the individual user. They're features that allow an IT administrator to approve Notion across the company. Without them, bottom-up adoption hits a ceiling the moment procurement gets involved. Notion understood that <strong>enterprise sales isn't just a GTM motion — it requires product investment in the parts of the product that the buyer uses but the user never sees.</strong>
              </p>
              <p>
                The result is a sales motion where the AE's job is almost entirely about navigating procurement and expanding seats, rather than generating demand or proving value. By the time a deal goes through a formal enterprise sales process, Notion has already proven its value to the people who matter most — the actual users. That's a fundamentally stronger position than leading with a sales deck and a promise.
              </p>
            </section>

            {/* Chapter 5 */}
            <section
              id={POST.chapters[4].id}
              className="dis-chapter"
              ref={(el) => { chapterRefs.current[POST.chapters[4].id] = el; }}
            >
              <h2>{POST.chapters[4].title}</h2>
              <p>
                Most GTM teardowns end with a list of tactics: "build a template gallery," "start an ambassador program," "do PLG." This misses the point entirely. Notion's GTM isn't a list of tactics — it's a system where each component was designed to feed the others. You can't steal the template gallery without also having the ICP clarity that ensures the right templates get created. You can't steal the bottom-up enterprise motion without also having a product that earns individual love before IT scrutiny.
              </p>
              <p>
                What you can steal — and this is genuinely applicable across almost any B2B product — is the sequencing logic. Notion didn't try to go upmarket from day one. They built passionate users first, let those users create content and pull in colleagues, and then showed up when enterprise interest surfaced organically. This is the correct sequence for any company where the product has genuine individual value: get individual love before you pursue institutional revenue. The temptation to reverse this sequence — to go enterprise early because the ACV is higher — is one of the most common and costly mistakes in B2B GTM.
              </p>
              <p>
                <strong>The specific mechanic worth borrowing is the shared artifact as product demo.</strong> In Notion's case it's a shared page. In your product, it might be a shared report, a published dashboard, an exported document, or even an email generated by your tool. The question to ask is: what does a user naturally share with someone outside the product, and how does that shared artifact communicate the product's value without requiring any explanation? If you can answer that question and engineer around it, you have the seed of a distribution engine that compounds over time without proportional cost increases.
              </p>
              <p>
                Finally, the content infrastructure lesson: most companies think about content as a demand generation channel. Notion proved that it can be something more structural — a combination of SEO asset, product demo, and brand signal that works continuously without requiring active campaign management. Building content infrastructure instead of content campaigns takes longer to pay off, but the compounding returns are incomparable. After five years of template SEO, Notion owns search real estate that would cost tens of millions in paid acquisition to replicate. That's not a campaign. That's an asset.
              </p>
            </section>

          </div>
        </div>

        {/* ── Related articles ───────────────────────────────────────────────── */}
        <div className="dis-related">
          <h2>Related Dissections</h2>
          <div className="dis-related-grid">
            {RELATED_ARTICLES.map((a) => (
              <Link key={a.slug} to={`/dissections/${a.slug}`} className="dis-related-card">
                <span className="dis-related-card-tag">{a.tag}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <div className="dis-cta-section">
          <div className="dis-cta-inner">
            <span className="dis-cta-eyebrow">Ready to build?</span>
            <h2>Want to build a GTM motion like this?</h2>
            <p>
              We design and implement GTM infrastructure for B2B companies — the systems, loops, and motions that turn a good product into a growth engine.
            </p>
            <button className="btn-primary" onClick={() => openPopup("dissection-cta")}>
              Book a Diagnostic Call
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DissectionPost;
