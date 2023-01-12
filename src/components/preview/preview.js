import React from 'react';
import './preview.css';

export default function Preview(weapon) {
  return (
    <>
      <img className='weapon' src={`${process.env.PUBLIC_URL}/images/${weapon.weapon}.png`} />
    </>
  );
}
