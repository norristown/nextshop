"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import StoreCard from "../../components/StoreCard";
import Button from "../../components/utilities/Button";
import NumberCounter from "../../components/utilities/NumberCounter";
import { useCart } from "../../context/cart-context";
import { useStore } from "../../context/store-context";

function ProductPage() {
  const pathname = usePathname();
  const [product, setProduct] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [itemAdded, setItemAdded] = useState(false);

  const { dispatch } = useCart();
  const { storeData } = useStore();

  useEffect(() => {
    if (!storeData || storeData.length === 0) {
      return; // Exit early if storeData is empty
    }
    if (pathname) {
      const id = pathname.split("/").pop();
      const index = storeData.findIndex((x) => x.id === Number(id));

      if (index !== -1) {
        setProduct(storeData[index]);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }
  }, [storeData, pathname]);

  if (notFound) {
    return <div>Item not found.</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  //--------------------------------------------------------------------
  function handleAddToCart() {
    setItemAdded(true);
    dispatch({ type: "add", product: { ...product, quantity } });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-lg mx-4 md:mx-auto my-32">
      {product && (
        <>
          <div className="cols-span-2">
            <div className="md:border p-4 rounded border-slate-300 flex items-center justify-center">
              <StoreCard
                src={product.image}
                imgUrl={product.image}
                name={product.title}
                height={300}
                width={150}
                style={{ objectFit: "cover", height: "300px", width: "auto" }}
              />
            </div>
          </div>
          <div className="cols-span-3 flex flex-col justify-between">
            <div className="product-info mb-4">
              <h1 className="font-semibold text-xl">{product.title}</h1>
              <h1 className="font-bold text-lg text-gray-700 my-4">
                ${(Math.round(product.price * 100) / 100).toFixed(2)}
              </h1>
              {/* <div className="flex">
                {}
                <StarIcon className="w-7 h-7" /> {product.rating.rate}{" "}
                <span>({product.rating.count})</span>
              </div> */}
              <p>{product.description}</p>
            </div>
            <div className="product-controls flex justify-between items-end">
              <NumberCounter quantity={quantity} updateQuantity={setQuantity} />
              <Button variant="dark" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
            {itemAdded && (
              <>
                {" "}
                <p className="text-green-600 text-sm font-semibold my-4">
                  {product.title} has been added to your cart!
                </p>
                <Link href="/cart">
                  <Button
                    variant="primary"
                    className="bg-green-600 hover:bg-green-700 w-full rounded"
                  >
                    Click here to checkout
                  </Button>
                </Link>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductPage;
