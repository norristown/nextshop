import { useEffect, useState } from "react";

function Search({ userInput, setUserInput }) {
  useEffect(() => {
    setUserInput(userInput);
  }, [userInput, setUserInput]);
  return (
    <input
      className="mt-32 border-2 border-zinc-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      type="text"
      placeholder="search..."
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
    ></input>
  );
}

export default Search;
