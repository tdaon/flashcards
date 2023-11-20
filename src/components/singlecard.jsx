import React from 'react';
import { useState } from 'react';

export default function SingleCard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const renderText = (text) => {
    const parts = text.split(/(\*.*?\*)/).filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return <strong key={index}>{part.slice(1, -1)}</strong>;
      } else {
        return part;
      }
    });
  };

  return (
    <div
      onClick={handleCardClick}
      className={`${isFlipped ? 'overflow-auto' : 'overflow-none'} flex items-center justify-center shadow-lg rounded-xl p-20 w-90 m-0 h-32 ${
        isFlipped ? 'opacity-70' : 'bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'
      }`}
    >
      <h1 className={`text-center ${isFlipped ? 'h-full' : null}`}>
        {isFlipped ? renderText(card.back) : renderText(card.front)}
      </h1>
    </div>
  );
}
