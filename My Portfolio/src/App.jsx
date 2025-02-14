import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Education } from "./components/Education/Education";
import { TechnicalSkills } from "./components/TechnicalSkills/TechnicalSkills";



function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education/>
      <TechnicalSkills/>
      <Contact />
      
    </div>
  );
}

export default App;