import Carousel from "@/components/ui/Carousel";
import Visual from "@/components/ui/Visual";
import useContent from "@/hooks/useContent";

export default function Team() {
  const { data, loading, error } = useContent();
  return (
    <section className="py-16" aria-labelledby="team-title">
      <div className="container">
        <Carousel label="Team members" title={<h2 id="team-title" className="text-center text-2xl font-semibold sm:text-3xl">Meet Our Expert Team</h2>}>
          {loading && <p className="text-sm text-white/60">Loading team…</p>}
          {error && <p role="alert" className="text-sm text-red-300">Could not load the team. Please refresh.</p>}
          {data?.team.map((m) => (
            <figure key={m.id} className="w-64 shrink-0 snap-start sm:w-72">
              <Visual className="aspect-[4/3]" tone="from-slate-500/60 via-panel2 to-panel" label={`Photo of ${m.name}`} />
              <figcaption className="mt-3 text-sm"><span className="font-medium">{m.name}</span><span className="block text-xs text-white/60">{m.role}</span></figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
