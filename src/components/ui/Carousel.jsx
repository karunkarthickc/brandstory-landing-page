import { useRef } from "react";
import Icon from "./Icon";

/** Scroll-snap carousel with prev/next buttons. Children are the slides. */
export default function Carousel({ title, children, label }) {
  const track = useRef(null);
  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.7, 260), behavior: "smooth" });
  };
  const btn = "grid h-11 w-11 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-ink";

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="flex-1">{title}</div>
        <div className="flex gap-3">
          <button type="button" aria-label="Previous" onClick={() => scroll(-1)} className={btn}><Icon name="left" /></button>
          <button type="button" aria-label="Next" onClick={() => scroll(1)} className={`${btn} bg-brand border-brand`}><Icon name="right" /></button>
        </div>
      </div>
      <div ref={track} role="region" aria-label={label} tabIndex={0} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2">
        {children}
      </div>
    </div>
  );
}
