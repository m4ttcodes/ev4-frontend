import React ,{useEffect, useState} from "react";
import axios from "axios"
import { Link } from "react-router-dom";


function ListaUsuarios(){
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://144.126.210.74:8080/api/usuario');
                setUsuarios(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsuarios();
    },[]);

    return(
        <div className="container">
            <h1>Lista de Usuarios</h1>
            <hr></hr>
            <div className="mb-3">
                <a href="/usuarios/agregar" className="btn btn-primary">Agregar Usuario</a>
            </div>
            <div className="card">
                <div className="card-header">Lista de Usuarios</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <th>Rut</th>
                            <th>Dv</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Celular</th>
                            <th>Username</th>
                            <th>Contraseña</th>
                            <th>Fecha Registro</th>
                            <th>Acciones</th>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr>
                                    <td>{usuario.id_usuario}</td>
                                    <td>{usuario.dv}</td>
                                    <td>{usuario.nombres}</td>
                                    <td>{usuario.apellidos}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.celular}</td>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.password}</td>
                                    <td>{usuario.fecha_registro}</td>
                                    <td> <Link to={`/usuarios/eliminar/${usuario.id_usuario}`} className="btn btn-danger">Eliminar</Link></td>
                                    <td> <Link to={`/usuarios/actualizar/${usuario.id_usuario}`} className="btn btn-warning">Actualizar</Link></td>
                                </tr>
                            ) ) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ListaUsuarios;