import "./App.css";
import Apropos from "./components/about";
import Presentations from "./components/Presentation";
import Navbar from "./components/Navbar";
import Competences from "./components/skills";
import Experiences from "./components/experience";
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
