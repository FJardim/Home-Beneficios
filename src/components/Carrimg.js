import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.jpg";
import logo5 from "../assets/logo5.jpg";
import logo6 from "../assets/logo6.jpg";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carrimg = () => {
    return (
        <>
            <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{ clickable: true, }}
                navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img className="w-full h-72" src={logo1} alt="logo1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-72" src={logo2} alt="logo1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-72" src={logo3} alt="logo1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-72" src={logo4} alt="logo1" />
                </SwiperSlide>
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
export default Carrimg;