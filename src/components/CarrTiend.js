import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import logo5 from "../assets/logo5.jpg";
import logo6 from "../assets/logo6.jpg";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarrTiend = () => {
    return (
        <>
            <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{ clickable: true, }}
                navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img className="w-full h-72" src={logo5} alt="logo1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-72" src={logo6} alt="logo1" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default CarrTiend;