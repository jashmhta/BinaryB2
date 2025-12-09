'use client';

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of bonds does Binary Bonds deal in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Binary Bonds specializes in corporate bonds, government securities (G-Secs), treasury bonds, municipal bonds, high-yield bonds, and structured debt instruments. Our expertise covers both primary market underwriting and secondary market trading across all major bond categories in India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum investment amount required for bond investments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our services are primarily designed for institutional investors, HNIs, and corporate treasuries. Minimum investment amounts vary by bond type and issuer, typically starting from ₹1 Crore for corporate bonds and ₹50 Lakhs for government securities. We provide customized solutions based on your investment capacity."
        }
      },
      {
        "@type": "Question",
        "name": "How does the bond underwriting process work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The bond underwriting process at Binary Bonds involves: (1) Initial consultation to understand issuer requirements, (2) Comprehensive credit analysis and rating advisory, (3) Strategic bond structuring and competitive pricing, (4) Complete documentation and regulatory compliance, (5) Targeted marketing to institutional investors, and (6) Successful placement and efficient settlement. The entire process typically takes 4-8 weeks depending on complexity and market conditions."
        }
      },
      {
        "@type": "Question",
        "name": "What are the risks involved in bond investments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bond investments carry several risks including credit risk (issuer default), interest rate risk (price fluctuation with rate changes), liquidity risk (difficulty in selling), and reinvestment risk. Binary Bonds provides comprehensive risk assessment, detailed credit rating analysis, and strategic portfolio diversification to mitigate these risks. Our experienced team continuously monitors market conditions and provides timely advisory to protect your investments."
        }
      },
      {
        "@type": "Question",
        "name": "How does Binary Bonds ensure regulatory compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Binary Bonds operates under strict SEBI and RBI guidelines. We maintain full compliance through regular audits, transparent reporting, proper documentation, rigorous KYC/AML procedures, and dedicated compliance officers. All our transactions are conducted through regulated exchanges and clearing corporations to ensure maximum security and transparency."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between primary and secondary bond markets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The primary bond market involves new bond issuances where Binary Bonds helps companies raise capital through professional underwriting services. The secondary bond market involves trading of existing bonds between investors, providing liquidity and price discovery. We offer comprehensive services in both markets, enabling clients to participate in new issues and efficiently trade existing holdings."
        }
      },
      {
        "@type": "Question",
        "name": "How are bond prices determined in the market?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bond prices are influenced by multiple factors: prevailing interest rates, credit rating of the issuer, time to maturity, liquidity in the market, demand-supply dynamics, and macroeconomic conditions. Binary Bonds' research team provides real-time pricing analysis, market insights, and competitive quotes to help clients make informed investment decisions."
        }
      },
      {
        "@type": "Question",
        "name": "What documentation is required for bond transactions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents for bond transactions include: PAN card, complete KYC documents, bank account details, board resolution (for corporate entities), active demat account, and investment policy (for institutional investors). Our dedicated compliance team guides you through the entire documentation process to ensure smooth and compliant transactions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does settlement take for bond transactions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Government securities typically settle on T+1 basis (next business day), while corporate bonds settle on T+2 basis (two business days after trade). Binary Bonds ensures efficient settlement through our strong relationships with clearing corporations and depositories. Funds are credited to your account immediately upon settlement completion."
        }
      },
      {
        "@type": "Question",
        "name": "Does Binary Bonds provide ongoing portfolio management services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Binary Bonds offers comprehensive bond portfolio management services including regular portfolio reviews, strategic rebalancing, duration management, yield optimization, continuous risk monitoring, and timely market updates. Our dedicated relationship managers provide personalized service and strategic advisory to help you achieve your investment objectives and maximize returns."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
