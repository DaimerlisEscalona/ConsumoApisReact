import './MiApi.css';
import Buscador from "../Navbar/Navbar";
import OrdenarFeriados from "../OrdenarFeriados/OrdenarFeriados"
import { useState, useEffect } from "react";
import axios from "axios";

function ConsumoAPIs() {

  const [feriados, setFeriados] = useState([]);
  const [tablaFeriados, setTablaFeriados] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const consultarInformacion = async () => {

    await axios.get("https://api.victorsanmartin.com/feriados/en.json")
      .then(response => {
        setFeriados(response.data.data);
        setTablaFeriados(response.data.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const capturarInputBusqueda = e => {

    setBusqueda(e.target.value);
    buscarInformacion(e.target.value)
  }

  const buscarInformacion = ((busqueda) => {

    let resultadosBusqueda = tablaFeriados.filter((e) => {
      if (e.extra.toString().toLowerCase().includes(busqueda.toLowerCase())
      ) {
        return e;
      }
    });
    setFeriados(resultadosBusqueda);
  })

  useEffect(() => {
    consultarInformacion();
  }, []);

  const ordenarFeriado = (() => {
    
    let results = tablaFeriados.sort((a, b) => (a.type < b.type ? 1 : a.type > b.type ? -1 : 0))
    if (results === tablaFeriados)
      results = tablaFeriados.sort((b, a) => (a.type < b.type ? 1 : a.type > b.type ? -1 : 0))
    setFeriados(results)
  })

  return (
    <>
      <Buscador
        capturarInputBusqueda={capturarInputBusqueda}
        busqueda={busqueda}
      />
      <div className="form-tabla diseño-tabla">
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Titulo</th>
              <th scope="col">Tipo</th>
              <th scope="col">Información Adicional</th>
            </tr>
          </thead>
          {
            <tbody>
              {feriados && feriados.map((dat) => (
                <tr key={dat.date}>
                  <td>{dat.date}</td>
                  <td>{dat.title}</td>
                  <td>{dat.type}</td>
                  <td>{dat.extra}</td>
                </tr>
              ))}
            </tbody>
          }
        </table>
      </div>
      <OrdenarFeriados
        ordenarFeriado={ordenarFeriado}
      />
    </>
  );
}
export default ConsumoAPIs;
