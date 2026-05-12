import { statsBar } from "@/mocks/homeData";

export default function StatsBar() {
  return (
    <section className="bg-emerald-800 py-5 md:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {statsBar.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-2 bg-white/10 rounded-full">
                <i className={`${stat.icon} text-amber-400 text-xl`} />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white tabular-nums">{stat.value}</p>
              <p className="text-xs text-emerald-200 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}