import { IconTeaCup2 } from "@/assets/icons/tea-cup";

export function SportTeaDifference() {
  return (
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
            comfort. Whether you&apos;re starting your morning or winding down in the evening, our handcrafted blends
            bring balance and refreshment to every moment.
          </p>
          <p>
            From the misty Nilgiri mountains to your mug, we deliver nature&apos;s best - pure, aromatic, and full of
            flavor.
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
  );
}
