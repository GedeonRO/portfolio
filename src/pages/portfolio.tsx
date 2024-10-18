import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Contact from "../components/contact";
export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Presentation />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </>
  );
}
