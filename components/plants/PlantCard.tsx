import Image from "next/image";

type PlantCardProps = {
  image: string;
  name: string;
  price: string;
};

export default function PlantCard({
  image,
  name,
  price,
}: PlantCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-4 hover:scale-105 transition duration-300">

      <div className="flex justify-center">
        <Image
          src={image}
          alt={name}
          width={130}
          height={130}
          className="object-contain h-[140px]"
        />
      </div>

      <div className="space-y-2 mt-4">
        <h3 className="text-xl font-semibold">
          {name}
        </h3>

        <p className="text-green-400 font-bold">
          {price}
        </p>

        <button className="w-full bg-green-500 hover:bg-green-400 transition text-black py-2 rounded-full font-semibold">
          Buy Now
        </button>
      </div>

    </div>
  );
}