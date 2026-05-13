import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import TrendingPlants from "@/components/plants/TrendingPlants";
import Reviews from "@/components/reviews/Reviews";
import Footer from "@/components/footer/Footer";
import Products from "@/components/plants/Products";
import Oxygen from "@/components/plants/Oxygen";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">
        <Navbar />
        <Hero />
        <TrendingPlants />
        <Products />
        <Reviews />
        <Oxygen />
        <Footer />
      </div>
    </div>
  );
}