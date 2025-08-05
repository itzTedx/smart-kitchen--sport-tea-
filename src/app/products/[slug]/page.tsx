import { use } from "react";
import { Metadata } from "next";

import { FAQ } from "@/components/layout/faq";
import QuantitySelector from "@/components/quantity-selector";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Product, products } from "@/data/product";
import { BrewingGuide } from "@/modules/home/sections/brewing-guide";
import { SignatureCollection } from "@/modules/home/sections/signature-collection";

type Params = Promise<{ slug: string }>;

// Generate static params for all products at build time
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.title} - Sport Tea`,
    description: product.overview.substring(0, 160),
    keywords: [
      "tea",
      "sport tea",
      "herbal tea",
      "wellness",
      "health",
      product.title.toLowerCase(),
      ...product.benefits.map((b) => b.title.toLowerCase()),
    ].join(", "),
    openGraph: {
      title: product.title,
      description: product.overview.substring(0, 160),
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.overview.substring(0, 160),
      images: [product.image],
    },
  };
}

// Generate structured data for SEO
function generateStructuredData(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.overview,
    image: product.image,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    category: "Tea",
    brand: {
      "@type": "Brand",
      name: "Sport Tea",
    },
  };
}

export default function ProductDetailPage({ params }: { params: Params }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="container max-w-7xl pt-12">
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 font-moret text-2xl md:text-3xl">Product Not Found</h1>
            <p className="text-muted-foreground">The requested product could not be found.</p>
          </div>
        </div>
      </main>
    );
  }

  const structuredData = generateStructuredData(product);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />
      <main className="pt-6 md:pt-12">
        <header className="container max-w-7xl">
          {/* Mobile Layout */}
          <div className="block pb-12 md:hidden">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
                <OptimizedImage alt={product.title} className="object-contain" fill src={product.image} />
              </div>

              <div className="space-y-4 px-4">
                <div>
                  <h1 className="font-moret text-2xl leading-tight">{product.title}</h1>
                  <p className="mt-2 font-medium text-lg">
                    ₹{product.price} / {product.unit}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <QuantitySelector />
                  <Button className="flex-1">Add to Cart</Button>
                </div>

                <div>
                  <h2 className="mb-2 font-medium text-muted-foreground text-sm">Overview</h2>
                  <p className="whitespace-pre-line text-sm leading-relaxed">{product.overview}</p>
                </div>

                <div>
                  <h2 className="mb-3 font-medium text-muted-foreground text-sm">Benefits</h2>
                  <ul className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit) => (
                      <li
                        className="rounded-full border border-secondary-hover/60 bg-white px-3 py-1.5 text-secondary text-xs"
                        key={benefit.id}
                      >
                        {benefit.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden pb-16 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 lg:pb-32">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
              <OptimizedImage alt={product.title} className="object-contain" fill src={product.image} />
            </div>

            <div className="space-y-7 p-4">
              <div>
                <h1 className="font-moret text-4xl">{product.title}</h1>
                <p className="mt-2 font-medium text-lg">
                  ₹{product.price} / {product.unit}
                </p>
              </div>
              <div>
                <h2 className="mb-2 font-medium text-muted-foreground text-sm">Overview</h2>
                <p className="whitespace-pre-line leading-relaxed">{product.overview}</p>
              </div>
              <div className="flex items-center gap-3">
                <QuantitySelector />
                <Button className="flex-1">Add to Cart</Button>
              </div>
              <div>
                <h2 className="mb-3 font-medium text-muted-foreground text-sm">Benefits</h2>
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
          </div>
        </header>

        <BrewingGuide />
        <SignatureCollection products={products.slice(0, 3)} />
        <FAQ />
      </main>
    </>
  );
}
