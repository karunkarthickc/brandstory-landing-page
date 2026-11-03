import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/lib/data";

import seoIcon from "/assets/icons/seo.png";
import smmIcon from "/assets/icons/smm.png";
import ppcIcon from "/assets/icons/ppc.png";
import arrowIcon from "/assets/icons/arrow.png"; // purple arrow image

const icons = { seo: seoIcon, smm: smmIcon, ppc: ppcIcon };

export default function Services() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="services-title">
      <div className="container">
        <SectionTitle>
          <span id="services-title">
            Results-Driven Digital Marketing Services in Abu Dhabi, UAE
          </span>
        </SectionTitle>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-brand/40 bg-gradient-to-b from-panel2 to-panel p-6 transition-colors duration-300 hover:border-white"
            >
              {/* white overlay that fades in on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* icon: white circle -> purple circle, purple icon -> white icon */}
              <span className="relative z-10 mb-8 grid h-16 w-16 place-items-center rounded-full bg-white ring-1 ring-transparent transition-all duration-300 group-hover:bg-brand group-hover:shadow-lg group-hover:shadow-black/30 group-hover:ring-black/80">
                <img
                  src={icons[s.id]}
                  alt={`${s.title} icon`}
                  width={36}
                  height={36}
                  loading="lazy"
                  className="h-9 w-9 object-contain transition duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </span>

              <h3 className="relative z-10 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-brand">
                {s.title}
              </h3>

              <p className="relative z-10 mt-5 flex-1 text-sm leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-slate-900">
                {s.text}
              </p>

              <a
                href="#"
                className="relative z-10 mt-8 inline-flex items-center gap-3 text-sm text-white transition-colors duration-300 group-hover:text-slate-900"
              >
                Know more
                <img
                  src={arrowIcon}
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}