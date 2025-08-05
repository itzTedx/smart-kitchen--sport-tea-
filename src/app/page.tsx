import { FAQ } from "@/components/layout/faq";
import { type Product, products } from "@/data/product";
import { AboutSections } from "@/modules/home/sections/about-sections";
import { BrewingGuide } from "@/modules/home/sections/brewing-guide";
import { HomeFeatures } from "@/modules/home/sections/features";
import { HomeHero } from "@/modules/home/sections/hero";
import { SignatureCollection } from "@/modules/home/sections/signature-collection";

export default function Home() {
  const data: Product[] = products;

  return (
    <main>
      <HomeHero />
      <HomeFeatures />
      <SignatureCollection products={data} />
      <AboutSections />
      <BrewingGuide />
      <FAQ />
    </main>
  );
}
