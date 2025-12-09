export const serviceSchemas = {
  'corporate-bond-underwriting': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Corporate Bond Underwriting",
    "provider": {
      "@type": "FinancialService",
      "name": "Binary Bonds",
      "url": "https://binarybonds.com"
    },
    "description": "Professional corporate bond underwriting services for companies seeking to raise capital through debt securities. We provide comprehensive support including bond structuring, credit analysis, pricing advisory, placement services, and regulatory compliance.",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Corporate Bond Underwriting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bond Structuring",
            "description": "Strategic structuring of bond issues including tenor selection, coupon determination, and covenant design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Credit Analysis",
            "description": "Comprehensive credit analysis including financial modeling and rating agency coordination"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pricing Advisory",
            "description": "Market-driven pricing recommendations based on comparable analysis and investor demand"
          }
        }
      ]
    }
  },
  'government-securities': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Government Securities Trading",
    "provider": {
      "@type": "FinancialService",
      "name": "Binary Bonds",
      "url": "https://binarybonds.com"
    },
    "description": "Expert trading services for government securities including treasury bonds, state development loans, and sovereign debt instruments. We provide competitive pricing, efficient execution, and comprehensive market insights for institutional investors.",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  },
  'high-yield-bonds': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "High-Yield Bonds Investment",
    "provider": {
      "@type": "FinancialService",
      "name": "Binary Bonds",
      "url": "https://binarybonds.com"
    },
    "description": "Specialized services for high-yield corporate bonds offering enhanced returns with comprehensive risk management. We provide detailed credit evaluation, due diligence, and strategic investment advisory for sub-investment grade securities.",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  },
  'bond-portfolio-management': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bond Portfolio Management",
    "provider": {
      "@type": "FinancialService",
      "name": "Binary Bonds",
      "url": "https://binarybonds.com"
    },
    "description": "Strategic bond portfolio management services optimizing yield, duration, and credit quality for institutional investors. We provide portfolio optimization, duration management, yield enhancement, and continuous rebalancing strategies.",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  },
  'credit-rating-advisory': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Credit Rating Advisory",
    "provider": {
      "@type": "FinancialService",
      "name": "Binary Bonds",
      "url": "https://binarybonds.com"
    },
    "description": "Comprehensive credit rating advisory services helping issuers achieve optimal ratings from CRISIL, ICRA, CARE, and other agencies. We provide rating preparation, agency coordination, documentation support, and rating maintenance guidance.",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  },
  'secondary-market-trading': {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Secondary Market Bond Trading",
    "provider": {
      "@type": "FinancialService",
      "name": "Binary Bonds",
      "url": "https://binarybonds.com"
    },
    "description": "Efficient secondary market trading services providing liquidity and competitive pricing for bond portfolios. We offer market making, liquidity provision, price discovery, and seamless settlement services for institutional investors.",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  }
};
