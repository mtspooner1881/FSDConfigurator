import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url(/assets/images/websiteFront-1.jpg)] bg-origin-border bg-center bg-cover'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <Image
          className='dark:invert'
          src='/assets/images/TLF.png'
          alt='The Lazy Forger'
          width={660}
          height={109}
          priority
        />

        <Image
          className='dark:invert'
          src='/assets/images/FSD_transparent.png'
          alt='The Lazy Forger'
          width={1005}
          height={306}
          priority
        />
        <h2 className='text-5xl text-black font-semibold'>Army Configurator</h2>
        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <a
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto'
            href='/unitAssignment'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='dark:invert'
              src='/vercel.svg'
              alt='Vercel logomark'
              width={20}
              height={20}
            />
            Go to Unit Assignment
          </a>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
