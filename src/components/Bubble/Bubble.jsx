import React from 'react';
import './Bubble.css';

const PromotionsBubble = () => {
  const handleDownload = () => {
    const pdfUrl = '/ruta/del/archivo.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Promociones.pdf';
    link.click();
  };

  return (
    <div className="bubble-container" onClick={handleDownload}>
      <span>Promociones</span>
    </div>
  );
};

export default PromotionsBubble;
