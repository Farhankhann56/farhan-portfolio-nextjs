"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { projects, type Project } from "@/lib/data";
import SectionHead from "./SectionHead";
import Icon from "./Icon";

const filters = ["All", "AI / ML", "Full-Stack", "Frontend"] as const;
const LIMIT = 6;

function Card({ p }: { p: Project }) {
  return (
    <article className="card card-hover flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        {p.image ? (
          <Image src={p.image} alt={`${p.title} screenshot`} fill sizes="(max-width: 768px) 100vw, 380px" className="object-cover object-top" />
        ) : (
          <div className="grid h-full w-full place-items-center"
               style={{ background: `linear-gradient(135deg, ${p.cover?.from}, ${p.cover?.to})` }}>
            <div className="absolute inset-0 opacity-20"
                 style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
            <Icon name={p.cover?.icon ?? ""} className="relative h-16 w-16 text-white" />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 font-mono text-[11px] font-medium text-ink shadow-sm">
          {p.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted">{p.desc}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <li key={t} className="rounded-md bg-paper px-2.5 py-1 font-mono text-xs text-muted ring-1 ring-line">{t}</li>
          ))}
        </ul>
        {(p.repo || p.demo) && (
          <div className="mt-5 flex gap-5 border-t border-line pt-4 text-sm font-semibold">
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                <FaGithub /> Code
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                <LuExternalLink /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [showAll, setShowAll] = useState(false);

  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const visible = showAll ? list : list.slice(0, LIMIT);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHead eyebrow="05 / Selected work" title={<>Projects I&apos;m <em className="text-accent">proud of.</em></>}
        text="A mix of full-stack applications and AI-powered tools, built with React, Node.js, PHP and Python." />

      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f}
                  onClick={() => { setFilter(f); setShowAll(false); }}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    filter === f ? "border-ink bg-ink text-white" : "border-line bg-card text-muted hover:border-accent hover:text-accent"
                  }`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => <Card key={p.title} p={p} />)}
      </div>

      {list.length > LIMIT && (
        <div className="mt-12 text-center">
          <button onClick={() => setShowAll(!showAll)}
                  className="rounded-full border border-ink/20 bg-card px-8 py-3.5 font-semibold transition hover:border-accent hover:text-accent">
            {showAll ? "Show fewer" : `Show all ${list.length} projects`}
          </button>
        </div>
      )}
    </section>
  );
}
