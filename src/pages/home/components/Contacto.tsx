import { useState, FormEvent } from 'react';

export default function Contacto() {
  const [tipo, setTipo] = useState<'contacto' | 'voluntario' | 'donante'>('contacto');
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    const form = e.currentTarget;
    const data = new URLSearchParams();
    Array.from(form.elements).forEach((el) => {
      const input = el as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      if (input.name && input.value) data.append(input.name, input.value);
    });
    data.append('tipo_consulta', tipo);
    try {
      await fetch('https://readdy.ai/api/form/d78l8sb2hsar0k5m0cjg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      setEnviado(true);
    } catch {
      setEnviado(true);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://readdy.ai/api/search-image?query=Peruvian%20Andes%20mountains%20landscape%2C%20aerial%20view%2C%20green%20valleys%2C%20misty%20morning%2C%20abstract%20texture&width=1440&height=600&seq=contacto-bg-01&orientation=landscape"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="text-white">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Únete al cambio</p>
            <h2 className="text-4xl font-bold mb-6">¿Quieres ser parte de este cambio?</h2>
            <p className="text-emerald-200 text-lg leading-relaxed mb-10">
              Ya sea como donante, voluntario o aliado, tu participación transforma vidas. Escríbenos y te contamos cómo puedes sumarte.
            </p>

            <div className="space-y-5">
              {[
                { icon: 'ri-mail-line', titulo: 'Correo electrónico', valor: 'contacto@semillasdeesperanza.org.pe' },
                { icon: 'ri-phone-line', titulo: 'Teléfono / WhatsApp', valor: '+51 984 123 456' },
                { icon: 'ri-map-pin-line', titulo: 'Oficina principal', valor: 'Jr. Cusco 342, Miraflores, Lima — Perú' },
                { icon: 'ri-time-line', titulo: 'Horario de atención', valor: 'Lun–Vie: 9:00 am – 6:00 pm' },
              ].map((item) => (
                <div key={item.titulo} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl flex-shrink-0">
                    <i className={`${item.icon} text-amber-400 text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-emerald-300 text-xs font-semibold uppercase tracking-wide">{item.titulo}</p>
                    <p className="text-white text-sm mt-0.5">{item.valor}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-10">
              {[
                { icon: 'ri-facebook-fill', href: '#' },
                { icon: 'ri-instagram-line', href: '#' },
                { icon: 'ri-youtube-line', href: '#' },
                { icon: 'ri-twitter-x-line', href: '#' },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-amber-500 rounded-full transition-colors cursor-pointer"
                >
                  <i className={`${s.icon} text-white text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8">
            {enviado ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-4">
                  <i className="ri-check-line text-emerald-700 text-3xl"></i>
                </div>
                <h3 className="font-bold text-stone-800 text-xl mb-2">¡Mensaje enviado!</h3>
                <p className="text-stone-500 text-sm">Nos pondremos en contacto contigo en menos de 24 horas. ¡Gracias por querer ser parte del cambio!</p>
                <button
                  onClick={() => { setEnviado(false); setCharCount(0); }}
                  className="mt-6 text-sm text-emerald-700 font-semibold cursor-pointer hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                {/* Tipo selector */}
                <div className="flex bg-stone-100 rounded-full p-1 mb-6">
                  {([
                    { key: 'contacto', label: 'Consulta' },
                    { key: 'voluntario', label: 'Voluntario' },
                    { key: 'donante', label: 'Donante' },
                  ] as const).map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTipo(t.key)}
                      className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                        tipo === t.key ? 'bg-white text-stone-800 shadow-sm' : 'text-stone-500'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <form data-readdy-form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-600 block mb-1">Nombre *</label>
                      <input name="nombre" required className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-stone-600 block mb-1">Apellido *</label>
                      <input name="apellido" required className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors" placeholder="Tu apellido" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-stone-600 block mb-1">Correo electrónico *</label>
                    <input name="email" type="email" required className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors" placeholder="tu@correo.com" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-stone-600 block mb-1">Teléfono</label>
                    <input name="telefono" className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors" placeholder="+51 999 999 999" />
                  </div>
                  {tipo === 'voluntario' && (
                    <div>
                      <label className="text-xs font-semibold text-stone-600 block mb-1">Profesión / Habilidad</label>
                      <input name="profesion" className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors" placeholder="Ej: Médico, Educador, Agrónomo..." />
                    </div>
                  )}
                  <div>
                    <label className="text-xs font-semibold text-stone-600 block mb-1">Mensaje * <span className="text-stone-400 font-normal">({charCount}/500)</span></label>
                    <textarea
                      name="mensaje"
                      required
                      maxLength={500}
                      rows={4}
                      onChange={(e) => setCharCount(e.target.value.length)}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Cuéntanos cómo quieres ayudar o qué necesitas saber..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-sm transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {enviando ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
