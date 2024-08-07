import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearClientes() {
    const [id_cliente, setIdCliente] = useState("");
    const [dv, setDv] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const volverAtras = () => {
        navigate(-1);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const fecha_registro = new Date().toISOString().slice(0, 19).replace('T', ' ');
            await axios.post('http://144.126.210.74:8080/api/cliente', {
                id_cliente,
                dv,
                nombres,
                apellidos,
                email,
                celular,
                fecha_registro
            });
            navigate("/clientes");
        } catch (error) {
            console.error(error);
            if (error.response) {
                setError("Se ha producido un error:" || error.response.statusText);
            }
        }
    };

    return (
        <div className="container">
            <h1>Agregar Cliente</h1>
            <hr></hr>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="card">
                <div className="card-header">Complete los datos del nuevo cliente</div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>RUT</label>
                            <input type="number" className="form-control" value={id_cliente} onChange={(e) => setIdCliente(e.target.value)} />
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
                            <button type="submit" className="btn btn-primary">Crear Cliente</button>
                            <button type="button" className="btn btn-secondary" onClick={volverAtras}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CrearClientes;
