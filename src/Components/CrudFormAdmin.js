import React, { useEffect, useState } from "react";

const initialForm = {
  id: null,
  NombreEmpresa:"",
  NombreMedicina: "",
  NombreCompuesto: "",
  Precio: 0,
};

const CrudFormAdmin = ({ createData, updateData,dataToEdit,setDataToEdit,}) => {
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
    } else {
      updateData(form);
    }

    handleReset();
  };
  //------------------PARA RESETEAR ----------------------------------
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>

  <hr></hr>
      <h3>Agregar Medicamento</h3>

     <hr></hr>
      <form className="row g-3">

        {/** AQUI QEUEREMOS QUE CREE UN ACORDEON DE FORMA DINAMICA  */}
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            Nombre de La Empresa
          </label>
          <input
            type="text"
            className="form-control"
            name="NombreEmpresa"
            id="validationDefault01"
            placeholder="Ingrese Nombre de La Empresa"
            value={form.NombreEmpresa}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            Nombre de Medicamento
          </label>
          <input
            type="text"
            className="form-control"
            name="NombreMedicina"
            id="validationDefault01"
            placeholder="Ingrese Medicamento"
            value={form.NombreMedicina}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault02" className="form-label">
            Nombre de Compuesto
          </label>
          <input
            type="text"
            className="form-control"
            name="NombreCompuesto"
            id="validationDefault02"
            placeholder="Ingrese Compuesto"
            value={form.NombreCompuesto}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            name="Precio"
            id="validationDefault03"
            placeholder="Ingrese Precio"
            value={form.Precio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <input
            className="btn btn-danger"
            type="reset"
            value="Limpiar"
            onClick={handleReset}
          />
          <input
            className="btn btn-success"
            type="submit"
            value="Registrar"
            onClick={handleSubmit}
          />
        </div>
      </form>
  
    </div>
  );
};

export default CrudFormAdmin;
/**
 * 
 * 

<form className="row g-3">
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" placeholder="Ingrese Medicamento" value={form.NombreMedicina} required>
  </div>
  <div className="col-md-4">
    <label for="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" placeholder="Ingrese Compuesto" value={form.NombreCompuesto} required>
  </div>
 
  <div className="col-md-6">
    <label for="validationDefault03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault03" placeholder="Ingrese Precio" value={form.Precio} required>
  </div>

  <div className="col-12">
    <input className="btn btn-danger" type="reset" value="Editar" onClick={handleReset} />
        <input className="btn btn-success" type="submit" value="Registrar" onClick={handleSubmit} />
  </div>
</form>

 */
