// Deudas.jsx
import React from 'react';
import TablaGastos from '../componentes/TablaGastos';
import '../css/tabla.css'


function Deudas({ titulo, imagen }) {
  return (
    <div>
      <h2 className='titulo-page'>{titulo}</h2>
      {/* Agrega la imagen usando la prop 'imagen' */}
      <img src={imagen} alt={titulo} className='img'/>
      <TablaGastos tipoGasto={titulo} />
    </div>
  );
}

export default Deudas;