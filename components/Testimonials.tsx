'use client';

import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CFO, National Insurance Company",
      company: "Leading Insurance Provider",
      content: "Binary Bonds has been instrumental in structuring our bond portfolio. Their expertise in government securities and credit rating advisory has helped us achieve optimal returns while maintaining regulatory compliance.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Fund Manager, Apex Mutual Fund",
      company: "Top 10 Mutual Fund House",
      content: "The team's deep understanding of both primary and secondary bond markets is exceptional. They've consistently delivered competitive pricing and swift execution for our high-value transactions.",
      rating: 5
    },
    {
      name: "Vikram Patel",
      position: "Treasury Head, Metropolitan Bank",
      company: "Private Sector Bank",
      content: "Working with Binary Bonds has transformed our bond investment strategy. Their risk management frameworks and market insights have been invaluable in navigating volatile market conditions.",
      rating: 5
    },
    {
      name: "Anita Desai",
      position: "Investment Director, HNI Family Office",
      company: "Ultra HNI Client",
      content: "Binary Bonds provides institutional-grade services with personalized attention. Their corporate bond underwriting expertise has opened doors to exclusive investment opportunities with superior yields.",
      rating: 5
    },
    {
      name: "Suresh Menon",
      position: "CEO, Regional NBFC",
      company: "Non-Banking Financial Company",
      content: "The credit rating advisory services from Binary Bonds helped us secure an AAA rating, significantly reducing our borrowing costs. Their guidance through the entire process was exceptional.",
      rating: 5
    },
    {
      name: "Kavita Reddy",
      position: "Portfolio Manager, Pension Fund",
      company: "State Pension Fund",
      content: "Binary Bonds' secondary market trading platform provides excellent liquidity and transparent pricing. Their settlement efficiency and regulatory compliance give us complete peace of mind.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--navy))] dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by leading financial institutions, insurance companies, mutual funds, and high-net-worth individuals across India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[hsl(var(--golden))]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Quote Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--golden))]/10 mb-4">
                <Quote className="w-6 h-6 text-[hsl(var(--golden))]" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[hsl(var(--golden))]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="font-bold text-[hsl(var(--navy))] dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.position}
                </div>
                <div className="text-xs text-[hsl(var(--golden))] mt-1">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges removed - certifications shown in Why Choose Us section */}
      </div>
    </section>
  );
}
