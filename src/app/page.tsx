import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
     <div className="h-screen ">
    
    <div className="">
      <Header />
</div>
      {/* Content starts after header */}
      <div className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
