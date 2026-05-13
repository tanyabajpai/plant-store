import Image from "next/image";

type PlantCardProps = {
  image: string;
  name: string;
  price: string;
  description?: string;
};

export default function PlantCard({ image, name, price, description }: PlantCardProps) {
  return (
    <div className="rounded-3xl border border-green-900/60 bg-green-950/70 hover:border-green-400 hover:-translate-y-2 transition duration-300 shadow-xl flex flex-col overflow-hidden group">

      {/* Image */}
      <div
        className="flex justify-center items-center p-6"
        style={{ height: 190 }}
      >
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="object-contain w-auto group-hover:scale-105 transition duration-500"
          style={{ maxHeight: 160 }}
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 flex flex-col flex-1">
        <h3 className="text-base font-bold leading-snug mb-1">{name}</h3>

        {description && (
          <p className="text-gray-400 text-sm leading-6 mb-3 line-clamp-2 flex-1">{description}</p>
        )}

        <p className="text-green-400 text-lg font-bold mb-3">{price}</p>

        <button className="w-full bg-green-400 text-black py-2.5 rounded-full font-semibold hover:bg-green-300 transition text-sm">
          Buy Now
        </button>
      </div>

    </div>
  );
}