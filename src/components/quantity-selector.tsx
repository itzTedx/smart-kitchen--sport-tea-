"use client";

import { useId, useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function QuantitySelector() {
  const id = useId();
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  return (
    <div className="relative">
      <Input
        className="peer w-28 ps-5 pe-8 text-center text-secondary [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        id={id}
        min="1"
        onChange={handleInputChange}
        type="number"
        value={quantity}
      />
      <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-4 text-secondary text-sm peer-disabled:opacity-50">
        Qty:
      </span>

      {/* Increment button inside input */}
      <Button
        className="absolute top-2.5 right-3 h-4 w-6 rounded-none p-0 text-secondary hover:bg-transparent"
        onClick={increment}
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
        onClick={decrement}
        size="icon"
        type="button"
        variant="ghost"
      >
        <ChevronDown className="size-4 stroke-3" />
      </Button>
    </div>
  );
}
