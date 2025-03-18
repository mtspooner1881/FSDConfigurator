import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <link rel='icon' href='/assets/images/LazyGame_border.jpg' sizes='any' />
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
