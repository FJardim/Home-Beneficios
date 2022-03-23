import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductExplorar from '../components/ProductExplorar';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function CarrProdExplorar() {
    return (
        <>
            <Swiper
                slidesPerView={2} spaceBetween={30} loop={true}
                navigation={true} modules={[Pagination, Navigation]}
                style={{ height: 400 }}
            >
                <SwiperSlide>
                    <ProductExplorar
                        logo="https://api.tubeneficiosi.com/uploads/products/1637329334735-357387044.png"
                        titulo="Big Mac"
                        text="Quizas sean las dos Hamburguesas..."
                        precio="5.00$"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductExplorar
                        logo="https://api.tubeneficiosi.com/uploads/products/1636983521622-5567456.jfif"
                        titulo="Ensalada Cesar"
                        text="Ensalada cesar super fresca"
                        precio="10.00$"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}