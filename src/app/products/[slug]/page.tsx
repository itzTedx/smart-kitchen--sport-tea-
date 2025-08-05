import { use } from "react";

import { FAQ } from "@/components/layout/faq";
import QuantitySelector from "@/components/quantity-selector";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { products } from "@/data/product";
import { BrewingGuide } from "@/modules/home/sections/brewing-guide";
import { SignatureCollection } from "@/modules/home/sections/signature-collection";

type Params = Promise<{ slug: string }>;

export default function ProductDetailPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="pt-12">
      <header className="container grid max-w-7xl grid-cols-1 gap-4 pb-32 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
          <OptimizedImage alt="" className="object-contain" fill src={product.image} />
        </div>

        <div className="space-y-7 p-4">
          <div>
            <h1 className="font-moret text-4xl">{product.title}</h1>
            <p className="font-medium text-lg">
              ₹{product.price} / {product.unit}
            </p>
          </div>
          <div>
            <h2 className="text-muted-foreground text-sm">Overview</h2>
            <p className="whitespace-pre-line">{product.overview}</p>
          </div>
          <div className="flex items-center gap-3">
            <QuantitySelector />
            <Button className="flex-1">Add to Cart</Button>
          </div>
          <div>
            <h2 className="text-muted-foreground text-sm">Benefits</h2>
            <ul className="flex flex-wrap gap-3">
              {product.benefits.map((benefit) => (
                <li
                  className="rounded-full border border-secondary-hover/60 bg-white px-4 py-2 text-secondary text-sm"
                  key={benefit.id}
                >
                  {benefit.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <BrewingGuide />
      <SignatureCollection products={products.slice(0, 3)} />

      <FAQ />
    </main>
  );
}
