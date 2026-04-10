import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#deals", label: "Deals" },
  { href: "#menu", label: "Menu" }
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-luxe-400/20 bg-zinc-950/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm sm:px-6 lg:px-8">
        <a href="#home" className="text-xl font-black tracking-wide text-luxe-200">
          Yums Grill
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 font-medium text-zinc-100 transition hover:bg-luxe-400/15 hover:text-luxe-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
