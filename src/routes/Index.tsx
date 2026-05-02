import { Navbar } from "@/features/marketing/components/layout/Navbar";
import { Footer } from "@/features/marketing/components/layout/Footer";
import { StickyMobileCTA } from "@/features/marketing/components/layout/StickyMobileCTA";
import { Hero } from "@/features/marketing/components/sections/Hero";
import { StatsBand } from "@/features/marketing/components/sections/StatsBand";
import { Services } from "@/features/marketing/components/sections/Services";
import { Industries } from "@/features/marketing/components/sections/Industries";
import { Process } from "@/features/marketing/components/sections/Process";
import { WhyUs } from "@/features/marketing/components/sections/WhyUs";
import { Testimonial } from "@/features/marketing/components/sections/Testimonial";
import { BlogTeaser } from "@/features/marketing/components/sections/BlogTeaser";
import { FinalCTA } from "@/features/marketing/components/sections/FinalCTA";
import { SeoMeta } from "@/features/marketing/components/layout/SeoMeta";

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
