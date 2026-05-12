import { aliadosData } from "@/mocks/homeData";

export default function AliadosVoluntarios() {
  return (
    <section id="aliados" className="py-10 md:py-12 relative">
      <div className="absolute inset-0 bg-stone-900/70" />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
              {aliadosData.badge}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{aliadosData.title}</h2>
            <p className="text-stone-300 max-w-xl mx-auto text-sm">{aliadosData.subtitle}</p>
          </div>

          {/* Partners */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12">
            {aliadosData.aliados.map((aliado) => (
              <div
                key={aliado.name}
                className="flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 hover:border-amber-400/50 hover:bg-white/20 transition-all group"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-white/20 group-hover:bg-amber-400/20 rounded-full shrink-0 transition-colors">
                  <i className={`${aliado.icon} text-white group-hover:text-amber-300 text-base transition-colors`} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-white text-sm whitespace-nowrap">{aliado.name}</p>
                  <p className="text-xs text-stone-300 whitespace-nowrap">{aliado.country}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Volunteers */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
              <div>
                <h3 className="font-bold text-white text-xl mb-1">Nuestros voluntarios</h3>
                <p className="text-stone-300 text-sm">
                  Profesionales que donan su tiempo y conocimiento a las comunidades.
                </p>
              </div>
              <a
                href="#contacto"
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                Ser voluntario
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {aliadosData.voluntarios.map((vol) => (
                <div
                  key={vol.nombre}
                  className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/25 transition-all"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-amber-400/50">
                    <img
                      alt={vol.nombre}
                      className="w-full h-full object-cover object-top"
                      src={vol.image}
                    />
                  </div>
                  <p className="font-semibold text-white text-sm">{vol.nombre}</p>
                  <p className="text-xs text-amber-300 font-medium">{vol.rol}</p>
                  <p className="text-xs text-stone-300 mt-0.5">{vol.region}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}