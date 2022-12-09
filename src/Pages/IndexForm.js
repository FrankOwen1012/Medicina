import React from 'react';
import LogoMiquimica from "../img/logoMiquimica.png";
import Portada from "../img/logo-marcas.jpeg";
import Log from "../img/logo_qs.png";
//import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from '../context/AuthProvider';
import axios from "../Api/axios";
import Index_Tienda from './Index_Tienda';

const IndexForm = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    /*  const history=useHistory();
      const handleClick=()=>{
          history.push("/tienda");
      ;}
      
      console.log(history);*/

    useEffect(() => {
        userRef.current.focus();


    }, []);
    useEffect(() => {
        setErrMsg("");

    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let RUC =await axios.get("http://localhost:4000/Usuarios");
            const response = await axios.post("http://localhost:4000/Usuarios", JSON.stringify({ user, pwd }),
           

                {
                    headers: { "Content-type": "application/json" },
                 //   withCredentials: true
                });
            console.log(JSON.stringify(response?.data));
            console.log(RUC);
            //  console.log(JSON.stringify(response));
         //   const accessToken = response?.data?.accessToken;
         //   const roles = response?.data?.roles;
            setAuth({ user, pwd,/* roles, accessToken*/ });
            setUser("");
            setPwd("");
            
            setSuccess(true);
          
        } catch (error) {
      if(!error?.response){
        setErrMsg("NO SERVER RESPONSE");
      }else if(error.response?.status===400){
        setErrMsg("MISSING USER NAME OR PASSWORD");
      }
      else if(error.response?.status===401){
             setErrMsg("UNAUTHORIZED");
      }
      else{
        setErrMsg("LOGIN FAILED");
      }
      errRef.current.focus();

        }

        //    console.log(user, pwd);




    }

    return (
        <>
            {success ? (
              <Index_Tienda/>
            ) : (


                <section className='main_index'>
                    {/** AQUI HAY UN PARRAFO QUE NOS INDICA EL ERROR  */}
                 { /*  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive" > {errMsg} </p>*/}
                    <section className='formulario'>

                        <img className="Logo" src={LogoMiquimica} alt="sistemas"></img>

                        <h5 className='parrafo'>Bienvenido </h5>
                        <p className='parrafo'>Por favor inicie sesión para conocer nuestros productos</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">RUC</label>
                                <input type="text" className="form-control" id="RUC" ref={userRef} autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)} value={user} placeholder="Ingrese Su R.U.C" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label" >Password</label>
                                <input type="password" className="form-control" id="Password" ref={userRef} onChange={(e => setPwd(e.target.value))} value={pwd} placeholder="Ingrese Su Password" required />
                                <a href='/registro'>¿Eres Nuevo?</a>
                            </div>
                            <div className='mb-3'>
                                {   /*<Link to="/tienda" type="button" id="inicio" className="btn btn-danger inicio">
                                    Success</Link>*/}
                                <button className='btn btn-danger' > Iniciar Sesion</button>
                            </div>
                        </form>
                        <img className='log' src={Log} alt='log'></img>

                    </section>

                    <section className='portadoInicial' >
                        <img className='portada' src={Portada} alt='quimica'></img>

                    </section>

                </section>
            )
            }
        </>
    )
}

export default IndexForm;