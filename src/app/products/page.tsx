import dynamic from "next/dynamic";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { products } from "@/data/product";
import { ProductCard } from "@/modules/products/components/product-card";

const LazyBrewingGuide = dynamic(
  () => import("@/modules/home/sections/brewing-guide").then((mod) => ({ default: mod.BrewingGuide })),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted" />,
  }
);

const LazyFAQ = dynamic(() => import("@/components/layout/faq").then((mod) => ({ default: mod.FAQ })), {
  loading: () => <div className="h-96 w-full animate-pulse bg-muted" />,
});

export default function ProductsPage() {
  return (
    <main aria-label="SportTea Products">
      <div className="container max-w-7xl pt-7">
        <header className="relative flex aspect-16/6 items-end justify-center overflow-hidden rounded-3xl py-10">
          <h1 className="relative z-10 text-center font-medium text-4xl text-white">
            Browse Bold Blends & Everyday Essentials
          </h1>
          <div className="absolute bottom-0 z-1 h-1/2 w-full bg-gradient-to-t from-foreground/40 to-transparent" />

          <OptimizedImage
            alt="Browse Bold Blends & Everyday Essentials"
            className="object-cover"
            fill
            sizes="99vw"
            src="/images/products-hero.webp"
          />
        </header>
      </div>
      <section aria-labelledby="collection-heading" className="container max-w-7xl pt-12 pb-16 md:pb-32">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl" id="collection-heading">
            Explore Our
            <br />
            <span className="font-moret font-semibold text-3xl text-secondary sm:text-4xl md:text-5xl">
              Signature Collection
            </span>
          </h2>

          <p className="mt-4 max-w-md text-balance sm:mt-0">
            Whether you sip, stir, brew, or cook — SportTea offers a range of premium natural products to elevate your
            daily rituals.
          </p>
        </div>

        <div
          aria-label="Premium tea collection products"
          className="grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2 sm:pt-9 lg:grid-cols-3"
          role="list"
        >
          {products.map((item) => (
            <div key={item.id} role="listitem">
              <ProductCard data={item} />
            </div>
          ))}
        </div>
      </section>
      <LazyBrewingGuide />
      <LazyFAQ />
    </main>
  );
}
