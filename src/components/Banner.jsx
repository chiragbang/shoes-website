"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Banner1 from "./banner/Banner1";
import Banner2 from "./banner/Banner2";
import Banner3 from "./banner/Banner3";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Banner1 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner1 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner1 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
