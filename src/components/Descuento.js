import React from 'react';

const Descuento = ({ img, name, text, titulo }) => {
    return (
        <div className="flex align-center bg-white p-3 rounded-lg ml-10">
            <div className='justify-around items-center columns-2'>
                <div className='w-3/10 text-center p-4 border-r border-gray'>
                    <img className="m-auto w-1/2 text-center h-12 w-12 " src={img} alt="MacDonalds" />
                    <p className='text-gray-700 font-semibold text-center break-words'>{titulo}</p>
                </div>
                <div className='w-2/3 text-right'>
                    <div className='w-40'>
                        <p className='text-4xl text-bold text-red-500'>{name}</p>
                        <p className='text-xs text-red-500'>{text}</p>
                        <button class="mt-4 bg-red-100 md:px-5 text-lg transition text-red-500 duration-500 hover:text-white hover:bg-red-500 py-1 rounded-full">
                            <b>Ir a la Tienda</b>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Descuento;