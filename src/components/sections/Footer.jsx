import partnersImg from "/assets/partners.png"; // <- your bottom badges image (Google / Bing / Meta / HubSpot)

const ourLinks = [
  "Digital Marketing Agency Abu Dhabi",
  "Digital Marketing Agency Sharjah",
  "Digital Marketing Agency in Dubai",
  "SEO Agency in Dubai",
  "Digital Marketing Agency Ajman",
  "PR Agency in Dubai",
  "B2B Company in Dubai",
  "Content Writing Company in Dubai",
];

const services = [
  "Digital Marketing Company Dubai",
  "UI UX Design Services Dubai",
  "Web Design Company in Dubai",
  "SEO Company in Dubai",
  "Social Media Marketing in Dubai",
  "Mobile App Marketing Services",
  "Email Marketing Services in Dubai",
  "PPC Agency in Dubai",
];

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#fff" />
    {children}
  </svg>
);

const socials = [
  {
    name: "Linkedin",
    underline: true,
    icon: (
      <Icon>
        <rect x="6.5" y="10" width="2" height="7" fill="#111" />
        <circle cx="7.5" cy="7.6" r="1.2" fill="#111" />
        <path d="M11 10h1.9v1c.4-.7 1.2-1.2 2.3-1.2 2 0 2.8 1.2 2.8 3.2V17h-2v-3.5c0-1-.3-1.7-1.3-1.7s-1.7.7-1.7 1.8V17H11z" fill="#111" />
      </Icon>
    ),
  },
  {
    name: "Youtube",
    icon: (
      <Icon>
        <rect x="5.5" y="7.5" width="13" height="9" rx="3" fill="#111" />
        <path d="M10.5 9.8v4.4l3.8-2.2z" fill="#fff" />
      </Icon>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <Icon>
        <path d="M13.2 19v-6h2l.3-2.3h-2.3V9.2c0-.7.2-1.1 1.1-1.1h1.3V6.1c-.2 0-1-.1-1.9-.1-1.9 0-3.1 1.1-3.1 3.2v1.5H8.5V13h2.1v6z" fill="#111" />
      </Icon>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <Icon>
        <rect x="6" y="6" width="12" height="12" rx="3.5" fill="#111" />
        <circle cx="12" cy="12" r="2.8" fill="none" stroke="#fff" strokeWidth="1.5" />
        <circle cx="15.3" cy="8.7" r=".9" fill="#fff" />
      </Icon>
    ),
  },
  {
    name: "Twitter",
    icon: (
      <Icon>
        <path d="M18.5 8.3c-.4.2-.9.3-1.4.4.5-.3.9-.8 1.1-1.4-.5.3-1 .5-1.6.6a2.5 2.5 0 0 0-4.3 2.3c-2.1-.1-3.9-1.1-5.1-2.600-.7 1.200-.3 2.600.8 3.300-.4 0-.8-.1-1.100-.3 0 1.200.9 2.300 2 2.500-.4.1-.8.1-1.100 0 .3 1 1.200 1.700 2.300 1.700A5 5 0 0 1 6 16.900a7.100 7.100 0 0 0 11-6.300c.5-.4.9-.8 1.300-1.300z" fill="#111" />
      </Icon>
    ),
  },
];

const colTitle = "text-[15px] font-semibold text-white";
const linkCls = "text-[17px] leading-snug text-white/80 transition-colors hover:text-white";

const LinkList = ({ title, items }) => (
  <div>
    <h3 className={colTitle}>{title}</h3>
    <ul className="mt-9 space-y-3">
      {items.map((i) => (
        <li key={i}>
          <a href="#" className={linkCls}>{i}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#121212] text-white">
      {/* top tagline */}
      <div className="mx-auto max-w-[1500px] px-6 pt-6 lg:px-[135px]">
        <p className="text-[17px] text-white/80">Digital Marketing Agency Ajman</p>
      </div>

      {/* main grid */}
      <div className="mx-auto mt-8 grid max-w-[1500px] gap-12 px-6 pb-20 sm:grid-cols-2 lg:grid-cols-[1.25fr_1.2fr_1.1fr_0.9fr_0.7fr] lg:gap-10 lg:px-[75px]">
        {/* brand */}
        <div>
          <p className="text-[34px] font-semibold leading-none tracking-tight">BRANDSTORY</p>
          <p className="mt-9 max-w-[390px] text-[20px] leading-[1.65] text-white/85">
            The BrandStory team has industry expertise and cutting-edge digital capabilities to help
            clients connect with their audiences in complex environments. We can't wait for you join
            us on this journey!
          </p>
          <a
            href="#contact-form"
            className="mt-9 inline-block rounded-full bg-[#2b2b2b] px-7 py-3 text-[15px] text-white transition-colors hover:bg-[#3a3a3a]"
          >
            Contact Sales
          </a>
          <div className="mt-10 max-w-[410px] text-[20px] leading-[1.65] text-white/85">
            <p>Head Office:</p>
            <p>
              Villa No 1, Westar Les Maisonettes,District 10, Street 5 ,Jumeirah Village Circle,
              Dubai, United Arab Emirates.
            </p>
          </div>
        </div>

        <LinkList title="Our Links" items={ourLinks} />
        <LinkList title="Services" items={services} />

        {/* contact */}
        <div>
          <h3 className={colTitle}>Contact</h3>
          <div className="mt-9 space-y-9 text-[19px] leading-[1.55] text-white/85">
            <p>
              Phone:
              <br />
              <a href="tel:+971522831655" className="hover:text-white">+971 52 283 1655</a>
            </p>
            <p>
              Email:
              <br />
              <a href="mailto:info@brandstory.ae" className="hover:text-white">info@brandstory.ae</a>
            </p>
            <p>
              Address:
              <br />
              G5, Al Meheri Plaza, opp DBC Building, Al Khabaisi Area, Deira Dubai - 81577, United
              Arab Emirates
            </p>
          </div>
        </div>

        {/* follow us */}
        <div>
          <h3 className={colTitle}>Follow us</h3>
          <ul className="mt-9 space-y-[22px]">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href="#"
                  className={`flex items-center gap-3 text-[19px] text-white/85 transition-colors hover:text-white ${
                    s.underline ? "underline underline-offset-2" : ""
                  }`}
                >
                  {s.icon}
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* copyright */}
      <div className="border-t border-white/70">
        <p className="mx-auto max-w-[1500px] px-6 py-9 text-center text-[15px] text-white/70">
          Copyright © Brandstory, All Rights Reserved 2025 |{" "}
          <a href="#" className="text-[14px] hover:text-white">Terms &amp; Conditions</a> |{" "}
          <a href="#" className="text-[14px] hover:text-white">Privacy Policy</a>
        </p>
      </div>

      {/* partner badges */}
      <div className="flex justify-center bg-white py-4">
        <img src={partnersImg} alt="Google, Bing, Meta and HubSpot partner badges" className="h-[60px] w-auto object-contain" />
      </div>
    </footer>
  );
}