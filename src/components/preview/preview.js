import React from 'react';
import './preview.css';

export default function Preview({ weapon, armor, ally }) {
  return (
    <>
      <h2>Preview!</h2>
      <img className='weapon' src={`${process.env.PUBLIC_URL}/images/${weapon}.png`} />
      <img className='armor' src={`${process.env.PUBLIC_URL}/images/${armor}.png`} />
      <img className='ally' src={`${process.env.PUBLIC_URL}/images/${ally}.png`} />
    </>
  );
}
