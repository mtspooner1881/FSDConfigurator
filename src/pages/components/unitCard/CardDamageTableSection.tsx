import React from 'react';
import { CardDamageTableBox } from './CardDamageTableBox';
import { UnitCardType } from '../../types/unitCardTypes';

export function CardDamageTableSection(unitCard: UnitCardType): React.JSX.Element {
  const renderdDamageCards: React.JSX.Element[] = unitCard.damage.map(damage => {
      return <CardDamageTableBox dieRoll={damage.dieRoll} damagePlacement={damage.damagePlacement}/>
    })
  
  return (
    <section className='grid auto-cols-auto grid-flow-col justify-items-stretch gap-x-5 pr-5 pl-5'>
      {renderdDamageCards}
    </section>
  )
}