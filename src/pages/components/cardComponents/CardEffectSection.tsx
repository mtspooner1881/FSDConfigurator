import React from 'react';
import { UnitCardType } from '../../types/cardTypes';
import { CardEffectSingle } from './CardEffectSingle'

export function CardEffectSection(effect: UnitCardType): React.JSX.Element {

  return (
    <section>
      <CardEffectSingle />
    </section>
  );
}