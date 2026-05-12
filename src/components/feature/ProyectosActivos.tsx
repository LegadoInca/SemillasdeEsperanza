import { proyectosData } from "@/mocks/homeData";

const estadoColors: Record<string, { bg: string; text: string }> = {
  red: { bg: "bg-red-100", text: "text-red-700" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-700" },
  amber: { bg: "bg-amber-100", text: "text-amber-700" },
};

export default function ProyectosActivos() {
  return (
    <section id="proyectos" className="py-20 md:py-24 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://readdy.ai/api/search-image?query=Peruvian%20Andes%20mountains%20landscape%2C%20aerial%20view%2C%20green%20valleys%2C%20misty%20morning%2C%20abstract%20texture&width=1440&height=600&seq=contacto-bg-01&orientation=landscape"
      >
        <source
          src="https://res.cloudinary.com/djfmngyl0/video/upload/v1773436299/14701095_1920_1080_30fps_amrqfg.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-stone-900/45" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {proyectosData.badge}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 whitespace-pre-line font-['Times_New_Roman',_serif] italic">
            {proyectosData.title}
          </h2>
          <p className="text-stone-300 max-w-xl mx-auto text-sm md:text-base">{proyectosData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectosData.proyectos.map((proyecto) => {
            const estadoStyle = estadoColors[proyecto.estadoColor] || { bg: "bg-stone-100", text: "text-stone-700" };
            return (
              <div
                key={proyecto.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={proyecto.title}
                    className="w-full h-full object-cover object-top"
                    src={proyecto.image}
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${estadoStyle.bg} ${estadoStyle.text}`}>
                      {proyecto.estado}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 text-stone-700 flex items-center gap-1">
                      <i className={`${proyecto.icon} mr-1`} />
                      {proyecto.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-base mb-2">{proyecto.title}</h3>
                  <p className="text-stone-300 text-sm leading-relaxed mb-4 flex-1">{proyecto.description}</p>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-stone-300 mb-1.5">
                      <span>S/ {proyecto.recaudado.toLocaleString()} recaudados</span>
                      <span className="font-semibold text-emerald-400">{proyecto.porcentaje}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full transition-all"
                        style={{ width: `${proyecto.porcentaje}%` }}
                      />
                    </div>
                    <p className="text-xs text-stone-400 mt-1">Meta: S/ {proyecto.meta.toLocaleString()}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-stone-400 flex-wrap">
                      <i className="ri-group-line" />
                      <span>{proyecto.beneficiarios} beneficiarios</span>
                      <span className="mx-1">·</span>
                      <i className="ri-map-pin-line" />
                      <span>{proyecto.region}</span>
                    </div>
                    <a
                      href="#donaciones"
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer whitespace-nowrap"
                    >
                      Apoyar →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}