import Image from "next/image";

function StoreCard({ src, name, imgUrl }) {
  function imageLoader() {
    return src;
  }
  return (
    <div className="relative w-full h-64">
      <Image
        loader={imageLoader}
        src={imgUrl}
        layout="fill"
        objectFit="scale-down"
        alt={name}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    </div>
  );
}

export default StoreCard;
