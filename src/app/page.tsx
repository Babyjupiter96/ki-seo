import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SeoGrowth } from "@/components/SeoGrowth";
import { HowKiWorks } from "@/components/HowKiWorks";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { VerticalCTA } from "@/components/VerticalCTA";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SeoGrowth />
        <HowKiWorks />
        <About />
        <FAQ categories={["SEO"]} />
        <VerticalCTA
          eyebrow="Also Have a Property?"
          title="SEO Builds Demand. Real Estate Finds the Value Underneath It."
          primaryLabel="Grow Your Visibility"
          primaryIntent="grow"
          crossLinkLabel="Explore Real Estate"
          crossLinkHref={siteConfig.realEstateUrl}
          trackPrefix="seo_home_cta"
        />
      </main>
      <Footer />
    </>
  );
}
