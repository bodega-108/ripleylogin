// @flow 
import  React,{Fragment, useState} from 'react';
import { validateRut } from '@fdograph/rut-utilities';
import Error from './Error.js';
import Spinner from './Spinner.js';

export const Formulario = ({consulta,guardarData,handleLoading, cargando}) => {

    //State de ingreso
    const [cuenta, handlerCuenta] = useState({
        rut:''
    });

    //State de errores de
    const [error, handleError]=useState(false);
    
    //state para mensajes de error"'
    const [mensaje_error, handleMensajeError] = useState("");
    const [aprobacion, handleAprobacion] = useState(false);
 
  
    //tiping
    const handleChange = e => {
        
        console.log(aprobacion)

        handlerCuenta({
            ...cuenta,
            [e.target.name]: e.target.value
        });
       

        //Validar Rut
         //Extraer Valores
      

        if(rut.length >= 5 && !aprobacion) {

            console.log('entro en validacion rut')

            if(validateRut(e.target.value)){
               
                console.log(cuenta.rut)
                console.log('rut valido');
                handleAprobacion(true);
                handleError(false);
                handleMensajeError(null);
                console.log(aprobacion);

            }else{
                handleMensajeError('rut no valido');
                handleError(true);
            }
            
        }
      

        
    
    }

    //Extraer Valores
const {rut} = cuenta;

    const submitCuenta = e =>{
        
        console.log(rut);
        e.preventDefault();
      
        guardarData({rut:rut});
        
        if(rut.trim() === '' ){
            
          
            
            handleError(true);
            handleMensajeError('Dede ingresar un rut');

            return;

        }


        handleLoading(true);
        consulta(rut);
    
        
    }
    
    return (
        <Fragment>
            
            <div className="formulario-cuenta container d-flex  justify-content-center">
            
            { cargando ? 
            <div className="loading text-center">
            <Spinner/> 
            <p className="mt-2">ingresando</p>
            </div>
            :

            <form className='col-md-8 ' onSubmit={submitCuenta} >
            <h3>Ingresa a tu cuenta</h3>
                <div className="mb-3 " >
                <label>Rut</label>
                <input 
                    type="text" 
                    name="rut"
                    placeholder="Ingresa tu Rut"
                    onChange={handleChange} 
                    className="form-control"
                />
                </div>
           
                

            { error ? <Error mensaje ={mensaje_error}/>: null}
                
                <button
                className="btn color-ripley"
                type="submit"
                disabled={error}
                
                
                >Ingresar</button>


                

            </form>
            }
                
            </div>

            <p>{}</p>
           
        </Fragment>

    );
};
export default Formulario;