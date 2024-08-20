import React, { useState } from 'react';
import './Carousel.css';
import partner1 from '../../assets/partner1.jpg';
import partner2 from '../../assets/partner2.jpg';
import partner3 from '../../assets/partner3.jpg';
import partner4 from '../../assets/partner4.jpg';
import partner5 from '../../assets/partner5.jpg';
import partner6 from '../../assets/partner6.jpg';
import partner7 from '../../assets/partner7.jpg';
import partner8 from '../../assets/partner8.jpg';

const logos = [
    { src: partner1, alt: 'logo1' },
    { src: partner2, alt: 'logo2' },
    { src: partner3, alt: 'logo3' },
    { src: partner4, alt: 'logo4' },
    { src: partner5, alt: 'logo5' },
    { src: partner6, alt: 'logo6' },
    { src: partner7, alt: 'logo7' },
    { src: partner8, alt: 'logo8' },
    { src: partner1, alt: 'logo1' },
    { src: partner2, alt: 'logo2' },
    { src: partner3, alt: 'logo3' },

];

const Carousel = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="carousel">
            <div className="carousel-track">
                {logos.map((logo, index) => (
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
