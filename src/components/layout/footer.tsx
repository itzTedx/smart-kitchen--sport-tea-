import Link from "next/link";

import { IconArrowRight } from "@/assets/icons/arrows";
import { IconBrandFacebook, IconBrandInstagram } from "@/assets/icons/socials";
import { Logo, LogoMark } from "@/assets/logo";
import { products } from "@/data/product";

import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="relative py-16 md:py-32">
      <div className="container relative z-10 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
        <div className="w-fit">
          <Logo />
          <h4 className="mt-8 mb-4 text-2xl tracking-tight md:mt-12 md:text-3xl">
            Let's Talk Tea, Spices, <br />
            or Business
          </h4>
          <Button className="w-full justify-between" variant="outline">
            Get Started
            <div className="flex size-8 items-center justify-center rounded-md bg-secondary md:size-10">
              <IconArrowRight className="size-4 text-secondary-foreground md:size-5" />
            </div>
          </Button>
        </div>
        <div className="space-y-8 rounded-2xl bg-secondary p-6 text-secondary-foreground md:space-y-12 md:p-9">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-3">
            <div className="md:col-span-2">
              <h4 className="text-secondary-foreground/40">Products</h4>
              <ul className="mt-4 space-y-2 md:space-y-2.5">
                {products.map((product) => (
                  <li className="font-medium text-base md:text-lg" key={product.id}>
                    <Link href={`/products/${product.id}`}>{product.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-secondary-foreground/40">Contact</h4>
              <ul className="mt-4 space-y-1">
                <li className="text-base md:text-lg">
                  <h5 className="text-secondary-foreground/60 text-xs md:text-sm">Mobile:</h5>
                  <Link className="font-medium" href={"tel:+919633211248"}>
                    +91 96332 11248
                  </Link>
                </li>
                <li className="text-base md:text-lg">
                  <h5 className="text-secondary-foreground/60 text-xs md:text-sm">Email:</h5>
                  <Link className="font-medium" href={"mailto:info@smartkitchen.store"}>
                    info@smartkitchen.store
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 md:items-center md:justify-between md:gap-4">
            <h5 className="text-secondary-foreground/40 text-xs md:text-sm">
              2025 © Copyright
              <br />
              Sport Tea LLC.
            </h5>
            <p className="text-end text-secondary-foreground/40 text-xs md:text-center">
              Website designed & <br />
              developed by{" "}
              <Link
                className="underline transition-colors hover:text-secondary-foreground"
                href="https://www.zironmedia.com"
                target="_blank"
              >
                Ziron Media
              </Link>
            </p>
            <ul className="flex items-center justify-center gap-2 text-secondary">
              <li className="flex size-8 items-center justify-center rounded-full bg-[oklch(0.8861_0.128_135.91)] md:size-9">
                <IconBrandFacebook />
              </li>
              <li className="flex size-8 items-center justify-center rounded-full bg-[oklch(0.8861_0.128_135.91)] md:size-9">
                <IconBrandInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LogoMark className="-translate-x-1/2 absolute bottom-0 left-1/2 h-auto max-sm:w-full" />
    </footer>
  );
};
