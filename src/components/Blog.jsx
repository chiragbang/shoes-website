"use client"
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "../styles/Blog.css";
import { Grid, Pagination } from "swiper/modules";
import BlogCard from "./blog/blogCard";

export default function App() {
  return (
    <>
      <h3 className="blog-div-title">From <br/>the blog</h3>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="blogSwiper"
      >
        <SwiperSlide className="blog-swiper-slide">
          <BlogCard title="Blog Title 1" content="Blog Content 1" />
        </SwiperSlide>
        <SwiperSlide className="blog-swiper-slide">
          <BlogCard title="Blog Title 2" content="Blog Content 2" />
        </SwiperSlide>
        <SwiperSlide className="blog-swiper-slide">
          <BlogCard title="Blog Title 3" content="Blog Content 3" />
        </SwiperSlide>
        <SwiperSlide className="blog-swiper-slide">
          <BlogCard title="Blog Title 4" content="Blog Content 4" />
        </SwiperSlide>
        <SwiperSlide className="blog-swiper-slide">
          <BlogCard title="Blog Title 5" content="Blog Content 5" />
        </SwiperSlide>
        <SwiperSlide className="blog-swiper-slide">
          <BlogCard title="Blog Title 6" content="Blog Content 6" />
        </SwiperSlide>
        <SwiperSlide className="blog-swiper-slide">
          <BlogCard title="Blog Title 7" content="Blog Content 7" />
        </SwiperSlide>
        <SwiperSlide className="blog-swiper-slide">
          <BlogCard title="Blog Title 8" content="Blog Content 8" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
