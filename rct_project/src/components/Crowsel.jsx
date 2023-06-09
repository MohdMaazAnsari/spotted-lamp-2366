import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "../pages/Carousel.module.css"
import {Image} from "@chakra-ui/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={style.mySwiper}
      >
        <SwiperSlide className = {style.slide}><Image src="../images/1.jpg" /></SwiperSlide>
        <SwiperSlide><Image src="../images/2.jpg" w="100%" /></SwiperSlide>
        <SwiperSlide><Image src="../images/3.jpg" /></SwiperSlide>
        <SwiperSlide><Image src="../images/4.jpg" /></SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 0 0" ref={progressCircle}> 
         
           </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}