import Carousel from "@/components/ui/Carousel";
import Visual from "@/components/ui/Visual";
import useContent from "@/hooks/useContent";

export default function CaseStudies() {
  const { data, loading, error } = useContent();
  return (
    <section className="py-16" aria-labelledby="cases-title">
      <div className="container">
        <Carousel label="Case studies" title={<h2 id="cases-title" className="text-center text-2xl font-semibold sm:text-3xl">Proven Digital Marketing Success Our Abu Dhabi Case Studies</h2>}>
          {loading && <p className="text-sm text-white/60">Loading case studies…</p>}
          {error && <p role="alert" className="text-sm text-red-300">Could not load case studies.</p>}
          {data?.caseStudies.map((c) => (
            <a key={c.id} href="#" className="group w-72 shrink-0 snap-start sm:w-80">
              <Visual className="aspect-[3/4] transition-transform duration-300 group-hover:scale-[1.02]" tone={c.tone} label={c.title} />
              <span className="mt-3 block text-sm font-medium group-hover:text-brand-light">{c.title}</span>
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
