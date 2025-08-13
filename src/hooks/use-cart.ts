import { useEffect } from "react";

import { useAtom } from "jotai";

import { Product } from "@/data/product";
import {
  addToCartAtom,
  cartAtom,
  cartItemCountAtom,
  cartTotalAtom,
  clearCartAtom,
  removeFromCartAtom,
  updateCartItemQuantityAtom,
} from "@/lib/cart";
import { clearCartFromStorage, getCartFromStorage, setCartToStorage } from "@/lib/cart-utils";

export function useCart() {
  const [cart, setCart] = useAtom(cartAtom);
  const [itemCount] = useAtom(cartItemCountAtom);
  const [total] = useAtom(cartTotalAtom);
  const [, addToCart] = useAtom(addToCartAtom);
  const [, updateCartItemQuantity] = useAtom(updateCartItemQuantityAtom);
  const [, removeFromCart] = useAtom(removeFromCartAtom);
  const [, clearCart] = useAtom(clearCartAtom);

  // Sync with localStorage on mount
  useEffect(() => {
    const storedCart = getCartFromStorage();
    if (storedCart.length > 0 && cart.length === 0) {
      setCart(storedCart);
    }
  }, [setCart, cart.length]);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (cart.length > 0) {
      setCartToStorage(cart);
    } else {
      clearCartFromStorage();
    }
  }, [cart]);

  const addItem = (product: Product, quantity = 1) => {
    addToCart({ product, quantity });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    updateCartItemQuantity({ productId, quantity });
  };

  const removeItem = (productId: number) => {
    removeFromCart(productId);
  };

  const clearAll = () => {
    clearCart();
  };

  const getItemQuantity = (productId: number) => {
    const item = cart.find((item) => item.product.id === productId);
    return item?.quantity || 0;
  };

  const isInCart = (productId: number) => {
    return cart.some((item) => item.product.id === productId);
  };

  return {
    cart,
    itemCount,
    total,
    addItem,
    updateQuantity,
    removeItem,
    clearAll,
    getItemQuantity,
    isInCart,
  };
}
