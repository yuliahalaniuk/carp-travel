import Header from "@/layout/Header/Header";
import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Offer from "@/sections/Offer/Offer";
import Career from "@/sections/Career/Career";
import Gallery from "@/sections/Gallery/Gallery";
import Contacts from "@/sections/Contacts/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Offer />
      <Career />
      <Gallery />
      <Contacts />
    </>
  );
}
