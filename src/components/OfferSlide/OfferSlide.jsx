import Image from "next/image";
import React from "react";
import he from "he";

const OfferSlide = ({ number, message, moto, image, changeSlide }) => {
  const decodedMessage = he.decode(message);
  return (
    <div className={`section bg-base background-service-${number}`}>
      <div className="container h-[740px] flex flex-col md:grid md:grid-cols-[463px,221px]   md:gap-x-5 md:h-auto lg:md:grid-cols-[608px,auto,293px]">
        <h2 className="title mb-6 md:row-start-1 md:col-start-1 md:mb-9 lg:mb-6">
          We <span className="font-medium ">offer</span>
        </h2>
        <div className="text-slide-number font-thin text-right mb-4 md:row-start-1 md:col-start-2 md:mb-0 md:text-xlslider md:text-left lg:text-xllg lg:">
          0{number}/<span className="font-thin text-pale-grey">05</span>
        </div>

        <Image
          src={image}
          width={"100%"}
          height={213}
          objectFit="cover"
          alt="Picture of activity"
          className="w-full h-[213px] md:row-start-2 md:row-end-5 md:col-start-1 md:w-[463px] md:h-[370px] lg:w-[608px] lg:h-[434px]"
        />
        <p className="text-widexxxs font-extralight tracking-almostwidest mb-6 text-right md:row-start-3  md:col-start-2 md:mb-0 md:text-left lg:col-start-3 lg:row-start-2">
          {moto}
        </p>
        <ul className="flex flex-col gap-4 md:row-start-2 md:col-start-2 md:mb-[25px]">
          <li
            className={number === 1 ? "slider-link-active" : "slider-link"}
            onClick={() => {
              changeSlide(0);
            }}
          >
            ATVs Traveling
          </li>
          <li
            className={number === 2 ? "slider-link-active" : "slider-link"}
            onClick={() => changeSlide(1)}
          >
            Rock climbing
          </li>
          <li
            className={
              number === 3
                ? "slider-link-active max-w-[133px]  md:max-w-full "
                : "slider-link max-w-[133px]  md:max-w-full"
            }
            onClick={() => changeSlide(2)}
          >
            Hot air ballooning
          </li>
          <li
            className={number === 4 ? "slider-link-active" : "slider-link"}
            onClick={() => changeSlide(3)}
          >
            Skydiving
          </li>
          <li
            className={number === 5 ? "slider-link-active" : "slider-link"}
            onClick={() => changeSlide(4)}
          >
            Rafting
          </li>
        </ul>
        <p className="text-sm font-extralight mt-auto md:row-start-4 md:col-start-2 md:text-justify md:text-textslider lg:col-start-3 lg:text-textlg">
          {decodedMessage}
        </p>
      </div>
    </div>
  );
};

export default OfferSlide;
