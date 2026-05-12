import Image from "next/image";

export default function Oxygen() {
  return (
    <section className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-14 backdrop-blur-lg">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div className="flex justify-center">
          <Image
            src="/images/plant.png"
            alt="Plant"
            width={220}
            height={220}
          />
        </div>

        <div className="space-y-6">

          <p className="text-green-400 uppercase tracking-[4px] text-sm">
            Our Best O₂
          </p>

          <h2 className="text-4xl font-bold">
            Best Oxygen Plants
          </h2>

          <p className="text-gray-300 leading-8">
            Oxygen-producing indoor plants improve air quality
            and bring freshness into your living environment.
          </p>

          <button className="bg-green-500 hover:bg-green-400 transition text-black px-6 py-3 rounded-full font-semibold">
            Explore
          </button>

        </div>

      </div>

    </section>
  );
}