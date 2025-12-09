'use client';

import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadBrochure = () => {
    window.open('/Binary-Bonds-Brochure.pdf', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background with new hero image */}
      <div className="absolute inset-0">
        {/* Hero background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-background-bonds.png)' }}
        ></div>
        {/* Gradient overlay - different for light/dark mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/30 via-yellow-500/20 to-yellow-600/30 dark:from-black/80 dark:via-black/70 dark:to-black/80"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Building Trust with{" "}
            <span className="text-[hsl(var(--golden))]">Strategic</span> Bond
            Investments
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg sm:text-xl md:text-3xl text-white/95 mb-6 font-bold drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Primary Market • Secondary Market • Underwriting
          </p>

          {/* Description */}
          <p 
            className="text-base sm:text-lg md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Comprehensive Bond Market solutions for Institutional Investors, Banks, HNIs, Mutual Funds, and Insurance Companies, with a focus on risk assessment and regulatory compliance.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <Button
              size="lg"
              className="bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-black dark:text-black font-semibold text-lg px-10 py-7 shadow-2xl"
              onClick={() => {
                const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Binary+Bonds+Consultation&details=Schedule+a+consultation+with+Binary+Bonds+team&location=Online&dates=20240101T100000Z/20240101T110000Z`;
                window.open(calendarUrl, '_blank');
              }}
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[hsl(var(--golden))] text-[hsl(var(--golden))] hover:bg-[hsl(var(--golden))] hover:text-black dark:text-black dark:bg-[hsl(var(--golden))] dark:hover:bg-[hsl(var(--golden))]/90 text-lg px-10 py-7 shadow-2xl font-semibold"
              onClick={handleDownloadBrochure}
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
