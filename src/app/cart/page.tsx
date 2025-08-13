"use client";

import Link from "next/link";

import { useAtom } from "jotai";
import { ShoppingBag, Trash2 } from "lucide-react";

import QuantitySelector from "@/components/quantity-selector";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cartAtom, cartItemCountAtom, cartTotalAtom, clearCartAtom, removeFromCartAtom } from "@/lib/cart";

export default function CartPage() {
  const [cart] = useAtom(cartAtom);
  const [itemCount] = useAtom(cartItemCountAtom);
  const [total] = useAtom(cartTotalAtom);
  const [, removeFromCart] = useAtom(removeFromCartAtom);
  const [, clearCart] = useAtom(clearCartAtom);

  if (itemCount === 0) {
    return (
      <main className="container max-w-7xl py-12">
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="text-center">
            <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h1 className="mb-4 font-moret text-2xl md:text-3xl">Your Cart is Empty</h1>
            <p className="mb-6 text-muted-foreground">Add some products to get started!</p>
            <Button asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container max-w-7xl py-12">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-moret text-3xl md:text-4xl">Shopping Cart</h1>
            <p className="mt-2 text-muted-foreground">
              {itemCount} item{itemCount !== 1 ? "s" : ""} in your cart
            </p>
          </div>
          <Button onClick={() => clearCart()} size="lg" variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Clear Cart
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            {cart.map((item) => (
              <div className="flex gap-4 rounded-lg border bg-white p-4" key={item.product.id}>
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <OptimizedImage alt={item.product.title} className="object-cover" fill src={item.product.image} />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-medium">{item.product.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      ₹{item.product.price} / {item.product.unit}
                    </p>
                    <p className="font-medium text-primary text-sm">Total: ₹{item.product.price * item.quantity}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <QuantitySelector product={item.product} />
                    <Button
                      className="text-destructive hover:text-destructive"
                      onClick={() => removeFromCart(item.product.id)}
                      size="icon"
                      variant="ghost"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-4 font-medium text-lg">Order Summary</h2>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              <Button className="mt-6 w-full">Proceed to Checkout</Button>

              <Button asChild className="mt-3 w-full" variant="outline">
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
