import React from 'react';
export function TipoPropiedad({datos, setPropiedad}) {
    const handleChange = (e) => {
        setPropiedad(e.target.value)};
    return(
        <div>
            <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
                <select id="propiedad" onChange={handleChange}>
                    <option disabled>...</option>
                        {datos.map((item, index) => (
                    <option key={index} value={item.tipo}>
                        {item.tipo}
                    </option>
                    ))} 
                </select>                   
        </div>
    );
}
export default TipoPropiedad;

