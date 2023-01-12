import React from 'react';
import './preview.css';

export default function Preview({ weapon, armor }) {
  return (
    <>
      <img className='weapon' src={`${process.env.PUBLIC_URL}/images/${weapon}.png`} />
      <img className='armor' src={`${process.env.PUBLIC_URL}/images/${armor}.png`} />
      {/* {console.log(`${process.env.PUBLIC_URL}/images/${armor.armor}.png`)} */}
    </>
  );
}
