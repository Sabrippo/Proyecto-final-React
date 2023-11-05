import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Historial() {
    const Navigate = useNavigate();
    const [cotizaciones, setcotizaciones] = useState([]);
    useEffect(() => {
          const cotizacionesGuardadas =
          JSON.parse(localStorage.getItem("cotizacion")) || [];
          setcotizaciones(cotizacionesGuardadas);
        }, []);
    const borrar = () => {localStorage.clear(); setcotizaciones([])}; 
    
    return (
        <div>
            <h1 className="center separador">Ver Historial 📋</h1>
            <div className=" center div-cotizador">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha de cotización</th>
                            <th>Propiedad</th>
                            <th>Ubicación</th>
                            <th>Metros cuadrados</th>
                            <th>Póliza mensual</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cotizaciones.map(
                        ({ fecha, propiedad, ubicacion, mts2, poliza }, index) => (
                        <tr key={index}>
                            <td>{fecha}</td>
                            <td>{propiedad}</td>
                            <td>{ubicacion}</td>
                            <td>{mts2}</td>
                            <td>{poliza}</td>
                        </tr>))}
                    </tbody>
                </table>
                <div className="center separador">
                    <button onClick={() => Navigate(-1)} >VOLVER</button>
                    <button onClick={borrar}style={{ marginLeft: '10px' }}>Restaurar historial</button>
                </div>
            </div>
        </div>
    )
}
export default Historial;
