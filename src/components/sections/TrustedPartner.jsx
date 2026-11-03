import { useState } from "react";
import bulb from "/assets/bulb.png";
import target from "/assets/target.png";
import trophy from "/assets/trophy.png";

export const partnerCards = [
  {
    id: 1,
    image: bulb,
    title: "We Understand The Landscape",
    text: "With deep local digital marketing expertise in Abu Dhabi, we provide sharp Abu Dhabi market insights into cultural nuances, affluent consumer behaviors, multilingual demands, and regulatory challenges. This insider knowledge helps us navigate the emirate’s dynamic ecosystem from Hub71 startups to ADGM enterprises for authentic, impactful brand connections.",
  },
  {
    id: 2,
    image: target,
    title: "Tailored Strategies for Success",
    text: "We craft fully customized digital strategies that address Abu Dhabi’s unique digital marketing challenges, including intense competition, cultural diversity, and evolving trends. Blending global best practices with hyper-local insights, our approach delivers sustainable visibility, higher engagement, and measurable growth turning your brand into a preferred choice across the UAE.",
  },
  {
    id: 3,
    image: trophy,
    title: "Overcoming Market Challenges",
    text: "Our team excels in tackling Abu Dhabi’s specific digital marketing challenges, from multilingual audience targeting and rapid trend shifts to strict regulations and high expectations. Through data-driven, culturally attuned solutions, we create robust, adaptable strategies that ensure long-term success, strong ROI, and lasting brand preference in the competitive UAE landscape.",
  },
];

export default function TrustedPartner() {
  // middle card highlighted by default; hover moves the highlight
  const [active, setActive] = useState();

  return (
    <section className="bg-[#0a0b10] py-16 md:py-24">
      {/* own wrapper so it is always centered (the `container` class was off-center) */}
      <div className="mx-auto w-full max-w-[1240px] px-6">
        <header className="mx-auto text-center">
          <h2 className="text-3xl font-medium text-white md:text-[44px] md:leading-tight">
            Your Trusted Digital Marketing Partner in Abu Dhabi
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-white/85 md:text-lg">
            Selecting the right digital marketing partner in Abu Dhabi is
            essential to ensure your brand connects with the right audience,
            maximizes ROI, and achieves sustainable growth in a competitive
            market.
          </p>
        </header>

        <div
          className="mt-14 grid items-stretch gap-8 md:grid-cols-3"
          // onMouseLeave={() => setActive(1)}
        >
          {partnerCards.map((c, i) => {
            const isActive = i === active;
            return (
              <article
                key={c.id}
                onMouseEnter={() => setActive(i)}
                className={`flex flex-col rounded-3xl px-6 pb-9 pt-5 transition-colors duration-300 ${
                  isActive
                    ? "bg-[radial-gradient(circle_at_50%_30%,#ddd2fb_0%,#f3efff_55%,#ffffff_100%)]"
                    : "bg-[radial-gradient(circle_at_50%_25%,#2a2545_0%,#1f1c35_55%,#1d1a30_100%)]"
                }`}
              >
                {/* fixed-height image area, image scaled to fit */}
                <div className="flex h-[260px] w-full items-center justify-center">
                  <img
                    src={c.image}
                    alt=""
                    className="h-full w-auto max-w-full object-contain"
                  />
                </div>

                <h3
                  className={`mt-9 text-xl font-semibold transition-colors duration-300 ${
                    isActive ? "text-[#7c5cf0]" : "text-white"
                  }`}
                >
                  {c.title}
                </h3>

                <p
                  className={`mt-5 text-base leading-[1.55] transition-colors duration-300 ${
                    isActive ? "text-[#14121f]" : "text-white/90"
                  }`}
                >
                  {c.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}