import React ,{useEffect, useState} from "react";
import axios from "axios";


function ListaTipoGestion(){
    const [tipoGestiones, setTipoGestiones] = useState([]);
    useEffect(() => {
        const fetchTipoGestiones = async () => {
            try{
                const response = await axios.get('http://144.126.210.74:8080/api/tipo_gestion')
                setTipoGestiones(response.data);
            } catch (error){
                console.log(error);
            }
        };
        fetchTipoGestiones();
    },[]);

    return(
        <div className="container">
            <h1>LIsta Tipo Gestión</h1>
            <hr></hr>
            <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Fecha Registro</th>
                </thead>
                <tbody>
                    {tipoGestiones.map((tipo_gestion) => (
                        <tr>
                            <td>{tipo_gestion.id_tipo_gestion}</td>
                            <td>{tipo_gestion.nombre_tipo_gestion}</td>
                            <td>{tipo_gestion.fecha_registro}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListaTipoGestion;