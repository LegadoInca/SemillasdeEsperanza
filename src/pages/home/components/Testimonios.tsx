import { useState } from 'react';

const testimonios = [
  {
    nombre: 'Rosa Quispe Mamani',
    edad: 34,
    provincia: 'Puno',
    area: 'Empoderamiento Femenino',
    areaColor: 'bg-violet-100 text-violet-700',
    foto: 'https://readdy.ai/api/search-image?query=Peruvian%20woman%20in%20her%2030s%2C%20traditional%20Andean%20clothing%2C%20warm%20smile%2C%20dignified%20portrait%2C%20natural%20light%2C%20rural%20background%2C%20authentic%20and%20emotional&width=500&height=700&seq=testimonio-rosa-03&orientation=portrait',
    historia: 'Cuando mi esposo se fue, quedé sola con tres hijos y sin saber cómo pagar el colegio. Semillas de Esperanza me enseñó a tejer y a vender mis productos. Hoy tengo mi propio negocio y mis hijos estudian. Nunca pensé que podría lograrlo.',
    logro: 'Emprendedora textil con 3 hijos en la escuela',
    stat: '50+',
    statLabel: 'familias como la de Rosa',
  },
  {
    nombre: 'Jhonatan Ccallo',
    edad: 12,
    provincia: 'Apurímac',
    area: 'Educación Infantil',
    areaColor: 'bg-sky-100 text-sky-700',
    foto: 'https://readdy.ai/api/search-image?query=Peruvian%20boy%20around%2012%20years%20old%2C%20school%20uniform%2C%20happy%20smile%2C%20rural%20Andean%20village%20background%2C%20warm%20sunlight%2C%20hopeful%20expression%2C%20documentary%20style&width=500&height=700&seq=testimonio-jhonatan-03&orientation=portrait',
    historia: 'Antes caminaba dos horas para llegar a la escuela y a veces no iba porque no tenía cuadernos. Ahora tengo mis materiales, un tutor que me ayuda con matemáticas y quiero ser ingeniero. Mi mamá dice que soy su orgullo.',
    logro: 'Primero de su clase, sueña con ser ingeniero',
    stat: '1,800+',
    statLabel: 'niños en programas educativos',
  },
  {
    nombre: 'Lucía Huanca Flores',
    edad: 28,
    provincia: 'Ayacucho',
    area: 'Salud Materna',
    areaColor: 'bg-rose-100 text-rose-700',
    foto: 'https://readdy.ai/api/search-image?query=Young%20Peruvian%20mother%20in%20her%20late%2020s%20holding%20her%20baby%2C%20traditional%20clothing%2C%20gentle%20smile%2C%20rural%20Andean%20setting%2C%20warm%20natural%20light%2C%20authentic%20portrait&width=500&height=700&seq=testimonio-lucia-03&orientation=portrait',
    historia: 'Mi primer embarazo fue muy difícil. No había médico en mi comunidad y tuve que dar a luz sola. Con el programa de salud materna, mi segundo bebé nació con atención médica. Hoy ambos están sanos y yo sé cómo cuidarlos.',
    logro: 'Promotora de salud en su comunidad',
    stat: '620+',
    statLabel: 'madres acompañadas',
  },
  {
    nombre: 'Gregorio Mamani',
    edad: 52,
    provincia: 'Cusco',
    area: 'Seguridad Alimentaria',
    areaColor: 'bg-emerald-100 text-emerald-700',
    foto: 'https://readdy.ai/api/search-image?query=Peruvian%20man%20in%20his%2050s%2C%20farmer%2C%20traditional%20Andean%20hat%2C%20weathered%20face%20with%20kind%20eyes%2C%20rural%20field%20background%2C%20dignified%20portrait%2C%20warm%20light&width=500&height=700&seq=testimonio-gregorio-03&orientation=portrait',
    historia: 'Toda mi vida dependí de la lluvia para cosechar. Cuando no llovía, mi familia pasaba hambre. Aprendí técnicas de riego y conservación de alimentos. Ahora tenemos comida todo el año y hasta vendemos el excedente en el mercado.',
    logro: 'Agricultor con huerto familiar productivo todo el año',
    stat: '1,100+',
    statLabel: 'familias con nutrición segura',
  },
  {
    nombre: 'Esperanza Condori',
    edad: 16,
    provincia: 'Huancavelica',
    area: 'Educación Infantil',
    areaColor: 'bg-sky-100 text-sky-700',
    foto: 'https://readdy.ai/api/search-image?query=Peruvian%20teenage%20girl%20around%2016%2C%20school%20uniform%2C%20confident%20smile%2C%20Andean%20village%20background%2C%20natural%20light%2C%20hopeful%20and%20determined%20expression&width=500&height=700&seq=testimonio-esperanza-03&orientation=portrait',
    historia: 'Mi familia quería que me quedara en casa para ayudar con los animales. Gracias al programa de becas, pude convencer a mis padres de que estudiar era importante. Ahora estoy en secundaria y quiero ser enfermera para ayudar a mi comunidad.',
    logro: 'Becaria, primera de su familia en llegar a secundaria',
    stat: '940+',
    statLabel: 'becas otorgadas',
  },
  {
    nombre: 'Feliciano Ticona',
    edad: 45,
    provincia: 'Puno',
    area: 'Identidad Cultural',
    areaColor: 'bg-orange-100 text-orange-700',
    foto: 'https://readdy.ai/api/search-image?query=Peruvian%20man%20in%20his%2040s%2C%20traditional%20Andean%20musician%2C%20playing%20quena%20flute%2C%20colorful%20traditional%20clothing%2C%20community%20celebration%20background%2C%20proud%20expression&width=500&height=700&seq=testimonio-feliciano-03&orientation=portrait',
    historia: 'Casi perdemos nuestra lengua y nuestras danzas. Los jóvenes se avergonzaban de ser quechuas. Con el programa cultural, recuperamos nuestras tradiciones y ahora los niños aprenden quechua con orgullo. Nuestra identidad es nuestra fuerza.',
    logro: 'Líder cultural, enseña quechua a 40 niños',
    stat: '60+',
    statLabel: 'comunidades con identidad preservada',
  },
];

export default function Testimonios() {
  const [active, setActive] = useState(0);
  const t = testimonios[active];

  return (
    <section id="historias" className="bg-emerald-900 relative overflow-hidden pt-10 pb-10">
      {/* Subtle bg circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-400/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-8 px-6">
        <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">Historias reales</p>
        <h2 className="text-3xl font-bold text-white mb-2">
          Estas son las voces que movieron nuestro corazón
        </h2>
        <p className="text-emerald-300/70 max-w-xl mx-auto text-sm">
          Cada historia es única. Aquí compartimos algunas de las vidas que hemos tenido el honor de acompañar.
        </p>
      </div>

      {/* Layout principal: grid foto grande + contenido + selector vertical */}
      <div className="relative z-10 max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-[420px_1fr_88px] gap-4 items-stretch">

          {/* Foto grande izquierda */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/30 h-[460px]">
            <img
              src={t.foto}
              alt={t.nombre}
              className="w-full h-full object-cover object-top transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-900/90 to-transparent"></div>
            <div className="absolute bottom-3 left-4">
              <div className="bg-amber-500 rounded-lg px-3 py-0.5 inline-block mb-1">
                <p className="text-white text-xs font-bold">{t.provincia}</p>
              </div>
              <p className="text-white font-bold text-base block">{t.nombre}</p>
              <p className="text-emerald-300 text-xs">{t.edad} años</p>
            </div>
          </div>

          {/* Contenido centro */}
          <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between">

            {/* Cita */}
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${t.areaColor}`}>
                {t.area}
              </div>
              <i className="ri-double-quotes-l text-4xl text-amber-400/25 block mb-1"></i>
              <p className="text-white text-base leading-relaxed italic mb-4">
                &ldquo;{t.historia}&rdquo;
              </p>
              <div className="flex items-center gap-2 mb-4">
                <i className="ri-award-line text-amber-400"></i>
                <p className="text-amber-300 text-sm font-medium">{t.logro}</p>
              </div>
            </div>

            {/* Stat + badges */}
            <div className="flex flex-col gap-3">
              <div className="bg-white/5 border border-amber-400/20 rounded-xl px-5 py-3">
                <p className="text-amber-400 text-3xl font-bold leading-none">{t.stat}</p>
                <p className="text-emerald-300/70 text-xs mt-1">{t.statLabel}</p>
              </div>
              <div className="flex flex-col gap-1.5">
                {[
                  { icon: 'ri-shield-check-line', label: '100% Transparencia en el uso de fondos' },
                  { icon: 'ri-heart-line', label: 'Apoyo directo a familias en cada provincia' },
                  { icon: 'ri-community-line', label: 'Comunidades andinas empoderadas' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-1.5">
                    <div className="w-5 h-5 flex items-center justify-center bg-amber-500/20 rounded-md shrink-0">
                      <i className={`${b.icon} text-amber-400 text-xs`}></i>
                    </div>
                    <p className="text-emerald-200/80 text-xs">{b.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Selector de personas vertical */}
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[460px] pr-1">
            {testimonios.map((item, i) => (
              <button
                key={item.nombre}
                onClick={() => setActive(i)}
                className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                  active === i ? 'border-amber-400 scale-105' : 'border-white/10 opacity-50 hover:opacity-80'
                }`}
              >
                <div className="w-full h-14">
                  <img
                    src={item.foto}
                    alt={item.nombre}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="bg-emerald-800/80 px-1.5 py-0.5">
                  <p className="text-white text-[10px] font-medium truncate">{item.nombre.split(' ')[0]}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
