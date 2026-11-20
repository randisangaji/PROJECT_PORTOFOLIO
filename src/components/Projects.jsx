import { useState } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import data from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="reveal mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-accent uppercase">
            What I've built
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = project.image && !imgError;
  const hasGithub = !!project.github;
  const hasLive = !!project.live;

  return (
    <article className="glass group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-accent/20 hover:-translate-y-1">
      {/* Image / placeholder */}
      <div className="relative aspect-video w-full overflow-hidden bg-bg-secondary">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-bg-card">
            <Folder size={40} className="text-accent/30" />
          </div>
        )}
        {/* Category badge */}
        {project.category && (
          <span className="absolute right-3 top-3 rounded-lg bg-bg-primary/80 px-2.5 py-1 text-xs font-medium text-accent backdrop-blur-sm">
            {project.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-accent/8 px-2 py-0.5 text-xs font-medium text-accent-light"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons — only rendered if URLs exist */}
        {(hasGithub || hasLive) && (
          <div className="flex gap-3 border-t border-white/5 pt-4">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {hasLive && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
