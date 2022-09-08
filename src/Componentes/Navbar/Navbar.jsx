import React from "react";
import './Navbar.css';
import banderaChile from "../Img/banderaChile.png"

function Buscador(props) {
  
  return (

    <div className="container-fluid navbar navbar-light bg-light form-navbar">
      <div>
        <img className="form-img" src={banderaChile} />
      </div>
      <div>
        <h1 className="navbar-brand form-texto">Días festivos en Chile 2022</h1>
      </div>
      <div>
        <form class="d-flex" role="search">
          <input value={props.busqueda} onChange={props.capturarInputBusqueda}
          type="text" placeholder='Busqueda por Información' className='form-control' />
        </form>
      </div>
    </div>

  );
}

export default Buscador;
