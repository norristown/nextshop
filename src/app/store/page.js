"use client";

import { useEffect, useState } from "react";
import StoreCard from "../components/StoreCard";

function StorePage() {
  const [storeData, setData] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const url = await fetch("https://fakestoreapi.com/products");
      const data = await url.json();
      console.log(data);
      setData(data);
    }
    getProducts();
  }, []);
  return (
    <div className="mt-32 mb-12" id="categories">
      <h2 className="text-center text-zinc-900 text-3xl mt-6 mb-3 p-2 font-semibold">
        All Items
      </h2>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {storeData.map((x, i) => (
          <div className="flex flex-col justify-between" key={i}>
            <div>
              <StoreCard name={x.category} src={x.image} imgUrl={x.image} />
              <p className="text-gray-700 font-medium sm:text-center md:text-left">
                {x.title}
              </p>
            </div>
            <h1 className="font-semibold mt-2">${x.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StorePage;
