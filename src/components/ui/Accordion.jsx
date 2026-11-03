import { useState, useId } from "react";
import Icon from "./Icon";

/** items: [{ id, title, content }]  — one panel open at a time. */
export default function Accordion({ items, defaultOpen = 0, titleClass = "" }) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.id} className={`rounded-xl border transition-colors ${isOpen ? "border-brand/60 bg-panel2" : "border-white/10 bg-panel hover:border-white/30"}`}>
            <h3>
              <button
                type="button"
                id={`${uid}-h-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${uid}-p-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className={`text-sm font-medium sm:text-base ${titleClass}`}>{item.title}</span>
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? "bg-brand" : "bg-white/10"}`}>
                  <Icon name="chevron" className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </span>
              </button>
            </h3>
            <div
              id={`${uid}-p-${i}`}
              role="region"
              aria-labelledby={`${uid}-h-${i}`}
              className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-relaxed text-white/75">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
