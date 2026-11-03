import Accordion from "@/components/ui/Accordion";
import SectionTitle from "@/components/ui/SectionTitle";
import { differentiators } from "@/lib/data";
import strategistImg from "/assets/strategist.png";

export default function Differentiators() {
  const items = differentiators.map((d) => ({ id: d.id, title: d.title, content: d.text }));

  return (
    <section className="bg-[#0a0b10] py-16 text-white lg:py-20">
      <div className="container">
        <SectionTitle className="mx-auto max-w-[900px] text-center">
          What Sets Us Apart as a Leading Digital Marketing Agency in Abu Dhabi
        </SectionTitle>

        {/* items-start instead of items-stretch */}
        <div className="mt-12 grid items-start gap-6 lg:mt-16 lg:grid-cols-[8fr_10fr] lg:gap-[26px]">
          {/* Image card: fixed height, sticky so it stays put while the accordion changes */}
          <div className="relative h-[360px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#f4f0ff] via-[#d9ccff] to-[#f7f3ff] lg:sticky lg:top-24 lg:h-[560px]">
            <img
              src={strategistImg}
              alt="Strategist working on a laptop"
              className="absolute inset-0 h-full w-full object-cover object-bottom"
            />
          </div>

          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}