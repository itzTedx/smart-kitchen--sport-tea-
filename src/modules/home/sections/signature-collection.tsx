import Link from "next/link";

import { IconArrowRight } from "@/assets/icons/arrows";
import { Button } from "@/components/ui/button";
import { type Product } from "@/data/product";
import { ProductCard } from "@/modules/products/components/product-card";

interface SignatureCollectionProps {
  products: Product[];
}

export function SignatureCollection({ products }: SignatureCollectionProps) {
  return (
    <section aria-labelledby="collection-heading" className="container max-w-7xl pb-16 md:pb-32">
      <header>
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <h2 className="text-2xl sm:text-3xl" id="collection-heading">
            Explore Our
            <br />
            <span className="font-moret font-semibold text-3xl text-secondary sm:text-4xl md:text-5xl">
              Signature Collection
            </span>
          </h2>
          <Button
            aria-label="View all tea collections"
            asChild
            className="w-full justify-between gap-3 sm:w-auto sm:gap-6"
            variant="outline"
          >
            <Link href="/products">
              <span>Explore Collections</span>
              <div aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-secondary">
                <IconArrowRight className="size-4 text-secondary-foreground sm:size-5" />
              </div>
            </Link>
          </Button>
        </div>
        <p className="mt-4 max-w-lg text-lg">
          Whether you sip, stir, brew, or cook — Smart Kitchen offers a range of premium natural products to elevate
          your daily rituals.
        </p>
      </header>

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
  );
}
