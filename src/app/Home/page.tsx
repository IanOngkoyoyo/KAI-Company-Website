export default function HomePage() {
  return (
    <>
      <div>
        <div className="min-h-2/4 p-20 pt-32 bg-[url('https://phinemo.com/wp-content/uploads/2017/11/21689466_1522119221207091_2794782331003469824_n.jpg')] bg-cover bg-center">
          <h1 className="text-5xl font-bold max-w-170 text-white">
            Profesionalisme dan kenyamanan pada setiap layanan kami
          </h1>
          <p className="text-xl max-w-170 text-white">
            KAI menggabungkan pengalaman, inovasi, dan kepedulian untuk
            memastikan setiap perjalanan terlaksana dengan lancar
          </p>
        </div>

        <section className="mt-20 p-15">
          <div className="text-4xl font-extrabold max-w-120">
            PT. KAI Telah menemani Indonesia lebih dari 80 Tahun.
          </div>
          <p className="text-xl font-semibold">
            Kami telah mengantar konsumen menuju kenyamanan, keandalan, dan
            makna di setiap perjalanan.
          </p>
          <p className="text-xl font-semibold">
            Dari generasi ke generasi, KAI terus menghubungkan kota, menciptakan
            cerita dan membangun kenangan serta harapan bagi setiap pelanggan.
          </p>
          <div className="border-t border-black mt-15" />
          <div className="grid grid-cols-3 mt-15">
            <div>
              <h1 className="text-4xl font-bold">Lebih Dari 500 Juta</h1>
              <p className="text-xl">jumlah penumpang di tahun 2025</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Lebih Dari 8.000km</h1>
              <p className="text-xl">panjang jalur rel 2025</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">Lebih dari 600</h1>
              <p className="text-xl">Jumlah Stasiun di tahun 2025</p>
            </div>
          </div>
        </section>
      </div>
      <div className="border-t border-black mt-15 mx-15" />
      <section className="bg-[#F3F5FB] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <header className="max-w-2xl">
            <h2 className="text-4xl font-bold text-[#030164] md:text-5xl">
              Every Journey Tells a Story
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Cerita nyata dari penumpang yang setiap hari memilih naik kereta.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
            {/* Kartu 1 */}
            <article className="flex h-full flex-col rounded-3xl bg-[#030164] text-white shadow-lg shadow-[#030164]/20">
              <div className="flex-1 px-8 pb-8 pt-8 md:px-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                    Komuter harian
                  </span>
                  <span className="text-6xl font-serif leading-none text-[#F26B21]">
                    &ldquo;
                  </span>
                </div>
                <h3 className="mt-2 text-2xl font-semibold leading-snug">
                  KAI selalu tepat waktu!
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  I travel to Jakarta almost every day, and the train is always
                  on time, making my commute much more efficient. I can plan my
                  schedule because I never have to worry about unpredictable
                  traffic congestion. Traveling by train has become my primary
                  choice of transportation thanks to its reliability,
                  convenience, and punctuality.
                </p>
              </div>
              <div
                className="relative"
                aria-hidden="true"
              >
                <span className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#F3F5FB]" />
                <span className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#F3F5FB]" />
                <div className="mx-8 border-t-2 border-dashed border-white/25" />
              </div>
              <footer className="flex items-center gap-4 px-8 py-6 md:px-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F26B21] text-lg font-semibold">
                  I
                </div>
                <div>
                  <p className="font-semibold">Ibrahim, 23</p>
                  <p className="text-sm text-white/65">Employee</p>
                </div>
              </footer>
            </article>

            {/* Kartu 2 */}
            <article className="flex h-full flex-col rounded-3xl bg-[#030164] text-white shadow-lg shadow-[#030164]/20">
              <div className="flex-1 px-8 pb-8 pt-8 md:px-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                    Kereta lokal
                  </span>
                  <span className="text-6xl font-serif leading-none text-[#F26B21]">
                    &ldquo;
                  </span>
                </div>
                <h3 className="mt-2 text-2xl font-semibold leading-snug">
                  The trip from campus to home is relaxing and stress-free
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  One of the reasons I enjoy traveling by local train is the
                  beautiful scenery along the route. Every journey offers
                  relaxing views that make the trip feel more enjoyable and less
                  tiring. The fares are also very affordable, making the train
                  an accessible and budget-friendly option for my friends and I.
                  It allows us to travel comfortably without spending too much,
                  so we often choose the train whenever we plan a trip together.
                </p>
              </div>
              <div
                className="relative"
                aria-hidden="true"
              >
                <span className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#F3F5FB]" />
                <span className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#F3F5FB]" />
                <div className="mx-8 border-t-2 border-dashed border-white/25" />
              </div>
              <footer className="flex items-center gap-4 px-8 py-6 md:px-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F26B21] text-lg font-semibold">
                  P
                </div>
                <div>
                  <p className="font-semibold">Putri, 21</p>
                  <p className="text-sm text-white/65">Student</p>
                </div>
              </footer>
            </article>

            {/* Kartu 3 */}
            <article className="flex h-full flex-col rounded-3xl bg-[#030164] text-white shadow-lg shadow-[#030164]/20">
              <div className="flex-1 px-8 pb-8 pt-8 md:px-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                    Perjalanan sendiri
                  </span>
                  <span className="text-6xl font-serif leading-none text-[#F26B21]">
                    &ldquo;
                  </span>
                </div>
                <h3 className="mt-2 text-2xl font-semibold leading-snug">
                  I always feel safe, even when traveling alone by train.
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  I always feel safe, even when traveling alone by train.
                </p>
              </div>
              <div
                className="relative"
                aria-hidden="true"
              >
                <span className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#F3F5FB]" />
                <span className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#F3F5FB]" />
                <div className="mx-8 border-t-2 border-dashed border-white/25" />
              </div>
              <footer className="flex items-center gap-4 px-8 py-6 md:px-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F26B21] text-lg font-semibold">
                  H
                </div>
                <div>
                  <p className="font-semibold">Husnayani, 59</p>
                  <p className="text-sm text-white/65">Senior Citizen</p>
                </div>
              </footer>
            </article>

            {/* Kartu 4 */}
            <article className="flex h-full flex-col rounded-3xl bg-[#030164] text-white shadow-lg shadow-[#030164]/20">
              <div className="flex-1 px-8 pb-8 pt-8 md:px-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                    Berdua
                  </span>
                  <span className="text-6xl font-serif leading-none text-[#F26B21]">
                    &ldquo;
                  </span>
                </div>
                <h3 className="mt-2 text-2xl font-semibold leading-snug">
                  Taking the train is so convenient!
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  My partner and I often take the local train when we travel. It
                  allows us to go straight to our destination without having to
                  change between different types of transportation, so the
                  journey feels simpler and more comfortable.
                </p>
              </div>
              <div
                className="relative"
                aria-hidden="true"
              >
                <span className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#F3F5FB]" />
                <span className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#F3F5FB]" />
                <div className="mx-8 border-t-2 border-dashed border-white/25" />
              </div>
              <footer className="flex items-center gap-4 px-8 py-6 md:px-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F26B21] text-lg font-semibold">
                  RA
                </div>
                <div>
                  <p className="font-semibold">Restu &amp; Alya, 26 &amp; 25</p>
                  <p className="text-sm text-white/65">Couple</p>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </section>
      <div className="border-t border-black mx-15" />
      <section className="bg-[#F7F6FC] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-24">
          {/* Kolom kiri */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Company Performance
            </p>
            <h2 className="mt-6 text-4xl font-semibold text-gray-900 md:text-5xl">
              Sustainable Growth
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-600">
              Financial achievements that reflect KAI&rsquo;s commitment to
              creating sustainable value and strengthening its business
              foundation.
            </p>
          </div>
          <div className="divide-y divide-gray-300">
            <div className="pb-10">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                2025 Revenue
              </p>
              <p className="mt-6 flex items-baseline gap-3 text-gray-900">
                <span className="text-xl">&gt;</span>
                <span className="text-7xl font-semibold leading-none md:text-8xl">
                  35
                </span>
                <span className="text-xl">Trillion Rupiah</span>
              </p>
            </div>

            <div className="py-10">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                2025 EBITDA
              </p>
              <p className="mt-6 flex items-baseline gap-3 text-gray-900">
                <span className="text-xl">&gt;</span>
                <span className="text-7xl font-semibold leading-none md:text-8xl">
                  8
                </span>
                <span className="text-xl">Trillion Rupiah</span>
              </p>
            </div>

            <div className="pt-10">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                2025 Gross Profit
              </p>
              <p className="mt-6 flex items-baseline gap-3 text-gray-900">
                <span className="text-xl">&gt;</span>
                <span className="text-7xl font-semibold leading-none md:text-8xl">
                  12
                </span>
                <span className="text-xl">Trillion Rupiah</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
