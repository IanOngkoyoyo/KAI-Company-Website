import Image from "next/image";

// Satu gutter untuk semua section supaya sisi kiri/kanan selalu sejajar
const gutter = "px-6 md:px-16 lg:px-30";

const stats = [
  { value: "549+", label: "Stations in operation" },
  { value: "1 million+", label: "Passengers per day" },
  { value: "8,180 km+", label: "Of active rail lines" },
];

const commitments = [
  {
    title: "Safe",
    text: "Strict operational standards protect every passenger from departure to arrival.",
  },
  {
    title: "Comfortable",
    text: "Clean carriages, ergonomic seats, and onboard services for a relaxed journey.",
  },
  {
    title: "Punctual",
    text: "Dedicated rail lines keep schedules reliable, free from road traffic.",
  },
  {
    title: "Affordable",
    text: "Fares for every budget, so more people can travel across Indonesia.",
  },
];

const travelClasses = [
  {
    name: "Executive",
    text: "Spacious reclining seats and a quiet cabin, made for long-distance trips.",
  },
  {
    name: "Business",
    text: "A balance of comfort and value for regular intercity travel.",
  },
  {
    name: "Economy",
    text: "Simple, affordable seating that keeps every region within reach.",
  },
];

const ecosystem = [
  {
    name: "KAI Commuter",
    text: "Daily commuter rail for Greater Jakarta and other urban areas.",
  },
  {
    name: "KAI Logistik",
    text: "Rail-based freight and logistics for goods moving across the country.",
  },
  {
    name: "KAI Bandara",
    text: "Rail connections between city centers and airports.",
  },
  {
    name: "KAI Wisata",
    text: "Tourism trains that turn the journey into the destination.",
  },
  {
    name: "KAI Properti",
    text: "Management and development of property around stations and rail assets.",
  },
  {
    name: "KAI Services",
    text: "Station and onboard services that keep every trip running smoothly.",
  },
];

export default function ProductPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="relative">
        <Image
          src="/kereta-kai-02.jpg"
          alt="Kereta KAI"
          width={1920}
          height={1080}
          priority
          className="w-full h-[360px] md:h-[520px] object-cover object-bottom"
        />
        {/* Gradient tipis di bawah foto supaya transisi ke konten lebih halus */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* INTRO */}
      <section className={`${gutter} pt-16 md:pt-20`}>
        <p className="text-xl text-[#000060]">Main Service</p>
        <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Integrated transportation solutions that drive Indonesia forward.
        </h2>
        <div className="mt-12 h-px w-full max-w-4xl bg-neutral-900 md:mt-16" />
      </section>

      {/* PASSENGER */}
      <section className="pt-16 md:pt-24">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-[#000060] md:text-6xl">
          Passenger
        </h1>

        <div className={`${gutter} mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-16`}>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Seamless Mobility Connecting Indonesia
          </h2>
          <p className="text-lg leading-relaxed text-neutral-700">
            KAI’s passenger transportation services are designed to deliver
            safe, comfortable, punctual, and affordable travel, with a route
            network connecting various regions across Indonesia.
          </p>
        </div>

        {/* STATS: pita navy penuh supaya angka jadi titik fokus halaman */}
        <div className="mt-16 bg-[#000060] text-white md:mt-20">
          <dl
            className={`${gutter} grid divide-y divide-white/20 py-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:py-0`}
          >
            {stats.map((item) => (
              <div key={item.label} className="py-8 md:px-8 md:py-14 md:first:pl-0 md:last:pr-0">
                <dt className="order-2 mt-2 text-base text-white/70">
                  {item.label}
                </dt>
                <dd className="text-4xl font-extrabold tracking-tight text-[#F47B20] md:text-5xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* COMMITMENTS */}
        <div className={`${gutter} mt-20 md:mt-28`}>
          <h3 className="max-w-xl text-2xl font-bold tracking-tight md:text-3xl">
            What every journey is built on
          </h3>
          <ul className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => (
              <li key={item.title} className="border-t-2 border-[#F47B20] pt-5">
                <p className="text-xl font-bold">{item.title}</p>
                <p className="mt-2 leading-relaxed text-neutral-600">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* TRAVEL CLASSES */}
        <div className={`${gutter} mt-20 md:mt-28`}>
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                Choose the way you travel
              </h3>
              <p className="mt-4 max-w-sm leading-relaxed text-neutral-600">
                Each class is designed for a different kind of trip. Check
                the details for your route when you book.
              </p>
            </div>

            <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
              {travelClasses.map((item) => (
                <li
                  key={item.name}
                  className="grid gap-2 py-6 transition-colors hover:bg-neutral-50 sm:grid-cols-[180px_1fr] sm:gap-8"
                >
                  <p className="text-xl font-bold text-[#000060]">{item.name}</p>
                  <p className="leading-relaxed text-neutral-600">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="mt-24 bg-neutral-100 py-16 md:mt-32 md:py-24">
        <div className={gutter}>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            One rail network, supported by a full ecosystem of services
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Beyond passenger trains, KAI works with its subsidiaries to
            strengthen mobility, logistics, and services across Indonesia.
          </p>

          <ul className="mt-12 divide-y divide-neutral-300 border-y border-neutral-300">
            {ecosystem.map((item) => (
              <li
                key={item.name}
                className="grid gap-1 py-6 sm:grid-cols-[240px_1fr] sm:gap-8"
              >
                <p className="text-xl font-bold">{item.name}</p>
                <p className="leading-relaxed text-neutral-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Ready for your next journey?
          </h2>
        </div>
    </main>
  );
}
