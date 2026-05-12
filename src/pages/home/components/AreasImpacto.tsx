import { useState } from 'react';

const areas = [
  {
    icon: 'ri-book-open-line',
    tag: 'Niños',
    title: 'Educación Infantil',
    desc: 'Garantizamos que los niños de comunidades rurales accedan a educación de calidad, con materiales, tutores y espacios seguros para aprender.',
    beneficiarios: '1,800+',
    benefLabel: 'Niños beneficiados',
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20children%20in%20a%20rural%20school%20classroom%2C%20smiling%20and%20learning%2C%20colorful%20notebooks%2C%20Andean%20village%20setting%2C%20warm%20natural%20light%2C%20hopeful%20atmosphere&width=900&height=600&seq=area-educacion-01&orientation=landscape',
  },
  {
    icon: 'ri-heart-pulse-line',
    tag: 'Madres',
    title: 'Salud Materna y Familiar',
    desc: 'Acompañamos a madres gestantes y familias en zonas sin acceso a centros de salud, con brigadas médicas, nutrición y atención preventiva.',
    beneficiarios: '620+',
    benefLabel: 'Madres atendidas',
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20mother%20with%20baby%20in%20rural%20Andean%20community%2C%20healthcare%20worker%20visiting%2C%20warm%20and%20caring%20atmosphere%2C%20natural%20light%2C%20documentary%20photography&width=900&height=600&seq=area-salud-01&orientation=landscape',
  },
  {
    icon: 'ri-women-line',
    tag: 'Mujeres',
    title: 'Empoderamiento Femenino',
    desc: 'Apoyamos a mujeres campesinas a desarrollar habilidades, emprender negocios propios y ejercer sus derechos con autonomía y confianza.',
    beneficiarios: '940+',
    benefLabel: 'Mujeres empoderadas',
    img: 'https://readdy.ai/api/search-image?query=Group%20of%20Peruvian%20women%20in%20traditional%20clothing%20working%20together%20in%20a%20community%20workshop%2C%20empowered%20and%20smiling%2C%20Andean%20setting%2C%20warm%20light&width=900&height=600&seq=area-mujer-01&orientation=landscape',
  },
  {
    icon: 'ri-home-heart-line',
    tag: 'Familias',
    title: 'Vivienda Digna',
    desc: 'Mejoramos las condiciones de habitabilidad de familias en situación de vulnerabilidad, con acceso a agua, saneamiento y espacios seguros.',
    beneficiarios: '380+',
    benefLabel: 'Familias con hogar digno',
    img: 'https://readdy.ai/api/search-image?query=Improved%20rural%20home%20in%20Peruvian%20Andes%2C%20family%20outside%20their%20house%2C%20clean%20and%20dignified%20living%20conditions%2C%20mountains%20background%2C%20warm%20sunlight&width=900&height=600&seq=area-vivienda-01&orientation=landscape',
  },
  {
    icon: 'ri-seedling-line',
    tag: 'Comunidades',
    title: 'Seguridad Alimentaria',
    desc: 'Promovemos huertos familiares, crianza de animales menores y técnicas de conservación de alimentos para garantizar nutrición en el hogar.',
    beneficiarios: '1,100+',
    benefLabel: 'Familias con nutrición segura',
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20family%20tending%20their%20vegetable%20garden%20in%20the%20Andes%2C%20fresh%20produce%2C%20children%20helping%2C%20rural%20community%2C%20natural%20and%20vibrant%20colors&width=900&height=600&seq=area-alimento-01&orientation=landscape',
  },
  {
    icon: 'ri-palette-line',
    tag: 'Cultura',
    title: 'Identidad Cultural',
    desc: 'Preservamos las tradiciones, lenguas originarias y saberes ancestrales de las comunidades, porque la cultura es la raíz de toda transformación.',
    beneficiarios: '60+',
    benefLabel: 'Comunidades preservadas',
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20indigenous%20cultural%20celebration%2C%20traditional%20dance%20and%20music%2C%20colorful%20costumes%2C%20community%20gathering%20in%20Andean%20village%2C%20joyful%20atmosphere&width=900&height=600&seq=area-cultura-01&orientation=landscape',
  },
];

export default function AreasImpacto() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + areas.length) % areas.length);
  const next = () => setActive((i) => (i + 1) % areas.length);

  // Indices visibles: 2 izq, centro, 2 der
  const getVisible = () => {
    const total = areas.length;
    return [
      (active - 2 + total) % total,
      (active - 1 + total) % total,
      active,
      (active + 1) % total,
      (active + 2) % total,
    ];
  };

  const visible = getVisible();

  const cardStyle = (pos: number) => {
    // pos: 0=far-left, 1=left, 2=center, 3=right, 4=far-right
    const styles: Record<number, string> = {
      0: 'hidden lg:block scale-75 opacity-40 z-0 -translate-x-4',
      1: 'hidden sm:block scale-90 opacity-70 z-10',
      2: 'scale-100 opacity-100 z-20',
      3: 'hidden sm:block scale-90 opacity-70 z-10',
      4: 'hidden lg:block scale-75 opacity-40 z-0 translate-x-4',
    };
    return styles[pos] ?? '';
  };

  return (
    <section id="impacto" className="relative py-24 overflow-hidden bg-stone-900">
      {/* Background image del área activa */}
      <div className="absolute inset-0 transition-all duration-700">
        <img
          src={areas[active].img}
          alt={areas[active].title}
          className="w-full h-full object-cover object-top"
          style={{ opacity: 0.35 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">Áreas de trabajo</p>
          <h2 className="text-4xl font-bold text-white mb-3">
            El desarrollo humano no tiene un solo camino
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Trabajamos en seis áreas clave porque las necesidades de las comunidades son diversas, complejas y profundamente humanas.
          </p>
        </div>

        {/* Carrusel fan */}
        <div className="relative flex items-center justify-center gap-4 min-h-[420px]">
          {visible.map((areaIdx, pos) => {
            const area = areas[areaIdx];
            const isCenter = pos === 2;
            return (
              <div
                key={`${areaIdx}-${pos}`}
                onClick={() => !isCenter && setActive(areaIdx)}
                className={`
                  relative rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer
                  ${isCenter
                    ? 'w-full max-w-md border-amber-400/40 bg-white/10 backdrop-blur-md'
                    : 'w-56 border-white/10 bg-white/5 backdrop-blur-sm hover:opacity-90'}
                  ${cardStyle(pos)}
                `}
              >
                {/* Image */}
                <div className={`overflow-hidden ${isCenter ? 'h-56' : 'h-40'}`}>
                  <img
                    src={area.img}
                    alt={area.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Content */}
                <div className={`p-4 ${isCenter ? 'p-6' : ''}`}>
                  {/* Tag + icon */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 flex items-center justify-center bg-amber-500/20 rounded-lg">
                      <i className={`${area.icon} text-amber-400 text-sm`}></i>
                    </div>
                    <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">{area.tag}</span>
                    {isCenter && (
                      <span className="ml-auto text-white/40 text-xs">{active + 1} / {areas.length}</span>
                    )}
                  </div>

                  <p className={`font-bold text-white mb-2 ${isCenter ? 'text-xl' : 'text-sm'}`}>{area.title}</p>

                  {isCenter && (
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{area.desc}</p>
                  )}

                  {/* Stat */}
                  <div className="flex items-center gap-2">
                    <i className="ri-group-line text-amber-400 text-sm"></i>
                    <span className={`text-amber-300 font-bold ${isCenter ? 'text-2xl' : 'text-base'}`}>{area.beneficiarios}</span>
                    {isCenter && <span className="text-white/50 text-xs">{area.benefLabel}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-lg"></i>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {areas.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all cursor-pointer ${
                  i === active ? 'w-6 h-2 bg-amber-400' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
