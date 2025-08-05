import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { Product } from "@/data/product";

export interface CartItem {
  product: Product;
  quantity: number;
}

// Use atomWithStorage for localStorage persistence
export const cartAtom = atomWithStorage<CartItem[]>("sporttea-cart", []);

// Derived atoms for cart calculations
export const cartItemCountAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce((total, item) => total + item.quantity, 0);
});

export const cartTotalAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
});

// Helper functions
export const addToCartAtom = atom(null, (get, set, { product, quantity }: { product: Product; quantity: number }) => {
  const cart = get(cartAtom);
  const existingItemIndex = cart.findIndex((item) => item.product.id === product.id);

  if (existingItemIndex >= 0) {
    // Update existing item quantity
    const updatedCart = [...cart];
    updatedCart[existingItemIndex] = {
      ...updatedCart[existingItemIndex],
      quantity: updatedCart[existingItemIndex].quantity + quantity,
    };
    set(cartAtom, updatedCart);
  } else {
    // Add new item
    set(cartAtom, [...cart, { product, quantity }]);
  }
});

export const updateCartItemQuantityAtom = atom(
  null,
  (get, set, { productId, quantity }: { productId: number; quantity: number }) => {
    const cart = get(cartAtom);
    const updatedCart = cart.map((item) =>
      item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    set(cartAtom, updatedCart);
  }
);

export const removeFromCartAtom = atom(null, (get, set, productId: number) => {
  const cart = get(cartAtom);
  const updatedCart = cart.filter((item) => item.product.id !== productId);
  set(cartAtom, updatedCart);
});

export const clearCartAtom = atom(null, (get, set) => {
  set(cartAtom, []);
});
