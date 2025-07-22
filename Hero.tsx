import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  termosPersonalizados from '../../assets/termosPersonalizados.jpeg';
import  collage from '../../assets/collage2.jpg';
import  Img9 from '../../assets/Img9.jpg';
import  redes from '../../assets/redes.jpeg';
import  supercampeones from '../../assets/supercampeones.jpeg'; 


export default function Hero() {
  return (
    <div className="hero bg-primary bg-opacity-10 text-black shadow p-3  rounded-lg flex flex-col items-center justify-center">
      {/* Título y descripción */}
      <h1 className="text-4xl font-bold mb-5">Mile Sublime</h1>
      <h2 className="text-4xl font-bold mb-4">! Lindos Regalos ¡ Como tu lo necesites Sorprende a esa personita especial</h2>
      <p className="text-lg text-gray-700 mb-6">
       📢 ¡Atención emprendedores, empresas y grupos! 📢 Lleva tus productos personalizados al siguiente nivel con nuestra 
       promoción especial por compras en cantidad
              Todo lo que deseas regalar para sorprender a quien amas.
      </p>

      {/* Botón WhatsApp */}
     <a
        href="https://wa.me/3150074646?text=Hola%20quiero%20más%20información"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
      >
        Contáctanos
      </a>

      {/* Carousel con React-Bootstrap */}
      <Carousel className="flex justify-center mt-10 w-full">
        <Carousel.Item>
          <img
           className="d-block w-50 w-md-40 w-lg-25 rounded"
            src={redes}
            alt="Aviso de productos"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
           className="d-block w-50 w-md-40 w-lg-25 rounded"
            src={termosPersonalizados}
            alt="Termos personalizados"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
           className="d-block w-50 w-md-40 w-lg-25 rounded"
            src={Img9}
            alt="Informacion"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-50 w-md-40 w-lg-25 rounded"
            src={collage}
            alt="Camiseta"
          />
        </Carousel.Item>
         <Carousel.Item>
          <img
            className="d-block w-50 w-md-40 w-lg-25 rounded"
            src={supercampeones}
            alt="Camiseta"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}