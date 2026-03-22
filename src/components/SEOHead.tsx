// SEOHead renders null during SSR — meta tags are injected at build time via
// the onPageRendered hook in main.tsx. On the client it uses react-helmet-async
// to keep title/meta in sync after SPA route changes.
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
}

const BASE_URL = "https://thatworksco.com";
const DEFAULT_IMAGE = `${BASE_URL}/logo.svg`;

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  jsonLd,
  noindex = false,
}: SEOHeadProps) => {
  // During SSR, meta is injected by onPageRendered in main.tsx — skip here.
  if (import.meta.env.SSR) return null;

  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullCanonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
