import { SportTeaDifference } from "@/modules/home/sections/sporttea-difference";
import { WhyChooseUs } from "@/modules/home/sections/why-choose-us";

export function AboutSections() {
  return (
    <section className="container grid max-w-7xl grid-cols-2 gap-3 pb-32">
      <WhyChooseUs />
      <SportTeaDifference />
    </section>
  );
}
