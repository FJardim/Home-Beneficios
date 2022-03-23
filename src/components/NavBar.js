import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import beneficio from "../assets/beneficios.png";
import { MdSearch } from "react-icons/md";

const NavBar = () => {
    return (

        <div className="flex justify-between bg-gray-800 px-32 py-3 text-white relative items-center space-x-2 " >
            <div>
                <img className="w-12" src={beneficio} alt="beneficios" />
            </div>
            <div className='w-full ml-2'>
                <div className=" ml-2 flex items-center focus:otline-none">
                    <select className=' bg-red-500 rounded-md h-10 w-44 p-06' id="">Todo
                        <option className='' value="">Todo</option>
                        <option value="">Gatronomia</option>
                        <option value="">Espectaculos</option>
                        <option value="">Supermercados</option>
                        <option value="">Boliches</option>
                        <option value="">Farmacias</option>
                    </select>
                    <input name="search" placeholder="  Nombre de tienda, producto..." className="w-full py-1 text-black rounded border-gray-300 focus:border-gray-300" type="text" />
                    <button className=" bg-red-500 px-1 py-1 h-10 w-11 rounded-lg"><MdSearch className='ml-2' /></button>
                </div>
            </div>
            <div className="flex justify-end items-center">
                <div className="ml-5 hover:text-red-500 cursor-pointer">Comprar</div>
                <div className="ml-5 hover:text-red-500 cursor-pointer">Ayuda</div>
                <div className="ml-5 flex items-center border border-slate-300 rounded-md px-2 py-1 space-x-1 cursor-pointer">
                    <FaUserCircle />
                    <span>Ingresar</span>
                </div>
            </div>
        </div >
    );
}

export default NavBar;