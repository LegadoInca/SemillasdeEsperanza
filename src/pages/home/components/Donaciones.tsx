import { useState } from 'react';

const montos = [
  { valor: 30, impacto: 'Útiles escolares para 1 niño por un mes' },
  { valor: 50, impacto: 'Consulta médica para una madre gestante' },
  { valor: 75, impacto: 'Kit de semillas para un huerto familiar' },
  { valor: 100, impacto: 'Un mes de tutoría educativa para 3 niños' },
  { valor: 250, impacto: 'Capacitación de emprendimiento para 1 mujer' },
  { valor: 500, impacto: 'Materiales para construir 1 aula comunitaria' },
];

export default function Donaciones() {
  const [tab, setTab] = useState<'persona' | 'empresa'>('persona');
  const [montoSeleccionado, setMontoSeleccionado] = useState(30);
  const [montoCustom, setMontoCustom] = useState('');

  const montoFinal = montoCustom ? parseInt(montoCustom) : montoSeleccionado;
  const impactoActual = montos.find((m) => m.valor === montoSeleccionado)?.impacto;

  return (
    <section id="donaciones" className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://res.cloudinary.com/djfmngyl0/image/upload/v1775317839/pexels-d-r-2148748679-33799197_fu1ero.jpg')" }}
      ></div>
      {/* Soft golden overlay — keeps image vivid */}
      <div className="absolute inset-0 bg-amber-900/30 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + Quote */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden h-[500px]">
              <img
                src="https://readdy.ai/api/search-image?query=Peruvian%20child%20receiving%20school%20supplies%2C%20happy%20expression%2C%20rural%20community%20setting%2C%20warm%20light%2C%20emotional%20and%20hopeful%20moment%2C%20documentary%20photography&width=700&height=500&seq=donaciones-img-01&orientation=portrait"
                alt="Niño recibiendo útiles escolares"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-2xl font-bold leading-tight mb-2">
                Tu donación no compra una cifra.
              </p>
              <p className="text-amber-400 text-xl font-bold italic">Compra un futuro.</p>
            </div>
          </div>

          {/* Right: Donation Form */}
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8">
            {/* Tabs */}
            <div className="flex bg-stone-100 rounded-full p-1 mb-8 w-fit">
              {(['persona', 'empresa'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    tab === t ? 'bg-white text-stone-800 shadow-sm' : 'text-stone-500 hover:text-stone-700'
                  }`}
                >
                  {t === 'persona' ? 'Persona' : 'Empresa'}
                </button>
              ))}
            </div>

            {tab === 'persona' ? (
              <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-2">Elige cuánto quieres sembrar</h2>
                <p className="text-stone-500 mb-8">Cada monto tiene un impacto real y medible en las comunidades.</p>

                {/* Montos */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {montos.map((m) => (
                    <button
                      key={m.valor}
                      onClick={() => { setMontoSeleccionado(m.valor); setMontoCustom(''); }}
                      className={`py-3 rounded-xl border-2 font-bold text-lg transition-all cursor-pointer ${
                        montoSeleccionado === m.valor && !montoCustom
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                          : 'border-stone-200 text-stone-700 hover:border-emerald-300'
                      }`}
                    >
                      $ {m.valor}
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="mb-6">
                  <label className="text-sm text-stone-500 mb-1 block">O ingresa otro monto:</label>
                  <div className="flex items-center border-2 border-stone-200 rounded-xl overflow-hidden focus-within:border-emerald-500 transition-colors bg-white">
                    <span className="px-4 text-stone-400 font-semibold text-sm">$</span>
                    <input
                      type="number"
                      value={montoCustom}
                      onChange={(e) => { setMontoCustom(e.target.value); setMontoSeleccionado(0); }}
                      placeholder="Otro monto"
                      className="flex-1 py-3 pr-4 text-stone-800 font-semibold text-sm outline-none bg-transparent"
                    />
                  </div>
                </div>

                {/* Impact */}
                {impactoActual && !montoCustom && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-lg flex-shrink-0">
                      <i className="ri-heart-line text-amber-600"></i>
                    </div>
                    <div>
                      <p className="text-xs text-amber-600 font-semibold uppercase tracking-wide mb-0.5">Tu impacto</p>
                      <p className="text-stone-700 text-sm font-medium">{impactoActual}</p>
                    </div>
                  </div>
                )}

                <a
                  href="#contacto"
                  className="w-full block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 rounded-xl text-center text-base transition-colors cursor-pointer whitespace-nowrap"
                >
                  Donar $ {montoFinal || '...'} ahora
                </a>
                <p className="text-xs text-stone-400 text-center mt-3">
                  <i className="ri-shield-check-line mr-1"></i>
                  Donación segura · Recibo de donación disponible · 100% va a las comunidades
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-2">Alianza Corporativa</h2>
                <p className="text-stone-500 mb-8">Tu empresa puede transformar comunidades y fortalecer su impacto social.</p>

                <div className="space-y-4 mb-8">
                  {[
                    { nivel: 'Semilla', monto: '$ 300 / mes', beneficios: ['Logo en web y materiales', 'Reporte de impacto trimestral', 'Certificado de RSE'] },
                    { nivel: 'Árbol', monto: '$ 800 / mes', beneficios: ['Todo lo anterior', 'Visita a comunidades', 'Mención en redes sociales', 'Proyecto con tu nombre'] },
                    { nivel: 'Bosque', monto: '$ 2,000 / mes', beneficios: ['Todo lo anterior', 'Programa personalizado', 'Voluntariado corporativo', 'Informe anual de impacto'] },
                  ].map((nivel) => (
                    <div key={nivel.nivel} className="border border-stone-200 rounded-xl p-4 bg-white/60">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-bold text-stone-800">{nivel.nivel}</p>
                          <p className="text-emerald-700 font-semibold text-sm">{nivel.monto}</p>
                        </div>
                        <a
                          href="#contacto"
                          className="text-xs font-bold bg-emerald-700 text-white px-4 py-2 rounded-full cursor-pointer whitespace-nowrap hover:bg-emerald-800 transition-colors"
                        >
                          Contactar
                        </a>
                      </div>
                      <ul className="space-y-1">
                        {nivel.beneficios.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-xs text-stone-500">
                            <i className="ri-check-line text-emerald-600"></i>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
