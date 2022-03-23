import React from 'react';

const MejoresEsper = ({ img, img1, titulo }) => {
    return (

        <div className="ml-7 h-80 rounded-md overflow-hidden shadow bg-white">
            <div className='p-0'>
                <div className=''>
                    <img className="rounded shadow-md h-20 w-full" src={img} alt="MacDonalds" />

                </div>
                <div className='ml-4 absolute bg-white left-1/2 top-[40px] h-20 w-20 transform -translate-x-1/2 rounded shadow-md'>
                    <img className="rounded-lg top-[40px] h-20 w-full " src={img1} alt="imagen" />

                </div>
                <div className='p-4 pt-16 space-y-7'>
                    <div className='text-2xl mt-9 text-center hover:text-red-500 cursor-pointer'>
                        {titulo}
                    </div>
                    <div className='flex justify-evenly space-x-6'>
                        <a href="http://tubeneficiosi.com/products/hamburguesa-1635962924283">
                            <img src="https://api.tubeneficiosi.com/uploads/products/1637329334735-357387044.png" alt="Primer Producto" class="w-14 h-14 border border-gray-200 rounded"></img>
                        </a>
                        <a href="http://tubeneficiosi.com/products/cajita-feliz-1636596879506">
                            <img src="https://api.tubeneficiosi.com/uploads/products/1637329673942-60257605.png" alt="Segundo Producto" class="w-14 h-14 border border-gray-200 rounded"></img>
                        </a>
                        <a href="http://tubeneficiosi.com/products/mcflurry-mandm-1637328806374">
                            <img src="https://api.tubeneficiosi.com/uploads/products/1637328806355-564065005.jpg" alt="Tercer Producto" class="w-14 h-14 border border-gray-200 rounded"></img>
                        </a>
                    </div>
                    <div className='text-center text-main hover:text-red-500'>
                        Ver Tienda
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MejoresEsper;