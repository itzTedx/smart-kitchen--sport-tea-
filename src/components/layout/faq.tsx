import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/data/constants";

export function FAQ() {
  return (
    <section aria-labelledby="faq-heading" className="container max-w-7xl pb-16 md:pb-32">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-3">
        <header className="flex flex-col gap-3">
          <h2 className="text-2xl text-brand-foreground md:text-3xl" id="faq-heading">
            Frequently
            <br />
            <span className="font-moret font-semibold text-3xl text-secondary md:text-4xl lg:text-5xl">
              Asked Questions
            </span>
          </h2>
        </header>
        <div className="grid gap-3 lg:col-span-2">
          <Accordion
            aria-label="Frequently asked questions about SportTea products and services"
            className="w-full space-y-2"
            defaultValue="01"
            type="single"
          >
            {FAQS.map((item) => (
              <AccordionItem
                className="rounded-md border border-secondary-hover/40 bg-secondary-foreground/50 px-3 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 md:px-4"
                key={item.id}
                value={item.id}
              >
                <AccordionTrigger className="py-2 font-medium text-secondary leading-6 hover:no-underline focus-visible:ring-0">
                  <div className="flex items-center gap-2 text-base md:gap-4 md:text-xl">
                    <span aria-hidden="true" className="text-secondary/60 text-sm md:text-base">
                      {item.id}
                    </span>
                    <span className="text-left">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-2 pl-6 text-base text-secondary-muted md:pl-10 md:text-xl">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
