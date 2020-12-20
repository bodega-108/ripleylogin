import React from "react";

const Tabla = ({ cuentaCLientedata }) => {

    // Extarer datos
    const {nombre, apellido, saldo, fechaNacimiento} = cuentaCLientedata;


  return (
    <div className="container d-flex justify-content-center">
      <div className="card col-md-8">
        <div className="card-header">Dato Personales</div>
        <div className="card-body">
          <h5 className="card-title">Nombre: {nombre}</h5>
          <h5 className="card-title">Apellido: {apellido}</h5>
          <h5 className="card-title">Fecha de Nacimiento: {fechaNacimiento}</h5>
          <h5 className="card-title">Saldo en cuenta: {saldo}$</h5>
        </div>
      </div>
    </div>
  );
};

export default Tabla;
