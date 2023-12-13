"use client";

import Link from "next/link";
import { useState } from "react";
import CartCard from "./CartCard";
import { useCart } from "../context/cart-context";
import CartCounter from "./utilities/CartCounter";
import Button from "./utilities/Button";

function Wrapper({ cartData, totalPrice, totalItems }) {
  return (
    <div className="mt-32 mb-12">
      <h1 className="font-semibold">Your Shopping Cart: </h1>
      {cartData.map((x, i) => (
        <div className="grid grid-cols-2 mb-8" key={i}>
          <div className="flex flex-col justify-center">
            <p className="text-gray-800 text-sm font-medium mt-2 sm:text-center md:text-left">
              {x.title}
            </p>
            <h1 className="font-semibold mt-2">
              ${(Math.round(x.price * 100) / 100).toFixed(2)}
            </h1>
            <div className="product-controls flex justify-between items-end">
              <CartCounter quantity={x.quantity} item={x} />
            </div>
          </div>

          <Link href={`/products/${x.id}`}>
            <CartCard name={x.category} src={x.image} imgUrl={x.image} />
          </Link>
        </div>
      ))}
      <div className="mt-8 flex flex-col">
        <h2 className="text-zinc-900 text-xl font-semibold">
          Total Price: {(Math.round(totalPrice * 100) / 100).toFixed(2)}
        </h2>
        <p className="mb-4">Total Items: {totalItems}</p>
        <Button variant="primary" className="w-1/3 ">
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Wrapper;
