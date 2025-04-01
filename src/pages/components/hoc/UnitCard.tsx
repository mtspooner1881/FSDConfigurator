import React from 'react';
import { UnitCardType } from '../../types/cardTypes';
import { CardHeaderSection } from '../cardComponents/CardHeaderSection';
import { CardStatsSection } from '../cardComponents/CardStatsSection';
import { CardDamageTableSection } from '../cardComponents/CardDamageTableSection';
import { CardActionSection } from '../cardComponents/CardActionSection';
import { CardAbilitiesSection } from '../cardComponents/CardAbilitiesSection';

export default function UnitCard(unitCard: UnitCardType): React.JSX.Element {
  return (
    <section className='min-w-1/4 max-w-1/2'>
      <CardHeaderSection 
        points={unitCard.cardCost.points} 
        amount={unitCard.cardCost.amount}
        name={unitCard.name} 
        description={unitCard.name} 
      />
      <CardStatsSection {...unitCard} />
      <CardActionSection {...unitCard} />
      <CardAbilitiesSection abilities={unitCard.abilities} />
      <CardDamageTableSection {...unitCard} />
    </section>
  );
}