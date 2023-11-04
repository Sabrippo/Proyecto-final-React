import { useState, useEffect } from "react";
import {TipoPropiedad} from "../Components/Index/TipoPropiedad";
import {Ubicacion} from "../Components/Index/Ubicacion";
import {MetrosCuadrados} from "../Components/Index/MetrosCuadrados";
import { Cotizador } from "../Components/Index/Cotizador";
import { Link } from "react-router-dom";

export function Index() {
    const [selectPropiedad, setSelectPropiedad] = useState("...");
    const [selectUbicacion, setSelectUbicacion] = useState("...");
    const [inputMts2, setInputMts2] = useState(20);
    const [spanValorPoliza, setSpanValorPoliza] = useState("0.00");
    const costoM2 = 35.86;
    const [ubicacionData, setUbicacionData] = useState([]);
    const [propiedadData, setPropiedadData] = useState([]);

  useEffect(() => {
    fetch("/src/Components/datos.json")
      .then((response) => response.json())
      .then((data) => {
    console.log(data);    
    const ubicacion = data.filter((item) => item.categoria === "ubicacion");
    const propiedad = data.filter((item) => item.categoria === "propiedad");
    setUbicacionData(ubicacion);
    setPropiedadData(propiedad);
      });
  }, []);


    return (
        <div>
                <div className="historial"><Link to="http://localhost:5173/historial"><span title="Ver Historial">📋</span></Link></div>
                <h1 className="center separador">Seguros del hogar 🏡</h1>
            <div className=" center div-cotizador">
                <h2 className="center separador">Completa los datos solicitados</h2>
                    <TipoPropiedad datos={propiedadData} setPropiedad={setSelectPropiedad} />
                    <Ubicacion datos={ubicacionData} setUbicacion={setSelectUbicacion}/>
                    <MetrosCuadrados inputMts2={inputMts2} setInputMts2={setInputMts2} />
                    <Cotizador propiedadData={propiedadData}
                               selectPropiedad={selectPropiedad}
                               ubicacionData={ubicacionData}
                               selectUbicacion={selectUbicacion}
                               inputMts2={inputMts2}
                               costoM2={costoM2}
                               spanValorPoliza={spanValorPoliza}
                               setSpanValorPoliza={setSpanValorPoliza}/>
            </div>
        </div>
    );
}
export default Index;