'use client';

import SEOHead from '@/components/SEOHead';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, TrendingUp, Users, Shield, Target, CheckCircle } from "lucide-react";
import { servicesSEO } from "@/lib/seo-config";
import { serviceSchemas } from "@/lib/service-schemas";
import ServiceSchema from "@/components/ServiceSchema";

export default function CorporateBondUnderwriting() {
  const seo = servicesSEO['corporate-bond-underwriting'];
  
  return (
    <div className="min-h-screen">
      <ServiceSchema schema={serviceSchemas['corporate-bond-underwriting']} />
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        ogTitle={seo.openGraph.title}
        ogDescription={seo.openGraph.description}
        ogUrl={seo.openGraph.url}
        ogImage={seo.openGraph.images[0].url}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-corporate-underwriting.jpg" alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 via-yellow-500/20 to-yellow-600/30 dark:from-black/80 dark:via-black/70 dark:to-black/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">
              Corporate Bond <span className="text-white">Underwriting</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 font-bold drop-shadow-md">
              Professional underwriting services for corporate debt securities with comprehensive risk assessment and pricing strategies.
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
              Expert Corporate Bond Underwriting
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white mb-6 leading-relaxed">
              Binary Bonds provides comprehensive corporate bond underwriting services, helping companies access debt capital markets efficiently while ensuring optimal pricing and successful placement with institutional investors.
            </p>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-white leading-relaxed">
              Our underwriting capabilities span investment-grade and high-yield corporate bonds across all sectors, with proven expertise in structuring, pricing, and distributing debt securities to banks, insurance companies, mutual funds, and other institutional investors.
            </p>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
            Our Underwriting Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Bond Structuring
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Strategic structuring of bond issues including tenor selection, coupon determination, security features, and covenant design to optimize investor appeal.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Credit Analysis
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Comprehensive credit analysis including financial modeling, business evaluation, industry assessment, and rating agency coordination.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Pricing Advisory
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Market-driven pricing recommendations based on comparable bond analysis, credit spreads, and investor demand assessment.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Placement Services
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Strategic placement with institutional investors through our extensive network of banks, insurance companies, mutual funds, and pension funds.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Regulatory Compliance
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Complete compliance support including SEBI filing, stock exchange listing, credit rating coordination, and legal documentation.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift">
              <div className="w-16 h-16 bg-[hsl(var(--golden))]/20 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-[hsl(var(--golden-dark))]" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-white font-bold mb-4">
                Post-Issue Support
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                Ongoing support including secondary market making, investor relations, covenant compliance monitoring, and refinancing advisory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Underwriting Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-12 text-center">
              Our Underwriting Process
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Initial Assessment & Mandate
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Comprehensive assessment of funding requirements, credit profile, market conditions, and investor appetite, followed by formal underwriting mandate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Due Diligence & Structuring
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Detailed due diligence including financial analysis, legal review, and business assessment, followed by optimal bond structure design.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Credit Rating & Documentation
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Coordination with credit rating agencies, preparation of information memorandum, and completion of legal documentation including trust deed and bond agreement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Marketing & Investor Engagement
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Strategic marketing to institutional investors through roadshows, one-on-one meetings, and investor presentations to build demand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Pricing & Allocation
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Final pricing based on investor feedback and market conditions, followed by strategic allocation to ensure diversified investor base.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">
                    Issuance & Settlement
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                    Efficient issuance process including stock exchange listing, demat credit, and fund settlement, ensuring smooth completion of the transaction.
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
            Why Choose Binary Bonds for Underwriting?
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Deep Investor Relationships
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Strong relationships with 150+ institutional investors including banks, insurance companies, mutual funds, and pension funds ensuring successful placement.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Proven Track Record
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Successfully underwritten ₹2000+ Crores of corporate bonds across diverse sectors with 100% successful placement record.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  Competitive Pricing
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Market-leading pricing achieved through efficient execution, strong investor demand, and strategic timing of issuances.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">4</span>
                </div>
                <h3 className="text-2xl font-black text-black">
                  End-to-End Support
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed ml-16">
                Complete support from initial structuring through post-issue secondary market making, ensuring long-term success of your bond program.
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
              Ready to Access Debt Capital Markets?
            </h2>
            <p className="text-2xl md:text-3xl text-black mb-8 font-bold drop-shadow-md">
              Contact our underwriting team to discuss your financing requirements.
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
