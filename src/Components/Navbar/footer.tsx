'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/* ---------- DATA: ubah di sini jika ada akun/kontak yang berbeda ---------- */
const socials = [
  {
    name: 'Instagram',
    handle: '@kai121_',
    href: 'https://www.instagram.com/kai121_',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </>
    ),
  },
  {
    name: 'X',
    handle: '@KAI121',
    href: 'https://x.com/KAI121',
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
    ),
  },
  {
    name: 'Facebook',
    handle: 'KAI121',
    href: 'https://www.facebook.com/KAI121',
    icon: (
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" fill="currentColor" />
    ),
  },
  {
    name: 'YouTube',
    handle: 'Kereta Api Kita',
    // Ganti dengan URL channel resmi jika sudah punya
    href: 'https://www.youtube.com/results?search_query=Kereta+Api+Kita',
    icon: (
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="currentColor" />
    ),
  },
];

const contacts = [
  { key: 'cc', label: 'Contact Center', value: '121', href: 'tel:121' },
  {
    key: 'wa',
    label: 'WhatsApp',
    value: '08111-2111-121',
    href: 'https://wa.me/6281112111121',
  },
  {
    key: 'mail',
    label: 'Email',
    value: 'cs@kai.id',
    href: 'mailto:cs@kai.id',
  },
];

const menu = [
  { href: '/AboutUs', label: 'About Us' },
  { href: '/BlogList', label: 'Blog' },
  { href: '/Products', label: 'Produk & Layanan' },
  { href: '/TeamPage', label: 'Struktur Organisasi' },
];

const address = 'Jl. Perintis Kemerdekaan No.1, Bandung 40117';
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `PT Kereta Api Indonesia ${address}`,
)}`;

const linkFocus =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F47B20]';

export default function Footer() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(key: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  }

  return (
    <footer className="bg-[#000060] text-white">
      <div className="h-1 bg-[#F47B20]" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:px-8 md:py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr]">
        {/* BRAND + ALAMAT */}
        <section aria-label="Tentang KAI">
          <Link
            href="/"
            aria-label="KAI, ke halaman beranda"
            className={`inline-block rounded-md bg-white px-3 py-1.5 ${linkFocus}`}
          >
            <Image
              src="/logo-kai.png"
              alt="Logo KAI"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-xs leading-relaxed text-white/75">
            {address}
          </p>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-3 inline-block font-semibold underline decoration-[#F47B20] decoration-2 underline-offset-4 hover:text-[#F47B20] ${linkFocus}`}
          >
            Lihat di peta
            <span className="sr-only"> (membuka tab baru)</span>
          </a>
          <p className="mt-5 text-white/75">
            Telepon kantor:{' '}
            <a href="tel:+622242300031" className={`hover:text-[#F47B20] ${linkFocus}`}>
              022-423 0031
            </a>
          </p>
        </section>

        {/* MENU */}
        <nav aria-label="Menu footer">
          <h2 className="text-lg font-bold">Jelajahi</h2>
          <ul className="mt-4 grid gap-1">
            {menu.map((m) => (
              <li key={m.href}>
                <Link
                  href={m.href}
                  className={`inline-block py-1.5 text-white/75 transition-colors hover:text-[#F47B20] ${linkFocus}`}
                >
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* KONTAK */}
        <section aria-label="Hubungi kami">
          <h2 className="text-lg font-bold">Hubungi kami</h2>
          <ul className="mt-4 grid gap-3">
            {contacts.map((c) => (
              <li
                key={c.key}
                className="flex items-center justify-between gap-3 rounded-md border border-white/15 px-4 py-3"
              >
                <a
                  href={c.href}
                  target={c.key === 'wa' ? '_blank' : undefined}
                  rel={c.key === 'wa' ? 'noopener noreferrer' : undefined}
                  className={`min-w-0 hover:text-[#F47B20] ${linkFocus}`}
                >
                  <span className="block text-sm text-white/75">{c.label}</span>
                  <span className="block truncate font-semibold">{c.value}</span>
                </a>
                <button
                  type="button"
                  onClick={() => copy(c.key, c.value)}
                  aria-label={`Salin ${c.label}`}
                  className={`shrink-0 rounded-md border border-white/30 px-3 py-1.5 text-sm font-semibold transition-colors hover:border-[#F47B20] hover:bg-[#F47B20] ${linkFocus}`}
                >
                  {copied === c.key ? 'Tersalin' : 'Salin'}
                </button>
              </li>
            ))}
          </ul>
          <p role="status" aria-live="polite" className="sr-only">
            {copied ? 'Berhasil disalin' : ''}
          </p>
        </section>

        {/* SOSIAL MEDIA */}
        <section aria-label="Media sosial KAI">
          <h2 className="text-lg font-bold">Ikuti KAI</h2>
          <ul className="mt-4 grid gap-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 rounded-md py-1.5 ${linkFocus}`}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/30 transition-colors group-hover:border-[#F47B20] group-hover:bg-[#F47B20]">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </span>
                  <span>
                    <span className="block font-semibold group-hover:text-[#F47B20]">
                      {s.name}
                    </span>
                    <span className="block text-sm text-white/75">
                      {s.handle}
                    </span>
                  </span>
                  <span className="sr-only">(membuka tab baru)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* BAR BAWAH */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-5 text-sm text-white/75 sm:flex-row md:px-8">
          <p>© {new Date().getFullYear()} PT Kereta Api Indonesia (Persero)</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`rounded-md border border-white/30 px-4 py-2 font-semibold text-white transition-colors hover:border-[#F47B20] hover:bg-[#F47B20] ${linkFocus}`}
          >
            Kembali ke atas
          </button>
        </div>
      </div>
    </footer>
  );
}