import dynamic from "next/dynamic";

import { type Product, products } from "@/data/product";
import { HomeFeatures } from "@/modules/home/sections/features";
import { HomeHero } from "@/modules/home/sections/hero";
import { SignatureCollection } from "@/modules/home/sections/signature-collection";

// Lazy load non-critical components
const LazyAboutSections = dynamic(
  () => import("@/modules/home/sections/about-sections").then((mod) => ({ default: mod.AboutSections })),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted" />,
  }
);

const LazyBrewingGuide = dynamic(
  () => import("@/modules/home/sections/brewing-guide").then((mod) => ({ default: mod.BrewingGuide })),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted" />,
  }
);

const LazyFAQ = dynamic(() => import("@/components/layout/faq").then((mod) => ({ default: mod.FAQ })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted" />,
});

export default function Home() {
  const data: Product[] = products;

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Smart Kitchen",
    url: "https://smartkitchen.store",
    logo: "https://smartkitchen.store/logo.svg",
    description: "Premium organic tea and wellness products from the Nilgiri Hills",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
    },
    sameAs: [
      "https://facebook.com/smart Kitchen",
      "https://twitter.com/smart Kitchen",
      "https://instagram.com/smart Kitchen",
    ],
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Smart Kitchen Premium Tea Collection",
    description: "Premium organic tea products from the Nilgiri Hills",
    itemListElement: data.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        description: product.overview,
        image: `https://smartkitchen.store/${product.image}`,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        brand: {
          "@type": "Brand",
          name: "Smart Kitchen",
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

      <main aria-label="Smart Kitchen Homepage" role="main">
        {/* Critical components - load immediately */}
        <HomeHero />
        <HomeFeatures />
        <SignatureCollection products={data} />

        {/* Non-critical components - lazy load */}
        <LazyAboutSections />
        <LazyBrewingGuide />
        <LazyFAQ />
      </main>
    </>
  );
}
