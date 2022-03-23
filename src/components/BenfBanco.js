import React from 'react';

const BenfBanco = ({ img1, img2, name, text, titulo1, titulo2 }) => {
    return (

        <div className="flex align-center h-full bg-white p-3 rounded-lg">
            <div className='w-3/12 space-y-2 text-center p-1 mt-4'>
                <img className="m-auto w-1/2 text-center h-12 w-12 itens-center inline-block " src="{img1}" alt="MacDonalds" />
                <p className='text-gray-700 font-semibold text-center break-words'>{titulo1}</p>
            </div>
            <div className='w-6/12 space-y-2 text-center p-1 border-r border-l border-gray'>
                <p className='text-4xl text-bold'>{name}</p>
                <p className='text-xs'>{text}</p>
                <button class="mt-4 bg-red-100 md:px-5 text-lg transition text-red-500 duration-500 hover:text-white hover:bg-red-500 py-1 rounded-full">
                    <b>Ir a la Tienda</b>
                </button>
            </div>
            <div className='w-3/12 space-y-2 text-center p-1 inline-block mt-2'>
                <img className="m-auto w-1/2 text-center h-16 w-16 " src={img2} alt="MacDonalds" />
                <p className='text-gray-700 font-semibold text-center break-words'>{titulo2}</p>
            </div>

        </div>
    );
}

export default BenfBanco;