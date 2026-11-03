import Button from "@/components/ui/Button";
import { brands } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow pb-16 pt-32 text-center sm:pt-40">
      <div className="container animate-fade-up">
        <h1 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Digital Marketing Agency In Abu Dhabi</h1>
        <p className="mx-auto mt-5 max-w-2xl text-xs text-white/75 sm:text-sm">
          Looking for a digital marketing agency in Abu Dhabi? With 12+ years of expertise, BrandStory delivers culturally intelligent, data-driven strategies that connect your brand with high-intent UAE audiences.
        </p>
        <Button href="#contact" className="mt-8 bg-black/40">Get in touch</Button>

        <p className="mt-16 text-sm text-white/80">Trusted by Top Brands Across Industries</p>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-4 lg:grid-cols-6">
          {brands.slice(0, 6).concat(brands.slice(6, 11)).map((b) => (
            <li key={b} className="text-lg font-semibold text-white/90 opacity-80 transition-opacity hover:opacity-100">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
