"use client";

import { useCart } from "../context/cart-context";
import CartWrapper from "../components/CartWrapper";

function CartPage() {
  const { state } = useCart();
  return (
    <div className="mt-48">
      {state.products.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <CartWrapper cartData={state.products} />
      )}
    </div>
  );
}

export default CartPage;
