const distribucion = [
  { label: 'Proyectos comunitarios', pct: 72, color: 'bg-emerald-500', icon: 'ri-community-line' },
  { label: 'Salud y nutrición', pct: 12, color: 'bg-amber-500', icon: 'ri-heart-pulse-line' },
  { label: 'Educación y becas', pct: 10, color: 'bg-sky-400', icon: 'ri-book-open-line' },
  { label: 'Administración', pct: 6, color: 'bg-stone-400', icon: 'ri-settings-3-line' },
];

const certificaciones = [
  { icon: 'ri-government-line', titulo: 'SUNAT', desc: 'Entidad sin fines de lucro registrada', stat: null },
  { icon: 'ri-shield-check-line', titulo: 'GiveWell', desc: 'Evaluación de efectividad 2023', stat: null },
  { icon: 'ri-file-text-line', titulo: 'Auditoría', desc: 'Auditada por Deloitte Perú', stat: '50+', statLabel: 'Familias' },
  { icon: 'ri-global-line', titulo: 'ONG Internacional', desc: 'Reconocida por PNUD', stat: '1,800+', statLabel: 'Familias' },
];

const informes = [
  {
    año: '2023', titulo: 'Informe Anual de Impacto', size: '4.2 MB',
    thumb: 'https://readdy.ai/api/search-image?query=professional%20annual%20report%20document%20open%20on%20desk%2C%20financial%20charts%2C%20clean%20office%20setting%2C%20warm%20light%2C%20top%20view&width=120&height=80&seq=informe-thumb-01&orientation=landscape',
  },
  {
    año: '2022', titulo: 'Informe Anual de Impacto', size: '3.8 MB',
    thumb: 'https://readdy.ai/api/search-image?query=person%20reviewing%20financial%20report%20documents%2C%20hands%20on%20paper%2C%20warm%20office%20light%2C%20professional%20setting&width=120&height=80&seq=informe-thumb-02&orientation=landscape',
  },
  { año: '2023', titulo: 'Estados Financieros Auditados', size: '2.1 MB', thumb: null },
  { año: '2023', titulo: 'Reporte de Proyectos Q4', size: '1.5 MB', thumb: null },
];

export default function Transparencia() {
  return (
    <section id="transparencia" className="py-14 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-amber-600 text-xs font-semibold uppercase tracking-widest mb-2">Transparencia</p>
          <h2 className="text-4xl font-bold text-stone-800 mb-3">
            Sabemos que la confianza<br />se gana, no se pide
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm">
            Rendimos cuentas de cada sol que recibimos. Aquí puedes ver exactamente cómo se usan tus donaciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ── Columna izquierda: Distribución de fondos ── */}
          <div className="bg-white rounded-2xl p-7 border border-stone-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-stone-800 text-base">¿Cómo usamos los fondos?</h3>
              <span className="text-4xl font-extrabold text-amber-500">72%</span>
            </div>

            <div className="space-y-4">
              {distribucion.map((d) => (
                <div key={d.label}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="text-stone-600 font-medium">{d.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className={`${d.icon} text-stone-400 text-sm`}></i>
                      </div>
                      <span className="font-bold text-amber-500 w-8 text-right">{d.pct}%</span>
                      <span className="font-bold text-stone-700 w-8 text-right">{d.pct}%</span>
                    </div>
                  </div>
                  <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${d.color} rounded-full`}
                      style={{ width: `${d.pct}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Badge destacado */}
            <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-full shrink-0">
                <i className="ri-trophy-line text-emerald-700 text-lg"></i>
              </div>
              <div>
                <p className="font-bold text-emerald-800 text-sm">94% va directamente a las comunidades</p>
                <p className="text-emerald-600 text-xs">Solo el 6% se destina a administración</p>
              </div>
            </div>
          </div>

          {/* ── Columna derecha: Certificaciones + Informes ── */}
          <div className="flex flex-col gap-5">

            {/* Certificaciones */}
            <div className="bg-white rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-800 text-sm mb-4">Certificaciones y reconocimientos</h3>
              <div className="grid grid-cols-2 gap-3">
                {certificaciones.map((c) => (
                  <div key={c.titulo} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <div className="w-9 h-9 flex items-center justify-center bg-amber-100 rounded-full shrink-0">
                      <i className={`${c.icon} text-amber-600 text-base`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-stone-800 text-xs">{c.titulo}</p>
                      <p className="text-stone-400 text-[11px] leading-snug">{c.desc}</p>
                    </div>
                    {c.stat && (
                      <div className="text-right shrink-0">
                        <p className="font-extrabold text-stone-800 text-sm leading-none">{c.stat}</p>
                        <p className="text-stone-400 text-[10px]">{c.statLabel}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Informes */}
            <div className="bg-white rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-800 text-sm mb-4">Informes y documentos</h3>
              <div className="space-y-2.5">
                {informes.map((inf) => (
                  <div
                    key={inf.titulo + inf.año}
                    className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      {inf.thumb ? (
                        <div className="w-16 h-11 rounded-lg overflow-hidden shrink-0">
                          <img src={inf.thumb} alt={inf.titulo} className="w-full h-full object-cover object-top" />
                        </div>
                      ) : (
                        <div className="w-9 h-9 flex items-center justify-center bg-stone-100 rounded-lg shrink-0">
                          <i className="ri-file-text-line text-stone-400 text-base"></i>
                        </div>
                      )}
                      <div>
                        <p className="text-stone-800 text-xs font-semibold">{inf.titulo}</p>
                        <p className="text-stone-400 text-[11px]">{inf.año} · {inf.size}</p>
                      </div>
                    </div>
                    <button className="text-xs text-emerald-700 font-bold hover:text-emerald-800 cursor-pointer whitespace-nowrap flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      <i className="ri-download-line"></i> Descargar
                    </button>
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
