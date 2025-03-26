import React from 'react';
import { UnitDamageType } from '../../types/cardTypes';

export function CardDamageTableBox(damageBox: UnitDamageType) {
  const dieRolls = damageBox.dieRoll.map(dieRoll => {
    return (
      <div className='justify-self-center'>{dieRoll}</div>
    )
  });


  return (
    <section key={damageBox.damagePlacement}>
      <section className='grid auto-cols-auto grid-flow-col'>
        {dieRolls}
      </section>
      <div className={'justify-self-stretch text-center ' + (damageBox.damagePlacement === 'Dead' ? 'bg-red-200' : 'bg-yellow-200')} >
        {damageBox.damagePlacement}
      </div>
    </section>
  )
}