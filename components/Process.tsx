'use client';

import { FileSearch, Users, FileCheck, TrendingUp, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: Users,
      title: "Initial Consultation",
      description: "Connect with our relationship manager to discuss your investment objectives, risk appetite, and portfolio requirements.",
      duration: "1-2 days"
    },
    {
      number: "02",
      icon: FileSearch,
      title: "Market Analysis",
      description: "Our research team analyzes market conditions, identifies suitable bond opportunities, and provides detailed credit assessments.",
      duration: "2-3 days"
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Proposal & Documentation",
      description: "Receive comprehensive proposals with pricing, terms, and risk analysis. Complete necessary documentation with our compliance team.",
      duration: "3-5 days"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Execution & Settlement",
      description: "Swift execution of transactions with transparent pricing and efficient settlement through our trading desk.",
      duration: "1-2 days"
    },
    {
      number: "05",
      icon: CheckCircle,
      title: "Ongoing Support",
      description: "Continuous portfolio monitoring, market updates, and dedicated relationship management for all your bond investment needs.",
      duration: "Ongoing"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--navy))] dark:text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A streamlined, transparent process designed to deliver optimal bond investment solutions with minimal hassle and maximum efficiency.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--golden))]/20 via-[hsl(var(--golden))] to-[hsl(var(--golden))]/20"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative" data-aos="fade-right" data-aos-delay={index * 150}>
                  {/* Step Card */}
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[hsl(var(--golden))]">
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-5xl font-bold text-[hsl(var(--golden))]/20">
                        {step.number}
                      </div>
                      <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[hsl(var(--navy))] dark:text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Duration Badge */}
                    <div className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                      ⏱️ {step.duration}
                    </div>
                  </div>

                  {/* Arrow (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 text-[hsl(var(--golden))] text-2xl z-10">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section removed - moved to Contact component */}
      </div>
    </section>
  );
}
