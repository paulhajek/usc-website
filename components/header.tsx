'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '../config/site';
import LogoMark from './logo-mark';

const nav = [
  { href: '/', label: 'Start' },
  { href: '/verein', label: 'Verein' },
  { href: '/training', label: 'Training' },
  { href: '/mitgliedschaft', label: 'Mitgliedschaft' },
  { href: '/kontakt', label: 'Kontakt' }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container-narrow flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold text-slate-900" aria-label={siteConfig.shortName}>
          <LogoMark className="h-10 w-10" />
          <div className="leading-tight">
            <div className="font-bold text-lg">{siteConfig.shortName}</div>
            <div className="text-xs text-slate-600">Sportverein in München</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-800 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-brand-blue ${active ? 'text-brand-blue' : 'text-slate-800'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden text-sm text-slate-600">{siteConfig.statusSuffix}</div>
      </div>
    </header>
  );
}
