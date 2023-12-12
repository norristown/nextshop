import Link from "next/link";
import StoreCard from "./StoreCard";

function Wrapper({ storeData, category, mt = "mt-32" }) {
  return (
    <div className={`${mt} mb-8`} id="categories">
      <h2 className="text-zinc-900 text-xl font-semibold">{category}</h2>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {storeData.map((x, i) => (
          <div className="" key={i}>
            <div>
              <Link href={`/products/${x.id}`}>
                <StoreCard name={x.category} src={x.image} imgUrl={x.image} />
                <p className="text-gray-800 text-sm font-medium mt-2 sm:text-center md:text-left">
                  {x.title}
                </p>
              </Link>
            </div>
            <h1 className="font-semibold mt-2">
              ${(Math.round(x.price * 100) / 100).toFixed(2)}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wrapper;
