import { IconBrain } from "@/assets/icons/brain";
import { IconLeaf } from "@/assets/icons/leaf";
import { IconLocationPin } from "@/assets/icons/location-pin";
import { IconMountain } from "@/assets/icons/mountains";
import { IconShoppingCart } from "@/assets/icons/shopping-cart";
import { IconTeaCup } from "@/assets/icons/tea-cup";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Separator } from "@/components/ui/separator";

import { FeatureCardBg } from "../../products/components/feature-card-bg";

export const HomeFeatures = () => {
  return (
    <section
      aria-labelledby="features-heading"
      className="-mt-16 relative z-2 bg-gradient-to-b from-background/75 to-10% to-background py-14 backdrop-blur-xl md:py-24 lg:py-32"
    >
      <div className="space-y-3 px-4 pb-8 text-center md:px-6 md:pb-12 lg:pb-16">
        <h2 className="text-2xl text-brand-foreground md:text-3xl lg:text-3xl" id="features-heading">
          Crafted by Nature,
          <br />
          <span className="font-moret font-semibold text-3xl text-secondary md:text-4xl lg:text-5xl">
            Chosen for Wellness
          </span>
        </h2>
        <p className="mx-auto max-w-xl text-sm leading-relaxed md:text-base">
          Our teas are sourced from the lush estates of the Nilgiri Hills, delivering a naturally sweet, smooth taste
          with every cup. Organic, pure, and full of wellness.
        </p>
      </div>
      <div className="container grid max-w-7xl grid-cols-1 gap-3 px-4 md:px-6 lg:grid-cols-12">
        <div className="grid gap-3 lg:col-span-7">
          <article className="rounded-xl bg-white p-4 text-center text-brand-foreground md:p-6 lg:p-7">
            <h3 className="font-moret text-2xl md:text-3xl lg:text-[2.625rem]">
              We bring you the <span className="text-primary">purest ingredients</span>
            </h3>
            <p className="mt-2 text-balance md:text-sm">
              High-altitude leaves, earthy herbs, and lively spices - blended to support your body and uplift your
              spirit.
            </p>
          </article>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-7">
            <div className="grid gap-3 md:col-span-3">
              <div
                aria-hidden="true"
                className="flex items-center justify-center gap-2 rounded-xl bg-white py-4 md:gap-2 md:py-5 xl:gap-4"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary-foreground md:size-12 xl:size-16">
                  <IconBrain className="size-5 shrink-0 md:size-6" />
                </div>
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary-foreground md:size-16 xl:size-20">
                  <IconTeaCup className="size-6 shrink-0 md:size-7" />
                </div>
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary-foreground md:size-12 xl:size-16">
                  <IconBrain className="size-5 shrink-0 md:size-6" />
                </div>
              </div>
              <article className="rounded-xl bg-white p-4 md:p-6 lg:p-7">
                <h4 className="font-moret text-lg text-secondary md:text-xl">Herbs That Know Their Roots</h4>
                <p className="mt-2 text-secondary-muted md:text-sm">
                  From digestion to immunity, our herbs aren't just trendy - they've been healing humans longer than
                  most medicines.
                </p>
                <p className="mt-4 text-secondary-muted text-xs md:mt-6 md:tracking-tight">
                  Thousands of years of tradition in every scoop
                </p>
              </article>
            </div>
            <article className="relative flex flex-col justify-end overflow-hidden rounded-xl bg-white p-4 text-center md:col-span-4 md:p-6 lg:p-7">
              <h4 className="z-1 font-moret text-secondary text-xl md:text-2xl">Tea That Powers You</h4>
              <p className="z-1 mt-2 text-secondary-muted md:text-sm md:tracking-tight">
                Each blend is crafted to energize, relax, or restore - supporting focus, calm, and balance with every
                sip.
              </p>

              <FeatureCardBg className="-translate-x-1/2 -bottom-7 md:-bottom-2 absolute left-1/2" />
            </article>
          </div>
          <article className="flex flex-col items-start justify-between gap-4 rounded-xl bg-white p-4 md:flex-row md:items-center md:gap-2 md:p-6 lg:p-7">
            <div className="md:flex-1">
              <h4 className="font-moret text-secondary text-xl md:text-2xl">Fast Delivery & Friendly Support</h4>
              <p className="mt-2 text-balance text-secondary-muted md:text-sm">
                Seamless shopping, fast delivery, and support you can count on—every step from cart to cup.
              </p>
            </div>
            <Button
              aria-label="Contact our tea experts for personalized recommendations"
              className="w-full gap-2 md:w-auto md:gap-4"
            >
              Talk to our expert{" "}
              <div
                aria-hidden="true"
                className="flex size-8 items-center justify-center rounded-full bg-white md:size-10"
              >
                <IconShoppingCart className="size-4 text-secondary md:size-5" />
              </div>
            </Button>
          </article>
        </div>
        <article className="relative mt-3 flex flex-col justify-between overflow-hidden rounded-xl bg-white p-4 md:p-6 lg:col-span-5 lg:mt-0 lg:p-7">
          <h4 className="bg-gradient-to-b from-secondary to-secondary/20 bg-clip-text text-center font-moret text-4xl text-transparent leading-none tracking-tighter md:text-5xl lg:text-[5.4rem]">
            100% Organic
          </h4>
          <div className="z-1 mt-4 w-fit space-y-3 rounded-xl bg-gradient-to-b from-white/60 to-white/40 p-3 backdrop-blur-lg md:mt-6">
            <div className="md:text-sm">Nilgiri Hills</div>
            <div className="space-y-4 rounded-lg bg-white p-4 md:p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1">
                    <IconLocationPin aria-hidden="true" className="size-4 text-primary md:size-5" />
                    <h3 className="font-medium text-base md:text-lg">Blue Mountains of India</h3>
                  </div>
                  <p className="md:text-sm">
                    Grown in the <span className="font-medium">Nilgiri Hills</span>
                  </p>
                </div>
                <IconMountain aria-hidden="true" className="size-8 md:size-10" />
              </div>
              <Separator />
              <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4" role="list">
                <li className="text-center" role="listitem">
                  <h5 className="text-muted-foreground text-xs tracking-tight md:text-sm">Organic</h5>
                  <p className="font-moret font-semibold text-lg md:text-xl">100%</p>
                </li>
                <li className="text-center" role="listitem">
                  <h5 className="text-muted-foreground text-xs tracking-tight md:text-sm">Pesticides</h5>
                  <p className="font-moret font-semibold text-lg md:text-xl">Free</p>
                </li>
                <li className="text-center" role="listitem">
                  <h5 className="text-muted-foreground text-xs tracking-tight md:text-sm">Additives</h5>
                  <p className="font-moret font-semibold text-lg md:text-xl">Zero</p>
                </li>
                <li className="text-center" role="listitem">
                  <h5 className="text-muted-foreground text-xs tracking-tight md:text-sm">Artificial</h5>
                  <p className="font-moret font-semibold text-lg md:text-xl">0%</p>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white p-4 md:p-5">
              <div
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-white md:size-12"
              >
                <IconLeaf className="size-6 md:size-8" />
              </div>
              <p className="text-base leading-tight md:text-lg">
                Just <strong className="font-medium text-secondary">Pure & Aromatic</strong> flavour <br />
                as nature intended
              </p>
            </div>
          </div>
          <OptimizedImage
            alt="Nilgiri Hills tea estate showing organic tea cultivation in the Blue Mountains of India"
            className="object-cover object-bottom"
            fill
            placeholder="sporttea"
            quality="high"
            src="/images/features-hero.webp"
          />
        </article>
      </div>
    </section>
  );
};
