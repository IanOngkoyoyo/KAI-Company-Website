'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/AboutUs', label: 'About Us' },
  { href: '/BlogList', label: 'Blog' },
  { href: '/Products', label: 'Produk & Layanan' },
  { href: '/TeamPage', label: 'Struktur Organisasi' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-[#000060] text-white shadow-md">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8"
      >
        <Link
          href="/"
          aria-label="KAI, ke halaman beranda"
          className="rounded-md bg-white px-3 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F47B20]"
        >
          <Image
            src="/logo-kai.png"
            alt="Logo KAI"
            width={120}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`relative block rounded-md px-4 py-2 text-lg transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F47B20] ${
                  isActive(l.href) ? 'font-bold' : 'text-white/85'
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-[#F47B20]"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          className="grid h-11 w-11 place-items-center rounded-md hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F47B20] lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <ul
          id="menu-mobile"
          className="border-t border-white/15 px-5 pb-4 pt-2 lg:hidden"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`block rounded-md border-l-4 px-4 py-3 text-lg hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F47B20] ${
                  isActive(l.href)
                    ? 'border-[#F47B20] font-bold'
                    : 'border-transparent text-white/85'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="h-1 bg-[#F47B20]" />
    </header>
  );
}
