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
import { SeoMeta } from "@/components/SeoMeta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoMeta
        title="Digital Marketing Agency in Hyderabad | AdTune Digital"
        description="AdTune Digital is a leading digital marketing agency in Hyderabad offering SEO, Google Ads, social media and web development to drive real business growth."
        keywords={[
          "Digital Marketing Agency in Hyderabad",
          "SEO services in Hyderabad",
          "online marketing services",
          "performance marketing agency",
          "social media marketing company",
          "website development services",
        ]}
      />
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
