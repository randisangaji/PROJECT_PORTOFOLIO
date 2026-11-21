import { Github, Linkedin, Heart } from 'lucide-react';
import data from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        {/* Brand + copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold">
            <span className="gradient-text">Lifelong Learner</span>
            <span className="text-text-secondary">.</span>
          </p>
          <p className="mt-1 text-xs text-text-secondary">
            &copy; {year} {data.name}. All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {data.social.github && (
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-card hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {data.social.linkedin && (
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-card hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
