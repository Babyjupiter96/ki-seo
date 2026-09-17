export const siteConfig = {
  name: "Ki",
  fullName: "Ki — SEO & Digital Growth",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.trustkiseo.com",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
  realEstateUrl: process.env.NEXT_PUBLIC_REAL_ESTATE_URL ?? "https://www.trustki.com",
  description:
    "Ki builds the search visibility that turns local businesses into the obvious choice — technical SEO, local SEO, Google Business Profile optimization, and conversion-focused websites.",
  shortDescription: "SEO and digital growth, engineered — not guessed at.",
  locale: "en_US",
  keywords: [
    "local SEO",
    "SEO agency",
    "Google Business Profile optimization",
    "organic lead generation",
    "technical SEO",
    "website optimization",
  ],
  contact: {
    email: "hello@trustki.com",
    phone: "+1 (000) 000-0000",
  },
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
] as const;
