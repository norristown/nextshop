"use client";

import Wrapper from "../components/Wrapper";
import { useStore } from "../context/store-context";

function StorePage() {
  const { storeData } = useStore();
  return <Wrapper storeData={storeData} category="All Items" />;
}

export default StorePage;
