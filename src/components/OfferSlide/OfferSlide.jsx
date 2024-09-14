import Image from "next/image";
import React, { useMemo } from "react";
import he from "he";
import SlideLink from "../SlideLink/SlideLink";
import { activitiesToOfferData } from "@/data/activitiesToOfferData";

const OfferSlide = ({ number, message, moto, image, changeSlide }) => {
  const decodedMessage = useMemo(() => he.decode(message), [message]);

  return (
    <div className={`section bg-base background-service-${number}`}>
      <div className="container h-[740px] flex flex-col md:grid md:grid-cols-[463px,221px] md:gap-x-5 md:h-auto lg:grid-cols-[608px,auto,293px]">
        <h2 className="title mb-6 md:row-start-1 md:col-start-1 md:mb-9 lg:mb-6">
          We <span className="font-medium">offer</span>
        </h2>
        <div className="text-slide-number font-thin text-right mb-4 md:row-start-1 md:col-start-2 md:mb-0 md:text-xlslider md:text-left lg:text-xllg">
          0{number}/
          <span className="font-thin text-pale-grey">
            0{activitiesToOfferData?.length}
          </span>
        </div>

        <Image
          src={image}
          alt="Picture of activity"
          className="w-full h-[213px] md:row-start-2 md:row-end-5 md:col-start-1 md:w-[463px] md:h-[370px] lg:w-[608px] lg:h-[434px]"
        />

        <p className="text-widexxxs font-extralight tracking-almostwidest mb-6 text-right md:row-start-3 md:col-start-2 md:mb-0 md:text-left lg:col-start-3 lg:row-start-2">
          {moto}
        </p>

        <ul className="flex flex-col gap-4 md:row-start-2 md:col-start-2 md:mb-[25px]">
          {activitiesToOfferData.map((activity, index) => (
            <SlideLink
              key={activity.id}
              label={activity.label}
              isActive={number === activity.id}
              onClick={() => changeSlide(index)}
            />
          ))}
        </ul>

        <p className="text-sm font-extralight mt-auto md:row-start-4 md:col-start-2 md:text-justify md:text-textslider lg:col-start-3 lg:text-textlg">
          {decodedMessage}
        </p>
      </div>
    </div>
  );
};

export default OfferSlide;
