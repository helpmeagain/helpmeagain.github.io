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
      <div className="bg-gradient-to-b from-[#080414] via-violet-900/20 to-violet-800/25">
        <About />
        <ContactCard />
      </div>
    </>
  );
}

export default LandingPage;
