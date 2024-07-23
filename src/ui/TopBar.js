import React from "react";
function TopBar(){
    return(
        <>
            <nav className="navbar nav-underline navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand mb-2" href="/" >Inicio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/clientes">Clientes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/usuarios">Usuarios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/gestion">Gestión</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/tipo_Gestion">Tipo Gestión</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/resultado">Resultados</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default TopBar;