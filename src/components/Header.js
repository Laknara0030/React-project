import React from 'react';
import './Header.css';
import MemesGrid from './MemesGrid';

const Header = () => {
  return (
    <div className="main-container">
        <div className="header">
            <h1>Break Up Your Doom Scrolling</h1>
            <p>This Way For Save Hacks, Memes, And Rants Against Capitalism →</p>
        </div>
        <div className="memes-grid-container">
            <MemesGrid />
        </div>
    </div>
    
    
  );
};

export default Header;