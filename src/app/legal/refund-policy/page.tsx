export const metadata = {
  title: "Refund Policy | Sport Tea",
  description: "All sales are final. No returns and no refunds.",
};

const lastUpdated = "November 4, 2025";

export default function RefundPolicyPage() {
  return (
    <main className="container mx-auto max-w-3xl py-12 md:py-20">
      <h1 className="font-semibold text-3xl md:text-4xl">Refund Policy</h1>
      <p className="mt-3 text-muted-foreground">Last Updated on: {lastUpdated}</p>

      <section className="mt-8 space-y-4">
        <h2 className="font-semibold text-2xl">All Sales Are Final</h2>
        <p className="text-muted-foreground">
          We do not accept returns and we do not offer refunds for any products purchased on this site. Please review
          your order carefully before completing your purchase.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Order Issues and Defects</h2>
        <p className="text-muted-foreground">
          If your order arrives damaged, defective, or incorrect, contact us within 48 hours of delivery with your order
          number and clear photos of the issue. We will review your case and work with you to make it right when
          applicable.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Non-Waivable Rights</h2>
        <p className="text-muted-foreground">
          This policy does not affect any non-waivable rights you may have under applicable consumer protection laws.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Cancellations</h2>
        <p className="text-muted-foreground">
          Orders are processed quickly. If you need to cancel, contact us immediately after placing your order. If your
          order has already been processed or shipped, it cannot be cancelled.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Contact Us</h2>
        <p className="text-muted-foreground">
          For questions about this policy or to report an issue with your order, contact us at
          <a className="underline" href="mailto:info@smartkitchen.store">
            {" "}
            info@smartkitchen.store
          </a>{" "}
          or by phone at
          <a className="underline" href="tel:+919633211248">
            {" "}
            +91 96332 11248
          </a>
          .
        </p>
      </section>
    </main>
  );
}
