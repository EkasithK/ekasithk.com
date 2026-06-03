import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { QuickLinks } from "@/sections/QuickLinks";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Esports } from "@/sections/Esports";
import { Research } from "@/sections/Research";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <QuickLinks />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Esports />
        <Research />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
