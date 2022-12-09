import React from 'react';
import { useState } from 'react';
import { helperHttp } from "../helpers/helperHttp";

const ImagenReferencia = () => {
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null); //esta variable funciona e inicializa en null y cuando cambie
    //aplicara aplicara el update mientras sea null entoces esto permanecera en create
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //USANDO EL HELPER---------------------------------------------------------------------------------->>>>>

    let api = helperHttp();
    let url = "http://localhost:4000/Medicinas";




    return (
        <>
            <h1>IMAGEN DE REFENCIA</h1>
<img src='https://farmaciauniversal.com/assets/sources/PRODUCTOS/18119%20-%20paracetamol%20500%20mg%20-%20farmacia%20universal.jpg'></img>

        </>
    )
}

export default ImagenReferencia