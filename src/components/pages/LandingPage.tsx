import About from "../templates/About";
import Hero from "../templates/Hero";
import Navbar from "../templates/Navbar";
import Projects from "../templates/Projects";
import ContactCard from "../organisms/ContactCard";
import Work from "../templates/Work";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Work />
      <About />
      <ContactCard />
    </>
  );
}

export default LandingPage;
