"use client";

import { useStore } from "../../context/store-context";
import Wrapper from "../../components/Wrapper";

function JewelryPage() {
  const { storeData } = useStore();
  const category = `jewelery`;
  const jeweleryItems = storeData.filter((item) => item.category === category);

  return <Wrapper storeData={jeweleryItems} category="Jewelery" />;
}

export default JewelryPage;
