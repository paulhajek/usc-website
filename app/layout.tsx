import type { Metadata } from 'next';
import { Source_Sans_3, Work_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '../config/site';
import Header from '../components/header';
import Footer from '../components/footer';

const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600', '700'] });
const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-heading', weight: ['500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.baseUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.seo.description,
    url: siteConfig.seo.baseUrl,
    siteName: siteConfig.shortName,
    locale: 'de_DE',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: siteConfig.seo.baseUrl
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${sourceSans.variable} ${workSans.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <a href="#hauptinhalt" className="skip-link">Zum Inhalt springen</a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="hauptinhalt" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
