import { useState } from 'react';
import img1 from '../assets/jdmlog.jpeg';
import img2 from '../assets/termofijadora.jpeg';
import img3 from '../assets/termofigadora1.jpeg';
import img4 from '../assets/termofijadoramugs.jpeg';


const images = [
  { src: img1, alt: 'Producto 1', caption: ' JDM Insumos' },
  { src: img2, alt: 'Producto 2', caption: 'Maquina termofijadora' },
  { src: img3, alt: 'Producto 3', caption: 'Insumos para Maquinas Termofijadoras' },
  { src: img4, alt: 'Producto 4', caption: 'Termofijadora Mugs' },
];

export default function Dashboard() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleImage = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="container mx-auto p-4">
      <a href="https://www.instagram.com/jdm_insumos_y_variedades/?utm_source=qr&igsh=dGg0ejkxeGQ4dmRn#">
      Sponsored By JDM Insumos
      </a>
      <h1 className="text-3xl font-bold mb-6"></h1>
      <p>© 2025</p>
      <div className="dashboard-card bg-primary bg-opacity-10 p-4 rounded shadow">
        <div className="image-row">
          {images.map((img, index) => (
            <div key={index} className="image-item">
              
              <img
                src={img.src}
                alt={img.alt}
                className={`dashboard-image ${activeIndex === index ? 'enlarged' : ''}`}
                onClick={() => toggleImage(index)}
                 
              />
              <p className="caption">{img.caption}</p>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
