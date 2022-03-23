import React from 'react';
import NavBar from './components/NavBar';
import NavInfo from './components/NavInfo';
import Carrimg from './components/Carrimg';
import CarrInfo from './components/CarrInfo';
import BarInfo from './components/BarInfo';
import Footer from './components/Footer';
import ListInfo from './components/ListInfo';
import OpportGanar from './components/OpportGanar';
import CarrTiend from './components/CarrTiend';
import BigPiture from './components/BigPicture';
import fondo from "./assets/fondo.png";
import fondoo from "./assets/fondoo.png";
import ContTecng from './components/ContTecng';
import SwaInfo from './components/SwaInfo';
import SwaInfor from './components/SwaInfor';
import CarrDescuent from './components/CarrDescuent';
import CarrBanco from './components/CarrBanco';
import CarrInfoTienda from './components/CarrInfoTienda';
import CarrMejoresEsper from './components/CarrMejoresEsper';
import CarrProdExplorar from './components/CarrProdExplorar';
import ProducNoDisp from './components/ProducNoDisp';

function App() {
  return (
    <div className="App bg-gray-50">
      <NavBar /> {/* BARRA DE NAVEGACION */}
      <NavInfo /> {/* BARRA DE INFORMACION */}
      <Carrimg /> {/* CARRuSEL PRINCIPAL */}
      <CarrInfo /> {/* CATEGORIA */}

      {/* ---------------DESCUBRIR----------------- */}
      <div className="container mt-20 ">
        <BarInfo name="Descubrír" />
      </div>
      <div className="flex container mt-20">
        <SwaInfo />
      </div>
      <img src={fondo} alt="" />
      <div className="bg-white">
        <h1 className="font-bold text-center text-5xl ml-2">
          Contamos con las mejores Tecnologías
        </h1>
        <div className="flex justify-center items-center space-x-4 px-40 py-20">
          <div className="flex h-96">
            <ContTecng
              img="https://api.tubeneficiosi.com/uploads/settings/1632406962938-726688524.jpg"
              text="Unete a nuestro gran equipo de ventas"
            />
            <ContTecng
              img="https://api.tubeneficiosi.com/uploads/settings/1632406962940-446151707.jpg"
              text="Registrate como usuario cliente o vendedor y disfruta de nuestra hermosa plataforma de ventas"
            />
          </div>
        </div>
      </div>
      {/* ---------------IMAGEN DE FONDO----------------- */}
      <img src={fondoo} alt="" />

      {/* ---------------EXPLORA----------------- */}
      <div className="container mt-20 ">
        <BarInfo
          name="Explorá"
        />
      </div>
      <div className="container mt-10">
        <div className="flex space-x-4 mx-10 my-10">
          <div className="bg-black-500 w-1/2 h-96 ">
            <div className="text-black  text-3xl">
              <h3 className='mb-4 text-center font-semibold'>Mejores Productos</h3>
              <div className="flex">
                <CarrProdExplorar />
              </div>
            </div>
          </div>
          <BigPiture
            name="Gastronomia"
            img="https://api.tubeneficiosi.com/uploads/store-categories/gastronomia.jpg"
          />
        </div>
      </div>
      <div className="container mt-10">
        <div className="flex space-x-4 mx-10 my-10">
          <BigPiture
            name="Espectaculos"
            img="https://api.tubeneficiosi.com/uploads/store-categories/espectaculos.jpg"
          />
          <div className="bg-black-500 w-1/2 h-96 ">
            <ProducNoDisp />
          </div>
        </div>
      </div>
      <div className="container mt-10">
        <div className="flex space-x-4 mx-10 my-10">
          <div className="bg-black-500 w-1/2 h-96 ">
            <ProducNoDisp />
          </div>
          <BigPiture
            name="Supermercados"
            img="https://api.tubeneficiosi.com/uploads/store-categories/supermercados.jpg" />
        </div>
      </div>
      <CarrTiend />
      <div className="container mt-10">
        <div className="flex space-x-4 mx-10 my-10">
          <BigPiture
            name="Boliches"
            img="https://api.tubeneficiosi.com/uploads/store-categories/boliches.jpg" />
          <div className="bg-black-500 w-1/2 h-96 ">
            <ProducNoDisp />
          </div>
        </div>
      </div>
      <div className="container mt-10">
        <div className="flex space-x-4 mx-10 my-10">
          <div className="bg-black-500 w-1/2 h-96 ">
            <ProducNoDisp />
          </div>
          <BigPiture
            name="Farmacias"
            img="https://api.tubeneficiosi.com/uploads/store-categories/farmacias.jpg" />
        </div>
      </div>

      {/* ---------------INFORMACION DE LAS TIENDAS----------------- */}
      <div className="container mt-20 ">
        <BarInfo
          name="Información de las tiendas" />
      </div>
      <div className=' container mt-20 '>
        <CarrInfoTienda />
      </div>

      {/* ---------------LAS MEJORES TIENDAS TE ESPERAN----------------- */}
      <div className="container mt-20 ">
        <BarInfo name="Las Mejores tiendas te esperan" />
      </div>
      <div className='flex container mt-20'>
        <CarrMejoresEsper className="" />

      </div>
      {/* ---------------DESCUENTOS----------------- */}
      <div className="container mt-20 ">
        <BarInfo name="Descuentos" />
        <div className='container mt-20 '>
          <CarrDescuent />
        </div>

      </div>

      {/* ---------------BENEFICIOS POR BANCO----------------- */}
      <div className="container mt-20 ">
        <BarInfo name="Beneficios por banco" />
      </div>
      <div className='flex container mt-20'>
        <CarrBanco />
      </div>
      <div className='comntainer mt-20'>
        <p className='text-center font-bold text-gray-500 text-2xl'>Mas Productos</p>
      </div>
      <div className="flex container mt-20">
        <SwaInfor />
      </div>
      <div className="mt-20 bg-white p-20">
        <OpportGanar />
      </div>
      <div className="container mt-20 mb-10">
        <div className="flex flex-col md:flex-row mx-20">
          <ListInfo
            img="https://api.tubeneficiosi.com/uploads/settings/1632407637453-922849795.png"
            name="Publicaciones verificadas"
            texto="Nuestras publicaciones requieren una validación por datos y controlamos lo publicado"
          />
          <ListInfo
            img="https://api.tubeneficiosi.com/uploads/settings/1632407637454-728069708.png"
            name="Compra protegida"
            texto="Podrás señar el auto que quieras y si la compa no se hace efectiva se te devuelve el importe al 100%"
          />
          <ListInfo
            img="https://api.tubeneficiosi.com/uploads/settings/1632407637455-107116020.png"
            name="Soporte"
            texto="Acompañamos el proceso asegurandonos de que todo salga correctamente"
          />
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default App;
