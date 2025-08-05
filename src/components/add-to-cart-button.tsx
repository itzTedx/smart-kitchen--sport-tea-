"use client";

import { useState } from "react";

import { useAtom } from "jotai";
import { ShoppingCart } from "lucide-react";

import { Product } from "@/data/product";
import { addToCartAtom, cartAtom } from "@/lib/cart";

import { Button } from "./ui/button";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const [cart] = useAtom(cartAtom);
  const [, addToCart] = useAtom(addToCartAtom);
  const [isAdding, setIsAdding] = useState(false);

  // Find current quantity in cart or default to 1
  const cartItem = cart.find((item) => item.product.id === product.id);
  const quantity = cartItem?.quantity || 1;

  const handleAddToCart = async () => {
    setIsAdding(true);

    // Simulate a brief loading state
    await new Promise((resolve) => setTimeout(resolve, 300));

    addToCart({ product, quantity });
    setIsAdding(false);
  };

  return (
    <Button className={`flex items-center gap-2 ${className || ""}`} disabled={isAdding} onClick={handleAddToCart}>
      <ShoppingCart className="h-4 w-4" />
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  );
}
