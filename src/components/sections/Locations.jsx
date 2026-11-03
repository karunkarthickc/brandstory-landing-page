import Icon from "@/components/ui/Icon";
import { locations } from "@/lib/data";
import locationsBg from "/assets/location.png"; // 👈 your bg image

export default function Locations() {
  return (
    <section
      className="relative overflow-hidden bg-ink bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: `url(${locationsBg})` }}
      aria-labelledby="loc-title"
    >
      <div className="container relative z-10">
        <h2
          id="loc-title"
          className="mb-12 text-center text-2xl font-semibold text-white md:text-[28px]"
        >
          Other Digital Marketing Services Location
        </h2>

        {/* columns-* fills top-to-bottom: 15 items -> 5 / 5 / 5 on desktop */}
        <ul className="mx-auto max-w-6xl columns-1 gap-x-8 sm:columns-2 lg:columns-3">
          {locations.map((l) => (
            <li key={l} className="mb-6 break-inside-avoid">
              <a
                href="#"
                className="group flex items-center gap-3 text-[15px] text-white underline underline-offset-4 decoration-white/80 transition-colors hover:text-brand-light hover:decoration-brand-light"
              >
                <Icon
                  name="pin"
                  className="h-5 w-5 shrink-0 text-brand-light"
                />
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}