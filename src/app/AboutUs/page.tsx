import Image from 'next/image';

export default function AboutUsPage() {
  const values = [
    {
      letter: 'A',
      title: 'Amanah',
      desc: 'Memegang teguh kepercayaan yang diberikan',
      color: 'text-[#2f3a63]',
    },
    {
      letter: 'K',
      title: 'Kompeten',
      desc: 'Terus belajar dan mengembangkan kapabilitas',
      color: 'text-[#2f3a63]',
    },
    {
      letter: 'H',
      title: 'Harmonis',
      desc: 'Saling peduli dan menghargai perbedaan',
      color: 'text-[#2f3a63]',
    },
    {
      letter: 'L',
      title: 'Loyal',
      desc: 'Berdedikasi dan mengutamakan kepentingan bangsa dan negara',
      color: 'text-[#4aa0ad]',
    },
    {
      letter: 'A',
      title: 'Adaptif',
      desc: 'Terus berinovasi dan antusias dalam menggerakkan ataupun menghadapi perubahan',
      color: 'text-[#4aa0ad]',
    },
    {
      letter: 'K',
      title: 'Kolaboratif',
      desc: 'Membangun kerjasama yang sinergis',
      color: 'text-[#4aa0ad]',
    },
  ];

  return (
    <>
      <Image
        src="/kereta-api.jpg"
        alt="Kereta KAI"
        width={1920}
        height={1080}
        priority
        className="w-full max-h-120 object-cover object-bottom"
      />

      <div className="grid grid-cols-2 mt-16">
        <h2 className="flex justify-center items-center font-extrabold text-4xl">
          Pemimpin transportasi rel yang terus berinovasi menghadirkan mobilitas
          modern, aman, dan berkelanjutan.
        </h2>
        <p className="flex justify-center items-center">
          PT Kereta Api Indonesia (Persero) adalah BUMN penyedia angkutan
          penumpang dan barang berbasis rel dengan komitmen menghadirkan layanan
          terintegrasi berstandar kelas dunia. KAI juga menaungi anak usaha
          diantaranya KAI Commuter, KAI Logistik, KAI Bandara, KAI Properti, KAI
          Services, dan KAI Wisata untuk memperkuat ekosistem layanan.
        </p>
      </div>
      <div className="border-t border-black my-20 mr-100" />
      <div className="grid grid-cols-2 mr-180">
        <h2 className="font-bold text-3xl ml-12">Visi Kami</h2>
        <p className="font-bold text-2xl">
          Mendorong Terciptanya Ekosistem Layanan Kereta Api yang Efisien dan
          Berkelanjutan Menuju Operator Kelas Dunia
        </p>
      </div>
      <div className="grid grid-cols-4 text-lg font-bold mt-16">
        <h1 className="text-3xl font-bold ml-12">Misi Kami</h1>
        <p className="text-5xl">01</p>
        <p className="text-5xl">02</p>
        <p className="text-5xl">03</p>
        <p></p>
        <p>
          Menyediakan pelayanan mobilitas penumpang berbasis kereta api yang
          mengedepankan keselamatan, ketepatan waktu, kenyamanan, efisiensi, dan
          keberlanjutan
        </p>
        <p>
          Menyediakan solusi transportasi dan logistik berbasis angkutan kereta
          api yang efisien, andal, dan terintegrasi untuk mendukung penurunan
          biaya logistik nasional
        </p>
        <p>
          Menyediakan solusi transportasi dan logistik berbasis angkutan kereta
          api yang efisien, andal, dan terintegrasi untuk mendukung penurunan
          biaya logistik nasional
        </p>
      </div>
      <section className="bg-linear-to-b from-[#f7f7fb] to-[#e8e8fa] px-6 py-20 lg:px-20 mt-26">
        <div className="mx-auto grid max-w-350 grid-cols-1 items-start gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          {/* Kiri: judul + deskripsi */}
          <div>
            <h2 className="text-4xl font-semibold text-[#1a1a1a] lg:text-5xl">
              Budaya Perusahaan
            </h2>
            <p className="mt-5 max-w-140 text-lg leading-relaxed text-[#5c5c66] lg:text-xl">
              Nilai-nilai AKHLAK yang membentuk karakter dan perilaku seluruh
              insan KAI dalam bekerja dan melayani bangsa
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <article
                key={v.title}
                className="flex min-h-60 flex-col rounded-[14px] bg-white p-7 shadow-[0_2px_10px_rgba(40,40,90,0.06)]"
              >
                <div
                  aria-hidden="true"
                  className={`grid h-17 w-17 place-items-center rounded-full bg-[#f0f0f4] text-[42px] font-extrabold leading-none ${v.color}`}
                >
                  {v.letter}
                </div>
                <h3 className="mt-auto pt-8 text-2xl font-medium text-[#1a1a1a]">
                  {v.title}
                </h3>
                <p className="mt-2 text-base leading-[1.9] text-[#5c5c66]">
                  {v.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
