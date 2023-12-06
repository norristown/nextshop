"use client";

import { useStore } from "../../context/store-context";
import Wrapper from "../../components/Wrapper";

function ElectronicsPage() {
  const { storeData } = useStore();
  const category = `electronics`;
  const electronicsItems = storeData.filter(
    (item) => item.category === category
  );

  return <Wrapper storeData={electronicsItems} category="Electronics" />;
}

export default ElectronicsPage;
