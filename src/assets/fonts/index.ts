import localFont from "next/font/local";

export const helvetica = localFont({
  variable: "--font-helvetica",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  src: [
    {
      weight: "200",
      path: "./helvetica/HelveticaNowDisplay-Light.woff",
    },
    {
      weight: "400",
      path: "./helvetica/HelveticaNowDisplay-Regular.woff",
    },
    {
      weight: "500",
      path: "./helvetica/HelveticaNowDisplay-Medium.woff",
    },
  ],
});

export const suisse = localFont({
  variable: "--font-suisse",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  src: [
    {
      weight: "300",
      path: "./suisse/suisse-intl-300.woff2",
    },
    {
      weight: "400",
      path: "./suisse/suisse-intl-400.woff2",
    },
    {
      weight: "600",
      path: "./suisse/suisse-intl-600.woff2",
    },
    {
      weight: "700",
      path: "./suisse/suisse-intl-700.woff2",
    },
  ],
});
