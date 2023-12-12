"use client";

import { useCart } from "../context/cart-context";
import CartWrapper from "../components/CartWrapper";
import Button from "../components/utilities/Button";
import NumberCounter from "../components/utilities/NumberCounter";

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
    <div className="mt-48">
      {state.products.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <>
          <CartWrapper
            cartData={state.products}
            totalPrice={totalPrice}
            totalItems={totalItems}
          />
          <Button variant="primary">Checkout</Button>
        </>
      )}
    </div>
  );
}

export default CartPage;
