'use client';

import SEOHead from '@/components/SEOHead';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, TrendingUp, FileText, Award, Users, CheckCircle } from "lucide-react";
import { servicesSEO } from "@/lib/seo-config";
import { serviceSchemas } from "@/lib/service-schemas";
import ServiceSchema from "@/components/ServiceSchema";

export default function GovernmentSecurities() {
  const seo = servicesSEO['government-securities'];
  
  return (
    <div className="min-h-screen">
      <ServiceSchema schema={serviceSchemas['government-securities']} />
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
        ogTitle={seo.openGraph.title}
        ogDescription={seo.openGraph.description}
        ogUrl={seo.openGraph.url}
        ogImage={seo.openGraph.images[0].url}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-government-securities.png" alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 via-yellow-500/20 to-yellow-600/30 dark:from-black/80 dark:via-black/70 dark:to-black/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">
              Government <span className="text-white">Securities</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 font-bold drop-shadow-md">
              Expert handling of government bonds, treasury securities, and sovereign debt with deep market knowledge and regulatory expertise.
            </p>
            <Button size="lg" className="bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-black">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white font-bold mb-6">
              Expert Government Securities Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white mb-6 leading-relaxed">
              Binary Bonds provides specialized services for government securities trading, including treasury bonds, state development loans, and sovereign debt instruments. Our team has extensive experience in primary auctions and secondary market operations for institutional investors.
            </p>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white leading-relaxed">
              We serve banks, insurance companies, mutual funds, pension funds, and other institutional investors seeking safe, liquid, and high-quality fixed-income instruments backed by the sovereign guarantee of the Government of India.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
            Our Government Securities Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Treasury Bonds
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Expert participation in RBI auctions for Government of India dated securities with tenors ranging from 5 to 40 years. We provide competitive bidding strategies and optimal allocation for institutional portfolios.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                State Development Loans
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Comprehensive coverage of SDL auctions across all Indian states. We analyze credit spreads, fiscal positions, and provide strategic investment recommendations for state government securities.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Treasury Bills
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Active participation in 91-day, 182-day, and 364-day T-Bill auctions. Ideal for short-term liquidity management and cash flow optimization for institutional investors.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Sovereign Gold Bonds
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Participation in RBI's Sovereign Gold Bond scheme offering gold-linked returns with sovereign guarantee. Perfect for diversification and inflation hedging strategies.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Secondary Market Trading
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Active secondary market trading desk providing liquidity, competitive pricing, and efficient execution for government securities across all tenors and maturities.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Regulatory Compliance
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Full compliance with RBI guidelines, SEBI regulations, and FIMMDA best practices. Transparent reporting and settlement through CCIL and RBI's NDS-OM platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
              Why Choose Binary Bonds for Government Securities?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Deep Market Knowledge
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Our team has decades of combined experience in government securities markets, with expertise in RBI auction dynamics, yield curve analysis, and macroeconomic policy interpretation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Competitive Pricing
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Access to primary auctions and secondary market liquidity ensures competitive pricing for both purchases and sales, maximizing returns for our clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Risk-Free Returns
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Government securities carry sovereign guarantee with zero credit risk, making them ideal for conservative portfolios and regulatory compliance requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Efficient Settlement
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Seamless settlement through CCIL (Clearing Corporation of India Ltd) and RBI's Negotiated Dealing System, ensuring safe and timely delivery versus payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
            Our Investment Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Portfolio Assessment
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                We analyze your investment objectives, risk appetite, duration requirements, and regulatory constraints to design an optimal government securities allocation strategy.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Market Analysis
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Our research team provides detailed analysis of upcoming auctions, yield curve positioning, monetary policy outlook, and relative value opportunities across the G-Sec curve.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Execution Strategy
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Strategic participation in primary auctions or secondary market purchases based on pricing dynamics, ensuring optimal execution and allocation for your portfolio.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">4</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Settlement & Reporting
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Efficient settlement through CCIL with comprehensive reporting, including trade confirmations, settlement details, and portfolio valuation updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--golden-dark))] to-[hsl(var(--golden))]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">
              Ready to Explore Government Securities?
            </h2>
            <p className="text-2xl md:text-3xl text-white mb-8 font-bold drop-shadow-md">
              Contact our team to discuss your requirements.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
