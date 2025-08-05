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
      className="space-y-6 rounded-xl border bg-white p-7"
      key={data.id}
    >
      <header>
        <h3 className="font-moret text-2xl" id={`product-title-${data.id}`}>
          {data.title}
        </h3>
        <p className="text-lg">
          ₹{data.price} / {data.unit}
        </p>
      </header>
      <div className="relative size-80">
        <OptimizedImage
          alt={`${data.title} - Premium organic tea product from SportTea`}
          className="object-contain"
          fill
          placeholder="sporttea"
          quality="high"
          src={data.image}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button aria-label={`Add ${data.title} to cart`} className="w-full">
          Shop Now
        </Button>
        <Button aria-label={`Learn more about ${data.title}`} className="w-full" variant="outline">
          Learn More
        </Button>
      </div>
    </article>
  );
};
