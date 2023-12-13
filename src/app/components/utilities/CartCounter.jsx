import { useState, useEffect } from "react";
import { useCart } from "../../context/cart-context";

function CartCounter({ quantity, item }) {
  const [userInput, setUserInput] = useState(quantity);
  const { state, dispatch } = useCart();
  //   function handleAddToCart() {
  //     dispatch({ type: "add", product: { ...product, quantity } });
  //   }

  useEffect(() => {
    setUserInput(quantity);
  }, [userInput, setUserInput, quantity]);
  return (
    <div className="w-32">
      <label
        htmlFor="custom-input-number"
        className="w-full text-black-700 text-sm font-semibold"
      >
        Quantity
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          onClick={() => dispatch({ type: "decrement", product: item })}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl">-</span>
        </button>
        <input
          type="text"
          readOnly
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-defualt flex items-center text-gray-700"
          name="cursor-input-number"
          value={quantity}
        />
        <button
          onClick={() => dispatch({ type: "increment", product: item })}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl">+</span>
        </button>
      </div>
    </div>
  );
}

export default CartCounter;
