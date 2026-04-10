import { motion } from "framer-motion";
import DealsCarousel from "./components/DealsCarousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import { categories, deals, promotions } from "./data/menuData";

export default function App() {
  return (
    <div className="relative min-h-screen scroll-smooth bg-zinc-950 text-white">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-luxe-radial"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <Navbar />
      <main>
        <Hero />
        <PromoBanner promotions={promotions} />
        <DealsCarousel deals={deals} />
        <MenuSection categories={categories} />
      </main>
      <Footer />

      <a
        href="#deals"
        className="fixed bottom-5 right-4 z-40 inline-flex min-h-12 items-center rounded-full bg-luxe-400 px-5 py-3 text-sm font-bold text-zinc-950 shadow-glow transition hover:scale-105 sm:right-8"
      >
        Order Now
      </a>
    </div>
  );
}
