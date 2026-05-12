import { useState } from "react";
import { contactoData } from "@/mocks/homeData";

export default function Contacto() {
  const [activeTab, setActiveTab] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = new URLSearchParams();
    formData.forEach((value, key) => {
      data.append(key, value.toString());
    });
    fetch(contactoData.formUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    }).then(() => {
      setSubmitted(true);
      form.reset();
      setCharCount(0);
    });
  };

  return (
    <section id="contacto" className="py-20 md:py-24 bg-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          alt=""
          className="w-full h-full object-cover object-top"
          src="https://readdy.ai/api/search-image?query=Peruvian%20Andes%20mountains%20landscape%2C%20aerial%20view%2C%20green%20valleys%2C%20misty%20morning%2C%20abstract%20texture&width=1440&height=600&seq=contacto-bg-01&orientation=landscape"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left info */}
          <div className="text-white">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              {contactoData.badge}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{contactoData.title}</h2>
            <p className="text-emerald-200 text-base md:text-lg leading-relaxed mb-10">
              {contactoData.description}
            </p>
            <div className="space-y-5">
              {contactoData.info.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl flex-shrink-0">
                    <i className={`${item.icon} text-amber-400 text-lg`} />
                  </div>
                  <div>
                    <p className="text-emerald-300 text-xs font-semibold uppercase tracking-wide">{item.label}</p>
                    <p className="text-white text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-10">
              {contactoData.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-amber-500 rounded-full transition-colors cursor-pointer"
                  rel="nofollow"
                >
                  <i className={`${s.icon} text-white text-base`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="flex bg-stone-100 rounded-full p-1 mb-6">
              {contactoData.formTabs.map((tab, idx) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveTab(idx);
                    setSubmitted(false);
                  }}
                  className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === idx ? "bg-white text-stone-800 shadow-sm" : "text-stone-500"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-4">
                  <i className="ri-check-line text-emerald-700 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">¡Mensaje enviado!</h3>
                <p className="text-stone-500 text-sm">Gracias por contactarnos. Te responderemos pronto.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-emerald-700 text-sm font-bold hover:text-emerald-800 cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form data-readdy-form="true" id="contacto-form" className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-600 block mb-1">Nombre *</label>
                    <input
                      required
                      name="nombre"
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-stone-600 block mb-1">Apellido *</label>
                    <input
                      required
                      name="apellido"
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-600 block mb-1">Correo electrónico *</label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors"
                    placeholder="tu@correo.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-600 block mb-1">Teléfono</label>
                  <input
                    name="telefono"
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors"
                    placeholder="+51 999 999 999"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-stone-600 block mb-1">
                    Mensaje *{" "}
                    <span className="text-stone-400 font-normal">({charCount}/500)</span>
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    maxLength={500}
                    rows={4}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Cuéntanos cómo quieres ayudar o qué necesitas saber..."
                    onChange={(e) => setCharCount(e.target.value.length)}
                  />
                </div>
                <input type="hidden" name="tipo" value={contactoData.formTabs[activeTab]} />
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 md:py-4 rounded-xl text-sm transition-colors cursor-pointer whitespace-nowrap"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}