import { useState, useEffect } from 'react';

function EmergenciaBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-[#7a1a1a] text-white flex items-center justify-between px-4 md:px-8 py-2.5 text-sm">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Pulsing dot */}
        <span className="relative flex-shrink-0 w-3 h-3 flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-400"></span>
        </span>
        <span className="font-bold text-red-300 flex-shrink-0 hidden sm:inline">EMERGENCIA ACTIVA:</span>
        <span className="font-bold text-red-300 flex-shrink-0 sm:hidden">EMERGENCIA:</span>
        <span className="text-white/90 truncate text-xs md:text-sm">
          La minería ilegal ha contaminado 3 ríos en Madre de Dios. Más de 200 familias necesitan ayuda urgente.
        </span>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0 ml-4">
        <a
          href="#donaciones"
          className="text-amber-400 font-bold hover:text-amber-300 transition-colors cursor-pointer whitespace-nowrap text-xs md:text-sm flex items-center gap-1"
        >
          → Dona ahora
        </a>
        <button
          onClick={() => setVisible(false)}
          className="text-white/50 hover:text-white transition-colors cursor-pointer ml-1 w-5 h-5 flex items-center justify-center"
          aria-label="Cerrar"
        >
          <i className="ri-close-line text-base"></i>
        </button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Impacto', href: '#impacto' },
    { label: 'Apadrinamiento', href: '#apadrinamiento' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Transparencia', href: '#transparencia' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <EmergenciaBanner />

      {/* Navbar */}
      <nav
        className={`w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'fixed top-[42px] left-0 bg-white shadow-sm border-b border-stone-100'
            : 'absolute top-[42px] left-0 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 flex items-center justify-center bg-emerald-700 rounded-full">
              <i className="ri-seedling-line text-white text-lg"></i>
            </div>
            <div>
              <span className={`font-bold text-lg leading-none block ${scrolled ? 'text-stone-800' : 'text-white'}`}>
                Semillas de Esperanza
              </span>
              <span className={`text-xs ${scrolled ? 'text-stone-400' : 'text-white/70'}`}>ONG · Perú</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled ? 'text-stone-600 hover:text-emerald-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#donaciones"
              className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              Donar ahora
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden text-2xl cursor-pointer ${scrolled ? 'text-stone-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-stone-700 font-medium text-sm hover:text-emerald-700 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donaciones"
              className="bg-amber-500 text-white text-sm font-bold px-5 py-2.5 rounded-full text-center cursor-pointer whitespace-nowrap"
            >
              Donar ahora
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
