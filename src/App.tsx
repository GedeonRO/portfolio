import "./App.css";
import Apropos from "./components/About";
import Presentations from "./components/Presentation";
import Navbar from "./components/Navbar";
import Competences from "./components/Skills";
import Experiences from "./components/Experience";
import Works from "./components/Work";
import ContactMe from "./components/contact";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Navbar />
      <Presentations />
      <Apropos />
      <Competences />
      <Experiences />
      <Works />
      <ContactMe />
      <ToastContainer />
    </>
  );
}

export default App;
