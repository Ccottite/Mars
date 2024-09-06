import React from 'react';
import Card from '../Card/Card';

const CardsGrid = () => {
    const cardsData = [
        {
            icon: 'path/to/icon1.png',
            title: 'titulo de ejemplo',
            description: 'texto de ejemplo aqui ira la descripxion del producto',
            link: '#'
        },
        {
            icon: 'path/to/icon2.png',
            title: 'titulo de ejemplo',
            description: 'texto de ejemplo aqui ira la descripxion del producto',
            link: '#'
        },
        {
            icon: 'path/to/icon3.png',
            title: 'titulo de ejemplo',
            description: 'texto de ejemplo aqui ira la descripxion del producto',
            link: '#'
        },
        {
            icon: 'path/to/icon3.png',
            title: 'titulo de ejemplo',
            description: 'texto de ejemplo aqui ira la descripxion del producto',
            link: '#'
        },
        {
            icon: 'path/to/icon3.png',
            title: 'titulo de ejemplo',
            description: 'texto de ejemplo aqui ira la descripxion del producto',
            link: '#'
        },
        {
            icon: 'path/to/icon3.png',
            title: 'titulo de ejemplo',
            description: 'texto de ejemplo aqui ira la descripxion del producto',
            link: '#'
        },
        {
            icon: 'path/to/icon3.png',
            title: 'titulo de ejemplo',
            description: 'texto de ejemplo aqui ira la descripxion del producto',
            link: '#'
        },
        {
            icon: 'path/to/icon3.png',
            title: 'titulo de ejemplo',
            description: 'texto de ejemplo aqui ira la descripxion del producto',
            link: '#'
        },

    ];

    return (
        <div style={styles.gridContainer}>
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                />
            ))}
        </div>
    );
};

const styles = {
    gridContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '40px',
    },
};

export default CardsGrid;
