import React from 'react';
import './stats.css';

export default function Stats({ weaponCount, armorCount, allyCount, catchphrase }) {
  return (
    <>
      <h3>Stats!</h3>
      <p className='stat-list'>You have changed the weapon {weaponCount} many times, <br></br>the armor {armorCount} many times,<br></br> and the ally {allyCount} many times!</p>
      <h4>Catchphrases!</h4>
      <ul className='list-container'>
        {Object.entries(catchphrase).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </>
  );
}
