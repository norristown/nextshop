import StoreCard from "./StoreCard";

function Wrapper({ storeData, category }) {
  return (
    <div className="mt-32 mb-12" id="categories">
      <h2 className="text-center text-zinc-900 text-3xl font-semibold">
        {category}
      </h2>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-12">
        {storeData.map((x, i) => (
          <div className="flex flex-col justify-between" key={i}>
            <div className="border-4">
              <StoreCard name={x.category} src={x.image} imgUrl={x.image} />
              <p className="text-gray-700 text-sm font-medium mt-2 sm:text-center md:text-left">
                {x.title}
              </p>
            </div>
            <h1 className="font-semibold mt-2">
              ${(Math.round(x.price * 100) / 100).toFixed(2)}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wrapper;
