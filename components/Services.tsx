'use client';

import { Button } from "@/components/ui/button";
import { FileText, Building2, TrendingUp, PieChart, Award, BarChart3 } from "lucide-react";

const services = [
  {
    icon: FileText,
    image: "/service-corporate-bonds.jpg",
    title: "Corporate Bond Underwriting",
    slug: "corporate-bond-underwriting",
    description: "Professional underwriting services for corporate debt securities with comprehensive risk assessment and pricing strategies.",
    features: [
      "Bond structuring",
      "Credit analysis",
      "Pricing advisory",
      "Placement services"
    ]
  },
  {
    icon: Building2,
    image: "/service-government-securities.jpg",
    title: "Government Securities",
    slug: "government-securities",
    description: "Expert handling of government bonds and treasury securities with deep market knowledge and regulatory expertise.",
    features: [
      "Treasury bonds",
      "Municipal bonds",
      "Sovereign debt",
      "Auction participation"
    ]
  },
  {
    icon: TrendingUp,
    image: "/service-high-yield-bonds.jpg",
    title: "High-Yield Bonds",
    slug: "high-yield-bonds",
    description: "Specialized services for high-yield corporate bonds with enhanced due diligence and risk management protocols.",
    features: [
      "Credit evaluation",
      "Risk mitigation",
      "Market timing",
      "Investor matching"
    ]
  },
  {
    icon: PieChart,
    image: "/service-portfolio-management.jpg",
    title: "Bond Portfolio Management",
    slug: "bond-portfolio-management",
    description: "Strategic portfolio management services optimizing yield, duration, and credit quality for institutional investors.",
    features: [
      "Portfolio optimization",
      "Duration management",
      "Yield enhancement",
      "Rebalancing strategies"
    ]
  },
  {
    icon: Award,
    image: "/service-credit-rating.jpg",
    title: "Credit Rating Advisory",
    slug: "credit-rating-advisory",
    description: "Comprehensive credit rating advisory services to help issuers achieve optimal ratings and maintain investor confidence.",
    features: [
      "Rating preparation",
      "Agency coordination",
      "Documentation support",
      "Rating maintenance"
    ]
  },
  {
    icon: BarChart3,
    image: "/service-secondary-trading.jpg",
    title: "Secondary Market Trading",
    slug: "secondary-market-trading",
    description: "Efficient secondary market trading services providing liquidity and competitive pricing for bond portfolios.",
    features: [
      "Market making",
      "Liquidity provision",
      "Price discovery",
      "Settlement services"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black text-[hsl(var(--navy))] dark:text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            From expert bond underwriting to comprehensive portfolio management, our service suite delivers strategic solutions for institutional investors and financial institutions.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[hsl(var(--golden))] hover-lift flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Card Image Area with Icon */}
                <div className="relative h-48 bg-gradient-to-br from-[#2c3e50] to-[#1a2332] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Professional bond market services by Binary Bonds`}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[hsl(var(--golden))] rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-[hsl(var(--navy))] dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-900 dark:text-gray-300 mb-4 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-base text-gray-900 dark:text-gray-300 font-medium">
                        <span className="w-1.5 h-1.5 bg-[hsl(var(--golden))] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-auto">
                  <a 
                    href={`/services/${service.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-[hsl(var(--golden))] text-[hsl(var(--golden))] hover:bg-[hsl(var(--golden))] hover:text-white dark:text-black dark:bg-[hsl(var(--golden))] dark:hover:bg-[hsl(var(--golden))]/90"
                    >
                      Learn More
                    </Button>
                  </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
