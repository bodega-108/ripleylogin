// @flow 
import  React,{Fragment, useState} from 'react';
import { validateRut } from '@fdograph/rut-utilities';
import Error from './Error.js';
import Spinner from './Spinner.js';

export const Formulario = ({consulta, cuentaCLiente, showCuenta}) => {

    //State de ingreso
    const [cuenta, handlerCuenta] = useState({
        rut:'',
        password:''
    });

    //State de errores de
    const [error, handleError]=useState(false);
    
    //state para mensajes de error"'
    const [mensaje_error, handleMensajeError] = useState("");
    const [aprobacion, handleAprobacion] = useState(false);
    const [loading, handleLoading] = useState(false);
  
    //tiping
    const handleChange = e => {
        
        console.log(aprobacion)

        handlerCuenta({
            ...cuenta,
            [e.target.name]: e.target.value
        });
       

        //Validar Rut
         //Extraer Valores
        const { rut, password } = cuenta;
      

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
      
        if(password.length >= 0 && aprobacion){
            handleError(false);
            
        }
        
    
    }

    //Extraer Valores
    const { rut, password } = cuenta;

    const submitCuenta = e =>{
        
        e.preventDefault();
        console.log(aprobacion);
        
        if(rut.trim() === '' || password.trim() === ''){
            
            console.log('Pista, Debe ingresar cualquier password');
            
            handleError(true);
            handleMensajeError('Dede ingresar clave de 4 digitos');


            return;

        }
        let cliente = {
            nombre:'',
            apellido:'',
            saldo:'',
            fechaNacimiento:'',
            rut:`${rut}`
        }
        cuentaCLiente(cliente);
       

        handleLoading(true);
        consulta();
    
    
       
        setTimeout(()=>{
            handleLoading(false);
            showCuenta(true);
          

        }, 3000);
        
    }
    

    return (
        <Fragment>
            
            <div className="formulario-cuenta container d-flex  justify-content-center">
            
            { loading ? 
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
           
                
            <div className="mb-3">
            <label className="text-right" >Clave</label>
                <input
                type="password"
                name="password"
                placeholder="ingrese clave"
                className="form-control"
                onChange={handleChange}
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