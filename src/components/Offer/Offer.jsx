"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import OfferSlide from "@/components/OfferSlide/OfferSlide";

import activity1 from "@/images/services/activity-1.jpg";
import activity2 from "@/images/services/activity-2.jpg";
import activity3 from "@/images/services/activity-3.jpg";
import activity4 from "@/images/services/activity-4.jpg";
import activity5 from "@/images/services/activity-5.jpg";

const Offer = () => {
  const sliderRef = useRef(null);

  const changeSlide = (index) => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slideTo(index);
    }
  };

  return (
    <section id="services">
      <Swiper
        ref={sliderRef}
        loop
        modules={[Navigation, A11y, EffectFade]}
        slidesPerView={1}
        effect="fade"
        allowTouchMove={false}
      >
        <SwiperSlide>
          <OfferSlide
            image={activity1}
            number={1}
            changeSlide={changeSlide}
            moto="Feel the adrenaline rush"
            message={` Join exciting rafting expeditions on the waterways of the
            Carpathians. Go through challenging waterways and overcome gusty
            waves, feel the adrenaline, and enjoy the incredible views of
            the surrounding mountains.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferSlide
            image={activity2}
            number={2}
            changeSlide={changeSlide}
            moto="Destroy your limitations"
            message={` Overcome the peaks of the Carpathians in a unique way -
            climbing. Make your own way to the heights and find inner peace
            in the embrace of the mighty rocks.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferSlide
            image={activity3}
            number={3}
            changeSlide={changeSlide}
            moto="Get Inspired"
            message={`Feel Zen over the mountain peaks! Hot air ballooning gives you
            incredible impressions and panoramas of the Carpathians that
            seem endless.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferSlide
            image={activity4}
            number={4}
            changeSlide={changeSlide}
            moto="Overcome your fears"
            message={`Fly in the sky over the Carpathians! Experienced instructors
            will help you realize your dream of free flight. Remember the
            incredible emotions and panoramas from a bird&#39;s eye view
            forever.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferSlide
            image={activity5}
            number={5}
            changeSlide={changeSlide}
            moto="Trust the flow"
            message={` Join exciting rafting expeditions on the waterways of the
            Carpathians. Go through challenging waterways and overcome gusty
            waves, feel the adrenaline, and enjoy the incredible views of
            the surrounding mountains.`}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Offer;
