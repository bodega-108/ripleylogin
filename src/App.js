import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';

function App() {

  const [cuentaCLiente, obtenerCuenta] = useState({
  
  });
 
  const [ showCuenta, handleShowCUenta] = useState(false);
  const [datos,guardarData] = useState({
    rut:''
  });
  const [loading, handleLoading] = useState(false);
  

  const consultarApi = async (rut) => {
    console.log("Este es el rutificador" + datos.rut);
    
    

    const options = {
      method: 'POST'
    }
    
    const api = await fetch(`https://heroku-ripley.herokuapp.com/cliente?rut=${rut}`,options);
    //const api = await fetch(`http://localhost:8080/cliente?rut=${rut}`,options);
    const data = await api.json();
    console.log(data);
    obtenerCuenta(data);
    setTimeout(()=>{
      handleLoading(false);
      handleShowCUenta(true);
    },2000)
    
    
    
  }

  return (
    <div className='padre'>
        
        <div className='banner'>
            
        </div>
        <div className='formulario'>
            <div className='marca'></div>

         
          {  showCuenta ? 
            <Tabla 
                              cuentaCLientedata = { cuentaCLiente }
            />   : <div className='box-form'>
              <Formulario 
                consulta = { consultarApi }
                handleLoading = { handleLoading}
                guardarData = {guardarData}
                cargando = {loading}
               
              />
            </div>
}
        </div>
    </div>
  );
}

export default App;
