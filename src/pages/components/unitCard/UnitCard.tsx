import React from 'react';
import { UnitCardType } from '../../types/unitCardTypes';
import { CardHeaderSection } from './CardHeaderSection';
import { CardStatsSection } from './CardStatsSection';
import { CardDamageTableSection } from './CardDamageTableSection';
import { CardActionSection } from './CardActionSection';

export default function UnitCard(unitCard: UnitCardType): React.JSX.Element {
  return (
    <section className='min-w-1/4 max-w-1/2'>
      <CardHeaderSection {...unitCard} />
      <CardStatsSection {...unitCard} />
      <CardActionSection {...unitCard} />
      <CardDamageTableSection {...unitCard} />
    </section>
  );
}