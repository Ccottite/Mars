import React from 'react';


const Card = ({ icon, title, description, link }) => {
  return (
    <div style={styles.card}>
      <div style={styles.iconContainer}>
        <img src={icon} alt={title} style={styles.icon} />
      </div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <a href={link} style={styles.link}>Saber más →</a>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#202020',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    color: '#fff',
    margin: '20px'
  },
  iconContainer: {
    marginBottom: '15px',
  },
  icon: {
    width: '40px',
    height: '40px',
  },
  title: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    marginBottom: '20px',
    color: '#b3b3b3'
  },
  link: {
    fontSize: '14px',
    color: '#eb3434',
    textDecoration: 'none',
  },
};

export default Card;
