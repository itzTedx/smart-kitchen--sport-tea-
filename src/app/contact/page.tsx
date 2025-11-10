import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact Us | Smart Kitchen",
  description: "Get in touch with Smart Kitchen. We'd love to hear from you!",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-3xl py-12 md:py-20">
      <div className="space-y-8">
        <div>
          <h1 className="font-semibold text-3xl md:text-4xl">Contact Us</h1>
          <p className="mt-3 text-muted-foreground">
            Have a question or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you
            as soon as possible.
          </p>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
