import Image from "next/image";
import Button from "./utilities/Button";

function CategoryCard({ name, imgUrl }) {
  return (
    <div className="relative w-full h-80">
      <Image
        src={imgUrl}
        layout="fill"
        objectFit="cover"
        alt={name}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
      <Button
        variant="secondary"
        className="absolute -translate-y1/2 -translate-x-1/2 mx-auto left-1/2 bottom-[10%] rounded p-4"
      >
        {name}
      </Button>
    </div>
  );
}

export default CategoryCard;
