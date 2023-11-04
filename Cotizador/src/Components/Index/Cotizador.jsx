import { useState } from "react";
import Swal from "sweetalert2";
import Toastify from 'toastify-js';
export function Cotizador({
  propiedadData,
  selectPropiedad,
  ubicacionData,
  selectUbicacion,
  inputMts2,
  costoM2,
  spanValorPoliza,
  setSpanValorPoliza,
}) {
  const [cotizado, setCotizado] = useState(false);

  const cotizar = () => {
    const factorPropiedad = propiedadData.find(
      (item) => item.tipo === selectPropiedad
    ).factor;
    const factorUbicacion = ubicacionData.find(
      (item) => item.tipo === selectUbicacion
    ).factor;
    const resultado = factorPropiedad * factorUbicacion * inputMts2 * costoM2;
    const valorPoliza = resultado.toFixed(2);
    setSpanValorPoliza(valorPoliza);
    setCotizado(true);

    Swal.fire({
      icon: "success",
      title: "Cotización realizada con éxito.",
      showConfirmButton: false,
      timer: 3500,
      width: "240px",
    });
  };

  const guardar = () => {
    if (cotizado) {
      const agregarCotizacion = {
        fecha: new Date().toLocaleDateString(),
        propiedad: selectPropiedad,
        ubicacion: selectUbicacion,
        mts2: inputMts2,
        poliza: spanValorPoliza,
      };
      const cotizaciones =
        JSON.parse(localStorage.getItem("cotizacion")) || [];
      cotizaciones.push(agregarCotizacion);
      localStorage.setItem("cotizacion", JSON.stringify(cotizaciones));

      Toastify({
        text: "Cotización guardada.",
        duration: 4000,
        newWindow: true,
        gravity: "top",
        position: "right",
        style: {
          background: "CornflowerBlue",
        },
      }).showToast();

    }
  };  
  
  return (
    <>
      <div className="center separador">
        <button onClick={cotizar}>Cotizar</button>
      </div>
      <div className="center separador">
        <p className="importe">
          Precio estimado: $ <span id="valorPoliza">{spanValorPoliza}</span>
          <span
            className={`guardar ${cotizado ? "" : "ocultar"}`}
            onClick={guardar}
            title="Guardar en historial">
            💾
          </span>
        </p>
      </div>
    </>
  );
}

export default Cotizador;