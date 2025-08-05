import Image from "next/image";

import { IconLab } from "@/assets/icons/lab";
import { IconEarthLeaf, IconLeaf, IconLeaf2 } from "@/assets/icons/leaf";
import { IconMountain } from "@/assets/icons/mountains";
import { Separator } from "@/components/ui/separator";

export function WhyChooseUs() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-white p-4 sm:p-6 lg:p-7">
      <h4 className="text-nowrap bg-gradient-to-b from-secondary to-secondary/20 bg-clip-text text-center font-moret text-3xl text-transparent leading-none tracking-tighter sm:text-4xl md:text-5xl lg:text-[5.4rem]">
        100% Organic
      </h4>
      <div className="z-1 w-fit space-y-2 rounded-xl bg-gradient-to-b from-white/60 to-white/40 p-2 backdrop-blur-lg sm:space-y-3 sm:p-3">
        <div className="text-sm sm:text-base">Why choose us</div>
        <div className="space-y-3 rounded-lg bg-white p-3 sm:space-y-4 sm:p-4 lg:p-5">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <h3 className="font-medium text-base sm:text-lg">
              Natural Products that work <br /> as hard as you do
            </h3>

            <IconMountain className="size-6 sm:size-8" />
          </div>
          <Separator />
          <ul className="w-fit divide-y">
            <li className="flex items-center gap-2 pb-1.5">
              <IconLeaf2 className="size-4 text-primary sm:size-5" />
              <p className="text-base sm:text-lg">100% Natural Ingredients</p>
            </li>
            <li className="flex items-center gap-2 py-1.5">
              <IconEarthLeaf className="size-4 text-primary sm:size-5" />
              <p className="text-base sm:text-lg">Ethically & Locally Sourced</p>
            </li>
            <li className="flex items-center gap-2 pt-1.5">
              <IconLab className="size-4 text-primary sm:size-5" />
              <p className="text-base sm:text-lg">Lab-Tested for Purity</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white p-3 sm:gap-3 sm:p-4 lg:p-5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-white sm:size-12">
            <IconLeaf className="size-6 sm:size-8" />
          </div>
          <p className="text-base leading-tight sm:text-lg">
            Just <strong className="font-medium text-secondary">Pure & Aromatic</strong> flavour <br />
            as nature intended
          </p>
        </div>
      </div>
      <Image alt="Nilgiri's Tea Estate" className="object-cover object-bottom" fill src="/images/features-hero.png" />
    </div>
  );
}
