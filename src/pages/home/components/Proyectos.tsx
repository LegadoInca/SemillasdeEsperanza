const proyectos = [
  {
    id: 1,
    tag: 'URGENTE',
    tagColor: 'bg-red-100 text-red-700',
    area: 'Educación',
    areaIcon: 'ri-book-open-line',
    titulo: 'Aulas del Futuro — Huancavelica',
    desc: 'Construcción de 3 aulas prefabricadas y dotación de materiales educativos para 180 niños en comunidades sin acceso a escuelas.',
    meta: 45000,
    recaudado: 31200,
    beneficiarios: 180,
    provincia: 'Huancavelica',
    img: 'https://readdy.ai/api/search-image?query=Rural%20school%20construction%20in%20Peruvian%20Andes%2C%20children%20waiting%20for%20new%20classroom%2C%20community%20volunteers%20building%2C%20hopeful%20atmosphere%2C%20mountains%20background&width=400&height=220&seq=proyecto-aulas-01&orientation=landscape',
  },
  {
    id: 2,
    tag: 'ACTIVO',
    tagColor: 'bg-emerald-100 text-emerald-700',
    area: 'Salud',
    areaIcon: 'ri-heart-pulse-line',
    titulo: 'Brigadas de Salud Materna — Puno',
    desc: 'Brigadas médicas mensuales para atención prenatal, parto seguro y control pediátrico en 12 comunidades del altiplano puneño.',
    meta: 28000,
    recaudado: 22400,
    beneficiarios: 340,
    provincia: 'Puno',
    img: 'https://readdy.ai/api/search-image?query=Medical%20brigade%20visiting%20rural%20Peruvian%20community%2C%20doctor%20examining%20pregnant%20woman%2C%20healthcare%20in%20Andes%2C%20warm%20caring%20atmosphere%2C%20natural%20light&width=400&height=220&seq=proyecto-salud-01&orientation=landscape',
  },
  {
    id: 3,
    tag: 'ACTIVO',
    tagColor: 'bg-emerald-100 text-emerald-700',
    area: 'Mujer',
    areaIcon: 'ri-women-line',
    titulo: 'Mujeres que Lideran — Ayacucho',
    desc: 'Programa de liderazgo y emprendimiento para 80 mujeres rurales: capacitación en gestión, acceso a microcréditos y redes de apoyo.',
    meta: 18000,
    recaudado: 18000,
    beneficiarios: 80,
    provincia: 'Ayacucho',
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20women%20in%20leadership%20workshop%2C%20rural%20community%20center%2C%20learning%20and%20empowerment%2C%20traditional%20clothing%2C%20engaged%20and%20motivated%20expressions&width=400&height=220&seq=proyecto-mujer-01&orientation=landscape',
  },
  {
    id: 4,
    tag: 'NUEVO',
    tagColor: 'bg-amber-100 text-amber-700',
    area: 'Alimentación',
    areaIcon: 'ri-seedling-line',
    titulo: 'Huertos Familiares — Apurímac',
    desc: 'Implementación de 200 huertos familiares con técnicas de riego por goteo y conservación de semillas nativas para garantizar seguridad alimentaria.',
    meta: 22000,
    recaudado: 5800,
    beneficiarios: 200,
    provincia: 'Apurímac',
    img: 'https://readdy.ai/api/search-image?query=Family%20vegetable%20garden%20in%20Peruvian%20Andes%2C%20drip%20irrigation%20system%2C%20native%20seeds%2C%20family%20working%20together%2C%20fresh%20produce%2C%20rural%20community&width=400&height=220&seq=proyecto-huerto-01&orientation=landscape',
  },
  {
    id: 5,
    tag: 'ACTIVO',
    tagColor: 'bg-emerald-100 text-emerald-700',
    area: 'Cultura',
    areaIcon: 'ri-palette-line',
    titulo: 'Raíces Vivas — Cusco',
    desc: 'Recuperación de lenguas originarias, danzas y saberes ancestrales a través de escuelas culturales comunitarias en 8 comunidades quechuas.',
    meta: 15000,
    recaudado: 11200,
    beneficiarios: 420,
    provincia: 'Cusco',
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20children%20learning%20traditional%20Andean%20dance%20and%20quechua%20language%2C%20cultural%20school%2C%20colorful%20costumes%2C%20community%20celebration%2C%20joyful%20atmosphere&width=400&height=220&seq=proyecto-cultura-01&orientation=landscape',
  },
  {
    id: 6,
    tag: 'NUEVO',
    tagColor: 'bg-amber-100 text-amber-700',
    area: 'Vivienda',
    areaIcon: 'ri-home-heart-line',
    titulo: 'Techo Digno — Loreto',
    desc: 'Mejoramiento de 60 viviendas en comunidades amazónicas: instalación de agua potable, letrinas y techos resistentes para familias vulnerables.',
    meta: 35000,
    recaudado: 8400,
    beneficiarios: 60,
    provincia: 'Loreto',
    img: 'https://readdy.ai/api/search-image?query=Improved%20rural%20home%20in%20Peruvian%20Amazon%2C%20family%20outside%20their%20new%20house%2C%20clean%20water%20installation%2C%20dignified%20living%2C%20community%20volunteers%20helping&width=400&height=220&seq=proyecto-vivienda-01&orientation=landscape',
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24 relative overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/djfmngyl0/video/upload/v1773436299/14701095_1920_1080_30fps_amrqfg.mp4"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Proyectos activos</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Cada proyecto es una semilla.<br />Tu donación es el agua.
          </h2>
          <p className="text-stone-300 max-w-xl mx-auto">
            Estos son los proyectos que están transformando vidas ahora mismo. Cada sol cuenta.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((p) => {
            const pct = Math.round((p.recaudado / p.meta) * 100);
            return (
              <div key={p.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 flex flex-col">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.titulo}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.tagColor}`}>{p.tag}</span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 text-stone-700">
                      <i className={`${p.areaIcon} mr-1`}></i>{p.area}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-base mb-2">{p.titulo}</h3>
                  <p className="text-stone-300 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-stone-300 mb-1.5">
                      <span>S/ {p.recaudado.toLocaleString()} recaudados</span>
                      <span className="font-semibold text-emerald-400">{pct}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full transition-all"
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-stone-400 mt-1">Meta: S/ {p.meta.toLocaleString()}</p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-stone-400">
                      <i className="ri-group-line"></i>
                      <span>{p.beneficiarios} beneficiarios</span>
                      <span className="mx-1">·</span>
                      <i className="ri-map-pin-line"></i>
                      <span>{p.provincia}</span>
                    </div>
                    <a
                      href="#donaciones"
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer whitespace-nowrap"
                    >
                      Apoyar →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
