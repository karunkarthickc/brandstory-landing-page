import { ChevronRight } from "lucide-react";

// 👉 Replace these two URLs with your real assets
const HERO_BG_URL = "/assets/hero-bg.png";
const BRANDS_IMG_URL = "/assets/brands.png";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f0c1a] text-center text-white">
      {/* ---------- Background image (purple arc + stars + grid) ---------- */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG_URL})` }}
      />

      {/* Soft fade from the purple area into the dark lower half */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[55%] bg-gradient-to-b from-transparent via-[#12101f]/80 to-[#0f0c1a]"
      />

      <div className="mx-auto w-full max-w-[1740px] px-6 pb-16 pt-44 sm:pt-56 lg:pt-[270px]">
        {/* ---------- Heading ---------- */}
        <h1
          className="mx-auto max-w-[1200px] text-[32px] font-medium leading-[1.15] tracking-tight sm:text-5xl lg:text-[56px]"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
        >
          Digital Marketing Agency In Abu Dhabi
        </h1>

        {/* ---------- Sub copy ---------- */}
        <p className="mx-auto mt-14 max-w-[1300px] text-[15px] leading-[1.35] text-white/95 sm:mt-20 sm:text-lg lg:mt-[72px] lg:text-[22px]">
          Looking for a digital marketing agency in Abu Dhabi? With 12+ years of
          expertise, BrandStory delivers culturally intelligent, data-driven
          strategies that connect your brand with high-intent UAE audiences.
        </p>

        {/* ---------- CTA pill ---------- */}
        <a
          href="#contact"
          className="group mx-auto mt-16 inline-flex h-[60px] items-center gap-4 rounded-full border border-[#6b4fd8]/80 bg-[#14111f] px-9 text-lg font-medium text-white shadow-[0_0_24px_rgba(124,92,255,0.25)] transition hover:border-[#8b6cff] hover:shadow-[0_0_32px_rgba(124,92,255,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b6cff] sm:h-[90px] sm:px-12 sm:text-[26px] lg:mt-[52px] lg:h-[90px]"
        >
          <ChevronRight
            className="h-6 w-6 transition-transform group-hover:translate-x-0.5 sm:h-8 sm:w-8"
            strokeWidth={2}
          />
          Get in Touch
        </a>

        {/* ---------- Trusted by ---------- */}
        <p className="mt-24 text-lg text-white/95 sm:mt-40 sm:text-2xl lg:mt-[130px] lg:text-[34px]">
          Trusted by Top Brands Across Industries
        </p>

        {/* ---------- Brands (single image) ---------- */}
        <div className="mx-auto mt-12 max-w-[1740px] sm:mt-16 lg:mt-[60px]">
          <img
            src={BRANDS_IMG_URL}
            alt="Brands that trust BrandStory: Atom Interiors, Hosachiguru, Microgenesis, Biogen, Redseer, Hola, Curtain Label, Smartlinks, Takeleap and more"
            className="h-auto w-full select-none object-contain"
            loading="lazy"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}