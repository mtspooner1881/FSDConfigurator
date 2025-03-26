import React from 'react';
import { CardActionUseBox } from './CardActionUseBox';
import { UnitEquipmentType } from '../../types/cardTypes';

export function CardActionItem(equipment: UnitEquipmentType): React.JSX.Element {
  function mapModifiers(): React.JSX.Element[] | null {
    if (!equipment.modifiers) {
      return null;
    }

    return equipment.modifiers.map(modifier => {
      return <div>{modifier}</div>
    });
  }

  function displayRange(): React.JSX.Element {
    let range;
    if (equipment.minDistance) {
      range = `${equipment.minDistance} - ${equipment.maxDistance}DU`
    } else {
      range = `${equipment.maxDistance}DU`
    }
    
    return <div>{range}</div>
  }

  return (
    <section className='grid grid-cols-7 grid-flow-col pr-5 pl-5'>
          <div>S{equipment.sPlacement}</div>
          <CardActionUseBox 
            isFree={equipment.useCost.isFree} 
            readyCost={equipment.useCost.readyCost} 
          />
          <div>{equipment.name}</div>
          <div>{equipment?.damage}</div>
          <div>{equipment?.effect}</div>
          {displayRange()}
          <section>
            {mapModifiers()}
          </section>
    </section>
  )
}