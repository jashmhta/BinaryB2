'use client';

import SEOHead from '@/components/SEOHead';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, FileText, Users, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { servicesSEO } from "@/lib/seo-config";
import { serviceSchemas } from "@/lib/service-schemas";
import ServiceSchema from "@/components/ServiceSchema";

export default function CreditRatingAdvisory() {
  const seo = servicesSEO['credit-rating-advisory'];
  
  return (
    <div className="min-h-screen">
      <ServiceSchema schema={serviceSchemas['credit-rating-advisory']} />
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
          <img src="/hero-credit-rating.jpg" alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 via-yellow-500/20 to-yellow-600/30 dark:from-black/80 dark:via-black/70 dark:to-black/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">
              Credit Rating <span className="text-white">Advisory</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 font-bold drop-shadow-md">
              Comprehensive credit rating advisory services to help issuers achieve optimal ratings and maintain investor confidence.
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
              Expert Credit Rating Advisory
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white mb-6 leading-relaxed">
              Binary Bonds provides comprehensive credit rating advisory services to corporate issuers, helping them navigate the rating process, optimize their credit profile, and achieve the best possible ratings from leading agencies including CRISIL, ICRA, CARE, and India Ratings.
            </p>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white leading-relaxed">
              Our experienced team guides issuers through rating preparation, agency interactions, documentation, and ongoing rating maintenance to ensure sustained access to debt capital markets at competitive costs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
            Our Rating Advisory Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Rating Preparation
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Comprehensive preparation for initial rating assignments including financial analysis, business profile assessment, and strategic positioning to achieve optimal ratings.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Agency Coordination
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Expert coordination with rating agencies including management meeting preparation, Q&A support, and strategic communication to present your credit story effectively.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Documentation Support
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Complete documentation support including rating presentation preparation, financial model development, and comprehensive information memorandum creation.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Rating Enhancement
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Strategic advice on improving credit metrics, capital structure optimization, and operational improvements to achieve rating upgrades over time.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Rating Maintenance
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Ongoing rating surveillance support including annual review preparation, covenant compliance monitoring, and proactive communication with agencies.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Multi-Agency Management
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Efficient management of multiple rating agency relationships, ensuring consistent messaging and optimal rating outcomes across all agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
              Our Rating Advisory Process
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Pre-Rating Assessment
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Comprehensive assessment of your credit profile, financial position, business fundamentals, and industry dynamics to estimate likely rating outcomes and identify improvement areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Agency Selection & Engagement
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Strategic selection of appropriate rating agencies based on your industry, size, and investor base, followed by formal engagement and mandate assignment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Documentation & Presentation
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Development of comprehensive rating presentation materials, financial models, and supporting documentation to effectively communicate your credit strengths.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Management Meeting Support
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Preparation and support for management meetings with rating analysts, including Q&A rehearsal, key message development, and real-time meeting facilitation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Rating Outcome & Ongoing Support
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Review of rating rationale, appeal support if needed, and ongoing surveillance coordination to maintain or improve ratings over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
            Why Choose Binary Bonds for Rating Advisory?
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Deep Agency Relationships
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Strong working relationships with all major Indian rating agencies built over years of successful transactions and ongoing dialogue.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Sector Expertise
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Specialized knowledge across key sectors including infrastructure, real estate, NBFCs, manufacturing, and services with deep understanding of sector-specific rating criteria.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Proven Track Record
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Successful rating assignments across 100+ issuers with consistent achievement of target ratings and multiple rating upgrades through strategic advisory.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">4</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Cost Optimization
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Higher ratings translate directly to lower borrowing costs. Our advisory services typically deliver ROI of 10-50x through reduced interest expenses.
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
              Ready to Optimize Your Credit Rating?
            </h2>
            <p className="text-2xl md:text-3xl text-white mb-8 font-bold drop-shadow-md">
              Contact our rating advisory team to discuss your requirements.
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
