import { Facebook, Instagram, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-luxe-400/20 bg-zinc-950 px-4 py-10 text-zinc-300 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-black text-luxe-200">Yums Grill</h3>
          <p className="mt-3 text-sm">Luxury comfort food with bold grill flavor in every bite.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="flex items-center gap-2"><MapPin size={16} /> 123 Flavor Avenue, Food City</p>
          <p className="flex items-center gap-2"><Phone size={16} /> (555) 123-9876</p>
          <p>Mon - Thu: 11:00 AM - 10:00 PM</p>
          <p>Fri - Sun: 11:00 AM - 12:00 AM</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-zinc-100">Follow Us</p>
          <div className="flex gap-2">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="rounded-full border border-luxe-400/30 p-2 text-luxe-200 transition hover:bg-luxe-400 hover:text-zinc-950"
                aria-label="Social link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
