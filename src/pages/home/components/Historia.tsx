export default function Historia() {
  return (
    <section className="py-20 px-4 bg-[#f7f3ec]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Image */}
        <div className="w-full lg:w-[45%] flex-shrink-0">
          <div className="rounded-2xl overflow-hidden w-full h-[340px] md:h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80"
              alt="Caficultor peruano en sus campos"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-[55%]">
          <span className="inline-block bg-[#4a7c2f]/10 text-[#4a7c2f] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e0e] mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nació del silencio que nadie quiso escuchar
          </h2>
          <p className="text-[#3a3a3a] text-sm md:text-base leading-relaxed mb-4">
            En los rincones más remotos del Perú — en selvas, punas y valles olvidados — viven miles de familias que el Estado nunca alcanzó. Caficultores que trabajan 12 horas bajo el sol para vender su cosecha a precios injustos. Mujeres indígenas cuyos tejidos valen fortunas en Europa pero apenas cubren el arroz del día. Niños que caminan horas para llegar a una escuela sin materiales.
          </p>
          <p className="text-[#3a3a3a] text-sm md:text-base leading-relaxed mb-6">
            Y entre ellos, personas que lo perdieron todo por el terrorismo. Familias que cultivaron coca no por elección, sino por supervivencia, y que hoy quieren un futuro diferente.
          </p>

          <div className="border-l-4 border-[#c8a84b] pl-5 bg-[#c8a84b]/10 py-4 pr-4 rounded-r-lg mb-6">
            <p className="text-[#1a2e0e] text-sm md:text-base italic leading-relaxed">
              "Nosotros no damos limosnas. Damos herramientas, conocimiento y dignidad. Porque lo que estas comunidades necesitan no es compasión — es oportunidad."
            </p>
          </div>

          <p className="text-[#3a3a3a] text-sm md:text-base leading-relaxed">
            Semillas de Esperanza nació para ser ese puente. Entre el campo y el mercado. Entre el olvido y la esperanza. Entre quienes tienen y quienes merecen tener.
          </p>
        </div>
      </div>
    </section>
  );
}
