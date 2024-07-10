import React, { useState } from "react";
import axios from "axios";

function CrearCliente(){

  const [id_cliente, setIdCliente] = useState("")
  const [dv, setDv] = useState("")
  const [nombres, setNombres] = useState("")
  const [apellidos, setApellidos] = useState("")
  const [email, setEmail] = useState("")
  const [celular, setCelular] = useState("")



  return(
    <div className="container">
      <h1>Agregar Cliente</h1>
      <hr></hr>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>RUT</label>
          <input type="text" className="form-control" value={id_cliente} onChange={(e) => setIdCliente(e.target.value)}></input>
        </div>

        <div className="form-group">
          <label>DV</label>
          <input type="text" className="form-control" value={dv} onChange={(e) => setDv(e.target.value)}></input>
        </div>

        <div className="form-group">
          <label>Nombres</label>
          <input type="text" className="form-control" value={nombres} onChange={(e) => setNombres(e.target.value)}></input>
        </div>

        <div className="form-group">
          <label>Apellidos</label>
          <input type="text" className="form-control" value={apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>

        <div className="form-group">
          <label>Celular</label>
          <input type="text" className="form-control" value={celular} onChange={(e) => setCelular(e.target.value)}></input>
        </div>
        <button type="submit" className="btn btn-primary">Crear cliente</button>
      </form>
    </div>
  )
}

// incluir validaciones y mensajes de alerta en todos los componentes
export default CrearCliente;