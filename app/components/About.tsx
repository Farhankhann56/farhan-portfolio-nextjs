import { LuMail, LuMapPin, LuLanguages } from "react-icons/lu";
import { about, site } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function About() {
  const facts = [
    { Icon: LuMail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { Icon: LuMapPin, label: "Based in", value: site.location },
    { Icon: LuLanguages, label: "Languages", value: site.languages },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHead eyebrow="01 / About" title={<>Developer first, <em className="text-accent">product</em> minded.</>} />
          <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>

        <div className="reveal card self-start p-7">
          <p className="eyebrow">Quick facts</p>
          <ul className="mt-5 space-y-5">
            {facts.map(({ Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"><Icon size={20} /></span>
                <div className="min-w-0">
                  <p className="text-sm text-muted">{label}</p>
                  {href ? <a href={href} className="break-all font-semibold hover:text-accent">{value}</a>
                        : <p className="font-semibold">{value}</p>}
                </div>
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-accent">
            Let&apos;s work together
          </a>
        </div>
      </div>
    </section>
  );
}
