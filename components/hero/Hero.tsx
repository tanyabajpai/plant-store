import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 items-center gap-12 py-10" style={{ minHeight: "85vh" }}>

      {/* LEFT */}
      <div className="space-y-6 z-10">

        <p className="text-green-400 uppercase tracking-widest text-sm font-medium">
          Nature's Beauty
        </p>

        <h1 className="text-6xl md:text-7xl font-bold" style={{ lineHeight: "0.95" }}>
          Earth's <br />
          Exhale
        </h1>

        <p className="text-gray-300 leading-8 text-lg" style={{ maxWidth: "460px" }}>
          Bring nature into your home with beautiful and healthy
          indoor plants designed to refresh your environment
          and elevate your lifestyle naturally.
        </p>

        <div className="flex flex-row gap-4">
          <button className="bg-green-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-300 hover:scale-105 transition duration-300">
            Buy Now
          </button>
          <button className="border border-gray-500 px-8 py-3 rounded-full text-white hover:bg-white hover:text-black transition duration-300">
            Explore
          </button>
        </div>

      </div>

      {/* RIGHT */}
      <div className="relative flex justify-center items-center py-8">

        {/* Glow */}
        <div
          className="absolute rounded-full bg-green-500/20 blur-3xl"
          style={{ width: 440, height: 440 }}
        />

        {/* Plant Circle */}
        <div
          className="relative rounded-full bg-gradient-to-b from-green-400 to-green-900 flex items-center justify-center overflow-hidden"
          style={{ width: 420, height: 420 }}
        >
          <Image
            src="/images/plant.png"
            alt="Hero Plant"
            width={400}
            height={400}
            priority
            className="object-contain relative z-10"
          />
        </div>

        {/* Floating Info Card */}
        <div
          className="hidden lg:flex flex-col gap-3 absolute bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-5 shadow-2xl"
          style={{ top: 48, right: 0, width: 195 }}
        >
          <p className="text-gray-400 text-xs">Indoor Plant</p>
          <h3 className="text-lg font-bold leading-tight">Pleomele Plant</h3>
          <button className="bg-green-400 text-black py-2 rounded-full font-semibold text-sm hover:bg-green-300 transition w-full">
            Buy Now
          </button>
        </div>

      </div>

    </section>
  );
}