import React, {  useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";


const CrudTableRowTienda = ({ el,data,addToCart }) => {
  const [estadoModal, cambiarEstadoModal] = useState(false);

let {id}=el;



 
  return (
    <>
      <tr>
        <th scope="row">
          <a href="#"> {el.id} </a>
        </th>
        <td>
          <a>{el.NombreEmpresa}</a>
        </td>
        <td>
          <a
            className="Link"
            href="javascript:void(0);"
            onClick={() =>{ cambiarEstadoModal(!estadoModal) 
               }}
            
          >
            {el.NombreMedicina}
          </a>
        </td>

        <td>{el.NombreCompuesto}</td>

        <td>S/.{el.PrecioUnitario}</td>
        <td>S/.{el.PrecioCaja}</td>
       

        {/** BOTON E AGREGAR AL CARRTIO*/}
        <th scope="col">
          <button type="button" className="btn btn-success" onClick={()=>addToCart(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
            </svg>
            AgregarCarrito
          </button>
        </th>

        {/** BOTON DE QUITAR AL QUITAR*/}
        <th>
          <button type="button" className="btn btn-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
            Quitar de Carrito
          </button>
        </th>
      </tr>

{ /*VENTANA MODAL QUE SE MUESTRA CON EL ONCLICK*/}

 
{estadoModal && (
            <Modal  id="Modal" isOpen={true}>
              <ModalHeader>Imagen Referencia</ModalHeader>
              <ModalBody>
                <img
                  src="https://image.shutterstock.com/image-photo/pile-blue-pills-closeup-260nw-284257439.jpg"
                  alt="imgModal"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  onClick={() => cambiarEstadoModal(!estadoModal)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </Button>
              </ModalFooter>
            </Modal>
          )}

    </>
  );
};

export default CrudTableRowTienda;
