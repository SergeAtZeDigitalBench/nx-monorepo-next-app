import { Albert_Sans, AR_One_Sans } from 'next/font/google';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import '../styles/global.css';

export const metadata: Metadata = {
  title: 'Welcome to my-happy-bunch',
  description: 'Generated by create-nx-workspace',
};

const arOneSans = AR_One_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ar-one-sans',
});

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-albert-sans',
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${arOneSans.variable} ${albertSans.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
