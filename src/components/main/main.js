import React, { useState } from 'react';
import Builder from '../builder/builder.js';
import Preview from '../preview/preview.js';
import './main.css';

export default function Main() {
  const [weapon, setWeapon] = useState('Weapon');
  const [armor, setArmor] = useState('Armor');
  const [ally, setAlly] = useState('Ally');

  return (
    <div className='main'>
      <section className='left'>
        <Builder setWeapon={setWeapon} setArmor={setArmor} setAlly={setAlly} />
      </section>
      <section className='right'>
        <Preview weapon={weapon} armor={armor} ally={ally} />
      </section>
    </div>
  );
}