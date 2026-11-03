import { footerLinks } from "@/lib/data";

const LinkList = ({ title, items }) => (
  <div>
    <h3 className="mb-4 text-sm font-semibold">{title}</h3>
    <ul className="space-y-2 text-xs text-white/70">
      {items.map((i) => <li key={i}><a href="#" className="transition-colors hover:text-white">{i}</a></li>)}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer id="contact" className="mt-10 border-t border-white/10 bg-panel pt-14">
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="text-lg font-extrabold">BRANDSTORY</p>
          <p className="mt-3 text-xs leading-relaxed text-white/70">The BrandStory team has industry expertise and cutting-edge digital capabilities to help clients succeed in complex environments.</p>
        </div>
        <LinkList title="Our Links" items={footerLinks.ourLinks} />
        <LinkList title="Services" items={footerLinks.services} />
        <div className="text-xs text-white/70">
          <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
          <p>Phone: <a href="tel:+971523836555" className="hover:text-white">+971 52 383 6555</a></p>
          <p className="mt-2">Email: <a href="mailto:info@brandstory.ae" className="hover:text-white">info@brandstory.ae</a></p>
          <p className="mt-2">Abu Dhabi, United Arab Emirates</p>
        </div>
        <div className="text-xs text-white/70">
          <h3 className="mb-4 text-sm font-semibold text-white">Follow us</h3>
          <ul className="space-y-2">{["LinkedIn", "YouTube", "Facebook", "Instagram", "Twitter"].map((s) => <li key={s}><a href="#" className="hover:text-white">{s}</a></li>)}</ul>
        </div>
      </div>
      <p className="container mt-10 border-t border-white/10 py-5 text-center text-[11px] text-white/50">Copyright © Brandstory. All Rights Reserved 2026 · Terms &amp; Conditions · Privacy Policy</p>
    </footer>
  );
}
