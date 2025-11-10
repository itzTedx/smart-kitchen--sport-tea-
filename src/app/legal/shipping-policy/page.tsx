import Link from "next/link";

export const metadata = {
  title: "Shipping Policy | Smart Kitchen",
  description: "Learn about processing times, delivery estimates, shipping rates, and order issues.",
};

const lastUpdated = "November 4, 2025";

export default function ShippingPolicyPage() {
  return (
    <main className="container mx-auto max-w-3xl py-12 md:py-20">
      <h1 className="font-semibold text-3xl md:text-4xl">Shipping Policy</h1>
      <p className="mt-3 text-muted-foreground">Last Updated on: {lastUpdated}</p>

      <section className="mt-8 space-y-4">
        <h2 className="font-semibold text-2xl">Order Processing</h2>
        <p className="text-muted-foreground">
          Orders are typically processed within 1–2 business days (Monday–Friday, excluding holidays). Processing time
          is separate from carrier transit time. During peak periods or promotions, processing may take longer.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Shipping Methods, Rates, and Destinations</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            Rates are calculated at checkout based on destination, weight, and selected carrier options when available.
          </li>
          <li>We currently ship to addresses within India. We do not ship to P.O. boxes.</li>
          <li>
            If international shipping becomes available, duties and taxes may be collected by the destination country.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Estimated Delivery Timeframes</h2>
        <p className="text-muted-foreground">
          Your order will be delivered within 7 to 15 days. Delivery estimates are provided at checkout and vary by
          location and shipping method. Once your order has shipped, the carrier assumes responsibility for delivery and
          timing.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Order Tracking</h2>
        <p className="text-muted-foreground">
          You will receive a shipping confirmation email with tracking information once your order ships. Tracking
          details may take up to 24 hours to update after dispatch.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Address Accuracy</h2>
        <p className="text-muted-foreground">
          Please ensure your shipping address is complete and accurate. We are not responsible for delays or lost
          packages due to incorrect or incomplete addresses provided at checkout.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Undeliverable, Lost, or Stolen Packages</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            If a package is marked delivered but not received, please check with household members, neighbors, and the
            carrier. In some cases, carriers may mark packages delivered up to 24 hours before arrival.
          </li>
          <li>
            For packages lost in transit, contact us within 7 to 15 days of the last tracking update so we can
            investigate with the carrier.
          </li>
          <li>
            We are not responsible for packages after they are confirmed delivered by the carrier. Replacement decisions
            are made on a case-by-case basis.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Damaged Items</h2>
        <p className="text-muted-foreground">
          If your order arrives damaged, please contact us within 48 hours of delivery with your order number and clear
          photos of the damage. We will review your case and work with you to make it right when applicable.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Changes and Cancellations</h2>
        <p className="text-muted-foreground">
          Orders are processed quickly. If you need to change or cancel your order, contact us immediately after placing
          it. Once processing or shipping begins, we cannot modify or cancel the order.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Contact Us</h2>
        <p className="text-muted-foreground">
          For questions about shipping or an existing order, contact us at
          <Link className="underline" href="mailto:info@smartkitchen.store">
            {" "}
            info@smartkitchen.store
          </Link>{" "}
          or by phone at
          <Link className="underline" href="tel:+919633211248">
            {" "}
            +91 96332 11248
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
