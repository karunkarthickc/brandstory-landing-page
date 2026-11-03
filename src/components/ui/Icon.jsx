const paths = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  chevron: "M6 9l6 6 6-6",
  left: "M15 6l-6 6 6 6",
  right: "M9 6l6 6-6 6",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4-4",
  social: "M12 8a4 4 0 100 8 4 4 0 000-8zM4 20c1-4 4-6 8-6s7 2 8 6",
  click: "M9 3v12l3-3 3 6 2-1-3-6h4z",
  pin: "M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 7a3 3 0 100 6 3 3 0 000-6z",
};
export default function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
