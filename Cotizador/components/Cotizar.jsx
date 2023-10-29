
export function Cotizar() {
  return (
    <div>
      <div className="center separador">
        <button className="button button-outline">Cotizar</button>
      </div>
      <div className="center separador">
        <p className="importe">Precio estimado: $ <span id="valorPoliza">0.00</span><span className="guardar ocultar" title="Guardar en historial">💾</span></p>
      </div>
    </div>
  );
}
