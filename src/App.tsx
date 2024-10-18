import "./App.css";
import About from "./components/About";
import Contact from "./components/contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Competences from "./components/Skills";
import Work from "./components/Work";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <About />
      <Competences />
      <Experience />
      <Work />
      <Contact />
      <ToastContainer />
    </>
  );
}

export default App;
