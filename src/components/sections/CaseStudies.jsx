import { useRef } from "react";
// Import your images here
import case1 from "/assets/case-1.png";
import case2 from "/assets/case-2.png";
import case3 from "/assets/case-3.png";
// import case4 from "@/assets/case-4.jpg";

const CASES = [
  { id: 1, title: "Case study 1", image: case1, href: "#" },
  { id: 2, title: "Case study 2", image: case2, href: "#" },
  { id: 3, title: "Case study 3", image: case3, href: "#" },
  // { id: 4, title: "Case study 4", image: case4, href: "#" },
];

const ArrowLeft = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function CaseStudies() {
  const trackRef = useRef(null);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("a");
    const step = card ? card.getBoundingClientRect().width + 36 : el.clientWidth / 3;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0a0b10] py-16 text-white" aria-labelledby="cases-title">
      <div className="mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-[116px]">
        <h2
          id="cases-title"
          className="mx-auto max-w-[860px] text-center text-2xl font-medium leading-snug sm:text-3xl lg:text-[44px] lg:leading-[1.45]"
        >
          Proven Digital Marketing Success Our Abu Dhabi Case Studies
        </h2>

        {/* Arrows */}
        <div className="mt-12 flex justify-end gap-8" role="group" aria-label="Case studies navigation">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous case study"
            className="grid h-14 w-14 place-items-center rounded-full bg-white text-black transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white max-md:h-12 max-md:w-12 [&_svg]:max-md:h-5 [&_svg]:max-md:w-5"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next case study"
            className="grid h-14 w-14 place-items-center rounded-full bg-[#7c4dff] text-white transition hover:bg-[#8d63ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white max-md:h-12 max-md:w-12 [&_svg]:max-md:h-5 [&_svg]:max-md:w-5"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Cards */}
        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-9 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CASES.map((c) => (
            <a
              key={c.id}
              href={c.href}
              aria-label={c.title}
              className="group block w-[78%] shrink-0 snap-start overflow-hidden rounded-[28px] sm:w-[calc((100%-4.5rem)/3)]"
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="aspect-[548/820] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}