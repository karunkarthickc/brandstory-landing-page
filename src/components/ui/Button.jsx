

const variants = {
  primary: "bg-white text-ink hover:bg-brand-light hover:text-white",
  outline: "border border-white/40 text-white hover:bg-white hover:text-ink",
  ghost: "border border-white/20 bg-white/5 text-white hover:bg-white/15",
};

export default function Button({ href, variant = "outline", className = "", children, ...props }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`;
  return href ? (
    <a href={href} className={cls} {...props}>{children}</a>
  ) : (
    <button type="button" className={cls} {...props}>{children}</button>
  );
}
