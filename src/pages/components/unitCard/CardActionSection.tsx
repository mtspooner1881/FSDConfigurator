import React from 'react';
import { UnitCardType } from '../../types/unitCardTypes';
import { CardActionItem } from './CardActionItem';


export function CardActionSection(unitCard: UnitCardType) {
  const { equipment } = unitCard;
  const cardAction: React.JSX.Element[] = equipment.map(actionItem => {
    return (
      <CardActionItem {...actionItem} />
    )
  });

  return (
    <section>
      {cardAction}
    </section>
  )
}