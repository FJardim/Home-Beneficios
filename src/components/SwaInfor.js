import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CarrProdt from '../components/CarrProdt';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function SwaInfor() {
    return (
        <>
            <Swiper
                slidesPerView={2} spaceBetween={20} loop={true} pagination={{ clickable: true, }}
                navigation={true} modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CarrProdt text="BLACK FRIDAY" titulo="PC DE ESCRITORIOS" img="http://tubeneficiosi.com/static/media/monitos.cc60357c.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <CarrProdt text="BLACK FRIDAY" titulo="TODA UNA VARIEDAD DE LAPTOPS" img="http://tubeneficiosi.com/static/media/laptop.3f88b06b.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}