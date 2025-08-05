import { IconArrowRight } from "@/assets/icons/arrows";

import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <section className="container max-w-7xl">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="relative z-10 flex flex-col gap-3 p-16">
          <h5 className="text-center font-medium font-moret text-5xl text-brand-foreground">
            Your Journey to Wellness <span className="text-primary">Starts with a Steep</span>
          </h5>
          <p className="mb-4 text-center text-lg text-secondary-muted">
            Choose a product that suits your vibe - calming, energizing, spicy, or soothing.
          </p>
          <Button className="mx-auto">
            Talk to our experts
            <div className="flex size-10 items-center justify-center rounded-full bg-white">
              <IconArrowRight className="size-5 text-secondary" />
            </div>
          </Button>
        </div>
        <div className="absolute inset-0 z-2 h-full w-full bg-[linear-gradient(to_right,hsla(0,0%,100%,0.65)_1px,transparent_1px),linear-gradient(to_bottom,hsla(0,0%,100%,0.1)_1px,transparent_1px)] bg-[size:25px_25px]" />
        <div className="absolute inset-0 z-1 h-full w-full [background:radial-gradient(120%_130%_at_50%_20%,#fff_40%,color-mix(in_oklab,_var(--primary)_70%,_transparent)_100%)]" />
      </div>
    </section>
  );
};
