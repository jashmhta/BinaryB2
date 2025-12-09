'use client';

import SEOHead from '@/components/SEOHead';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp, Target, Shield, BarChart3, FileSearch, CheckCircle } from "lucide-react";
import { servicesSEO } from "@/lib/seo-config";
import { serviceSchemas } from "@/lib/service-schemas";
import ServiceSchema from "@/components/ServiceSchema";

export default function HighYieldBonds() {
  const seo = servicesSEO['high-yield-bonds'];
  
  return (
    <div className="min-h-screen">
      <ServiceSchema schema={serviceSchemas['high-yield-bonds']} />
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
          <img src="/hero-high-yield-bonds.jpg" alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 via-yellow-500/20 to-yellow-600/30 dark:from-black/80 dark:via-black/70 dark:to-black/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">
              High-Yield <span className="text-white">Bonds</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 font-bold drop-shadow-md">
              Specialized services for high-yield corporate bonds with enhanced due diligence and risk management protocols.
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
              Expert High-Yield Bond Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white mb-6 leading-relaxed">
              Binary Bonds specializes in high-yield corporate bonds, offering institutional investors access to enhanced returns through carefully selected sub-investment grade securities. Our rigorous credit analysis and risk management frameworks ensure optimal risk-adjusted returns.
            </p>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white leading-relaxed">
              We serve sophisticated institutional investors including mutual funds, insurance companies, alternative investment funds, and family offices seeking to enhance portfolio yields while maintaining disciplined risk controls.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
            Our High-Yield Bond Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <FileSearch className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Enhanced Due Diligence
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Comprehensive credit analysis including financial modeling, management assessment, industry analysis, and covenant review to identify attractive risk-reward opportunities.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Superior Yield Generation
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Access to high-yield corporate bonds offering 200-500 basis points premium over investment-grade securities, enhancing overall portfolio returns.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Risk Mitigation Strategies
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Diversification across sectors, issuers, and maturities combined with active monitoring and early warning systems to manage downside risk.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Sector Specialization
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Deep expertise in key high-yield sectors including real estate, infrastructure, NBFCs, manufacturing, and emerging industries with growth potential.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Market Timing & Execution
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Strategic market timing and efficient execution leveraging our deep relationships with issuers, arrangers, and secondary market participants.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Covenant Protection
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Rigorous covenant analysis and negotiation to ensure investor protection through financial covenants, security structures, and event-of-default triggers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
              Our High-Yield Investment Approach
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Fundamental Credit Analysis
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Bottom-up credit research focusing on business fundamentals, competitive positioning, management quality, financial leverage, and cash flow generation capabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Relative Value Assessment
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Comparative analysis of credit spreads across rating categories, sectors, and maturities to identify mispriced securities offering attractive risk-adjusted returns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Portfolio Diversification
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Disciplined diversification across issuers, sectors, geographies, and maturities to minimize concentration risk and enhance portfolio resilience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Active Monitoring
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Continuous monitoring of portfolio holdings including quarterly financial reviews, covenant compliance tracking, and early warning indicators for credit deterioration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management Section */}
      <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
            Comprehensive Risk Management
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Credit Risk Assessment
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Rigorous evaluation of default probability, recovery rates, and loss-given-default scenarios using quantitative models and qualitative judgment.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Liquidity Risk Management
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Careful assessment of secondary market liquidity, maintaining appropriate portfolio turnover, and building relationships with market makers for exit flexibility.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Concentration Limits
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Strict concentration limits on single issuers, industry sectors, and rating categories to prevent excessive exposure to any single risk factor.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">4</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Stress Testing
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Regular stress testing of portfolio performance under adverse scenarios including economic downturns, interest rate shocks, and sector-specific crises.
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
              Ready to Enhance Portfolio Yields?
            </h2>
            <p className="text-2xl md:text-3xl text-white mb-8 font-bold drop-shadow-md">
              Contact our high-yield bond specialists to discuss opportunities.
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
