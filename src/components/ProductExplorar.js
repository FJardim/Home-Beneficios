import React from 'react';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const ProdcutExplorar = ({ logo, titulo, text, precio }) => {
    return (
        <div className="ml-7 w-full rounded-md overflow-hidden bg-white transition transform hover:-translate-y-1 hover:drop-shadow-2xl duration-300 ">
            <div className='container'>
                <img className='mx-4 mt-3 w-1/2 text-center inline-block h-40 w-9/12' src={logo} alt="" />
                <p className='text-lg text-center font-bold hover:text-red-500 cursor-pointer'>{titulo}</p>
                <div className='flex items-center justify-center'>
                    <BsStarFill className='h-4 w-4 text-amber-300 ' />
                    <BsStarFill className='h-4 w-4 text-amber-300 ' />
                    <BsStar className='h-4 w-4 text-amber-300 ' />
                    <BsStar className='h-4 w-4 text-amber-300 ' />
                    <BsStar className='h-4 w-4 text-amber-300 ' />

                </div>
                <p className='mt-2 opacity-75 text-xs text-center text-gray-800 truncate"'>{text}</p>
                <p className='mt-2 text-lg font-bold text-center text-black mb-2'>{precio}</p>
                <div className='flex items-center w-full justify-center space-x-1 mb-2'>
                    <button className="text-lg inline-flex items-center justify-center px-4 py-2 space-x-2 leading-4 border rounded-full text-white font-semibold bg-red-500 hover:bg-red-600 w-2/3 rounded-lg">
                        Comprar
                    </button>
                </div>

            </div>

        </div>
    );
}

export default ProdcutExplorar;