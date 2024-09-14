import React from "react";
import { careerInfoData } from "@/data/careerInfoData";

const CareerInfo = () => {
  const { title, subtitle, mainText, closingText, benefits } = careerInfoData;

  return (
    <>
      <h2 className="title mb-6 md:row-start-1 md:col-start-1 md:col-end-3 md:mb-0">
        {title.split(" ")[0]}{" "}
        <span className="font-medium">{title.split(" ")[1]}</span>
      </h2>
      <p className="text-sm font-extralight w-textcont ml-auto mb-9 md:w-full md:row-start-1 md:col-start-3 block md:text-justify md:text-textslider md:mb-1 lg:text-textlg lg:mb-8">
        {mainText}
      </p>
      <b className="block text-subtitle font-extralight w-textcont ml-auto mb-9 md:w-full md:row-start-2 md:col-start-1 md:text-right md:mb-14 lg:col-start-1 lg:mb-12 lg:w-full lg:pr-[309px]">
        {subtitle}
      </b>
      <ul className="flex flex-col gap-4 md:gap-6 mb-[112px] md:mb-0 md:row-start-3 md:row-end-6 md:col-start-1 lg:grid lg:grid-cols-[293px,285px] lg:gap-x-6">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="w-textcont mr-auto md:w-full lg:col-start-1 lg:col-end-3 lg:grid lg:grid-cols-2 lg:gap-6 lg:row-auto"
          >
            <h3 className="text-sm text-right font-normal mb-2 md:text-textms lg:col-start-1 lg:mb-0">
              {benefit.title}
            </h3>
            <p className="text-xs text-right font-extralight lg:col-start-2 lg:text-left">
              {benefit.description}
            </p>
          </li>
        ))}
      </ul>

      <p className="text-sm font-extralight w-textcont ml-auto mb-6 md:w-[170px] md:row-start-3 md:col-start-2 md:text-textslider md:ml-0 md:mb-8 lg:text-textlg lg:w-[234px] lg:mb-[14px]">
        {closingText}
      </p>
    </>
  );
};

export default CareerInfo;
