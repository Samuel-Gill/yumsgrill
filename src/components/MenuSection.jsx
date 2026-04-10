import { motion } from "framer-motion";
import MenuCard from "./MenuCard";

export default function MenuSection({ categories }) {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-3xl font-black text-white sm:text-4xl"
      >
        Signature Menu
      </motion.h2>
      <div className="sticky top-[58px] z-20 mb-8 flex gap-3 overflow-x-auto rounded-2xl border border-luxe-400/20 bg-zinc-950/85 p-3 backdrop-blur">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="whitespace-nowrap rounded-full border border-luxe-400/25 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-luxe-400 hover:text-zinc-950"
          >
            {category.label}
          </a>
        ))}
      </div>

      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category.id} id={category.id} className="scroll-mt-32 space-y-5">
            <h3 className="text-2xl font-bold text-luxe-200">{category.label}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
