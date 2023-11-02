import { useState } from "react";

export default function Index() {
const [data, setData] = useState({
    factorPropiedad:0,
    factorUbicacion: 0,
    metros2: 0,
    costoM2: 35.86,
    poliza: 0.00,    
});   
const cotizarPoliza = () => { 
const poliza = data.costoM2 * data.factorPropiedad * data.factorUbicacion * data.metros2
  setData({...data, poliza:poliza})     
}

    return (
        <div>
                <div className="historial"><a href="historial.html"><span title="Ver Historial">📋</span></a></div>
                <h1 className="center separador">Seguros del hogar 🏡</h1>
            <div className=" center div-cotizador">
                <h2 className="center separador">Completa los datos solicitados</h2>
                <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
                    <select defaultValue="" id="propiedad">
                        <option disabled>...</option>
                    </select>
                <label htmlFor="ubicacion">Selecciona su ubicación</label>
                    <select defaultValue="" id="ubicacion">
                    <option disabled>...</option>
                </select>
                <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
                    <input type="number" id="metros2" min="20" max="500" required/>
                <div className="center separador">
                    <button onClick={cotizarPoliza} className="button button-outline">Cotizar</button>
                </div>
                <div className="center separador">
                    <p className="importe">Precio estimado: $ <span id="valorPoliza">{data.poliza.toFixed(2)}</span> <span className="guardar ocultar" title="Guardar en historial">💾</span></p>
                </div>
            </div>
        </div>
    )
}