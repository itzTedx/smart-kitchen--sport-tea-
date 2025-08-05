import { use } from "react";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { products } from "@/data/product";

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

        <div className="space-y-10 p-6">
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
          <div></div>
        </div>
      </header>
    </main>
  );
}
