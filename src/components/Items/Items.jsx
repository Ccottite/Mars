import React, { useState } from 'react';
import './Items.css';

// Lista de artículos
const articles = [
    {
        id: 1,
        title: '¿Como puedo cambiar una aguja?',
        category: 'Tutoriales',
        time: 'Hace 12 horas',
        image: 'https://via.placeholder.com/400x400',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo temporibus vero? Ipsam inventore quasi corrupti aliquam qui quod quia.',
        user: {
            name: 'ING Nato',
            avatar: 'https://via.placeholder.com/50', // Imagen del avatar
            date: 'Septiembre 29'
        },
    },
    {
        id: 2,
        title: '¿Que hilo debo utilizar para este tipo de tela?',
        category: 'Guia de inicio',
        time: 'Hace 11 horas',
        image: 'https://via.placeholder.com/400x400',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo temporibus vero? Ipsam inventore quasi corrupti aliquam qui quod quia.',
        user: {
            name: 'ING Nato',
            avatar: 'https://via.placeholder.com/50', // Imagen del avatar
            date: 'Abril 29'
        },
    },
    {
        id: 3,
        title: 'Herramientas necesarias para mantenimiento',
        category: 'Guia de inicio',
        time: 'Hace 10 horas',
        image: 'https://via.placeholder.com/400x400',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo temporibus vero? Ipsam inventore quasi corrupti aliquam qui quod quia.',
        user: {
            name: 'ING Nato',
            avatar: 'https://via.placeholder.com/50', // Imagen del avatar
            date: 'Agosto 15'
        },
    },
    // Puedes agregar más artículos en el futuro
];

// Componente para mostrar cada tarjeta de artículo
const ArticleCard = ({ article, onShowMore }) => {
    return (
        <div className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-info">
                <div className="article-header">
                    <span className="category-tag">{article.category}</span>
                    <span className="time-tag">{article.time}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <button className="more-button" onClick={() => onShowMore(article)}>
                    Ver más
                </button>

                {/* Sección de usuario, fecha y comentarios */}
                <div className="article-user-info">
                    <img src={article.user.avatar} alt={article.user.name} className="user-avatar" />
                    <div className="user-details">
                        <strong>{article.user.name}</strong>
                        <div className="user-meta">
                            <span className="user-date"><i className="fa fa-calendar"></i> {article.user.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Componente principal
const Articles = () => {
    const [selectedArticle, setSelectedArticle] = useState(null); // Estado para controlar el popup

    // Función para abrir el popup con más información del artículo
    const handleShowMore = (article) => {
        setSelectedArticle(article);
    };

    // Función para cerrar el popup
    const handleClosePopup = () => {
        setSelectedArticle(null);
    };

    return (
        <div>
            <div className="articles-container">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} onShowMore={handleShowMore} />
                ))}
            </div>

            {/* Popup para mostrar más información */}
            {selectedArticle && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>{selectedArticle.title}</h3>
                        <p>{selectedArticle.content}</p>
                        <button className="close-button" onClick={handleClosePopup}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Articles;
