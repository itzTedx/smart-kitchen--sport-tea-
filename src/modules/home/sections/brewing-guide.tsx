import Image from "next/image";

import { BREWING_STEPS } from "@/data/constants";

export function BrewingGuide() {
  return (
    <section aria-labelledby="brewing-heading" className="container max-w-7xl pb-16 md:pb-32">
      <div className="relative overflow-hidden rounded-2xl p-7 md:rounded-3xl md:p-9">
        <h2
          className="relative z-10 text-balance text-center font-moret text-3xl text-primary-foreground md:text-4xl lg:text-5xl"
          id="brewing-heading"
        >
          How to Brew the Perfect Cup
        </h2>
        <ol
          aria-label="Step-by-step brewing guide"
          className="relative z-10 mt-4 grid grid-cols-2 gap-3 text-white sm:grid-cols-2 md:mt-6 md:gap-4 lg:grid-cols-5"
        >
          {BREWING_STEPS.map((step, i) => (
            <li
              className="inset-shadow-[0_6px_12px_hsla(0,0%,100%,0.25)] flex flex-col gap-2 rounded-xl border-white/30 border-t bg-gradient-to-b from-white/10 to-white/30 p-3 backdrop-blur-lg md:p-4"
              key={step.title}
            >
              <h3 className="text-lg text-white/80 md:text-xl">
                <span className="sr-only">Step</span> 0{i + 1}
              </h3>
              <p className="mt-4 text-balance font-medium text-sm md:mt-6 md:text-base lg:text-lg">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <div aria-hidden="true" className="absolute inset-0 z-1 bg-gradient-to-b from-foreground/50 to-foreground/10" />
        <Image
          alt="Tea brewing process showing steeping tea leaves in hot water"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          src="/images/brewing-bg.webp"
        />
      </div>
    </section>
  );
}
