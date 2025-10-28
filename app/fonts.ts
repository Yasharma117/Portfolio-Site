import localFont from 'next/font/local';
import { Tourney, Spicy_Rice } from 'next/font/google';

/**
 *  OffBit ─ only Bold is needed for the hero title.
 */
export const offbit = localFont({
  src: [
    {
      path: '../public/fonts/OffBit/OffBitTrial-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-offbit',
});

/**
 *  Aeonik ─ Light, Regular, Bold
 */
export const aeonik = localFont({
  src: [
    {
      path: '../public/fonts/Aeonik/AeonikTRIAL-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik/AeonikTRIAL-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik/AeonikTRIAL-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-aeonik',
});

/**
 *  Lord Story Demo ─ Regular only
 */
export const lordStory = localFont({
  src: [
    {
      path: '../public/fonts/LordStoryDemo/lordstorydemo-l3zgy.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-lordstory',
});

/**
 * MightMakesRight ─ for drawing/art section headings
 */
export const mightMakesRight = localFont({
  src: '../public/fonts/MightMakesRight/MightMakesRight-BB.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-mightright',
});

/**
 *  CooperLt ─ full family (Light, Bold, Italic variants)
 */
export const cooperLt = localFont({
  src: [
    {
      path: '../public/fonts/CopperLt/cooperltbtlight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/CopperLt/cooperltbtlightitalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/CopperLt/cooperltbtbold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/CopperLt/cooperltbtbolditalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-cooperlt',
});

/**
 *  Google Fonts ─ Tourney & Spicy Rice
 */
export const tourney = Tourney({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-tourney',
});

export const spicyRice = Spicy_Rice({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-spicyrice',
});
