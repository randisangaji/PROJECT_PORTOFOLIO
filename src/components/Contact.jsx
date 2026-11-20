import { Mail, Github, Linkedin, Send } from 'lucide-react';
import data from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="reveal mx-auto max-w-3xl text-center">
        {/* Section header */}
        <p className="mb-2 text-sm font-semibold tracking-widest text-accent uppercase">
          Get in touch
        </p>
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-text-secondary">
          {data.contact.message}
        </p>

        {/* Contact buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Email */}
          <a
            href={`mailto:${data.contact.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent/90 hover:shadow-accent/40 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Mail size={18} />
            Send an Email
          </a>

          {/* GitHub */}
          {data.social.github && (
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/5 px-6 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Github size={18} />
              GitHub
            </a>
          )}

          {/* LinkedIn */}
          {data.social.linkedin && (
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/5 px-6 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          )}
        </div>

        {/* Email display */}
        <p className="mt-8 text-sm text-text-secondary">
          Or email me directly at{' '}
          <a
            href={`mailto:${data.contact.email}`}
            className="font-medium text-accent transition-colors hover:text-accent-light"
          >
            {data.contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}
