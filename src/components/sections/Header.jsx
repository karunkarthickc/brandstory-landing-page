import { useState } from "react";

const navItems = ["Digital marketing", "Design", "Content", "Production", "Technology", "Resources"];

function Chevron({ className = "" }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 bg-transparent text-white">
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-5 lg:px-9">
        {/* Logo */}
        <a href="#" aria-label="Brandstory home" className="flex items-start whitespace-nowrap font-extrabold leading-none tracking-tight">
          <span className="text-[26px] lg:text-[28px]">BRANDSTORY</span>
          <span
            aria-hidden="true"
            className="ml-1 mt-0.5 grid h-[15px] w-[15px] place-items-center rounded-full border-[1.5px] border-white text-[9px] font-bold leading-none lg:h-[17px] lg:w-[17px]"
          >
            R
          </span>
        </a>

        {/* Nav pill */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 rounded-full bg-white/[0.12] px-7 py-3.5 text-[11px] text-white/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md lg:flex xl:gap-7 xl:text-[13px]"
        >
          {navItems.map((n) => (
            <a key={n} href="#" className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white">
              {n}
              <Chevron className="h-3 w-3" />
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full border border-black/70 bg-white px-8 py-3 text-xs font-medium uppercase tracking-wide text-[#7a5af8] shadow-[0_0_0_1px_rgba(0,0,0,0.6)] transition-colors hover:bg-[#f1ecff] xl:px-10 xl:py-3.5 xl:text-[13px]"
          >
            Get quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 lg:hidden"
          >
            <span className="block h-0.5 w-5 bg-white shadow-[0_6px_0_#fff,0_-6px_0_#fff]" />
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="relative mx-auto max-w-[1440px] px-6 pb-5 lg:hidden">
          <ul className="rounded-2xl bg-white/10 p-4 text-sm backdrop-blur-md">
            {navItems.map((n) => (
              <li key={n}>
                <a href="#" className="flex items-center justify-between py-2 text-white/80 hover:text-white">
                  {n}
                  <Chevron className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}