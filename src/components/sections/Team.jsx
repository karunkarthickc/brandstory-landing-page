import { useRef, useState, useEffect, useCallback } from "react";

import team1 from "/assets/team/team-1.png";
import team2 from "/assets/team/team-2.png";
import team3 from "/assets/team/team-3.png";

const slides = [
  { id: 1, src: team1, alt: "Team members working at a shared desk" },
  { id: 2, src: team2, alt: "Developer working at an iMac" },
  { id: 3, src: team3, alt: "Colleagues working on laptops" },
];

const N = slides.length;
// Three copies so there is always content on both sides of the active slide
const looped = [...slides, ...slides, ...slides];

export default function Team() {
  const [pos, setPos] = useState(N + 1); // start on the middle copy
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const behaviorRef = useRef("auto");

  const centerOn = useCallback((index, behavior) => {
    const track = trackRef.current;
    const el = itemRefs.current[index];
    if (!track || !el) return;
    const left = el.offsetLeft - (track.clientWidth - el.clientWidth) / 2;
    track.scrollTo({ left, behavior });
  }, []);

  // Scroll to the active slide, then silently jump back to the middle copy
  useEffect(() => {
    centerOn(pos, behaviorRef.current);
    behaviorRef.current = "smooth";

    const t = setTimeout(() => {
      if (pos < N || pos >= 2 * N) {
        behaviorRef.current = "auto"; // instant, invisible jump
        setPos(((pos % N) + N) % N + N);
      }
    }, 550);
    return () => clearTimeout(t);
  }, [pos, centerOn]);

  useEffect(() => {
    const onResize = () => centerOn(pos, "auto");
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [pos, centerOn]);

  const prev = () => setPos((p) => p - 1);
  const next = () => setPos((p) => p + 1);

  return (
    <section className="bg-[#08090d] py-16 text-white" aria-labelledby="team-title">
      <div className="container mx-auto">
        <h2 id="team-title" className="text-center text-2xl font-semibold sm:text-3xl">
          Meet Our Expert Team
        </h2>

        <div className="mt-10 flex justify-end gap-3 px-4 sm:px-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7c4dff] text-white transition hover:bg-[#8f66ff]"
          >
            <ArrowRight />
          </button>
        </div>

        <div
          ref={trackRef}
          role="region"
          aria-label="Team members"
          className="mt-6 flex items-center gap-10 overflow-hidden py-4"
        >
          {looped.map((s, i) => {
            const isActive = i === pos;
            return (
              <button
                key={`${s.id}-${Math.floor(i / N)}`}
                ref={(el) => (itemRefs.current[i] = el)}
                type="button"
                onClick={() => setPos(i)}
                aria-label={`Show photo ${s.id}`}
                aria-current={isActive}
                tabIndex={i >= N && i < 2 * N ? 0 : -1}
                className={`shrink-0 overflow-hidden rounded-2xl transition-all duration-500 ease-out ${
                  isActive ? "h-[182px] w-[280px] opacity-100" : "h-[167px] w-[250px] opacity-90"
                }`}
              >
                <img src={s.src} alt={s.alt} draggable={false} className="h-full w-full object-cover" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}