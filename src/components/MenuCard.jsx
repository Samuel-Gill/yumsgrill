import { motion } from "framer-motion";

export default function MenuCard({ item }) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 240, damping: 16 }}
      className="group overflow-hidden rounded-2xl border border-luxe-400/20 bg-zinc-900 shadow-card"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-lg font-bold text-zinc-50">{item.name}</h4>
          <span className="text-base font-black text-luxe-200">{item.price}</span>
        </div>
        <p className="text-sm text-zinc-300">{item.description}</p>
      </div>
    </motion.article>
  );
}
