'use client';

import SEOHead from '@/components/SEOHead';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PieChart, TrendingUp, Shield, BarChart3, Target, CheckCircle } from "lucide-react";
import { servicesSEO } from "@/lib/seo-config";
import { serviceSchemas } from "@/lib/service-schemas";
import ServiceSchema from "@/components/ServiceSchema";

export default function BondPortfolioManagement() {
  const seo = servicesSEO['bond-portfolio-management'];
  
  return (
    <div className="min-h-screen">
      <ServiceSchema schema={serviceSchemas['bond-portfolio-management']} />
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
          <img src="/hero-portfolio-management.jpg" alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 via-yellow-500/20 to-yellow-600/30 dark:from-black/80 dark:via-black/70 dark:to-black/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">
              Bond Portfolio <span className="text-white">Management</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 font-bold drop-shadow-md">
              Strategic portfolio management services optimizing yield, duration, and credit quality for institutional investors.
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
              Professional Bond Portfolio Management
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white mb-6 leading-relaxed">
              Binary Bonds offers comprehensive bond portfolio management services for institutional investors, combining strategic asset allocation, active duration management, and rigorous credit selection to optimize risk-adjusted returns.
            </p>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white leading-relaxed">
              Our portfolio management approach is tailored to each client's investment objectives, risk tolerance, and regulatory constraints, delivering consistent performance across market cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
            Our Portfolio Management Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <PieChart className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Strategic Asset Allocation
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Optimal allocation across government securities, corporate bonds, and high-yield instruments based on macroeconomic outlook, yield curve positioning, and credit cycle analysis.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Duration Management
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Active duration management to capitalize on interest rate movements, managing portfolio sensitivity to yield curve shifts and monetary policy changes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Yield Enhancement
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Systematic yield enhancement through credit selection, curve positioning, sector rotation, and tactical trading strategies while maintaining risk discipline.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Credit Quality Management
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Rigorous credit analysis and ongoing monitoring to maintain target credit quality, with proactive management of rating changes and credit events.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Performance Reporting
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Comprehensive performance reporting including attribution analysis, risk metrics, benchmark comparison, and detailed portfolio holdings statements.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Rebalancing Strategies
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Systematic rebalancing to maintain target allocations, harvest gains, and reinvest proceeds in attractive opportunities while managing transaction costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
              Our Investment Philosophy
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Top-Down Macro Analysis
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Comprehensive macroeconomic analysis to identify interest rate trends, inflation outlook, monetary policy direction, and credit cycle positioning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Bottom-Up Security Selection
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Rigorous fundamental analysis of individual securities, focusing on credit quality, relative value, liquidity, and structural features.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Risk-Adjusted Returns
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Focus on maximizing risk-adjusted returns through disciplined risk management, diversification, and active portfolio construction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Long-Term Value Creation
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Patient, long-term investment approach focused on sustainable value creation rather than short-term speculation or market timing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Construction Section */}
      <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
            Portfolio Construction Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Investment Mandate Definition
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Clearly define investment objectives, return targets, risk tolerance, duration constraints, credit quality requirements, and regulatory guidelines.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Strategic Asset Allocation
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Develop strategic allocation across asset classes, sectors, credit ratings, and maturities based on market outlook and client objectives.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Security Selection & Execution
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Identify attractive securities through fundamental research, execute trades efficiently, and build diversified portfolio positions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">4</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Ongoing Monitoring & Rebalancing
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Continuous monitoring of portfolio performance, risk metrics, and market conditions with proactive rebalancing to maintain optimal positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--golden-dark))] to-[hsl(var(--golden))]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white font-bold mb-6">
              Ready to Optimize Your Bond Portfolio?
            </h2>
            <p className="text-2xl md:text-3xl text-black/80 mb-8 font-bold">
              Contact our portfolio management team to discuss your requirements.
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
