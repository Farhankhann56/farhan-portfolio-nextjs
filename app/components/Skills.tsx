import { skills } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHead eyebrow="03 / Toolbox" title={<>Technologies I <em className="text-accent">work with.</em></>} />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="reveal card p-7">
            <h3 className="font-mono text-sm font-medium uppercase tracking-widest text-muted">{g.group}</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {g.items.map((i) => (
                <li key={i} className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium transition hover:border-accent hover:bg-accent-soft hover:text-accent-dark">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
