'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--navy))] to-[#1a2332] dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Optimize Your Bond Portfolio?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-medium">
            Partner with Binary Bonds for institutional-grade bond market solutions. 
            Our expert team is ready to help you achieve your investment objectives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button 
                size="lg"
                className="bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-[hsl(var(--navy))] font-bold text-lg px-8 py-6"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="tel:+917738056127">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--navy))] font-bold text-lg px-8 py-6"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </Button>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-4xl font-black text-[hsl(var(--golden))] mb-2">24/7</div>
              <div className="text-lg font-semibold">Market Support</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[hsl(var(--golden))] mb-2">&lt;48hrs</div>
              <div className="text-lg font-semibold">Deal Execution</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[hsl(var(--golden))] mb-2">100%</div>
              <div className="text-lg font-semibold">Regulatory Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
