import React from 'react';
import { UnitCardType } from '../../types/unitCardTypes';

export function CardHeaderSection(unitCard: UnitCardType): React.JSX.Element {
  return (
    <section className='grid justify-items-center grid-cols-1 col-span-full'>
      <div className='justify-self-end'>{unitCard.points} PTS</div>
      <div>
        <h3 className='text-3xl'>{unitCard.name}</h3>
      </div>
      <div className='text-lg'>{unitCard.description}</div>
    </section>
  )
}