"use client";

import { useId } from "react";

import { useAtom } from "jotai";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Product } from "@/data/product";
import { addToCartAtom, cartAtom, updateCartItemQuantityAtom } from "@/lib/cart";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface QuantitySelectorProps {
  product: Product;
  className?: string;
}

export default function QuantitySelector({ product, className }: QuantitySelectorProps) {
  const id = useId();
  const [cart] = useAtom(cartAtom);
  const [, updateCartItemQuantity] = useAtom(updateCartItemQuantityAtom);
  const [, addToCart] = useAtom(addToCartAtom);

  // Find current quantity in cart or default to 1
  const cartItem = cart.find((item) => item.product.id === product.id);
  const quantity = cartItem?.quantity || 1;

  const setQuantity = (nextQuantity: number) => {
    const safeQuantity = Math.max(1, nextQuantity);
    if (cartItem) {
      updateCartItemQuantity({ productId: product.id, quantity: safeQuantity });
    } else {
      // If item is not yet in cart, add it with the desired quantity
      addToCart({ product, quantity: safeQuantity });
    }
  };

  const increment = (step = 1) => {
    setQuantity(quantity + step);
  };

  const decrement = (step = 1) => {
    setQuantity(quantity - step);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 1;
    setQuantity(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const largeStep = e.shiftKey ? 5 : 1;
    switch (e.key) {
      case "ArrowUp":
      case "+":
        e.preventDefault();
        increment(largeStep);
        break;
      case "ArrowDown":
      case "-":
        e.preventDefault();
        decrement(largeStep);
        break;
      case "PageUp":
        e.preventDefault();
        increment(5);
        break;
      case "PageDown":
        e.preventDefault();
        decrement(5);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`relative ${className || ""}`}>
      <Input
        className="peer w-28 ps-5 pe-8 text-center text-secondary [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        id={id}
        min="1"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        type="number"
        value={quantity}
      />
      <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-4 text-secondary text-sm peer-disabled:opacity-50">
        Qty:
      </span>

      {/* Increment button inside input */}
      <Button
        className="absolute top-2.5 right-3 h-4 w-6 rounded-none p-0 text-secondary hover:bg-transparent"
        onClick={() => increment()}
        size="icon"
        type="button"
        variant="ghost"
      >
        <ChevronUp className="size-4 stroke-3" />
      </Button>

      {/* Decrement button inside input */}
      <Button
        className="absolute right-3 bottom-2.5 h-4 w-6 rounded-none p-0 text-secondary hover:bg-transparent"
        disabled={quantity <= 1}
        onClick={() => decrement()}
        size="icon"
        type="button"
        variant="ghost"
      >
        <ChevronDown className="size-4 stroke-3" />
      </Button>
    </div>
  );
}
