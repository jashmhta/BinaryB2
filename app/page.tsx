import Loading from "@/components/Loading";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
// FAQ moved to separate page
// CTASection removed (redundant)
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BinaryCapitalCard from "@/components/BinaryCapitalCard";
import TrustSection from "@/components/TrustSection";
import GoldenDivider from "@/components/GoldenDivider";
import StructuredData from "@/components/StructuredData";
import FAQSchema from "@/components/FAQSchema";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <FAQSchema />
      <Loading />
      <Navigation />
      <Hero />
      <GoldenDivider />
      <About />
      <GoldenDivider />
      <WhyChooseUs />
      <GoldenDivider />
      <Services />
      <GoldenDivider />
      <Process />
      <GoldenDivider />
      <Testimonials />
      <GoldenDivider />
      <Team />
      <GoldenDivider />
      {/* FAQ moved to /faq page */}
      {/* CTASection removed - redundant with Process section */}
      <BinaryCapitalCard />
      <GoldenDivider />
      <TrustSection />
      <GoldenDivider />
      <Contact />
      <Footer />
    </div>
  );
}
