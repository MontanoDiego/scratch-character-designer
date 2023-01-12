import React, { useState } from 'react';
import Builder from '../builder/builder.js';
import Preview from '../preview/preview.js';
import Stats from '../stats/stats.js';
import './main.css';

export default function Main() {
  const [weapon, setWeapon] = useState('Weapon');
  const [armor, setArmor] = useState('Armor');
  const [ally, setAlly] = useState('Ally');
  const [catchphrase, setCatchphrase] = useState('');
  const [weaponCount, setWeaponCount] = useState(0);
  const [armorCount, setArmorCount] = useState(0);
  const [allyCount, setAllyCount] = useState(0);

  
  return (
    <div className='main'>
      <section className='left'>
        <Builder 
          setWeapon={setWeapon} 
          setArmor={setArmor} 
          setAlly={setAlly} 
          setWeaponCount={setWeaponCount} 
          weaponCount={weaponCount}
          armorCount={armorCount}
          setArmorCount={setArmorCount}
          allyCount={allyCount}
          setAllyCount={setAllyCount}
          catchphrase={catchphrase}
          setCatchphrase={setCatchphrase}
        />

        <Stats weaponCount={weaponCount} armorCount={armorCount} allyCount={allyCount} catchphrase={catchphrase} />
      </section>
      <section className='right'>
        <Preview weapon={weapon} armor={armor} ally={ally} />
      </section>
    </div>
  );
}