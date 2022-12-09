import React from 'react'
import CrudTableRowTienda from './CrudTableRowTienda';

const CrudTableProductoTienda = ({ data }) => {
    return (
        <div>
            <h3>Mostrando Productos en Tienda</h3>
            {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            {/** AQUI VA LA TALA DINAMICA QUE IMPRIMIREMOS CON JSON */}
            <div className="table-responsive">
                <table className="table  table-striped table-bordered table-hover table-dark ">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope='col'>Nombre Empresa</th>
                            <th scope="col">Nombre Medicamento</th>
                            <th scope="col">Compuestos</th>
                            <th scope="col">Precio</th>

                            <th scope="col">
                                Cantidad : <span className="MuestraCantidad">1 </span>{" "}
                            </th>
                            <th scope="col">Comprar</th>
                            <th scope="col">Quitar</th>
                        </tr>
                    </thead>
                    {/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <tbody>
                        {/** ESTA ES LA COLUMNA PARA LOS MEDICAMENTOS AQUI ES DONDE SE RECORRE LA TABLA PARA MOSTRAR LOS DATOS DEJSON*/}
                        {data.length === 0 ? <tr> <td colSpan="3"> sIN DATOS </td></tr> :
                            data.map(el => <CrudTableRowTienda key={el.id} el={el} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CrudTableProductoTienda;