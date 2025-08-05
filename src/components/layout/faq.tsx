import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/data/constants";

export function FAQ() {
  return (
    <section className="container max-w-7xl pb-32">
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl text-brand-foreground">
            Frequently
            <br />
            <span className="font-moret font-semibold text-5xl text-secondary"> Asked Questions</span>
          </h2>
        </div>
        <div className="col-span-2 grid gap-3">
          <Accordion className="w-full space-y-2" defaultValue="01" type="single">
            {FAQS.map((item) => (
              <AccordionItem
                className="rounded-md border border-secondary-hover/40 bg-secondary-foreground/50 px-4 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
                key={item.id}
                value={item.id}
              >
                <AccordionTrigger className="py-2 font-medium text-secondary leading-6 hover:no-underline focus-visible:ring-0">
                  <div className="flex items-center gap-4 text-xl">
                    <span className="text-secondary/60">{item.id}</span>
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-2 pl-10 text-secondary-muted text-xl">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
