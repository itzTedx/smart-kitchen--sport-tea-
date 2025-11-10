import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Smart Kitchen",
  description: "Learn how Smart Kitchen LLC collects, uses, and protects your personal information.",
};

const lastUpdated = "November 4, 2025";

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto max-w-3xl py-12 md:py-20">
      <h1 className="font-semibold text-3xl md:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-muted-foreground">Last Updated on: {lastUpdated}</p>

      <p className="mt-8 text-base text-muted-foreground leading-7">
        This Privacy Policy explains how Smart Kitchen LLC ("Smart Kitchen", "we", "us", or "our") collects, uses,
        discloses, and safeguards your information when you visit our website, make a purchase, or otherwise interact
        with us. By using our services, you agree to the terms of this policy.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Information We Collect</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            Account and Order Information: name, email address, billing and shipping addresses, phone number, and order
            history.
          </li>
          <li>
            Payment Information: payment method details are processed securely by our payment processors and are not
            stored on our servers.
          </li>
          <li>
            Device and Usage Data: IP address, browser type, device identifiers, pages visited, and interactions
            collected via cookies and similar technologies.
          </li>
          <li>Communications: your messages, product reviews, survey responses, and support inquiries.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">How We Use Your Information</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Process, fulfill, and manage orders and payments.</li>
          <li>Provide, maintain, and improve our website, products, and services.</li>
          <li>Communicate with you about orders, updates, and marketing (with consent).</li>
          <li>Personalize your experience and present relevant content and offers.</li>
          <li>Detect, prevent, and address fraud, security, or technical issues.</li>
          <li>Comply with legal obligations and enforce our terms and policies.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Cookies and Tracking</h2>
        <p className="text-muted-foreground">
          We use cookies, web beacons, and similar technologies to operate and analyze our site, remember your
          preferences, and measure marketing performance. You can control cookies through your browser settings.
          Disabling certain cookies may affect site functionality.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Sharing Your Information</h2>
        <p className="text-muted-foreground">
          We do not sell your personal information. We may share information with trusted service providers who assist
          us in operating our business (e.g., payment processors, shipping carriers, analytics providers, and marketing
          tools). These parties are authorized to use your information only as necessary to provide services to us.
        </p>
        <p className="text-muted-foreground">
          We may also disclose information to comply with legal obligations, respond to lawful requests, protect rights
          and safety, or in connection with a merger, acquisition, or sale of assets.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Data Retention</h2>
        <p className="text-muted-foreground">
          We retain personal information for as long as necessary to fulfill the purposes outlined in this policy,
          unless a longer retention period is required or permitted by law (for example, tax, accounting, or legal
          requirements).
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Returns and Refunds</h2>
        <p className="text-muted-foreground">
          All sales are final. We do not accept returns and we do not offer refunds. Please review your order carefully
          before completing your purchase.
        </p>
        <p className="text-muted-foreground">
          This policy does not affect any non-waivable rights you may have under applicable law. If you believe you
          received an incorrect or defective item, please contact us promptly so we can review the issue.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Your Rights and Choices</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Access, correct, or delete your personal information, subject to law.</li>
          <li>Opt out of marketing emails by using the unsubscribe link in our emails.</li>
          <li>
            Control cookies via your browser settings. Some jurisdictions may grant additional rights. If applicable,
            you can exercise rights by contacting us.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Children’s Privacy</h2>
        <p className="text-muted-foreground">
          Our website and services are not directed to children under 13. We do not knowingly collect personal
          information from children. If you believe a child has provided us personal information, please contact us so
          we can delete it.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">International Users</h2>
        <p className="text-muted-foreground">
          If you access our services from outside your country, you understand that your information may be processed in
          countries that may have different data protection laws than your jurisdiction.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Changes to This Policy</h2>
        <p className="text-muted-foreground">
          We may update this Privacy Policy from time to time. We will post the updated version with a new effective
          date on this page. Your continued use of our services after changes become effective means you accept the
          revised policy.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-semibold text-2xl">Contact Us</h2>
        <p className="text-muted-foreground">
          For questions about this Privacy Policy or your personal information, contact us at{" "}
          <Link className="underline" href="mailto:info@smartkitchen.store">
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
