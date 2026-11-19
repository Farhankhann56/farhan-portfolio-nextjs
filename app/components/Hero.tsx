import Image from "next/image";
import { LuArrowRight, LuDownload, LuMapPin } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { site, about, projects, experience, certificates } from "@/lib/data";

const stats = [
  { n: projects.length, label: "Projects built" },
  { n: experience.length, label: "Internships completed" },
  { n: certificates.length, label: "Certifications" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="dots pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent-soft blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-12 md:grid-cols-[1.15fr_0.85fr] md:pt-20 lg:gap-20">
        <div className="hero-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-xs font-medium text-muted shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to full-stack &amp; AI projects
          </span>

          <h1 className="section-title mt-7 text-5xl sm:text-6xl lg:text-7xl">
            I build web apps and <em className="text-accent">AI tools</em> that ship.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Hi, I&apos;m <strong className="font-semibold text-ink">{site.name}</strong>. {about.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects"
               className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-white shadow-lg shadow-ink/15 transition hover:bg-accent">
              View my work <LuArrowRight />
            </a>
            <a href="#contact"
               className="inline-flex items-center rounded-full border border-ink/20 bg-card px-7 py-3.5 font-semibold transition hover:border-accent hover:text-accent">
              Contact me
            </a>
            {site.cvUrl && (
              <a href={site.cvUrl} download
                 className="inline-flex items-center gap-2 px-3 py-3.5 font-semibold text-muted transition hover:text-accent">
                <LuDownload /> Download CV
              </a>
            )}
          </div>

          <div className="mt-8 flex items-center gap-3 text-muted">
            <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
               className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card transition hover:border-accent hover:text-accent">
              <FaGithub size={18} />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
               className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card transition hover:border-accent hover:text-accent">
              <FaLinkedinIn size={18} />
            </a>
            <span className="ml-2 flex items-center gap-1.5 text-sm"><LuMapPin /> {site.location}</span>
          </div>
        </div>

        <div className="hero-in relative mx-auto w-full max-w-[22rem] md:max-w-none" style={{ animationDelay: ".15s" }}>
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-accent/30" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-line shadow-2xl shadow-ink/15">
            <Image src="/images/farhan.webp" alt={`${site.name}, ${site.role}`} fill priority
                   sizes="(max-width: 768px) 80vw, 420px" className="object-cover object-top" />
          </div>
          <div className="absolute -left-3 bottom-8 hidden rounded-2xl border border-line bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Focus</p>
            <p className="text-sm font-semibold">React · Node.js · Python</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16">
        <dl className="grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-card/80 py-6 backdrop-blur">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col px-3 text-center sm:px-6">
              <dd className="section-title order-1 text-4xl sm:text-5xl">{s.n}</dd>
              <dt className="order-2 mt-1 text-xs text-muted sm:text-sm">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
