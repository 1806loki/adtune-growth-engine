import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonial } from "@/components/sections/Testimonial";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Services />
        <Industries />
        <Process />
        <WhyUs />
        <Testimonial />
        <BlogTeaser />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
