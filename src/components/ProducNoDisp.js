import React from 'react';

const ProducNoDisp = () => {
    return (
        <div className="container text-black ">
            <h3 className='text-3xl mb-4 text-center font-semibold'>Mejores Productos</h3>
            <p className='mt-40 text-main flex text-red-500 mb-8'>
                No hay productos destacados en la categoria de Espectaculos actualmente.
            </p>
            <div className='flex items-center w-full justify-center space-x-1 mb-2'>
                <button className="text-lg px-4 py-2 font-semibold bg-red-500 transition text-white duration-500 hover:text-main hover:bg-white">
                    Ver Vitrina de Productos
                </button>
            </div>
        </div>
    );
}

export default ProducNoDisp;