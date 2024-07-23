import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ActualizarResultado () {
    const [id_resultado, setIdResultado] = useState("");
    const [nombre_resultado, setNombre] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    let {id} = useParams();

    const volverAtras = () => {
        navigate(-1);
    };

    useEffect(() => {
        cargarDatosResultado();
    },[]);

    const cargarDatosResultado = async () => {
        try {
            const response = await axios.get(`http://144.126.210.74:8080/api/resultado/${id}`);
            const resultado = response.data[0];
            setIdResultado(resultado.id_resultado);
            setNombre(resultado.nombre_resultado);

        } catch (error) {
            console.log(error)
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const resultado = {
                nombre_resultado
            }
            await axios.patch(`http://144.126.210.74:8080/api/resultado/${id}`,resultado);
            navigate("/resultado")
        } catch (error) {
            console.log(error)
            if (error.response) {
                setError("Se ha producido un error:" || error.response.statusText);
            }
        }
    }

    return(
        <div className="container">
            <h1>Actualizar Resultado</h1>
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
                            <label>ID</label>
                            <input type="number" className="form-control" value={id_resultado} disabled />

                            <label>Nombre</label>
                            <input type="text" className="form-control" value={nombre_resultado} onChange={(e) => setNombre(e.target.value)} />

                            <button type="submit" className="btn btn-primary">Actualizar Resultado</button>
                            <button type="button" className="btn btn-secondary" onClick={volverAtras}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ActualizarResultado;