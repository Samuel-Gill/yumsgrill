import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-luxe-400/10"
    >
      <img
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1800&q=80"
        alt="Luxury burger"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-zinc-900/30" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-24 sm:px-6 lg:px-8"
      >
        <p className="mb-4 inline-flex rounded-full border border-luxe-400/40 bg-luxe-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-luxe-200">
          Premium Burger & Cheesesteak Shop
        </p>
        <h1 className="max-w-xl text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
          Yums Grill
        </h1>
        <p className="mt-4 max-w-xl text-lg text-zinc-200 sm:text-xl">
          Burgers • Cheesesteaks • Loaded Fries
        </p>
        <a
          href="#menu"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-luxe-400 px-7 py-3 text-base font-bold text-zinc-950 shadow-glow transition hover:scale-105 hover:bg-luxe-200"
        >
          View Menu
        </a>
      </motion.div>
    </section>
  );
}
