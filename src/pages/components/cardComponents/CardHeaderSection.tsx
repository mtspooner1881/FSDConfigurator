import React from 'react';
import { CardPointCost } from '../../types/cardTypes';

interface CardHeaderSectionProps {
  points: number,
  amount?: number,
  name: string,
  description: string
}

export function CardHeaderSection({points, name, description}: CardHeaderSectionProps): React.JSX.Element {
  return (
    <section className='grid justify-items-center grid-cols-1 col-span-full'>
      <div className='justify-self-end'>{points} PTS</div>
      <div>
        <h3 className='text-3xl'>{name}</h3>
      </div>
      <div className='text-lg'>{description}</div>
    </section>
  )
}