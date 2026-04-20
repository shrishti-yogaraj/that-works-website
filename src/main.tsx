import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import sanityPostsRaw from "./data/sanityPosts.json";

const activePosts = sanityPostsRaw as Array<{ slug: string; title: string; excerpt: string; publishedAt: string; featured?: boolean }>;

/* Global: variables, fonts, base typography, shared utilities */
import "./styles/global.css";

/* Components */
import "./styles/components/nav.css";
import "./styles/components/footer.css";
import "./styles/components/booking-popup.css";

/* Pages */
import "./styles/pages/index.css";
import "./styles/pages/book-a-call.css";
import "./styles/pages/blog.css";
import "./styles/pages/blogpost.css";
import "./styles/pages/branding.css";
import "./styles/pages/lead-gen.css";
import "./styles/pages/services.css";
import "./styles/pages/approach.css";
import "./styles/pages/marketing-os.css";
import "./styles/pages/faq.css";
import "./styles/pages/hub.css";
import "./styles/pages/dissection.css";
import "./styles/pages/lab-item.css";
import "./styles/pages/arsenal-item.css";

const BASE = "https://thatworksco.com";
const OG_IMG = `${BASE}/logo.svg`;

// ─── Per-route meta definitions ──────────────────────────────────────────────

interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

const staticMeta: Record<string, RouteMeta> = {
  "/": {
    title: "High Performance GTM Systems for B2B — That Works",
    description:
      "We design and implement full-funnel marketing infrastructure for B2B companies. Strategy, infrastructure, execution — designed, implemented, yours forever.",
    canonical: `${BASE}/`,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
          { "@type": "Service", position: 1, provider: { "@type": "Organization", name: "That Works" }, name: "Brand System & Positioning", description: "We build the whole brand system — identity, positioning, voice and a full message bank — and hand it over.", url: `${BASE}/services/branding` },
          { "@type": "Service", position: 2, provider: { "@type": "Organization", name: "That Works" }, name: "Inbound Marketing Infrastructure", description: "An inbound system that attracts the right buyers, captures them, and moves them toward a conversation.", url: `${BASE}/services/inbound` },
          { "@type": "Service", position: 3, provider: { "@type": "Organization", name: "That Works" }, name: "B2B Lead Generation System", description: "A custom-built lead generation engine that scrapes, enriches, researches and delivers fully personalised outreach at scale.", url: `${BASE}/services/lead-gen` },
          { "@type": "Service", position: 4, provider: { "@type": "Organization", name: "That Works" }, name: "Customer Retention System", description: "Systems that keep customers engaged, equip your sales team to close, and turn happy customers into your best growth channel.", url: `${BASE}/services/retention` },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What does That Works do?", acceptedAnswer: { "@type": "Answer", text: "That Works builds full-funnel GTM and lead generation systems for B2B companies — designed, implemented, and handed over to you." } },
          { "@type": "Question", name: "Who is That Works for?", acceptedAnswer: { "@type": "Answer", text: "We work with B2B companies from 0 to 1 through to scale — typically founders and marketing leads who need systems, not just strategy." } },
          { "@type": "Question", name: "How do I get started?", acceptedAnswer: { "@type": "Answer", text: "Book a 20-minute diagnostic call at thatworksco.com. We'll figure out where you are and what you need." } },
        ],
      },
    ],
  },
  "/approach": {
    title: "How It Works — Strategy, Infrastructure & Handover — That Works",
    description: "Strategy. Infrastructure. Execution. Handed over. We take care of the whole thing and leave you with a marketing function that runs without us.",
    canonical: `${BASE}/approach`,
    jsonLd: { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "How It Works", item: `${BASE}/approach` }] },
  },
  "/about": {
    title: "About — That Works",
    description: "Learn about That Works — the team behind high performance GTM systems for B2B companies. Strategy, infrastructure, execution and handover.",
    canonical: `${BASE}/about`,
    jsonLd: { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "About", item: `${BASE}/about` }] },
  },
  "/contact": {
    title: "Contact — That Works",
    description: "Get in touch with That Works. We design and implement high performance GTM systems for B2B companies. Let's talk about what you need.",
    canonical: `${BASE}/contact`,
    jsonLd: { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE}/contact` }] },
  },
  "/services": {
    title: "GTM Services — Find Your Entry Point — That Works",
    description: "Two ways in. One outcome: a marketing function that runs without us. Choose Marketing OS for your growth stage, or a standalone specialist service.",
    canonical: `${BASE}/services`,
    jsonLd: { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` }] },
  },
  "/services/lead-gen": {
    title: "B2B Lead Generation Systems — That Works",
    description: "A custom-built lead generation engine that scrapes, enriches, researches and delivers fully personalised outreach at scale, without your team lifting a finger.",
    canonical: `${BASE}/services/lead-gen`,
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "B2B Lead Generation System", serviceType: "Lead Generation", provider: { "@type": "Organization", name: "That Works", url: BASE }, description: "A custom-built lead generation engine that scrapes, enriches, researches and delivers fully personalised outreach at scale.", url: `${BASE}/services/lead-gen` },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` }, { "@type": "ListItem", position: 3, name: "Lead Generation", item: `${BASE}/services/lead-gen` }] },
    ],
  },
  "/services/inbound": {
    title: "Inbound Marketing Infrastructure — That Works",
    description: "The best leads find you. We build inbound as infrastructure — a system that attracts the right buyers, captures them, and moves them toward a conversation.",
    canonical: `${BASE}/services/inbound`,
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "Inbound Marketing Infrastructure", serviceType: "Inbound Marketing", provider: { "@type": "Organization", name: "That Works", url: BASE }, description: "An inbound system that attracts the right buyers, captures them, and moves them toward a conversation without your team having to chase.", url: `${BASE}/services/inbound` },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` }, { "@type": "ListItem", position: 3, name: "Inbound Marketing", item: `${BASE}/services/inbound` }] },
    ],
  },
  "/services/branding": {
    title: "Brand System & Positioning — That Works",
    description: "Your brand. Built to last. We build the whole brand system — identity, positioning, voice and a full message bank — and hand it over so it runs without us.",
    canonical: `${BASE}/services/branding`,
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "Brand System & Positioning", serviceType: "Branding", provider: { "@type": "Organization", name: "That Works", url: BASE }, description: "We build the whole brand system — identity, positioning, voice and a full message bank — handed over to you.", url: `${BASE}/services/branding` },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` }, { "@type": "ListItem", position: 3, name: "Branding", item: `${BASE}/services/branding` }] },
    ],
  },
  "/services/retention": {
    title: "Customer Retention Systems — That Works",
    description: "Acquisition gets the credit. Retention builds the business. We design the systems that keep customers engaged, equip your sales team to close, and drive net revenue retention.",
    canonical: `${BASE}/services/retention`,
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "Customer Retention System", serviceType: "Retention Marketing", provider: { "@type": "Organization", name: "That Works", url: BASE }, description: "Systems that keep customers engaged, equip your sales team to close, and turn happy customers into your best growth channel.", url: `${BASE}/services/retention` },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` }, { "@type": "ListItem", position: 3, name: "Retention", item: `${BASE}/services/retention` }] },
    ],
  },
  "/services/marketing-os/zero-to-one": {
    title: "Marketing OS: Zero to One — Build Your First GTM Engine — That Works",
    description: "Building your first marketing engine. ICP, positioning, CRM setup and a 90-day roadmap — built for founders with a product ready to sell but zero marketing infrastructure.",
    canonical: `${BASE}/services/marketing-os/zero-to-one`,
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "Marketing OS: Zero to One", serviceType: "GTM System Build", provider: { "@type": "Organization", name: "That Works", url: BASE }, description: "Building your first marketing engine from scratch — ICP, positioning, CRM setup, and a 90-day roadmap.", url: `${BASE}/services/marketing-os/zero-to-one` },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` }, { "@type": "ListItem", position: 3, name: "Marketing OS: Zero to One", item: `${BASE}/services/marketing-os/zero-to-one` }] },
    ],
  },
  "/services/marketing-os/friction": {
    title: "Marketing OS: Friction — Fix What's Breaking — That Works",
    description: "Marketing spend up, results flat, pipeline unpredictable? We run a full audit, diagnose exactly where the break is, and rebuild from the ground up.",
    canonical: `${BASE}/services/marketing-os/friction`,
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "Marketing OS: Friction", serviceType: "GTM Audit & Rebuild", provider: { "@type": "Organization", name: "That Works", url: BASE }, description: "Full marketing audit, ICP refinement, attribution framework, and a recovery roadmap for businesses where spend is up but results are flat.", url: `${BASE}/services/marketing-os/friction` },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` }, { "@type": "ListItem", position: 3, name: "Marketing OS: Friction", item: `${BASE}/services/marketing-os/friction` }] },
    ],
  },
  "/services/marketing-os/scale": {
    title: "Marketing OS: Scale — Systemise for Growth — That Works",
    description: "Your team is stretched thin with no clear priority. We streamline operations, eliminate bottlenecks, and build the systems that turn a busy team into a productive one.",
    canonical: `${BASE}/services/marketing-os/scale`,
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "Marketing OS: Scale", serviceType: "Marketing Operations & Systems", provider: { "@type": "Organization", name: "That Works", url: BASE }, description: "Operations audit, prioritisation framework, workflow redesign, and a 90-day scaling roadmap for growing businesses.", url: `${BASE}/services/marketing-os/scale` },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` }, { "@type": "ListItem", position: 3, name: "Marketing OS: Scale", item: `${BASE}/services/marketing-os/scale` }] },
    ],
  },
  "/services/marketing-os/leader": {
    title: "Marketing OS: Leader — Close the Lifecycle Gaps — That Works",
    description: "Established business with invisible churn or stagnating pipeline? We map your full customer lifecycle, identify exactly where customers drop off, and close the gaps.",
    canonical: `${BASE}/services/marketing-os/leader`,
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "Marketing OS: Leader", serviceType: "Customer Lifecycle & Retention", provider: { "@type": "Organization", name: "That Works", url: BASE }, description: "Marketing health diagnostic, customer lifecycle mapping, churn risk identification, and a retention recovery roadmap for established businesses.", url: `${BASE}/services/marketing-os/leader` },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` }, { "@type": "ListItem", position: 3, name: "Marketing OS: Leader", item: `${BASE}/services/marketing-os/leader` }] },
    ],
  },
  "/blog": {
    title: "GTM Insights & Resources — That Works",
    description: "Practical insight on GTM strategy, marketing systems, lead generation, and revenue architecture for B2B companies. Written by practitioners, not theorists.",
    canonical: `${BASE}/blog`,
    jsonLd: { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` }] },
  },
  "/book-a-call": {
    title: "Book a Diagnostic Call — That Works",
    description: "Book a free 20-minute diagnostic call with That Works. We'll figure out exactly where you are, what's breaking, and what you need to build a marketing function that runs.",
    canonical: `${BASE}/book-a-call`,
    jsonLd: { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Book a Call", item: `${BASE}/book-a-call` }] },
  },
};

function getMetaForPath(path: string): RouteMeta | null {
  if (staticMeta[path]) return staticMeta[path];

  // Dynamic blog post routes
  if (path.startsWith("/blog/")) {
    const slug = path.replace("/blog/", "");
    const post = activePosts.find((p) => p.slug === slug);
    if (post) {
      return {
        title: `${post.title} — That Works`,
        description: post.excerpt,
        canonical: `${BASE}/blog/${post.slug}`,
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Organization", name: "That Works" },
            publisher: { "@type": "Organization", name: "That Works", logo: { "@type": "ImageObject", url: `${BASE}/logo.svg` } },
            datePublished: post.publishedAt,
            url: `${BASE}/blog/${post.slug}`,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
            ],
          },
        ],
      };
    }
  }

  return null;
}

function buildHeadTags(meta: RouteMeta): string {
  const esc = (s: string) => s.replace(/"/g, "&quot;");
  const { title, description, canonical, noindex, jsonLd } = meta;
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    noindex ? `<meta name="robots" content="noindex, nofollow">` : null,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:image" content="${OG_IMG}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${OG_IMG}">`,
    ...jsonLdArray.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`),
  ]
    .filter(Boolean)
    .join("\n    ");

  return tags;
}

// ─── SSG route expansion ──────────────────────────────────────────────────────

export const includedRoutes = (paths: string[]) => {
  return paths.flatMap((path) => {
    if (path === "/blog/:slug") {
      return activePosts.map((post) => `/blog/${post.slug}`);
    }
    return [path];
  });
};

// ─── Bootstrap ───────────────────────────────────────────────────────────────

export const createRoot = ViteReactSSG({ routes });
