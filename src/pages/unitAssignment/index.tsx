import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import UnitCard from '../components/unitCard/UnitCard';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function unitAssignment(): React.JSX.Element {
  const [unitCards, setUnitCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('/api/unitAssignment')
      .then((res) => res.json())
      .then((data) => {
        setUnitCards(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <section className='font-[family-name:var(--font-geist-mono)]'>
      <Link href={'/'}>Back to Home</Link>
      <section className='grid grid-cols-1 col-span-full grid-flow-col justify-items-center'>
        {unitCards ? (
          <UnitCard {...unitCards}/>
        ) : (
          <p>Loading data...</p>
        )}
      </section>
    </section>
  );
}