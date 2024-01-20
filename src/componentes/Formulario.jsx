import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import '../css/formulario.css';

function Formulario({ agregarItem }) {
  const [item, setItem] = useState('');
  const [precio, setPrecio] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verifica que los campos no estén vacíos antes de agregar el item
    if (item.trim() === '' || precio.trim() === '' || fecha.trim() === '') {
      return;
    }

    // Crea un nuevo item con los datos del formulario
    const nuevoItem = {
      item,
      precio,
      fecha,
    };

    // Llama a la función para agregar el nuevo item
    agregarItem(nuevoItem);

    // Limpia los campos del formulario después de agregar el item
    setItem('');
    setPrecio('');
    setFecha('');
  };

  return (
    <Form className='formulario' onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Control
            placeholder="Item"
            className='col-form'
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Precio"
            className='col-form'
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Fecha"
            className='col-form'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </Col>
        <Button variant="primary" type="submit" className='col-button'>
          Agregar
        </Button>
      </Row>
    </Form>
  );
}

export default Formulario;
