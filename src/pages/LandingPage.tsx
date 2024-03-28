import Wave from "../components/atoms/Wave";
import About from "../components/templates/About";
import Hero from "../components/templates/Hero";
import Navbar from "../components/templates/Navbar";
import Projects from "../components/templates/Projects";
// import Skills from "../components/templates/Skills";

function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Wave number={1} />
            {/* <Skills /> */}
            {/* <Wave number={2} /> */}
            <About />
            <Wave number={2} />
            <Projects />
        </>
    )
}

export default LandingPage;