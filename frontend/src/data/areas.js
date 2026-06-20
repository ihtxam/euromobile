// Towns & areas within ~15 miles of the Burnley shop — used for local SEO pages
export const areas = [
  { slug: "nelson", name: "Nelson", county: "Lancashire", distance: 3 },
  { slug: "brierfield", name: "Brierfield", county: "Lancashire", distance: 2 },
  { slug: "padiham", name: "Padiham", county: "Lancashire", distance: 3 },
  { slug: "hapton", name: "Hapton", county: "Lancashire", distance: 4 },
  { slug: "colne", name: "Colne", county: "Lancashire", distance: 6 },
  { slug: "accrington", name: "Accrington", county: "Lancashire", distance: 6 },
  { slug: "great-harwood", name: "Great Harwood", county: "Lancashire", distance: 7 },
  { slug: "whalley", name: "Whalley", county: "Lancashire", distance: 7 },
  { slug: "rawtenstall", name: "Rawtenstall", county: "Lancashire", distance: 8 },
  { slug: "clitheroe", name: "Clitheroe", county: "Lancashire", distance: 9 },
  { slug: "barnoldswick", name: "Barnoldswick", county: "Lancashire", distance: 9 },
  { slug: "bacup", name: "Bacup", county: "Lancashire", distance: 9 },
  { slug: "todmorden", name: "Todmorden", county: "West Yorkshire", distance: 9 },
  { slug: "blackburn", name: "Blackburn", county: "Lancashire", distance: 11 },
  { slug: "darwen", name: "Darwen", county: "Lancashire", distance: 13 },
];

// short, comma-friendly list for inline SEO text
export const areaNames = areas.map((a) => a.name);

export const getArea = (slug) => areas.find((a) => a.slug === slug);
