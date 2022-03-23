import React from 'react';
import beneficio from "../assets/beneficios.png";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
    return (
        <footer className="flex pt-12 pr-12 pb-12 pl-2 bg-gray-800 text-white mt-auto">
            <div className="container h-full">
                <div className="flex items-center ml-40">
                    <img className="w-12" src={beneficio} alt="beneficios" />
                    <b className='ml-4'>Beneficios Si</b>
                </div>

                <div className="flex justify-around items-top mt-20 ml-20">
                    <div>
                        <b className='ml-6'>Contacto 2</b>
                        <div className='flex space-x-3 '>
                            <SiFacebook className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><SiInstagram className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><SiTwitter className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><IoLogoYoutube className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                    <div>
                        <b className='ml-3'>Secondsection</b>
                        <div className='flex space-x-3 '>
                            <SiFacebook className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><SiInstagram className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><SiTwitter className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><IoLogoYoutube className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                    <div>
                        <b className='ml-6'>Contacto</b>
                        <div className='flex space-x-3'>
                            <SiFacebook className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><SiInstagram className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><SiTwitter className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><IoLogoYoutube className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                    <div>
                        <b className='ml-3'>Secondsection</b>
                        <div className='flex space-x-3 '>
                            <SiFacebook className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><SiInstagram className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><SiTwitter className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} /><IoLogoYoutube className='h-6 w-6 hover:text-red-500' style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                </div >
                <div className="text-center mt-5 ">
                    <p>&copy; 2022 <span className='text-main text-red-500'>BeneficioSi.</span> Todos los derechos reservados. Diseñado por F. Jardim</p>
                </div>
            </div >
        </footer >

    );
}

export default Footer;