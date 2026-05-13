import Image from "next/image";

const trendingPlants = [
  {
    image: "/images/plant6.png",
    name: "Aglaonema Plant",
    description: "Known for its attractive foliage and ease of care. Thrives in low light environments.",
    price: "Rs. 300/-",
  },
  {
    image: "/images/plant2.png",
    name: "For Your Desks Decorations",
    description: "I recently added a beautiful desk decoration plant to my workspace.",
    price: "Rs. 599/-",
  },
  {
    image: "/images/plant3.png",
    name: "For Your Desks Decorations",
    description: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.",
    price: "Rs. 399/-",
  },
];

export default function TrendingPlants() {
  return (
    <section className="space-y-12">

      <div className="text-center space-y-3">
        <p className="text-green-400 uppercase tracking-widest text-sm font-medium">
          Trending Now
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Our Trendy Plants
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingPlants.map((plant, i) => (
          <div
            key={i}
            className="rounded-3xl border border-white/10 bg-white/5 hover:border-green-400 hover:-translate-y-2 transition duration-300 group flex flex-col overflow-hidden"
          >
            {/* Image area */}
            <div
              className="flex justify-center items-center bg-green-950/40 p-6"
              style={{ height: 230 }}
            >
              <Image
                src={plant.image}
                alt={plant.name}
                width={190}
                height={190}
                className="object-contain w-auto group-hover:scale-105 transition duration-500"
                style={{ maxHeight: 190 }}
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-semibold mb-2 leading-snug">{plant.name}</h3>
              <p className="text-gray-400 text-sm leading-6 flex-1">{plant.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-green-400 font-bold text-base">{plant.price}</span>
                <button className="bg-green-400 text-black px-5 py-1.5 rounded-full text-sm font-semibold hover:bg-green-300 transition">
                  Explore
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}