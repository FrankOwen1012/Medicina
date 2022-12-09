import React from "react";

import CrudTableRow from "./CrudTableRow";

const Crud_Table_Productos = ({ data, setDataToEdit, deleteData }) => {



  return (
    <div>
      <hr></hr>
      {/**   <h2>Crud_Table_Productos</h2> */}

      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      {/** AQUI VA LA TALA DINAMICA QUE IMPRIMIREMOS CON JSON */}
      <div className="table-responsive " >
        <table className="table table-striped table-bordered table-hover table-dark  ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre Empresa</th>
              <th scope="col">Nombre Medicamento</th>
              <th scope="col">Compuestos</th>
              <th scope="col">Precio</th>
              <th scope="col">Comprar</th>
              <th scope="col">Quitar</th>
            </tr>
          </thead>
          {/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          <tbody>
            {/** ESTA ES LA COLUMNA PARA LOS MEDICAMENTOS AQUI ES DONDE SE RECORRE LA TABLA PARA MOSTRAR LOS DATOS DEJSON*/}
            {data.length > 0 ? (
              data.map((el) => (
                <CrudTableRow
                  key={el.id}
                  el={el}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
                />
              ))
            ) : (
              <tr>
                <td colSpan="15">SIN DATOS O NO ESTA RECIBIENDO PETICIONES O EL SERVIDOR SE CAYO  404 </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


      
    </div>
  );
};

export default Crud_Table_Productos;
