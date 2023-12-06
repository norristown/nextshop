"use client";

import { useStore } from "../../context/store-context";
import Wrapper from "../../components/Wrapper";

function MensPage() {
  const { storeData } = useStore();
  const category = `men's clothing`;
  const mensItems = storeData.filter((item) => item.category === category);

  return <Wrapper storeData={mensItems} category="Men's Clothing" />;
}

export default MensPage;
