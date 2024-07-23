import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearGestion(){
    const [id_usuario, setIdUsuario] = useState("");
    const [id_cliente, setIdCliente] = useState("");
    const [id_tipo_gestion, setIdTipoGestion] = useState("");
    const [id_resultado, setIdResultado] = useState("");
    const [comentarios, setComentarios] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const fecha_registro = new Date().toISOString().slice(0, 19).replace('T', ' ');
            await axios.post('http://144.126.210.74:8080/api/gestion', {
                id_usuario,
                id_cliente,
                id_tipo_gestion,
                id_resultado,
                comentarios,
                fecha_registro
            });
            navigate("/gestion")
        } catch (error){
            console.error(error);
            if (error.response){
                setError("Se ha producido un error:" || error.response.statusText);
            }
        }
    };

    const volverAtras = () => {
        navigate(-1);
    };

    return (
        <div className="container">
            <h1>Agregar Gestión</h1>
            <hr></hr>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="card">
                <div className="card-header">Complete los datos de la nueva gestión</div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Usuario</label>
                            <input type="number" className="form-control" value={id_usuario} onChange={(e) => setIdUsuario(e.target.value)}></input>
                            <label>Cliente</label>
                            <input type="number" className="form-control" value={id_cliente} onChange={(e) => setIdCliente(e.target.value)}></input>
                            <label>Tipo Gestión</label>
                            <input type="number" className="form-control" value={id_tipo_gestion} onChange={(e) => setIdTipoGestion(e.target.value)}></input>
                            <label>Resultado</label>
                            <input type="number" className="form-control" value={id_resultado} onChange={(e) => setIdResultado(e.target.value)}></input>
                            <label>Comentarios</label>
                            <input type="text" className="form-control" value={comentarios} onChange={(e) => setComentarios(e.target.value)}></input>
                            <button type="submit" className="btn btn-primary">Agregar Gestión</button>
                            <button type="button" className="btn btn-secondary" onClick={volverAtras}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CrearGestion;