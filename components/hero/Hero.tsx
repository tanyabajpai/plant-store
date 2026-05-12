import Image from "next/image";
export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 items-center pt-10 gap-20 min-h-[90vh] py-10">

      {/* Left Content */}
      <div className="space-y-6">

        <p className="text-green-400 uppercase tracking-[4px] text-sm">
          Nature's Beauty
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
          Earth’s <br />
          Exhale
        </h1>

        <p className="text-gray-300 max-w-lg leading-8 text-lg">
          Bring nature into your home with beautiful and healthy
          indoor plants designed to refresh your environment.
        </p>

        <div className="flex gap-5 pt-2">
          <button className="bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-full text-black font-semibold">
            Buy Now
          </button>

          <button className="border border-gray-500 hover:border-green-400 transition px-6 py-3 rounded-full">
            Explore
          </button>
        </div>

      </div>

      {/* Right Side */}
      <div className="relative flex justify-center">

        <div className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full bg-green-500/20 blur-3xl absolute"></div>

        <div className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-b from-green-400 to-green-900 relative flex  justify-center">

            <Image
                 src="/images/plant.png"
                 alt="Plant"
                 width={420}
                 height={420}
                 className="object-contain relative z-10 scale-125"
             />

        </div>

      </div>

      {/* Floating Card */}
      <div className="hidden md:block absolute top-10 right-0 md:right-10 backdrop-blur-lg bg-white/10 border border-white/10 rounded-3xl p-4 w-[180px] shadow-2xl">

            <p className="text-sm text-gray-300">
                Indoor Plant
            </p>

            <h3 className="text-lg font-semibold mt-1">
                Aglaonema Plant
            </h3>

            <button className="mt-4 bg-green-500 hover:bg-green-400 transition px-4 py-2 rounded-full text-sm text-black font-semibold">
            Buy Now
            </button>

        </div>

    </section>
  );
}