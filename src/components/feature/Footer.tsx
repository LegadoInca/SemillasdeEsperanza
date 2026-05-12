import { footerData } from "@/mocks/homeData";

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center bg-emerald-700 rounded-full">
                <i className="ri-seedling-line text-white text-lg" />
              </div>
              <div>
                <p className="font-bold text-white leading-none">Semillas de Esperanza</p>
                <p className="text-xs text-stone-400">ONG · Perú</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-5">{footerData.description}</p>
            <div className="flex gap-3">
              {footerData.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  className="w-8 h-8 flex items-center justify-center bg-stone-700 hover:bg-emerald-700 rounded-full transition-colors cursor-pointer"
                  rel="nofollow"
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerData.columns.map((col) => (
            <div key={col.title}>
              <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-stone-400 hover:text-white text-sm transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contacto</p>
            <ul className="space-y-3">
              {footerData.contact.map((item) => (
                <li key={item.text} className="flex items-start gap-2 text-stone-400 text-sm">
                  <i className={`${item.icon} text-amber-400 mt-0.5 flex-shrink-0`} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs text-center sm:text-left">{footerData.copyright}</p>
          <div className="flex gap-4">
            {footerData.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-stone-500 hover:text-stone-300 text-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}