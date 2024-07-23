import React ,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ListaTipoGestion(){
    const [tipoGestiones, setTipoGestiones] = useState([]);
    useEffect(() => {
        const fetchTipoGestiones = async () => {
            try{
                const response = await axios.get('http://144.126.210.74:8080/api/tipo_gestion?_size=500')
                setTipoGestiones(response.data);
            } catch (error){
                console.log(error);
            }
        };
        fetchTipoGestiones();
    },[]);

    return(
        <div className="container">
            <h1>Lista de Tipo Gestión</h1>
            <hr></hr>
            <div className="mb-3">
                <a href="/tipo_gestion/agregar" className="btn btn-primary">Agregar Tipo Gestión</a>
            </div>
            <div className="card">
                <div className="card-header">Lista de Tipo Gestión</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Fecha Registro</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>
                            {tipoGestiones.map((tipo_gestion) => (
                                <tr>
                                    <td>{tipo_gestion.id_tipo_gestion}</td>
                                    <td>{tipo_gestion.nombre_tipo_gestion}</td>
                                    <td>{tipo_gestion.fecha_registro}</td>
                                    <td> <Link to={`/tipo_gestion/eliminar/${tipo_gestion.id_tipo_gestion}`} className="btn btn-danger">Eliminar</Link></td>
                                    <td> <Link to={`/tipo_gestion/actualizar/${tipo_gestion.id_tipo_gestion}`} className="btn btn-warning">Actualizar</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ListaTipoGestion;