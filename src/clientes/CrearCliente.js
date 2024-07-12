import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearClientes(){
    const [id_cliente,setIdCliente] = useState("");
    const [dv,setDv] = useState("");
    const [nombres,setNombres] = useState("");
    const [apellidos,setApellidos] = useState("");
    const [email,setEmail] = useState("");
    const [celular,setCalular] = useState("");
    const [error,setError] = useState("");
    
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            const fecha_registro= new Date().toISOString().slice(0,19).replace('T', ' ')
            await axios.post('http://144.126.210.74:8080/api/cliente',{
                id_cliente,
                dv,
                nombres,
                apellidos,
                email,
                celular,
                fecha_registro
            });
            navigate("/clientes");
        } catch (error){
            console.console.log(error);
            if(error.response){
                setError(error.response.data.message || "Se ha producido un error")
            }
        }
    }



    return(
        <div className="container">
            <h1>Agregar Cliente</h1>
            <hr></hr>
            {error &&(
                <div className="alert alert-danger" role="alert">
                {error}
                </div>
            )

            }
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>RUT</label>
                    <input type="number" className="form-control" value={id_cliente} onChange={(e) => setIdCliente(e.target.value)}></input>
                    <label>DV</label>
                    <input type="number" className="form-control" value={dv} onChange={(e) => setDv(e.target.value)}></input>
                    <label>Nombres</label>
                    <input type="text" className="form-control" value={nombres} onChange={(e) => setNombres(e.target.value)}></input>
                    <label>Apellidos</label>
                    <input type="text" className="form-control" value={apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label>Calular</label>
                    <input type="number" className="form-control" value={celular} onChange={(e) => setCalular(e.target.value)}></input>
                    <button type="submit" className="btn btn-primary">Crear Cliente</button>
                </div>
            </form>
        </div>
    )
}  
export default CrearClientes; 