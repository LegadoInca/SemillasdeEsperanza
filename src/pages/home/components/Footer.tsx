export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center bg-emerald-700 rounded-full">
                <i className="ri-seedling-line text-white text-lg"></i>
              </div>
              <div>
                <p className="font-bold text-white leading-none">Semillas de Esperanza</p>
                <p className="text-xs text-stone-400">ONG · Perú</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              Acompañamos a mujeres, niños y hombres de las comunidades campesinas del Perú hacia un futuro digno.
            </p>
            <div className="flex gap-3">
              {['ri-facebook-fill','ri-instagram-line','ri-youtube-line','ri-twitter-x-line'].map((icon) => (
                <a key={icon} href="#" className="w-8 h-8 flex items-center justify-center bg-stone-700 hover:bg-emerald-700 rounded-full transition-colors cursor-pointer">
                  <i className={`${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Nosotros</p>
            <ul className="space-y-2">
              {['Quiénes somos','Áreas de impacto','Proyectos activos','Transparencia','Aliados'].map((l) => (
                <li key={l}><a href="#" className="text-stone-400 hover:text-white text-sm transition-colors cursor-pointer">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Participa</p>
            <ul className="space-y-2">
              {['Donar ahora','Ser voluntario','Alianza corporativa','Historias reales','Contacto'].map((l) => (
                <li key={l}><a href="#" className="text-stone-400 hover:text-white text-sm transition-colors cursor-pointer">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contacto</p>
            <ul className="space-y-3">
              {[
                { icon: 'ri-mail-line', text: 'contacto@semillasdeesperanza.org.pe' },
                { icon: 'ri-phone-line', text: '+51 984 123 456' },
                { icon: 'ri-map-pin-line', text: 'Jr. Cusco 342, Miraflores, Lima' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-2 text-stone-400 text-sm">
                  <i className={`${item.icon} text-amber-400 mt-0.5 flex-shrink-0`}></i>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs">© 2024 Semillas de Esperanza. Todos los derechos reservados. RUC: 20601234567</p>
          <div className="flex gap-4">
            {['Política de privacidad','Términos de uso','Aviso legal'].map((l) => (
              <a key={l} href="#" className="text-stone-500 hover:text-stone-300 text-xs transition-colors cursor-pointer whitespace-nowrap">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
