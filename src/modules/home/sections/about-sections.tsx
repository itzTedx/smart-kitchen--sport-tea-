import { WhyChooseUs } from "@/modules/home/sections/why-choose-us";

import { SmartKitchenDifference } from "./difference";

export function AboutSections() {
  return (
    <section
      className="container grid max-w-7xl scroll-mt-32 grid-cols-1 gap-6 pb-16 md:grid-cols-2 md:gap-8 md:pb-24 lg:gap-12 lg:pb-32"
      id="about"
    >
      <WhyChooseUs />
      <SmartKitchenDifference />
    </section>
  );
}
