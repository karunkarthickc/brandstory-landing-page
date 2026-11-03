import Counter from "@/components/ui/Counter";
import { stats } from "@/lib/data";
import statsBg from "/assets/stats-bg.png";

export default function Stats() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="relative">
          {/* Gradient panel: on lg+ it ends 160px above the bottom of the
              cards, so the cards overlap its lower edge and hang out. */}
          <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden rounded-[32px] bg-gradient-to-b from-[#8b6cf7] via-[#b9a6fa] to-[#f1ecff] lg:bottom-40">
            <img
              src={statsBg}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Content sits on top of the panel */}
          <div className="relative px-4 pb-8 pt-16 lg:px-5 lg:pb-0 lg:pt-24">
            <h2 className="mb-10 text-center text-3xl font-semibold text-black lg:mb-44">
              Our Statistics
            </h2>

            <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex min-h-[200px] flex-col items-center justify-center rounded-[28px] bg-white p-6 text-center lg:min-h-[320px]"
                >
                  <dd className="text-5xl font-normal text-brand sm:text-6xl lg:text-7xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-4 text-base text-black sm:text-lg lg:mt-8 lg:text-xl">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}