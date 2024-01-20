import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BotonDrop({ añoSeleccionado, onSelectMonth, onMostrarAños }) {

  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleSelectMonth = (month) => {
    onSelectMonth(month);
    setSelectedMonth(month);
  };

  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  return (
    <Dropdown className='boton-mes'> 
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {añoSeleccionado ? añoSeleccionado : 'Año'} - {selectedMonth ? selectedMonth : 'Mes'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {meses.map((mes, index) => (
          <Dropdown.Item key={index} onClick={() => handleSelectMonth(mes)}>
            {mes}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>

      <Dropdown.Item onClick={onMostrarAños}></Dropdown.Item>
    </Dropdown>
  );
}

export default BotonDrop;




