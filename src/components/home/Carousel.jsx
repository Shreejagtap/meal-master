"use client";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import CarouselCard from "./CarouselCard";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode, Autoplay]}
      slidesPerView={1}
      spaceBetween={40}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      autoHeight
      freeMode={false}
      navigation={{
        nextEl: ".next-btn-swiper",
        prevEl: ".prev-btn-swiper",
      }}
      pagination={{ enabled: false }}
      className="!p-6"
    >
      <SwiperSlide className="rounded-lg shadow-lg overflow-hidden">
        <CarouselCard />
      </SwiperSlide>
      <SwiperSlide className="rounded-lg shadow-lg overflow-hidden">
        <CarouselCard />
      </SwiperSlide>
      <SwiperSlide className="rounded-lg shadow-lg overflow-hidden">
        <CarouselCard />
      </SwiperSlide>
    </Swiper>
  );
};
