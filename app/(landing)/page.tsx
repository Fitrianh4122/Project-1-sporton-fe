import Herosection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductsSection from "./components/home/products";

export default function Home() {
  return <main>
    <Herosection/>
    <CategoriesSection/>
    <ProductsSection/>
  </main>;
}