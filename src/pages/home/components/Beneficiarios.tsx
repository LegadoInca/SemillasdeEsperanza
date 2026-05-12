const beneficiarios = [
  {
    emoji: '☕',
    title: 'Caficultores de Bajos Recursos',
    desc: 'Pequeños productores en valles como el VRAEM, San Martín y Cajamarca que cultivan café de calidad premium sin acceso a maquinaria, capacitación ni mercados justos.',
    tags: 'Asistencia Técnica · Maquinaria',
  },
  {
    emoji: '🍫',
    title: 'Productores de Cacao',
    desc: 'Familias que siembran cacao fino de aroma en la Amazonía peruana, con potencial de exportación pero sin las herramientas para alcanzarlo.',
    tags: 'Capacitación · Mercados',
  },
  {
    emoji: '🧶',
    title: 'Comunidades Indígenas Artesanas',
    desc: 'Mujeres y hombres de comunidades amazónicas y andinas cuyos tejidos, cerámicas y artesanías representan un patrimonio cultural invaluable.',
    tags: 'Comercialización · Valor Justo',
  },
  {
    emoji: '💪',
    title: 'Mujeres Sobrevivientes',
    desc: 'Mujeres que han superado situaciones de violencia y maltrato, y que hoy lideran proyectos productivos para sacar adelante a sus familias con dignidad.',
    tags: 'Empoderamiento · Salud · Economía',
  },
  {
    emoji: '🕊️',
    title: 'Víctimas del Terrorismo',
    desc: 'Familias que perdieron todo durante los años más oscuros del conflicto armado en Perú, y que hoy reconstruyen sus vidas en zonas aún marginadas del Estado.',
    tags: 'Apoyo Integral · Reconstrucción',
  },
  {
    emoji: '🌿',
    title: 'Ex-Cocaleros en Transición',
    desc: 'Agricultores que sembraban coca por necesidad y que hoy eligen el café y el cacao como su nueva vida. Les acompañamos en cada paso de ese valiente cambio.',
    tags: 'Reconversión · Nueva Economía',
  },
  {
    emoji: '📚',
    title: 'Niños y Jóvenes Rurales',
    desc: 'Los hijos de nuestras familias beneficiadas. Con acceso a educación, materiales escolares y becas, rompemos el ciclo de la pobreza para siempre.',
    tags: 'Becas · Materiales · Futuro',
  },
  {
    emoji: '🏥',
    title: 'Comunidades sin Acceso a Salud',
    desc: 'Aldeas donde el médico más cercano está a 6 horas de camino. Brigadas médicas, medicina preventiva y telemedicina rurales que salvan vidas.',
    tags: 'Brigadas Médicas · Medicinas',
  },
];

export default function Beneficiarios() {
  return (
    <section id="quienes" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#4a7c2f]/10 text-[#4a7c2f] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Comunidades que Transformamos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e0e] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Cada vida detrás de este proyecto tiene un nombre
          </h2>
          <p className="text-[#666] text-sm md:text-base max-w-2xl mx-auto">
            No trabajamos con estadísticas. Trabajamos con personas. Estas son las comunidades a las que dedicamos cada sol donado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {beneficiarios.map((b) => (
            <div
              key={b.title}
              className="bg-[#f7f3ec] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 cursor-default"
            >
              <div className="bg-[#1a2e0e] h-28 flex items-center justify-center text-5xl">
                {b.emoji}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1a2e0e] text-sm md:text-base mb-2">{b.title}</h3>
                <p className="text-[#555] text-xs md:text-sm leading-relaxed mb-3">{b.desc}</p>
                <span className="inline-block bg-[#c8a84b]/20 text-[#7a5c10] text-xs px-2 py-1 rounded-full font-medium">
                  {b.tags}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
