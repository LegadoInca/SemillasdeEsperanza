import { useEffect, useRef, useState } from 'react';

const stats = [
  { icon: 'ri-group-line', target: 3200, suffix: '+', label: 'Familias beneficiadas' },
  { icon: 'ri-book-2-line', target: 1800, suffix: '+', label: 'Niños en educación' },
  { icon: 'ri-women-line', target: 940, suffix: '+', label: 'Mujeres empoderadas' },
  { icon: 'ri-map-pin-2-line', target: 18, suffix: '', label: 'Provincias atendidas' },
  { icon: 'ri-seedling-line', target: 120, suffix: '+', label: 'Proyectos ejecutados' },
  { icon: 'ri-calendar-check-line', target: 9, suffix: '', label: 'Años de impacto' },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let animFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [target, duration, started]);

  return count;
}

function StatItem({ icon, target, suffix, label, started }: {
  icon: string;
  target: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const count = useCountUp(target, 2000, started);

  return (
    <div className="text-center">
      <div className="w-10 h-10 flex items-center justify-center mx-auto mb-2 bg-white/10 rounded-full">
        <i className={`${icon} text-amber-400 text-xl`}></i>
      </div>
      <p className="text-3xl font-bold text-white tabular-nums">
        {count.toLocaleString('es-PE')}{suffix}
      </p>
      <p className="text-xs text-emerald-200 mt-1">{label}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  return (
    <section ref={sectionRef} className="bg-emerald-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              started={started}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
