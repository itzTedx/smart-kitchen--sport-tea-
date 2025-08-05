import Image from "next/image";

import { IconLab } from "@/assets/icons/lab";
import { IconEarthLeaf, IconLeaf, IconLeaf2 } from "@/assets/icons/leaf";
import { IconMountain } from "@/assets/icons/mountains";
import { Separator } from "@/components/ui/separator";

export function WhyChooseUs() {
  return (
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
      <Image alt="Nilgiri's Tea Estate" className="object-cover object-bottom" fill src="/images/features-hero.png" />
    </div>
  );
}
