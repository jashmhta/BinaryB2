import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://binarybonds.com'),
  title: {
    default: 'Binary Bonds - Leading Bond Market Specialists | Primary & Secondary Market Solutions',
    template: '%s | Binary Bonds - Strategic Bond Investment Solutions'
  },
  description: 'Binary Bonds, a specialized division of Binary Capital, offers comprehensive bond underwriting, primary market placements, secondary market trading, government securities, and debt capital market solutions for institutional investors, banks, HNIs, mutual funds, and insurance companies across India. SEBI registered, RBI compliant.',
  keywords: [
    // Core Services
    'bond underwriting services India',
    'primary bond market',
    'secondary bond market trading',
    'corporate bond underwriting',
    'government securities trading',
    'debt capital markets India',
    'bond market specialists',
    'institutional bond trading',
    
    // Client Types
    'institutional investors bonds',
    'mutual fund bond services',
    'insurance company bonds',
    'HNI bond investments',
    'bank bond trading',
    'financial institutions bonds',
    
    // Specific Services
    'bond placement services',
    'debt securities underwriting',
    'treasury bonds India',
    'credit rating advisory',
    'bond portfolio management',
    'high yield bonds India',
    'corporate debt structuring',
    'bond market liquidity',
    
    // Regulatory & Compliance
    'SEBI registered bond services',
    'RBI compliant bond trading',
    'regulatory compliance bonds',
    'bond market regulations India',
    
    // Market Segments
    'G-Secs trading',
    'state development loans',
    'municipal bonds India',
    'infrastructure bonds',
    'PSU bonds',
    'private placement bonds',
    
    // Technical
    'bond yield optimization',
    'credit risk assessment',
    'bond pricing strategies',
    'duration management',
    'bond market analysis',
    'fixed income securities',
    
    // Brand
    'Binary Bonds',
    'Binary Capital bonds division',
    'Mumbai bond market',
    'India bond specialists'
  ],
  authors: [{ name: 'Binary Bonds - A Division of Binary Capital' }],
  creator: 'Binary Bonds',
  publisher: 'Binary Capital Advisors LLP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Binary Bonds',
    title: 'Binary Bonds - Strategic Bond Market Solutions',
    description: 'Leading bond market specialists in India. Comprehensive primary & secondary market solutions, bond underwriting, government securities trading, and debt capital market services for institutional investors. ₹2000Cr+ bonds underwritten, 150+ institutional clients.',
    images: [
      {
        url: '/hero-background-bonds.webp',
        width: 1200,
        height: 630,
        alt: 'Binary Bonds - Strategic Bond Market Solutions',
        type: 'image/webp',
      },
      {
        url: '/logo-animation.gif',
        width: 800,
        height: 800,
        alt: 'Binary Bonds Logo',
        type: 'image/gif',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary Bonds - Strategic Bond Market Solutions',
    description: 'Leading bond market specialists in India. ₹2000Cr+ bonds underwritten, 150+ institutional clients. SEBI registered, RBI compliant.',
    images: ['/hero-background-bonds.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: '/',
  },
  category: 'Financial Services',
  classification: 'Bond Market Services',
};

export const serviceMetadata = {
  'corporate-bond-underwriting': {
    title: 'Corporate Bond Underwriting Services - Expert Debt Capital Markets India',
    description: 'Professional corporate bond underwriting with comprehensive risk assessment, optimal pricing strategies, and institutional placement services. Trusted by leading banks, mutual funds, and insurance companies across India. SEBI registered.',
    keywords: 'corporate bond underwriting India, debt securities underwriting, bond structuring services, credit analysis bonds, bond pricing advisory, institutional placement services, corporate debt capital markets',
  },
  'government-securities': {
    title: 'Government Securities Trading - G-Secs, Treasury Bonds & Sovereign Debt India',
    description: 'Expert government securities trading including G-Secs, treasury bonds, state development loans, and sovereign debt. Deep market knowledge, RBI auction expertise, and regulatory compliance. SEBI registered, RBI compliant.',
    keywords: 'government securities India, G-Secs trading, treasury bonds, sovereign debt, state development loans, RBI auctions, government bond trading, PSU bonds',
  },
  'high-yield-bonds': {
    title: 'High-Yield Bonds India - Credit Evaluation & Risk Management Services',
    description: 'Specialized high-yield corporate bond services with enhanced due diligence, comprehensive risk management, and expert credit evaluation. Strategic investor matching and market timing for optimal returns.',
    keywords: 'high-yield bonds India, high yield corporate bonds, credit evaluation services, bond risk mitigation, market timing bonds, investor matching services, below investment grade bonds',
  },
  'bond-portfolio-management': {
    title: 'Bond Portfolio Management - Strategic Optimization & Yield Enhancement India',
    description: 'Strategic bond portfolio management optimizing yield, duration, and credit quality for institutional investors. Comprehensive risk management, rebalancing strategies, and performance monitoring.',
    keywords: 'bond portfolio management India, portfolio optimization bonds, duration management, yield enhancement strategies, bond rebalancing, institutional portfolio services, fixed income management',
  },
  'credit-rating-advisory': {
    title: 'Credit Rating Advisory - Rating Preparation & Agency Coordination India',
    description: 'Comprehensive credit rating advisory to achieve optimal ratings and maintain investor confidence. Expert rating preparation, agency coordination, documentation support, and ongoing rating maintenance.',
    keywords: 'credit rating advisory India, rating preparation services, rating agency coordination, bond documentation support, rating maintenance, credit rating improvement, CRISIL CARE ICRA',
  },
  'secondary-market-trading': {
    title: 'Secondary Market Bond Trading - Liquidity & Competitive Pricing India',
    description: 'Efficient secondary market bond trading providing liquidity, competitive pricing, and market making services. Expert price discovery, settlement services, and portfolio exit strategies.',
    keywords: 'secondary market bond trading India, bond liquidity services, market making bonds, price discovery bonds, bond settlement services, secondary bond market, OTC bond trading',
  },
};
