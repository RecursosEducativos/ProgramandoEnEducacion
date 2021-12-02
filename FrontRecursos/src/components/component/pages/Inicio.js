import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


export default function inicio() {
    return (
    

        <div>
<section>
<Carousel fade >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./imagenes/scratch-carrusel1.png"
      alt="Imagen Scratch"
      height="450px"
      width="700px"
      
    />
    <Carousel.Caption>
      <h3 translate="no" id="carrusel">Scratch</h3>
      <p id="carrusel">Aplicación creada por MIT para desarrollar el pensamiento creativo </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./imagenes/snap-carrusel2.jpg"
      alt="Imagen Snap"
      height="450px"
       
    />

    <Carousel.Caption>
      <h3 translate="no" id="carrusel">Snap</h3>
      <p id="carrusel">Aplicación para desarrollar la lógica de programación .</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./imagenes/app-inventor-carrusel3.png"
      alt="Imagen AppInventor2"
       height="450px"
       
    />

    <Carousel.Caption>
      <h3 id="carrusel">AppInventor2</h3>
      <p id="carrusel">Aplicación creada por MIT para desarrollo de aplicaciones móviles</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</section>
<body className="body">
  <p text-align="justify">
<h1 >Hola, queremos que seas parte de este grupo de personas que quieren aportar su conocimiento 
  para enriquecer las prácticas pedagógicas, tenemos a disposición, vídeos, App educativas, tutoriales 
  y fichas descargables que se irán nutriendo a medida que crezca el sitio.</h1>
  </p>
</body>
          </div>
    )
}
