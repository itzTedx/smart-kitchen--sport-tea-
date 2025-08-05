import Link from "next/link";

import { IconShoppingCart } from "@/assets/icons/shopping-cart";
import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="container sticky top-3 z-999 flex max-w-3xl items-center justify-between rounded-full border-white border-b bg-white/70 px-3 py-2 backdrop-blur-xl">
      <Link className="flex items-center gap-3" href="/">
        <Logo />
        <span className="sr-only font-semibold font-suisse">Sport Tea</span>
      </Link>
      <nav className="flex items-center gap-9">
        <ul className="flex items-center gap-4 font-medium">
          <li>
            <Link className="px-3 py-2" href="/">
              Products
            </Link>
          </li>
          <li>
            <Link className="px-3 py-2" href="/">
              About
            </Link>
          </li>
          <li>
            <Link className="px-3 py-2" href="/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Button className="has-[>svg]:pr-5" variant="cta">
        <IconShoppingCart />
        <span>Cart</span>
      </Button>
    </nav>
  );
};
