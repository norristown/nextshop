import Link from "next/link";
import CartCard from "./CartCard";

function Wrapper({ cartData, total }) {
  return (
    <div className="mt-32 mb-12" id="categories">
      <h2 className="text-center text-zinc-900 text-xl font-semibold">
        {total}
      </h2>
      <div className="flex justify-center">
        <div className="grid gird-cols-1 gap-2">
          {cartData.map((x, i) => (
            <div
              className="flex justify-between border-2 border-zinc-600"
              key={i}
            >
              <Link href={`/products/${x.id}`}>
                <CartCard name={x.category} src={x.image} imgUrl={x.image} />
              </Link>
              <div className="flex flex-col justify-end">
                <p className="text-gray-800 text-sm font-medium mt-2 sm:text-center md:text-left">
                  {x.title}
                </p>
                <h1 className="font-semibold mt-2">
                  ${(Math.round(x.price * 100) / 100).toFixed(2)}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
