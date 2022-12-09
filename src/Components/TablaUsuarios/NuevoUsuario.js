import React, { useEffect, useState } from "react";
//import Logo from "./src/Components/TablaClientes/logo_qs.png";

const initialForm = {
  id: null,
  Nombres: "",
  Apellidos: "",
  Correo: "",
  Password: "",
  RUC: 0,
};

const NuevoUsuario = ({ createData,dataToEdit,setDataToEdit, }) => {
  const [form, setForm] = useState(initialForm); //creamos un useState

  //conectar el boton de editar si no esta en null le pasamos los parametros
  useEffect(() => {
    if (dataToEdit != null) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  //------------------------------- PARA PASAR LOS VALORES DEL INITIAL FORM AL HOOK DE ESTADO ---------------------
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, //le estamos pasando los datos de initialForm y que se guarde en los hooks
    });
  };

  //--------------------PARA ALMACENAR DATOS --------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === null || form.constellation === null) {
      alert("Datos incompletos");
      return;
    }

    if (form.id == null) {
      //va a COMENZAR CON ESTO YA QUE INICIALIZAMOS EL ESTADO EN NULL
      createData(form);
    } 

    handleReset();
  };
  //------------------PARA RESETEAR ----------------------------------
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };


  return (
    <section className="main">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
       {/** AQUI VA LA IMAGEN DEL LOGO DEL FORMULARIO */}
        <img src="" alt="Logo" />
        <div className="container-fluid">
          <button
            className="navbar-toggler text-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  btn-primary"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="https://www.w3schools.com/html/html_form_input_types.asp"
                >
                  Iniciar Sesion
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="https://www.w3schools.com/html/html_form_input_types.asp"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="https://www.w3schools.com/html/html_form_input_types.asp"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <form className="row lg-3 " id="form">
        <div className="col-auto">
          <label htmlFor="inputAddress" className="form-label">
            Nombres
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Ingrese Nombre"
            value={form.Nombres}
            onChange={handleChange}
            name="Nombres"
            required
          />
        </div>

        <div className="col-auto">
          <label htmlFor="inputAddress0" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Ingrese su Apellido"
            value={form.Apellidos}
            onChange={handleChange}
            name="Apellidos"
            required
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputAddress1" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="inputAddress2"
            placeholder="Ingrese su Correo"
            value={form.Correo}
            onChange={handleChange}
            name="Correo"
            required
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputAddress2" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputAddress2"
            placeholder="Ingresu Su password(minimo 6-Caracteres)"
            value={form.Password}
            onChange={handleChange}
            name="Password"
            required
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputCity" className="form-label" id="ruc">
            R.U.C
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputCity"
            value={form.RUC}
            onChange={handleChange}
            name="RUC"
            required
          />
        </div>

        <div className="col-auto">
          <label htmlFor="inputCity" className="form-label" id="ruc">
           Telefono
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputCity"
          
            name="TELEFONO"
            required
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputCity" className="form-label" id="ruc">
          Direccion
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
          
            name="DIRECCION"
            required
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputCity" className="form-label" id="ruc">
          Ref.Ubicacion
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
          
            name="ref.ubicacion"
            required
          />
        </div>

        <div className="col-auto">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Acepto Teminos y Condiciones
            </label>
          </div>
        </div>
        <br></br>
        <div className="col-auto">
          <button
            type="submit"
            className="btn  btn-lg btn-primary "
            id="boton"
            onClick={handleSubmit}
          >
            ____Registrarse___
          </button>
        </div>
      </form>
    </section>
  );
};

export default NuevoUsuario;
