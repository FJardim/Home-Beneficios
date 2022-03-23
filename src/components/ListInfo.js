import React from 'react'

const ListInfo = ({ name, texto, img }) => {


    return (
        <div className="container">
            <div className="text-center ">
                <img className="h-20 w-20 inline-block" src={img} alt="" />
                <h4 className="font-bold text-2xl mt-4">
                    {name}
                </h4>
                <p className="mt-4">
                    {texto}
                </p>
            </div>
        </div>
    );
}

export default ListInfo;