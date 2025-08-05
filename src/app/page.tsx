import { FAQ } from "@/components/layout/faq";
import { type Product, products } from "@/data/product";
import { AboutSections } from "@/modules/home/sections/about-sections";
import { BrewingGuide } from "@/modules/home/sections/brewing-guide";
import { HomeFeatures } from "@/modules/home/sections/features";
import { HomeHero } from "@/modules/home/sections/hero";
import { SignatureCollection } from "@/modules/home/sections/signature-collection";

export default function Home() {
  const data: Product[] = products;

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SportTea",
    url: "https://sporttea.in",
    logo: "https://sporttea.in/logo.svg",
    description: "Premium organic tea and wellness products from the Nilgiri Hills",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
    },
    sameAs: ["https://facebook.in/sporttea", "https://twitter.in/sporttea", "https://instagram.in/sporttea"],
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SportTea Premium Tea Collection",
    description: "Premium organic tea products from the Nilgiri Hills",
    itemListElement: data.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        description: product.overview,
        image: `https://sporttea.com${product.image}`,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        brand: {
          "@type": "Brand",
          name: "SportTea",
        },
        category: "Tea Products",
      },
    })),
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
        type="application/ld+json"
      />

      <main aria-label="SportTea Homepage" role="main">
        <HomeHero />
        <HomeFeatures />
        <SignatureCollection products={data} />
        <AboutSections />
        <BrewingGuide />
        <FAQ />
      </main>
    </>
  );
}
