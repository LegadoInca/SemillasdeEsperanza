import { quienesSomosData } from "@/mocks/homeData";

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="relative py-12 md:py-16 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://readdy.ai/api/search-image?query=Peruvian%20Andes%20mountains%20landscape%2C%20aerial%20view%2C%20green%20valleys%2C%20misty%20morning%2C%20abstract%20texture&width=1440&height=600&seq=contacto-bg-01&orientation=landscape"
      >
        <source
          src="https://res.cloudinary.com/djfmngyl0/video/upload/v1774742817/17618554-hd_1920_1080_30fps_snriob.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-stone-900/45" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="rounded-3xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/10">
          <div className="text-center pt-6 pb-4 px-6 md:px-8 border-b border-white/10">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">
              {quienesSomosData.badge}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight font-['Playfair_Display']">{quienesSomosData.title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left column */}
            <div className="p-4 md:p-6 border-r-0 lg:border-r border-white/10 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden h-48 md:h-72 w-full">
                <img
                  alt="Equipo de Semillas de Esperanza con chalecos guindas y polos blancos"
                  className="w-full h-full object-cover object-top"
                  src={quienesSomosData.image}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {quienesSomosData.miniStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-amber-400 text-xl md:text-2xl font-bold leading-none">{stat.value}</p>
                    <p className="text-white/60 text-xs mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {quienesSomosData.values.map((val) => (
                  <div key={val.text} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2">
                    <div className="w-7 h-7 flex items-center justify-center bg-amber-500/20 rounded-lg shrink-0">
                      <i className={`${val.icon} text-amber-400 text-sm`} />
                    </div>
                    <p className="text-white/80 text-sm">{val.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="p-4 md:p-6 flex flex-col gap-3">
              {quienesSomosData.paragraphs.map((p, idx) => (
                <div key={idx} className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <p
                    className="text-white/85 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                </div>
              ))}

              <div className="bg-amber-500/15 border border-amber-400/30 rounded-xl p-3">
                <i className="ri-double-quotes-l text-2xl text-amber-400/60 block mb-2" />
                <p className="text-white/90 text-sm italic leading-relaxed">
                  &ldquo;{quienesSomosData.quote.text}&rdquo;
                </p>
                <p className="text-amber-400 text-xs mt-2 font-medium">— {quienesSomosData.quote.author}</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {quienesSomosData.pillars.map((pillar) => (
                  <div key={pillar.title} className="bg-white/10 rounded-lg p-3 border border-white/10">
                    <div className="w-7 h-7 flex items-center justify-center bg-emerald-500/20 rounded-lg mb-2">
                      <i className={`${pillar.icon} text-emerald-300 text-sm`} />
                    </div>
                    <p className="font-semibold text-white text-sm mb-1">{pillar.title}</p>
                    <p className="text-white/55 text-xs leading-relaxed">{pillar.desc}</p>
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