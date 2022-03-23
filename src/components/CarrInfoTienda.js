import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import InfoTienda from "../components/InfoTienda";

export default function CarrBanco() {
    return (
        <>
            <Swiper
                slidesPerView={6} spaceBetween={0}
                navigation={true} modules={[Pagination, Navigation]}
                className="mySwiper" style={{}}
            >
                <SwiperSlide >
                    <InfoTienda img="https://api.tubeneficiosi.com/uploads/news/1636498595889-908987283.jpg" text="Cinemark Hoyts" titulo="Nueva Noticia2" logo="https://api.tubeneficiosi.com/uploads/stores/1637330554552-219978506.png" />
                </SwiperSlide>
                <SwiperSlide >
                    <InfoTienda img="https://api.tubeneficiosi.com/uploads/news/1636543060079-892455351.jpg" text="Cinemark Hoyts" titulo="Cosas Especiales" logo="https://api.tubeneficiosi.com/uploads/stores/1637330554552-219978506.png" />
                </SwiperSlide>
                <SwiperSlide >
                    <InfoTienda img="https://api.tubeneficiosi.com/uploads/news/1636543196765-8975707.jpg" text="Cinemark Hoyts" titulo="Contacto Whatsapp" logo="https://api.tubeneficiosi.com/uploads/stores/1637330554552-219978506.png" />
                </SwiperSlide>
                <SwiperSlide >
                    <InfoTienda img="https://api.tubeneficiosi.com/uploads/news/1636543286493-707709686.jpg" text="Cinemark Hoyts" titulo="Nuevo Instagram" logo="https://api.tubeneficiosi.com/uploads/stores/1637330554552-219978506.png" />
                </SwiperSlide>
                <SwiperSlide >
                    <InfoTienda img="https://api.tubeneficiosi.com/uploads/news/1636543425502-491127206.jpg" text="Cinemark Hoyts" titulo="Nuevo twitch" logo="https://api.tubeneficiosi.com/uploads/stores/1637330554552-219978506.png" />
                </SwiperSlide>
                <SwiperSlide >
                    <InfoTienda img="https://api.tubeneficiosi.com/uploads/news/1640017011688-575115792.jpg" text="MacDonalds" titulo="Nuevo Producto" logo="https://api.tubeneficiosi.com/uploads/stores/1632407932242-418869440.png" />
                </SwiperSlide>
                <SwiperSlide >
                    <InfoTienda img="https://api.tubeneficiosi.com/uploads/news/1642459981126-237313292.jpg" text="MacDonalds" titulo="Nuevo" logo="https://api.tubeneficiosi.com/uploads/stores/1632407932242-418869440.png" />
                </SwiperSlide>
                <SwiperSlide >
                    <InfoTienda img="https://api.tubeneficiosi.com/uploads/news/1643330277249-659944871.jpg" text="MacDonalds" titulo="Menoria" logo="https://api.tubeneficiosi.com/uploads/stores/1632407932242-418869440.png" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}