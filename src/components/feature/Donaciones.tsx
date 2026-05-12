import { useState } from "react";
import { donacionesData } from "@/mocks/homeData";

export default function Donaciones() {
  const [activeTab, setActiveTab] = useState<"persona" | "empresa">("persona");
  const [selectedAmount, setSelectedAmount] = useState(30);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = donacionesData.montos;
  const impact = donacionesData.impactos as Record<number, string>;

  const currentImpact =
    impact[customAmount ? parseInt(customAmount) || 0 : selectedAmount] ||
    impact[selectedAmount] ||
    "Tu donación ayuda a las comunidades";

  const displayAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;

  return (
    <section id="donaciones" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Fondo donaciones"
          className="w-full h-full object-cover object-top"
          src="https://readdy.ai/api/search-image?query=Peruvian%20Andes%20mountains%20landscape%2C%20aerial%20view%2C%20green%20valleys%2C%20misty%20morning%2C%20abstract%20texture&width=1440&height=600&seq=contacto-bg-01&orientation=landscape"
        />
      </div>
      <div className="absolute inset-0 bg-amber-900/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left video */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-top"
                poster="https://readdy.ai/api/search-image?query=Hands%20planting%20a%20seedling%20in%20fertile%20dark%20soil%2C%20close%20up%2C%20warm%20golden%20sunlight%20rays%2C%20green%20sprout%20emerging%2C%20hope%20and%20growth%20concept%2C%20soft%20bokeh%20background%2C%20cinematic%20documentary%20style%2C%20warm%20earthy%20tones&width=700&height=500&seq=donaciones-video-poster&orientation=portrait"
              >
                <source
                  src="https://videos.pexels.com/video-files/3209219/3209219-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xl md:text-2xl font-bold leading-tight mb-2">
                Tu donación no compra una cifra.
              </p>
              <p className="text-amber-400 text-lg md:text-xl font-bold italic">Compra un futuro.</p>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 md:p-8">
            <div className="flex bg-stone-100 rounded-full p-1 mb-6 md:mb-8 w-fit">
              <button
                type="button"
                onClick={() => setActiveTab("persona")}
                className={`px-5 md:px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === "persona" ? "bg-white text-stone-800 shadow-sm" : "text-stone-500 hover:text-stone-700"}`}
              >
                Persona
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("empresa")}
                className={`px-5 md:px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === "empresa" ? "bg-white text-stone-800 shadow-sm" : "text-stone-500 hover:text-stone-700"}`}
              >
                Empresa
              </button>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2">{donacionesData.title}</h2>
            <p className="text-stone-500 mb-6 md:mb-8 text-sm md:text-base">{donacionesData.subtitle}</p>

            {/* Reemplazo temporal de montos por imagen */}
            <div className="rounded-2xl overflow-hidden h-[260px] md:h-[300px] mb-4 relative group">
              <img
                alt="Niños de comunidades rurales del Perú recibiendo apoyo"
                className="w-full h-full object-cover object-top"
                src="https://readdy.ai/api/search-image?query=Peruvian%20children%20in%20rural%20community%20receiving%20school%20supplies%20and%20food%20aid%2C%20warm%20golden%20hour%20light%2C%20smiling%20faces%2C%20rural%20Piura%20region%20background%20with%20dry%20landscape%2C%20emotional%20and%20hopeful%20atmosphere%2C%20documentary%20photography%20style%2C%20warm%20earthy%20tones&width=700&height=450&seq=donaciones-reemplazo-img&orientation=landscape"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-lg md:text-xl font-bold leading-tight mb-1">Tu donación transforma vidas</p>
                <p className="text-emerald-200 text-sm">Cada aporte llega directo a las comunidades de Piura.</p>
              </div>
            </div>

            <a
              href="#contacto"
              className="w-full block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 md:py-4 rounded-xl text-center text-base transition-colors cursor-pointer whitespace-nowrap"
            >
              Quiero donar
            </a>
            <p className="text-xs text-stone-400 text-center mt-3">
              <i className="ri-shield-check-line mr-1" />
              Donación segura · Recibo de donación disponible · 100% va a las comunidades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}