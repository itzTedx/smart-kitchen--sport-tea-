"use client";

import { useState } from "react";

import { useAtom } from "jotai";
import { ShoppingCart } from "lucide-react";

import { Product } from "@/data/product";
import { addToCartAtom, isCartOpenAtom } from "@/lib/cart";

import { Button } from "./ui/button";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const [, addToCart] = useAtom(addToCartAtom);
  const [, setIsCartOpen] = useAtom(isCartOpenAtom);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);

    // Simulate a brief loading state
    await new Promise((resolve) => setTimeout(resolve, 300));

    addToCart({ product, quantity: 1 });
    setIsCartOpen(true); // Open the cart after adding item
    setIsAdding(false);
  };

  return (
    <Button className={`flex items-center gap-2 ${className || ""}`} disabled={isAdding} onClick={handleAddToCart}>
      <ShoppingCart className="h-4 w-4" />
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  );
}
