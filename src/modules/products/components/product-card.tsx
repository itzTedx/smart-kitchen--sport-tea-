import Link from "next/link";

import { IconShoppingCart } from "@/assets/icons/shopping-cart";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Product } from "@/data/product";

interface Props {
  data: Product;
}

export const ProductCard = ({ data }: Props) => {
  return (
    <article
      aria-labelledby={`product-title-${data.id}`}
      className="group relative overflow-hidden rounded-xl border bg-white p-7 shadow-md shadow-secondary/5"
      key={data.id}
    >
      <Link
        className="absolute inset-0 z-20"
        href={`/products/${data.slug}`}
        title={`View ${data.title} product details`}
      />

      <header className="mb-6">
        <h3 className="font-moret text-2xl text-secondary" id={`product-title-${data.id}`}>
          {data.title}
        </h3>
        <p className="text-lg">
          ₹{data.price} / {data.unit}
        </p>
      </header>
      <div className="relative mb-6 size-80">
        <OptimizedImage
          alt={`${data.title} - Premium organic tea product from SportTea`}
          className="group-hover:-rotate-1 object-contain transition-transform ease-out group-hover:scale-105"
          fill
          placeholder="sporttea"
          quality="high"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={data.image}
        />
      </div>

      <Button aria-label={`Add ${data.title} to cart`} asChild className="relative z-99 w-full justify-between">
        <Link href={`/products/${data.slug}`}>
          Shop Now{" "}
          <div aria-hidden="true" className="flex size-8 items-center justify-center rounded-full bg-white sm:size-10">
            <IconShoppingCart className="size-4 text-secondary sm:size-5" />
          </div>
        </Link>
      </Button>

      <div className="-translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-0 h-1/2 w-6 rounded-full bg-primary/50 opacity-0 blur-2xl transition-opacity duration-300 ease-in group-hover:opacity-100" />
      <div className="-translate-y-1/2 absolute top-1/2 right-0 h-1/2 w-6 translate-x-1/2 rounded-full bg-primary/50 opacity-0 blur-2xl transition-opacity duration-300 ease-in group-hover:opacity-100" />
    </article>
  );
};
