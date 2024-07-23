import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


function EliminarTipoGestion(){
    const [tipo_gestion, setTipoGestion] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    let {id} = useParams();

    const volverAtras = () => {
        navigate(-1);
    };

    useEffect(() => {
        cargarDatosTipoGestion();
    },[]);

    const cargarDatosTipoGestion = async () => {
        try {
            const response = await axios.get(`http://144.126.210.74:8080/api/tipo_gestion/${id}`)
            setTipoGestion (response.data[0]);
        } catch (error) {
            console.log(error)
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://144.126.210.74:8080/api/tipo_gestion/${id}`);
            navigate("/tipo_gestion")
        } catch (error) {
            console.log(error)
            if (error.response) {
                setError("Se ha producido un error:" || error.response.statusText);
            }
        }
    }

    return(
        <div className="container">
            <h1>Eliminar Tipo Gestión</h1>
            <hr></hr>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="card">
                <div className="card-header">Confirme la eliminación del tipo de gestión</div>
                <div className="card-body">
                    <h1>¿Desea eliminar este tipo de gestión?</h1>
                    <h2>{tipo_gestion && tipo_gestion.nombre_tipo_gestion}</h2>
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Eliminar tipo de gestión</button>
                    <button type="button" className="btn btn-secondary" onClick={volverAtras}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
export default EliminarTipoGestion;