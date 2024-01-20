// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel } from 'react-bootstrap';
import '../css/main-section.css'



const Carrousel = () => {
  // const carouselSettings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 1000,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,}

  return (
    <main className='menu-principal'>
      <div className="caja-bienvenida">
        <h3>Bienvenido</h3>
        <p>"Descubre el poder de tomar el control de tus finanzas personales en Money Mente. Aquí, transformamos tus sueños en metas alcanzables con estrategias inteligentes. Desde el presupuesto hasta la inversión, estamos comprometidos a guiarte en cada paso hacia una vida financiera más segura y próspera. ¡Empieza hoy a construir el futuro que mereces!"</p>
      </div>

      <Carousel className='carousel'>
        <Carousel.Item className='item'>
          <img
            className="d-block w-100"
            src="imagenes/img/Gastos-esenciales.jpg"
            alt="Gastos esenciales"
          />
          <Carousel.Caption  className='caption'>
            <h4>Gastos esenciales</h4>
            <button>Ver</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='item'>
          <img
            className="d-block w-100"
            src="imagenes/img/Gastos-personales.jpg"
            alt="Gastos personales"
          />
          <Carousel.Caption className='caption'>
            <h4>Gastos personales</h4>
            <button>Ver</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='item'>
          <img
            className="d-block w-100"
            src="imagenes/img/Ahorros e inversiones.jpg"
            alt="Ahorros e inversiones"
          />
          <Carousel.Caption className='caption'>
            <h4>Ahorros e inversiones</h4>
            <button>Ver</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='item'>
          <img
            className="d-block w-100"
            src="imagenes/img/Deudas y obligaciones.jpg"
            alt="Gastos personales"
          />
          <Carousel.Caption className='caption'>
            <h4>Deudas y obligaciones</h4>
            <button>Ver</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    </main>
  )
};


export default Carrousel;
