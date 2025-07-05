import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '../app/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fantasy Football App – Play, Analyze, Win!',
  description:
    'Build your dream fantasy football team, analyze player stats, adapt tactics, and compete for real prizes. Join the best fantasy leagues: Premier League, Champions League, Super Lig, and more!',
  keywords: [
    'fantasy football',
    'fantasy soccer',
    'Premier League Fantasy',
    'Champions League Fantasy',
    'Super Lig Fantasy',
    'football analytics',
    'player statistics',
    'fantasy sports',
    'football tactics',
    'adaptation',
    'rewards',
    'прогноз футбол',
    'фентезі футбол',
    'статистика гравців',
    'аналіз футболу',
    'тактика',
    'призи',
    'українська',
    'English',
  ],
  openGraph: {
    title: 'Fantasy Football App – Play, Analyze, Win!',
    description:
      'Build your dream fantasy football team, analyze player stats, adapt tactics, and compete for real prizes. Join the best fantasy leagues: Premier League, Champions League, Super Lig, and more!',
    url: 'https://your-app-domain.com',
    siteName: 'Fantasy Football App',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fantasy Football App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#23244a',
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
