import { useState } from 'react';

const ninos = [
  {
    id: 1,
    nombre: 'Lucía Quispe',
    edad: 8,
    comunidad: 'Puno, Altiplano',
    sueño: 'Ser maestra y enseñar a los niños de su comunidad',
    necesidad: 'Útiles escolares, alimentación y acceso a educación',
    apadrinados: 3,
    meta: 1,
    apadrinado: false,
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20girl%20age%208%20smiling%20warmly%20in%20traditional%20andean%20colorful%20clothing%2C%20rural%20mountain%20village%20background%2C%20soft%20natural%20light%2C%20hopeful%20expression%2C%20documentary%20portrait%20photography%2C%20warm%20tones&width=400&height=480&seq=nina-lucia-01&orientation=portrait',
  },
  {
    id: 2,
    nombre: 'Mateo Condori',
    edad: 10,
    comunidad: 'Cusco, Sierra',
    sueño: 'Convertirse en ingeniero para construir puentes en su pueblo',
    necesidad: 'Acceso a internet, libros y materiales de estudio',
    apadrinados: 2,
    meta: 1,
    apadrinado: false,
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20boy%20age%2010%20smiling%20with%20school%20backpack%2C%20andean%20village%20background%20with%20mountains%2C%20warm%20golden%20hour%20light%2C%20hopeful%20and%20bright%20expression%2C%20documentary%20portrait%20photography&width=400&height=480&seq=nino-mateo-02&orientation=portrait',
  },
  {
    id: 3,
    nombre: 'Sofía Mamani',
    edad: 7,
    comunidad: 'Madre de Dios, Amazonía',
    sueño: 'Ser doctora para cuidar a su familia y vecinos',
    necesidad: 'Atención médica, nutrición y materiales educativos',
    apadrinados: 1,
    meta: 1,
    apadrinado: true,
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20girl%20age%207%20in%20amazon%20jungle%20community%2C%20bright%20smile%2C%20colorful%20dress%2C%20lush%20green%20tropical%20background%2C%20warm%20natural%20light%2C%20hopeful%20portrait%2C%20documentary%20photography%20style&width=400&height=480&seq=nina-sofia-03&orientation=portrait',
  },
  {
    id: 4,
    nombre: 'Ángel Huanca',
    edad: 11,
    comunidad: 'Ayacucho, Sierra Sur',
    sueño: 'Estudiar agronomía para mejorar los cultivos de su familia',
    necesidad: 'Alimentación, útiles y transporte escolar',
    apadrinados: 0,
    meta: 1,
    apadrinado: false,
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20boy%20age%2011%20in%20rural%20andean%20community%2C%20wearing%20simple%20clothes%2C%20warm%20smile%2C%20terraced%20fields%20background%2C%20golden%20afternoon%20light%2C%20hopeful%20expression%2C%20documentary%20portrait%20photography&width=400&height=480&seq=nino-angel-04&orientation=portrait',
  },
  {
    id: 5,
    nombre: 'Valentina Flores',
    edad: 9,
    comunidad: 'Loreto, Selva',
    sueño: 'Ser bióloga y proteger la selva amazónica',
    necesidad: 'Acceso a escuela, materiales y alimentación diaria',
    apadrinados: 2,
    meta: 1,
    apadrinado: false,
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20girl%20age%209%20near%20amazon%20river%2C%20bright%20curious%20eyes%2C%20simple%20colorful%20clothing%2C%20tropical%20vegetation%20background%2C%20warm%20natural%20light%2C%20hopeful%20and%20joyful%20expression%2C%20documentary%20portrait%20photography&width=400&height=480&seq=nina-valentina-05&orientation=portrait',
  },
  {
    id: 6,
    nombre: 'Diego Apaza',
    edad: 12,
    comunidad: 'Puno, Lago Titicaca',
    sueño: 'Ser marinero y explorar el lago Titicaca',
    necesidad: 'Educación secundaria, alimentación y salud',
    apadrinados: 1,
    meta: 1,
    apadrinado: false,
    img: 'https://readdy.ai/api/search-image?query=Peruvian%20boy%20age%2012%20near%20Lake%20Titicaca%2C%20traditional%20andean%20clothing%2C%20bright%20smile%2C%20blue%20lake%20and%20totora%20reeds%20background%2C%20warm%20afternoon%20light%2C%20hopeful%20portrait%2C%20documentary%20photography&width=400&height=480&seq=nino-diego-06&orientation=portrait',
  },
];

const pasos = [
  { icono: 'ri-user-heart-line', titulo: 'Elige un niño', desc: 'Conoce su historia y elige a quién quieres acompañar.' },
  { icono: 'ri-hand-coin-line', titulo: 'Aporta mensualmente', desc: 'Desde $20 USD al mes cubres sus necesidades básicas.' },
  { icono: 'ri-mail-open-line', titulo: 'Recibe actualizaciones', desc: 'Te enviamos fotos, cartas y reportes de su progreso.' },
  { icono: 'ri-seedling-line', titulo: 'Transforma su futuro', desc: 'Tu apoyo sostenido cambia vidas de forma real y medible.' },
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Apadrinamiento() {
  const [ninosState, setNinosState] = useState(ninos);
  const [modalNino, setModalNino] = useState<typeof ninos[0] | null>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    pais: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!modalNino) return;
    setFormState('loading');

    const body = new URLSearchParams({
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      pais: formData.pais,
      mensaje: formData.mensaje,
      nino_apadrinado: modalNino.nombre,
      comunidad: modalNino.comunidad,
      monto: '$20 USD/mes',
    });

    try {
      const res = await fetch('https://readdy.ai/api/form/d7dc09k5q56ra7tufj7g', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (res.ok) {
        setNinosState((prev) =>
          prev.map((n) => (n.id === modalNino.id ? { ...n, apadrinado: true, apadrinados: n.apadrinados + 1 } : n))
        );
        setFormState('success');
        setFormData({ nombre: '', email: '', telefono: '', pais: '', mensaje: '' });
        setTimeout(() => {
          setModalNino(null);
          setFormState('idle');
        }, 3000);
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <section id="apadrinamiento" className="py-20 bg-[#fdf8f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Programa de Apadrinamiento
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 leading-tight">
            Cambia la vida de un niño<br />
            <span className="text-emerald-700">por $20 USD al mes</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Cada niño tiene un sueño. Con tu apadrinamiento mensual, le das acceso a educación, salud y alimentación. Recibirás actualizaciones reales de su progreso.
          </p>
        </div>

        {/* Cómo funciona */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {pasos.map((paso, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 text-center border border-stone-100">
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 rounded-xl mx-auto mb-3">
                <i className={`${paso.icono} text-emerald-700 text-xl`}></i>
              </div>
              <div className="w-5 h-5 flex items-center justify-center bg-amber-500 text-white text-xs font-bold rounded-full mx-auto mb-2">
                {i + 1}
              </div>
              <h4 className="font-bold text-stone-800 text-sm mb-1">{paso.titulo}</h4>
              <p className="text-stone-400 text-xs leading-relaxed">{paso.desc}</p>
            </div>
          ))}
        </div>

        {/* Cards de niños */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {ninosState.map((nino) => (
            <div
              key={nino.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-emerald-200 transition-all group cursor-pointer"
              onClick={() => !nino.apadrinado && setModalNino(nino)}
            >
              {/* Foto */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={nino.img}
                  alt={nino.nombre}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badge apadrinado */}
                {nino.apadrinado && (
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <i className="ri-heart-fill text-xs"></i>
                    Apadrinado
                  </div>
                )}

                {/* Nombre sobre foto */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg leading-tight">{nino.nombre}</h3>
                  <p className="text-white/80 text-sm">{nino.edad} años · {nino.comunidad}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start gap-2 mb-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-star-line text-amber-500 text-sm"></i>
                  </div>
                  <p className="text-stone-600 text-sm italic leading-relaxed">
                    &ldquo;{nino.sueño}&rdquo;
                  </p>
                </div>

                {/* Barra de necesidad */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-stone-400 font-medium">Padrinos activos</span>
                    <span className="text-xs font-bold text-emerald-700">{nino.apadrinados}/{nino.meta}</span>
                  </div>
                  <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                      style={{ width: `${Math.min((nino.apadrinados / nino.meta) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {nino.apadrinado ? (
                  <div className="w-full py-3 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-sm text-center flex items-center justify-center gap-2">
                    <i className="ri-heart-fill"></i>
                    Ya tiene padrino
                  </div>
                ) : (
                  <button
                    onClick={(e) => { e.stopPropagation(); setModalNino(nino); }}
                    className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    <i className="ri-heart-line"></i>
                    Apadrinar a {nino.nombre.split(' ')[0]}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="relative rounded-3xl overflow-hidden py-14 px-8 text-center"
          style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=group%20of%20happy%20Peruvian%20children%20in%20andean%20community%2C%20colorful%20traditional%20clothing%2C%20mountains%20and%20green%20fields%20background%2C%20warm%20golden%20light%2C%20joyful%20and%20hopeful%20atmosphere%2C%20wide%20angle%20documentary%20photography&width=1200&height=400&seq=apadrinamiento-cta-bg&orientation=landscape')" }}
        >
          <div className="absolute inset-0 bg-emerald-900/70"></div>
          <div className="relative z-10">
            <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-3">Juntos somos más</p>
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Más de 180 niños esperan<br />un padrino como tú
            </h3>
            <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
              Tu compromiso mensual de $20 USD garantiza educación, salud y alimentación. Cancela cuando quieras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full transition-colors cursor-pointer whitespace-nowrap text-base"
              >
                <i className="ri-heart-line mr-2"></i>
                Quiero apadrinar un niño
              </a>
              <a
                href="#donaciones"
                className="bg-white/15 hover:bg-white/25 text-white font-bold px-8 py-4 rounded-full border border-white/30 transition-colors cursor-pointer whitespace-nowrap text-base"
              >
                Ver más información
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal con formulario real */}
      {modalNino && (
        <div
          className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-4"
          onClick={() => { if (formState !== 'loading') { setModalNino(null); setFormState('idle'); } }}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {formState === 'success' ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-5">
                  <i className="ri-heart-fill text-emerald-600 text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">¡Gracias por tu generosidad!</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Hemos recibido tu registro para apadrinar a <strong className="text-stone-700">{modalNino.nombre}</strong>.<br />
                  Nos pondremos en contacto contigo en las próximas 24 horas con todos los detalles.
                </p>
                <div className="mt-6 bg-emerald-50 rounded-xl p-4">
                  <p className="text-emerald-700 text-xs font-semibold">Revisa tu correo electrónico para confirmar tu registro.</p>
                </div>
              </div>
            ) : (
              <>
                {/* Header con foto del niño */}
                <div className="relative h-44 flex-shrink-0">
                  <img src={modalNino.img} alt={modalNino.nombre} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                  <button
                    onClick={() => { setModalNino(null); setFormState('idle'); }}
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full cursor-pointer transition-colors"
                  >
                    <i className="ri-close-line"></i>
                  </button>
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-0.5">Quiero apadrinar a</p>
                    <h3 className="text-white font-bold text-xl leading-tight">{modalNino.nombre}</h3>
                    <p className="text-white/75 text-sm">{modalNino.edad} años · {modalNino.comunidad}</p>
                  </div>
                </div>

                {/* Resumen del compromiso */}
                <div className="px-6 pt-5 pb-2">
                  <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-3 mb-5">
                    <div className="w-9 h-9 flex items-center justify-center bg-emerald-100 rounded-lg flex-shrink-0">
                      <i className="ri-hand-coin-line text-emerald-700"></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-emerald-800 font-bold text-sm">Compromiso mensual: $20 USD/mes</p>
                      <p className="text-emerald-600 text-xs">Educación · Salud · Alimentación · Sin permanencia</p>
                    </div>
                  </div>

                  {/* Formulario real */}
                  <form
                    id="form-registro-padrinos"
                    data-readdy-form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Nombre completo */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                        Nombre completo <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre y apellido"
                        className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors bg-stone-50 focus:bg-white placeholder:text-stone-300"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                        Correo electrónico <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@correo.com"
                        className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors bg-stone-50 focus:bg-white placeholder:text-stone-300"
                      />
                    </div>

                    {/* Teléfono y País en fila */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1.5">Teléfono / WhatsApp</label>
                        <input
                          type="tel"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="+51 999 000 000"
                          className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors bg-stone-50 focus:bg-white placeholder:text-stone-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1.5">País de residencia</label>
                        <select
                          name="pais"
                          value={formData.pais}
                          onChange={handleChange}
                          className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors bg-stone-50 focus:bg-white cursor-pointer"
                        >
                          <option value="">Seleccionar</option>
                          <option value="Perú">Perú</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Colombia">Colombia</option>
                          <option value="México">México</option>
                          <option value="Chile">Chile</option>
                          <option value="España">España</option>
                          <option value="Estados Unidos">Estados Unidos</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>
                    </div>

                    {/* Mensaje opcional */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                        Mensaje para {modalNino.nombre.split(' ')[0]} <span className="text-stone-300">(opcional)</span>
                      </label>
                      <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder={`Escríbele unas palabras de aliento a ${modalNino.nombre.split(' ')[0]}...`}
                        maxLength={500}
                        rows={3}
                        className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors bg-stone-50 focus:bg-white resize-none placeholder:text-stone-300"
                      />
                      <p className="text-xs text-stone-300 text-right mt-1">{formData.mensaje.length}/500</p>
                    </div>

                    {formState === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-2">
                        <i className="ri-error-warning-line text-red-500 text-sm"></i>
                        <p className="text-red-600 text-xs">Hubo un error al enviar. Por favor intenta de nuevo.</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white font-bold py-4 rounded-xl transition-colors cursor-pointer whitespace-nowrap text-sm flex items-center justify-center gap-2"
                    >
                      {formState === 'loading' ? (
                        <>
                          <i className="ri-loader-4-line animate-spin"></i>
                          Enviando registro...
                        </>
                      ) : (
                        <>
                          <i className="ri-heart-line"></i>
                          Confirmar apadrinamiento — $20 USD/mes
                        </>
                      )}
                    </button>

                    <p className="text-xs text-stone-400 text-center pb-2">
                      <i className="ri-shield-check-line mr-1"></i>
                      Tus datos están seguros · Sin permanencia · Cancela cuando quieras
                    </p>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
