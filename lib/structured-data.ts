import { Organization, WebSite, BreadcrumbList, Service, WithContext } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Binary Bonds',
  alternateName: 'Binary Capital - Bonds Division',
  url: 'https://binarybonds.com',
  logo: 'https://binarybonds.com/logo.png',
  image: 'https://binarybonds.com/hero-background-bonds.webp',
  description: 'Leading bond market specialists providing expert underwriting, government securities trading, and debt capital market solutions for institutional investors across India. Over ₹2,000 crore in bonds underwritten with 150+ institutional clients.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2045, 2nd Floor, Spaces Adani Height, Andheri West',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400053',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '19.1197',
    longitude: '72.8464',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-7738056127',
    contactType: 'Customer Service',
    email: 'sales@binarycapital.in',
    availableLanguage: ['English', 'Hindi'],
    areaServed: 'IN',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  priceRange: '₹₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
  },
  sameAs: [
    // Add social media profiles here when available
  ],
};

export const websiteSchema: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Binary Bonds',
  url: 'https://binarybonds.com',
  description: 'Strategic bond market solutions for institutional investors',
  publisher: {
    '@type': 'Organization',
    name: 'Binary Capital',
  },
};

export function createBreadcrumbSchema(items: { name: string; url: string }[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Binary Bonds',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    url: service.url,
  };
}
