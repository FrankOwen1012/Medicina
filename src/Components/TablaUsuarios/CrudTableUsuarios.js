import React from "react";
import CrudTableRowUsuarios from "./CrudTableRowUsuarios";

const CrudTableUsuarios = ({ data, deleteData }) => {
  return (
    <div>
      CrudTableUsuarios
      {/** AQUI VA LA TABL ADINAMICA QUE IMPRIMIE MI JSON DE USAURIOS  */}
      {console.log("DATA DE LAS TABLAS",data)}
      <table className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Correo</th>
              <th scope="col">Password</th>
              <th scope="col">RUC</th>

              <th scope="col">Eliminar Usuario</th>
            </tr>
          </thead>
          <tbody>
            {
           data.map((el)=>(
            <CrudTableRowUsuarios key={el.id} 
            el={el}/>
           ))
            }
          </tbody>
        </table>
      </table>
    </div>
  );
};

export default CrudTableUsuarios;
