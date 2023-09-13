import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Offer from "@/components/Offer/Offer";
import Career from "@/components/Career/Career";
import Gallery from "@/components/Gallery/Gallery";
import Contacts from "@/components/Contacts/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Offer />
        <Career />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}
