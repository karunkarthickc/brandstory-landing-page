import Accordion from "@/components/ui/Accordion";
import SectionTitle from "@/components/ui/SectionTitle";
import useContent from "@/hooks/useContent";

export default function Faq() {
  const { data, loading, error } = useContent();
  return (
    <section className="py-16">
      <div className="container max-w-6xl">
        <SectionTitle>FAQ&apos;s</SectionTitle>
        {loading && <p className="text-center text-sm text-white/60">Loading questions…</p>}
        {error && <p role="alert" className="text-center text-sm text-red-300">Could not load FAQs. Please refresh.</p>}
        {data && (
          <Accordion
            variant="flat"
            items={data.faqs.map((f) => ({ id: f.id, title: f.q, content: f.a }))}
          />
        )}
      </div>
    </section>
  );
}