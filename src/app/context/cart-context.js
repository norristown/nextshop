"use client";

import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  const isInCart = state.products.find((item) => item.id === action.product.id);
  switch (action.type) {
    case "add":
      if (isInCart) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + action.product.quantity }
              : item
          ),
        };
      }
      return { products: [...state.products, action.product] };

    case "remove":
      return {
        products: state.products.filter((x) => x.id !== action.product.id),
      };
    case "increment":
      console.log("inc", action.product);
      return {
        products: state.products.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "decrement":
      if (action.product.quantity === 1) {
        return {
          products: state.products.filter((x) => x.id !== action.product.id),
        };
      }
      return {
        products: state.products.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      throw new Error(`Unhandled action type: ${action.type} `);
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { products: [] });
  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used with a CartProvider");
  }

  return context;
}

export { useCart, CartProvider };
