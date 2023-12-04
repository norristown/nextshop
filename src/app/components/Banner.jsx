import Image from "next/image";
import bannerImg from "../../../public/images/banner.jpg";
import Button from "./utilities/Button";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mt-36">
      <div className="banner__image-container w-full md:w-1/2">
        <Image alt="banner image" src={bannerImg} />
      </div>
      <div className="banner__description-container flex justify-center w-full md:w-1/2">
        <div className="flex flex-col">
          <h1 className="text-2xl pb-3 font-semibold">
            Only the hottest items for you.
          </h1>
          <p className="pb-3 text-center">
            Hurry - before they&apos;re all gone.
          </p>
          <a href="#categories">
            <Button primary={true} className="rounded font-semibold w-full">
              Shop Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
