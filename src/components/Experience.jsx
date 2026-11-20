import { useState } from 'react';
import { Building2, Briefcase, Heart, Calendar } from 'lucide-react';
import data from '../data/portfolio';

const typeIcons = {
  Organization: Building2,
  Internship: Briefcase,
  Volunteer: Heart,
  Work: Briefcase,
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-bg-secondary/50" />

      <div className="reveal relative mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-accent uppercase">
            My journey
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/15 sm:left-1/2 sm:-translate-x-px" />

          {data.experience.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }) {
  const [logoError, setLogoError] = useState(false);
  const Icon = typeIcons[exp.type] || Building2;
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative mb-12 flex items-start gap-6 sm:gap-0 ${
        isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-6 top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:left-1/2">
        <span className="h-3 w-3 rounded-full border-2 border-accent bg-bg-primary" />
      </div>

      {/* Spacer for mobile */}
      <div className="w-12 shrink-0 sm:hidden" />

      {/* Card */}
      <div className={`glass w-full rounded-2xl p-6 transition-all duration-300 hover:border-accent/20 hover:-translate-y-0.5 sm:w-[calc(50%-2rem)] ${
        isLeft ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
      }`}>
        <div className="mb-3 flex items-center gap-3">
          {/* Logo / icon fallback */}
          {exp.logo && !logoError ? (
            <img
              src={exp.logo}
              alt={exp.organization}
              onError={() => setLogoError(true)}
              className="h-10 w-10 rounded-xl object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon size={20} />
            </div>
          )}
          <div>
            <h3 className="text-base font-bold">{exp.organization}</h3>
            {exp.role && (
              <p className="text-sm font-medium text-accent">{exp.role}</p>
            )}
          </div>
        </div>

        {exp.period && (
          <div className="mb-2 flex items-center gap-1.5 text-xs text-text-secondary">
            <Calendar size={12} />
            {exp.period}
          </div>
        )}

        {exp.description && (
          <p className="text-sm leading-relaxed text-text-secondary">
            {exp.description}
          </p>
        )}

        {exp.type && (
          <span className="mt-3 inline-block rounded-md bg-accent/8 px-2 py-0.5 text-xs font-medium text-accent-light">
            {exp.type}
          </span>
        )}
      </div>
    </div>
  );
}
