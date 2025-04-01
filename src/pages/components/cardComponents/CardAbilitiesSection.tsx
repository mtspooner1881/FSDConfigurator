import React from 'react';

interface CardAbilitiesSectionProps {
  abilities: string[];
}

export function CardAbilitiesSection ({ abilities }: CardAbilitiesSectionProps): React.JSX.Element {
  const abilitiesList = abilities.map(ability => {
    return <li key={ability}>{ability}</li>
  });

  return <ul>{abilitiesList}</ul>
} 