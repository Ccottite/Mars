import React, { useState } from 'react';
import './List.css';
import './Products.css'; // Añadir el CSS de ProductCategories aquí

const categories = [
    {
        id: 1,
        name: 'Hilos',
        description: 'Información sobre Hilos o pequeño texto.',
        products: [
            { id: 1, name: 'Hilo de algodón', image: 'https://via.placeholder.com/100' },
            { id: 2, name: 'Hilo de algodón', image: 'https://via.placeholder.com/100' },
            { id: 3, name: 'Hilo de algodón', image: 'https://via.placeholder.com/100' },
            { id: 4, name: 'Hilo de algodón', image: 'https://via.placeholder.com/100' },
            { id: 5, name: 'Hilo de algodón', image: 'https://via.placeholder.com/100' },
            { id: 6, name: 'Hilo de algodón', image: 'https://via.placeholder.com/100' },
            { id: 7, name: 'Hilo de algodón', image: 'https://via.placeholder.com/100' },
            { id: 8, name: 'Hilo de algodón', image: 'https://via.placeholder.com/100' }
        ],
        image: 'https://via.placeholder.com/400', // Reemplaza con la URL de la imagen de Hilos
    },
    {
        id: 2,
        name: 'Refacciones',
        description: 'Información sobre Refacciones.',
        products: [
            { id: 1, name: 'Refacción A', image: 'https://via.placeholder.com/100' },
            { id: 2, name: 'Refacción B', image: 'https://via.placeholder.com/100' },
            { id: 3, name: 'Refacción A', image: 'https://via.placeholder.com/100' },
            { id: 4, name: 'Refacción B', image: 'https://via.placeholder.com/100' },
            { id: 5, name: 'Refacción A', image: 'https://via.placeholder.com/100' },
            { id: 6, name: 'Refacción B', image: 'https://via.placeholder.com/100' },
            { id: 7, name: 'Refacción A', image: 'https://via.placeholder.com/100' },
            { id: 8, name: 'Refacción B', image: 'https://via.placeholder.com/100' }
        ],
        image: 'https://via.placeholder.com/400', // Reemplaza con la URL de la imagen de Refacciones
    },
    {
        id: 3,
        name: 'Cierres',
        description: 'Información sobre Cierres.',
        products: [
            { id: 1, name: 'Cierre metálico', image: 'https://via.placeholder.com/100' },
            { id: 2, name: 'Cierre de plástico', image: 'https://via.placeholder.com/100'},
            { id: 3, name: 'Cierre metálico', image: 'https://via.placeholder.com/100' },
            { id: 4, name: 'Cierre de plástico', image: 'https://via.placeholder.com/100'},
            { id: 5, name: 'Cierre metálico', image: 'https://via.placeholder.com/100' },
            { id: 6, name: 'Cierre de plástico', image: 'https://via.placeholder.com/100'},
            { id: 7, name: 'Cierre metálico', image: 'https://via.placeholder.com/100' },
            { id: 8, name: 'Cierre de plástico', image: 'https://via.placeholder.com/100'}
        ],
        image: 'https://via.placeholder.com/400', // Reemplaza con la URL de la imagen de Cierres
    },
];

const ProductCategories = ({ products }) => {
    return (
        <div className="categories-container">
            {products.map((product) => (
                <div key={product.id} className="category-card">
                    <div className="image-container">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <h3>{product.name}</h3>
                </div>
            ))}
        </div>
    );
};

const ImageSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCardClick = (category) => {
        setSelectedCategory(category);
    };

    const handleCloseModal = () => {
        setSelectedCategory(null);
    };

    return (
        <div className="image-section">
            {categories.map((category) => (
                <div key={category.id} className="image-card" onClick={() => handleCardClick(category)}>
                    <img src={category.image} alt={category.name} className="category-image" />
                    <div className="overlay">
                        <div className="text">{category.name}</div>
                    </div>
                </div>
            ))}

            {/* Modal */}
            {selectedCategory && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{selectedCategory.name}</h2>
                        <p>{selectedCategory.description}</p>
                        {/* Componente de productos dentro del modal */}
                        <ProductCategories products={selectedCategory.products} />
                        <button className="close-button" onClick={handleCloseModal}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageSection;
