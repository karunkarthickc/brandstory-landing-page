import Accordion from "@/components/ui/Accordion";
import Visual from "@/components/ui/Visual";
import SectionTitle from "@/components/ui/SectionTitle";
import { differentiators } from "@/lib/data";

export default function Differentiators() {
  const items = differentiators.map((d) => ({ id: d.id, title: d.title, content: d.text }));
  return (
    <section className="py-16">
      <div className="container">
        <SectionTitle>What Sets Us Apart as a Leading Digital Marketing Agency in Abu Dhabi</SectionTitle>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Visual className="aspect-[4/3] w-full" tone="from-fuchsia-300/60 via-brand to-brand-dark" label="Strategist working on a laptop" />
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
