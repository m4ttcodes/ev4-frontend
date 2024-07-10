import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from "./ui/TopBar";
import Home from './ui/Home';
import ListaClientes from './clientes/ListaClientes';
function App() {
  return(
    <Router>
      <div>
        <TopBar/>
      </div>

    </Router>
    
  );
}

export default App;
