import { Code2, Globe, Database, Lightbulb } from 'lucide-react';
import data from '../data/portfolio';

const categoryIcons = {
  'Programming Languages': Code2,
  'Web Technologies': Globe,
  Databases: Database,
  'Areas of Interest': Lightbulb,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-bg-secondary/50" />

      <div className="reveal relative mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-accent uppercase">
            What I work with
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {data.skills.map((group) => {
            const Icon = categoryIcons[group.category] || Code2;
            return (
              <div
                key={group.category}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-accent/20 hover:-translate-y-0.5"
              >
                {/* Category header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{group.category}</h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-accent/10 bg-accent/5 px-3 py-1.5 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
