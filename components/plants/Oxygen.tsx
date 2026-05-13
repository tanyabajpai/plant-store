import Image from "next/image";

export default function Oxygen() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-0 items-center">

        {/* IMAGE SIDE */}
        <div className="flex justify-center items-end px-10 pt-10 lg:pt-0" style={{ minHeight: 320 }}>
          <div className="relative">
            <div
              className="absolute rounded-full bg-green-500/10 blur-2xl"
              style={{ inset: 0 }}
            />
            <Image
              src="/images/plant4.png"
              alt="Oxygen Plant"
              width={260}
              height={260}
              className="object-contain relative z-10"
            />
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="px-8 py-12 lg:pr-12 space-y-5">
          <p className="text-green-400 uppercase tracking-widest text-sm font-medium">
            Our Best O₂
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            We Have Small And Best O₂ Plants Collection's
          </h2>

          <p className="text-gray-300 leading-8 text-base">
            Oxygen-producing plants, often referred to as "O₂ plants," are those that
            release oxygen into the atmosphere through the process of photosynthesis.
          </p>

          <p className="text-gray-400 leading-7 text-sm">
            Many plants can help filter out pollutants and toxins from the air, such as
            formaldehyde, benzene, and trichloroethylene. This makes the air cleaner
            and healthier to breathe.
          </p>

          <div className="flex gap-4 pt-2">
            <button className="bg-green-400 text-black px-7 py-2.5 rounded-full font-semibold hover:bg-green-300 transition text-sm">
              Explore
            </button>
            <button className="border border-white/20 px-7 py-2.5 rounded-full hover:bg-white/10 transition text-sm text-gray-300">
              View More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}