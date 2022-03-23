import React from 'react';

const BarInfo = (props) => {
    return (
        <div className="mx-8 flex justify-center items-center space-x-2 bg-red-500 px-10 py-3 rounded-md">
            <p className="text-white text-2xl">
                {props.name}
            </p>
        </div>
    );
}

export default BarInfo;
