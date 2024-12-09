import Range from "@/components/browse-range";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Inspiration from "@/components/inspiration";
import Furniro from "@/components/furniro";

export default function Home() {
  return (
    <div>
      <Hero />
      <Range />
      <Products />
      <Inspiration />
      <Furniro />
    </div>
  );
}
