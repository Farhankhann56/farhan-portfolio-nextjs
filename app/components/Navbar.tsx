"use client";

import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { nav, site } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink font-serif text-lg text-white">F</span>
          <span className="font-semibold tracking-tight">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.href} href={n.href}
               className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:text-ink">
              {n.label}
            </a>
          ))}
          <a href="#contact"
             className="ml-3 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent">
            Let&apos;s talk
          </a>
        </nav>

        <button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen(!open)}
                aria-label="Toggle menu" aria-expanded={open}>
          {open ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper px-5 pb-5 lg:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}
               className="block border-b border-line/70 py-3.5 font-medium">
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
             className="mt-4 block rounded-full bg-ink px-5 py-3 text-center font-semibold text-white">
            Let&apos;s talk
          </a>
        </nav>
      )}
    </header>
  );
}
