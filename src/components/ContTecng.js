import React from 'react';

const ContTecng = ({ img, text }) => {
    return (

        <div className="container text-center">
            <img className="h-60 w-60 inline-block  rounded-full" src={img} alt="" />
            <h4 className="font-bold text-2xl mt-4">
                Unete
            </h4>
            <p className="mt-4">
                {text}
            </p>
            <button class="bg-red-500 text-white text-xl font-bold py-2 px-4 rounded mt-5">
                Ver más
            </button>

        </div >





    );
}

export default ContTecng;
