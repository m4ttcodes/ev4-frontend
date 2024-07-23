import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ActualizarCliente () {
    const [id_cliente, setIdCliente] = useState("");
    const [dv, setDv] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    let {id} = useParams();

    const volverAtras = () => {
        navigate(-1);
    };

    useEffect(() => {
        cargarDatosClientes();
    },[]);

    const cargarDatosClientes = async () => {
        try {
            const response = await axios.get(`http://144.126.210.74:8080/api/cliente/${id}`);
            const cliente = response.data[0];
            setIdCliente(cliente.id_cliente);
            setDv(cliente.dv);
            setNombres(cliente.nombres);
            setApellidos(cliente.apellidos);
            setEmail(cliente.email);
            setCelular(cliente.celular);
        } catch (error) {
            console.log(error)
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const cliente = {
                nombres,
                apellidos,
                email,
                celular
            }
            await axios.patch(`http://144.126.210.74:8080/api/cliente/${id}`,cliente);
            navigate("/clientes")
        } catch (error) {
            console.log(error)
            if (error.response) {
                setError("Se ha producido un error:" || error.response.statusText);
            }
        }
    }

    return(
        <div className="container">
            <h1>Actualizar Cliente</h1>
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
                            <label>RUT</label>
                            <input type="number" className="form-control" value={id_cliente} disabled />
                            <label>DV</label>
                            <input type="number" className="form-control" value={dv} disabled />
                            <label>Nombres</label>
                            <input type="text" className="form-control" value={nombres} onChange={(e) => setNombres(e.target.value)} />
                            <label>Apellidos</label>
                            <input type="text" className="form-control" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                            <label>Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label>Celular</label>
                            <input type="number" className="form-control" value={celular} onChange={(e) => setCelular(e.target.value)} />
                            <button type="submit" className="btn btn-primary">Actualizar Cliente</button>
                            <button type="button" className="btn btn-secondary" onClick={volverAtras}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ActualizarCliente;