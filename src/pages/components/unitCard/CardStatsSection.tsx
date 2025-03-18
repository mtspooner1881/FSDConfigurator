import React from 'react';
import { UnitCardType } from '../../types/unitCardTypes';

export function CardStatsSection(unitCard: UnitCardType): React.JSX.Element {
  console.log(unitCard);
  return (
    <section className='grid justify-items-center grid-cols-4'>
        <section>
          <div>Cmd</div>
          <div>{unitCard.stats.cmd}</div>
        </section>
        <section>
          <div>Def</div>
          <div>{unitCard.stats.defense}+</div>
        </section>
        <section>
          <div>Save</div>
          <div>{unitCard.stats.save}</div>
        </section>
        <section>
          <div>Move</div>
          <div>{unitCard.stats.move}DU</div>
        </section>
      </section>
  )
}