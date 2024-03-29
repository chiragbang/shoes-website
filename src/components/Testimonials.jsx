// "use client"
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import '../styles/Testimonials.css';
// // import required modules
// import { Pagination } from 'swiper/modules';
// import Testimonial1 from './testimonials/Testimonial1';
// import Testimonial2 from './testimonials/Testimonial2';
// import Testimonials3 from './testimonials/Testimonials3';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         pagination={{
//           dynamicBullets: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide><Testimonial1/></SwiperSlide>
//         <SwiperSlide><Testimonial2/></SwiperSlide>
//         <SwiperSlide><Testimonials3/></SwiperSlide>
        
//       </Swiper>
//     </>
//   );
// }

"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import '../styles/Testimonials.css';


// import required modules
import { Pagination } from 'swiper/modules';
import Testimonial1 from './testimonials/Testimonial1';
import Testimonial2 from './testimonials/Testimonial2';
import Testimonials3 from './testimonials/Testimonials3';

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='testimonial-swiper'><Testimonial1/></SwiperSlide>
        <SwiperSlide><Testimonial2/></SwiperSlide>
        <SwiperSlide><Testimonials3/></SwiperSlide>
       
      </Swiper>
    </>
  );
}
