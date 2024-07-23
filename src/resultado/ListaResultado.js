import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListarResultado(){
    const [resultados, setResultados] = useState([]);
    useEffect(() => {
        const fetchResultados = async () => {
            try {
                const response = await axios.get('http://144.126.210.74:8080/api/resultado?_size=500');
                setResultados(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchResultados();
    },[]);

    return(
        <div className="container">
            <h1>Lista de Resultados</h1>
            <hr></hr>
            <div className="mb-3">
                <a href="/resultado/agregar" className="btn btn-primary">Agregar Resultado</a>
            </div>
            <div className="card">
                <div className="card-header">Lista de Resultados</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Fecha Registro</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>
                            {resultados.map((resultado) => (
                                <tr>
                                    <td>{resultado.id_resultado}</td>
                                    <td>{resultado.nombre_resultado}</td>
                                    <td>{resultado.fecha_registro}</td>
                                    <td> <Link to={`/resultado/eliminar/${resultado.id_resultado}`} className="btn btn-danger">Eliminar</Link></td>
                                    <td> <Link to={`/resultado/actualizar/${resultado.id_resultado}`} className="btn btn-warning">Actualizar</Link></td>
                                </tr>
                            ) ) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ListarResultado;