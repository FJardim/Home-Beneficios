import React from 'react';

const CarrInfo = () => {
    return (
        <div className="container mt-20">
            <div className="flex justify-center space-x-6 mx-8">
                <div className="relative h-70 w-[900px] rounded-md transition transform hover:-translate-y-1 hover:drop-shadow-2xl duration-300 cursor-pointer" style={{ backgroundImage: "url(https://api.tubeneficiosi.com/uploads/store-categories/gastronomia.jpg)", backgroundPosition: "center center", backgroundSize: "100% 100%", transform: "30% 30%" }}>
                    <div className='rounded-md absolute bg-black h-full w-full opacity-30'>

                    </div>
                    <div className="relative text-white text-center py-10 text-2xl" style={{ textShadow: "0px 0px 3px #000000" }} >Gatronomia</div>
                </div>
                <div className="relative h-70 w-[900px] rounded-md transition transform hover:-translate-y-1 hover:drop-shadow-2xl duration-300 cursor-pointer" style={{ backgroundImage: "url(https://api.tubeneficiosi.com/uploads/store-categories/espectaculos.jpg)", backgroundPosition: "center center", backgroundSize: "100% 100%", transform: "30% 30%" }}>
                    <div className='rounded-md absolute bg-black h-full w-full opacity-30'>

                    </div>
                    <div className="relative text-white text-center py-10 text-2xl" style={{ textShadow: "0px 0px 3px #000000" }} >Espectaculos</div>
                </div>
                <div className="relative h-70 w-[900px] rounded-md transition transform hover:-translate-y-1 hover:drop-shadow-2xl duration-300 cursor-pointer" style={{ backgroundImage: "url(https://api.tubeneficiosi.com/uploads/store-categories/supermercados.jpg)", backgroundPosition: "center center", backgroundSize: "100% 100%", transform: "30% 30%" }}>
                    <div className='rounded-md absolute bg-black h-full w-full opacity-30'>

                    </div>
                    <div className=" relative text-white text-center py-10 text-2xl" style={{ textShadow: "0px 0px 3px #000000" }} >Supermercados</div>
                </div>
                <div className="relative h-70 w-[900px] rounded-md transition transform hover:-translate-y-1 hover:drop-shadow-2xl duration-300 cursor-pointer" style={{ backgroundImage: "url(https://api.tubeneficiosi.com/uploads/store-categories/boliches.jpg)", backgroundPosition: "center center", backgroundSize: "100% 100%", transform: "30% 30%" }}>
                    <div className='rounded-md absolute bg-black h-full w-full opacity-30'>

                    </div>
                    <div className=" relative text-white text-center py-10 text-2xl" style={{ textShadow: "0px 0px 3px #000000" }} >Boliches</div>
                </div>
                <div className="relative h-70 w-[900px] rounded-md transition transform hover:-translate-y-1 hover:drop-shadow-2xl duration-300 cursor-pointer" style={{ backgroundImage: "url(https://api.tubeneficiosi.com/uploads/store-categories/farmacias.jpg)", backgroundPosition: "center center", backgroundSize: "100% 100%", transform: "30% 30%" }}>
                    <div className='rounded-md absolute bg-black h-full w-full opacity-30'>

                    </div>
                    <div className="relative text-white text-center py-10 text-2xl" style={{ textShadow: "0px 0px 3px #000000" }} >Farmacias</div>
                </div>
            </div>
        </div >
    );
}

export default CarrInfo
