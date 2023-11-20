import React, { useState, useEffect } from 'react';
import cardsData from '../cards.json';
import SingleCard from './singlecard.jsx';
import shuffle from 'lodash/shuffle';

export default function CardPage() {
  const [flashCards, setFlashCards] = useState([]);

  useEffect(() => {
    // Shuffle the cards when the component mounts
    const shuffledCards = shuffle(
      cardsData.map((card, index) => ({
        id: index,
        front: card.front,
        back: card.back,
      }))
    );
    setFlashCards(shuffledCards);
  }, []);

  if (flashCards.length === 0) {
    return (
      <div className='w-screen h-screen'>
        <div className='flex flex-col items-center justify-center w-full h-full'>
          <p>Loading flashcards...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='w-screen min-h-screen p-5 overflow-y-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {/* Render the SingleCard component */}
        {flashCards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
