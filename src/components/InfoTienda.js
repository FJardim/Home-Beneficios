import React from 'react';

const InfoTienda = ({ titulo, img, text, logo }) => {
    return (
        <div className=''>
            <div className="flex justify-center space-x-6 mx-4 my-4">
                <div className="relative h-60 w-40 rounded-lg cursor-pointer transition transform hover:-translate-y-1 hover:drop-shadow-2xl duration-300 overflow-hidden" style={{ backgroundImage: `url(${img})`, backgroundSize: "100% 100%" }}>
                    <div className='absolute bg-black h-full w-full opacity-40'>
                    </div>
                    <div className="mt-20 text-white relative" >
                        <p className="m-auto text-center text-2xl ">
                            {titulo}
                        </p>
                    </div>
                </div>
            </div>
            <img className="mt-2 m-auto h-10 w-10 rounded" src={logo} alt="logo" />
            <p className='text-center'>
                {text}
            </p>
        </div >
    );
}

export default InfoTienda;