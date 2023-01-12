import React from 'react';
import './builder.css';


export default function Builder({ setWeapon, weapon, setArmor, armor, ally, setAlly, catchphrase, setCatchphrase, setWeaponCount, weaponCount, armorCount, setArmorCount, allyCount, setAllyCount }) {

  // weapons selector options list (option name, then value)
  const weapons = ['Gargoyles Great Axe', 'Great Sword', 'Winged Scythe'];
  const weaponsValue = ['greataxe', 'greatsword', 'scythe'];
  // armor selector options list (option name, then value)
  const armors = ['Night\'s Calvary Armor', 'Albinauric Armor', 'Blaidd\'s Armor'];
  const armorsValue = ['night', 'albi', 'blaidd'];
  // ally selector options list (option name, then value)
  const allies = ['Mimic Tear', 'Ancestral Follower', 'Spirit Jellyfish'];
  const alliesValue = ['mimic', 'ancestor', 'jelly'];
  
  const handleWeaponSelect = (e) => {
    setWeapon(e.target.value);
    setWeaponCount(weaponCount + 1);
  };
  const handleArmorSelect = (e) => {
    setArmor(e.target.value);
    setArmorCount(armorCount + 1);
  };
  const handleAllySelect = (e) => {
    setAlly(e.target.value);
    setAllyCount(allyCount + 1);
  };
  

  return (
    <>
      <h2>Builder!</h2>
      <h3>weapon!</h3>
      <select value={weapon} onChange={handleWeaponSelect}>
        {weaponsValue.map((value, index) => (
          <option key={index} value={value} >
            {weapons[index]}</option>
        ))}
      </select>
      
      <h3>armor!</h3>
      <select value={armor} onChange={handleArmorSelect}>
        {armorsValue.map((value, index) => (
          <option key={index} value={value} >
            {armors[index]}</option>
        ))}
      </select>
      
      <h3>ally!</h3>
      <select value={ally} onChange={handleAllySelect}>
        {alliesValue.map((value, index) => (
          <option key={index} value={value} >
            {allies[index]}</option>
        ))}
      </select>

      <h3>Catchphrase!</h3>
      <input></input>
      <button>Submit</button>
    </>
  );
}