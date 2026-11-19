import Image from "next/image";
import { experience, certificates } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-card/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="04 / Journey" title={<>Where I&apos;ve <em className="text-accent">worked.</em></>} />

        <ol className="relative space-y-6 border-l-2 border-line pl-6 sm:pl-10">
          {experience.map((e) => (
            <li key={e.company} className="reveal relative">
              <span className="absolute -left-[calc(1.5rem+7px)] top-8 h-3 w-3 rounded-full border-2 border-accent bg-paper sm:-left-[calc(2.5rem+7px)]" aria-hidden />
              <article className="card card-hover flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-7">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-line bg-white">
                  <Image src={e.logo} alt={`${e.company} logo`} fill sizes="64px" className="object-contain p-1.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-xl font-semibold tracking-tight">{e.company}</h3>
                    <span className="font-mono text-sm text-accent">{e.time}</span>
                  </div>
                  <p className="mt-0.5 font-medium text-muted">{e.role}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent/70" />{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <p className="eyebrow reveal">Certifications</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {certificates.map((c) => (
              <figure key={c.title} className="reveal card card-hover overflow-hidden">
                <div className="relative aspect-[16/10] bg-paper">
                  <Image src={c.image} alt={`${c.title} certificate`} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover object-top" />
                </div>
                <figcaption className="p-5">
                  <p className="font-semibold">{c.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{c.issuer}</p>
                  <p className="mt-2 font-mono text-xs text-accent">{c.date}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
