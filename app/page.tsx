import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import PopularFoods from "@/components/PopularFoods";
import Trending from "@/components/Trending";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-screen-wide my-0 mx-auto">
      <Header />
      <Hero />
      <AboutUs />
      <PopularFoods />
      <Trending />
      <Subscribe />
      <Footer />
    </main>
  );
}
