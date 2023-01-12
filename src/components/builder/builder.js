import React from 'react';
import './builder.css';


export default function Builder({ setWeapon, weapon }) {

  // weapons selector options list (option name, then value)
  const weapons = ['Gargoyles Great Axe', 'Great Sword', 'Winged Scythe'];
  const weaponsValue = ['greataxe', 'greatsword', 'scythe'];
  // armor selector options list (option name, then value)
  
  const handleWeaponSelect = (e) => {
    setWeapon(e.target.value);
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