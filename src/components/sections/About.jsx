import { aboutBullets } from "@/lib/data";
import Visual from "@/components/ui/Visual";

export default function About() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <Visual className="aspect-[4/3] w-full" label="Marketing analytics illustration" />
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">We are Digital Marketing Experts In Abu Dhabi</h2>
          <ul className="mt-6 list-disc space-y-4 pl-5 text-xs leading-relaxed text-white/75 sm:text-sm">
            {aboutBullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
