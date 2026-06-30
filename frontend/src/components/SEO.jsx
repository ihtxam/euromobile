import { Helmet } from "react-helmet-async";

const SITE = "Euro Mobile & Computer";
const ORIGIN = "https://euromobilecomputer.co.uk";

// LocalBusiness structured data — used on the homepage / globally
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE,
  description:
    "Mobile phone, computer, laptop and tablet repair shop in Burnley. Screen replacement, battery, data recovery and unlocking — in-store and nationwide mail-in repairs.",
  image: `${ORIGIN}/logo512.png`,
  url: ORIGIN,
  telephone: "+441282761818",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "60 Keirby Walk",
    addressLocality: "Burnley",
    postalCode: "BB11 2DE",
    addressRegion: "Lancashire",
    addressCountry: "GB",
  },
  areaServed: [
    "Burnley", "Nelson", "Brierfield", "Padiham", "Hapton", "Colne", "Accrington",
    "Great Harwood", "Whalley", "Rawtenstall", "Clitheroe", "Barnoldswick", "Bacup",
    "Todmorden", "Blackburn", "Darwen", "Lancashire",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
};

/**
 * Reusable SEO component (react-helmet-async).
 * Injects a unique <title>, <meta name="description">, canonical and Open Graph
 * tags per page, plus optional JSON-LD structured data.
 */
export function SEO({ title, description, canonical, jsonLd }) {
  const fullTitle = title.includes("Euro Mobile") ? title : `${title} | ${SITE}`;
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const url = canonical || `${ORIGIN}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
