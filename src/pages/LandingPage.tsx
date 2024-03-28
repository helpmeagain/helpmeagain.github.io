import About from "../components/templates/About";
import Hero from "../components/templates/Hero";
import Navbar from "../components/templates/Navbar";
import Projects from "../components/templates/Projects";
import ContactCard from "../components/organisms/ContactCard";

function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <ContactCard />
        </>
    )
}

export default LandingPage;