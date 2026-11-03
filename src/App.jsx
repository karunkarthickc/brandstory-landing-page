import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Differentiators from "@/components/sections/Differentiators";
import TrustedPartner from "@/components/sections/TrustedPartner";
import Stats from "@/components/sections/Stats";
import Team from "@/components/sections/Team";
import Faq from "@/components/sections/Faq";
import CaseStudies from "@/components/sections/CaseStudies";
import Footer from "@/components/sections/Footer";
import Locations from "@/components/sections/Locations";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Differentiators />
        <TrustedPartner />
        <Stats />
        <Team />
        <Faq />
        <CaseStudies />
      </main>
      <Footer />
      <Locations />
    </>
  );
}
