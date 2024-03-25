import ProjectsCard from "./ProjectsCard"
import SectionTitle from "./SectionTitle"
import ProjectsData from "../assets/data/ProjectsData";
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section className="align-element py-20" id="projects">
            <SectionTitle text={t('titles.projects')} />
            <div className="py-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {
                    ProjectsData().map((project) => {
                        return <ProjectsCard key={project.id} {...project} />
                    })
                }
            </div>
        </section>
    )
}
export default Projects