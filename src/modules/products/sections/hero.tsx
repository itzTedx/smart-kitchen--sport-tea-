import Image from "next/image";

import { IconLeaf } from "@/assets/icons/leaf";
import { IconTeaCup2 } from "@/assets/icons/tea-cup";
import { Button } from "@/components/ui/button";

export const HomeHero = () => {
  return (
    <section className="relative h-screen space-y-6 py-20 text-center">
      <div className="space-y-3">
        <div className="mx-auto flex max-w-fit items-center gap-2 rounded-full bg-white py-1 pr-4 pl-1 text-secondary">
          <div className="flex size-6 items-center justify-center rounded-full bg-secondary/15">
            <IconTeaCup2 className="size-4 text-secondary" />
          </div>
          <span>Sip the wellness</span>
        </div>
        <h1 className="font-moret font-semibold text-7xl text-brand-foreground">
          Nature’s Essence,
          <br />
          Boldly Brewed with <span className="text-primary">Spice and Soul</span>
        </h1>
        <p className="text-muted-foreground text-xl tracking-tight">
          Discover high-altitude teas, healing herbs, and vibrant spices — ethically sourced and naturally powerful.
        </p>
      </div>
      <Button>
        Explore Collections
        <div className="flex size-10 items-center justify-center rounded-full bg-white">
          <IconLeaf className="size-5 text-secondary" />
        </div>
      </Button>

      <div className="relative mt-6">
        <Image alt="hero" className="mx-auto h-auto w-[65vw]" height={480} src="/images/hero.png" width={1240} />
        <div className="-translate-x-1/2 absolute bottom-0 left-1/2 z-1 h-1/4 w-1/2 rounded-full bg-primary blur-2xl" />
      </div>
      <div className="-z-9 absolute inset-0 h-full w-full bg-[linear-gradient(to_right,var(--background)_1px,transparent_1px),linear-gradient(to_bottom,var(--background)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="-z-10 absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,color-mix(in_oklab,_var(--primary)_70%,_transparent)_100%)]" />
    </section>
  );
};
