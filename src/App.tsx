import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './styles/waves.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="spacer wave1" />
      <Skills />
      <div className="spacer wave2" />
      <About />
      <div className="spacer wave3" />
      <Projects />
    </>

  )
}