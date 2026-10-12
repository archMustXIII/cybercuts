import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <Reveal>
        <About />
        </Reveal>
      </div>

      <div id="services">
          <Reveal>
        <Services />
        </Reveal>
      </div>

      <div id="gallery">
        <Reveal>
        <Gallery />
        </Reveal>
      </div>

      <div id="contact">
        <Reveal>
        <Contact />
        </Reveal>
      </div>
    </>
  );
}