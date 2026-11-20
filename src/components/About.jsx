import { MapPin, GraduationCap, BookOpen, Calendar } from 'lucide-react';
import data from '../data/portfolio';

const iconMap = {
  University: GraduationCap,
  Program: BookOpen,
  'Class Of': Calendar,
  Origin: MapPin,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div className="reveal mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-accent uppercase">
            Get to know me
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Bio text */}
          <div className="space-y-5 lg:col-span-3">
            {data.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-text-secondary"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Highlights cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {data.about.highlights.map((h) => {
              const Icon = iconMap[h.label] || BookOpen;
              return (
                <div
                  key={h.label}
                  className="glass group rounded-2xl p-5 transition-all duration-300 hover:border-accent/20 hover:-translate-y-0.5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Icon size={20} />
                  </div>
                  <p className="text-xs font-medium tracking-wide text-text-secondary uppercase">
                    {h.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-text-primary">
                    {h.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
