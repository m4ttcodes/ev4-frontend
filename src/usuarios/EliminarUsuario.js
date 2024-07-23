import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


function EliminarUsuario(){
    const [usuario, setUsuario] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    let {id} = useParams();

    const volverAtras = () => {
        navigate(-1);
    };

    useEffect(() => {
        cargarDatosUsuario();
    },[]);

    const cargarDatosUsuario = async () => {
        try {
            const response = await axios.get(`http://144.126.210.74:8080/api/usuario/${id}`)
            setUsuario (response.data[0]);
        } catch (error) {
            console.log(error)
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://144.126.210.74:8080/api/usuario/${id}`);
            navigate("/usuarios")
        } catch (error) {
            console.log(error)
            if (error.response) {
                setError("Se ha producido un error:" || error.response.statusText);
            }
        }
    }

    return(
        <div className="container">
            <h1>Eliminar Usuario</h1>
            <hr></hr>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="card">
                <div className="card-header">Confirme la eliminación del usuario</div>
                <div className="card-body">
                    <h1>¿Desea eliminar este usuario?</h1>
                    <h2>{usuario && usuario.nombres} {usuario.apellidos}</h2>
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Eliminar usuario</button>
                    <button type="button" className="btn btn-secondary" onClick={volverAtras}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
export default EliminarUsuario;