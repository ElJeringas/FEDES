import React from 'react'
import './ErrorPage.css'
import { useNavigate } from 'react-router-dom';
import { IoIosRefreshCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
const ErrorPage = () => {

  const navigate = useNavigate();
  const handleReturn = () => {
    window.location.reload();
  }

  const handleHome = () => {
    navigate('/')
  };
  return (
    <div className='error-page'>
        <div className='error-page__content'>
            <h1>404</h1>
            <h4>Ups. Algo salio mal...</h4>
            <p>Lo sentimos, los datos a los que quieres acceder no se encuantran cargados en el sistema.</p>
            <div className='error-page__button'>
            <button className='px-4 flex text-white bg-blue-700 hover:bg-blue-800
              focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm
              px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
              focus:outline-none dark:focus:ring-blue-800'
              onClick={()=>{handleReturn()}}
              >
              <IoIosRefreshCircle style={{color:'#fff', display:'flex', height:'20px', width:"20px", marginRight:'5px'}}/>
            Volver a Intentar</button>
            <button className=' flex focus:outline-none text-white bg-green-700
              hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium
              rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600
              dark:hover:bg-green-700 dark:focus:ring-green-800'
              onClick={handleHome}
            >
              <FaHome style={{color:'#fff', display:'flex', height:'20px', width:"20px", marginRight:'5px'}}/>
            Pagina de Inicio</button>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage