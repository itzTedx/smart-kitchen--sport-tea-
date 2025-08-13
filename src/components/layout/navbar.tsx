"use client";

import { useState } from "react";
import Link from "next/link";

import { useAtom } from "jotai";
import { Menu } from "lucide-react";

import { Logo } from "@/assets/logo";
import CartIcon from "@/components/cart-icon";
import { NAV_LINKS } from "@/data/constants";
import { isCartOpenAtom } from "@/lib/cart";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [, setIsCartOpen] = useAtom(isCartOpenAtom);

  return (
    <nav className="container sticky top-0 z-999 flex max-w-3xl items-center justify-between border-white border-b bg-white/70 px-3 py-2 backdrop-blur-xl md:top-3 md:rounded-full">
      <Link className="flex items-center gap-3" href="/">
        <Logo />
        <span className="sr-only font-semibold font-suisse">Sport Tea</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-9 md:flex">
        <ul className="flex items-center gap-4 font-medium">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <Link className="px-3 py-2 transition-colors hover:text-primary" href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <button className="cursor-pointer px-3 py-2 transition-colors hover:text-primary">{item.label}</button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <Button
          className="gap-2.5 pl-1 has-[>div>svg]:pr-5 max-md:h-10 md:gap-4"
          onClick={() => setIsCartOpen(true)}
          variant="cta"
        >
          <div aria-hidden="true" className="flex size-8 items-center justify-center rounded-full bg-white md:size-10">
            <CartIcon className="size-4 text-secondary md:size-5" />
          </div>
          Cart
        </Button>

        {/* Mobile Menu Sheet */}
        <Sheet onOpenChange={setIsMenuOpen} open={isMenuOpen}>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="ghost">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="" side="top">
            <div className="flex flex-col gap-6 pt-6">
              <SheetTitle className="flex items-center gap-3">
                <Logo />
                <span className="font-semibold font-suisse">Sport Tea</span>
              </SheetTitle>
              <nav>
                <ul className="flex flex-col gap-2 font-medium">
                  {NAV_LINKS.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <Link
                          className="block rounded-md px-3 py-3 transition-colors hover:bg-gray-100"
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          className="block w-full cursor-pointer rounded-md px-3 py-3 text-left transition-colors hover:bg-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
