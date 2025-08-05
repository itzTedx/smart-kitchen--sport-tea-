import Image from "next/image";

import { IconArrowRight } from "@/assets/icons/arrows";
import { IconLab } from "@/assets/icons/lab";
import { IconEarthLeaf, IconLeaf, IconLeaf2 } from "@/assets/icons/leaf";
import { IconMountain } from "@/assets/icons/mountains";
import { IconTeaCup2 } from "@/assets/icons/tea-cup";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BREWING_STEPS, FAQS } from "@/data/constants";
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
      <section className="container grid max-w-7xl grid-cols-2 gap-3 pb-32">
        <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-white p-7">
          <h4 className="text-nowrap bg-gradient-to-b from-secondary to-secondary/20 bg-clip-text text-center font-moret text-[5.4rem] text-transparent leading-none tracking-tighter">
            100% Organic
          </h4>
          <div className="z-1 w-fit space-y-3 rounded-xl bg-gradient-to-b from-white/60 to-white/40 p-3 backdrop-blur-lg">
            <div className="">Why choose us</div>
            <div className="space-y-4 rounded-lg bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-medium text-lg">
                  Natural Products that work <br /> as hard as you do
                </h3>

                <IconMountain />
              </div>
              <Separator />
              <ul className="w-fit divide-y">
                <li className="flex items-center gap-2 pb-1.5">
                  <IconLeaf2 className="size-5 text-primary" />
                  <p className="text-lg">100% Natural Ingredients</p>
                </li>
                <li className="flex items-center gap-2 py-1.5">
                  <IconEarthLeaf className="size-5 text-primary" />
                  <p className="text-lg">Ethically & Locally Sourced</p>
                </li>
                <li className="flex items-center gap-2 pt-1.5">
                  <IconLab className="size-5 text-primary" />
                  <p className="text-lg">Lab-Tested for Purity</p>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white p-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-secondary text-white">
                <IconLeaf className="size-8" />
              </div>
              <p className="text-lg leading-tight">
                Just <strong className="font-medium text-secondary">Pure & Aromatic</strong> flavour <br />
                as nature intended
              </p>
            </div>
          </div>
          <Image
            alt="Nilgiri's Tea Estate"
            className="object-cover object-bottom"
            fill
            src="/images/features-hero.png"
          />
        </div>
        <div className="p-6">
          <div>
            <div className="flex max-w-fit items-center gap-2 rounded-full bg-white py-1 pr-4 pl-1 text-secondary">
              <div className="flex size-6 items-center justify-center rounded-full bg-secondary/15">
                <IconTeaCup2 className="size-4 text-secondary" />
              </div>
              <span>Sip the wellness</span>
            </div>
            <h2 className="mt-3 text-3xl text-brand-foreground">
              What Makes
              <br />
              <span className="font-moret font-semibold text-5xl text-secondary">SportTea Different?</span>
            </h2>
            <span className="mt-8 block space-y-3 text-balance text-secondary-muted text-xl leading-relaxed tracking-tight">
              <p>
                At Sport Tea, we believe tea isn&apos;t just a beverage - it&apos;s a ritual of wellness, focus, and
                comfort. Whether you&apos;re starting your morning or winding down in the evening, our handcrafted
                blends bring balance and refreshment to every moment.
              </p>
              <p>
                From the misty Nilgiri mountains to your mug, we deliver nature&apos;s best - pure, aromatic, and full
                of flavor.
              </p>
            </span>
          </div>
          <ul className="mt-20 flex items-center justify-center gap-8">
            <li className="flex flex-col items-center gap-2">
              <div className="size-20 rounded-full bg-primary-foreground" />
              <p>Handpicked</p>
            </li>
            <li className="flex flex-col items-center gap-2">
              <div className="size-20 rounded-full bg-primary-foreground" />
              <p>No Artificial</p>
            </li>
            <li className="flex flex-col items-center gap-2">
              <div className="size-20 rounded-full bg-primary-foreground" />
              <p>Quick Brewing</p>
            </li>
            <li className="flex flex-col items-center gap-2">
              <div className="size-20 rounded-full bg-primary-foreground" />
              <p>Quick Delivery</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="container max-w-7xl pb-32">
        <div className="relative overflow-hidden rounded-3xl p-9">
          <h2 className="relative z-10 text-center font-moret text-5xl text-primary-foreground">
            How to Brew the Perfect Cup
          </h2>
          <ul className="relative z-10 mt-6 grid grid-cols-5 gap-3 text-white">
            {BREWING_STEPS.map((step, i) => (
              <li
                className="inset-shadow-[0_6px_12px_hsla(0,0%,100%,0.25)] flex flex-col gap-2 rounded-xl border-white/30 border-t bg-gradient-to-b from-white/10 to-white/30 p-4 backdrop-blur-lg"
                key={step.title}
              >
                <h3 className="text-white/80 text-xl">
                  <span className="sr-only">Step</span> 0{i + 1}
                </h3>
                <p className="mt-6 text-balance font-medium text-lg">{step.description}</p>
              </li>
            ))}
          </ul>
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-foreground/30 to-foreground/10" />
          <Image alt="Brewing Steps" className="object-cover" fill src="/images/brewing-bg.jpg" />
        </div>
      </section>
      <section className="container max-w-7xl pb-32">
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl text-brand-foreground">
              Frequently
              <br />
              <span className="font-moret font-semibold text-5xl text-secondary"> Asked Questions</span>
            </h2>
          </div>
          <div className="col-span-2 grid gap-3">
            <Accordion className="w-full space-y-2" defaultValue="01" type="single">
              {FAQS.map((item) => (
                <AccordionItem
                  className="rounded-md border border-secondary-hover/40 bg-secondary-foreground/50 px-4 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
                  key={item.id}
                  value={item.id}
                >
                  <AccordionTrigger className="py-2 font-medium text-secondary leading-6 hover:no-underline focus-visible:ring-0">
                    <div className="flex items-center gap-4 text-xl">
                      <span className="text-secondary/60">{item.id}</span>
                      {item.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 pl-10 text-secondary-muted text-xl">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <footer className="bg-secondary p-3 text-center text-secondary-foreground">
        <h5>2025 © Copyright, Sport Tea LLC.</h5>
      </footer>
    </main>
  );
}
