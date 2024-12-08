import Range from "@/components/browse-range";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import Inspiration from "@/components/inspiration";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Range />
      <Products />
      <Inspiration />
      <Footer />
    </div>
  );
}
