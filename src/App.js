import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TopBar from "./ui/TopBar";
import Home from "./ui/Home";

import ListaClientes from "./clientes/ListaClientes";
import CrearCliente from "./clientes/CrearCliente";
import EliminarCliente from "./clientes/EliminarCliente";
import ActualizarCliente from "./clientes/ActualizarCliente";

import CrearGestion from "./gestion/CrearGestion";
import ListaGestion from "./gestion/ListaGestion";
import EliminarGestion from "./gestion/EliminarGestion";
import ActualizarGestion from "./gestion/ActualizarGestion";

import ListaUsuarios from "./usuarios/ListaUsuarios";
import CrearUsuario from "./usuarios/CrearUsuario";
import ActualizarUsuario from "./usuarios/ActualizarUsuario";
import EliminarUsuario from "./usuarios/EliminarUsuario";

import ListaTipoGestion from "./tipo_gestion/ListaTipoGestion";
import CrearTipoGestion from "./tipo_gestion/CrearTipoGestion";
import AcrtualizarTipoGestion from "./tipo_gestion/ActualizarTipoGestion";
import EliminarTipoGestion from "./tipo_gestion/EliminarTipoGestion";

import ListarResultado from "./resultado/ListaResultado";
import CrearResultado from "./resultado/CrearResultado";
import EliminarResultado from "./resultado/EliminarResultado";
import ActualizarResultado from "./resultado/ActualizarResultado";

function App() {
  return (
    <Router>
      <div>
        <TopBar/>
        <Routes>
          <Route path="/gestion" element={<ListaGestion/>} />
          <Route path="/usuarios" element={<ListaUsuarios/>} />
          <Route path="/clientes" element={<ListaClientes/>} />
          <Route path="/tipo_gestion" element={<ListaTipoGestion/>} />
          <Route path="/resultado" element={<ListarResultado/>} />

          <Route path="/gestion/agregar" element={<CrearGestion/>} />
          <Route path="/clientes/agregar" element={<CrearCliente/>} />
          <Route path="/usuarios/agregar" element={<CrearUsuario/>} />
          <Route path="/tipo_gestion/agregar" element={<CrearTipoGestion/>} />
          <Route path="/resultado/agregar" element={<CrearResultado/>} />

          <Route path="/clientes/eliminar/:id" element={<EliminarCliente/>} />
          <Route path="/gestion/eliminar/:id" element={<EliminarGestion/>} />
          <Route path="/usuarios/eliminar/:id" element={<EliminarUsuario/>} />
          <Route path="/tipo_gestion/eliminar/:id" element={<EliminarTipoGestion/>} />
          <Route path="/resultado/eliminar/:id" element={<EliminarResultado/>} />

          <Route path="/clientes/actualizar/:id" element={<ActualizarCliente/>} />
          <Route path="/gestion/actualizar/:id" element={<ActualizarGestion/>} />
          <Route path="/tipo_gestion/actualizar/:id" element={<AcrtualizarTipoGestion/>} />
          <Route path="/usuarios/actualizar/:id" element={<ActualizarUsuario/>} />
          <Route path="/resultado/actualizar/:id" element={<ActualizarResultado/>} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;