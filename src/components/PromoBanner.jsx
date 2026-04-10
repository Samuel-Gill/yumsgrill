import { motion } from "framer-motion";

export default function PromoBanner({ promotions }) {
  return (
    <section className="border-y border-luxe-400/20 bg-zinc-900/70 py-3">
      <div className="overflow-hidden">
        <motion.div
          className="flex w-max gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        >
          {[...promotions, ...promotions].map((promo, index) => (
            <p
              key={`${promo}-${index}`}
              className="rounded-full border border-luxe-400/20 bg-zinc-800/70 px-5 py-2 text-sm font-semibold text-luxe-200 shadow-card"
            >
              {promo}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
