import { useState, useId } from "react";
import Icon from "./Icon";

/**
 * items: [{ id, title, content }]  — one panel open at a time.
 *
 * variant:
 *   "default" -> original look (white open card / purple gradient closed card). Unchanged.
 *   "flat"    -> FAQ look: grey cards, white text, purple round button when open,
 *                black round button when closed, chevron up/down.
 *
 * Use it only where needed:  <Accordion variant="flat" items={faqs} />
 */
export default function Accordion({
  items,
  defaultOpen = 0,
  titleClass = "",
  variant = "default",
}) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  const flat = variant === "flat";

  return (
    <div
      className={`flex flex-col ${
        flat ? "gap-3 lg:gap-5" : "gap-[22px] lg:gap-[26px]"
      }`}
    >
      {items.map((item, i) => {
        const isOpen = open === i;

        /* ---------- card background ---------- */
        const cardBg = flat
          ? "bg-[#2a2a2c]"
          : isOpen
          ? "bg-white"
          : "bg-gradient-to-r from-[#1b1830] to-[#241d3d]";

        /* ---------- button padding ---------- */
        const btnPad = flat
          ? isOpen
            ? "pt-5 pb-0"
            : "py-4"
          : isOpen
          ? "pt-7"
          : "py-2";

        /* ---------- title ---------- */
        const titleStyle = flat
          ? isOpen
            ? "font-light text-white"
            : "font-medium text-white"
          : isOpen
          ? "font-semibold text-[#7c4dff]"
          : "font-medium text-white";

        const titleSize = flat
          ? "text-lg sm:text-[26px]"
          : "text-xl sm:text-[22px]";

        /* ---------- round icon button ---------- */
        const iconStyle = flat
          ? isOpen
            ? "bg-[#7c4dff] text-white shadow-md"
            : "bg-[#0b0b12] text-white"
          : isOpen
          ? "bg-[#7c4dff] text-white"
          : "bg-white text-[#0b0b12]";

        const iconSize = flat ? "h-10 w-10" : "h-10 w-10";

        /* Default variant: chevron always UP (as before).
           Flat variant: UP when open, DOWN when closed. */
        const chevronRotate = flat && !isOpen ? "rotate-180" : "";

        /* ---------- content ---------- */
        const contentStyle = flat
          ? "px-6 pb-5 pt-3 text-base font-bold leading-[1.6] text-white sm:px-[26px] sm:text-xl"
          : "px-6 pb-7 pt-4 text-base leading-[1.6] text-[#0b0b12] sm:px-[26px] sm:text-lg";

        return (
          <div
            key={item.id}
            className={`overflow-hidden transition-colors duration-300 ${
              flat ? "rounded-2xl" : "rounded-[20px]"
            } ${cardBg}`}
          >
            <h3>
              <button
                type="button"
                id={`${uid}-h-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${uid}-p-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`flex w-full items-center justify-between gap-4 px-6 text-left sm:px-[26px] ${btnPad}`}
              >
                <span
                  className={`leading-tight ${titleSize} ${titleStyle} ${titleClass}`}
                >
                  {item.title}
                </span>
                <span
                  className={`grid shrink-0 place-items-center rounded-full transition-colors duration-300 ${iconSize} ${iconStyle}`}
                >
                  <Icon
                    name="chevron"
                    className={`h-5 w-5 transition-transform duration-300 ${chevronRotate}`}
                  />
                </span>
              </button>
            </h3>

            <div
              id={`${uid}-p-${i}`}
              role="region"
              aria-labelledby={`${uid}-h-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className={contentStyle}>{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}