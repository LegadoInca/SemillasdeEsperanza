import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import QuienesSomos from './components/QuienesSomos';
import AreasImpacto from './components/AreasImpacto';
import Testimonios from './components/Testimonios';
import Proyectos from './components/Proyectos';
import Apadrinamiento from './components/Apadrinamiento';
import Donaciones from './components/Donaciones';
import Transparencia from './components/Transparencia';
import Aliados from './components/Aliados';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <QuienesSomos />
      <AreasImpacto />
      <Testimonios />
      <Proyectos />
      <Apadrinamiento />
      <Donaciones />
      <Transparencia />
      <Aliados />
      <Contacto />
      <Footer />

      {/* Floating donate button */}
      <a
        href="#donaciones"
        className="fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-3 rounded-full shadow-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 text-sm"
      >
        <i className="ri-heart-line"></i>
        Donar ahora
      </a>
    </div>
  );
}
