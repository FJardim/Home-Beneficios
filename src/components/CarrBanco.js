import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BenfBanco from '../components/BenfBanco';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function CarrBanco() {
    return (
        <>
            <Swiper
                slidesPerView={2} spaceBetween={50} pagination={{ clickable: true, }}
                navigation={true} modules={[Pagination, Navigation]}
                className="mySwiper" style={{ padding: "0 90px" }}
            >
                <SwiperSlide >
                    <BenfBanco img1="https://api.tubeneficiosi.com/uploads/stores/1632407932242-418869440.png" name="10%" text="Descuento" titulo1="MacDonalds" titulo2="Mercantil" img2="	https://api.tubeneficiosi.com/uploads/card-issuers/1632412372199-821443562.png" />
                </SwiperSlide>
                <SwiperSlide >
                    <BenfBanco img1="https://api.tubeneficiosi.com/uploads/stores/1632407932242-418869440.png" img2="https://api.tubeneficiosi.com/uploads/card-issuers/1632412372199-821443562.png" name="10%" text="Descuento" titulo1="MacDonalds" titulo2="Mercantil" />
                </SwiperSlide>
                <SwiperSlide >
                    <BenfBanco img1="https://api.tubeneficiosi.com/uploads/stores/1632407932242-418869440.png" img2="https://api.tubeneficiosi.com/uploads/card-issuers/1632412372199-821443562.png" name="10%" text="Descuento" titulo1="MacDonalds" titulo2="Mercantil" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}