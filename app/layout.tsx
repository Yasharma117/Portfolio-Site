// app/layout.tsx
import type { Metadata } from 'next';
import { offbit, aeonik, lordStory, mightMakesRight, cooperLt, tourney, spicyRice } from './fonts';   //  ⟵ local-font imports
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Yash | Portfolio',
  description: 'A curation of design, projects & influences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${offbit.variable} ${aeonik.variable} ${lordStory.variable} ${mightMakesRight.variable} ${cooperLt.variable} ${tourney.variable} ${spicyRice.variable}`}>
      <body className="antialiased bg-[#FFFEF5]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
