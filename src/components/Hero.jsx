import { useState } from 'react';
import { ArrowDown, Mail, FileText } from 'lucide-react';
import data from '../data/portfolio';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const initials = data.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-accent-light/8 blur-[128px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm{' '}
            <span className="gradient-text">{data.name}</span>
          </h1>
          <p className="mb-2 text-xl font-semibold text-accent-light sm:text-2xl">
            {data.headline}
          </p>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg lg:mx-0 mx-auto">
            {data.shortIntro}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent/90 hover:shadow-accent/40 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View My Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/5 px-6 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Mail size={16} />
              Contact Me
            </a>
            {data.resume.enabled && (
              <a
                href={data.resume.path}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-text-secondary/20 px-6 py-3 text-sm font-semibold text-text-secondary transition-all duration-300 hover:border-text-secondary/40 hover:text-text-primary hover:-translate-y-0.5"
              >
                <FileText size={16} />
                Download CV
              </a>
            )}
          </div>

          {/* Availability badge */}
          {data.availableForInternship && (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for Internship
            </div>
          )}
        </div>

        {/* Profile image / fallback initials */}
        <div className="relative shrink-0">
          <div className="glow gradient-border h-56 w-56 rounded-full sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            {data.profileImage && !imgError ? (
              <img
                src={data.profileImage}
                alt={data.name}
                onError={() => setImgError(true)}
                className="h-full w-full rounded-full object-cover"
                loading="eager"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-bg-card">
                <span className="gradient-text text-6xl font-bold sm:text-7xl lg:text-8xl select-none">
                  {initials}
                </span>
              </div>
            )}
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-4 -z-10 rounded-full border border-accent/10" />
          <div className="absolute -inset-8 -z-10 rounded-full border border-accent/5" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-text-secondary/50">
        <ArrowDown size={20} />
      </div>
    </section>
  );
}
