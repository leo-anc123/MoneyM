// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Carrousel from './componentes/Carrousel';
import NavBarMenu from './componentes/NavBar';
import './css/Navbar.css';


import GastosPersonales from './pages/GastosPersonales';
import GastosEsenciales from './pages/GastosEsenciales';
import Deudas from './pages/Deudas';
import Inversiones from './pages/Inversiones';

function App() {
  const imagenGastosPersonales = '/imagenes/img/Gastos-personales.jpg';
  const imagenGastosEsenciales = '/imagenes/img/Gastos-esenciales.jpg';
  const imagenDeudas = '/imagenes/img/Deudas y obligaciones.jpg';
  const imagenInversiones = '/imagenes/img/Ahorros e inversiones.jpg';

  return (
    <div className="App">
      <BrowserRouter>
        <NavBarMenu />
        <Routes>
          <Route path="/" element={<Carrousel />} />
          <Route
            path="/gastos-personales"
            element={<GastosPersonales titulo="Gastos personales" imagen={imagenGastosPersonales} />}
          />
          <Route
            path="/gastos-esenciales"
            element={<GastosEsenciales titulo="Gastos Esenciales" imagen={imagenGastosEsenciales} />}
          />
          <Route path="/deudas" element={<Deudas titulo="Deudas" imagen={imagenDeudas} />} />
          <Route path="/inversiones" element={<Inversiones titulo="Inversiones" imagen={imagenInversiones} />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

