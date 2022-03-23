import React from 'react';

const BigPiture = ({ name, img }) => {
    return (
        <div className="img-aumt w-1/2 flex h-96 rounded-md cursor-pointer relative overflow-hidden " style={{ backgroundImage: `url(${img})` }}>
            <div className='absolute bg-black h-full w-full opacity-30'>

            </div>
            <div className="text-white m-auto text-center py-10 text-6xl relative">
                {name}
            </div>
        </div >
    );
}

export default BigPiture;
