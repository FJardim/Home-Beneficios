import React, { Component } from 'react';
import { BiMap } from "react-icons/bi";

class NavInfo extends Component {
    render() {
        return (
            <div className="bg-main py-2 bg-red-500 text-white px-32 py-3 relative" >

                <div className="flex absolute items-center mr-10 text-xs -mt-2 space-x-2" style={{ cursor: "pointer" }}>
                    <BiMap
                        className="w-7 h-7" />
                    <div className="ml-0 ">
                        <p>Enviar a</p>
                        <b>Buenos Aires, C.A.B.A</b>
                    </div>

                </div>
                <div className="flex justify-center items-center flex-wrap space-x-7 " >
                    <a href='http://tubeneficiosi.com/benefits' className="hover:text-white">Ofretas del día </a>
                    <a href='/#' className="hover:text-white">Servicio al Cliente</a>
                    <a href='http://tubeneficiosi.com/stores' className="hover:text-white">Comercios</a>
                </div>

            </div>
        );
    }
}

export default NavInfo;