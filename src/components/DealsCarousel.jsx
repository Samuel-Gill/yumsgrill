import { motion } from "framer-motion";

export default function DealsCarousel({ deals }) {
  return (
    <section id="deals" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-3xl font-black text-white sm:text-4xl"
      >
        Deals & Combo Favorites
      </motion.h2>
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none]">
        {deals.map((deal) => (
          <motion.article
            key={deal.id}
            whileHover={{ scale: 1.03, y: -8 }}
            className="group min-w-[85%] snap-start overflow-hidden rounded-3xl border border-luxe-400/20 bg-zinc-900 shadow-card sm:min-w-[50%] lg:min-w-[32%]"
          >
            <div className="overflow-hidden">
              <img
                src={deal.image}
                alt={deal.name}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-zinc-50">{deal.name}</h3>
                <span className="text-xl font-black text-luxe-200">{deal.price}</span>
              </div>
              <p className="text-sm text-zinc-300">{deal.description}</p>
              <button className="min-h-11 rounded-full border border-luxe-400/40 px-5 py-2 text-sm font-semibold text-luxe-200 transition hover:bg-luxe-400 hover:text-zinc-950">
                Add to Order
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
