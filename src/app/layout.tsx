import type { Metadata } from "next";
import "./globals.css";

import { helvetica, moret } from "@/assets/fonts";
import { Cta } from "@/components/layout/cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "SportTea - Premium Organic Tea & Wellness Products | Nature's Essence, Boldly Brewed",
    template: "%s | SportTea",
  },
  description:
    "Discover high-altitude teas, healing herbs, and vibrant spices from the Nilgiri Hills. Ethically sourced, 100% organic tea products for wellness and vitality. Premium black tea, green tea, and herbal blends.",
  keywords: [
    "organic tea",
    "premium tea",
    "Nilgiri Hills tea",
    "black tea",
    "green tea",
    "herbal tea",
    "wellness products",
    "organic tea leaves",
    "pesticide-free tea",
    "high-altitude tea",
    "sport tea",
    "tea collection",
    "natural tea",
    "pure tea",
    "aromatic tea",
  ],
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sporttea.in",
    siteName: "SportTea",
    title: "SportTea - Premium Organic Tea & Wellness Products",
    description:
      "Discover high-altitude teas, healing herbs, and vibrant spices from the Nilgiri Hills. 100% organic tea products for wellness and vitality.",
    images: [
      {
        url: "/images/og-image.jpg",
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
      "Discover high-altitude teas, healing herbs, and vibrant spices from the Nilgiri Hills. 100% organic tea products.",
    images: ["/images/twitter-image.jpg"],
    creator: "@sporttea",
  },

  category: "Food & Beverage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/manifest.json" rel="manifest" />
        <meta content="#your-theme-color" name="theme-color" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body className={cn("antialiased", moret.variable, helvetica.className)}>
        <Navbar />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
