import React ,{ useEffect,useState } from "react";
import axios from "axios";

function ListaClientes() {
  const [clientes,setClientes] = useState([]);

  useEffect(
    () => {
      const fetchClientes = async () => {
        try {
          const response = await axios.get('http://144.126.210.74:8080/api/cliente');
          setClientes(response.data)
        } catch (error) {
          console.log(error);
        } 
      };
      fetchClientes();
    },[]);

  return (
    <div className="container">
      <h1>Lista de clientes</h1>
      <hr></hr>
      <table className="table">
        <thead>
          <th>RUT</th>
          <th>DV</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Email</th>
          <th>Celular</th>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr>
              <td>{cliente.id_cliente}</td>
              <td>{cliente.dv}</td>
              <td>{cliente.nombres}</td>
              <td>{cliente.apellidos}</td>
              <td>{cliente.email}</td>
              <td>{cliente.celular}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

  )
}
export default ListaClientes;