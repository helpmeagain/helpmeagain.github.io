import ProjectsCard from "../organisms/ProjectsCard"
import SectionTitle from "../atoms/SectionTitle"
import ProjectsData from "../../assets/data/ProjectsData";
import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation();

    return (
        <section className="flex flex-col items-center p-20 w-screen bg-gradient-to-t from-violet-700/5 via-violet-950/5 to-violet-700/5" id="projects">
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