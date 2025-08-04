import React from 'react';

const cardData = [
  {
    id: 1,
    title: 'Beautiful Landscape',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
  },
  {
    id: 2,
    title: 'Space Galaxy',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20240715/pngtree-galactic-panorama-a-journey-through-space-image_15994831.jpg',
  },
  {
    id: 3,
    title: 'Ocean Vibes',
    image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
  },
  {
    id: 4,
    title: 'Sunset Glory',
    image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
  },
];

function Cards() {
  return (
    <div className="card-container">
      {cardData.map((card) => (
        <div className="img-card" key={card.id}>
          <img src={card.image} alt={card.title} />
          <div className="card-overlay">
            <h3>{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
