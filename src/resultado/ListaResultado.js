import React, {useEffect, useState} from "react";
import axios from "axios";

function ListarResultado(){
    const [resultados, setResultados] = useState([]);
    useEffect(() => {
        const fetchResultados = async () => {
            try {
                const response = await axios.get('http://144.126.210.74:8080/api/resultado');
                setResultados(response.data);
            } catch (error) {
                console.log(error);
            }
        }; 
        fetchResultados(); 
    },[]);
    
    return(
        <div className="container">
            <h1>LIsta Resultados</h1>
            <hr></hr>
            <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Fecha Registro</th>
                </thead>
                <tbody>
                    {resultados.map((resultado) => (
                        <tr>
                            <td>{resultado.id_resultado}</td>
                            <td>{resultado.nombre_resultado}</td>
                            <td>{resultado.fecha_registro}</td>
                        </tr>
                    ) ) }
                </tbody>
            </table>
        </div>
    )
}
export default ListarResultado;