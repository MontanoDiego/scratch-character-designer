import React from 'react';
import './builder.css';


export default function Builder({ setWeapon, weapon, setArmor, armor }) {

  // weapons selector options list (option name, then value)
  const weapons = ['Gargoyles Great Axe', 'Great Sword', 'Winged Scythe'];
  const weaponsValue = ['greataxe', 'greatsword', 'scythe'];
  // armor selector options list (option name, then value)
  const armors = ['Night\'s Calvary Armor', 'Albinauric Armor', 'Blaidd\'s Armor'];
  const armorsValue = ['night', 'albi', 'blaidd'];
  
  const handleWeaponSelect = (e) => {
    let targetValue = e.target.value;
    setWeapon(targetValue);
  };
  const handleArmorSelect = (e) => {
    let targetValue = e.target.value;
    setArmor(targetValue);
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

      <select value={armor} onChange={handleArmorSelect}>
        {armorsValue.map((value, index) => (
          <option key={index} value={value} >
            {armors[index]}</option>
        ))}
      </select>

    </>
  );
}