import Hero from "@/components/Hero";
import CtaLinks from "@/components/CtaLinks";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Activities from "@/components/Activities";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-container">
      <Hero />
      <CtaLinks />
      <Projects />
      <Skills />
      <Experience />
      <Activities />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
