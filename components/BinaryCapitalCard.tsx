"use client";

import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";

export default function BinaryCapitalCard() {
  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--navy))] to-blue-900 dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div className="container">
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Explore Binary Capital
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Discover our comprehensive financial advisory and investment banking services
            </p>
          </div>

          {/* Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-8 md:p-12">
              {/* Logo and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo-animation.gif" 
                    alt="Binary Capital Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-[hsl(var(--navy))] dark:text-white">
                    Binary Capital
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    Bespoke Financial Strategies
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                Binary Capital is a leading investment banking and financial advisory firm specializing in M&A advisory, capital markets, project finance, and structured finance solutions. With over 10 years of excellence, we serve clients across India with integrity and expertise.
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[hsl(var(--golden))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-[hsl(var(--golden))]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[hsl(var(--navy))] dark:text-white mb-1">
                      M&A Advisory
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Strategic mergers & acquisitions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[hsl(var(--golden))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-[hsl(var(--golden))]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[hsl(var(--navy))] dark:text-white mb-1">
                      Capital Markets
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Equity & debt capital raising
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[hsl(var(--golden))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[hsl(var(--golden))]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[hsl(var(--navy))] dark:text-white mb-1">
                      Project Finance
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Infrastructure & project funding
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://binary-capital-bc.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-[hsl(var(--navy))] dark:text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Visit Binary Capital Website
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
