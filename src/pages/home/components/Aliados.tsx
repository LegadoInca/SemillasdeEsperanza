const aliados = [
  { nombre: 'GIZ', pais: 'Alemania', tipo: 'Cooperación Internacional', icon: 'ri-global-line' },
  { nombre: 'USAID', pais: 'Estados Unidos', tipo: 'Agencia de Desarrollo', icon: 'ri-government-line' },
  { nombre: 'FAO', pais: 'ONU', tipo: 'Alimentación y Agricultura', icon: 'ri-seedling-line' },
  { nombre: 'PNUD', pais: 'ONU', tipo: 'Programa de Desarrollo', icon: 'ri-earth-line' },
  { nombre: 'Unión Europea', pais: 'Europa', tipo: 'Fondo de Cooperación', icon: 'ri-star-line' },
  { nombre: 'MIDIS', pais: 'Perú', tipo: 'Ministerio de Desarrollo', icon: 'ri-building-line' },
  { nombre: 'UNICEF', pais: 'ONU', tipo: 'Fondo para la Infancia', icon: 'ri-heart-line' },
  { nombre: 'Helvetas', pais: 'Suiza', tipo: 'ONG Internacional', icon: 'ri-group-line' },
];

const voluntarios = [
  { nombre: 'Ana Rodríguez', rol: 'Médica voluntaria', provincia: 'Puno', foto: 'https://readdy.ai/api/search-image?query=Young%20Peruvian%20female%20doctor%20volunteer%2C%20professional%20portrait%2C%20warm%20smile%2C%20medical%20setting&width=80&height=80&seq=vol-ana-01&orientation=squarish' },
  { nombre: 'Carlos Mendoza', rol: 'Educador', provincia: 'Cusco', foto: 'https://readdy.ai/api/search-image?query=Young%20Peruvian%20male%20teacher%20volunteer%2C%20professional%20portrait%2C%20friendly%20smile%2C%20educational%20setting&width=80&height=80&seq=vol-carlos-01&orientation=squarish' },
  { nombre: 'Sofía Vargas', rol: 'Psicóloga', provincia: 'Ayacucho', foto: 'https://readdy.ai/api/search-image?query=Young%20Peruvian%20female%20psychologist%20volunteer%2C%20professional%20portrait%2C%20compassionate%20smile&width=80&height=80&seq=vol-sofia-01&orientation=squarish' },
  { nombre: 'Miguel Torres', rol: 'Agrónomo', provincia: 'Apurímac', foto: 'https://readdy.ai/api/search-image?query=Young%20Peruvian%20male%20agronomist%20volunteer%2C%20professional%20portrait%2C%20outdoor%20setting%2C%20friendly%20expression&width=80&height=80&seq=vol-miguel-01&orientation=squarish' },
];

export default function Aliados() {
  return (
    <section
      id="aliados"
      className="py-12 relative"
      style={{
        backgroundImage: 'url(https://readdy.ai/api/search-image?query=Aerial%20view%20of%20Peruvian%20Andean%20community%2C%20traditional%20village%20surrounded%20by%20green%20terraced%20mountains%2C%20warm%20golden%20light%2C%20cinematic%20landscape%2C%20lush%20vegetation%2C%20rural%20Peru%20highlands%2C%20vibrant%20natural%20colors%2C%20wide%20panoramic%20shot&width=1440&height=600&seq=aliados-bg-01&orientation=landscape)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/70"></div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Aliados estratégicos</p>
          <h2 className="text-3xl font-bold text-white mb-3">
            No caminamos solos
          </h2>
          <p className="text-stone-300 max-w-xl mx-auto text-sm">
            Trabajamos con organizaciones nacionales e internacionales que comparten nuestra visión de un Perú más justo e inclusivo.
          </p>
        </div>

        {/* Aliados fila única */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {aliados.map((a) => (
            <div
              key={a.nombre}
              className="flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 hover:border-amber-400/50 hover:bg-white/20 transition-all group"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-white/20 group-hover:bg-amber-400/20 rounded-full shrink-0 transition-colors">
                <i className={`${a.icon} text-white group-hover:text-amber-300 text-base transition-colors`}></i>
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-sm whitespace-nowrap">{a.nombre}</p>
                <p className="text-xs text-stone-300 whitespace-nowrap">{a.pais}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Voluntarios */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-bold text-white text-xl mb-1">Nuestros voluntarios</h3>
              <p className="text-stone-300 text-sm">Profesionales que donan su tiempo y conocimiento a las comunidades.</p>
            </div>
            <a
              href="#contacto"
              className="bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              Ser voluntario
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {voluntarios.map((v) => (
              <div key={v.nombre} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/25 transition-all">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-amber-400/50">
                  <img src={v.foto} alt={v.nombre} className="w-full h-full object-cover object-top" />
                </div>
                <p className="font-semibold text-white text-sm">{v.nombre}</p>
                <p className="text-xs text-amber-300 font-medium">{v.rol}</p>
                <p className="text-xs text-stone-300 mt-0.5">{v.provincia}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
