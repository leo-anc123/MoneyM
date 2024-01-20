// SumaPrecios.jsx
import React, { useState, useEffect } from 'react';
import '../css/suma-precios.css'

function SumaPrecios({ items }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcular el total cuando los items cambien
    const calculaTotal = () => {
      const suma = items.reduce((acc, item) => acc + parseFloat(item.precio), 0);
      setTotal(suma.toFixed(2)); // Redondear a dos decimales
    };

    calculaTotal();
  }, [items]);

  return (
    <div className='suma-precios'>
      <h3>Total de Precios</h3>
      <p>{`$${total}`}</p>
    </div>
  );
}

export default SumaPrecios;
