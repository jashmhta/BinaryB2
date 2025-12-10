'use client';

import { Shield, TrendingUp, Users, Award, Clock, Target } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Regulatory Excellence",
      description: "Full compliance with SEBI regulations and industry best practices, ensuring secure and transparent transactions."
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description: "Deep understanding of primary and secondary bond markets with proven track record across economic cycles."
    },
    {
      icon: Users,
      title: "Institutional Focus",
      description: "Specialized services tailored for banks, insurance companies, mutual funds, and high-net-worth individuals."
    },
    {
      icon: Award,
      title: "Credit Rating Partners",
      description: "Strong relationships with top credit rating agencies ensuring optimal ratings for our clients."
    },
    {
      icon: Clock,
      title: "Swift Execution",
      description: "Efficient processing and settlement with dedicated relationship managers for seamless transactions."
    },
    {
      icon: Target,
      title: "Risk Management",
      description: "Comprehensive risk assessment frameworks protecting client interests while maximizing returns."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black text-[hsl(var(--navy))] dark:text-white mb-6">
            Why Choose Binary Bonds
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            As a specialized division of Binary Capital, we bring institutional-grade bond market expertise with a focus on transparency, compliance, and client success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[hsl(var(--golden))]"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-black text-[hsl(var(--navy))] dark:text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-400 mb-8">
            Trusted by leading institutions
          </h3>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              Banking Partner & Demat Services: <strong>The Federal Bank Limited</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
