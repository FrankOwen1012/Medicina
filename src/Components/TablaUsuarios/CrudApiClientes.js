import React, { useEffect,useState } from "react";
import { helperHttp } from "../../helpers/helperHttp";
import NuevoUsuario from "./NuevoUsuario";
import CrudTableUsuarios from "./CrudTableUsuarios";



const CrudApiClientes = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null); //esta variable funciona e inicializa en null y cuando cambie
  //aplicara aplicara el update mientras sea null entoces esto permanecera en create
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //USANDO EL HELPER---------------------------------------------------------------------------------->>>>>

  let api = helperHttp();
  let url = "http://localhost:4000/Usuarios";

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

const deleteData=(id)=> {
  let isDelete=window.confirm("Esta Seguro de Elminar el Registr??");
  if(isDelete===true){
    let newData=db.filter((el)=>el.id!==id);
    setDb(newData);
  }
  else{
    return;
  }

}

  return (
    <div>
{    /*  CrudApiClientes*/}
      <NuevoUsuario
      createData={createData}
      dataToEdit={dataToEdit}
      setDataToEdit={setDataToEdit}
      />
     
    </div>
  );
};

export default CrudApiClientes;
