"use client";

import { useState } from "react";
import Wrapper from "../components/Wrapper";
import Search from "../components/utilities/Search";
import { useStore } from "../context/store-context";

function StorePage() {
  const { storeData } = useStore();
  const [query, setQuery] = useState("");
  const filter = storeData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Search userInput={query} setUserInput={setQuery} />
      {query === "" ? (
        <Wrapper storeData={storeData} category="All Items" mt="mt-8" />
      ) : filter.length === 0 ? (
        <p>Nothing here</p>
      ) : (
        <Wrapper storeData={filter} category="Your search results:" mt="mt-8" />
      )}
    </>
  );
}

export default StorePage;
