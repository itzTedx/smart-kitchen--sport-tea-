import Image from "next/image";
import Link from "next/link";

import { IconLeaf } from "@/assets/icons/leaf";
import { IconTeaCup2 } from "@/assets/icons/tea-cup";
import { Button } from "@/components/ui/button";

export const HomeHero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative space-y-4 px-4 py-12 text-center sm:space-y-6 sm:py-16 md:h-screen md:py-20 lg:space-y-8"
      role="banner"
    >
      <div className="space-y-2 sm:space-y-3 lg:space-y-4">
        <div className="mx-auto flex max-w-fit items-center gap-1.5 rounded-full bg-white py-1 pr-3 pl-1 text-secondary sm:gap-2 sm:pr-4">
          <div
            aria-hidden="true"
            className="flex size-5 items-center justify-center rounded-full bg-secondary/15 sm:size-6"
          >
            <IconTeaCup2 className="size-3 text-secondary sm:size-4" />
          </div>
          <span className="text-sm sm:text-base">Sip the wellness</span>
        </div>
        <h1
          className="text-balance font-moret font-semibold text-4xl text-brand-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          id="hero-heading"
        >
          Nature's Essence, <br className="hidden sm:block" />
          Boldly Brewed with <span className="text-primary">Spice and Soul</span>
        </h1>
        <p className="text-base text-muted-foreground tracking-tight sm:text-lg md:text-xl lg:mx-auto lg:max-w-4xl">
          Discover high-altitude teas, healing herbs, and vibrant spices — ethically sourced and naturally powerful.
        </p>
      </div>
      <Button aria-label="Explore our tea collections" asChild className="text-sm sm:text-base">
        <Link href="/products">
          Explore Collections
          <div aria-hidden="true" className="flex size-8 items-center justify-center rounded-md bg-white sm:size-10">
            <IconLeaf className="size-4 text-secondary sm:size-5" />
          </div>
        </Link>
      </Button>

      <div className="-mb-6 relative mt-6">
        <Image
          alt="Premium organic tea collection from SportTea featuring high-altitude teas from Nilgiri Hills"
          className="mx-auto h-auto w-[90vw] sm:w-[80vw] md:w-[75vw] lg:w-[65vw]"
          height={480}
          priority
          src="/images/hero.webp"
          width={1240}
        />
        <div
          aria-hidden="true"
          className="-translate-x-1/2 absolute bottom-0 left-1/2 z-1 h-1/4 w-1/2 rounded-full bg-primary blur-2xl"
        />
      </div>
      <div
        aria-hidden="true"
        className="-z-9 absolute inset-0 h-full w-full bg-[linear-gradient(to_right,var(--background)_1px,transparent_1px),linear-gradient(to_bottom,var(--background)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 md:bg-[linear-gradient(to_right,var(--background)_1px,transparent_1px),linear-gradient(to_bottom,var(--background)_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="-z-10 absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,color-mix(in_oklab,_var(--primary)_70%,_transparent)_100%)]"
      />
    </section>
  );
};
