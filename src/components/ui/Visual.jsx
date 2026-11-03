/** Design-token placeholder for photography (swap with next/image once assets are exported from Figma). */
export default function Visual({ className = "", label = "", tone = "from-brand-light/70 via-brand to-brand-dark" }) {
  return (
    <div role="img" aria-label={label} className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${tone} ${className}`}>
      <div className="absolute inset-4 grid grid-cols-6 items-end gap-2 opacity-60" aria-hidden="true">
        {[40, 65, 35, 80, 55, 95].map((h, i) => <span key={i} style={{ height: `${h}%` }} className="rounded-t bg-white/50" />)}
      </div>
    </div>
  );
}
