import { FAQPage, WithContext } from 'schema-dts';

export const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are Bonds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bonds are debt instruments issued by corporations, governments, or other entities to raise capital. When you invest in bonds, you are essentially lending money to the issuer in exchange for periodic interest payments and the return of principal at maturity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Bond investment different from Equity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bonds offer fixed income through regular interest payments and return of principal at maturity, making them less volatile than equities. Equity investments represent ownership in a company with potential for capital appreciation but higher risk. Bonds provide predictable returns while equities offer growth potential.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Mutual Funds and Bonds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bonds are direct debt investments with fixed returns and maturity dates, while mutual funds pool money from multiple investors to invest in a diversified portfolio of securities. Bonds offer predictable income, whereas mutual funds provide professional management and diversification but with variable returns.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum amount required to invest in Bonds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum investment amount varies by bond type and issuer. Corporate bonds typically start from ₹10,000 to ₹1 lakh, while government securities may have different minimums. Contact Binary Bonds for specific investment requirements based on your portfolio needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I sell my Bonds before maturity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, bonds can be sold in the secondary market before maturity. Binary Bonds provides secondary market trading services with competitive pricing and liquidity. However, the selling price may differ from your purchase price based on market conditions and interest rate movements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Bond investments safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bond safety depends on the credit quality of the issuer. Government securities are considered the safest, while corporate bonds carry varying levels of risk based on the issuer\'s credit rating. Binary Bonds conducts comprehensive credit analysis and risk assessment to help clients make informed investment decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Government Bonds and Corporate Bonds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Government bonds (G-Secs) are issued by the government and considered virtually risk-free with lower yields. Corporate bonds are issued by companies, offer higher yields to compensate for credit risk, and are rated by credit rating agencies. Binary Bonds provides expertise in both segments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I open a Demat account for Bond investments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Binary Bonds partners with The Federal Bank Limited for Demat account services. You can open an account by completing the KYC process digitally, which typically takes 2-3 business days. Our team assists with the entire account opening process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Bond investments suitable for NRIs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, NRIs can invest in certain Indian bonds subject to RBI regulations. Binary Bonds provides specialized services for NRI investors, including guidance on eligible securities, repatriation rules, and tax implications. Contact us for NRI-specific investment solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the role of credit rating in Bond investments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Credit ratings assess the creditworthiness of bond issuers and the likelihood of timely interest and principal payments. Higher-rated bonds (AAA, AA) offer lower yields but greater safety, while lower-rated bonds offer higher yields with increased risk. Binary Bonds provides credit rating advisory services.',
      },
    },
  ],
};
