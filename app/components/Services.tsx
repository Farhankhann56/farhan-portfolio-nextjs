import { services } from "@/lib/data";
import SectionHead from "./SectionHead";
import Icon from "./Icon";

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-card/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="02 / What I do" title={<>Complete products, <em className="text-accent">end to end.</em></>}
          text="Interface, backend, and the intelligence layer when a project needs it." />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="reveal card card-hover p-8">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-white">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
