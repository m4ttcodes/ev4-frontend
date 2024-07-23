import React ,{useEffect, useState} from "react";
import axios from "axios"
import { Link } from "react-router-dom";

function ListaGestion(){
    const [gestiones, setGestiones] = useState([]);
    useEffect(() => {
        const fetchGestiones = async () => {
            try {
                const response = await axios.get('http://144.126.210.74:8080/api/gestion');
                setGestiones(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchGestiones();
    },[]);

    return(
        <div className="container">
            <h1>Lista de Gestión</h1>
            <hr></hr>
            <div className="mb-3">
                <a href="/gestion/agregar" className="btn btn-primary">Agregar Gestión</a>
            </div>
            <div className="card">
                <div className="card-header">Lista de Gestión</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Cliente</th>
                            <th>Tipo Gestión</th>
                            <th>Resultado</th>
                            <th>Comentarios</th>
                            <th>Fecha Registro</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>
                            {gestiones.map((gestion) => (
                                <tr>
                                    <td>{gestion.id_gestion}</td>
                                    <td>{gestion.id_usuario}</td>
                                    <td>{gestion.id_cliente}</td>
                                    <td>{gestion.id_tipo_gestion}</td>
                                    <td>{gestion.id_resultado}</td>
                                    <td>{gestion.comentarios}</td>
                                    <td>{gestion.fecha_registro}</td>
                                    <td> <Link to={`/gestion/eliminar/${gestion.id_gestion}`} className="btn btn-danger">Eliminar</Link></td>
                                    <td> <Link to={`/gestion/actualizar/${gestion.id_gestion}`} className="btn btn-warning">Actualizar</Link></td>
                                </tr>
                            ) ) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ListaGestion;