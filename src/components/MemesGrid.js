import React from 'react';
import MemeCard from './MemeCard';
import './MemesGrid.css';

const memes = [
  { id: 1, src: 'image1.png', alt: 'meme1', description: 'my last $30' },
  { id: 2, src: 'image2.png', alt: 'meme2', description: 'hundreds of ice lattes' },
  { id: 3, src: 'image3.png', alt: 'meme3', description: 'remembering I have a Cleo Card' },
  { id: 4, src: 'image4.png', alt: 'meme4', description: 'when you pay rent on time' },
];

const MemesGrid = () => {
  return (
    <div className="memes-grid">
      {memes.map((meme) => (
        <MemeCard key={meme.id} src={meme.src} alt={meme.alt} description={meme.description} />
      ))}
    </div>
  );
};

export default MemesGrid;