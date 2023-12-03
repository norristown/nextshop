import Image from "next/image";
import bannerImg from "../../../public/images/banner.jpg";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mt-32">
      <div className="banner__image-container w-full md:w-1/2">
        <Image alt="banner image" src={bannerImg} />
      </div>
      <div className="banner__description-container flex justify-center w-full md:w-1/2">
        <div className="flex flex-col">
          <h1 className="text-2xl pb-3 font-semibold">
            Only the hottest items for you.
          </h1>
          <p className="pb-3">Hurry - before they&apos;re all gone.</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
