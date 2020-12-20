import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';

function App() {

  const [cuentaCLiente, obtenerCuenta] = useState({
  
  });
 
  const [ showCuenta, handleShowCUenta] = useState(false);



  const consultarApi = async () => {
    
    const options = {
      method: 'POST'
    }
    
    console.log('consultando...');
    const {rut} = cuentaCLiente
    const api = await fetch(`http://localhost:8080/saldo?rut=${rut}`,options);
    const data = await api.json();
    console.log(data);

    obtenerCuenta(data);
    
    
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
                cuentaCLiente = {obtenerCuenta}
                showCuenta = {handleShowCUenta}
                
              />
            </div>
}
        </div>
    </div>
  );
}

export default App;
