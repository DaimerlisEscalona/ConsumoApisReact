import './OrdenarFeriados.css';

function OrdenarFeriados({ordenarFeriado}) {
  
  return (
  <div className="boton-orden mt-5 formato-order">
    <button
    className="btn btn-dark form-boton"
    onClick={ordenarFeriado}>Ordenar Alfabéticamente </button>
          
  </div>
  );
}

  export default OrdenarFeriados;