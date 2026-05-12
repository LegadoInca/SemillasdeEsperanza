import { transparenciaData } from "@/mocks/homeData";

export default function Transparencia() {
  return (
    <section id="transparencia" className="py-12 md:py-14 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-amber-600 text-xs font-semibold uppercase tracking-widest mb-2">
            {transparenciaData.badge}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 whitespace-pre-line">
            {transparenciaData.title}
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm">{transparenciaData.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left: fund usage */}
          <div className="bg-white rounded-2xl p-5 md:p-7 border border-stone-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-stone-800 text-base">¿Cómo usamos los fondos?</h3>
              <span className="text-4xl font-extrabold text-amber-500">72%</span>
            </div>
            <div className="space-y-4">
              {transparenciaData.usoFondos.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="text-stone-600 font-medium">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className={`${item.icon} text-stone-400 text-sm`} />
                      </div>
                      <span className="font-bold text-stone-700 w-8 text-right">{item.value}%</span>
                    </div>
                  </div>
                  <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-full shrink-0">
                <i className="ri-trophy-line text-emerald-700 text-lg" />
              </div>
              <div>
                <p className="font-bold text-emerald-800 text-sm">94% va directamente a las comunidades</p>
                <p className="text-emerald-600 text-xs">Solo el 6% se destina a administración</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            {/* Certifications */}
            <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-100">
              <h3 className="font-bold text-stone-800 text-sm mb-4">Certificaciones y reconocimientos</h3>
              <div className="grid grid-cols-2 gap-3">
                {transparenciaData.certificaciones.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100"
                  >
                    <div className="w-9 h-9 flex items-center justify-center bg-amber-100 rounded-full shrink-0">
                      <i className={`${cert.icon} text-amber-600 text-base`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-stone-800 text-xs">{cert.title}</p>
                      <p className="text-stone-400 text-[11px] leading-snug">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reports */}
            <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-100">
              <h3 className="font-bold text-stone-800 text-sm mb-4">Informes y documentos</h3>
              <div className="space-y-2.5">
                {transparenciaData.informes.map((informe, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      {informe.image ? (
                        <div className="w-16 h-11 rounded-lg overflow-hidden shrink-0">
                          <img
                            alt={informe.title}
                            className="w-full h-full object-cover object-top"
                            src={informe.image}
                          />
                        </div>
                      ) : (
                        <div className="w-9 h-9 flex items-center justify-center bg-stone-100 rounded-lg shrink-0">
                          <i className="ri-file-text-line text-stone-400 text-base" />
                        </div>
                      )}
                      <div>
                        <p className="text-stone-800 text-xs font-semibold">{informe.title}</p>
                        <p className="text-stone-400 text-[11px]">
                          {informe.year} · {informe.size}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-700 font-bold hover:text-emerald-800 cursor-pointer whitespace-nowrap flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      <i className="ri-download-line" /> Descargar
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}