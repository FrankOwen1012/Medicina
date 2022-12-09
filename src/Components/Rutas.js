import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexForm from '../Pages/IndexForm';
import Index_Tienda from '../Pages/Index_Tienda';
import Error404 from '../Pages/Error404';
import EncapsulaDashboard from './EncapsulaDashboard';
import CrudApiClientes from './TablaUsuarios/CrudApiClientes';
const Rutas = () => {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexForm} /> {/*  1 .  index PRINCIPAL*/}
                <Route exact path="/registro" component={CrudApiClientes} />{/*  2 .  PAGINA DE TIENDA */}
                <Route exact path="/tienda" component={Index_Tienda} />{/*  3 Registro de Nuevos Usuarios clientes .  */}

                {/**REACIEN EMPIEZO A INGRESAR LOS COMPOENNTES DE TIENDA MISMA  */}

                <Route exact path="/tienda/EncapsulaTienda" component={EncapsulaDashboard} />

                <Route patch="/*" component={Error404} />
            </Switch>
        </BrowserRouter>

    )
}

export default Rutas;