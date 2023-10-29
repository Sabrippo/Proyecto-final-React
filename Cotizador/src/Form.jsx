import { Propiedad } from "../components/Propiedad";
import { Ubicacion } from "../components/Ubicacion";
import { Metros } from "../components/Metros";
import { Cotizar } from "../components/Cotizar";

export function Form() {
  return (
    <div>
      <div className=" center div-cotizador">
        <h2 className="center separador">Completa los datos solicitados</h2>
        <Propiedad /> 
        <Ubicacion />
        <Metros />
        <Cotizar />
      </div>
    </div>
  );
}
