"use client";

import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext();

function StoreProvider({ children }) {
  const [storeData, setStoreData] = useState([]);
  const value = { storeData, setStoreData };
  useEffect(() => {
    async function getProducts() {
      try {
        const url = await fetch("https://fakestoreapi.com/products");
        if (!url.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await url.json();
        setStoreData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        console.log("finally");
      }
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
