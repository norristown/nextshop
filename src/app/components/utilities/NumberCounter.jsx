import { useState, useEffect } from "react";

function NumberCounter({ quantity, updateQuantity }) {
  const [userInput, setUserInput] = useState(quantity);

  useEffect(() => {
    updateQuantity(userInput);
  }, [userInput, updateQuantity]);
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
          onClick={quantity > 1 ? () => updateQuantity(quantity - 1) : null}
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
          onChange={(e) => updateQuantity(Number(e.target.value))}
        />
        <button
          onClick={quantity < 100 ? () => updateQuantity(quantity + 1) : null}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl">+</span>
        </button>
      </div>
    </div>
  );
}

export default NumberCounter;
