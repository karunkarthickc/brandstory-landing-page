export default function SectionTitle({ children, sub, align = "center", as: Tag = "h2", className = "" }) {
  return (
    <div className={`mx-auto mb-10 max-w-3xl ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <Tag className="text-2xl font-semibold leading-tight sm:text-3xl">{children}</Tag>
      {sub && <p className="mt-4 text-sm text-white/70">{sub}</p>}
    </div>
  );
}
