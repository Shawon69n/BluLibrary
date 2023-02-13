import React, { useState } from 'react';
import './FlipCard.css'
const FlipCard = () => {
    const [flipped, setFlipped] = useState(false);
    return (
        <div>
    <div className="card-container" onMouseEnter={() => setFlipped(!flipped)}  onMouseLeave={() => setFlipped(!flipped)}
    style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
    >
      <div className="front">
        Front Content
      </div>
      <div className="back">
        Back Content
      </div>
    </div>
        </div>
    );
};

export default FlipCard;