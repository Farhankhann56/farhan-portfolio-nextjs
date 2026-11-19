"use client";

import { useState, type FormEvent } from "react";
import { LuCheck, LuLoader, LuMail, LuMapPin, LuSend } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { site } from "@/lib/data";
import SectionHead from "./SectionHead";

type Status = "idle" | "sending" | "sent" | "error";

const input =
  "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-ink outline-none transition placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/15";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (d.website) return; // honeypot: bots fill this field

    // EmailJS not configured yet: open the visitor's email app with the message filled in.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const body = `${d.message}\n\n— ${d.name} (${d.email})`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Portfolio message from " + d.name)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    setNote("");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { name: d.name, email: d.email, message: d.message }, PUBLIC_KEY);
      form.reset();
      setStatus("sent");
    } catch {
      setNote(`Could not send your message. Please email me directly at ${site.email}.`);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line bg-card/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="06 / Contact" title={<>Let&apos;s build something <em className="text-accent">great.</em></>}
          text="Got a project or an opportunity in mind? Send a message and I'll get back to you soon." />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="reveal space-y-4">
            <div className="card flex items-center gap-4 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"><LuMail size={22} /></span>
              <div className="min-w-0">
                <p className="text-sm text-muted">Email</p>
                <a href={`mailto:${site.email}`} className="break-all font-semibold hover:text-accent">{site.email}</a>
              </div>
            </div>
            <div className="card flex items-center gap-4 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"><LuMapPin size={22} /></span>
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="font-semibold">{site.location}</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                 className="grid h-12 w-12 place-items-center rounded-full border border-line bg-card transition hover:border-accent hover:text-accent"><FaGithub size={20} /></a>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="grid h-12 w-12 place-items-center rounded-full border border-line bg-card transition hover:border-accent hover:text-accent"><FaLinkedinIn size={20} /></a>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="reveal card p-6 sm:p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600"><LuCheck size={32} /></span>
                <h3 className="section-title mt-5 text-3xl">Message sent</h3>
                <p className="mt-2 text-muted">Thanks for reaching out. I&apos;ll reply soon.</p>
                <button type="button" onClick={() => setStatus("idle")}
                        className="mt-6 rounded-full border border-ink/20 px-6 py-2.5 font-semibold transition hover:border-accent hover:text-accent">
                  Send another
                </button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold">Your name</span>
                  <input className={input} name="name" required minLength={2} maxLength={80} placeholder="Your name" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold">Your email</span>
                  <input className={input} type="email" name="email" required maxLength={120} placeholder="you@example.com" autoComplete="email" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold">Message</span>
                  <textarea className={`${input} resize-y`} name="message" required minLength={10} maxLength={3000} rows={6}
                            placeholder="Tell me about your project..." />
                </label>
                {status === "error" && (
                  <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 sm:col-span-2">{note}</p>
                )}
                <button type="submit" disabled={status === "sending"}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-white transition hover:bg-accent disabled:opacity-60 sm:col-span-2 sm:justify-self-start">
                  {status === "sending" ? <><LuLoader className="animate-spin" /> Sending...</> : <><LuSend /> Send message</>}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
