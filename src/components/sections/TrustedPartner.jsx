import SectionTitle from "@/components/ui/SectionTitle";
import { partnerCards } from "@/lib/data";

export default function TrustedPartner() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionTitle sub="Selecting the right digital marketing partner in Abu Dhabi is essential to ensure your brand connects with the right audience, maximizes ROI, and achieves sustainable growth in a competitive market.">
          Your Trusted Digital Marketing Partner in Abu Dhabi
        </SectionTitle>
        <div className="grid gap-5 md:grid-cols-3">
          {partnerCards.map((c) => (
            <article key={c.id} className="flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_0%,#3a2a8a_0%,#12102b_60%)] p-6 transition duration-300 hover:border-brand/60">
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/70">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
