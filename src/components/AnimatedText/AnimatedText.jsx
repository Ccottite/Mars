import React, { useEffect, useState } from 'react';
import './AnimatedText.css';

const texts = ['Hilos Lobo','Familia', 'Calidad', '100% Mexicanos', 'Accesibles'];

const AnimatedText = () => {
    const [text, setText] = useState(texts[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setText(texts[(index + 1) % texts.length]);
        }, 4000); // Cambia el texto cada 4 segundos

        return () => clearInterval(interval);
    }, [index]);

    return <span>{text}</span>;
};

export default AnimatedText;
