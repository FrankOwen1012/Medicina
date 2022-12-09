import React from 'react'
import TableRowUsuariosVistoAdmin from './TableRowUsuariosVistoAdmin'

const TableUsuariosVistoAdmin = ({ data, deleteData }) => {
  return (
    <div>
<hr></hr>
Mostrando Los Clientes Registrados
<hr></hr>
      {/** AQUI VA LA TABL ADINAMICA QUE IMPRIMIE MI JSON DE USAURIOS  */}
      {console.log("DATA DE LAS TABLAS", data)}
      <table className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Correo</th>
              <th scope="col">Contraseña</th>
              <th scope="col">RUC</th>

              <th scope="col">Eliminar Cliente</th>
            </tr>
          </thead>
          <tbody>

            {
              data.map((el) => (
                <TableRowUsuariosVistoAdmin key={el.id}
                  el={el} />
              ))
            }
          </tbody>
        </table>
      </table>
    </div>
  )
}

export default TableUsuariosVistoAdmin