import { IconArrowRight } from "@/assets/icons/arrows";
import { Button } from "@/components/ui/button";
import { type Product, products } from "@/data/product";
import { ProductCard } from "@/modules/products/components/product-card";
import { HomeFeatures } from "@/modules/products/sections/features";
import { HomeHero } from "@/modules/products/sections/hero";

export default function Home() {
  const data: Product[] = products;

  return (
    <main>
      <HomeHero />
      <HomeFeatures />
      <section className="container max-w-7xl pb-32">
        <div>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-3xl">
              Explore Our
              <br />
              <span className="font-moret font-semibold text-5xl text-secondary">Signature Collection</span>
            </h2>
            <Button className="gap-6" variant="outline">
              Explore Collections
              <div className="flex size-10 items-center justify-center rounded-full bg-secondary">
                <IconArrowRight className="size-5 text-secondary-foreground" />
              </div>
            </Button>
          </div>
          <p className="max-w-md">
            Whether you sip, stir, brew, or cook — SportTea offers a range of premium natural products to elevate your
            daily rituals.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-9">
          {data.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
