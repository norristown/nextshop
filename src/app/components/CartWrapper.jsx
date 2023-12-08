import Link from "next/link";
import CartCard from "./CartCard";
import { useCart } from "../context/cart-context";

function Wrapper({ cartData, totalPrice, totalItems }) {
  return (
    <div className="mt-32 mb-12" id="categories">
      <h2 className="text-zinc-900 text-xl font-semibold">
        Total Price: {(Math.round(totalPrice * 100) / 100).toFixed(2)}
      </h2>
      <p>Total Items: {totalItems}</p>
      <div className="flex">
        {cartData.map((x, i) => (
          <div className="" key={i}>
            <div className="flex flex-col justify-center">
              <p className="text-gray-800 text-sm font-medium mt-2 sm:text-center md:text-left">
                {x.title}
              </p>
              <h1 className="font-semibold mt-2">
                ${(Math.round(x.price * 100) / 100).toFixed(2)}
              </h1>
            </div>
            <Link href={`/products/${x.id}`}>
              <CartCard name={x.category} src={x.image} imgUrl={x.image} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wrapper;
