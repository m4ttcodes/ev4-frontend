import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearUsuario() {
    const [id_usuario, setIdUsuario] = useState("");
    const [dv, setDv] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const volverAtras = () => {
        navigate(-1);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const fecha_registro = new Date().toISOString().slice(0, 19).replace(' ', ' ');
            await axios.post('http://144.126.210.74:8080/api/usuario', {
                id_usuario,
                dv,
                nombres,
                apellidos,
                email,
                celular,
                username,
                password,
                fecha_registro
            });
            navigate("/usuarios");
        } catch (error) {
            console.error(error);
            if (error.response) {
                setError("Se ha producido un error:" || error.response.statusText);
            }
        }
    };

    return (
        <div className="container">
            <h1>Agregar Usuario</h1>
            <hr></hr>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="card">
                <div className="card-header">Complete los datos del nuevo usuario</div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>RUT</label>
                            <input type="number" className="form-control" value={id_usuario} onChange={(e) => setIdUsuario(e.target.value)} />

                            <label>DV</label>
                            <input type="number" className="form-control" value={dv} onChange={(e) => setDv(e.target.value)} />

                            <label>Nombres</label>
                            <input type="text" className="form-control" value={nombres} onChange={(e) => setNombres(e.target.value)} />

                            <label>Apellidos</label>
                            <input type="text" className="form-control" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />

                            <label>Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label>Celular</label>
                            <input type="number" className="form-control" value={celular} onChange={(e) => setCelular(e.target.value)} />

                            <label>Username</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />

                            <label>Contraseña</label>
                            <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />

                            <button type="submit" className="btn btn-primary">Crear Usuario</button>
                            <button type="button" className="btn btn-secondary" onClick={volverAtras}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CrearUsuario;
