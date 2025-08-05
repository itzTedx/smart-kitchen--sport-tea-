"use client";

import Link from "next/link";

import { useAtom } from "jotai";
import { ShoppingBag, Trash2, X } from "lucide-react";

import CompactQuantitySelector from "@/components/compact-quantity-selector";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cartAtom, cartItemCountAtom, cartTotalAtom, clearCartAtom, removeFromCartAtom } from "@/lib/cart";

interface CartSheetProps {
  children: React.ReactNode;
}

export function CartSheet({ children }: CartSheetProps) {
  const [cart] = useAtom(cartAtom);
  const [itemCount] = useAtom(cartItemCountAtom);
  const [total] = useAtom(cartTotalAtom);
  const [, removeFromCart] = useAtom(removeFromCartAtom);
  const [, clearCart] = useAtom(clearCartAtom);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full gap-0 sm:max-w-md">
        <SheetHeader className="border-b">
          <SheetTitle className="flex items-center gap-3">
            <span className="font-moret text-xl">Shopping Cart</span>
            <span className="text-muted-foreground text-sm">
              {itemCount} item{itemCount !== 1 ? "s" : ""}
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col p-4">
          {itemCount === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
              <h3 className="mb-2 font-medium">Your cart is empty</h3>
              <p className="mb-6 text-muted-foreground text-sm">Add some products to get started!</p>
              <Button asChild>
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 space-y-4 overflow-y-auto">
                {cart.map((item) => (
                  <div className="flex gap-3 rounded-lg border bg-white p-3" key={item.product.id}>
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                      <OptimizedImage alt={item.product.title} className="object-cover" fill src={item.product.image} />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="line-clamp-2 font-medium text-sm">{item.product.title}</h4>
                        <p className="text-muted-foreground text-xs">
                          ₹{item.product.price} / {item.product.unit}
                        </p>
                        <p className="font-medium text-primary text-xs">Total: ₹{item.product.price * item.quantity}</p>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <CompactQuantitySelector product={item.product} />
                        <Button
                          className="h-6 w-6 text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(item.product.id)}
                          size="icon"
                          variant="ghost"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Actions */}
              <div className="space-y-3 border-t pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Subtotal ({itemCount} items)</span>
                  <span className="font-medium">₹{total}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex items-center justify-between font-medium">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full">Proceed to Checkout</Button>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/cart">View Full Cart</Link>
                  </Button>
                  <Button
                    className="w-full text-destructive hover:text-destructive"
                    onClick={() => clearCart()}
                    size="sm"
                    variant="ghost"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
