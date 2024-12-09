import Image from "next/image";
import Hero from "./components/Hero"

import TopBar from "./components/TopBar";
import Product from "./components/LeatestProducts"
import Footer from "./components/Footer"
import Card from "./components/FeaturedProducts"
import LatestProducts from "./components/LeatestProducts";
import FeaturedProducts from "./components/FeaturedProducts";



export default function Home() {
  return (
    <>
    <TopBar />
    
<Hero />
    <FeaturedProducts />
 <LatestProducts />

    <Footer />
    
      </>
  )
}
