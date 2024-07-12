import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TopBar from "./ui/TopBar";
import Home from "./ui/Home";
import ListaClientes from "./clientes/ListaClientes";
import ListaUsuarios from "./usuarios/ListaUsuarios";
import ListaGestion from "./gestion/ListaGestion";
import ListaTipoGestion from "./tipo_gestion/ListaTipoGestion";
import ListarResultado from "./resultado/ListaResultado";
import CrearCliente from "./clientes/CrearCliente";

function App() {
  return (
    <Router>
      <div>
        <TopBar/>
        <Routes>
          <Route path="/usuarios" element={<ListaUsuarios/>} />
          <Route path="/clientes" element={<ListaClientes/>} />
          <Route path="/clientes/agregar" element={<CrearCliente/>} />
          <Route path="/gestion" element={<ListaGestion/>} />
          <Route path="/tipo_gestion" element={<ListaTipoGestion/>} />
          <Route path="/resultado" element={<ListarResultado/>} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;