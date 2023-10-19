import ProjectsCard from "./ProjectsCard"
import SectionTitle from "./SectionTitle"
import { projects } from "../data"

const Projects = () => {
    return (
        <section className="align-element py-20" id="projects">
            <SectionTitle text="Projects" />
            <div className="py-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {
                    projects.map((project) => {
                        return <ProjectsCard key={project.id} {...project} />
                    })
                }
            </div>
        </section>
    )
}
export default Projects