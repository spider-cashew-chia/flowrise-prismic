import './globals.css';
import type { Metadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import clsx from 'clsx';
import { createClient, repositoryName } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle('settings');

  return {
    title: settings.data.site_title || 'Flowrise fallback',
    description: settings.data.meta_description || 'Fallback description',
    openGraph: {
      images: [settings.data.og_image.url || ''],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en-GB'
      className={clsx(nunito.variable, nunitoSans.variable)}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <div className='fixed bg-gradient-to-tr from-emerald-100 to-cyan-50 z-[-1] inset-0 opacity-50'></div>
        <PrismicPreview repositoryName='repositoryName' />
      </body>
    </html>
  );
}
