export default function SectionHead({
  eyebrow, title, text, center = false,
}: { eyebrow: string; title: React.ReactNode; text?: string; center?: boolean }) {
  return (
    <div className={`reveal mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3 text-4xl sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p>}
    </div>
  );
}
