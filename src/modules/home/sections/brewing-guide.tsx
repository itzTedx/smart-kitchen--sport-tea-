import Image from "next/image";

import { BREWING_STEPS } from "@/data/constants";

export function BrewingGuide() {
  return (
    <section className="container max-w-7xl pb-32">
      <div className="relative overflow-hidden rounded-3xl p-9">
        <h2 className="relative z-10 text-center font-moret text-5xl text-primary-foreground">
          How to Brew the Perfect Cup
        </h2>
        <ul className="relative z-10 mt-6 grid grid-cols-5 gap-3 text-white">
          {BREWING_STEPS.map((step, i) => (
            <li
              className="inset-shadow-[0_6px_12px_hsla(0,0%,100%,0.25)] flex flex-col gap-2 rounded-xl border-white/30 border-t bg-gradient-to-b from-white/10 to-white/30 p-4 backdrop-blur-lg"
              key={step.title}
            >
              <h3 className="text-white/80 text-xl">
                <span className="sr-only">Step</span> 0{i + 1}
              </h3>
              <p className="mt-6 text-balance font-medium text-lg">{step.description}</p>
            </li>
          ))}
        </ul>
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-foreground/30 to-foreground/10" />
        <Image alt="Brewing Steps" className="object-cover" fill src="/images/brewing-bg.jpg" />
      </div>
    </section>
  );
}
