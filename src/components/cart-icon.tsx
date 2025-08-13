"use client";

import { useAtom } from "jotai";

import { IconShoppingCart } from "@/assets/icons/shopping-cart";
import { cartItemCountAtom } from "@/lib/cart";

interface CartIconProps {
  className?: string;
}

export default function CartIcon({ className }: CartIconProps) {
  const [itemCount] = useAtom(cartItemCountAtom);

  return (
    <div className={`relative ${className || ""}`}>
      <IconShoppingCart className="size-4 text-secondary md:size-5" />
      {itemCount > 0 && (
        <span className="-top-4 -right-4 absolute flex h-5 w-5 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground text-xs">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </div>
  );
}
