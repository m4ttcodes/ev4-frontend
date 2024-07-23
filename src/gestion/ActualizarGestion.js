import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ActualizarGestion () {
    const [id_gestion, setIdGestion] = useState("");
    const [id_usuario, setIdUsuario] = useState("");
    const [id_cliente, setIdCliente] = useState("");
    const [id_tipo_gestion, setIdTipoGestion] = useState("");
    const [id_resultado, setIdResultado] = useState("");
    const [comentarios, setComentarios] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    let {id} = useParams();

    const volverAtras = () => {
        navigate(-1);
    };

    useEffect(() => {
        cargarDatosGestion();
    },[]);

    const cargarDatosGestion = async () => {
        try {
            const response = await axios.get(`http://144.126.210.74:8080/api/gestion/${id}`);
            const gestion = response.data[0];
            setIdGestion(gestion.id_gestion)
            setIdUsuario(gestion.id_usuario);
            setIdCliente(gestion.id_cliente);
            setIdTipoGestion(gestion.id_tipo_gestion);
            setIdResultado(gestion.id_resultado);
            setComentarios(gestion.comentarios);
        } catch (error) {
            console.log(error)
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const gestion = {
                id_gestion,
                id_usuario,
                id_cliente,
                id_tipo_gestion,
                id_resultado,
                comentarios,
            }
            await axios.patch(`http://144.126.210.74:8080/api/gestion/${id}`,gestion);
            navigate("/gestiones")
        } catch (error) {
            console.log(error)
            if (error.response) {
                setError("Se ha producido un error:" || error.response.statusText);
            }
        }
    }

    return(
        <div className="container">
            <h1>Actualizar Gestión</h1>
            <hr></hr>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="card">
                <div className="card-header">Complete los datos para actulizar</div>
                <div className="card-body">
                <form onSubmit={onSubmit}>
                        <div className="form-group">
                        <label>Gestión</label>
                        <input type="number" className="form-control" value={id_gestion} disabled />
                            <label>Usuario</label>
                            <input type="number" className="form-control" value={id_usuario} onChange={(e) => setIdUsuario(e.target.value)} />

                            <label>Cliente</label>
                            <input type="number" className="form-control" value={id_cliente} onChange={(e) => setIdCliente(e.target.value)} />

                            <label>Tipo Gestión</label>
                            <input type="number" className="form-control" value={id_tipo_gestion} onChange={(e) => setIdTipoGestion(e.target.value)} />

                            <label>Resultado</label>
                            <input type="number" className="form-control" value={id_resultado} onChange={(e) => setIdResultado(e.target.value)} />

                            <label>Comentarios</label>
                            <input type="text" className="form-control" value={comentarios} onChange={(e) => setComentarios(e.target.value)} />


                            <button type="submit" className="btn btn-primary">Actualizar Gestión</button>
                            <button type="button" className="btn btn-secondary" onClick={volverAtras}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ActualizarGestion;