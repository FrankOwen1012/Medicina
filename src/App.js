import './App.css';
import "./Css/index.css";
import "./Css/NuevoUsuario.css";
import "./Css/Dashboard_Admin.css";
import "./Css/Error404.css";

import Rutas from "./Components/Rutas"
import { AuthProvider } from './context/AuthProvider';
function App() {
  return (

      <Rutas />
     
 

  );
}

export default App;
