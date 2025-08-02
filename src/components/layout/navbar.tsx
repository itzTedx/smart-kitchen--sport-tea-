import Link from "next/link";

import { IconShoppingCart } from "@/assets/icons/shopping-cart";
import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="container sticky top-0 z-999 flex items-center justify-between bg-background/90 py-3">
      <nav className="flex items-center gap-9">
        <Link className="flex items-center gap-3" href="/">
          <Logo />
          <span className="font-semibold font-suisse">Sport Tea</span>
        </Link>
        <ul className="flex items-center gap-4 font-medium font-suisse">
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
      <Button>
        <IconShoppingCart />
      </Button>
    </nav>
  );
};
