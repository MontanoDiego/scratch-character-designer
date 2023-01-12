import React, { useState } from 'react';
import Builder from '../builder/builder.js';
import Preview from '../preview/preview.js';
import './main.css';

export default function Main() {
  const [weapon, setWeapon] = useState('Weapon');
  return (
    <div className='main'>
      <section className='left'>
        <Builder setWeapon={setWeapon}/>
      </section>
      <section className='right'>
        <Preview weapon={weapon} />
      </section>
    </div>
  );
}