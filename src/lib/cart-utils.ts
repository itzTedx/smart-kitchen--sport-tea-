import { CartItem } from "./cart";

// Safe localStorage operations
export const getCartFromStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem("sporttea-cart");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error reading cart from localStorage:", error);
    return [];
  }
};

export const setCartToStorage = (cart: CartItem[]): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("sporttea-cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error writing cart to localStorage:", error);
  }
};

export const clearCartFromStorage = (): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem("sporttea-cart");
  } catch (error) {
    console.error("Error clearing cart from localStorage:", error);
  }
};

// Cart calculation utilities
export const calculateCartTotal = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

export const calculateCartItemCount = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

// Cart validation
export const validateCartItem = (item: unknown): item is CartItem => {
  if (!item || typeof item !== "object" || item === null) return false;

  const cartItem = item as CartItem;
  return (
    "product" in item &&
    "quantity" in item &&
    typeof cartItem.product?.id === "number" &&
    typeof cartItem.product?.title === "string" &&
    typeof cartItem.product?.price === "number" &&
    typeof cartItem.quantity === "number" &&
    cartItem.quantity > 0
  );
};

export const validateCart = (cart: unknown): CartItem[] => {
  if (!Array.isArray(cart)) return [];

  return cart.filter(validateCartItem);
};
