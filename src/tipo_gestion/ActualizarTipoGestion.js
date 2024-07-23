import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ActualizarTipoGestion () {
    const [id_tipo_gestion, setIdTipoGestion] = useState("");
    const [nombre_tipo_gestion, setNombre] = useState("");
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
            const response = await axios.get(`http://144.126.210.74:8080/api/tipo_gestion/${id}`);
            const tipo_gestion = response.data[0];
            setIdTipoGestion(tipo_gestion.id_tipo_gestion);
            setNombre(tipo_gestion.nombre_tipo_gestion);
        } catch (error) {
            console.log(error)
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const tipo_gestion = {
                nombre_tipo_gestion
            }
            await axios.patch(`http://144.126.210.74:8080/api/tipo_gestion/${id}`,tipo_gestion);
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
            <h1>Actualizar Tipo Gestión</h1>
            <hr></hr>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="card">
                <div className="card-header">Complete los datos para actualizar</div>
                <div className="card-body">
                <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>ID</label>
                            <input type="number" className="form-control" value={id_tipo_gestion} disabled />

                            <label>Nombre</label>
                            <input type="text" className="form-control" value={nombre_tipo_gestion} onChange={(e) => setNombre(e.target.value)} />

                            <button type="submit" className="btn btn-primary">Actualizar Tipo Gestión</button>
                            <button type="button" className="btn btn-secondary" onClick={volverAtras}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ActualizarTipoGestion;