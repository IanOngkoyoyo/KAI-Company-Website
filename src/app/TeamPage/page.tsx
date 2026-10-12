import Image from 'next/image';

type Director = { src: string; name: string; role: string };

const directors: Director[] = [
  { src: '/Bobby_Rasyidin.webp', name: 'Bobby Rasyidin', role: 'Direktur Utama' },
  { src: '/Dody_Budiawan.webp', name: 'Dody Budiawan', role: 'Wakil Direktur Utama' },
  { src: '/DendyKurniawan.webp', name: 'Dendy Kurniawan', role: 'Direktur Komersial' },
  {
    src: '/Awan_Hermawan.webp',
    name: 'Awan Hermawan Purwadinata',
    role: 'Direktur Operasi, Prasarana, dan Keselamatan Area 1',
  },
  { src: '/Heru_Kuswanto.webp', name: 'Heru Kuswanto', role: 'Direktur Pengelolaan Sarana' },
  {
    src: '/Wilman_Sidjabat.webp',
    name: 'Wilman Sidjabat',
    role: 'Direktur Perencanaan Strategis dan Manajemen Risiko',
  },
  {
    src: '/Dadan_Rudiansyah.webp',
    name: 'Dadan Rudiansyah',
    role: 'Direktur Operasi, Prasarana, dan Keselamatan Area 2',
  },
  { src: '/Atih_Nurhayati.webp', name: 'Atih Nurhayati', role: 'Direktur Sumber Daya Manusia' },
  {
    src: '/I_Gede_Darmayusa.webp',
    name: 'I Gede Darma',
    role: 'Direktur Portofolio Manajemen dan Teknologi Informasi',
  },
  { src: '/Indarto_Pamoengkas.webp', name: 'Indarto Pamoengkas', role: 'Direktur Keuangan dan Umum' },
];

const gutter = 'px-6 md:px-16 lg:px-30';

function DirectorCard({ d, featured = false }: { d: Director; featured?: boolean }) {
  return (
    <figure className="group flex w-full flex-col">
      <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-200">
        <Image
          src={d.src}
          alt={`Foto ${d.name}, ${d.role}`}
          fill
          sizes={
            featured
              ? '(min-width: 640px) 384px, 100vw'
              : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
          }
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Garis oranye di dasar foto sebagai penanda identitas KAI */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#F47B20]" />
      </div>
      <figcaption className="pt-5">
        <h3
          className={`font-bold leading-snug text-[#000060] ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}
        >
          {d.name}
        </h3>
        <p className={`mt-2 leading-relaxed text-neutral-600 ${featured ? 'text-lg' : ''}`}>
          {d.role}
        </p>
      </figcaption>
    </figure>
  );
}

export default function AboutUsPage() {
  const [president, vicePresident, ...others] = directors;

  return (
    <main className="bg-white text-neutral-900">
      {/* HEADER */}
      <header className="bg-[#000060] text-white">
        <div className={`${gutter} py-16 md:py-24`}>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Struktur Organisasi KAI
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Dipimpin oleh jajaran direksi dengan tanggung jawab di bidang
            komersial, operasi, sarana, keuangan, dan sumber daya manusia untuk
            menjaga layanan kereta api Indonesia tetap aman dan andal.
          </p>
        </div>
        <div className="h-1 bg-[#F47B20]" />
      </header>

      {/* BAGAN */}
      <section className={`${gutter} py-16 md:py-24`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Bagan Struktur Organisasi
          </h2> 
        </div>

        {/* Di HP, bagan bisa digeser ke samping agar tulisan tetap terbaca */}
        <div className="mt-8 overflow-x-auto rounded-lg border border-neutral-200 bg-white p-4 md:p-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-auto w-full min-w-180"
            src="https://www.kai.id/_next/image?url=https%3A%2F%2Fapi.kai.id%2Fmsvc-webcorp%2Fapi%2Fv2%2Fmedia%2F261%2Forganization_chart.png&w=3840&q=75"
            alt="Bagan struktur organisasi PT Kereta Api Indonesia (Persero)"
          />
        </div>
      </section>

      {/* DIREKSI */}
      <section className="bg-neutral-100 py-16 md:py-24">
        <div className={gutter}>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Profil Manajemen Direksi
          </h2>
          <p className="mt-3 text-lg text-neutral-600">
            {directors.length} anggota direksi PT Kereta Api Indonesia (Persero).
          </p>

          {/* Pimpinan utama: dua foto berdampingan, lebih besar */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-10 sm:grid-cols-2 md:mt-16 md:gap-14">
            <DirectorCard d={president} featured />
            <DirectorCard d={vicePresident} featured />
          </div>

          <div className="my-14 h-px bg-neutral-300 md:my-20" />

          {/* Direktur lainnya */}
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((d) => (
              <DirectorCard key={d.name} d={d} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
