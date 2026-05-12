import { useState, useEffect } from "react";
import { navLinks } from "@/mocks/homeData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-40 transition-all duration-300 fixed left-0 ${scrolled ? "top-0 bg-white shadow-sm border-b border-stone-100" : "top-[42px] bg-white shadow-sm border-b border-stone-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 flex items-center justify-center bg-emerald-700 rounded-full">
            <i className="ri-seedling-line text-white text-lg" />
          </div>
          <div>
            <span className="font-bold text-lg leading-none block text-stone-800">Semillas de Esperanza</span>
            <span className="text-xs text-stone-400">ONG · Perú</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-stone-600 hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#donaciones"
            className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
          >
            Donar ahora
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl cursor-pointer text-stone-700 w-8 h-8 flex items-center justify-center"
          type="button"
          aria-label="Menú"
        >
          <i className={mobileOpen ? "ri-close-line" : "ri-menu-line"} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-stone-600 hover:text-emerald-700 cursor-pointer whitespace-nowrap py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donaciones"
            onClick={() => setMobileOpen(false)}
            className="block bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap text-center mt-2"
          >
            Donar ahora
          </a>
        </div>
      )}
    </nav>
  );
}