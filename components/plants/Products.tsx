import PlantCard from "./PlantCard";

const plants = [
  {
    image: "/images/plant6.png",
    name: "Aglaonema Plant",
    description: "Known for its vibrant, variegated foliage and ability to thrive in low-light, indoor environments.",
    price: "Rs. 300/-",
  },
  {
    image: "/images/plant2.png",
    name: "Bird of Paradise",
    description: "Primarily grown for their large, banana-like evergreen leaves and exotic, vibrant orange and blue flowers that resemble the head of a crane.",
    price: "Rs. 380/-",
  },
  {
    image: "/images/plant3.png",
    name: "Golden Snake Plant",
    description: "A hardy, low-maintenance succulent with striking green leaves bordered by vibrant golden-yellow margins.",
    price: "Rs. 559/-",
  },
  {
    image: "/images/plant4.png",
    name: "Areca Plant",
    description: " popular, low-maintenance, air-purifying indoor plant.",
    price: "Rs. 400/-",
  },
  {
    image: "/images/plant5.png",
    name: "Snake Plant",
    description: "A popular indoor plant known for its stiff, sword-like vertical leaves, often with striking yellow or silver variegation.",
    price: "Rs. 449/-",
  },
  {
    image: "/images/plant.png",
    name: "Dragonfly Tree Plant",
    description: "It is highly popular for indoor decor due to its architectural shape and ability to remove toxins like formaldehyde from the air.",
    price: "Rs. 499/-",
  },
];

export default function Products() {
  return (
    <section className="space-y-12 py-4">
 
      <div className="text-center space-y-3">
        <p className="text-green-400 uppercase tracking-widest text-sm font-medium">
          Popular Plants
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Our Top Selling Plants
        </h2>
      </div>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant, index) => (
          <PlantCard
            key={index}
            image={plant.image}
            name={plant.name}
            description={plant.description}
            price={plant.price}
          />
        ))}
      </div>
 
    </section>
  );
}
 
