import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Log from "../img/logo_qs.png";
import CrudTableRowTienda from "../Components/TablaClientes/CrudTableRowTienda";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import ImagenReferencia from "../Components/ImagenReferencia";
import { TYPES } from "../actions/shoppingAction";
import { shoppingInitialState, shoppingReducer } from "../Reducers/shoppingReducer";
import CartItem from "../Reducers/CartItem";



const Index_Tienda = () => {
  const [Productos, setProductos] = useState([]);
  const [TablaProductos, setTablaProductos] = useState([]);
  const [Busqueda, setBusqueda] = useState("");

  const [estadoModal, cambiarEstadoModal] = useState(false);

  /**estados para el carrito de compra */
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { product, cart } = state;




  let url = "http://localhost:5000/Medicinas";

  const PeticionGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setProductos(response.data);
        setTablaProductos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    PeticionGet();
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    console.log("Busqueda----> " + e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (termino) => {
    let resultadoBusqueda = TablaProductos.filter((elemento) => {
      if (
        elemento.NombreMedicina.toString()
          .toLowerCase()
          .includes(termino.toLowerCase()) ||
        elemento.NombreCompuesto.toString()
          .toLowerCase()
          .includes(termino.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProductos(resultadoBusqueda);
  };

  /** AQUI COMENZAMOS CON LA CODIFICACION DEL CARRITO DE COMPRAS ESTAS SON LAS ACCIONES QUE TOMARA  */
  /** SHOPPING REDUCER */

  const addToCart = (id) => {
    console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  };
  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    }
    else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  }
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  }
  /** shopping cart   */
  const ShoopingCart = () => {
    /**se movio afuera metodos y estado  */


  }
  return (
    <>
      {estadoModal && (
        <Modal id="Modal" isOpen={true} clearCart={clearCart} > {/* pasamos el parametro */}
          <ModalHeader>Carrito de Compra</ModalHeader>
          <ModalBody>
            <article className="box">
              <h5><b>Producto Que Escogio</b></h5>

              {cart.map((item, index) => (
                <CartItem key={index} data={item} delFromCart={delFromCart} />
              ))}
            </article>
            <button className="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>EnviarMiPedido</button>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" onClick={clearCart}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>Limpiar Carrito</button>
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

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand me-auto"
            href="https://es.stackoverflow.com/questions/424159/alinear-un-elemento-navbar-a-la-derecha-boostrap-5"
          >
            <img src={Log} alt="Logo"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


              {/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
              {/** AQUI VA EL CARRITO DE COMPRAS */}
              <li className="nav-item">
                <ul>
                  <button
                    className="btn btn-primary"
                    href="javascript:void(0);"
                    onClick={() => {
                      cambiarEstadoModal(!estadoModal)
                    }}

                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-minecart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-1-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"
                      />
                    </svg>

                  </button>
                </ul>
              </li>
              {/** lOGO DE SUPERuSUARIOS PARA NUESTRO Sistema  */}
              <li className="nav-item d-flex">
                <Link className="nav-link ms-auto" to="/tienda/EncapsulaTienda">
                  {"  "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*"aqui la Segunda Barra de Navegacion "*/}

      <nav className="navbar navbar-dark  navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="https://www.miquimica.com/#/auth/login"
          >
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="https://www.miquimica.com/#/auth/loginnavbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://www.miquimica.com/#/auth/login"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.miquimica.com/#/auth/login"
                >
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="https://www.miquimica.com/#/auth/login"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.miquimica.com/#/auth/login"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.miquimica.com/#/auth/login"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.miquimica.com/#/auth/login"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-5 col-md-2"
                type="search"
                placeholder="Buscar Por Compuesto y Medicamento"
                aria-label="Search"
                onChange={handleChange}
                value={Busqueda}
              />

            </form>
          </div>
        </div>
      </nav>
      {/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      {/*"AQUI EL ACRODION PARA LA BASE DE DATOS "*/}

      <div className="accordion col-auto Contenedor-Tienda-Tablas" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="https://www.miquimica.com/#/auth/loginpanelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Abbott Laboratories del Perú S.A.
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              Empresa del sector salud, que se encarga de la atención, la
              satisfacción y las necesidades crecientes de la atención médica,
              desarrollando productos y servicios hace más de 125 años en el
              negocio del cuidado de la salud.
            </div>
          </div>
          {/* aqui se Copia toda la tabla   <CrudAppProductos /> --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/** <h3>Mostrando Productos en Tienda</h3> */}
          {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
          {/** AQUI VA LA TALA DINAMICA QUE IMPRIMIREMOS CON JSON */}
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover table-dark ">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope='col'>Linea</th>
                  <th scope="col"> Medicamento</th>
                  <th scope="col">Compuestos</th>
                  <th scope="col">Precio X Mayor</th>
                  <th scope="col">Precio X Menor</th>


                  <th scope="col">Comprar</th>
                  <th scope="col">Quitar</th>
                </tr>
              </thead>
              {/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
              <tbody>
                {/** ESTA ES LA COLUMNA PARA LOS MEDICAMENTOS AQUI ES DONDE SE RECORRE LA TABLA PARA MOSTRAR LOS DATOS DEJSON*/}
                {Productos.length === 0 ? <tr>
                  <td colSpan="3"> No se Encontro Lo que Buscaba</td></tr>
                  :
                  Productos.map(el => <CrudTableRowTienda key={el.id} el={el} addToCart={addToCart} />)}
              </tbody>

            </table>
          </div>
        </div>

        {/** AQUI VA  */}

        <div className="container-fluid ImprimeImagenesReferencia align-items-center ">
          {/** IMAGEN DE REFERECNIA AQUI LA IMAGEN SE CAMBIA DEACUERDO A ESTOS */}
          <ImagenReferencia />
        </div>
      </div>
    </>
  );
};

export default Index_Tienda;
