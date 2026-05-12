import { useState } from "react";
import { areasTrabajo } from "@/mocks/homeData";

export default function AreasTrabajo() {
  const [activeIndex, setActiveIndex] = useState(2);
  const total = areasTrabajo.areas.length;

  const prev = () => setActiveIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === total - 1 ? 0 : i + 1));

  const getCardClasses = (index: number) => {
    const diff = index - activeIndex;
    const isActive = index === activeIndex;
    const isAdjacent = Math.abs(diff) === 1 || Math.abs(diff) === total - 1;

    if (isActive) {
      return "w-full max-w-md border-amber-400/40 bg-white/10 backdrop-blur-md scale-100 opacity-100 z-20";
    }
    if (isAdjacent) {
      return "hidden sm:block w-56 border-white/10 bg-white/5 backdrop-blur-sm hover:opacity-90 z-10 scale-90 opacity-70";
    }
    return "hidden lg:block w-56 border-white/10 bg-white/5 backdrop-blur-sm hover:opacity-90 scale-75 opacity-40 z-0";
  };

  const getTranslate = (index: number) => {
    const diff = index - activeIndex;
    if (diff === 1 || diff === -(total - 1)) return "-translate-x-4";
    if (diff === -1 || diff === total - 1) return "translate-x-4";
    return "";
  };

  return (
    <section id="impacto" className="relative py-20 md:py-24 overflow-hidden bg-stone-900">
      <div className="absolute inset-0 transition-all duration-700">
        <img
          alt="Educación Infantil"
          className="w-full h-full object-cover object-top"
          src="https://readdy.ai/api/search-image?query=Peruvian%20children%20in%20a%20rural%20school%20classroom%2C%20smiling%20and%20learning%2C%20colorful%20notebooks%2C%20Andean%20village%20setting%2C%20warm%20natural%20light%2C%20hopeful%20atmosphere&width=900&height=600&seq=area-educacion-01&orientation=landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            {areasTrabajo.badge}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-['Times_New_Roman',_serif]">{areasTrabajo.title}</h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">{areasTrabajo.subtitle}</p>
        </div>

        <div className="relative flex items-center justify-center gap-4 min-h-[420px]">
          {areasTrabajo.areas.map((area, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={area.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer flex-shrink-0 ${getCardClasses(idx)} ${getTranslate(idx)}`}
                type="button"
              >
                <div className={`overflow-hidden ${isActive ? "h-56" : "h-40"}`}>
                  <img
                    alt={area.title}
                    className="w-full h-full object-cover object-top"
                    src={area.image}
                  />
                </div>
                <div className={`${isActive ? "p-6" : "p-4"}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 flex items-center justify-center bg-amber-500/20 rounded-lg">
                      <i className={`${area.icon} text-amber-400 text-sm`} />
                    </div>
                    <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">
                      {area.category}
                    </span>
                    {isActive && (
                      <span className="ml-auto text-white/40 text-xs">
                        {activeIndex + 1} / {total}
                      </span>
                    )}
                  </div>
                  <p className={`font-bold text-white mb-2 ${isActive ? "text-xl" : "text-sm"}`}>
                    {area.title}
                  </p>
                  {isActive && area.description && (
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{area.description}</p>
                  )}
                  <div className="flex items-center gap-2">
                    <i className="ri-group-line text-amber-400 text-sm" />
                    <span className={`text-amber-300 font-bold ${isActive ? "text-2xl" : "text-base"}`}>
                      {area.count}
                    </span>
                    {isActive && area.countLabel && (
                      <span className="text-white/50 text-xs">{area.countLabel}</span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
            type="button"
            aria-label="Anterior"
          >
            <i className="ri-arrow-left-s-line text-lg" />
          </button>
          <div className="flex gap-2">
            {areasTrabajo.areas.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-full transition-all cursor-pointer ${idx === activeIndex ? "w-6 h-2 bg-amber-400" : "w-2 h-2 bg-white/30 hover:bg-white/50"}`}
                type="button"
                aria-label={`Ir a área ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
            type="button"
            aria-label="Siguiente"
          >
            <i className="ri-arrow-right-s-line text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}