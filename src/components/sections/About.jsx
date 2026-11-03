import { aboutBullets } from "@/lib/data";
import aboutImg from "/assets/about-marketing.png";

export default function About() {
  return (
    <section className="overflow-x-clip bg-[#131318] py-12 sm:py-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 lg:grid-cols-[1.35fr_1fr] lg:gap-4">
        {/* Larger image */}
        <img
          src={aboutImg}
          alt="Digital marketing analytics illustration"
          className="h-auto w-full select-none lg:-ml-10 lg:w-[115%] lg:max-w-none"
          loading="eager"
        />

        {/* Content */}
        <div className="lg:pl-6">
          <h2 className="text-3xl font-normal leading-snug text-white sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
            We are Digital Marketing
            <br className="hidden lg:block" /> Experts in Abu Dhabi
          </h2>

          <ul className="mt-10 list-disc space-y-6 pl-6 text-sm leading-[1.75] tracking-wide text-white/90 marker:text-white/80 sm:text-base lg:text-base">
            {aboutBullets.map((b) => (
              <li key={b} className="pl-2">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}