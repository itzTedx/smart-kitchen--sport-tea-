"use client";

import { useState } from "react";
import Link from "next/link";

import { IconShoppingCart } from "@/assets/icons/shopping-cart";
import { Logo } from "@/assets/logo";
import { NAV_LINKS } from "@/data/constants";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <Button className="has-[>svg]:pr-5" variant="cta">
          <IconShoppingCart />
          Cart
        </Button>
        {/* Mobile Menu Button */}
        <Button
          aria-label="Toggle menu"
          className="flex size-5 flex-col items-center justify-center gap-1 md:hidden"
          onClick={toggleMenu}
          variant="ghost"
        >
          <span
            className={cn(
              "block h-0.5 w-5 shrink-0 bg-gray-600 transition-transform duration-300",
              isMenuOpen && "translate-y-1.5 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 shrink-0 bg-gray-600 transition-opacity duration-300",
              isMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 shrink-0 bg-gray-600 transition-transform duration-300",
              isMenuOpen && "-rotate-45 -translate-y-1.5"
            )}
          />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 mt-2 rounded-lg border bg-white/95 shadow-lg backdrop-blur-xl md:hidden">
          <nav className="p-4">
            <ul className="flex flex-col gap-2 font-medium">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      className="block rounded-md px-3 py-2 transition-colors hover:bg-gray-100"
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className="block cursor-pointer rounded-md px-3 py-2 transition-colors hover:bg-gray-100"
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
      )}
    </nav>
  );
};
