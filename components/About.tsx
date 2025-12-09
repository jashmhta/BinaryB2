'use client';

import AnimatedCounter from "@/components/AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          {/* Logo with Animation */}
          <div className="flex justify-center mb-8" data-aos="zoom-in">
            <img 
              src="/logo-animation.gif" 
              alt="Binary Bonds - Leading Bond Market Specialists and Underwriting Services" 
              className="h-32 w-32 md:h-40 md:w-40"
              loading="lazy"
            />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[hsl(var(--navy))] dark:text-white mb-8 text-center">
            Experience Excellence in Bond Markets
          </h2>

          {/* Tagline */}
          <p className="text-center text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 font-semibold italic">
            Seamless execution, strategic insights, trusted partnerships
          </p>

          {/* Main Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--navy))] dark:text-white mb-6">
              About Binary Bonds
            </h3>
            
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
              <strong>Binary Bonds</strong>, a specialized division of <strong>Binary Capital</strong>, focuses exclusively on the <strong>primary and secondary bond markets</strong>. We provide comprehensive <strong>bond underwriting services</strong>, <strong>government securities trading</strong>, and <strong>debt capital market solutions</strong> for <strong>banks</strong>, <strong>high-net-worth individuals</strong>, <strong>mutual fund houses</strong>, <strong>insurance companies</strong>, and various <strong>financial institutions</strong> across India.
            </p>

            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
              Our expertise lies in achieving <strong>optimal returns through prudent risk assessment</strong> while maintaining strict <strong>SEBI and RBI regulatory compliance</strong>. With over <strong>₹2,000 crore</strong> in bonds successfully underwritten and more than <strong>150 institutional clients</strong> served, we have established ourselves as <strong>trusted partners</strong> in India's debt capital markets.
            </p>

            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
              Our mission is to <strong>transform aspirations into achievements</strong> by empowering our clients' financial futures with <strong>integrity, expertise, and an unwavering commitment</strong> to delivering <strong>exceptional value</strong>.
            </p>
          </div>

          {/* Statistics - Properly Aligned */}
          <div className="bg-[hsl(var(--golden))] dark:bg-[hsl(var(--golden-dark))] rounded-2xl p-8 md:p-12 shadow-2xl" data-aos="zoom-in" data-aos-delay="300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <AnimatedCounter
                  end={2000}
                  prefix="₹"
                  suffix="Cr+"
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(var(--navy))] dark:text-white mb-2"
                />
                <div className="text-[hsl(var(--navy))] dark:text-white font-bold text-sm md:text-base lg:text-lg">
                  Bonds Underwritten
                </div>
              </div>
              
              <div className="text-center">
                <AnimatedCounter
                  end={150}
                  suffix="+"
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(var(--navy))] dark:text-white mb-2"
                />
                <div className="text-[hsl(var(--navy))] dark:text-white font-bold text-sm md:text-base lg:text-lg">
                  Institutional Clients
                </div>
              </div>
              
              <div className="text-center">
                <AnimatedCounter
                  end={500}
                  suffix="+"
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(var(--navy))] dark:text-white mb-2"
                />
                <div className="text-[hsl(var(--navy))] dark:text-white font-bold text-sm md:text-base lg:text-lg">
                  Bond Transactions Completed
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(var(--navy))] dark:text-white mb-2">
                  AAA
                </div>
                <div className="text-[hsl(var(--navy))] dark:text-white font-bold text-sm md:text-base lg:text-lg">
                  Rating Partners
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
