import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MejoresEsper from '../components/MejoresEsper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function CarrMejoresEsper() {
    return (
        <>
            <Swiper
                slidesPerView={4} spaceBetween={10} loop={true} pagination={{ clickable: true, }}
                navigation={true} modules={[Pagination, Navigation]}
                style={{ height: 400 }}
            >
                <SwiperSlide>
                    <MejoresEsper
                        img1="https://api.tubeneficiosi.com/uploads/stores/1632407932242-418869440.png"
                        img="https://api.tubeneficiosi.com/uploads/stores/1637328189209-621677815.jpeg"
                        titulo="MacDonals"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MejoresEsper
                        img1="https://api.tubeneficiosi.com/uploads/stores/1632408699576-883471138.jpg"
                        img="https://api.tubeneficiosi.com/uploads/stores/1632413238791-317589054.jpg"
                        titulo="CASH"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MejoresEsper
                        img1="https://api.tubeneficiosi.com/uploads/stores/1632410541376-29768203.jpg"
                        img="https://api.tubeneficiosi.com/uploads/stores/1632410541379-920815931.jpg"
                        titulo="CAfé Amour"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MejoresEsper
                        img="https://api.tubeneficiosi.com/uploads/stores/1632432246107-792021472.jpg"
                        img1="https://api.tubeneficiosi.com/uploads/stores/1632432246105-503527861.jpg"
                        titulo="ZAPATOS 999, C.A."
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}