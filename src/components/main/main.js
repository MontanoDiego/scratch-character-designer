import React, { useState } from 'react';
import Builder from '../builder/builder.js';
import Preview from '../preview/preview.js';
import './main.css';

export default function Main() {
  const [weapon, setWeapon] = useState('Weapons');
  return (
    <div className='main'>
      <section className='left'>
        <Builder setWeapon={setWeapon} weapon={weapon}/>
      </section>
      <section className='right'>
        <Preview />
      </section>
    </div>
  );
}