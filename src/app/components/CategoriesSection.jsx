"use client";

import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import womensImg from "../../../public/images/womens_category.jpg";
import mensImg from "../../../public/images/mens_category.jpg";
import jewelryImg from "../../../public/images/jewelry.jpg";
import techImg from "../../../public/images/tech.jpg";

function CategoriesSection() {
  const categories = [
    { category: "Men's Clothing", image: mensImg },
    { category: "Women's Clothing", image: womensImg },
    { category: "Jewelry", image: jewelryImg },
    { category: "Electronics", image: techImg },
  ];
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function getProducts() {
  //     const url = await fetch("https://fakestoreapi.com/products");
  //     const data = await url.json();
  //     console.log(data);
  //     setData(data);
  //   }
  //   getProducts();
  // }, []);
  return (
    <div className="mb-12">
      <h2 className="text-center text-zinc-900 text-3xl mt-6 mb-3 p-2 font-semibold">
        Browse by Category
      </h2>
      <div className="grid gird-cols-1 md:grid-cols-4">
        {categories.map((x, i) => (
          <CategoryCard name={x.category} imgUrl={x.image} key={i} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection;
