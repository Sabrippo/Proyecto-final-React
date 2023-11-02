export default function Index() {
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
                    <button className="button button-outline">Cotizar</button>
                </div>
                <div className="center separador">
                    <p className="importe">Precio estimado: $ <span id="valorPoliza">0.00</span><span className="guardar ocultar" title="Guardar en historial">💾</span></p>
                </div>
            </div>
        </div>
    )
}