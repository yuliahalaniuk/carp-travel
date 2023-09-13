import React, { useRef } from "react";
import Image from "next/image";
import useMediaQuery from "@/hook/hook";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Grid } from "swiper/modules";
import "../../app/swiper.css";

const GallerySwiper = ({ array }) => {
  const sliderRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const isBreakpoint = useMediaQuery(1280);
  return (
    <>
      <Swiper
        ref={sliderRef}
        centeredSlides={true}
        centerInsufficientSlides={true}
        loop={true}
        slidesPerView={3}
        modules={[Navigation, A11y, Grid]}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        {array.map((img, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div className="flex justify-center items-center  h-[294px]">
                {isActive ? (
                  <Image src={img} alt="Picture of mountains" />
                ) : (
                  <Image
                    src={img}
                    alt="Picture of mountains"
                    width={isBreakpoint ? 120 : 312}
                  />
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between px-[120px] lg:px-[220px]">
        <button
          type="button"
          ref={navigationPrevRef}
          className="text-navbtn font-thin uppercase"
          onClick={() => sliderRef.current.swiper.slidePrev()}
        >
          Prev
        </button>
        <button
          type="button"
          ref={navigationNextRef}
          className="text-navbtn font-thin uppercase ml-auto"
          onClick={() => sliderRef.current.swiper.slideNext()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default GallerySwiper;
