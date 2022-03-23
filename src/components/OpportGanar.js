import React from 'react';
import laptop from "../assets/laptop.jpg";

const OpportGanar = () => {
    return (

        <div className="flex items-center mx-8 my-8">
            <div className="text-center m-4">
                <img className="inline-block w-28 h-25" src={"https://api.tubeneficiosi.com/uploads/settings/1632407594459-428296724.png"} alt="beneficios" />
                <h1 className="font-bold text-5xl ml-2 ">
                    Esta es tu oportunidad de ganar
                </h1>
                <p className="text-center mt-10 ml-1">Ingresa desde la app y recibe notificaciones acerca de los descuentos alrededor de tu ubicación actual</p>
            </div>
            <div className="text-center">
                <img className="w-full h-80" src={laptop} alt="beneficios" />

            </div>
        </div>

    );
}

export default OpportGanar;