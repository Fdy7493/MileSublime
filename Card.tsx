import { useState } from 'react';
import img1 from '../../assets/imagen5.jpg';
import img2 from '../../assets/img7.jpg';
import img3 from '../../assets/cumpleaños1.jpg';
import img4 from '../../assets/mug1.jpg';


const images = [
  { src: img1, alt: 'Termos  personalizados', caption: 'Termos personalizados.' },
  { src: img2, alt: 'Surtido para toda ocasión', caption: 'Surtido para toda ocasión.' },
  { src: img3, alt: 'Ancheta para cumpleaños', caption: 'Ancheta para cumpleaños.' },
  { src: img4, alt: 'Mugs', caption: 'Mugs personalizados¡¡' },
];

export default function Card (){

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleImage = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

     return (
    <div className="card-container bg-primary bg-opacity-10 text-black shadow p-3">
      {images.map((img, index) => (
        <div key={index} className="image-item">
          <img
            src={img.src}
            alt={img.alt}
            className={`card-image ${activeIndex === index ? 'enlarged' : ''}`}
            onClick={() => toggleImage(index)}
          />
          <p className="caption">{img.caption}</p>
        </div>
      ))}
    </div>
  );
}
