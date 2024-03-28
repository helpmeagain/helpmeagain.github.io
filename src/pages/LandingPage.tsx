import About from "../components/templates/About";
import Hero from "../components/templates/Hero";
import Navbar from "../components/templates/Navbar";
import Projects from "../components/templates/Projects";

function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
        </>
    )
}

export default LandingPage;