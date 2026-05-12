import PlantCard from "./PlantCard";

export default function Products() {
  return (
    <section className="space-y-14 py-10">

      <div className="text-center space-y-3">
        <p className="text-green-400 uppercase tracking-[4px] text-sm">
          Popular Plants
        </p>

        <h2 className="text-4xl font-bold">
          Our Top Selling Plants
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <PlantCard
          image="/images/plant.png"
          name="Aglaonema Plant"
          price="Rs. 399/-"
        />

        <PlantCard
          image="/images/plant.png"
          name="Snake Plant"
          price="Rs. 499/-"
        />

        <PlantCard
          image="/images/plant.png"
          name="Indoor Palm"
          price="Rs. 599/-"
        />

      </div>

    </section>
  );
}