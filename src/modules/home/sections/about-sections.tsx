import { SportTeaDifference } from "@/modules/home/sections/sporttea-difference";
import { WhyChooseUs } from "@/modules/home/sections/why-choose-us";

export function AboutSections() {
  return (
    <section className="container grid max-w-7xl grid-cols-1 gap-6 pb-16 md:grid-cols-2 md:gap-8 md:pb-24 lg:gap-12 lg:pb-32">
      <WhyChooseUs />
      <SportTeaDifference />
    </section>
  );
}
