import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearResultado() {
    const [nombre_resultado, setNombres] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const volverAtras = () => {
        navigate(-1);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const fecha_registro = new Date().toISOString().slice(0, 19).replace('T', ' ');
            await axios.post('http://144.126.210.74:8080/api/resultado', {
                nombre_resultado,
                fecha_registro
            });
            navigate("/resultado");
        } catch (error) {
            console.error(error);
            if (error.response) {
                setError("Se ha producido un error:" || error.response.statusText);
            }
        }
    };

    return (
        <div className="container">
            <h1>Agregar Resultado</h1>
            <hr></hr>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="card">
                <div className="card-header">Complete los datos del nuevo resultado</div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" className="form-control" value={nombre_resultado} onChange={(e) => setNombres(e.target.value)} />

                            <button type="submit" className="btn btn-primary">Crear Resultado</button>
                            <button type="button" className="btn btn-secondary" onClick={volverAtras}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CrearResultado;
