export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="relative py-24 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.65 }}
      >
        <source src="https://res.cloudinary.com/djfmngyl0/video/upload/v1774742817/17618554-hd_1920_1080_30fps_snriob.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/45"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Glass card principal */}
        <div className="rounded-3xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/10">
          {/* Header dentro de la card */}
          <div className="text-center pt-10 pb-6 px-8 border-b border-white/10">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">Nuestra historia</p>
            <h2 className="text-3xl font-bold text-white leading-tight">
              Nacimos del silencio que nadie quiso escuchar
            </h2>
          </div>

          {/* Contenido principal */}
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Columna izquierda: foto + stats */}
            <div className="p-8 border-r border-white/10 flex flex-col gap-6">
              {/* Foto */}
              <div className="rounded-2xl overflow-hidden h-64 w-full">
                <img
                  src="https://readdy.ai/api/search-image?query=Peruvian%20woman%20in%20traditional%20Andean%20clothing%20holding%20her%20child%2C%20warm%20natural%20light%2C%20rural%20community%20setting%2C%20emotional%20and%20dignified%20portrait%2C%20mountains%20in%20background%2C%20documentary%20style%20photography%2C%20earthy%20tones&width=700&height=480&seq=quienes-somos-01&orientation=portrait"
                  alt="Mujer campesina peruana con su hijo"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Stats grandes en dorado */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '3,200+', label: 'Familias beneficiadas' },
                  { value: '120+', label: 'Comunidades' },
                  { value: '9', label: 'Provincias' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-amber-400 text-2xl font-bold leading-none">{s.value}</p>
                    <p className="text-white/60 text-xs mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-col gap-2">
                {[
                  { icon: 'ri-heart-line', label: 'Dignidad y respeto en cada acción' },
                  { icon: 'ri-community-line', label: 'Apoyo a 50+ familias por proyecto' },
                  { icon: 'ri-shield-check-line', label: 'Comunidades andinas empoderadas' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2">
                    <div className="w-7 h-7 flex items-center justify-center bg-amber-500/20 rounded-lg shrink-0">
                      <i className={`${b.icon} text-amber-400 text-sm`}></i>
                    </div>
                    <p className="text-white/80 text-sm">{b.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha: texto + valores */}
            <div className="p-8 flex flex-col gap-5">
              {/* Párrafos */}
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                <p className="text-white/85 text-sm leading-relaxed">
                  En la actualidad, un grupo de profesionales peruanos recorrió las provincias más olvidadas del país. Lo que encontraron no fueron estadísticas: encontraron{' '}
                  <strong className="text-amber-300">personas con nombres, sueños y una fuerza extraordinaria</strong> para salir adelante.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                <p className="text-white/85 text-sm leading-relaxed">
                  Semillas de Esperanza nació para ser ese puente. No venimos a dar soluciones desde afuera — venimos a{' '}
                  <strong className="text-amber-300">caminar junto a las comunidades</strong>, escuchar sus necesidades y construir juntos un futuro más justo.
                </p>
              </div>

              {/* Cita */}
              <div className="bg-amber-500/15 border border-amber-400/30 rounded-2xl p-5">
                <i className="ri-double-quotes-l text-2xl text-amber-400/60 block mb-2"></i>
                <p className="text-white/90 text-sm italic leading-relaxed">
                  &ldquo;Nadie nos preguntaba qué necesitábamos. Ellos sí lo hicieron.&rdquo;
                </p>
                <p className="text-amber-400 text-xs mt-2 font-medium">— María, Cusco</p>
              </div>

              {/* Valores */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {[
                  { icon: 'ri-heart-line', title: 'Dignidad', desc: 'Cada persona merece respeto y valoración.' },
                  { icon: 'ri-community-line', title: 'Comunidad', desc: 'Con las familias, no para ellas.' },
                  { icon: 'ri-eye-line', title: 'Transparencia', desc: 'Rendimos cuentas de cada sol.' },
                  { icon: 'ri-plant-line', title: 'Sostenibilidad', desc: 'Capacidades que perduran.' },
                ].map((v) => (
                  <div key={v.title} className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <div className="w-7 h-7 flex items-center justify-center bg-emerald-500/20 rounded-lg mb-2">
                      <i className={`${v.icon} text-emerald-300 text-sm`}></i>
                    </div>
                    <p className="font-semibold text-white text-sm mb-1">{v.title}</p>
                    <p className="text-white/55 text-xs leading-relaxed">{v.desc}</p>
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
