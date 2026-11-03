import SectionTitle from "@/components/ui/SectionTitle";
import Icon from "@/components/ui/Icon";
import { services } from "@/lib/data";

const icons = { seo: "search", smm: "social", ppc: "click" };

export default function Services() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="services-title">
      <div className="container">
        <SectionTitle><span id="services-title">Results-Driven Digital Marketing Services in Abu Dhabi, UAE</span></SectionTitle>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.id} className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-panel2 to-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/60">
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-brand/30 text-brand-light ring-1 ring-brand/50"><Icon name={icons[s.id]} className="h-6 w-6" /></span>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-white/70">{s.text}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-2 text-xs text-brand-light transition-colors group-hover:text-white">Know more <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
