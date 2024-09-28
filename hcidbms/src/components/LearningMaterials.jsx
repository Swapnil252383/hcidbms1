import React from 'react';
import './LearningMaterials.css';

// Sample images; replace these URLs with actual images
const materials = [
  {
    title: 'Alphabet and Numbers',
    description: 'Fun and interactive materials to help children learn letters and numbers.',
    imageUrl: 'https://via.placeholder.com/150?text=Alphabet+and+Numbers',
  },
  {
    title: 'Coloring Books',
    description: 'Coloring books designed to inspire creativity and enhance motor skills.',
    imageUrl: 'https://via.placeholder.com/150?text=Coloring+Books',
  },
  {
    title: 'Interactive Games',
    description: 'Engaging games that promote learning through play.',
    imageUrl: 'https://via.placeholder.com/150?text=Interactive+Games',
  },
  {
    title: 'Storytelling Sessions',
    description: 'Immersive storytelling experiences that foster a love for reading.',
    imageUrl: 'https://via.placeholder.com/150?text=Storytelling+Sessions',
  },
];

function LearningMaterials() {
  return (
    <div className="learning-container">
      <h1>Learning Materials</h1>
      <p>We offer various fun and engaging learning materials for kids.</p>
      <div className="materials-list">
        {materials.map((material, index) => (
          <div className="material-card" key={index}>
            <img src={material.imageUrl} alt={material.title} />
            <h2>{material.title}</h2>
            <p>{material.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningMaterials;
