import { useState } from "react";
import { testimoniosData } from "@/mocks/homeData";

const colorMap: Record<string, { bg: string; text: string }> = {
  violet: { bg: "bg-violet-100", text: "text-violet-700" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-700" },
  rose: { bg: "bg-rose-100", text: "text-rose-700" },
  amber: { bg: "bg-amber-100", text: "text-amber-700" },
  teal: { bg: "bg-teal-100", text: "text-teal-700" },
  orange: { bg: "bg-orange-100", text: "text-orange-700" },
};

export default function HistoriasReales() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimoniosData.testimonios[activeIndex];
  const colors = colorMap[active.categoriaColor] || { bg: "bg-stone-100", text: "text-stone-700" };

  return (
    <section id="historias" className="bg-emerald-900 relative overflow-hidden pt-10 pb-10">
      {/* Andean landscape background */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Paisaje andino peruano con montañas y terrazas al atardecer"
          className="w-full h-full object-cover object-center"
          src="https://readdy.ai/api/search-image?query=Breathtaking%20Peruvian%20Andes%20mountain%20landscape%20at%20golden%20hour%2C%20terraced%20fields%20on%20steep%20green%20hillsides%2C%20dramatic%20snow-capped%20peaks%20in%20background%2C%20warm%20sunset%20light%20casting%20long%20shadows%20across%20valleys%2C%20scattered%20traditional%20villages%2C%20majestic%20and%20serene%20atmosphere%2C%20vivid%20natural%20colors%2C%20wide%20panoramic%20view&width=1440&height=800&seq=paisaje-andino-historias-01&orientation=landscape"
        />
        <div className="absolute inset-0 bg-emerald-950/55" />
      </div>

      <div className="relative z-10 text-center mb-8 px-4 md:px-6">
        <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">
          {testimoniosData.badge}
        </p>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2 font-['Times_New_Roman',_serif] tracking-tight" style={{ textShadow: '2px 2px 0 #333, -2px -2px 0 #333, 2px -2px 0 #333, -2px 2px 0 #333, 0 0 12px rgba(0,0,0,0.6)' }}>{testimoniosData.title}</h2>
        <p className="text-emerald-200/80 max-w-xl mx-auto text-sm">{testimoniosData.subtitle}</p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-[420px_1fr_88px] gap-4 items-stretch">
          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/30 h-[360px] md:h-[460px]">
            <img
              alt={active.nombre}
              className="w-full h-full object-cover object-top transition-all duration-500"
              src={active.image}
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-900/90 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <div className="bg-amber-500 rounded-lg px-3 py-0.5 inline-block mb-1">
                <p className="text-white text-xs font-bold">{active.region}</p>
              </div>
              <p className="text-white font-bold text-base block">{active.nombre}</p>
              <p className="text-emerald-300 text-xs">{active.edad}</p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col justify-between">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${colors.bg} ${colors.text}`}>
                {active.categoria}
              </div>
              <i className="ri-double-quotes-l text-4xl text-amber-400/25 block mb-1" />
              <p className="text-white text-base leading-relaxed italic mb-4">
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2 mb-4">
                <i className="ri-award-line text-amber-400" />
                <p className="text-amber-300 text-sm font-medium">{active.role}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="bg-white/5 border border-amber-400/20 rounded-xl px-5 py-3">
                <p className="text-amber-400 text-3xl font-bold leading-none">{active.familias}</p>
                <p className="text-emerald-300/70 text-xs mt-1">{active.familiasLabel}</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-1.5">
                  <div className="w-5 h-5 flex items-center justify-center bg-amber-500/20 rounded-md shrink-0">
                    <i className="ri-shield-check-line text-amber-400 text-xs" />
                  </div>
                  <p className="text-emerald-200/80 text-xs">100% Transparencia en el uso de fondos</p>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-1.5">
                  <div className="w-5 h-5 flex items-center justify-center bg-amber-500/20 rounded-md shrink-0">
                    <i className="ri-heart-line text-amber-400 text-xs" />
                  </div>
                  <p className="text-emerald-200/80 text-xs">Apoyo directo a familias en cada provincia</p>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-1.5">
                  <div className="w-5 h-5 flex items-center justify-center bg-amber-500/20 rounded-md shrink-0">
                    <i className="ri-community-line text-amber-400 text-xs" />
                  </div>
                  <p className="text-emerald-200/80 text-xs">Comunidades andinas empoderadas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[460px] pr-1">
            {testimoniosData.testimonios.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${idx === activeIndex ? "border-amber-400 scale-105" : "border-white/10 opacity-50 hover:opacity-80"}`}
                type="button"
              >
                <div className="w-full h-14 lg:w-full lg:h-14">
                  <img
                    alt={t.nombre}
                    className="w-full h-full object-cover object-top"
                    src={t.image}
                  />
                </div>
                <div className="bg-emerald-800/80 px-1.5 py-0.5">
                  <p className="text-white text-[10px] font-medium truncate">{t.nombre.split(" ")[0]}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}