import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import BotonDrop from './BotonDrop'; // Importa el componente BotonDrop

function BotonAño({ elAñoSeleccion, onSelectYear, onSelectMonth }) {

  const [añoSeleccionado, setAñoSeleccionado] = useState(null);
  const [mostrarAños, setMostrarAños] = useState(true);

  const handleAñoSeleccion = (año) => {
    elAñoSeleccion(año);
    setAñoSeleccionado(año);
    setMostrarAños(false);
  }

  const handleAñoPersonalizado = () => {
    const añoPersonalizado = prompt('Ingrese el año:');
    if (añoPersonalizado && !isNaN(añoPersonalizado)) {
      handleAñoSeleccion(parseInt(añoPersonalizado));
      onSelectYear(añoPersonalizado);
    }
  }

  const handleMostrarAños = () => {
    setMostrarAños(true);
  }

  return (
    <>
      {mostrarAños && (
        <Dropdown className="boton-año d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Año
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleAñoSeleccion(2022)}>2022</Dropdown.Item>
            <Dropdown.Item onClick={() => handleAñoSeleccion(2023)}>2023</Dropdown.Item>
            <Dropdown.Item onClick={() => handleAñoSeleccion(2024)}>2024</Dropdown.Item>
            <Dropdown.Item onClick={() => handleAñoSeleccion(2025)}>2025</Dropdown.Item>
            <Dropdown.Item onClick={() => handleAñoSeleccion(2026)}>2026</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleAñoPersonalizado}>Año Personalizado</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}

      {!mostrarAños && (
        <BotonDrop añoSeleccionado={añoSeleccionado} onSelectMonth={onSelectMonth} onMostrarAños={handleMostrarAños} />
      )}
    </>
  );
}

export default BotonAño;









