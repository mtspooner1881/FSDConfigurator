import React from 'react';
import { UnitEquipmentUseCostType } from '../../types/unitCardTypes';

export function CardActionUseBox(useCost: UnitEquipmentUseCostType):React.JSX.Element {
  function getMultipleCosts(): number[][] {
    const useArray = useCost.readyCost.map(cost => {
      return cost;
    });

    return useArray;
  }

  function getCostRange(): string[] | null {
    if(!useCost.readyCost) {
      return null;
    }

    return getMultipleCosts().map(arrayRange => {
      let useCostRange;
      const firstOfRange = arrayRange[0];
      if(arrayRange.length === 1) {
        useCostRange = `${firstOfRange}`;
      } else {
        const lastOfRange = arrayRange.slice(-1)[0];
        useCostRange = `${firstOfRange} - ${lastOfRange}`; 
      }
      return useCostRange;
    });
  }

  function renderBox(): React.JSX.Element | React.JSX.Element[] {
    let costRange;
    if(useCost.isFree) {
      costRange = 'Free';
      return <div>{costRange}</div>
    } else {
      return getCostRange().map(cost => {
        costRange = cost;
        return <div>{costRange}</div>
      });
    }
  }

  return <section>{renderBox()}</section>
}