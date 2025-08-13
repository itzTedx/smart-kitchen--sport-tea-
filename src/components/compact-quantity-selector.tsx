"use client";

import { useId } from "react";

import { useAtom } from "jotai";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Product } from "@/data/product";
import { cartAtom, updateCartItemQuantityAtom } from "@/lib/cart";

import { Button } from "./ui/button";

interface CompactQuantitySelectorProps {
  product: Product;
  className?: string;
}

export default function CompactQuantitySelector({ product, className }: CompactQuantitySelectorProps) {
  const id = useId();
  const [cart] = useAtom(cartAtom);
  const [, updateCartItemQuantity] = useAtom(updateCartItemQuantityAtom);

  // Find current quantity in cart or default to 1
  const cartItem = cart.find((item) => item.product.id === product.id);
  const quantity = cartItem?.quantity || 1;

  const increment = () => {
    updateCartItemQuantity({ productId: product.id, quantity: quantity + 1 });
  };

  const decrement = () => {
    updateCartItemQuantity({ productId: product.id, quantity: Math.max(1, quantity - 1) });
  };

  return (
    <div className={`flex items-center gap-1 ${className || ""}`}>
      <Button
        className="h-6 w-6 rounded-full p-0 text-secondary hover:bg-secondary"
        disabled={quantity <= 1}
        onClick={decrement}
        size="icon"
        variant="ghost"
      >
        <ChevronDown className="h-3 w-3" />
      </Button>

      <span className="min-w-[2rem] text-center font-medium text-sm">{quantity}</span>

      <Button
        className="h-6 w-6 rounded-full p-0 text-secondary hover:bg-secondary"
        onClick={increment}
        size="icon"
        variant="ghost"
      >
        <ChevronUp className="h-3 w-3" />
      </Button>
    </div>
  );
}
