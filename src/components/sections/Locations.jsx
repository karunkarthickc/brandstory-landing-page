import Icon from "@/components/ui/Icon";
import { locations } from "@/lib/data";

export default function Locations() {
  return (
    <section className="bg-ink py-14" aria-labelledby="loc-title">
      <div className="container">
        <h2 id="loc-title" className="mb-8 text-center text-2xl font-semibold">Other Digital Marketing Services Location</h2>
        <ul className="grid gap-3 text-xs sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <li key={l}><a href="#" className="flex items-center gap-2 text-white/80 transition-colors hover:text-brand-light"><Icon name="pin" className="h-4 w-4 text-brand-light" />{l}</a></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
