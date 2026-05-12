import { useState, useEffect } from "react";
import { apadrinamientoData } from "@/mocks/homeData";

export default function Apadrinamiento() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = apadrinamientoData.carruselNinos;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const goToSlide = (index: number) => {
    setIsPaused(true);
    setSlideIndex(index);
  };

  return (
    <section id="apadrinamiento" className="relative py-16 md:py-20 overflow-hidden">
      {/* Fondo paisaje andino colorido */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#f5ede4]" />
        <img
          alt="Colorful Peruvian Andean landscape"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
          src="https://readdy.ai/api/search-image?query=Colorful%20Peruvian%20Andean%20landscape%20with%20green%20terraces%20mountains%20villages%20warm%20sunlight%20blue%20sky%20vivid%20colors%20wildflowers%20panoramic%20view&width=1600&height=900&seq=apadrina-bg-01&orientation=landscape"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Nuestros niños button */}
        <div className="text-center mb-8 md:mb-10">
          <button
            type="button"
            className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-lg md:text-xl px-8 md:px-10 py-3 md:py-4 rounded-full transition-all cursor-pointer shadow-lg shadow-emerald-700/20 animate-pulse-fast"
          >
            <i className="ri-heart-3-line text-xl md:text-2xl" />
            Nuestros niños
          </button>
        </div>

        {/* Carousel - imagen izquierda, historia derecha */}
        <div className="relative rounded-3xl overflow-hidden mb-10 md:mb-14 shadow-xl h-[620px] md:h-[540px] lg:h-[500px]">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === slideIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Left - Photo */}
                <div className="relative h-[280px] md:h-[300px] lg:h-full">
                  <img
                    alt={slide.caption}
                    className="w-full h-full object-cover object-top"
                    src={slide.image}
                  />
                </div>

                {/* Right - Story */}
                <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12 bg-emerald-900/60 backdrop-blur-lg relative border border-white/10 shadow-2xl">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-amber-500/20 rounded-full mb-4 md:mb-5">
                    <i className="ri-double-quotes-l text-amber-400 text-lg md:text-xl" />
                  </div>
                  <p className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-relaxed mb-4 md:mb-6 font-['Playfair_Display'] italic">
                    &ldquo;{slide.speech}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm md:text-base mb-6 md:mb-8">
                    <i className="ri-map-pin-line" />
                    {slide.caption}
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => goToSlide((slideIndex - 1 + slides.length) % slides.length)}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <i className="ri-arrow-left-line" />
                      Anterior
                    </button>
                    <button
                      type="button"
                      onClick={() => goToSlide((slideIndex + 1) % slides.length)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold transition-colors cursor-pointer shadow-lg"
                    >
                      Siguiente niño
                      <i className="ri-arrow-right-line" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slide dots - bottom center */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === slideIndex
                    ? "bg-amber-400 scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Ver sueño ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Title + description */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-stone-800 mb-4 leading-tight font-['Times_New_Roman',_serif] tracking-tight" style={{ textShadow: '1px 1px 0 #444, -1px -1px 0 #444, 1px -1px 0 #444, -1px 1px 0 #444' }}>
            {apadrinamientoData.title}
            <br />
            <span className="text-emerald-700">{apadrinamientoData.highlight}</span>
          </h2>
          <p className="text-stone-500 text-base md:text-lg max-w-2xl mx-auto font-bold">
            {apadrinamientoData.description}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 md:mb-16">
          {apadrinamientoData.steps.map((step) => (
            <div
              key={step.number}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center border border-white/40 shadow-sm hover:shadow-xl hover:shadow-emerald-500/15 hover:border-emerald-300/60 hover:-translate-y-1.5 transition-all duration-300 cursor-default group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-emerald-50 group-hover:bg-emerald-100 rounded-xl mx-auto mb-3 transition-colors duration-300 group-hover:scale-110">
                <i className={`${step.icon} text-emerald-700 group-hover:text-emerald-800 text-lg md:text-xl transition-all duration-300 group-hover:scale-110`} />
              </div>
              <div className="w-5 h-5 flex items-center justify-center bg-amber-500 text-white text-xs font-bold rounded-full mx-auto mb-2 group-hover:scale-125 group-hover:shadow-md group-hover:shadow-amber-500/30 transition-all duration-300">
                {step.number}
              </div>
              <h4 className="font-bold text-stone-800 text-sm mb-1 group-hover:text-emerald-800 transition-colors duration-300">{step.title}</h4>
              <p className="text-stone-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Kids cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 md:mb-14 max-w-5xl mx-auto">
          {apadrinamientoData.ninos.map((nino) => {
            const progressPercent = Math.min((nino.padrinosActivos / nino.padrinosMeta) * 100, 100);
            return (
              <div
                key={nino.id}
                className="bg-white/85 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/40 hover:border-emerald-300/60 transition-all group cursor-pointer shadow-sm"
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    alt={nino.nombre}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    src={nino.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {nino.apadrinado && (
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="ri-heart-fill text-xs" />
                      Apadrinado
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg leading-tight">{nino.nombre}</h3>
                    <p className="text-white/80 text-sm">
                      {nino.edad} · {nino.region}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-2 mb-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-star-line text-amber-500 text-sm" />
                    </div>
                    <p className="text-stone-600 text-sm italic leading-relaxed">&ldquo;{nino.sueno}&rdquo;</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-stone-400 font-medium">Padrinos activos</span>
                      <span className="text-xs font-bold text-emerald-700">
                        {nino.padrinosActivos}/{nino.padrinosMeta}
                      </span>
                    </div>
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                  {nino.apadrinado ? (
                    <div className="w-full py-3 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-sm text-center flex items-center justify-center gap-2">
                      <i className="ri-heart-fill" />
                      Ya tiene padrino
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <i className="ri-heart-line" />
                      Apadrinar a {nino.nombre.split(" ")[0]}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl overflow-hidden py-10 md:py-14 px-6 md:px-8 text-center">
          <div className="absolute inset-0 bg-emerald-900/70" />
          <div className="relative z-10">
            <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-3">Juntos somos más</p>
            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 whitespace-pre-line">
              {apadrinamientoData.ctaTitle}
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto">
              {apadrinamientoData.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="relative overflow-hidden bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors cursor-pointer whitespace-nowrap text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-transform duration-300"
              >
                <span className="shine-sweep absolute inset-0 pointer-events-none" />
                <i className="ri-heart-line" />
                Quiero apadrinar un niño
              </a>
              <a
                href="#donaciones"
                className="relative overflow-hidden bg-white/15 hover:bg-white/25 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/30 transition-colors cursor-pointer whitespace-nowrap text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-300"
              >
                <span className="shine-sweep absolute inset-0 pointer-events-none" />
                Ver más información
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}