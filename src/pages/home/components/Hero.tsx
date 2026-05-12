export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Peruvian%20campesino%20community%20children%20and%20women%20in%20the%20Andes%20mountains%2C%20colorful%20traditional%20clothing%2C%20warm%20sunlight%2C%20hopeful%20expressions%2C%20rural%20village%2C%20mountains%20in%20background%2C%20documentary%20photography%20style%2C%20vibrant%20and%20emotional&width=1440&height=900&seq=hero-ong-01&orientation=landscape"
          alt="Comunidades campesinas del Perú"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">Desde 2015 transformando vidas en el Perú</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Cada historia
            <br />
            <span className="text-amber-400 italic">merece</span>
            <br />
            un futuro digno.
          </h1>

          <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
            Acompañamos a mujeres, niños y hombres de las comunidades campesinas del Perú en su camino hacia la educación, la salud y el desarrollo humano. Porque detrás de cada semilla hay una vida que florece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#donaciones"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all cursor-pointer whitespace-nowrap text-center"
            >
              Siembra esperanza hoy
            </a>
            <a
              href="#historias"
              className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-base transition-all cursor-pointer whitespace-nowrap text-center backdrop-blur-sm"
            >
              Conoce sus historias
            </a>
          </div>
        </div>

        {/* Floating Impact Card */}
        <div className="hidden lg:block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white min-w-[260px]">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-4">Impacto 2024</p>
          <div className="space-y-4">
            {[
              { icon: 'ri-heart-line', value: '3,200+', label: 'Familias acompañadas' },
              { icon: 'ri-book-open-line', value: '1,800+', label: 'Niños en programas educativos' },
              { icon: 'ri-women-line', value: '940+', label: 'Mujeres empoderadas' },
              { icon: 'ri-map-pin-line', value: '18', label: 'Provincias del Perú' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-amber-500/20 rounded-lg">
                  <i className={`${item.icon} text-amber-400 text-lg`}></i>
                </div>
                <div>
                  <p className="font-bold text-lg leading-none">{item.value}</p>
                  <p className="text-xs text-white/60">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}
