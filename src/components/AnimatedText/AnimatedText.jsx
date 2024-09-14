import React, { useEffect, useState } from 'react';
import './AnimatedText.css';

const texts = ['Hilos Lobo', 'Familia', 'Calidad', '100% Mexicanos', 'Accesibles'];

const AnimatedText = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 150; // Velocidad de escritura
    const pauseAfterTyping = 2000; // Pausa después de escribir la palabra completa

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[index];

            if (!isDeleting && charIndex < currentText.length) {
                // Agregar la letra siguiente
                setText((prev) => prev + currentText[charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                // Borrar la última letra
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else if (!isDeleting && charIndex === currentText.length) {
                // Pausa al final de la palabra
                setTimeout(() => setIsDeleting(true), pauseAfterTyping);
            } else if (isDeleting && charIndex === 0) {
                // Cambiar a la siguiente palabra y empezar a escribir
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? 100 : typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <div className="animated-text">
            <span>{text}</span>
            <span className="cursor"></span>
        </div>
    );
};

export default AnimatedText;
