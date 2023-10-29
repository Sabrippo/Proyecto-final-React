import React, { useEffect, useRef } from 'react';

export function Historial() {
  const tablaHistorialRef = useRef(null);
  const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || [];

  useEffect(() => {
    const retornoTablaHTML = (fila) => {
      return (
        `<tr>
            <td>${fila.fechaCotizacion}</td>
            <td>${fila.propiedad}</td>
            <td>${fila.ubicacion}</td>
            <td>${fila.metrosCuadrados}</td>
            <td>$ ${fila.poliza.toLocaleString()}</td>
          </tr>`
      );
    };

    const cargoHistorial = () => {
      let tablaHTML = "";
      if (historialCotizaciones.length > 0) {
        historialCotizaciones.forEach(fila => tablaHTML += retornoTablaHTML(fila));
        tablaHistorialRef.current.innerHTML = tablaHTML;
      }
    };
    cargoHistorial();
  }, [historialCotizaciones]);

  return (
    <div>
      <table>
        <tbody ref={tablaHistorialRef}></tbody>
      </table>
    </div>
  );
}
