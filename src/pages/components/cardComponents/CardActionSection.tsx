import React from 'react';
import { UnitCardType } from '../../types/cardTypes';
import { CardActionItem } from '../cardComponents/CardActionItem';


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