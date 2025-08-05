import Image from "next/image";

import { IconBrain } from "@/assets/icons/brain";
import { IconLeaf } from "@/assets/icons/leaf";
import { IconLocationPin } from "@/assets/icons/location-pin";
import { IconMountain } from "@/assets/icons/mountains";
import { IconShoppingCart } from "@/assets/icons/shopping-cart";
import { IconTeaCup } from "@/assets/icons/tea-cup";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { FeatureCardBg } from "../components/feature-card-bg";

export const HomeFeatures = () => {
  return (
    <section className="-mt-16 relative z-2 bg-gradient-to-b from-background/75 to-10% to-background py-32 backdrop-blur-xl">
      <div className="space-y-3 pb-16 text-center">
        <h2 className="text-3xl text-brand-foreground">
          Crafted by Nature,
          <br />
          <span className="font-moret font-semibold text-5xl text-secondary">Chosen for Wellness</span>
        </h2>
        <p className="mx-auto max-w-xl">
          Our teas are sourced from the lush estates of the Nilgiri Hills, delivering a naturally sweet, smooth taste
          with every cup. Organic, pure, and full of wellness.
        </p>
      </div>
      <div className="container grid max-w-7xl grid-cols-12 gap-3">
        <div className="col-span-7 grid gap-3">
          <div className="rounded-xl bg-white p-7 text-center text-brand-foreground">
            <h3 className="font-moret text-[2.625rem] tracking-tight">
              We bring you the <span className="text-primary">purest ingredients</span>
            </h3>
            <p className="text-sm tracking-tight">
              High-altitude leaves, earthy herbs, and lively spices - blended to support your body and uplift your
              spirit.
            </p>
          </div>
          <div className="grid grid-cols-7 gap-3">
            <div className="col-span-3 grid gap-3">
              <div className="flex items-center justify-center gap-2 rounded-xl bg-white py-5 md:gap-2 xl:gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary-foreground xl:size-16">
                  <IconBrain className="shrink-0" />
                </div>
                <div className="flex size-16 items-center justify-center rounded-xl bg-primary-foreground xl:size-20">
                  <IconTeaCup className="shrink-0" />
                </div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary-foreground xl:size-16">
                  <IconBrain className="shrink-0" />
                </div>
              </div>
              <div className="rounded-xl bg-white p-7">
                <h4 className="font-moret text-secondary text-xl">Herbs That Know Their Roots</h4>
                <p className="text-secondary-muted text-sm">
                  From digestion to immunity, our herbs aren’t just trendy - they’ve been healing humans longer than
                  most medicines.
                </p>
                <p className="mt-6 text-secondary-muted text-xs tracking-tight">
                  Thousands of years of tradition in every scoop
                </p>
              </div>
            </div>
            <div className="relative col-span-4 flex flex-col justify-end overflow-hidden rounded-xl bg-white p-7 text-center">
              <h4 className="z-1 font-moret text-2xl text-secondary">Tea That Powers You</h4>
              <p className="z-1 text-secondary-muted text-sm tracking-tight">
                Each blend is crafted to energize, relax, or restore - supporting focus, calm, and balance with every
                sip.
              </p>

              <FeatureCardBg className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 rounded-xl bg-white p-7">
            <div className="">
              <h4 className="font-moret text-2xl">Fast Delivery & Friendly Support</h4>
              <p className="text-balance text-secondary-muted text-sm">
                Seamless shopping, fast delivery, and support you can count on—every step from cart to cup.
              </p>
            </div>
            <Button className="gap-4">
              Talk to our expert{" "}
              <div className="flex size-10 items-center justify-center rounded-full bg-white">
                <IconShoppingCart className="size-5 text-secondary" />
              </div>
            </Button>
          </div>
        </div>
        <div className="relative col-span-5 flex flex-col justify-between overflow-hidden rounded-xl bg-white p-7">
          <h4 className="text-nowrap bg-gradient-to-b from-secondary to-secondary/20 bg-clip-text text-center font-moret text-[5.4rem] text-transparent leading-none tracking-tighter">
            100% Organic
          </h4>
          <div className="z-1 w-fit space-y-3 rounded-xl bg-gradient-to-b from-white/60 to-white/40 p-3 backdrop-blur-lg">
            <div className="">Nilgiri Hills</div>
            <div className="space-y-4 rounded-lg bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1">
                    <IconLocationPin className="text-primary" />
                    <h3 className="font-medium text-lg">Blue Mountains of India</h3>
                  </div>
                  <p>
                    Grown in the <span className="font-medium">Nilgiri Hills</span>
                  </p>
                </div>
                <IconMountain />
              </div>
              <Separator />
              <ul className="flex items-center gap-4">
                <li className="text-center">
                  <h5 className="text-muted-foreground tracking-tight">Organic</h5>
                  <p className="font-moret font-semibold text-xl">100%</p>
                </li>
                <li className="text-center">
                  <h5 className="text-muted-foreground tracking-tight">Pesticides</h5>
                  <p className="font-moret font-semibold text-xl">Free</p>
                </li>
                <li className="text-center">
                  <h5 className="text-muted-foreground tracking-tight">Additives</h5>
                  <p className="font-moret font-semibold text-xl">Zero</p>
                </li>
                <li className="text-center">
                  <h5 className="text-muted-foreground tracking-tight">Artificial</h5>
                  <p className="font-moret font-semibold text-xl">0%</p>
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
      </div>
    </section>
  );
};
