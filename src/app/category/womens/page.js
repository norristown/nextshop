"use client";

import { useStore } from "../../context/store-context";
import Wrapper from "../../components/Wrapper";

function WomensPage() {
  const { storeData } = useStore();
  const category = `women's clothing`;
  const womensItems = storeData.filter((item) => item.category === category);

  return <Wrapper storeData={womensItems} category="Women's Clothing" />;
}

export default WomensPage;
