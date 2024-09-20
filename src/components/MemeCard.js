import React from 'react';
import './MemeCard.css';

const MemeCard = ({ src, alt, description }) => {
  return (
    <div className="meme-card">
      <img className= "rounded-image" src={src} alt={alt} />
      {/*<p>{description}</p>*/}
    </div>
  );
};

export default MemeCard;