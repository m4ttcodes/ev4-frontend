import React ,{useEffect, useState} from "react";
import axios from "axios"

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
            <h1>Lista Gestión</h1>  
            <hr></hr>
            <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Cliente</th>
                    <th>Tipo Gestión</th>
                    <th>Resultado</th>
                    <th>Comentarios</th>
                    <th>Fecha Registro</th>
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
                        </tr>
                    ) ) }
                </tbody>
            </table>
        </div>
    )
}
export default ListaGestion;