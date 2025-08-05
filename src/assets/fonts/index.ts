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

export const moret = localFont({
  variable: "--font-moret",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  src: [
    {
      weight: "600",
      path: "./moret/Moret-Semibold.otf",
    },
  ],
});
export const denim = localFont({
  variable: "--font-denim",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  src: [
    {
      weight: "400",
      path: "./denim/denim-regular.woff2",
    },
    {
      weight: "500",
      path: "./denim/denim-medium.woff2",
    },
  ],
});
