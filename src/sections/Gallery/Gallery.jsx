"use client";
import Image from "next/image";
import React from "react";
import useMediaQuery from "@/hook/hook";
import GallerySwiper from "../../components/GallerySwiper/GallerySwiper";

import mountain2 from "public/images/gallery-2.jpg";
import mountain3 from "public/images/gallery-3.jpg";
import mountain1 from "public/images/gallery-1.jpg";

const Gallery = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <section id="gallery" className="section background-gallery bg-base">
      <div className="container ">
        <h2 className="title text-center mb-6 md:mb-16">
          OUR <span className="font-medium ">gallery</span>
        </h2>
        {!isBreakpoint ? (
          <GallerySwiper
            imagesArray={[
              mountain1,
              mountain2,
              mountain3,
              mountain1,
              mountain2,
              mountain3,
            ]}
          />
        ) : (
          <ul className="flex flex-col gap-6">
            <li>
              <Image src={mountain1} alt="Picture of mountains" />
            </li>
            <li>
              <Image src={mountain2} alt="Picture of mountains" />
            </li>
            <li>
              <Image src={mountain3} alt="Picture of mountains" />
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Gallery;
