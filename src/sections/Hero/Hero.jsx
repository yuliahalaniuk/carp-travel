"use client";

import React from "react";
import JoinBtn from "@/components/JoinBtn/JoinBtn";

const Hero = () => {
  return (
    <section className="pt-[105px] pb-14 bg-base background-hero  md:pt-[122px] md:pb-16">
      <div className="container  flex flex-col gap-6  md:grid md:grid-cols-[426px,230px] md:gap-x-12  lg:grid-cols-[646px,305px] lg:gap-x-[272px] ">
        <div className="flex flex-col  w-max ml-auto md:row-start-1 md:col-start-2 md:mb-14 lg:mb-[181px] ">
          <p className="text-[37px] font-medium  md:text-xlmd uppercase lg:text-xllg">
            7
            <span className="font-thin tracking-days md:tracking-daysmd ">
              days
            </span>
          </p>
          <p className=" text-xs uppercase font-light tracking-extra mt-[-14px] md:tracking-extramd md:text-sm md:mt-[-10px] lg:text-textms lg:tracking-extralg">
            journey
          </p>
        </div>
        <h1 className="title md:row-start-1 md:row-end-3  md:col-start-1">
          <span className="font-medium">Uncover</span> Carpathian&#39;s Secrets
        </h1>
        <p className="text-xxxxs font-extralight  max-w-[157px]  md:max-w-[264px] md:text-subtext md:tracking-subtext md:mb-0  md:row-start-3  md:col-start-1 self-end lg:text-subtextlg lg:max-w-full lg:tracking-menu ">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p className="text text-justify md:row-start-2  md:col-start-2  md:mb-7">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>

        <JoinBtn />
      </div>
    </section>
  );
};

export default Hero;
