import type { Metadata } from "next";
import "./globals.css";

import { helvetica, moret } from "@/assets/fonts";
import { Cta } from "@/components/layout/cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { CartProvider } from "@/components/providers/cart-provider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SportTea - Premium Organic Tea & Wellness Products | Nature's Essence, Boldly Brewed",
  description:
    "Discover premium organic tea from the pristine Nilgiri Hills. Shop our curated collection of black, green, and herbal teas. Free shipping on orders over $50. Experience nature's essence, boldly brewed.",
  keywords:
    "organic tea, premium tea, Nilgiri Hills tea, black tea, green tea, herbal tea, wellness products, high-altitude tea, pesticide-free tea",
  authors: [{ name: "SportTea" }],
  creator: "SportTea",
  publisher: "SportTea",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sporttea.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sporttea.in",
    siteName: "SportTea",
    title: "SportTea - Premium Organic Tea & Wellness Products",
    description:
      "Discover premium organic tea from the pristine Nilgiri Hills. Shop our curated collection of black, green, and herbal teas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SportTea - Premium Organic Tea Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SportTea - Premium Organic Tea & Wellness Products",
    description:
      "Discover premium organic tea from the pristine Nilgiri Hills. Shop our curated collection of black, green, and herbal teas.",
    images: ["/og-image.jpg"],
    creator: "@sporttea",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "theme-color": "#7296",
    "color-scheme": "light dark",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        {/* Resource hints for performance optimization */}
        <link href="https://sporttea.in" rel="dns-prefetch" />
      </head>
      <body className={cn("antialiased", moret.variable, helvetica.className)}>
        <CartProvider>
          <Navbar />
          {children}
          <Cta />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
