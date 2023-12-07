"use client";

import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext();

function StoreProvider({ children }) {
  const [storeData, setStoreData] = useState([]);
  const value = { storeData, setStoreData };
  useEffect(() => {
    async function getProducts() {
      const url = await fetch("https://fakestoreapi.com/products");
      const data = await url.json();
      setStoreData(data);
    }
    getProducts();
  }, []);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used with StoreProvider");
  }

  return context;
}

export { useStore, StoreProvider };
