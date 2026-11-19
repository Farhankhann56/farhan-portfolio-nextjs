import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { site } from "@/lib/data";

const socials = [
  { Icon: FaGithub, href: site.social.github, label: "GitHub" },
  { Icon: FaLinkedinIn, href: site.social.linkedin, label: "LinkedIn" },
  { Icon: FaInstagram, href: site.social.instagram, label: "Instagram" },
  { Icon: FaFacebookF, href: site.social.facebook, label: "Facebook" },
  { Icon: FaXTwitter, href: site.social.x, label: "X (Twitter)" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-serif text-2xl text-white">{site.name}</p>
          <p className="mt-1 text-sm text-slate-400">Building full-stack &amp; AI-powered software from {site.location}</p>
        </div>
        <div className="flex gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
               className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-white hover:bg-white hover:text-ink">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
