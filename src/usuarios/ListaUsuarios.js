import React ,{useEffect, useState} from "react";
import axios from "axios"


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
            <h1>Lista Usuarios</h1>
            <hr></hr>
            <table className="table">
                <thead>
                    <th>Rut</th>
                    <th>Dv</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Celular</th>
                    <th>Username</th>
                    <th>Fecha Registro</th>
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
                            <td>{usuario.fecha_registro}</td>
                        </tr>
                    ) ) }
                </tbody>
            </table>
        </div>
    )
}
export default ListaUsuarios;