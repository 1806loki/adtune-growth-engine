export type ServiceSectionItem = {
  title: string;
  description: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  navLabel: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  offerings: ServiceSectionItem[];
  processSteps: ServiceSectionItem[];
  whyChoose: ServiceSectionItem[];
  faqs: ServiceFAQ[];
  ctaTitle: string;
  ctaDescription: string;
};

export const services: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web Development",
    navLabel: "Web Development",
    shortDescription:
      "Fast, mobile-first, SEO-ready websites that make powerful first impressions and convert visitors into customers.",
    heroTitle: "Websites that work as hard as you do",
    heroSubtitle:
      "Custom-built, SEO-ready, and designed to convert - we create websites that grow your business, not just fill a page.",
    intro:
      "Your website is your most powerful sales tool. At AdTune Digital Services, we design and develop fast, mobile-first websites that make lasting first impressions and drive real results. Whether you are a startup building from scratch or an established business looking for a redesign, our team crafts experiences that turn visitors into paying customers.",
    offerings: [
      { title: "Custom web design", description: "Unique, brand-aligned designs built from scratch - no templates." },
      { title: "Mobile-first development", description: "Optimized for every screen size, from phone to desktop." },
      { title: "SEO-ready code", description: "Clean code and proper structure that search engines love." },
      { title: "Speed optimized", description: "Fast load times for better UX and Google rankings." },
      { title: "Landing pages", description: "High-converting pages designed to capture leads and drive action." },
      { title: "E-commerce", description: "Secure, scalable shopping experiences built to sell." },
    ],
    processSteps: [
      {
        title: "Discovery call",
        description:
          "We start with a free consultation to understand your business, goals, target audience, and design preferences.",
      },
      {
        title: "Strategy and wireframe",
        description:
          "Our team maps out site structure, user flow, and visual direction. You get a wireframe before design starts.",
      },
      {
        title: "Design and development",
        description:
          "We bring your website to life with custom design and clean code - mobile-first, fast-loading, and conversion-ready.",
      },
      {
        title: "Review and revisions",
        description: "You review the full website and share feedback. We refine until it is exactly right.",
      },
      {
        title: "Launch and handover",
        description:
          "We deploy your site, run final checks, and hand over credentials, training, and ongoing support options.",
      },
    ],
    whyChoose: [
      { title: "SEO baked in from day one", description: "No retrofitting - every page is optimized before it goes live." },
      { title: "Conversion-focused design", description: "We design with your business goals in mind, not just aesthetics." },
      { title: "Transparent timelines", description: "You always know what is happening and when." },
      { title: "Post-launch support", description: "Updates, fixes, and guidance available after launch." },
      { title: "One point of contact", description: "Strategy, design, and development handled in-house." },
      { title: "Built to scale", description: "Your website evolves as your business grows." },
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "Most business websites take 2-4 weeks. E-commerce or complex projects may take 4-8 weeks based on scope.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely. Every website we build is mobile-first and optimized for phones, tablets, and desktops.",
      },
      {
        question: "Do you offer website maintenance?",
        answer: "Yes. We offer ongoing maintenance packages to keep your website secure, updated, and smooth.",
      },
      {
        question: "Will my website rank on Google?",
        answer:
          "Every site is built with SEO best practices. Pair it with our SEO service for deeper organic growth.",
      },
    ],
    ctaTitle: "Ready to build your website?",
    ctaDescription: "Get a free consultation with AdTune Digital Services today.",
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    navLabel: "SEO",
    shortDescription:
      "Get found on Google with proven SEO strategies that drive sustainable organic traffic and high-quality leads month after month.",
    heroTitle: "Get found. Get chosen. Get ahead.",
    heroSubtitle: "Data-driven SEO strategies that put your business at the top of Google and keep it there.",
    intro:
      "When your customers search for what you offer, they should find you first - not your competitor. AdTune Digital Services delivers long-term, sustainable visibility through technical expertise, on-page optimization, and strategic link building to grow high-intent traffic and lead quality month after month.",
    offerings: [
      { title: "Technical SEO audit", description: "Identify and fix issues holding your website back from ranking." },
      { title: "On-page optimization", description: "Keywords, meta tags, and content structure optimized for Google." },
      { title: "Local SEO", description: "Dominate local results and Google Maps in your city." },
      { title: "Link building", description: "High-authority backlinks that boost domain credibility." },
      { title: "Content strategy", description: "SEO content that ranks and builds audience trust." },
      { title: "Monthly reporting", description: "Clear reports on rankings, traffic growth, and ROI." },
    ],
    processSteps: [
      {
        title: "SEO audit",
        description:
          "We audit technical health, keyword gaps, backlink profile, and competitors to understand where you stand.",
      },
      {
        title: "Keyword and strategy planning",
        description:
          "We identify high-value keywords and build a 3-6 month SEO roadmap aligned to your goals.",
      },
      {
        title: "On-page and technical fixes",
        description:
          "We optimize titles, meta tags, content structure, speed, and technical issues blocking rankings.",
      },
      {
        title: "Content and link building",
        description:
          "We publish SEO-focused content and earn quality backlinks that strengthen authority over time.",
      },
      {
        title: "Track, report, and refine",
        description:
          "You receive monthly progress reports and we continuously refine strategy based on data.",
      },
    ],
    whyChoose: [
      { title: "100% white-hat SEO", description: "Google-compliant strategy without risky shortcuts." },
      { title: "Local SEO specialists", description: "Deep Hyderabad and Bangalore market understanding." },
      { title: "Transparent reporting", description: "Clear updates you can understand and act on." },
      { title: "Content plus technical together", description: "In-house execution across both SEO pillars." },
      { title: "No lock-in contracts", description: "Flexible engagement built on performance and trust." },
      { title: "Results that compound", description: "SEO keeps delivering value long after launch." },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most clients see meaningful improvements in 3-6 months, with stronger gains as work compounds.",
      },
      {
        question: "Do you offer local SEO for Hyderabad businesses?",
        answer:
          "Yes. We provide Google Business Profile optimization, local citations, and location-led keyword targeting.",
      },
      {
        question: "How is AdTune SEO different from other agencies?",
        answer:
          "We combine ethical SEO execution with transparent reporting so you always know what is being done and why.",
      },
      {
        question: "Can you help if my website was penalized by Google?",
        answer:
          "Yes. We run penalty recovery audits, remove harmful signals, and rebuild rankings with compliant methods.",
      },
    ],
    ctaTitle: "Want to rank higher on Google?",
    ctaDescription: "Get a free SEO audit from AdTune Digital Services.",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    navLabel: "Performance Marketing",
    shortDescription:
      "Google Ads, Meta Ads, and full-funnel paid campaigns where every rupee is tracked and every campaign is optimized for real ROI.",
    heroTitle: "Every rupee, accountable. Every campaign, optimized.",
    heroSubtitle: "Performance marketing that drives real leads, lowers CPA, and grows revenue.",
    intro:
      "Stop wasting budget on ads that do not perform. AdTune Digital Services builds, manages, and optimizes paid campaigns across Google and Meta, focused on qualified leads, conversions, and ROI. We track every click, test every creative, and scale what works.",
    offerings: [
      { title: "Google Ads (PPC)", description: "Search, display, and shopping campaigns for high-intent buyers." },
      { title: "Meta Ads", description: "Facebook and Instagram campaigns to reach your ideal audience at scale." },
      { title: "Campaign strategy", description: "Full-funnel planning from awareness to conversion." },
      { title: "A/B testing", description: "Testing ads, copy, and landing pages to maximize ROI." },
      { title: "Retargeting", description: "Convert warm audiences who have already shown interest." },
      { title: "Analytics and reporting", description: "Real-time dashboards with clear monthly performance insights." },
    ],
    processSteps: [
      {
        title: "Business and audience discovery",
        description: "We study your business, audience, competitors, and previous ad performance.",
      },
      {
        title: "Campaign strategy and setup",
        description:
          "We define campaign structure, targeting, budgets, and creative direction for each platform.",
      },
      {
        title: "Creative development",
        description:
          "Our team creates ad copy, creatives, and landing pages designed to convert before scaling spend.",
      },
      {
        title: "Launch and monitor",
        description:
          "Campaigns go live with close daily monitoring to catch opportunities and issues quickly.",
      },
      {
        title: "Optimize and scale",
        description: "We improve bids, targeting, and creatives based on data, then scale winners confidently.",
      },
    ],
    whyChoose: [
      { title: "ROI-first mindset", description: "We optimize for revenue and lead quality, not vanity metrics." },
      { title: "Full creative in-house", description: "Copy, visuals, and landing pages from one coordinated team." },
      { title: "Daily campaign monitoring", description: "Hands-on optimization cadence from launch onward." },
      { title: "Platform-certified team", description: "Google and Meta certified specialists manage your accounts." },
      { title: "Scalable as you grow", description: "Start lean, validate results, and increase spend with confidence." },
      { title: "Honest reporting", description: "Transparent CPA, ROAS, and performance quality every month." },
    ],
    faqs: [
      {
        question: "What is performance marketing?",
        answer:
          "It is paid advertising where campaigns are tracked and optimized for measurable outcomes like leads and sales.",
      },
      {
        question: "What is the minimum budget to get started?",
        answer: "Effective campaigns can start around INR 20,000 per month in ad spend and scale from there.",
      },
      {
        question: "How soon will I see results?",
        answer:
          "Paid campaigns can generate leads within days. Strong ROI improvement usually appears in 30-60 days.",
      },
      {
        question: "Do you manage ad accounts or only set them up?",
        answer: "We fully manage strategy, setup, optimization, creative updates, and monthly reporting.",
      },
    ],
    ctaTitle: "Ready to make your ad spend work harder?",
    ctaDescription: "Get a free campaign audit from AdTune Digital Services.",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    navLabel: "Social Media Marketing",
    shortDescription:
      "Creative content, consistent posting, and smart paid social that grows your audience and builds a brand people trust and buy from.",
    heroTitle: "Build a brand people follow, trust, and buy from.",
    heroSubtitle:
      "Creative, strategic social media marketing that grows your audience and turns followers into customers.",
    intro:
      "Social media is where your customers spend their time - and where AdTune Digital Services helps your brand connect, inspire, and convert. We craft platform-native strategies for Instagram, Facebook, LinkedIn, and more, including content creation, scheduling, community management, and paid social.",
    offerings: [
      { title: "Social strategy", description: "Platform-specific plans aligned to your business goals." },
      { title: "Content creation", description: "Reels, carousels, graphics, and captions that stay on-brand." },
      { title: "Community management", description: "Timely responses and engagement that build loyalty." },
      { title: "Paid social ads", description: "Boosted posts and targeted campaigns to amplify reach." },
      { title: "Influencer outreach", description: "Collaborations with relevant creators for awareness growth." },
      { title: "Analytics reporting", description: "Monthly reports on reach, engagement, and follower growth." },
    ],
    processSteps: [
      {
        title: "Brand and audience audit",
        description:
          "We evaluate your presence, audience behavior, and competitor activity to identify growth opportunities.",
      },
      {
        title: "Strategy and content plan",
        description:
          "We build a monthly calendar with platform-specific themes, formats, and messaging.",
      },
      {
        title: "Content creation",
        description:
          "Our team produces graphics, reels, carousels, and captions, all approved by you before scheduling.",
      },
      {
        title: "Publish and engage",
        description:
          "We publish at high-impact times, manage comments and DMs, and keep your audience engaged.",
      },
      {
        title: "Review and improve",
        description:
          "We share monthly performance reports and refine strategy based on content that resonates best.",
      },
    ],
    whyChoose: [
      { title: "Content made in-house", description: "Design, copy, and video production from one team." },
      { title: "Strategy before content", description: "Every post has a business purpose." },
      { title: "Your approval, always", description: "Nothing goes live without your sign-off." },
      { title: "Engagement management", description: "Active comment and DM handling builds trust." },
      { title: "Paid plus organic together", description: "Balanced growth model for reach and conversion." },
      { title: "Hyderabad market insight", description: "Local cultural context and trend awareness built in." },
    ],
    faqs: [
      {
        question: "Which social media platforms do you manage?",
        answer:
          "We manage Instagram, Facebook, LinkedIn, YouTube, and X based on your business goals and audience.",
      },
      {
        question: "Do you create the content or do we need to provide it?",
        answer:
          "We handle strategy, copywriting, design, and scheduling. You review and approve everything before publishing.",
      },
      {
        question: "How many posts per week do you create?",
        answer:
          "Packages typically range from 3 to 7 posts per week per platform depending on objectives and bandwidth.",
      },
      {
        question: "How long before we see follower growth?",
        answer:
          "Organic growth typically builds in 2-3 months. Pairing organic with paid social can accelerate results.",
      },
    ],
    ctaTitle: "Ready to grow on social media?",
    ctaDescription: "Get a free social media audit from AdTune Digital Services.",
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
