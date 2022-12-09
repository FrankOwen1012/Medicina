import React, { useEffect, useState } from "react";
import { helperHttp } from "../helpers/helperHttp";

import CrudFormAdmin from "./CrudFormAdmin";
import CrudTableProductos from "./CrudTableProductos";
import Loader from "./Loader";
import Mensaje from "./Mensaje";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null); //esta variable funciona e inicializa en null y cuando cambie
  //aplicara aplicara el update mientras sea null entoces esto permanecera en create
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //USANDO EL HELPER---------------------------------------------------------------------------------->>>>>

  let api = helperHttp();
  let url = "http://localhost:5000/Medicinas";

  useEffect(() => {
    setLoading(true);

    helperHttp()
      .get(url)
      .then((res) => {
        //    console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    // data.id = Date.now();
    //console.log(data);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    //INSERTAR DATOS A MI TABLA
    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });

    // setDb([...db, data]);
  };
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));

        setDb(newData);
      } else {
        setError(res);
      }
    });

    //let newData = db.map((el) => (el.id === data.id ? data : el));
    //setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm("Esta seguro de eliminar el registro??");
    
     
     if (isDelete === true) {
    
      let endpoint = `${url}/${id}`;
      let options={
      //NO ES NECESARIO EL CURPO BODY 
       headers:{"content-type":"application/json"},
      };
      api.del(endpoint,options).then(res=>{
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      })
    } 
     }
    //para eliminar registro del Api
    
   
  

  return (
    <div>
      {/**<H2>CRUD APPI </H2> */}
      <CrudFormAdmin
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && (
        <Mensaje
          msg={`Erro ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {db && (
        <CrudTableProductos
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};

export default CrudApi;
