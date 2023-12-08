"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CategoryCard from "./CategoryCard";
import womensImg from "../../../public/images/womens_category.jpg";
import mensImg from "../../../public/images/mens_category.jpg";
import jewelryImg from "../../../public/images/jewelry.jpg";
import techImg from "../../../public/images/tech.jpg";

function CategoriesSection() {
  const categories = [
    { category: "Men's Clothing", image: mensImg, path: "/category/mens" },
    {
      category: "Women's Clothing",
      image: womensImg,
      path: "/category/womens",
    },
    { category: "Jewelry", image: jewelryImg, path: "/category/jewelry" },
    { category: "Electronics", image: techImg, path: "/category/electronics" },
  ];

  return (
    <div className="mb-12" id="categories">
      <h2 className="text-center text-zinc-900 text-xl mt-6 mb-3 p-2 font-base">
        Browse by Category
      </h2>
      <div className="grid gird-cols-1 md:grid-cols-4">
        {categories.map((x, i) => (
          <Link href={x.path} key={i}>
            <CategoryCard name={x.category} imgUrl={x.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection;
