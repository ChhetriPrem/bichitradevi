import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Bichitra Devi | BA LLB Portfolio',
  description: 'Portfolio of Bichitra Devi, a legal student at JB Law College. Explorer of law, life, and vlogging.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#FAF9F6] text-[#2C2C2C] selection:bg-[#FFE4E1]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
