import React, { useEffect, useState } from "react";
import { helperHttp } from "../../helpers/helperHttp";
import CrudTableProductoTienda from "./CrudTableProductoTienda";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";


const CrudAppProductos = () => {
  const [db, setDb] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let api = helperHttp();

  let url = "http://localhost:5000/Medicinas";

  useEffect(() => {
    setLoading(true);
    helperHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, []);

  //const [dataToEdit, setDataToEdit] = useState(null);//esta variable funciona e inicializa en null y cuando cambie
  //aplicara aplicara el update mientras sea null entoces esto permanecera en create

 
  /* const updateData = (data) => {
  
    }*/
  /* const deleteData = (id) => {
  
    }*/

  return (
    <div>
      <CrudTableProductoTienda data={db} />
    </div>
  );
};

export default CrudAppProductos;
