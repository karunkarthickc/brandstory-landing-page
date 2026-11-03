import Counter from "@/components/ui/Counter";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="rounded-3xl bg-stats-grad px-4 pb-8 pt-8 sm:px-8">
          <h2 className="mb-8 text-center text-2xl font-semibold">Our Statistics</h2>
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-white p-6 text-center text-ink shadow-lg transition-transform hover:-translate-y-1">
                <dt className="order-2 mt-2 text-sm text-ink/70">{s.label}</dt>
                <dd className="text-4xl font-semibold text-brand sm:text-5xl"><Counter value={s.value} suffix={s.suffix} /></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
