/**
 * AEO-Enhanced Schema Markup
 * Optimized for AI engines to understand and extract information
 */

import { WithContext } from 'schema-dts';

// Enhanced FAQ with detailed answers for AI
export const aeoFAQSchema: WithContext<any> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Binary Bonds and what services do they provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Binary Bonds is a specialized division of Binary Capital that focuses exclusively on primary and secondary bond markets in India. They provide comprehensive bond underwriting services, government securities trading, and debt capital market solutions for institutional investors, banks, HNIs, mutual funds, and insurance companies. They have successfully underwritten over ₹2,000 crore in bonds and serve more than 150 institutional clients across India. Their services include Corporate Bond Underwriting, Government Securities Trading, High-Yield Bonds, Bond Portfolio Management, Credit Rating Advisory, and Secondary Market Trading.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to invest in bonds through Binary Bonds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To invest in bonds through Binary Bonds, follow these steps: Step 1 (1-2 days): Contact their relationship manager at +91-7738056127 or sales@binarycapital.in to discuss your investment objectives and risk appetite. Step 2 (2-3 days): Their research team analyzes market conditions and identifies suitable bond opportunities with detailed credit assessments. Step 3 (3-5 days): Receive comprehensive proposals with pricing, terms, and risk analysis, then complete documentation with their compliance team. Step 4 (1-2 days): Execute transactions with transparent pricing through their trading desk. Step 5 (Ongoing): Receive continuous portfolio monitoring and market updates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between bonds and equity investments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bonds are debt instruments where you lend money to the issuer and receive fixed interest payments, while equities represent ownership in a company. Key differences: (1) Risk: Bonds are less risky with predictable returns; equities are more volatile. (2) Returns: Bonds offer fixed interest; equities offer potential capital appreciation. (3) Priority: In liquidation, bondholders are paid before equity shareholders. (4) Income: Bonds provide regular coupon payments; equities may pay dividends. Bonds are suitable for conservative investors seeking stable income, while equities suit those seeking growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum investment amount for bonds in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum investment amount for bonds in India varies by type: Corporate bonds typically start from ₹10,000 to ₹1 lakh per bond, while government securities (G-Secs) may have different minimums depending on the issue. For institutional investors, the amounts are higher. Binary Bonds helps clients find suitable bonds based on their investment capacity and financial goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are bond investments safe in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bond safety depends on the credit quality of the issuer. Government securities (G-Secs) are backed by the Government of India and considered virtually risk-free. Corporate bonds carry varying levels of risk based on the issuer\'s credit rating from agencies like CRISIL, ICRA, and CARE. AAA and AA-rated bonds are highly safe with strong payment guarantees, while lower-rated bonds offer higher yields but increased risk. Binary Bonds conducts comprehensive credit analysis and risk assessment, recommending highly-rated bonds to ensure timely interest payments and principal repayment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can NRIs invest in Indian bonds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, NRIs (Non-Resident Indians) can invest in certain Indian bonds subject to RBI regulations. NRIs can invest in government securities, corporate bonds, and other debt instruments through their NRE (Non-Resident External) or NRO (Non-Resident Ordinary) accounts. Binary Bonds provides specialized services for NRI investors, including guidance on eligible securities, repatriation rules, tax implications, and compliance requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the role of credit rating in bond investments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Credit ratings assess the creditworthiness of bond issuers and the likelihood of timely interest and principal payments. In India, agencies like CRISIL, ICRA, and CARE provide ratings from AAA (highest safety) to D (default). Higher-rated bonds (AAA, AA) offer lower yields but greater safety, while lower-rated bonds offer higher yields with increased risk. Binary Bonds provides credit rating advisory services to help issuers achieve optimal ratings and guides investors in selecting appropriately-rated bonds based on their risk appetite.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is bond yield calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bond yield represents the return an investor earns from a bond. The main types are: (1) Current Yield = (Annual Coupon Payment / Current Market Price) × 100. (2) Yield to Maturity (YTM): Total return if held until maturity, considering coupon payments and capital gain/loss. (3) Yield to Call (YTC): Return if the bond is called before maturity. Bond yields move inversely to prices: when prices rise, yields fall, and vice versa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I sell my bonds before maturity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, bonds can be sold in the secondary market before maturity. Binary Bonds provides secondary market trading services with competitive pricing and liquidity. However, the selling price may differ from your purchase price based on market conditions, interest rate movements, and credit quality changes. The secondary market allows investors to exit their positions when needed, though liquidity varies by bond type and issuer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between government bonds and corporate bonds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Government bonds (G-Secs) are issued by the Government of India and considered virtually risk-free with lower yields, typically 6-8% annually. They are backed by the sovereign guarantee. Corporate bonds are issued by companies, offer higher yields (8-12% or more) to compensate for credit risk, and are rated by credit rating agencies like CRISIL, ICRA, and CARE. Corporate bonds carry issuer-specific risk but provide better returns. Binary Bonds provides expertise in both segments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I open a Demat account for bond investments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Binary Bonds partners with The Federal Bank Limited for Demat account services. You can open an account by completing the KYC process digitally, which typically takes 2-3 business days. Required documents include PAN card, Aadhaar card, address proof, bank account details, and photograph. The process involves online document upload and video verification. Binary Bonds team assists with the entire account opening process.',
      },
    },
  ],
};

// Speakable content for voice assistants
export const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.aeo-speakable', 'h1', 'h2', '.key-fact'],
  },
};

// How-To Schema for process-based queries
export const investmentProcessSchema: WithContext<any> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Invest in Bonds Through Binary Bonds',
  description: 'A step-by-step guide to investing in bonds through Binary Bonds, India\'s leading bond market specialist.',
  totalTime: 'P12D',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    value: '10000',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Initial Consultation',
      text: 'Contact Binary Bonds relationship manager to discuss your investment objectives, risk appetite, and portfolio requirements. Call +91-7738056127 or email sales@binarycapital.in.',
      url: 'https://binarybonds.com/#contact',
      estimatedTime: 'P2D',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Market Analysis',
      text: 'Binary Bonds research team analyzes market conditions, identifies suitable bond opportunities, and provides detailed credit assessments tailored to your investment profile.',
      estimatedTime: 'P3D',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Proposal & Documentation',
      text: 'Receive comprehensive proposals with pricing, terms, and risk analysis. Complete necessary KYC documentation with Binary Bonds compliance team.',
      estimatedTime: 'P5D',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Transaction Execution',
      text: 'Execute bond transactions with transparent pricing and efficient settlement through Binary Bonds trading desk. Receive confirmation and bond allocation.',
      estimatedTime: 'P2D',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Ongoing Portfolio Management',
      text: 'Receive continuous portfolio monitoring, regular market updates, and dedicated relationship management from Binary Bonds team.',
      estimatedTime: 'Ongoing',
    },
  ],
};

// Service-specific schemas with detailed information
export const servicesSchema = {
  corporateBondUnderwriting: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Corporate Bond Underwriting Services',
    description: 'Professional corporate bond underwriting with comprehensive risk assessment, optimal pricing strategies, and institutional placement services. Trusted by leading banks, mutual funds, and insurance companies across India.',
    provider: {
      '@type': 'FinancialService',
      name: 'Binary Bonds',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: 'Bond Underwriting',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
      },
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Institutional Investors, Banks, Mutual Funds, Insurance Companies',
    },
  },
  
  governmentSecurities: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Government Securities Trading (G-Secs)',
    description: 'Expert government securities trading including G-Secs, treasury bonds, state development loans, and sovereign debt. Deep market knowledge, RBI auction expertise, and regulatory compliance.',
    provider: {
      '@type': 'FinancialService',
      name: 'Binary Bonds',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: 'Government Securities Trading',
  },
};

// Knowledge Graph data for AI understanding
export const knowledgeGraphData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FinancialService',
      '@id': 'https://binarybonds.com/#organization',
      name: 'Binary Bonds',
      alternateName: 'Binary Capital - Bonds Division',
      description: 'Leading bond market specialists in India providing comprehensive primary and secondary market solutions, bond underwriting, and debt capital market services.',
      url: 'https://binarybonds.com',
      logo: 'https://binarybonds.com/logo.png',
      image: 'https://binarybonds.com/hero-background-bonds.webp',
      telephone: '+91-7738056127',
      email: 'sales@binarycapital.in',
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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Bond Market Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Corporate Bond Underwriting',
              description: 'Professional underwriting services for corporate debt securities',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Government Securities Trading',
              description: 'Expert handling of G-Secs and treasury securities',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Bond Portfolio Management',
              description: 'Strategic portfolio optimization for institutional investors',
            },
          },
        ],
      },
      knowsAbout: [
        'Bond Underwriting',
        'Government Securities',
        'Corporate Bonds',
        'Debt Capital Markets',
        'Credit Rating',
        'Fixed Income Securities',
        'Primary Bond Market',
        'Secondary Bond Market',
        'G-Secs Trading',
        'High-Yield Bonds',
      ],
    },
  ],
};
