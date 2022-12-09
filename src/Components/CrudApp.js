import React, { useState } from "react";

import CrudFormAdmin from "./CrudFormAdmin";
import CrudTableProductos from "./CrudTableProductos";


const initialDb = [
  {
    id: 1,
    NombreMedicina: "Paracetamol",
    NombreCompuesto: "Toban",
    Precio: 12.0,
  },
  {
    id: 2,
    NombreMedicina: "KETEROLACO",
    NombreCompuesto: "PICHICHI",
    Precio: 14.0,
  },
  {
    id: 3,
    NombreMedicina: "MIGRAALICIA",
    NombreCompuesto: "MESSI",
    Precio: 16.59,
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null); //esta variable funciona e inicializa en null y cuando cambie
  //aplicara aplicara el update mientras sea null entoces esto permanecera en create

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  };
  const deleteData = (id) => {
    //para eliminar registro del Api
    let isDelete = window.confirm("Esta seguro de eliminar el registro??");
    if (isDelete === true) {
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    }
    else {
      return;
    }

  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudFormAdmin
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTableProductos
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApp;
