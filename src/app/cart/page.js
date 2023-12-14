"use client";

import { useState } from "react";
import { useCart } from "../context/cart-context";
import CartWrapper from "../components/CartWrapper";

function CartPage() {
  const { state } = useCart();
  const totalPrice = state.products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const totalItems = state.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  console.log(state);
  return (
    <div className="mt-48 mx-4 md:mx-0">
      {state.products.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <CartWrapper
          cartData={state.products}
          totalPrice={totalPrice}
          totalItems={totalItems}
        />
      )}
    </div>
  );
}

export default CartPage;
