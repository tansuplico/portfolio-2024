import { useRef } from "react";
import "./index.css";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="flex flex-col justify-center items-center bg-[#EDEEF0]">
      <Navbar
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Banner />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </div>
  );
}

export default App;
