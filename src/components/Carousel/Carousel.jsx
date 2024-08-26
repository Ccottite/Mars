import React, { useState } from 'react';
import './Carousel.css';
import partner1 from '../../assets/logo-reflex.png';
import partner2 from '../../assets/KINGTEX.png';
import partner3 from '../../assets/STRONG.png';
import partner4 from '../../assets/LOBO.png';
import partner5 from '../../assets/BEKA.png';
import partner6 from '../../assets/abc.png';
import partner7 from '../../assets/CIERRES TAURO.png';
import partner8 from '../../assets/GROZ.png';
import partner9 from '../../assets/marquesinas amalucan.png';

const logos = [
    { src: partner1, alt: 'logo1' },
    { src: partner2, alt: 'logo2' },
    { src: partner3, alt: 'logo3' },
    { src: partner4, alt: 'logo4' },
    { src: partner5, alt: 'logo5' },
    { src: partner6, alt: 'logo6' },
    { src: partner7, alt: 'logo7' },
    { src: partner8, alt: 'logo8' },
    { src: partner9, alt: 'logo1' },

];

const Carousel = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="carousel">
            <div className="carousel-track">
                {logos.concat(logos).map((logo, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${hoveredIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
