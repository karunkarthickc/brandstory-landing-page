import { useState } from "react";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { navItems } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container flex items-center justify-between py-5">
        <a href="#" className="text-xl font-extrabold tracking-tight" aria-label="Brandstory home">BRANDSTORY<sup className="text-[8px]">®</sup></a>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-[11px] text-white/80 lg:flex">
          {navItems.map((n) => (
            <a key={n} href="#" className="inline-flex items-center gap-1 transition-colors hover:text-white">{n}<Icon name="chevron" className="h-3 w-3" /></a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="#contact" variant="primary" className="!px-5 !py-2 text-xs">Get quote</Button>
          <button type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 lg:hidden">
            <span className="block h-0.5 w-5 bg-white shadow-[0_6px_0_#fff,0_-6px_0_#fff]" />
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="container lg:hidden">
          <ul className="rounded-xl bg-panel p-4 text-sm">
            {navItems.map((n) => <li key={n}><a href="#" className="block py-2 text-white/80 hover:text-white">{n}</a></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}
