import Link from "next/link";

import { IconArrowRight } from "@/assets/icons/arrows";
import { IconBrandFacebook, IconBrandInstagram } from "@/assets/icons/socials";
import { Logo, LogoMark } from "@/assets/logo";
import { products } from "@/data/product";

import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="relative py-32">
      <div className="container relative z-10 grid max-w-7xl grid-cols-2 gap-4">
        <div className="w-fit">
          <Logo />
          <h4 className="mt-12 mb-4 text-3xl tracking-tight">
            Let’s Talk Tea, Spices, <br />
            or Business
          </h4>
          <Button className="w-full justify-between" variant="outline">
            Get Started
            <div className="flex size-10 items-center justify-center rounded-full bg-secondary">
              <IconArrowRight className="size-5 text-secondary-foreground" />
            </div>
          </Button>
        </div>
        <div className="space-y-12 rounded-2xl bg-secondary p-9 text-secondary-foreground">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <h4 className="text-secondary-foreground/40">Products</h4>
              <ul className="mt-4 space-y-2.5">
                {products.map((product) => (
                  <li className="font-medium text-lg" key={product.id}>
                    <Link href={`/products/${product.id}`}>{product.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-secondary-foreground/40">Contact</h4>
              <ul className="mt-4 space-y-1">
                <li className="text-lg">
                  <h5 className="text-secondary-foreground/60 text-sm">Mobile:</h5>
                  <Link className="font-medium" href={"tel:+919633211248"}>
                    +91 96332 11248
                  </Link>
                </li>
                <li className="text-lg">
                  <h5 className="text-secondary-foreground/60 text-sm">Email:</h5>
                  <Link className="font-medium" href={"mailto:info@sporttea.in"}>
                    info@sporttea.in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-secondary-foreground/40 text-sm">
              2025 © Copyright
              <br />
              Sport Tea LLC.
            </h5>
            <p className="text-center text-secondary-foreground/40 text-xs">
              Website designed & <br />
              developed by{" "}
              <Link href="https://www.zironmedia.com" target="_blank">
                Ziron Media
              </Link>
            </p>
            <ul className="flex items-center gap-2 text-secondary">
              <li className="flex size-9 items-center justify-center rounded-full bg-[oklch(0.8861_0.128_135.91)]">
                <IconBrandFacebook />
              </li>
              <li className="flex size-9 items-center justify-center rounded-full bg-[oklch(0.8861_0.128_135.91)]">
                <IconBrandInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LogoMark className="-translate-x-1/2 absolute bottom-0 left-1/2" />
    </footer>
  );
};
