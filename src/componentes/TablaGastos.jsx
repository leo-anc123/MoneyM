import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Formulario from './Formulario';
import Button from 'react-bootstrap/Button';
import BotonAño from './BotonAños'; // Cambiado de BotonDrop a BotonAño
import '../css/tabla.css';
import SumaPrecios from '../componentes/SumaPrecio';

function TablaGastos({ tipoGasto }) {
  const [itemsPorMes, setItemsPorMes] = useState({});
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(''); // Nuevo estado para almacenar el año seleccionado
  const [filteredItems, setFilteredItems] = useState([]);

  // Cargar datos almacenados al inicio
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(`${tipoGasto}-items`)) || {};
    setItemsPorMes(storedItems);
  }, [tipoGasto]);

  // Actualizar la lista de ítems cuando cambia el mes
  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const storedItems = itemsPorMes[selectedYear + '-' + selectedMonth] || [];
      setFilteredItems(storedItems);
    }
  }, [selectedMonth, selectedYear, itemsPorMes]);

  const agregarItem = (nuevoItem) => {
    const nuevosItemsPorMes = { ...itemsPorMes };

    // Agregar el nuevo ítem al mes actual
    nuevosItemsPorMes[selectedYear + '-' + selectedMonth] = [
      ...(nuevosItemsPorMes[selectedYear + '-' + selectedMonth] || []),
      nuevoItem,
    ];

    // Guardar todos los datos en el localStorage
    localStorage.setItem(`${tipoGasto}-items`, JSON.stringify(nuevosItemsPorMes));

    // Actualizar el estado
    setItemsPorMes(nuevosItemsPorMes);
  };

  const eliminarItem = (index) => {
    const nuevosItemsPorMes = { ...itemsPorMes };
    nuevosItemsPorMes[selectedYear + '-' + selectedMonth] = [
      ...nuevosItemsPorMes[selectedYear + '-' + selectedMonth].slice(0, index),
      ...nuevosItemsPorMes[selectedYear + '-' + selectedMonth].slice(index + 1),
    ];

    localStorage.setItem(`${tipoGasto}-items`, JSON.stringify(nuevosItemsPorMes));
    setItemsPorMes(nuevosItemsPorMes);
  };

  return (
    <div className='contenedor-principal'>
      <BotonAño className="boton-año"
        elAñoSeleccion={(año) => {
          setSelectedYear(año);
          setSelectedMonth('');
        }}
        onSelectYear={(año) => setSelectedYear(año)}
        onSelectMonth={(month) => setSelectedMonth(month)}
      />

      {selectedMonth && selectedYear && (
        <div>
          <Formulario agregarItem={agregarItem} selectedMonth={selectedMonth} selectedYear={selectedYear} />
          <Table striped bordered hover variant="dark" className='tabla'>
            <thead>
              <tr>
                <th className='th-numero'>#Número</th>
                <th>Item</th>
                <th>Precio</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.item}</td>
                  <td>${item.precio}</td>
                  <td>{item.fecha}</td>
                  <td>
                    <Button variant="danger" onClick={() => eliminarItem(index)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <SumaPrecios items={filteredItems} className="suma-precios" />
        </div>
      )}
    </div>
  );
}

export default TablaGastos;



