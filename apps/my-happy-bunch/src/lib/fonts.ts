import { Albert_Sans, AR_One_Sans } from 'next/font/google';

export const arOneSans = AR_One_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ar-one-sans',
});

export const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-albert-sans',
});
