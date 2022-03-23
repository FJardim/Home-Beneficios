import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Descuento from '../components/Descuento';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function CarrDescuent() {
    return (
        <>
            <Swiper
                slidesPerView={3} spaceBetween={20} loop={true} pagination={{ clickable: true, }}
                navigation={true} modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="ml-11">
                    <Descuento img="https://api.tubeneficiosi.com/uploads/stores/1632407932242-418869440.png" name="10%" text="Descuento" titulo="MacDonalds" />
                </SwiperSlide>
                <SwiperSlide>
                    <Descuento img="https://api.tubeneficiosi.com/uploads/stores/1632410541376-29768203.jpg" name="10%" text="Descuento" titulo="Cafe Amour" />
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
            </Swiper>
        </>
    );
}