import { heroData } from "@/mocks/homeData";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Comunidades campesinas del Perú"
          className="w-full h-full object-cover object-top"
          src="https://readdy.ai/api/search-image?query=Peruvian%20campesino%20community%20children%20and%20women%20in%20the%20Andes%20mountains%2C%20colorful%20traditional%20clothing%2C%20warm%20sunlight%2C%20hopeful%20expressions%2C%20rural%20village%2C%20mountains%20in%20background%2C%20documentary%20photography%20style%2C%20vibrant%20and%20emotional&width=1440&height=900&seq=hero-ong-01&orientation=landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90">{heroData.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-['Playfair_Display']">
            {heroData.title}
            <br />
            <span className="text-amber-400 italic">{heroData.highlight}</span>
            <br />
            {heroData.subtitle}
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
            {heroData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#donaciones"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base transition-all cursor-pointer whitespace-nowrap text-center"
            >
              {heroData.ctaPrimary}
            </a>
            <a
              href={heroData.ctaSecondaryHref}
              className="border-2 border-white/60 hover:border-white text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full text-base transition-all cursor-pointer whitespace-nowrap text-center backdrop-blur-sm"
            >
              {heroData.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hidden lg:block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white min-w-[260px]">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-4">Impacto 2024</p>
          <div className="space-y-4">
            {heroData.stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-amber-500/20 rounded-lg">
                  <i className={`${stat.icon} text-amber-400 text-lg`} />
                </div>
                <div>
                  <p className="font-bold text-lg leading-none">{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <i className="ri-arrow-down-line text-2xl" />
      </div>
    </section>
  );
}