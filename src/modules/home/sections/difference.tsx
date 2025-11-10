import { IconGauge } from "@/assets/icons/gauge";
import { IconHandPick } from "@/assets/icons/hand-pick";
import { IconShield } from "@/assets/icons/shield";
import { IconTeaCup2 } from "@/assets/icons/tea-cup";
import { IconTruck } from "@/assets/icons/truck";

export function SmartKitchenDifference() {
  return (
    <article className="sm:p-6">
      <header>
        <div className="flex max-w-fit items-center gap-2 rounded-full bg-white py-1 pr-3 pl-1 text-secondary sm:pr-4">
          <div
            aria-hidden="true"
            className="flex size-5 items-center justify-center rounded-full bg-secondary/15 sm:size-6"
          >
            <IconTeaCup2 className="size-3 text-secondary sm:size-4" />
          </div>
          <span className="text-sm sm:text-base">Nature in a cup</span>
        </div>
        <h2 className="mt-2 text-2xl text-brand-foreground sm:mt-3 sm:text-3xl">
          What Makes
          <br />
          <span className="font-moret font-semibold text-3xl text-secondary sm:text-4xl md:text-5xl">
            SmartKitchen Different?
          </span>
        </h2>
        <div className="mt-6 block space-y-3 text-balance text-lg text-secondary-muted leading-relaxed sm:mt-8 md:tracking-tight lg:text-xl">
          <p>
            At Smart Kitchen, we believe tea isn&apos;t just a beverage - it&apos;s a ritual of wellness, focus, and
            comfort. Whether you&apos;re starting your morning or winding down in the evening, our handcrafted blends
            bring balance and refreshment to every moment.
          </p>
          <p>
            From the misty Nilgiri mountains to your mug, we deliver nature&apos;s best - pure, aromatic, and full of
            flavor.
          </p>
        </div>
      </header>
      <ul
        aria-label="Key features that make Smart Kitchen different"
        className="mt-12 flex items-center justify-center gap-4 sm:mt-16 sm:gap-6 lg:mt-20 lg:gap-8"
        role="list"
      >
        <li className="flex flex-col items-center gap-2" role="listitem">
          <div
            aria-hidden="true"
            className="flex size-16 items-center justify-center rounded-full bg-primary-foreground text-primary sm:size-18 lg:size-20"
          >
            <IconHandPick className="size-6 sm:size-9" />
          </div>
          <p className="text-sm sm:text-base">Handpicked</p>
        </li>
        <li className="flex flex-col items-center gap-2" role="listitem">
          <div
            aria-hidden="true"
            className="flex size-16 items-center justify-center rounded-full bg-primary-foreground text-primary sm:size-18 lg:size-20"
          >
            <IconShield className="size-6 sm:size-9" />
          </div>
          <p className="text-sm sm:text-base">No Artificial</p>
        </li>
        <li className="flex flex-col items-center gap-2" role="listitem">
          <div
            aria-hidden="true"
            className="flex size-16 items-center justify-center rounded-full bg-primary-foreground text-primary sm:size-18 lg:size-20"
          >
            <IconGauge className="size-6 sm:size-9" />
          </div>
          <p className="text-sm sm:text-base">Quick Brewing</p>
        </li>
        <li className="flex flex-col items-center gap-2" role="listitem">
          <div
            aria-hidden="true"
            className="flex size-16 items-center justify-center rounded-full bg-primary-foreground text-primary sm:size-18 lg:size-20"
          >
            <IconTruck className="size-6 sm:size-9" />
          </div>
          <p className="text-sm sm:text-base">Quick Delivery</p>
        </li>
      </ul>
    </article>
  );
}
