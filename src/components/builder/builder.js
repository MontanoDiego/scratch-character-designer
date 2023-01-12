import React from 'react';
import './builder.css';


export default function Builder({ setWeapon, weapon }) {
  const weapons = ['Gargoyles Great Axe', 'Great Sword', 'Winged Scythe'];
  const weaponsValue = ['greataxe', 'greatsword', 'scythe'];
  
  const handleWeaponSelect = (e) => {
    setWeapon(e.target.value);
    console.log(weapon);
  };
  

  return (
    <>
      <h2>Builder!</h2>
      <select value={weapon} onChange={handleWeaponSelect}>
        {weaponsValue.map((value, index) => (
          <option key={index} value={value} >
            {weapons[index]}</option>
        ))}
      </select>

    </>
  );
}